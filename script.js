const grid = document.querySelector("#grid");
console.log(grid);

let lines = 16;
let rows = lines;

function createGrid(lines, rows) {
    grid.innerHTML = "";
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

    changeWidth(lines);
    eventListenerColorChange();
}


createGrid(lines, rows);

function CreateNewGrid() {
    let gridLines = document.querySelector('#buttonCreateGrid').value;
    if (gridLines >= 16 && gridLines <= 100) {
        createGrid(gridLines, gridLines);
    }
}


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let color = "white";

function changeColorPick(colorPicked) {
    color = colorPicked;
}

function changeColorCell(e) {
    if (e.type == 'mouseover' && !mouseDown) return
    console.log(e);
    console.log(color);
    e.target.style.backgroundColor = color;
}

function changeWidth(lines) {
    let x = document.querySelectorAll(".cell");
    console.log(x);

    for (let i = 0; i < x.length; ++i) {
        x[i].style.width = ((960 / lines).toString()).concat("px");
        x[i].style.height = ((960 / lines).toString()).concat("px");
    }
}

function eventListenerColorChange() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(item => {
        item.addEventListener('mouseover', changeColorCell)
    })
    cells.forEach(item => {
        item.addEventListener('mousedown', changeColorCell)
    })
}
