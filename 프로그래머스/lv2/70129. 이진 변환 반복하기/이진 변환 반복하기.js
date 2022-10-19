function solution(s) {
    const answer = [0, 0];
    while(s !== '1'){
        const tmp = s.replace(/0/g, '');
        answer[0]++;
        answer[1] += s.length - tmp.length;
        s = Number(tmp.length).toString(2);
    }
    return answer;
}