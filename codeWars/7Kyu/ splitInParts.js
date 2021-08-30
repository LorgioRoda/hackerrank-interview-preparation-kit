function splitInParts(s, partLength){
    let newStr = ''
    for(let i = 0; i < s.length; i++){
      if(i % partLength === 0){
        newStr += ` `+s[i]
      } else {
        newStr += s[i]
      }
    }
    return newStr.slice(1)
  }