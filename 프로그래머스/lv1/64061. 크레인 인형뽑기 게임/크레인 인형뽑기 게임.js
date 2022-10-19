function solution(board, moves) {
    let answer = 0;
    const array = [];
    moves.forEach((m, inx) => {
        let itemInx = board.findIndex(n => n[m-1] !== 0);
        console.log('itemInx', itemInx);
        if(itemInx > -1){
            array.push(board[itemInx][m-1]);
            if(array[array.length -1] === array[array.length - 2]){
                array.pop();
                array.pop();
                answer += 2;
            }
            board[itemInx][m-1] = 0;
        }
    });
    
    return answer;
}