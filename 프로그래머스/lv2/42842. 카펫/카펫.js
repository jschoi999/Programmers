function solution(brown, yellow) {
    var answer = [];
    const sum = brown + yellow;
    let w,h = 0;
    for(i = 3; i <= brown; i++){
        if(sum % i === 0){
            const tmp = sum / i;
            if(brown === ((tmp * 2) + (i * 2) - 4)){
                w = i;
                h = tmp
                break;
            }
        }
    }
    if(h > w) [w,h] = [h,w];
    return [w,h];
}