function solution(n, words) {
    let answer = [0,0];
    
    for(let i = 0; i < words.length; i++){
        if(i !== 0){
            const prev = words[i - 1];
            if(prev[prev.length - 1] !== words[i].substring(0,1) || words.indexOf(words[i]) !== i){
                answer[0] = (i + 1) % n === 0 ? n : (i + 1) % n;
                answer[1] = Math.ceil((i +1) / n);
                break;
            }
        }
    }
    return answer;
}