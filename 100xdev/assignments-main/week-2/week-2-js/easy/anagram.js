/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const sortedstr1 = str1.toLowerCase().split("").sort().join("")
  const sortedstr2 = str2.toLowerCase().split("").sort().join("")
  // console.log(sortedstr1)
  // console.log(sortedstr2)
  return (sortedstr1==sortedstr2)

}

console.log(isAnagram("Affan", "Naffa"))

module.exports = isAnagram;
