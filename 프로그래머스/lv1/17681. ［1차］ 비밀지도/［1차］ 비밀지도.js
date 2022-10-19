function solution(n, arr1, arr2) {
    const answer = [];
    for(let i = 0; i < n; i++){
        const tArr1 = arr1[i].toString(2).split("");
        const tArr2 = arr2[i].toString(2).split("");
        let tmp1 = [];
        let tmp2 = [];
        tmp1.length = n - tArr1.length;
        tmp2.length = n - tArr2.length;
        tmp1.fill('0');
        tmp2.fill('0');
        tArr1.unshift(...tmp1);
        tArr2.unshift(...tmp2);
        let str = '';
        for(let j = 0; j < n; j++){
            if(tArr1[j] === '1' || tArr2[j] === '1'){
                str += "#";
            }else{
                str += " ";
            }
        }
        answer.push(str);
        
    }

    
    return answer;
}