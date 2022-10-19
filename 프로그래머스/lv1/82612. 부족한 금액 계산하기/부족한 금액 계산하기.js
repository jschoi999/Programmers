function solution(price, money, count) {
    let answer = -1;
    let result = 0;
    for(let i = 1; i <= count; i++){
        result += (price * i);
    }
    answer = result - money > 0 ? result - money : 0;
    return answer;
}