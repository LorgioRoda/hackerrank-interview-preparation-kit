function solution(N) {
    let counter = "L"
    for(let i = 1; i <= N ; i++){
        if(i < N){
            console.log("L")
            counter += "L"
        } else if (i === N){
            console.log(counter)
        }
    }
}
