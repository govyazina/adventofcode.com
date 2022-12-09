module.exports = (input) => {
    const pairs = input.split('\n').map(e => e.split(',').map(e => e.split('-').map(e => Number(e))));
    let sum = 0;
    for (const pair of pairs) {
        let cond = pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]
            || pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1];
        if (cond) {
            sum++
        }
    }
    return sum;
}
