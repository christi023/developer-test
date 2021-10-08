//import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Table from 'react-bootstrap/Table';

const TableInfo = ({ itemList }) => {
  return (
    <Table striped bordered hover variant>
      <TableBody userData={itemList} />
    </Table>
  );
};

export default TableInfo;
