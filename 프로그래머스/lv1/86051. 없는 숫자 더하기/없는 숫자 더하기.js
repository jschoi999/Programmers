function solution(numbers) {
    let answer = 0;
    const array = [0,1,2,3,4,5,6,7,8,9];
    array.forEach(i => {
        if(numbers.indexOf(i) === -1){
            answer += i;
        }
    })
    return answer;
}