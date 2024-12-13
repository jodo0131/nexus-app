import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Divider } from 'antd';
import Button from 'components/Button/Button';
import PopoverSelector from 'components/PopoverSelector/PopoverSelector';
import Tabs from 'components/Tabs/Tabs';
import TaxSummary from 'features/TaxSummary/TaxSummary';
import { TTaxForm } from 'models/TTaxForm';
import { setCurrentTaxform } from 'store/slices/current-taxform/current-taxform.slice';
// import { setSelectedTaxForm } from 'store/slices/selected/selected.slice';

const CURRENT_YEAR = new Date().getFullYear().toString();

type TaxTabsProps = {
  taxforms?: TTaxForm[];
};

const TaxTabs: React.FC<TaxTabsProps> = ({ taxforms }) => {
  const dispatch = useDispatch();

  const TAB_ITEMS = useMemo(
    () =>
      taxforms?.map((taxform: TTaxForm) => ({
        key: taxform.year.toString(),
        label: taxform.year.toString(),
        children: <TaxSummary />,
      })),
    [taxforms],
  );

  // if the current year is already in the list of the taxforms, don't show the '+ Add a New Year' button
  const isTaxformExist = useMemo(
    () => TAB_ITEMS?.some((item) => item.key === CURRENT_YEAR),
    [TAB_ITEMS],
  );

  const previousTaxforms = useMemo(
    () =>
      taxforms?.filter((taxform) => taxform.year.toString() !== CURRENT_YEAR),
    [taxforms],
  );

  const onDuplicateTaxForm = (taxform: TTaxForm) => {
    console.log('Duplicate taxform', taxform);
  };

  const onCreateNewTaxYear = () => {
    console.log('Create taxform');
  };

  const onYearChange = (key: string) => {
    const selectedTaxForm = taxforms?.find(
      (taxform) => taxform.year.toString() === key,
    );

    if (!selectedTaxForm) return;

    dispatch(setCurrentTaxform(selectedTaxForm));
  };

  const TAB_ITEMS_CREATE_TAX_YEAR = [
    ...(TAB_ITEMS || []),
    {
      key: 'new-tax-year',
      label: (
        <PopoverSelector
          label="+ Add a New Year"
          content={
            <>
              {previousTaxforms?.map((taxform: TTaxForm) => (
                <Button
                  key={taxform.year}
                  type="text"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDuplicateTaxForm(taxform);
                  }}
                >
                  Duplicate from {taxform.year}
                </Button>
              ))}
              <Divider style={{ padding: 0, margin: 0 }} />
              <Button
                type="text"
                onClick={(e) => {
                  e.stopPropagation();
                  onCreateNewTaxYear();
                }}
              >
                Create New Year
              </Button>
            </>
          }
          disabled={isTaxformExist}
        />
      ),
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      items={TAB_ITEMS_CREATE_TAX_YEAR}
      onChange={onYearChange}
    />
  );
};
export default TaxTabs;
