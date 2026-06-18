export const validatePhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone);
};

export const validateAmount = (amount) => {
  return !isNaN(amount) && Number(amount) > 0;
};