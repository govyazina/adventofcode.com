module.exports = (input) => {
    let marker;
    for (let i = 0; i < input.length; i++) {
        const findMarker = input.slice(i, i + 4);
        const a = findMarker[0];
        const b = findMarker[1];
        const c = findMarker[2];
        const d = findMarker[3];
        if (a !== b && a !== c && a !== d && b !== c && b !== d && c !== d) {
            marker = i+4;
            break;
        }
    }
    return marker;
}
