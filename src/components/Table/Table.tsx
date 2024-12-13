import { TableProps } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import StyledTable from './Table.style';

interface GenericTableProps<T> extends TableProps<T> {
  columns: ColumnsType<T>;
}

const Table = <T,>(props: GenericTableProps<T>) => {
  const { columns, ...rest } = props;

  // @ts-ignore need to fix the proper column type
  return <StyledTable columns={columns} {...rest} />;
};

export default Table;
