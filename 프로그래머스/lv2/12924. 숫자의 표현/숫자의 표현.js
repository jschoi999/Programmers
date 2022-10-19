function solution(n) {
    let answer = 0;
    let sum = 0;
    let curr = 0;
    for(let i = 1; i <= n; i++){
        sum = i;
        curr = i;
        for(let j = i + 1 ; j <= n; j++ ){
            if(curr + 1 !== j){
                break;
            }
            sum += j;
            if(sum > n){
                break;
            }else if(sum === n){
                answer++;
                break;
            }else{
                curr = j;
            }
            
        }
    }
    return answer + 1;
}