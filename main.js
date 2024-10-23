function isValidPassword(password, username) {
    if(password.length <8 ) {
        return false;
    } else if ( password.includes(username)) { 
        return false;
    } else if ( password.includes(" ")){ 
        return false;
    } else { 
        return true;
    }
} 

const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

const result = isValidPassword(password, username);


if (result) {
    console.log("Your password is valid!");
} else {
    console.log("Your password is not valid.");
}
