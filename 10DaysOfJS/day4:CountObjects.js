function getCount(objects) {
    let result = 0;
    for(let i = 0; i < objects.length; i++){
        if(objects[i].x == objects[i].y){
            result++
        }
    }
    return result;
}