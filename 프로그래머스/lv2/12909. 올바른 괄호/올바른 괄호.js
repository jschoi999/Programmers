function solution(s){
    var answer = true;
    const arr = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            arr.push(0);
        }else{
            if(arr.length === 0){
                return false;
            }else{
                arr.pop();
            }
        }
    }

    return arr.length === 0;
}