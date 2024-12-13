import React from 'react';
import { Flex } from 'antd';
import Checkmark from 'assets/img/icons/check-icon-red.svg';
import NexusLogoBlack from 'assets/img/logo/nexus-logo-000.svg'; // Import the SVG
import SignUpFeaturedImage from 'assets/img/signup-screens/screen1.png';
import AuthWrapper from 'components/AuthWrapper/AuthWrapper';
import { Text, Title } from 'components/Typography/Typography';
import SignUpForm from 'pages/PublicPages/Signup/Forms/SignUpForm';
import { Color, FontSize, FontWeight, Spacing } from 'theme/styles';

const checkIcon: React.CSSProperties = {
  width: 18,
  height: 18,
  marginTop: 5,
};

const bulletPoints = [
  {
    id: 1,
    text: 'Save the day with customized nexus reports that protect your clients.',
    weight: FontWeight.REGULAR,
  },
  {
    id: 2,
    text: 'Generate in 20 minutes or less with common tax information.',
    weight: FontWeight.REGULAR,
  },
  {
    id: 3,
    text: 'Stylize each report with your company’s branding.',
    weight: FontWeight.REGULAR,
  },
  {
    id: 4,
    text: 'Always up-to-date with current tax law.',
    weight: FontWeight.REGULAR,
  },
  {
    id: 5,
    text: 'Your first report is free!*',
    weight: FontWeight.BOLD,
  },
];

const SignUpScreen = () => {
  return (
    <AuthWrapper bgcolor={Color.WHITE}>
      <Flex>
        <img src={SignUpFeaturedImage} alt="A Paper Monster" />
        <Flex
          vertical
          justify="center"
          gap={Spacing.LG}
          style={{ padding: Spacing.XL }}
        >
          <img src={NexusLogoBlack} width={100} alt="Nexus Logo" />
          <Flex vertical>
            <Title level={2} weight={FontWeight.REGULAR}>
              Avoid the tax monster.
            </Title>
            <Title level={2}>Protext your clients with Nexus Report.</Title>
          </Flex>

          <Flex vertical>
            {bulletPoints.map((bullet) => (
              <Flex key={bullet.id} gap={Spacing.XS}>
                <img src={Checkmark} alt="Red Checkmark" style={checkIcon} />
                <Text size={FontSize.LG} weight={bullet.weight}>
                  {bullet.text}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Title level={3}>Signup Today.</Title>

          <SignUpForm />
        </Flex>
      </Flex>
    </AuthWrapper>
  );
};

export default SignUpScreen;
