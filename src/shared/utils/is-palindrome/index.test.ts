import { isPalindrome } from '.';

describe('Test Plus function', () => {
  test('should return true for a palindrome', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });

  test('should return true for a single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('should return true for a palindrome with mixed case', () => {
    expect(isPalindrome('Noon')).toBe(true);
  });

  test('should return true for a palindrome with punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama!')).toBe(true);
  });
});
