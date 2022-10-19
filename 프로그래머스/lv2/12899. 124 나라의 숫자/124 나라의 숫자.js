function solution(n) {
    var answer = '';
    const array = [];
    
    while(true){
        if(n <= 3){
            array.push(n === 3 ? 4 : n);
            break;
        }
        if((n % 3) === 0){
            array.push(4);
            n = n / 3 -1;
        }else{
            array.push(n % 3);
            n = Math.floor((n -1) / 3) ;
        }
    }
    answer = array.reverse().join('');
    
    return answer;
}