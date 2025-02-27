export const isPalindrome = (str: string): boolean => {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  return cleanedStr === cleanedStr.split('').reverse().join('');
};
