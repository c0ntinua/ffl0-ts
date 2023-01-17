function updatePlot() {
    clock = Date.now();
    let target_layer = 0;
    for (let f = 0; f < filter_system.length; f++) {
        target_layer = f % num_layers;
        layer_system[target_layer] = applyFilter(filter_system[f], layer_system[target_layer]);
    }
    plotMonochrome();
    console.log(Date.now() - clock);
    clock = 0;
}
//# sourceMappingURL=manager.js.map