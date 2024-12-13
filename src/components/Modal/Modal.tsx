import { FC, ReactNode } from 'react';
import { ModalProps } from 'antd';
import { Title } from 'components/Typography/Typography';

import StyledModal from './Modal.styles';

const Modal: FC<Omit<ModalProps, 'title'> & { title: ReactNode }> = (props) => {
  const { title } = props;

  const modalType = typeof title;

  return (
    <StyledModal
      {...props}
      centered
      title={modalType === 'string' ? <Title level={2}>{title}</Title> : title}
    />
  );
};
export default Modal;
