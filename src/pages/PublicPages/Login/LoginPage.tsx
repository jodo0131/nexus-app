import { Link } from 'react-router-dom';
import NexusLogoWhite from 'assets/img/logo/nexus-logo-fff.svg';
import AuthWrapper from 'components/AuthWrapper/AuthWrapper';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import { Title } from 'components/Typography/Typography';
import { EPublicPaths } from 'models/TRoute';
import { Spacing } from 'theme/styles';

import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <AuthWrapper>
      <img
        src={NexusLogoWhite}
        alt="Nexus Logo in white"
        style={{ marginBottom: Spacing.LG }}
      />
      <Card title={<Title level={3}>Login.</Title>}>
        <LoginForm />
      </Card>
      <Button type="link" size="large">
        <Link to={`/${EPublicPaths.SignUp}`}>Sign up</Link>
      </Button>
    </AuthWrapper>
  );
};
export default LoginPage;
