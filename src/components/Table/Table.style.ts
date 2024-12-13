import { Table } from 'antd';
import styled from 'styled-components';
import { BorderRadius } from 'theme/styles';

const StyledTable = styled(Table)`
  && {
    th:first-child {
      border-start-start-radius: ${BorderRadius.MD}px !important;
    }
    th:last-child {
      border-start-end-radius: ${BorderRadius.MD}px !important;
    }
  }
`;

export default StyledTable;
