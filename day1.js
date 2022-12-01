function calories(input) {
    const elvesArr = input.split('\n\n');
    for (let i = 0; i < elvesArr.length; i++) {
        elvesArr[i] = elvesArr[i].split('\n').map(Number);
    }
    for (let i = 0; i < elvesArr.length; i++) {
        let sum = 0;
        for (let j = 0; j < elvesArr[i].length; j++) {
            sum += elvesArr[i][j];
        }
        elvesArr[i] = sum;
    }
    return Math.max.apply(null, elvesArr);
}



module.exports = calories