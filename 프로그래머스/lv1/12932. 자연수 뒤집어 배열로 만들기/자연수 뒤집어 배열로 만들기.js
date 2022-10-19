function solution(n) {
    return ('' + n).split("").map(m => +m).reverse();
}