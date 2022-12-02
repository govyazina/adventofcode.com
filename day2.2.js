module.exports = function (input) {
    let lines = input.split('\n');
    let sum = 0;
    for (const line of lines) {
        if (line[2] === 'X') {
            sum += 0;
            if (line[0] === 'A') {
                sum += 3;
            }
            else if (line[0] === 'B') {
                sum += 1;
            }
            else {
                sum += 2;
            }
        }
        else if (line[2] === 'Z') {
            sum += 6;
            if (line[0] === 'A') {
                sum += 2;
            }
            else if (line[0] === 'B') {
                sum += 3;
            }
            else {
                sum +=1;
            }
        }
        else if (line[2] === 'Y') {
            sum += 3;
            if (line[0] === 'A') {
                sum += 1;
            }
            else if (line[0] === 'B') {
                sum += 2;
            }
            else {
                sum += 3;
            }
        }
    }
    return sum;
}