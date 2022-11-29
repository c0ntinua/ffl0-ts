let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let pen = canvas.getContext("2d");
let filter_span = 9;
let global_rows = 100;let global_cols = 250;

let num_layers = 3;let layer_system = randomLayerSystem(num_layers);
let num_filters = 12;let filter_system = randomFilterSystem(num_filters);

let pixel_height  = Math.floor(canvas.height/global_rows);
let pixel_width   = Math.floor(canvas.width/global_cols);
let hue_field = new Uint8Array(global_rows*global_cols);


let inc = 2.0/255.0;

let delay = 100;

let heavy_mode = true;
let monochrome = true;

let posterized = true;
let boundary = 127;
let alt_mode = false;
let max_mode = true;

let clock = 0;



