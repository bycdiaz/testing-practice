function arrayAnalysis(array) {
  const length = arrayLength(array);
  const average = arrayAverage(array);
  const max = arraySort(array)[arraySort(array).length - 1];
  const min = arraySort(array)[0];
  const analysis = {
    average,
    min,
    max,
    length
  };

  function arrayLength(array) {
    return array.length;
  }
  
  function arrayAverage(array) {
    return array.reduce((a, b) => a + b, 0) / arrayLength(array);
  }

  function arraySort(array) {
    return array.sort((a, b) => a - b)
  }

  return analysis;
}

console.log(arrayAnalysis([22, 4, 16, 8, 10]));
// { "average": 12, "min": 4, "max": 22, "length": 5 }

module.exports = arrayAnalysis;