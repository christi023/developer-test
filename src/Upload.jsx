import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { CSVReader } from 'react-papaparse';
import prefixData from './utils';
//import './Upload.css';
//import Table from './Table.jsx';
const buttonRef = React.createRef();

export default function Upload(props) {
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
      setDataVariable(data); // setState data
    }
  };

  // imported function that do the logic
  const dataToMap = prefixData(dataVariable);
  console.log('dddd', dataToMap.data);
  /*
    const petList = Object.entries(dataToMap).map(([key, value]) => {
    return (
      <>
        <tr key={key}>{value}</tr>
      </>
    );
  });

  //console.log('yyyyyyy', petList[1].props.children.props.children);
 // console.log('tttt', petList[0].props.children.props.children);
*/

  /*for (let i = 0; i < petList.length; i++) {
     (petList[0].props.children.props.children[i] === petList[1].props.children.props.children[i]) ? (<th></th>): ()
  }*/

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
      <br />
      {/*
      <div>
        <>
          {/*  <table>
          // THIS IS A CLEANER WAY WITH OBJECT ENTRIES
              //  console.log('ffff', row);
              Object.entries(dataToMap).map(([key, value]) => {
                console.log('aaaa', key); // key id columns or data
                console.log('bbbb', value); // array
                // for (let i = 0; i < dataToMap.length; i++) {
                /*  (petList[0].props.children.props.children[i] === petList[1].props.children.props.children[i]) ? (<th></th>) : ''
                // 
                return (
                  <>
                    <tr>
                      <th>{key}</th>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td>{value}</td>
                    </tr>
                  </>
                );
              }) 
            }
          </table>
        </>
          </div> */}
      <Table striped bordered hover>
        {dataToMap.data &&
          dataToMap.data.map((row, data) => {
            console.log('ffff', row);
            console.log('data', data);
            // return (
            //   <div>
            //     <div>ClinicNr{row.CLINIC_NO}</div>
            //   </div>
            // );
            return row.map((patient) => {
              console.log('patient', patient);
              let k = '';
              let v = '';
              for (const [key, value] of Object.entries(patient)) {
                k = key;
                v = value;
              }
              return (
                <>
                  <tr key={data}>
                    <th>{k}</th>
                  </tr>
                  <td>{v}</td>
                </>
              );
            });
          })}
      </Table>
      {/*
      <div>
        <>
          <table>
              <tbody>
              {dataToMap.data &&
                dataToMap.data.map((row, data) => {
                  //  console.log('ffff', row);
                  return row.map((patient) => {
                    console.log('patient', patient);

                    let k = '';
                    let v = '';
                    for (const [key, value] of Object.entries(patient)) {
                      k = key;
                      v = value;
                    }

                    return (
                      <>
                        <tr key={data}>
                          <th>{k}</th>
                        </tr>
                        <tr key={data}>
                          <td>{v}</td>

                      
                        </tr>
                      </>
                    );
                  });
                })}
            </tbody>
          </table>
        </>
              </div> */}
    </>
  );
}
