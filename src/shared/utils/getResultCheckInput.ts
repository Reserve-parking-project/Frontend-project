export const getResultCheckingInput = (str: string) => {
  const letters = str.split('');
  const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  return letters.some((item) => regex.test(item));
};
