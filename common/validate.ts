export const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
};

export const validatePassowrd = (password: string): boolean => {
  const regex = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i;
  return regex.test(password);
};
