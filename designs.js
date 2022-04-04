//** Define variables using id's from HTML doc.
var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

//** Create function to generate grid when user clicks submit.
sizePicker.addEventListener("submit", function(evt) {
    evt.preventDefault();
      if (canvas.hasChildNodes()) {
        removeChild();
    }
    makeGrid(height.value, width.value);
});
//** Create grid function with listeners for coloring cells
//** with mouse clicks and preventing issues with right-clicks.
function makeGrid(height, width) {
    for (let y = 0; y < height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener("mousedown", function(evt) {
                cell.style.backgroundColor = colorPicker.value;
            cell.addEventListener("contextmenu", function(evt) {
              evt.preventDefault();
            } )
            } )
        }
    }
}


