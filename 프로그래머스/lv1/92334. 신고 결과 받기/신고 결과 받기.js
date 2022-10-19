function solution(list, report, k) {
    const answer = [];
    answer.length = list.length;
    answer.fill(0);

    const uqr = [...new Set(report)].map(n => [n.split(' ')[0],n.split(' ')[1]]);
    const stopUser = [];
    list.forEach(l => {
        let count = 0;
        uqr.forEach(u => {
            if(l === u[1]){
                count ++;
            }
        });
        if(count >= k){
            stopUser.push(l);
        }
    });
    
    list.forEach((l,idx) => {
        uqr.forEach(u => {
            if(l === u[0]){
                stopUser.forEach(s => {
                    if(s === u[1]){
                        answer[idx]++;
                    }
                });
            }
        });
    });
    
    
    
    return answer;
}