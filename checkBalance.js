/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -10;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance) {
    if(isActive && balance > 0) {
        console.log(`your balance is $${balance}.`)
    } else {
        if (!isActive) {
            console.log(`your account is not active`)
        } else {
            if (balance===0){
                console.log(`your account is empty`)
            }else{
                console.log(`your balance is negative.please contact bank`)
            }
        }
    }
} else {
    console.log("Have a nice day")
}

