
function multiplyNumbers(num1, num2) {
    
    return num1 * num2;

}

function divideNumbers(num1, num2){
    return num1 / num2;
}

function addNumbers(num1, num2){
    return num1 + num2;
}

function subNumbers(num1, num2){
    return num1 - num2;
}

function operate(userInput){

 /* this is for the intitla setup before making the calculator:
 let userInput = prompt("Enter two numbers and the operation you want to do:"); */
 
   parseInt(userInput);
   if (userInput.includes("+")){

    splitAdditionInput = userInput.split("+").map(Number);
    additionTotal = splitAdditionInput.reduce((total, curr) =>{
        return total + curr;
    });
    console.log("Total: " + additionTotal);
    return additionTotal.toFixed(2);

   } else if (userInput.includes("*")){
        splitMultiplicationInput = userInput.split("*").map(Number);
        multiplicationTotal = splitMultiplicationInput.reduce((total, curr) => {
            return total * curr;
        });
        console.log("Product: " + multiplicationTotal);
        return multiplicationTotal.toFixed(2);

   } else if (userInput.includes("/")){
        splitDivisionInput = userInput.split("/").map(Number);
        divisionTotal = splitDivisionInput.reduce((total, curr) => {
            return total / curr;
        });
        console.log("Product: " + divisionTotal);
        return divisionTotal.toFixed(2);

   } else if (userInput.includes("%")) {
        splitModulusInput = userInput.split("%").map(Number);
        modulusTotal = splitModulusInput.reduce((total, curr) => {
            return total % curr;
        });
        console.log("Remainder: " + modulusTotal);
        return modulusTotal.toFixed(2);

   } else if (userInput.includes("-")){
        splitSubtractionInput = userInput.split("-").map(Number);
        SubtractionTotal = splitSubtractionInput.reduce((total, curr) => {
            return total - curr;
        });
        console.log("Total: " + SubtractionTotal);
        return SubtractionTotal.toFixed(2);
   }
}

const displayScreen = document.querySelector(".display")
const EqualsSign = document.querySelector("#Equals");
const modulusSign = document.querySelector(".division");
const buttons = document.querySelectorAll(".mainContainer button");
const deleteButton = document.querySelector(".deletion");
buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (button == EqualsSign) {
        displayScreen.value +=  "=" + operate(displayScreen.value);
        } else if (button == deleteButton) {
            displayScreen.value = "";

        } else {
        const num = button.getAttribute("data-*");
        displayScreen.value += num;
        }

    })
})