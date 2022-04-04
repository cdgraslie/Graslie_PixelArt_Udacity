//** Define variables using id's from HTML doc.
var grid = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var colorPicker = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");

//** Create function to generate grid when user clicks submit.
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
      if (grid.hasChildNodes()) {
        removeChild();
    }
    makeGrid(height.value, width.value);
});

//** Create grid function with listeners for coloring cells with mouse clicks.
function makeGrid(height, width) {
    for (let y = 0; y < height; y++) {
        let row = grid.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener("mousedown", function(e) {
                cell.style.backgroundColor = colorPicker.value;
            } )
        }
    }
}

