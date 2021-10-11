function solution(record) {
    let answer = [];
    let sData = record.map(d => d.split(" "));
    let obj= {};
    sData.forEach((item, idx) => {
        if(item[2]){
            obj[item[1]] = item[2];
        }
    });
    sData.forEach((item, idx) => {
        switch(item[0]){
            case "Enter":
                answer.push(`${obj[item[1]]}님이 들어왔습니다.`);
                break;
            case "Leave":
                answer.push(`${obj[item[1]]}님이 나갔습니다.`);
                break;
            default:
                answer.push('r');
        }
    });
    answer = answer.filter(n => n !== 'r')
    return answer;
}
