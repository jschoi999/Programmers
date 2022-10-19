function solution(s){
    const pm = s.toLowerCase().match(/p/g);
    const ym = s.toLowerCase().match(/y/g);
    return (pm == null? 0 : pm.length) === (ym === null ? 0 : ym.length) ;
}