//your JS code here. If required.

function secondHighest(arr) {
    let highest = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > highest) {
            second = highest;
            highest = num;
        } else if (num < highest && num > second) {
            second = num;
        }
    }

    return second;
}
