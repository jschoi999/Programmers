function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    for(let i = 0; i < lost.length; i++){
        const rdx = reserve.indexOf(lost[i]);
        if(rdx !== -1){
            reserve.splice(rdx, 1);
            lost.splice(i, 1);
            answer++;
            i--;
        }
    }
    
    
    for(let i = 1; i <= n; i++){
        if(lost.indexOf(i) !== -1){
            //lost배열
            let ldx = lost.indexOf(i);
            //reserve배열
            let rdx1 = reserve.indexOf(i + 1);
            let rdx2 = reserve.indexOf(i - 1);
            if(rdx2 !== -1){
                //앞사람이 가지고 있을 경우
                reserve.splice(rdx2, 1);
                lost.splice(ldx, 1);
                answer++;
            }else if(rdx1 !== -1){
                //뒷사람이 가지고있을 경우
                reserve.splice(rdx1, 1);
                lost.splice(ldx, 1);
                answer++;
            }
        }
    }
    
    return answer;
}