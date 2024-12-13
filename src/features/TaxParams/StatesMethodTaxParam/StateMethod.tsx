import { useSelector } from 'react-redux';
import { Divider } from 'antd';
import StateSelect from 'components/StateSelect/StateSelect';
import { TitleSubtitle } from 'components/Typography/Typography';
import { TStateValue } from 'models/TState';
import { TStateMethodField } from 'models/TTaxConfig';
import { TTaxParamStateMethodValue } from 'models/TTaxParam';
import { InitialState } from 'store/state';

const StateMethodSelect = ({
  isNotApplicableChecked,
  fields,
  methods,
  setMethods,
}: {
  isNotApplicableChecked: boolean;
  fields: TStateMethodField[];
  methods: TTaxParamStateMethodValue[];
  setMethods: (methods: TTaxParamStateMethodValue[]) => void;
}) => {
  const selectedTaxForm = useSelector(
    (state: InitialState) => state.currentTaxform,
  );

  if (isNotApplicableChecked) return null;

  return (
    <>
      {methods.length > 0 && (
        <>
          <Divider style={{ margin: 0 }} />
          <TitleSubtitle
            title="Select States."
            level={4}
            subtitle={`Select all the ways the organization advertised in ${selectedTaxForm?.year}`}
          />
        </>
      )}
      {methods.map((method) => {
        const currentMethod = method.method;
        const currentStates = method.state;

        return (
          <StateSelect
            key={currentMethod}
            label={
              fields?.find((field) => field.name === currentMethod)?.question ||
              'Select a State'
            }
            placeholder="Select a State"
            values={currentStates}
            onChange={(selectedStates: TStateValue[]) => {
              const updatedMethods = methods.map((m) => {
                if (m.method === currentMethod) {
                  return { ...m, state: selectedStates };
                }
                return m;
              });

              setMethods(updatedMethods);
            }}
          />
        );
      })}
    </>
  );
};

export default StateMethodSelect;
