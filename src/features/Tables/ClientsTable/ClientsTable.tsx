import Table from 'components/Table/Table';
import { TClient } from 'models/TClient';

import { ClientTableColumns } from './clients.table.data';

const ClientsTable = ({ data }: { data: TClient[] }) => {
  return <Table columns={ClientTableColumns} dataSource={data} />;
};
export default ClientsTable;
