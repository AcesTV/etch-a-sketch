const grid = document.querySelector("#grid");
console.log(grid);

let lines = 16;
let rows = lines;

for (let i = 0; i < lines; ++i) {
    let line = document.createElement("div");
    line.classList.add("line");
    for (let i = 0; i < rows; ++i) {
        let row = document.createElement("div");
        row.classList.add("cell");
        line.appendChild(row);
    }
    grid.appendChild(line);
}

function changeWidth() {
    let x = document.querySelectorAll(".cell");
    console.log(x);

    for (let i = 0; i < x.length; ++i) {
        x[i].style.width = ((960 / lines).toString()).concat("px");
        x[i].style.height = ((960 / lines).toString()).concat("px");
    }
}

changeWidth();