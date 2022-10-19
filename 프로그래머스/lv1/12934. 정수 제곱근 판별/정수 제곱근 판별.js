function solution(n) {
    var answer = 0;
    const ln = `${n}`.length;
    const ls = `${Math.sqrt(n)}`.length;
    return ln >= ls ? (Math.sqrt(n) +1) ** 2 : -1;
}