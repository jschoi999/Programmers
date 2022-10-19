function solution(arr, divisor) {
    let answer = arr.filter(a => a % divisor === 0);
    answer.sort((a,b) => a-b);
    return answer.length === 0 ? [-1] : answer;
}