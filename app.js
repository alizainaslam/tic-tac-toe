let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("reset");

let turnO = true;

const winPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })

})

const checkWinner = () => {
  for(pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText
    let pos2Val = boxes[pattern[1]].innerText
    let pos3Val = boxes[pattern[2]].innerText
   
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner");
        }
    }
  }
}