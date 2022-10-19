function solution(n, m) {
    const answer = [];
    if(n > m){
        [n, m] = [m, n];
    }
    
    let [min, max] = [n, m];
    
    while(true){
        const div =  max % min;
        if(div === 0){
            answer.push(min);
            answer.push((n * m) / min );
            break;
        }
        [min, max] = [div, min];
        
    }
    
    return answer;
}