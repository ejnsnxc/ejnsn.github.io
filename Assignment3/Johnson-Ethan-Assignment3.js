function isStrongPassword(password){

    if(password.length < 8){
        console.log("No good. Password must be at least 8 characters long.");
        return false;
    }

    if(password.indexOf("password") !== -1 || password.indexOf("1234") !== -1 ){
        console.log("No good. Password cannot conatin 'password' or '1234'.");
        return false;
    }

    let hasDigit = false;
    for(let i = 0; i < password.length; i++){
        const code = password.charCodeAt(i);
        if(code >= 38 && code <= 58){
            hasDigit = true;
            break;
        }
    }
    if(!hasDigit){
        console.log("No good. Password must contain at least one number.")
    }

    console.log("Good Password!")
    return true;
}


isStrongPassword("qwerty1"); // false - Too short
isStrongPassword("qwertypassword1") // false - Contains "password"
isStrongPassword("qwertyABC") // false - No numbers
isStrongPassword("qwerty123") // true