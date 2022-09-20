`
문제 설명
아래와 같이 5와 사칙연산만으로 12를 표현할 수 있습니다.

12 = 5 + 5 + (5 / 5) + (5 / 5)
12 = 55 / 5 + 5 / 5
12 = (55 + 5) / 5

5를 사용한 횟수는 각각 6,5,4 입니다. 그리고 이중 가장 작은 경우는 4입니다.
이처럼 숫자 N과 number가 주어질 때, N과 사칙연산만 사용해서 표현 할 수 있는 방법 중 N 사용횟수의 최솟값을 return 하도록 solution 함수를 작성하세요.

제한사항
N은 1 이상 9 이하입니다.
number는 1 이상 32,000 이하입니다.
수식에는 괄호와 사칙연산만 가능하며 나누기 연산에서 나머지는 무시합니다.
최솟값이 8보다 크면 -1을 return 합니다.
`
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