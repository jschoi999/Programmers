function solution(new_id) {
    let answer = '';
    
    answer = new_id.toLowerCase();
    answer = answer.replace(/[^a-z0-9-_.]/g,'');
    answer = answer.replace(/[.]{2,}/g, '.');
    answer = answer.replace(/^\.?/g,'');
    answer = answer.replace(/\.?$/g,'');
    if(!answer) answer = 'a'
    answer = answer.substr(0,15);
    answer = answer.replace(/\.$/g,'');
    while(true){
        if(answer.length <= 2){
            answer += answer[answer.length -1];
        }else{
            break;
        }
    }
    return answer;
}
