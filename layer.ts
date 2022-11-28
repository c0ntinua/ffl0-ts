
type Layer = number[];

function randomLayerSystem(num_layers : number) : Layer[] {
    let layer_system = [];
    for (let i = 0; i < num_layers; i++) {
        layer_system.push(randomLayer());
    }
    return layer_system;

}

function randomLayer() : Layer {
    let layer = new Array(global_rows*global_cols).fill(0); 
    for (let i = 0 ; i < layer.length ; i++) {
        layer[i] = 1.0 - 2.0*Math.random();
    } 
    return layer;
}
