function solution(n) {
    let answer = `${n}`.split("");
    answer.sort((a,b) => b-a);
    return parseInt(answer.join(""));
}