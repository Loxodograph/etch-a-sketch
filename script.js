var gridHolder = document.querySelector('.gridHolder');
var container = document.createElement('div');
var footer = document.querySelector('footer');
container.classList.add('container');
gridHolder.appendChild(container);
container = document.querySelector('.container')
var reset = document.getElementById("reset"); 
var submit = document.getElementById("submit"); 
let gridWidth = 32;
var sheet = document.createElement('style')
sheet.innerHTML = `.container {grid-template-columns: repeat(${gridWidth}, 1fr); grid-template-rows: repeat(${gridWidth}, 1fr)}`
document.body.appendChild(sheet);


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let color = random_rgba();

function createGrid(num) {
    
    gridWidth = num; 
    let i = 0;
    while (i < num*num){
        var box = document.createElement('div');
        box.classList.add('grid')
        box.style.background = "#547AA5"
        container.appendChild(box);
        
        i++
    }
    color = random_rgba();
    gridBoxes = document.querySelectorAll('.grid');
    
}
function deleteGrid() {
    var gridBye = document.querySelectorAll('.grid');
    gridBye.forEach(grid => grid.remove())
  
}
if (!document.querySelector('.grid')){
createGrid(32);
}
gridBoxes.forEach(gridBox => gridBox.onmouseover = function(){ gridBox.style.background = `${color}`});





var slider = document.getElementById("myRange");
var output = document.getElementById("gridSize");

reset.onclick = function() {
    gridBoxes.forEach(gridBox => gridBox.style.background = '#547AA5');
    deleteGrid();
    createGrid(32);
    gridBoxes.forEach(gridBox => gridBox.onmouseover = function(){ gridBox.style.background = `${color}`});
    slider.value = 32;
    output.innerHTML = slider.value + " x " + slider.value;
}

slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
  gridSize = this.value;
  
} 

submit.onclick = function() {
    deleteGrid();
    createGrid(gridSize);
    gridWidth = gridSize;
    sheet.innerHTML =`.container {grid-template-columns: repeat(${gridWidth}, 1fr); grid-template-rows: repeat(${gridWidth}, 1fr)}`;
    gridBoxes.forEach(gridBox => gridBox.onmouseover = function(){ gridBox.style.background = `${color}`});
}

//