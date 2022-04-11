const container = document.getElementById("grid");
let hovered = [];


//function to create grid with size depending on parameter value 
function makeGrid(rows, cols) {
  container.style.setProperty('grid-template-columns', `repeat(${cols}, 1fr)`);
  container.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className ="grid-item";
    const gridItem = document.querySelector(".grid-item");
    gridItem.style.height = (500/rows);
    gridItem.style.width = (500/cols);
  };
  
};

//function to remove all the divs added in order to make a new grid dependant when user clicks setgrid
function resetGrid(){
  const elements = document.getElementsByClassName("grid-item");
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
};

//set's default grid size to 16x16 until change from user
makeGrid(16, 16); 

//Adds text and changes set grid slider value text when slider is dragged
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
output.innerHTML = `${this.value} x ${this.value}`;
};


//Removes old grid and creates new grid of x size when set grid is clicked
const setGrid = document.querySelector(".setGrid");

setGrid.addEventListener("click", () =>{
  resetGrid();
  makeGrid(slider.value, slider.value);
});

   //Adds functionality to reset button
  const resetBtn = document.querySelector(".reset");
  
  function resetDrawing(){
    hovered.forEach(function(current){
      current.style.backgroundColor = "white";
    });
  };
  
  resetBtn.addEventListener("click", () =>{
    resetDrawing();
  });

  //Adds functionality to pen button and adds selected effect to the pen button
  //removes selected effect on eraser button if it was applied
  //also adds any element clicked to array which will be later used to loop through and reset the grid back...
  //default background color
  const penBtn = document.querySelector(".pen");

  penBtn.addEventListener("click", ()=>{
    eraserBtn.classList.remove("selected");
    penBtn.classList.add("selected");

  const penColor = document.getElementById("colorPicker");
    
    container.addEventListener("click", (e) => {
      e.target.style.backgroundColor = penColor.value;
      hovered.push(e.target);
    });
  });

  //Adds functionality to eraser button and adds selected effect to the eraser button
  //removes selected effect on pen button if it was already selected 
  const eraserBtn = document.querySelector(".eraser");

  eraserBtn.addEventListener("click", () =>{
    eraserBtn.classList.add("selected");
    penBtn.classList.remove("selected");
    
    container.addEventListener("click", (e) => {
      e.target.style.backgroundColor = "white"; 
      
    });
  });

  