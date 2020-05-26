function checkInput(...numbers) {
  return numbers.every((number) => { return typeof number === 'number' });
}

const calculate = {
  add: (...numbers) => {
    if (checkInput(...numbers)) {
      return numbers.reduce((a, b) => a + b, 0);
    } else {
      throw 'All inputs must be a number';
    }
  },

  subtract: (...numbers) => {
    if (checkInput(...numbers)) {
      return numbers.reduce((a, b) => a - b);
    } else {
      throw 'All inputs must be a number';
    }
  },

  divide: (a, b) => {
    if (checkInput(a, b)) {
      return a / b;
    } else {
      throw 'All inputs must be a number';
    }
  },

  multiply: (...numbers) => {
    if (checkInput(...numbers)) {
      return numbers.reduce((a, b) => a * b);
    } else {
      throw 'All inputs must be a number';
    }
  }
}

module.exports = calculate;