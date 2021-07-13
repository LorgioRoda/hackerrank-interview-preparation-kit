function factorial(n){
    let result = 1
    for(let i = 0; i < n ; i++){
      result *= n - i
    }
    return result
}
