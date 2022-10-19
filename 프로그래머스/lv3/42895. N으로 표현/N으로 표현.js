function solution(N, number) {
    let answer = 0;
    let array = [];
    for(let i = 1; i <= 8; i++){
        let set = new Set();
        let init = 0;
        //5,55,555등 만들어주는 반복문
        for(let j = 0; j < i; j++){
            init = (10 ** j) + init
        }
        init = init * N;
        set.add(init);
        
        if(i > 1){
            for(let j =1; j < i; j++){
                let arr1 = [...(array[i-j-1])];
                let arr2 = [...(array[j-1])];
                for(let idx = 0; idx < arr1.length; idx++){
                    for(let inx = 0; inx <arr2.length; inx++ ){
                        if(arr2[inx] - arr1[idx]){
                            set.add(arr2[inx] - arr1[idx]);
                        }

                        if( (arr2[inx] / arr1[idx]) % 1 === 0){
                            set.add(arr2[inx] / arr1[idx]);
                        }
                        set.add(arr2[inx] * arr1[idx]);
                        set.add(arr2[inx] + arr1[idx]);
                    }
                }
            }
        }
        array.push(set);
    }

    for(let i = 0; i < array.length; i++){
        
        if(array[i].has(number)){
            answer = i+1;
            break;
        }
        if(i === array.length - 1){
            answer = -1;

        }
        
    }
    
    return answer;
}