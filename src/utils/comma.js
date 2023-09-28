const comma = (num) => {
  if (num === undefined || num === null) {
    return 0;
  }

  // eslint-disable-next-line no-restricted-globals
  if (typeof num === 'number' && isNaN(num)) {
    return 0;
  }

  if (typeof num === 'string') {
    // eslint-disable-next-line no-param-reassign, radix
    num = parseInt(num);
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default comma;
