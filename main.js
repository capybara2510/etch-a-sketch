let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size =getSize();
        createBoard(size);
    })
    
})

function createBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}


function getSize(){
    let input = prompt("Choose board size.");
    let message = document.querySelector("#message");
    if (input == ""){
        message.innerHTML= "Please provide a value."
    }
    else if(input < 0 || input > 100){
        message.innerHTML= "Please provide a value between 0 and 100."
    }
    else{
        message.innerHTML="Now you can play!"
        return input;
    }
}

function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else{
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice){
    color = colorChoice;

}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}