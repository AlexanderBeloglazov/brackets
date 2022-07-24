module.exports = function check(str, bracketsConfig) {
  let checkArr = []

  let brackets = Object.fromEntries(bracketsConfig)

  for (let i = 0; i < str.length; i++) {
    
    checkArr.length === 0 ? checkArr.push(str[i]) : (str[i] === brackets[checkArr[checkArr.length - 1]] ? checkArr.pop() : checkArr.push(str[i])) 
   
    
  }

  if(checkArr.length === 0) {
    return true
  }
  else {
    return false
  }

}
