function solution(sizes) {
    sizes.forEach(s => {
        s.sort((a, b) => b -a);
    });
    const wm = Math.max(...sizes.map(s => s[0]));
    const hm = Math.max(...sizes.map(s => s[1]));
    return wm * hm;
}