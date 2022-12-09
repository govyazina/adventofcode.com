module.exports = (input) => {
    const pairs = input.split('\n').map(e => e.split(',').map(e => e.split('-').map(e => Number(e))));
    let sum = 0;
    for (const pair of pairs) {
        let a = pair[0][0];
        let c = pair[1][0];
        let b = pair[0][1];
        let d = pair[1][1];
        let cond = a <= c && b >= d
            || b >= c && b <= d
            || a <= d && a >= c;
        if (cond) {
            sum++
        }
    }
    return sum;
}
