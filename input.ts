function getWidth() {
    canvas.width = parseInt(((document.getElementById("width")) as HTMLInputElement).value);
    pixel_width   = canvas.width/global_cols;
    layer_system = randomLayerSystem(num_layers);
}
function setWidth() {
    ((document.getElementById("width")) as HTMLInputElement).value = canvas.width.toString();
}
function getHeight() {
    canvas.height = parseInt(((document.getElementById("height")) as HTMLInputElement).value);
    pixel_height   = canvas.height/global_rows;
    layer_system = randomLayerSystem(num_layers);
}
function setHeight() {
    ((document.getElementById("height")) as HTMLInputElement).value = canvas.height.toString();
}
function getCols() {
    global_cols = parseInt(((document.getElementById("cols")) as HTMLInputElement).value);
    pixel_width   = canvas.width/global_cols;
    layer_system = randomLayerSystem(num_layers);
}

function setCols() {
    ((document.getElementById("cols")) as HTMLInputElement).value = global_cols.toString();
}


function getFilters() {
    num_filters = parseInt(((document.getElementById("filters")) as HTMLInputElement).value);
    filter_system = randomFilterSystem(num_filters);

}
function setFilters() {
    ((document.getElementById("filters")) as HTMLInputElement).value = num_filters.toString();
}

function setLayers() {
    ((document.getElementById("layers")) as HTMLInputElement).value = num_layers.toString();
}

function getLayers() {
    num_layers = parseInt(((document.getElementById("layers")) as HTMLInputElement).value);
    layer_system = randomLayerSystem(num_layers);
}



function getRows() {
    global_rows = parseInt(((document.getElementById("rows")) as HTMLInputElement).value);
    pixel_height   = canvas.height/global_rows;
    layer_system = randomLayerSystem(num_layers);
}

function setRows() {
    ((document.getElementById("rows")) as HTMLInputElement).value = global_rows.toString();
}

function getDelay() {
    delay = parseInt(((document.getElementById("delay")) as HTMLInputElement).value);
    clearInterval(interval);
    interval = setInterval(updatePlot,delay);
}

function setDelay() {
    ((document.getElementById("delay")) as HTMLInputElement).value = delay.toString();
}
   

function getChoices(){
    getWidth();
    getHeight();
    getRows();
    getCols();
    getDelay();
    getFilters();
    getLayers();
}

function setChoices(){
    setWidth();
    setHeight();
    setRows();
    setCols();
    setDelay();
    setFilters();
    setLayers();
}

function applyChoices() {
    getChoices();
    setChoices();
}

function toggleHeavyMode() {
    if (heavy_mode) heavy_mode = false; else heavy_mode = true;
}
function toggleMonochrome() {
    if (monochrome) monochrome = false; else monochrome = true;
}
function togglePosterized() {
    if (posterized) posterized = false; else posterized = true;
}
function pixel_reset() {
    pixel_height  = canvas.height/global_rows;
    pixel_width   = canvas.width/global_cols;
}

function resetFilters() {
    filter_system = randomFilterSystem(num_filters);
}
