import Form from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import styled from 'styled-components';

export const StyledForm = styled(Form)``;
export const StyledFormItem = styled(FormItem)`
  && {
    min-width: 320px;
    margin: 0;

    .ant-form-item-label {
      font-weight: ${(props) => props.theme.FontWeight.BOLD};
    }
    .ant-form-item-explain-error {
      font-size: ${(props) => props.theme.FontSize.SM}px;
    }
  }
`;
