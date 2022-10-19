function solution(numbers) {
    const answer = [];
    const set = new Set();
    numbers.forEach((n1, i)=>{
        numbers.forEach((n2, j) =>{
            if(i !== j){
                set.add(n1 + n2);
            }
        })
    });
    answer.push(...set);
    answer.sort((a,b) => a-b)
    return answer;
}