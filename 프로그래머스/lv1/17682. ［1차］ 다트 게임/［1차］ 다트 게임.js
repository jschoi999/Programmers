function solution(dartResult) {
    const matched = dartResult.match(/\d{1,2}\w/g);
    const score = matched.map(m => {
        let s = 0;
        if(m.indexOf("S") > -1){
            //S
            s = parseInt(m.replace("S", ""));
        }else if(m.indexOf("D") > -1){
            //D
            s = parseInt(m.replace("D", "")) ** 2;
        }else{
            //T
            s = parseInt(m.replace("T", "")) ** 3;
        }
        return s;
    });
    matched.forEach((m, idx) => {
        let inx = dartResult.indexOf(m);
        switch(dartResult[inx + 2]){
            case '*':
                score[idx - 1] = score[idx - 1] * 2;
                score[idx] = score[idx] * 2;
                break;
            case '#':
                score[idx] = -1 * score[idx];
                break;
        }
    })
    return score.reduce((acc, curr) => acc + curr);
}