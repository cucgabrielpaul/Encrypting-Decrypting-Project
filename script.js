//"use strict";

let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
let encryptButton = document.querySelector(".first-button");
let decryptButton = document.querySelector(".second-button");
let copyTextButton = document.querySelector(".decrypted-box button");
let messageInput = document.querySelector(".messageInput").value.toUpperCase();
let keyInput = document.querySelector(".keyInput").value.toUpperCase();

//Input validation with RegEx
let inputValidation = (inputValue) => {
    let regEx = /([A-Z]|[a-z]|[0-9]|[.,?!'_&@#$%*() -])/g;

    inputValue.match(regEx) !== null ?
        console.log("True", inputValue.match(regEx), [...messageInput]) :
        console.log("False", inputValue.match(regEx), [...messageInput]);
};
inputValidation(messageInput.toUpperCase());

//Input validation with forEach
let inputValidation2 = (inputValue) => {
    console.log(inputValue)
    inputValue.forEach((element) => {
        let letterValid = characters.find((item) => item == element);
        //letterValid !== undefined ? console.log("true") : console.log("false");
    });
};

let encryptMessage = (messageInput, keyInput) => {
    let validateMessages = [...messageInput, ...keyInput]

    inputValidation2(validateMessages);

    console.log(messageInput, keyInput, validateMessages)
        /* let messageInputValue = messageInput.value;
        let messageInputIndex = messageInputValue.indexOf('b')
        let keyInputValue = messageInput.value;
        let keyInputIndex = keyInputValue.indexOf()
        messageInputValue.split("").forEach((element, index) => {
            console.log(element, index, characters.find((felement, findex, farray) => felement == element.toUpperCase())) 

        })*/
}
encryptButton.addEventListener("click", () => encryptMessage(messageInput, keyInput));

let decryptMessage = (messageInput, keyInput) => {
    console.log(messageInput, keyInput);
}
decryptButton.addEventListener("click", () => decryptMessage(messageInput, keyInput));

//Copy text from Your decrypted message input
let copyTextEvent = () => {
    let copyText = document.querySelector(".decryptedInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}
copyTextButton.addEventListener("click", copyTextEvent);