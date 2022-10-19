function solution(numbers, hand) {
    let answer = '';
    const pad = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['*','0','#']
    ]
    let lh = [3,0]; //왼손 위치
    let rh = [3,2]; //오른손 위치
    numbers.forEach(n => {
        let px = []; //현재 값의 행번호, 열번호
        pad.forEach((p, pIdx) => {
           if(p.indexOf(`${n}`) > -1){
               px = [pIdx, p.indexOf(`${n}`)];
           }
        });
        if(px[1] === 0){
            //왼쪽
            answer += 'L';
            lh = px;
        }else if(px[1] === 2){
            //오른쪽
            answer += 'R';
            rh = px;
        }else{
            //가운데
            const ld = Math.abs(lh[0] - px[0]) + Math.abs(lh[1] - px[1]); //왼손에서의 거리
            const rd = Math.abs(rh[0] - px[0]) + Math.abs(rh[1] - px[1]); //오른손에서의 거리
            if(ld > rd){
                //오른손이 가까울 경우
                answer += 'R';
                rh = px;
            }else if(ld < rd){
                //왼손이 가까울 경우
                answer += 'L';
                lh = px;
            }else{
                //같을 경우
                if(hand === 'right'){
                    //오른손잡이일 경우
                    answer += 'R';
                    rh = px;
                }else{
                    //왼손잡이일 경우
                    answer += 'L';
                    lh = px;
                }
            }
            
        }
        
    });
    return answer;
}