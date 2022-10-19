function solution(N, stages) {
    const answer = [];
    for(let i = 1; i <= N; i++){
        let tot = 0;
        let curr = 0;
        for(let j = 0; j < stages.length; j++){
            
            if(stages[j] >= i){
                //현재 스테이지 도전자 수
                tot++;
            }
            
            if(stages[j] === i){
                //실패한 사람
                curr++;
            }
            
        }
        answer.push([i, curr * 1000 /tot]);
    }
    answer.sort((a,b) => b[1]-a[1])
    return answer.map(m => m[0]);
}