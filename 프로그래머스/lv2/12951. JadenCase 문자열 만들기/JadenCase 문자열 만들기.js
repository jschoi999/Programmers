function solution(s) {
    return s.toLowerCase().split(" ").map(m => m === '' ? '' : m[0].toUpperCase() + m.substring(1, m.length)).join(" ");
}