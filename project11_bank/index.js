import inquirer from "inquirer";
class Customer {
    firstname;
    lastname;
    age;
    gender;
    mob;
    acount;
    blance;
    constructor(fname, lname, age, gender, mob, act, blc) {
        this.firstname = fname;
        this.lastname = lname;
        this.age = age;
        this.gender = gender;
        this.mob = mob;
        this.acount = act;
        this.blance = blc;
    }
    view() {
        console.log("blance in your account is = " + this.blance);
    }
    deposit(am) {
        this.blance += am;
        console.log("after deposting " + am + " Rs in your account now the account balnce is = " + this.blance);
    }
    withdraw(am) {
        if (this.blance > am) {
            this.blance -= am;
            console.log("after withdrawaing " + am + " Rs in your account now the account balnce is = " + this.blance);
        }
        else {
            console.log("amount that you want to withdraw " + am + " Rs in greater than you blance you blance is = " + this.blance);
        }
    }
}
class Bnak {
    customer = [];
    addcus(cus) {
        this.customer.push(cus);
    }
}
let mybank = new Bnak();
let user = new Customer("ajmal", "khan", 23, "male", "03073031866", 1, 10000);
mybank.addcus(user);
async function service(b1) {
    let service = await inquirer.prompt({
        type: "list",
        name: "inp",
        message: "What option do youn want to perform",
        choices: ["view blance", "cash withdraw", "cash deposit"],
    });
    if (service.inp == "view blance") {
        user.view();
    }
    else {
        let amount = await inquirer.prompt({
            type: "number",
            name: "am",
            message: "write the amount",
        });
        if (service.inp == "cash deposit") {
            user.deposit(amount.am);
        }
        else {
            user.withdraw(amount.am);
        }
    }
}
// this is templte for one customer only but for pure banking we need to add pin security other account also
do {
    await service(user);
    let choice = await inquirer.prompt({
        type: "input",
        name: "cho",
        message: "if you want to perform an other opertaion press y",
    });
    var a = choice.cho;
} while (a == 'y' || a == "Y");
