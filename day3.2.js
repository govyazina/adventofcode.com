function reorgRucksack(input) {
    let rucksacks = input.split('\n');
    let sum = 0;
    while (rucksacks.length > 0) {
        const first = rucksacks.pop().split('');
        const second = rucksacks.pop().split('');
        const third = rucksacks.pop().split('');
        const intersection = first.find(function (elem) {
            let inSec = second.includes(elem2 => elem === elem2);
            let inThird = third.includes(elem3 => elem3 === elem);
            return inSec && inThird;
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
    // for (const rucksack of rucksacks) {
    //     const first = rucksack.slice(0, rucksack.length/2).split('');
    //     const second = rucksack.slice(rucksack.length/2).split('');
    //     const intersection = first.find(function (elem) {
    //         return second.find(function (elem2) {
    //             return elem === elem2;
    //         })
    //     })
    //     if (intersection.charCodeAt(0) > 96) {
    //         sum += intersection.charCodeAt(0)-96;
    //         console.log(intersection.charCodeAt(0)-96)
    //     }
    //     else {
    //         sum += intersection.charCodeAt(0)-64+26;
    //         console.log(intersection.charCodeAt(0)-64+26)
    //     }
    //
    //
    // }
    return sum;
}


module.exports = reorgRucksack
