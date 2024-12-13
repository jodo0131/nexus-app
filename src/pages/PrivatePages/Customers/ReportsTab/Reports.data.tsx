import { ReadOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { ColumnType } from 'antd/lib/table';
import Badge from 'components/Badge/Badge';
import Button from 'components/Button/Button';
import { StyledText } from 'components/Typography/Typography.styles';
import { Spacing } from 'theme/styles';

export type Status = 'default' | 'success' | 'processing' | 'error' | 'warning';

export const ReportStatusMap: {
  [key in Status]: string;
} = {
  default: 'Default',
  success: 'Completed',
  processing: 'Processing',
  error: 'Error',
  warning: 'Warning',
};

interface ReportStatus {
  status: Status;
  daysToEdit?: string;
}

interface ReportResponse {
  id: string;
  businessName: string;
  lastReport: string;
  reportStatus: ReportStatus;
}

export const ReportColumns: ColumnType<ReportResponse>[] = [
  {
    title: 'Business Name',
    dataIndex: 'businessName',
    key: 'businessName',
    sorter: (a, b) => a.businessName.localeCompare(b.businessName),
  },
  {
    title: 'Last Report',
    dataIndex: 'lastReport',
    key: 'lastReport',
    sorter: (a, b) => {
      const convertDate = (dateStr: string) => {
        const [month, day] = dateStr.split('/');
        return new Date(2024, Number(month) - 1, Number(day)); // Convert month and day to numbers
      };

      return (
        convertDate(a.lastReport).getTime() -
        convertDate(b.lastReport).getTime()
      );
    },
    render: (date) => (
      <Button icon={<ReadOutlined />} type="link">
        {date}
      </Button>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'reportStatus',
    key: 'reportStatus',
    sorter: (a, b) => {
      const { status: statusA } = a.reportStatus;
      const { status: statusB } = b.reportStatus;

      return statusA.localeCompare(statusB);
    },
    render: (reportStatus: ReportStatus) => {
      const { status, daysToEdit } = reportStatus;

      if (status === 'processing')
        return <StyledText>{daysToEdit} Days to Edit</StyledText>;

      return <Badge status={status} text={ReportStatusMap[status]} />;
    },
  },
  {
    title: '',
    dataIndex: 'actions',
    key: 'actions',
    render: (_, record: ReportResponse) => {
      const { reportStatus } = record;

      return (
        <Flex justify="flex-end" gap={Spacing.SM}>
          <Button shape="round" ghost>
            View
          </Button>
          {reportStatus.status !== 'success' && (
            <Button shape="round" type="primary">
              Edit
            </Button>
          )}
        </Flex>
      );
    },
  },
];

export const ReportDataSource: ReportResponse[] = [
  {
    id: '1',
    businessName: 'Business Name 1',
    lastReport: '01/22',
    reportStatus: {
      status: 'processing',
      daysToEdit: '6',
    },
  },
  {
    id: '2',
    businessName: 'Business Name 2',
    lastReport: '01/22',
    reportStatus: {
      status: 'processing',
      daysToEdit: '12',
    },
  },
  {
    id: '3',
    businessName: 'Business Name 3',
    lastReport: '01/22',
    reportStatus: {
      status: 'processing',
      daysToEdit: '27',
    },
  },
  {
    id: '4',
    businessName: 'Business Name 4',
    lastReport: '01/22',
    reportStatus: {
      status: 'success',
    },
  },
  {
    id: '5',
    businessName: 'Business Name 5',
    lastReport: '01/22',
    reportStatus: {
      status: 'success',
    },
  },
  {
    id: '6',
    businessName: 'Business Name 6',
    lastReport: '01/22',
    reportStatus: {
      status: 'success',
    },
  },
  {
    id: '7',
    businessName: 'Business Name 7',
    lastReport: '01/22',
    reportStatus: {
      status: 'success',
    },
  },
  {
    id: '8',
    businessName: 'Business Name 8',
    lastReport: '01/22',
    reportStatus: {
      status: 'success',
    },
  },
  {
    id: '9',
    businessName: 'Business Name 9',
    lastReport: '01/22',
    reportStatus: {
      status: 'success',
    },
  },
  {
    id: '10',
    businessName: 'Business Name 10',
    lastReport: '01/22',
    reportStatus: {
      status: 'success',
    },
  },
  {
    id: '11',
    businessName: 'Business Name 11',
    lastReport: '01/22',
    reportStatus: {
      status: 'success',
    },
  },
  {
    id: '12',
    businessName: 'Business Name 12',
    lastReport: '01/22',
    reportStatus: {
      status: 'success',
    },
  },
];
