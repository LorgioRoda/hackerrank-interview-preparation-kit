function positiveSum(arr) {
    let total = 0
    const result = arr.filter( number => number >= 1)
    for(let i = 0; i < result.length; i++){
        total += result[i]
    }
    return total
}

