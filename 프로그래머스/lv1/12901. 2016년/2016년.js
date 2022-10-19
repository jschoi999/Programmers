function solution(a, b) {
    return new Date(`2016/${a}/${b}`).toString().substring(0,3).toUpperCase();
}