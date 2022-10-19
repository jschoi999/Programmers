function solution(s)
{
    const sum = s.split("").reduce((acc,curr,idx) => idx % 2 === 0 ? acc + curr.charCodeAt(0) : acc - curr.charCodeAt(0), 0);
    return sum === 0 ? 1 : 0;
}