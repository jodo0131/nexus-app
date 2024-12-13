import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import BoxedIndicator, {
  BoxedIndicatorType,
} from 'components/BoxedIndicator/BoxedIndicator';
import Button from 'components/Button/Button';
import { Text } from 'components/Typography/Typography';
import useValidateTaxForm from 'hooks/useValidateTaxForm';
import { EPrivatePaths } from 'models/TRoute';
import { InitialState } from 'store/state';
import { calculateDaysDifference, getMonthDayYear } from 'utils/dateUtils';
import { v4 as uuidv4 } from 'uuid';

const TaxSummaryIndicator = () => {
  const navigate = useNavigate();

  const selectedTaxForm = useSelector(
    (state: InitialState) => state.currentTaxform,
  );

  const { isValid, isExpired } = useValidateTaxForm();

  const handleGenerateReport = () => {
    const reportId = uuidv4();
    navigate(`/${EPrivatePaths.Report}?id=${reportId}`);
  };

  const handleSeeReport = () => {
    console.log('SEE REPORT: ', selectedTaxForm);
  };

  return (
    <>
      {/* If no compiled record yet and the data set is not valid */}
      {!selectedTaxForm?.compiledDate && !isValid && (
        <BoxedIndicator type={BoxedIndicatorType.DISABLED} width="70%">
          <Text>There is still more to fill out before report generation.</Text>
          <Button
            type="primary"
            disabled={!isValid}
            onClick={handleGenerateReport}
            icon={<PlusOutlined />}
          >
            Generate a Report
          </Button>
        </BoxedIndicator>
      )}

      {/* If no compiled record yet but the data set is valid */}
      {!selectedTaxForm?.compiledDate && isValid && (
        <Button
          type="primary"
          disabled={!isValid}
          onClick={handleGenerateReport}
          icon={<PlusOutlined />}
        >
          Generate a Report
        </Button>
      )}

      {/* If already compiled and the generated report has already expired */}
      {selectedTaxForm?.compiledDate && isExpired && (
        <BoxedIndicator type={BoxedIndicatorType.DISABLED} width="70%">
          <Text>
            A report was last complied for this year on
            {` ${getMonthDayYear(selectedTaxForm?.compiledDate)}`}
          </Text>
          <Button type="primary" onClick={handleSeeReport}>
            See Report
          </Button>
        </BoxedIndicator>
      )}

      {/* If already compiled and the generated report has not yet expired */}
      {selectedTaxForm?.compiledDate && !isExpired && (
        <BoxedIndicator type={BoxedIndicatorType.WARNING} width="70%">
          <Text type="danger">
            You have
            {` ${calculateDaysDifference(selectedTaxForm?.compiledDate)} `}
            days left to edit this report.
          </Text>
          <Button type="primary" onClick={handleSeeReport}>
            See Report
          </Button>
        </BoxedIndicator>
      )}
    </>
  );
};

export default TaxSummaryIndicator;
