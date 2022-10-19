function solution(progresses, speeds) {
    let answer = [1];
    
    const ca = progresses.map((m ,idx) => Math.ceil((100 - progresses[idx]) / speeds[idx]));
    console.log(ca);
    let [diff] = ca.splice(0,1);
    while(true){
        if(ca.length === 0){
            break;
        }
        const [temp] = ca.splice(0,1);
        if(diff >= temp){
            answer[answer.length -1] ++
        }else{
            diff = temp;
            answer.push(1);
        }
        
    }
    
    
    return answer;
}