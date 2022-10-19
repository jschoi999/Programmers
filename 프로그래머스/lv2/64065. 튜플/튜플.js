function solution(s) {
    const answer = [];
    const arr = s.replace(/},{/g, "@").replace(/{/g, "").replace(/}/g, "").split("@").map(m => m.split(","))
    arr.sort((a, b) => a.length - b.length);
    console.log(arr);
    
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            answer.push(+arr[i][0])
            continue;
        }
        let tmp = [...arr[i]];
        for(let j = 0; j < answer.length; j++){
            tmp.splice(tmp.indexOf(`${answer[j]}`), 1);
        }
        answer.push(+tmp[0]);
        
    }
    
    
    return answer;
}