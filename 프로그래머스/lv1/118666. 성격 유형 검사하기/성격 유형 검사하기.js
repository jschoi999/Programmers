function solution(survey, choices) {
    let answer = '';
    const order = ['RT', 'CF', 'JM', 'AN'];
    let map = new Map();
    
    survey.forEach((s,idx) => {
        const [t1,t2] = s.split("");
        const choice = choices[idx];
        if(choice > 4){
            map.set(t2, (map.get(t2) || 0) + (choice - 4) );
        }else if(choice < 4){
            map.set(t1, (map.get(t1) || 0) + (4 - choice) );
        }
    });
    
    order.forEach(o => {
        const [o1, o2] = o.split("");
        const val1 = map.get(o1) || 0;
        const val2 = map.get(o2) || 0;
        if(val1 > val2){
            answer += o1;
        }else if(val1 < val2){
            answer += o2;
        }else{
            if(o1.charCodeAt() > o2.charCodeAt()){
                answer += o2;
            }else{
                answer += o1;
            }
        }
    });
    
    return answer;
}