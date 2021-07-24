export function validateName(text){
    const regx = RegExp(/^[a-z ,.'-]+$/i);
    return !regx.test(text)
}

export function validateEmail(text){
    const regx = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    return !regx.test(text)
}

export function validatePassword(text){
    if(text.length  < 8){
        return true;
    }
    return false;
}

export function validateConfirmPass(entPass, cnfPass){
    if(entPass === cnfPass){
        return false;
    }else{
        return true;
    }
}

export function validateAnswers(value){
    if(value == null || value == undefined || value == ""){
        return true;
    }
    else {
        return false;
    }
}