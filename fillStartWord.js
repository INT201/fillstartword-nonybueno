const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word == null || undefined){
    return undefined;
  }else if(word.startsWith(startWord)){ 
      return word;
  }else{
    return `${startWord}${word}`;
  } 
}
module.exports = fillStartWord
