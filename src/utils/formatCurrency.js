const getDecimal = (amount, decimal = 2) => {
  return String(amount).indexOf(".") === -1 ? amount : amount.toFixed(decimal);
};

export const formatCurrency = (number) => {
  if (number < 1e3) return getDecimal(number);
  if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(2) + "K";
  if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(2) + "M";
  if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(2) + "B";
  if (number >= 1e12) return +(number / 1e12).toFixed(2) + "T";
};
