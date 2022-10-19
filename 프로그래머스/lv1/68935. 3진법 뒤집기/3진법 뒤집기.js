function solution(n) {
    let answer = 0;
    let str = '';
    while(true){
        const div = n % 3;
        if(n / 3 <= 0){
            break;
        }
        if(div === 0){
            str = str + 0;
            n = n / 3;
        }else{
            str = str + div;
            n = (n - div) / 3;
        }
        
    }
    const arr = str.split("");
    for(let i = 0; i < arr.length; i++){
        answer += arr[i] * 3 ** (arr.length - i - 1);
    }
    return answer;
}