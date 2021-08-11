function highAndLow(numbers){
    const arr = numbers.split(' ')
    const sort = arr.sort(function(a,b){return a - b})
    return `${Math.max(...sort)} ${Math.min(...sort)}`

  }