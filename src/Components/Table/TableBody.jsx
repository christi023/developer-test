const TableBody = ({ userData }) => {
  return (
    <tbody>
      {userData.map((data, index) => {
        console.log('mmm', data);
        return (
          <tr key={index}>
            <th scope="row">{data.index}</th>
            <td>{data.CLINIC_NO}</td>
            <td>{data.BARCODE}</td>
            <td>{data.PATIENT_ID}</td>
            <td>{data.PATIENT_NAME}</td>
            <td>{data.DOB}</td>
            <td>{data.GENDER}</td>
            <td>{data.COLLECTIONDATE}</td>
            <td>{data.COLLECTIONTIME}</td>
            <td>{data.TESTCODE}</td>
            <td>{data.TESTNAME}</td>
            <td>{data.RESULT}</td>
            <td>{data.UNIT}</td>
            <td>{data.REFRANGELOW}</td>
            <td>{data.REFRANGEHIGH}</td>
            <td>{data.NOTE}</td>
            <td>{data.NONSPECREFS}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
