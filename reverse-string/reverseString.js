function reverseString(string) {
  let stringArray = string.split('');
  
  let leftIndex = 0;
  let rightIndex = stringArray.length -1;

  while (leftIndex < rightIndex) {
    const temp = stringArray[leftIndex];
    stringArray[leftIndex] = stringArray[rightIndex];
    stringArray[rightIndex] = temp;

    leftIndex += 1;
    rightIndex -= 1;
  }

  return stringArray.join('');
}

module.exports = reverseString;