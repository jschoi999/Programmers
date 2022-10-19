function solution(s) {
    return s.split(" ").map(m1 => {return m1.split("").map((m2, i) => i % 2 === 0 ? m2.toUpperCase() : m2.toLowerCase()).join('')}).join(' ');
}