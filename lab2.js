// Select color inpu  // Select size inp

// When size is submitted by the user, call makeGrid

// var tableGlobal = function createTable() {
//     return table;
// }


document.getElementById("sizePicker").addEventListener("submit", function (e) {
  e.preventDefault();
  var row = document.querySelector("#inputHeight").value;
  var col = document.querySelector("#inputWidth").value;
  
  document.querySelectorAll("#pixelCanvas tr").forEach(function (child) {
    document.querySelector("#pixelCanvas").removeChild(child);
  });

  makeGrid(row, col);
});


function makeGrid(row, col) {

  for (var i = 0; i < row; i++) {
    document
      .querySelector("#pixelCanvas")
      .appendChild(document.createElement("tr"));
    for (var j = 0; j < col; j++) {
      document
        .querySelectorAll("#pixelCanvas tr")
        [i].appendChild(document.createElement("td"));
    }
  }

  document.querySelectorAll("#pixelCanvas tr td").forEach((item) => {
    item.addEventListener("click", function (e) {
      var col = document.querySelector("#colorPicker").value;
      e.target.style.backgroundColor = col;
    });
  });
}
