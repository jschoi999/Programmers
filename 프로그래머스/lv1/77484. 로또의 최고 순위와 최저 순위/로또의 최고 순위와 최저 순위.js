function solution(lottos, win_nums) {
    let answer = [];
    //2개 5등
    //6개 1등
    let count = 0;
    let zero = 0;
    lottos.forEach(item => {
        if(win_nums.includes(item)){
            count++;
        }
        if(item === 0){
            zero++;
        }
    });
    let total = count + zero;
    answer = [calc(total), calc(count)];
    
    return answer;
}

function calc(item){
    let result = 6;
    switch(item){
        case 1:
            result = 6;
            break;
        case 2:
            result = 5;
            break;
        case 3:
            result = 4;
            break;
        case 4:
            result = 3;
            break;
        case 5:
            result = 2;
            break;
        case 6:
            result = 1;
            break;
        default:
            result = 6;
            break;
    }
    return result;
}