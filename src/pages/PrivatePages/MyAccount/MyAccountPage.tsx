import { TabsProps } from 'antd';
import Tabs from 'components/Tabs/Tabs';
import PageHeader from 'layout/PageHeader/PageHeader';
import PageWrapper from 'layout/PageWrapper/PageWrapper';

import AccountProfileForm from './AccountProfileForm/AccountProfileForm';
import CompanyProfileForm from './CompanyProfileForm/CompanyProfileForm';

const ACCOUNT_TABS: TabsProps['items'] = [
  {
    key: '1',
    label: 'Profile',
    children: <AccountProfileForm />,
  },
  {
    key: '2',
    label: 'Company',
    children: <CompanyProfileForm />,
  },
  {
    key: '3',
    label: 'Plan & Billing',
    children: 'Content of Tab Pane 3',
  },
];

const MyAccountPage = () => {
  const onChange = () => {
    // onChange(key: string) => handle tab change
  };

  return (
    <PageWrapper>
      <PageHeader title="My Account" />
      <Tabs
        defaultActiveKey="1"
        size="large"
        items={ACCOUNT_TABS}
        onChange={onChange}
      />
    </PageWrapper>
  );
};
export default MyAccountPage;
