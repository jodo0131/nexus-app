import { Flex } from 'antd';
import NexusLogoBlack from 'assets/img/logo/nexus-logo-000.svg';
import BrandingFeaturesImage from 'assets/img/signup-screens/screen3.png';
import AuthWrapper from 'components/AuthWrapper/AuthWrapper';
import { Text, Title } from 'components/Typography/Typography';
import BrandingForm from 'pages/PublicPages/Signup/Forms/BrandingForm';
import { Color, FontSize, Spacing } from 'theme/styles';

const BrandingScreen = () => {
  return (
    <AuthWrapper bgcolor={Color.WHITE}>
      <Flex>
        <img src={BrandingFeaturesImage} alt="A Paper Monster" />
        <Flex
          vertical
          justify="flex-start"
          gap={Spacing.LG}
          style={{ padding: Spacing.XL }}
        >
          <img src={NexusLogoBlack} width={100} alt="Nexus Logo" />
          <Flex vertical>
            <Title level={2}>Setup your company branding.</Title>
          </Flex>

          <Text size={FontSize.LG}>
            Give your reports the personal zazz that conveys your brand.
          </Text>

          <BrandingForm />
        </Flex>
      </Flex>
    </AuthWrapper>
  );
};

export default BrandingScreen;
