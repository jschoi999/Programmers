function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i++){
        if(i === 1) continue;
        
        let sqrt = Math.sqrt(i);
        let bool = true;
        for(let j = 2; j <= sqrt; j++){
            if(i % j === 0){
                bool = false;
                break;
            }
        }
        if(bool) answer++;
    }
    return answer;
}