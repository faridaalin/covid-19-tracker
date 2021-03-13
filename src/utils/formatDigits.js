const formatDigits = (digit) => {
  let number = digit;
  return (
    number && number.toLocaleString({ undefined, minimumFractionDigits: 2 })
  );
};

export default formatDigits;
