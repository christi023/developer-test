import React, { useState } from 'react';
import CsvParse from '@vtex/react-csv-parse';
import TableInfo from '../../Components/Table/TableInfo';
// keys
import keys from '../data.js/keys';

const FileReader = () => {
  // Save file data to state
  const [data, setData] = useState([]);

  // This will handle file data
  const handleData = (data) => {
    setData(data);
    console.log(data[0]);
  };

  // err
  const handleError = (err) => {
    setData(err);
  };

  return (
    <div>
      <CsvParse
        keys={keys}
        onDataUploaded={handleData}
        onError={handleError}
        render={(onChange) => (
          <input type="file" accept=".csv,.xlsx,.xls,.txt" onChange={onChange} />
        )}
      />
      <TableInfo itemList={data} />
    </div>
  );
};

export default FileReader;
