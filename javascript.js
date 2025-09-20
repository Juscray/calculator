
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

function operate(){
   let userInput = prompt("Enter two numbers and the operation you want to do:");
   parseInt(userInput);
   if (userInput.includes("+")){
    splitAdditionInput = userInput.split("+").map(Number);
    additionTotal = splitAdditionInput.reduce((total, curr) =>{
        return total + curr;
    });
    console.log("Total: " + additionTotal);

   } else if (userInput.includes("*")){
        splitMultiplicationInput = userInput.split("*").map(Number);
        multiplicationTotal = splitMultiplicationInput.reduce((total, curr) => {
            return total * curr;
        });
        console.log("Product: " + multiplicationTotal);
   } else if (userInput.includes("/")){
        splitDivisionInput = userInput.split("/").map(Number);
        divisionTotal = splitDivisionInput.reduce((total, curr) => {
            return total / curr;
        });
        console.log("Product: " + divisionTotal);
   } else if (userInput.includes("-")){
        splitSubtractionInput = userInput.split("-").map(Number);
        SubtractionTotal = splitSubtractionInput.reduce((total, curr) => {
            return total - curr;
        });
        console.log("Total: " + SubtractionTotal);
   }
}

// operate();
