const isEven = (num) => {
  if (num < 2) return false;
  if (num % 2 > 0) return false;

  return true;
};

export default isEven;
