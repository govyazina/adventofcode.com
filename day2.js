module.exports = function (input) {
    let lines = input.split('\n');
    let sum = 0;
    for (const line of lines) {
        if (line.match(/A X|C Z|B Y/)){
            sum += 3;
        }
        else if (line.match(/C X|B Z|A Y/)){
            sum += 6;
        }
        else {
            sum += 0;
        }
        if (line[2] === 'X') {
            sum += 1;
        }
        else if (line[2] === 'Z') {
            sum += 3;
        }
        else if (line[2] === 'Y') {
            sum += 2;
        }
    }
    return sum;
}