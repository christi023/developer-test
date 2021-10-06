import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';
import prefixData from './utils';

const buttonRef = React.createRef();

export default function Upload() {
  // state
  const [dataVariable, setDataVariable] = useState([]);

  const handleOpenDialog = (e) => {
    // Note that the ref is set async
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  // when file is uploaded ,store such data to state
  const handleOnFileLoad = (data) => {
    if (dataVariable) {
      return setDataVariable(data); // setState data
    }
  };

  // imported function that do the logic
  const dataToMap = prefixData(dataVariable);
  console.log('dddd', dataToMap.data);

  const handleOnError = (err, file, inputElem, reason) => {
    if (err) {
      throw err;
    }
  };

  const handleOnRemoveFile = (data) => {
    return data;
  };

  const handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  return (
    <>
      <h5>Upload CSV file </h5>
      <CSVReader
        cssClass="csv-reader-input"
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }) => (
          <aside
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 10,
            }}
          >
            <button
              type="button"
              onClick={handleOpenDialog}
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                width: '40%',
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              Browse file
            </button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ccc',
                height: 45,
                lineHeight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 13,
                paddingTop: 3,
                width: '60%',
              }}
            >
              {file && file.name}
            </div>

            <button
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 20,
                paddingRight: 20,
              }}
              onClick={handleRemoveFile}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
    </>
  );
}
