function solution(n,a,b)
{
    let answer = 0;
    let arr = new Array(n);
    arr[a - 1] = 'A';
    arr[b - 1] = 'B';
    return calc(arr, 0);;
}

function calc(arr, count){
    
    if(arr.length === 0){
        return count;
    }
    count ++;
    let temp = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            continue;
        }
        
        if(['A', 'B'].includes(arr[i]) && ['A', 'B'].includes(arr[i - 1])){
            temp = [];
            break;
        }
        
        temp.push(arr[i - 1] || arr[i]);
    }
    return calc(temp, count);
}