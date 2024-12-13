import { Link } from 'react-router-dom';
import { FileUnknownOutlined, ReadOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { ColumnType } from 'antd/lib/table';
import Button from 'components/Button/Button';
import IconText from 'components/IconText/IconText';
import { TClient } from 'models/TClient';
import { EPrivatePaths } from 'models/TRoute';
import { Color } from 'theme/styles';

export const ClientTableColumns: ColumnType<TClient>[] = [
  {
    title: 'Business Name',
    dataIndex: 'businessName',
    key: 'businessName',
    sorter: (a, b) => a.businessName.localeCompare(b.businessName),
  },
  {
    title: 'Client Name',
    dataIndex: 'clientName',
    key: 'clientName',
    sorter: (a, b) => a.clientName.localeCompare(b.clientName),
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
    // sorter: (a, b) => {
    //   const convertDate = (dateStr: string) => {
    //     const [month, day] = dateStr.split('/');
    //     return new Date(2024, Number(month) - 1, Number(day)); // Convert month and day to numbers
    //   };

    //   return (
    //     convertDate(a.lastReport).getTime() -
    //     convertDate(b.lastReport).getTime()
    //   );
    // },
    render: (date) =>
      date ? (
        <IconText
          icon={<ReadOutlined />}
          text={date}
          color={Color.PRIMARY_DEFAULT}
        />
      ) : (
        <IconText
          icon={<FileUnknownOutlined />}
          text=" No Reports"
          color={Color.DISABLED_TEXT}
        />
      ),
  },
  {
    title: '',
    dataIndex: 'viewClient',
    render: (_, record) => (
      <Flex justify="flex-end">
        <Button shape="round" ghost>
          <Link to={`/${EPrivatePaths.Clients}/${record.id}`}>View Client</Link>
        </Button>
      </Flex>
    ),
  },
];
