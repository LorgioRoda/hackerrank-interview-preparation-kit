const numbers = [1, -28, 88, 200, 77]
function findLargest(numbers){
   return numbers.sort(function(a,b){return a - b}).pop()
}

console.log(findLargest(numbers))
