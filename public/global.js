let canvas = document.getElementById("canvas");
let pen = canvas.getContext("2d");
let global_rows = 100;
let global_cols = 300;
let num_layers = 3;
let layer_system = randomLayerSystem(num_layers);
let num_filters = 12;
let filter_system = randomFilterSystem(num_filters);
let pixel_height = Math.floor(canvas.height / global_rows);
let pixel_width = Math.floor(canvas.width / global_cols);
let inc = 2.0 / 255.0;
let delay = 100;
let heavy_mode = true;
let monochrome = true;
let posterized = true;
let alt_mode = false;
let max_mode = true;
//# sourceMappingURL=global.js.map