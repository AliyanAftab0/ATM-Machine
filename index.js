import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
console.log(`Your Bank Balance: ${myBalance}`);
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter Your PIN: "
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Correct PIN Code!...");
    let operationAns = await inquirer.prompt([{
            name: "Operation",
            type: "list",
            message: "What do you want to do?",
            choices: ["Withdraw", "Check Balance"]
        }]);
    if (operationAns.Operation === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "How much do you want to withdraw?"
            }]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.Operation === "Check Balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect PIN Code!...");
}
