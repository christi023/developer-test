//import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Table from 'react-bootstrap/Table';

const TableInfo = ({ itemList }) => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover variant="dark">
        <TableBody userData={itemList} />
      </Table>
    </div>
  );
};

export default TableInfo;
