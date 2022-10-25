function solution(arr1, arr2) {
    const answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        const arr = [];
        for(let j = 0; j < arr2[0].length; j++){
            let tmp = 0;
            for(let k = 0; k < arr1[i].length; k++){
                tmp += arr1[i][k] * arr2[k][j];
            }
            arr.push(tmp);
        }
        
        answer.push(arr);
    }
    
    
    return answer;
}