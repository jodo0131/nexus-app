import { Flex } from 'antd';
import AuthWrapper from 'components/AuthWrapper/AuthWrapper';
import { useSignUpStep } from 'context/SignupStepContext';
import { Color } from 'theme/styles';

import BrandingScreen from './Screens/BrandingScreen';
import IntroScreen from './Screens/IntroScreen';
import SignUpScreen from './Screens/SignUpScreen';

const SignupPage = () => {
  const { currentSignupStep } = useSignUpStep();

  return (
    <AuthWrapper bgcolor={Color.WHITE}>
      <Flex>
        {currentSignupStep === 1 && <SignUpScreen />}
        {currentSignupStep === 2 && <BrandingScreen />}
        {currentSignupStep === 3 && <IntroScreen />}
      </Flex>
    </AuthWrapper>
  );
};

export default SignupPage;
