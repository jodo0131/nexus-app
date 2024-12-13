import { useMemo } from 'react';
import Search from 'components/Search/Search';
import Table from 'components/Table/Table';
import PageHeader from 'layout/PageHeader/PageHeader';
import PageWrapper from 'layout/PageWrapper/PageWrapper';

import { ReportColumns, ReportDataSource } from './Reports.data';

const ReportsTab = () => {
  const generatedReports = useMemo(
    () =>
      ReportDataSource.filter(
        (report) => report.reportStatus.status === 'success',
      ),
    [ReportDataSource],
  );

  const onSearch = () => {
    // onSearch(value: string) => logic here
  };

  return (
    <PageWrapper>
      <PageHeader
        title="Reports"
        subtitle={`${generatedReports.length} Reports Generated`}
      />
      <Search size="large" onSearchSubmit={onSearch} placeholder="Search" />
      <Table columns={ReportColumns} dataSource={ReportDataSource} />
    </PageWrapper>
  );
};
export default ReportsTab;
