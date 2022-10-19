function solution(n) {
    let n2 = n.toString(2);
    let len = n2.length - n2.replace(/1/g, '').length;
    var idx = n + 1;
    while(true){
        let newN2 = idx.toString(2);
        let newLen = newN2.length - newN2.replace(/1/g, '').length;
        if(len === newLen) break;
        idx++;
    }
    return idx;
}