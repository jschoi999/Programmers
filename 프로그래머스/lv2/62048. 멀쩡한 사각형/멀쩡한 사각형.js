function solution(w, h) {
    var answer = 0;
    var big = 0;
    var small = 0;
    var sCnt = 0;
    if(w > h){
        big = w;
        small = h;
    }else if(h > w){
        big = h;
        small = w;
    }else{
        big = h;
        small = h;
    }
    
    for(var i = 1; i <= big; i++){
        if((small * i) % big === 0){
            sCnt++;
        }
    }
    
    answer = w * h - (w + h - sCnt);
    
    return answer;
}