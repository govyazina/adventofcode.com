module.exports = (stacks, input) => {
    const procedures = input.split('\n').map(e => e.split(' '));
    for (const procedure of procedures) {
        const boxes = Number(procedure[1]);
        for (let i = 0; i < boxes; i++) {
            let box = stacks[procedure[3]].pop();
            stacks[procedure[5]].push(box);
        }
    }
    let string = '';
    for (const stack of stacks) {
        string += stack.pop();
    }
    return string.trim();
}
