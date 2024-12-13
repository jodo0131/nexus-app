import { Button } from 'antd';
import styled from 'styled-components';
import { Color } from 'theme/styles';

export const StyledButton = styled(Button)`
  &&.ant-btn {
    &-default,
    &-primary,
    &-link,
    &-background-ghost {
      border: 0;
      outline: 0;
    }

    &-default {
      border: 1px solid ${Color.BORDER_COLOR};
    }
    &-primary {
      color: ${Color.WHITE};
      background-color: ${Color.PRIMARY_DEFAULT};

      &:disabled {
        border: 1px solid ${Color.BORDER_COLOR};
        color: ${Color.DISABLED_TEXT};
        background-color: ${Color.DISABLED_BG};
        cursor: not-allowed;
      }
    }
    &-link {
      padding: 0;
      color: ${Color.PRIMARY_DEFAULT};

      & a {
        color: ${Color.PRIMARY_DEFAULT};
      }
    }
    &-background-ghost {
      color: ${Color.PRIMARY_DEFAULT};
      border: 1px solid ${Color.PRIMARY_DEFAULT};

      & a {
        color: ${Color.PRIMARY_DEFAULT};
      }
    }
  }
`;

export const StyledSecondaryButton = styled(Button)`
  &&.ant-btn {
    border: 0;

    color: ${Color.WHITE};
    background-color: ${Color.BLACK};

    &:hover {
      opacity: 0.7;
      color: ${Color.WHITE};
      background-color: ${Color.BLACK};
    }
  }
`;

export default StyledButton;
