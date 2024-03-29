

function float_to_integer(x : number) : number {
    return Math.floor(x/inc + 1) + 127;
}
function color_string(r : number, g : number, b : number) {
    return `rgb(${r},${g},${b})`;
}

function plotMonochrome() {
    let inc = 2.0/256.0;
    let raw_sum = 0.0;
    let m = 0;
    for (let col = 0; col < global_cols; col++) {
        for (let row = 0; row < global_rows; row++) {
            raw_sum = 0;
            for (let l = 0; l < num_layers; l++) {
                raw_sum += layer_system[l][col * global_rows + row];
            }
            m = float_to_integer(raw_sum/num_layers);
            if (!posterized) {
                pen.fillStyle = color_string(m,m,m);
            } else {
                m = (m > boundary ? 255 : 0);
                pen.fillStyle = color_string(m,m,m);
            }
            pen.beginPath();
            pen.rect(col*pixel_width, row*pixel_height, pixel_width, pixel_height);
            pen.fill();
        }
    }
}
function preparePlot() {
    let inc = 2.0/256.0;
    let raw_sum = 0.0;
    for (let col = 0; col < global_cols; col++) {
        for (let row = 0; row < global_rows; row++) {
            raw_sum = 0;
            for (let l = 0; l < num_layers; l++) {
                raw_sum += layer_system[l][col * global_rows + row];
            }
            hue_field[col * global_rows + row] = float_to_integer(raw_sum/num_layers);      
        }
    }
}
function preparePlotAlt() {
    let inc = 2.0/256.0;
    let raw_sum = 0.0;
    buffer =  new Float64Array(global_rows*global_cols); 
    for (let l = 0; l < num_layers; l++) {
        for (let col = 0; col < global_cols; col++) {
            for (let row = 0; row < global_rows; row++) {
                buffer[col * global_rows + row] += layer_system[l][col * global_rows + row];;
            }    
        }
    }
    for (let i = 0; i < global_rows*global_cols; i++) {
        hue_field[i] = float_to_integer(buffer[i]/num_layers);  
    }

}
function performPlot() {
    let m = 0;
    for (let col = 0; col < global_cols; col++) {
        for (let row = 0; row < global_rows; row++) {
            let m = hue_field[col * global_rows + row]; 
            if (posterized)  m = (m > boundary ? 255 : 0);
            pen.fillStyle = color_string(m,m,m);
            pen.beginPath();
            pen.rect(col*pixel_width, row*pixel_height, pixel_width, pixel_height);
            pen.fill();
        }
    }

}
