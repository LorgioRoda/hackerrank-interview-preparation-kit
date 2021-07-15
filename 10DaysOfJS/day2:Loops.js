function vowelsAndConsonants(s) {
    for(let i = 0; i < s.length ; i++){
        if(s.charAt(i).match(/[aeiou]/)){
            console.log(s.charAt(i))
        }
    }
    for(let i = 0; i < s.length ; i++){
        if(s.charAt(i).match(/[^aeiou]/)){
            console.log(s.charAt(i))
        }
    }
}