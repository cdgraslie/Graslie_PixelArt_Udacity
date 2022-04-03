var sizePicker = document.getElementById("sizePicker");
var colorPicker = document.getElementById("colorPicker");
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;

function makeGrid() {
  event.preventDefault();
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

function submitForm() {
  let submit = document.getElementsById("submit");
    makeGrid(height, width);
    });
}
