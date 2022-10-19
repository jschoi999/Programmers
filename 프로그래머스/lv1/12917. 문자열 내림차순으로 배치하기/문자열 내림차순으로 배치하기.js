function solution(s) {
    let answer = s.split("");
    answer.sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0));
    return answer.join("");
}