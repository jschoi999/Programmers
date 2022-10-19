function solution(s, n) {
    let answer = '';
    s.split("").forEach(a => {
        if(a === ' '){
            answer += ' ';
        }else{
            let ascii = a.charCodeAt(0);
            if(ascii >= 65 && ascii <= 90){
                //대문자
                if(ascii + n > 90){
                    ascii = ascii - 26;
                }
                ascii += n
                answer += String.fromCharCode(ascii);
            }else if(ascii >= 97 && ascii <= 122){
                //소문자
                if(ascii + n > 122){
                    ascii = ascii - 26;
                }
                ascii += n
                answer += String.fromCharCode(ascii);
            }
        }
    });
    return answer;
}