const readline = require('readline')
const bcrypt = require('bcryptjs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let storedUsername = null
let storedPassword = null 
let storedCode = null
let currentAmount = 0

const registerUser = () => {
    rl.question("Enter username: ", (username) => {
        if (username === storedUsername) {
            console.lo("Invalid email or password")
            welcomeMenu()
        }
        storedUsername = username;
    

        rl.question("Enter password: ", (password) => {
            bcrypt.genSalt(10, function (err, salt) {
                if (err) throw err;

                bcrypt.hash(password, salt, function (err, hashedPassword) {
                    if (err) throw err;

                    storedPassword = hashedPassword;
                    console.log("\n✅ Registration successful! You can now log in.\n");

                    welcomeMenu();
                });
            });
        });
    });

};

const welcomeMenu = () => {
    console.log("================Welcome to XYZ Bank Interactive Shell=================")
    console.log("Choose an option: ")
    console.log("1. Register\n2. Login\n3. Exit")

    rl.question("Choose an option", (option) => {
        switch (option) {
            case "1": 
                registerUser()
                break 
            case "2":
                login()
                break
            case "3":
                rl.close()
                return
                break 
            default:
                welcomeMenu()
        } 
    })
}



const login = () => {
    rl.question("Enter you Username: ", (username) => {
        if (username != storedUsername) {
            console.log('Invalid username or password')
            console.log()
            welcomeMenu()
        }
        rl.question("Enter password: ", (password) => {
            bcrypt.compare(password, storedPassword, (err, isMatch) => {
                if (err) throw err;
                if (!isMatch) {
                    console.log("❌ Invalid username or password\n")
                    welcomeMenu();
                    return
                }

                let code = Math.floor(10000 + Math.random() * 90000); 
                storedCode = code;
                console.log(`✅ Your MFA code is: ${code}`);

                rl.question("Enter the MFA code: ", (inputCode) => {
                    console.log(inputCode, storedCode)
                    const mycode = parseInt(inputCode)
                    if (verifyMFA(mycode, storedCode)) {
                       
                        mainMenu();
                    } else {
                        console.log("❌ Incorrect MFA code");
                        welcomeMenu();
                    }
                });
            });
        })
    })
}

const mainMenu = () => {
    console.log(`Welcome ${storedUsername}`)
    console.log(`options: \n1. check balance\n2. deposit \n3. Withdraw \n4. check daily limit`)
    rl.question("Select option: ", (option) => {
        switch (option) {
            case '1':
                console.log(`Your balance is ${currentAmount}`)
                console.log("\n\n")

                mainMenu()
                break;
            case '2':
                deposit()
                console.log("\n\n")
                mainMenu()
                break
            case '3':
                processWithdrawal()
                console.log("\n\n")
                mainMenu()
                break
            case '4':
                checkDailyLimit()
                console.log("\n\n")
                mainMenu()
                break 
            default: 
                mainMenu()
        }
    })
}
const verifyPassword = (inputPassword, storedPassword) => {
    if (bcrypt.compare(inputPassword, storedPassword) == true ) {
        return true
    }
    return false 
}

const verifyMFA = (inputCode, correctCode) => {
    if (inputCode === correctCode) {
        return true 
    }
    return false 
}



const checkBalance = (balance) => {
    rl.question("Enter amount to withdraw: ", amount => {
        if (balance >= amount) {
            return True 
        }
        return false
    })

}

const checkDailyLimit = (withdrawalAmount, dailyLimit) => {
    if (withdrawalAmount <= dailyLimit) {
        return true
    }
    return false 
}

const deposit = () => {
    rl.question("Enter amount you wish to deposit: ", (amount) => {
        if (amount === null) {
            amount = parseInt(amount)
            currentAmount = amount
        }
        amount = parseInt(amount)
        currentAmount = currentAmount + amount 
        
        console.log(`you have deposited ${amount} - Your balance is ${currentAmount}`)
        mainMenu()
    })
}

const processWithdrawal = () => {
    rl.question("Enter amount you wish to withdraw: ", amount => {
        if (checkBalance(currentAmount) === false) {
            console.log("Insufficient funds.")
            mainMenu()
        }
    
        amount = parseInt(amount)
        currentAmount = currentAmount - amount
        console.log(`You have successfully withdrawn ${amount}. Your balance is ${currentAmount}`)
    })
}
// registerUser()
welcomeMenu()