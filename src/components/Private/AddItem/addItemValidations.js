export function validateItemName(text){
    const regx = RegExp(/^[a-z ,.'-]+$/i);
    return !regx.test(text)
}

export function validateIngredients(text){
    const regx = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+$/i);
    return !regx.test(text)
}

export function validateImage(imageInput){
    //imageInput = image.getElementById('img1');

    var isValid = /\.jpe?g$/i.test(imageInput.value);
    if (!isValid) {
        alert('Only jpg files allowed!');
    }

    return isValid;
}

export function validatePrice(text){
    const regx = RegExp(/^[a-zA-Z0-9.]+$/i);
    return !regx.test(text)
}