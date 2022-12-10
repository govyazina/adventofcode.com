module.exports = (input) => {
    let marker;
    for (let i = 0; i < input.length; i++) {
        const findMarker = input.slice(i, i + 14);
        if (isMarker(findMarker)) {
            marker = i + 14;
            return marker
        }
    }
    return marker;
}

function isMarker (marker) {
    const obj = {}
    for (let i = 0; i < marker.length; i++) {
        let letter = marker[i];
        if (obj[letter]) {
            return false;
        }
        else {
            obj[letter] = true;
        }
    }
    return true;
}