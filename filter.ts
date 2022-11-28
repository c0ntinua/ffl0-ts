type Filter = {
    cells : number[],
    cols : number,
    rows : number,
    transfer_code : number,
}

function newFilter(cols : number, rows : number, transfer_code : number) : Filter  {
    let f : Filter = {
        cells : new Array(cols*rows).fill(0),
        cols : cols,
        rows : rows,
        transfer_code : transfer_code,
    }
    return f;
}

function seedFilter(filter : Filter) {
    for (let row = 0 ; row < filter.rows ; row++) {
        for (let col = 0 ; col < filter.cols ; col++) {
            filter.cells[col*filter.rows + row] = 1.0 - 2.0*Math.random();
        }
    }
}

function randomSeededFilter() {
    let rows = Math.floor(Math.random() * 11 + 2);
    let cols = Math.floor(Math.random() * 11 + 2);
    let transfer_code = Math.floor(Math.random() * 2);
    let filter = newFilter(cols,rows, transfer_code);
    seedFilter(filter);
    return filter;
}
function randomFilterSystem(num_filters : number) : Filter[] {
    let filter_system = [];
    for (let i = 0; i < num_filters; i++) {
        filter_system.push(randomSeededFilter());
    }
    return filter_system;
}

function applyFilterCell(filter :  Filter, layer : number[], col : number, row : number) {
    let sum = 0;
    let counter = 0;
    let this_row = 0;
    let this_col = 0;
    let target_index = 0;	
    for (let c = 0; c < filter.cols; c++) {
        for (let r = 0; r < filter.rows; r++) {
            this_row = r +row;
            if (this_row >= global_rows) this_row -= global_rows;
            this_col = c +col;
            if (this_col >= global_cols) this_col -= global_cols;
            
            target_index = this_col*global_rows + this_row;

            sum += layer[target_index]*filter.cells[c*filter.rows + r];
        }
    }
    //return 2*((sum**2)%0.5 - .25);
    //return Math.tanh(sum);
    return sum/num_layers;
}

function applyFilter(filter : Filter, layer : number[]) : number[] {
    let workspace = new Array(global_rows*global_cols).fill(0);
    for (let c = 0; c < global_cols; c++) {
        for (let r = 0; r < global_rows; r++) {
            workspace[c*global_rows + r ] = applyFilterCell(filter, layer, c, r);
        }
    }
    return workspace;
}


// function roll(x) {
//     return 2*(x%0.5 - .25);
// }
