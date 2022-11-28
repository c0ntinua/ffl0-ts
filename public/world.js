function seedLayer(layer) {
    for (let row = 0; row < global_rows; row++) {
        for (let col = 0; col < global_cols; col++) {
            layer[col * global_rows + row] = randomFloat();
        }
    }
}
function seedCurrentCells() {
}
function randomFloat() {
    return 1.0 - 2.0 * Math.random();
}
//# sourceMappingURL=world.js.map