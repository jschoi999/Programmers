function solution(nums) {
    let answer = 0;
    for(let i = 0; i < nums.length; i++){
        if(i + 2 > nums.length) break;
        
        const num1 = nums[i];
        for(let j = i +1; j < nums.length; j++){
            const num2 = nums[j];
            for(let k = j + 1; k < nums.length; k++){
                const num3 = nums[k];
                if(calc(num1 + num2 + num3)){
                    answer++;
                }
            }
        }
    }
    return answer;
}
function calc(item){
    for(let i = 2; i <= Math.sqrt(item); i++){
        if(item % i === 0){
            return false;
        }
    }
    return true;
}