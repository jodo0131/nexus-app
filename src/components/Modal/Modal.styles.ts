import { Modal } from 'antd';
import styled from 'styled-components';
import { MODAL_HEIGHT, Spacing } from 'theme/styles';

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    .ant-modal-title {
      padding: ${Spacing.LG}px ${Spacing.LG}px 0;
    }
    .ant-modal-body {
      padding: ${Spacing.LG}px;
      max-height: ${MODAL_HEIGHT};
      overflow-y: auto;
    }
    .ant-modal-footer {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding: ${Spacing.LG}px;
    }
  }
`;

export default StyledModal;
