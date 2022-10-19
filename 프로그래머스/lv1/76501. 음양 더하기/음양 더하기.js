function solution(absolutes, signs) {
    return absolutes.map((a, i) => signs[i] ? a : -a).reduce((acc, curr) => acc+curr);
}