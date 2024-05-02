/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(s, t) {
   const mp=new Map();
    if(s.length!=t.length){
        return false;
    }
    for(const char of s){
        mp.set(char,(mp.get(char)||0)+1);
    }
    for(const char of t){
        if(!mp.has(char)){
            return false;
        }

        mp.set(char,(mp.get(char))-1);
    }
    for(const [key,value] of mp){
        if(value!=0){
            return false;
        }
    }
    return true;





}

module.exports = isAnagram;
