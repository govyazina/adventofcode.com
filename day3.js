function reorgRucksack(input) {
let rucksacks = input.split('\n');
let sum = 0;
    for (const rucksack of rucksacks) {
        const first = rucksack.slice(0, rucksack.length/2).split('');
        const second = rucksack.slice(rucksack.length/2).split('');
        const intersection = first.find(function (elem) {
            return second.find(function (elem2) {
                return elem === elem2;
            })
        })
        if (intersection.charCodeAt(0) > 96) {
            sum += intersection.charCodeAt(0)-96;
            console.log(intersection.charCodeAt(0)-96)
        }
        else {
            sum += intersection.charCodeAt(0)-64+26;
            console.log(intersection.charCodeAt(0)-64+26)
        }


    }
    return sum;
}


module.exports = reorgRucksack
