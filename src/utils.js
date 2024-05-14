// Your code here
export function isPalindrome(word) {
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Invalid input");
  }
  const sanitizedWord = word.toLowerCase();
  return sanitizedWord === reverseString(sanitizedWord);
}

function reverseString(str) {
  return [...str].reverse().join("");
}
