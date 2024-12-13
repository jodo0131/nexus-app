import React from 'react';
import { Flex, Spin } from 'antd';
import { useLoading } from 'context/LoadingContext';
import { SIDER_WIDTH } from 'theme/styles';

const LoadingScreen: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        position: 'fixed',
        top: 0,
        left: SIDER_WIDTH,
        width: `calc(100% - ${SIDER_WIDTH})`,
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      }}
    >
      <Spin size="large" />
    </Flex>
  );
};

export default LoadingScreen;
