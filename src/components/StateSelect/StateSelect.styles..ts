import { Select } from 'antd';
import styled from 'styled-components';
import { BorderRadius, Color } from 'theme/styles';

const StyledSelect = styled(Select)`
  && {
    .ant-select-selection-item {
      color: ${Color.WHITE};
      background-color: ${Color.PRIMARY_DEFAULT};
      border-radius: ${BorderRadius.LG}px;

      & svg {
        fill: ${Color.WHITE};
      }
    }
  }
`;

export default StyledSelect;
