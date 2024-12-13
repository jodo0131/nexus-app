import { Link } from 'react-router-dom';
import { FileUnknownOutlined, ReadOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { ColumnType } from 'antd/lib/table';
import Button from 'components/Button/Button.tsx';
import { EPrivatePaths } from 'models/TRoute.ts';
import { TUser } from 'models/TUser.ts';

export const CustomersTableColumn: ColumnType<TUser>[] = [
  {
    title: 'Customer Name',
    dataIndex: 'businessName',
    key: 'businessName',
    sorter: (a, b) => {
      const aName = a.businessName ? a.businessName : '';
      const bName = b.businessName ? b.businessName : '';

      return aName.localeCompare(bName);
    },
  },
  {
    title: 'Client Name',
    dataIndex: 'fullName',
    key: 'fullName',
    sorter: (a, b) => a.fullName.localeCompare(b.fullName),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: 'Last Report',
    dataIndex: 'lastReport',
    key: 'lastReport',
    sorter: (a, b) => {
      const convertDate = (dateStr: string) => {
        const currentYear = new Date().getFullYear();

        const [month, day] = dateStr.split('/');
        return new Date(currentYear, Number(month) - 1, Number(day)); // Convert month and day to numbers
      };

      const aDate = a.lastReport ? convertDate(a.lastReport).getTime() : 0;
      const bDate = b.lastReport ? convertDate(b.lastReport).getTime() : 0;

      return aDate - bDate;
    },
    render: (date) =>
      date ? (
        <Button icon={<ReadOutlined />} type="link">
          {date}
        </Button>
      ) : (
        <Button icon={<FileUnknownOutlined />} type="link" disabled>
          No Reports
        </Button>
      ),
  },
  {
    title: '',
    dataIndex: 'viewCustomer',
    render: (_, record) => (
      <Flex justify="flex-end">
        <Link to={`/${EPrivatePaths.Customers}/${record.id}`}>
          <Button shape="round" ghost>
            View Customer
          </Button>
        </Link>
      </Flex>
    ),
  },
];
