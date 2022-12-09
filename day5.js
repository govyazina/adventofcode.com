module.exports = (stacks, input) => {
    const procedures = input.split('\n').map(e => e.split(' '));
    let columns = stacks.split('\n').map(e => e.split(/(.{4})/).filter(e => e));
    const countColumns = columns.pop().length;
    columns = columns.reverse();
    stacks = [];
    for (let j = 0; j < countColumns; j++) {
        stacks[j] = [];
    }
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < countColumns; j++) {
            let columnElement = columns[i][j];
            if (columnElement){
                let letter = columnElement[1].trim();
                if (letter) {
                    stacks[j].push(letter);
                }
            }
        }
    }
    stacks.unshift([' ']);
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
