

function startup(y, x){
    const view = document.querySelector('#view');
    console.log(view);

    const size = calculateSize(y, x);
    console.log(size);

    for (let i = 0; i < y; i++){
        const row = document.createElement('div');
        for (let j = 0; j < x; j++){
            const square = document.createElement('div');
            square.classList.add('box');
            square.style.flex = `1 1 ${size}px`;
            row.appendChild(square);
        }
        row.classList.add('row');
        row.style.flex = `1 1 ${size}px`;
        view.appendChild(row);
    }
    
    setupListeners();
}

function setupListeners(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () =>
        box.classList.add('on'));
    })
}

function calculateSize(y, x){
    //out of 100%, 10% on each side to be reserved
    const space = 1080;
    const big = Math.max(y, x);
    return Math.round(space / big * 10) / 10;
}

function clearBoard(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.classList.remove('on');
    })
}

function destroyBoard(){
    const rows = document.querySelectorAll('.row');
    const view = document.querySelector('#view');
    rows.forEach(row => {
        view.removeChild(row);
    })
}

function promptDimensions(){
    let y;
    let x;
    y = prompt("Enter rows")
    x = prompt("Enter columns")
    destroyBoard();
    startup(y, x);
}

startup(100,100);

console.log("set up");

const dimButton = document.querySelector('#dim');
console.log(dimButton);
const resetButton = document.querySelector('#reset');
console.log(resetButton);
console.log("assign buttons");
dimButton.addEventListener('click', () => promptDimensions());
resetButton.addEventListener('click', () => clearBoard());