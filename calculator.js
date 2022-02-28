// **********************  variebles  ****************************
const calcBtn = document.querySelectorAll(".btn");
const calcDisplay = document.querySelector(".main-display");
const calcCBtn = document.querySelector(".c-btn");
const calcAcBtn = document.querySelector(".ac-btn")
const resultBtn = document.querySelector(".result-btn")

// *********************** Events *****************************
calcBtn.forEach((e) =>{e.addEventListener("click" , calculate)});
calcCBtn.addEventListener("click" , cBtnFunction);
calcAcBtn.addEventListener("click" , acBtnFunction);
resultBtn.addEventListener("click" , makeResultFunction);

// **************  User keyboard handler  ********************
window.addEventListener("keydown" , (e)=>{
if(e.key == "Enter"){
    let result = calcDisplay.innerText;
    calcDisplay.innerText = eval(result);
}
else if (e.key == "Backspace"){
    if(calcDisplay.innerText.length > 1){
        calcDisplay.innerText = (calcDisplay.innerText.substring(0 , calcDisplay.innerText.length - 1))
            }
            else{
                calcDisplay.innerText = 0;
            }
}
else if(e.key == "Escape"){
    calcDisplay.innerText = 0;
}
else{
    if(calcDisplay.innerText == 0){
        calcDisplay.innerText = e.key;
    }
    else{
        calcDisplay.innerText += e.key; 
    }
}
})

// *************************  Functionss  ********************************

function calculate(e){
    if(calcDisplay.innerText == 0){
        calcDisplay.innerText = e.target.innerText;
    }
    else{
        calcDisplay.innerText += e.target.innerText;
    }
};

function cBtnFunction(){
    if(calcDisplay.innerText.length > 2){
calcDisplay.innerText = (calcDisplay.innerText.substring(0 , calcDisplay.innerText.length - 2))
    }
    else{
        calcDisplay.innerText = 0;
    }
}
function acBtnFunction(){
    calcDisplay.innerText =0;
}
function makeResultFunction(){
    let result = calcDisplay.innerText;
    calcDisplay.innerText = eval(result)
}

