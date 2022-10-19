function solution(s) {
    let answer = 0;
    let arr = [];
    for(let i = 1; i <= s.length; i++){

        let clone = s;
        let txt = clone.substr(0,i);
        let num = 0
        let an = "";
            while(true){
                if(clone.length === 0){
                    num > 1 ? an += num + txt : an += txt;
                    break;
                }else{
                    if(clone.indexOf(txt) === 0){
                        num++;
                        clone = clone.substr(txt.length);
                    }else{
                        num > 1 ? an += num + txt : an += txt;
                        txt = clone.substr(0,i);
                        num = 0;
                    }
                }
            }
            arr.push(an.length);
        }
    answer = Math.min.apply(null, arr);
    
    
    return answer;
}