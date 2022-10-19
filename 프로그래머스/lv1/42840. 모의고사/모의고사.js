function solution(answers) {
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let ar = {'n' : 1, 'c': 0};
    let br = {'n' : 2, 'c': 0};
    let cr = {'n' : 3, 'c': 0};
    const result = [];
    answers.forEach((item, idx) => {
        const aIdx = idx % a.length;
        const bIdx = idx % b.length;
        const cIdx = idx % c.length;
        if(a[aIdx] === item){
            ar.c++;
        }
        
        if(b[bIdx] === item){
            br.c++;
        }
        
        if(c[cIdx] === item){
            cr.c++;
        }
    });
    result.push(ar,br,cr);
    const val = result.filter(r => r.c === Math.max(...result.map(m => m.c))).map(m => m.n)
    return val;
}