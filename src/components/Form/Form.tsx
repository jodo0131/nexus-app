import { Color, FontWeight } from 'theme/styles';

import { StyledForm, StyledFormItem } from './Form.styles';
import { TFormItemProps, TFormProps } from './Form.types';

export const Form = ({ ...props }: TFormProps) => {
  const { layout } = props;
  return <StyledForm layout={layout || 'vertical'} {...props} />;
};

export const FormItem = ({ label, optional, ...props }: TFormItemProps) => {
  return (
    <StyledFormItem
      label={
        label && (
          <>
            {label}
            {optional && (
              <span
                style={{
                  fontWeight: FontWeight.REGULAR,
                  color: Color.DISABLED_TEXT,
                }}
              >
                &nbsp;(Optional)
              </span>
            )}
          </>
        )
      }
      {...props}
    />
  );
};
