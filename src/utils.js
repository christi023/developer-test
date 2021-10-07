const prefixData = (arr) => {
  // remove hashes
  // item has data prop, first element is #
  /*
  Header  Header 2
  info    sth else
  info    ...
  info    ...
  
  // each iteration, take the first, then the second
  
  {
    columns (headers): -> take the item.data[0]
    data: {
      ...16 items,
    }
  }
  
*/
  const cleanWithoutHashes = arr.filter((item) => item.data.length > 1);

  // Columns
  const dataColumns = cleanWithoutHashes[0] && cleanWithoutHashes[0].data.map((item) => item);
  const dataValues = [...cleanWithoutHashes].slice(1);

  /*
  // on each iteration, 

  let structuredData = []
  key & value
  dataValues.forEach((item, idx) => {    
    {
      [dataColumns[idx]] (take it from columns) : item.data[idx]
    }
  })
    return {
      [dataColumns[idx]]: item.data[idx]
    }
  */

  const structuredData = dataValues.map((item, idx) => {
    return { ...dataColumns };
  });

  // having 10 elements (any number, variable)
  let bufferArr = [];

  dataValues.forEach((item, idx) => {
    let item2 = Object.entries(structuredData[idx]).map(([key, val]) => ({
      [val]: null,
    }));
    bufferArr.push(item2);
  });
  /*
  
  */
  // we want to map through bufferArr.
  // on each iteration, map through the dataValues[idx]
  //
  let bigData = [];

  bufferArr.forEach((element) => {
    let finalElement = [];

    dataValues.forEach((val) => {
      val.data.forEach((dat, idx) => {
        finalElement.push({ [dataColumns[idx]]: dat });
      });
    });

    bigData.push(finalElement);
  });

  let promiseThisIsFinal = [];

  const personsLength = dataValues.length;

  // go through persons length - slice columns length - 16
  let slices = 0;
  for (let i = 0; i < personsLength - 1; i++) {
    slices += dataColumns.length;
    promiseThisIsFinal.push(bigData[0].slice(slices, slices + dataColumns.length));
  }

  return {
    columns: dataColumns,
    data: promiseThisIsFinal,
  };
};

export default prefixData;
