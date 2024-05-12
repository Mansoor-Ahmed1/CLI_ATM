import inquirer from "inquirer";
let balance = 1000;
let pinCode = 1246;
let pin_input = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter your Pin code",
        type: "number"
    }
]);
if (pin_input.Pin == pinCode) {
    console.log("You can access your bank account");
    let operations = await inquirer.prompt([
        {
            name: "operation",
            message: "Choose the event you want to get perofrmed",
            type: "list",
            choices: ["Withdraw", "Balance Check", "Loan Information",]
        }
    ]);
    if (operations.operation == "Withdraw") {
        let withdraw_choices = await inquirer.prompt([
            {
                name: "WithdrawOptions",
                message: "Select a mode of withdrawing amount",
                type: "list",
                choices: ["Fast Cash", "Customize"]
            }
        ]);
        if (withdraw_choices.WithdrawOptions == "Fast Cash") {
            let fastCash = await inquirer.prompt([
                {
                    name: "FastCashOptions",
                    message: "Select the amount of money you would like to withdraw",
                    type: "list",
                    choices: ["10", "20", "50", "100", "200", "500"],
                }
            ]);
            if (fastCash.FastCashOptions < balance) {
                let rem_balance = balance - fastCash.FastCashOptions;
                console.log(`Succesfully withdrawn, Now you have ${rem_balance} dollars remaining in your account`);
            }
            else if (fastCash.FastCashOptions > balance) {
                console.log("Insufficient Balance!!");
            }
            else {
                console.log("Error!!");
            }
        }
        else if (withdraw_choices.WithdrawOptions == "Customize") {
            let withdraw = await inquirer.prompt([
                {
                    name: "withdrawChoices",
                    message: "Select the amount of money you would like to withdraw",
                    type: "number",
                }
            ]);
            if (withdraw.withdrawChoices < balance) {
                let rem_balance = balance - withdraw.withdrawChoices;
                console.log(`Succesfully withdrawn, Now you have ${rem_balance} dollars remaining in your account`);
            }
            else if (withdraw.withdrawChoices > balance) {
                console.log("Insufficient Balance!!");
            }
            else {
                console.log("Error!!");
            }
        }
    }
    else if (operations.operation == "Balance Check") {
        console.log(`Your Balance is ${balance} currently.`);
    }
    else if (operations.operation == "Loan Information") {
        console.log("Welcome to our Loan Services!");
        console.log("Are you in need of financial assistance for a big purchase or unexpected expense?");
        console.log("We offer a range of loan options to suit your needs:");
        console.log("  • Personal Loans: For personal expenses or debt consolidation");
        console.log("  • Home Loans: For purchasing a home");
        console.log("  • Automobile Loans: For purchasing a new or used vehicle");
        console.log("  • Student Loans: For Paying for your school/college/university degree");
        console.log("  • Business Loans: For small business owners and entrepreneurs");
        console.log("Our loans come with competitive interest rates and flexible repayment terms.");
        console.log("Apply now and take the first step towards achieving your financial goals!");
    }
    else {
        console.log("You've entered Wrong Pin Code!");
    }
}
