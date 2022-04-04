const sizeP = document.querySelector("#sizePicker");
var colorPicker = document.getElementById("colorPicker");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");

function makeGrid() {
  const table = document.getElementById("pixelCanvas");
  var rows = table.innerHTML = ""
    for(let i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (let c = 0; c < cells; c++) {
            var cell = row.insertCell(c);
      }
    }
    table.addEventListener('click', function(event) {
           event.target.style.backgroundColor = color;
     });
}


sizeP.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  makeGrid(height.value, width.value);
}
