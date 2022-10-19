function solution(d, budget) {
    let answer = 0;
    let result = 0;
    d.sort((a,b) => a-b);
    for(let i = 0; i < d.length; i++){
        result += d[i]
        if(result <= budget){
            answer ++;
        }else{
            break;
        }
    }
    
    return answer;
}