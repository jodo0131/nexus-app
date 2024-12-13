import { CSSProperties } from 'react';
import { Divider, Flex } from 'antd';
import NexusLogoBlack from 'assets/img/logo/nexus-logo-000.svg';
import IntroScreenFeaturedImage from 'assets/img/signup-screens/screen2.png';
import AuthWrapper from 'components/AuthWrapper/AuthWrapper';
import Button from 'components/Button/Button';
import { Text, Title } from 'components/Typography/Typography';
import { Color, FontSize, Spacing } from 'theme/styles';

const Circle: CSSProperties = {
  position: 'relative',
  width: 48,
  height: 48,
  borderRadius: '50%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: Color.PRIMARY_DEFAULT,
  color: Color.WHITE,

  fontSize: FontSize.XL,
};

const Line: CSSProperties = {
  width: 2,
  height: Spacing.BASE,
  marginLeft: Spacing.LG,
  backgroundColor: Color.PRIMARY_DEFAULT,
};

const Instructions = [
  {
    key: 1,
    value: 'Create a Client.',
  },
  {
    key: 2,
    value: 'Start a new tax year.',
  },
  {
    key: 3,
    value: 'About 30 minutes of easy data entry.',
  },
  {
    key: 4,
    value: 'Generate a report.',
  },
  {
    key: 5,
    value: 'Ship it.',
  },
];

const IntroScreen = () => {
  const onSubmit = () => {
    console.log('Get Started!');
  };

  return (
    <AuthWrapper bgcolor={Color.WHITE}>
      <Flex>
        <img src={IntroScreenFeaturedImage} alt="A Paper Monster" />
        <Flex
          vertical
          justify="flex-start"
          gap={Spacing.LG}
          style={{ padding: Spacing.XL }}
        >
          <img src={NexusLogoBlack} width={100} alt="Nexus Logo" />
          <Flex vertical>
            <Title level={2}>We make nexus studies easy.</Title>
          </Flex>

          <Text size={FontSize.LG}>Here’s what to expect...</Text>

          <Flex vertical gap={Spacing.XS}>
            {Instructions.map((instruction, index) => (
              <Flex
                vertical
                align="flex-start"
                gap={Spacing.XS}
                key={instruction.key}
              >
                <Flex align="center" gap={Spacing.BASE}>
                  <div style={Circle}>{instruction.key}</div>
                  <Title level={3}>{instruction.value}</Title>
                </Flex>
                {index < Instructions.length - 1 && <div style={Line} />}
              </Flex>
            ))}
          </Flex>

          <Text size={FontSize.LG}>That’s it. See you on the other side.</Text>

          <Divider />

          <Flex>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              onClick={onSubmit}
            >
              Get Started!
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </AuthWrapper>
  );
};

export default IntroScreen;
