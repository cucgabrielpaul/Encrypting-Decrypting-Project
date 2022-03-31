"use strict";

//Elements declaration
let characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "J",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    ",",
    "?",
    "!",
    "'",
    "_",
    "-",
    "&",
    "@",
    "#",
    "$",
    "%",
    "*",
    "(",
    ")",
    " ",
];
let encryptButton = document.querySelector(".encrypt-button");
let decryptButton = document.querySelector(".decrypt-button");
let copyTextButton = document.querySelector(".copy-button");
let decryptedInput = document.querySelector(".decryptedInput");
let messageInput = document.querySelector(".messageInput");
let keyInput = document.querySelector(".keyInput");

//Input validation with RegEx
let inputValidation = (inputValue) => {
    let regEx = /([A-Z]|[a-z]|[0-9]|[.,?!'_&@#$%*() -])/g;
    let validationArray = inputValue.match(regEx);

    return inputValue !== "" && JSON.stringify(validationArray) == JSON.stringify([...inputValue]) ? true : false;
};

let encryptMessage = (InputMessage, InputKey, whitchButton) => {

    if (inputValidation(InputMessage) && inputValidation(InputKey)) {
        let encryptCode = [...InputMessage].map((item, index) => {
            let messageIndex = characters.indexOf(item);
            let keyIndex = characters.indexOf(InputKey[index % InputKey.length]);

            if (whitchButton == "Encrypt") {
                return characters[(messageIndex + keyIndex) % characters.length];
            } else if (whitchButton == "Decrypt") {
                let decryptedIndex = messageIndex - keyIndex;
                if (decryptedIndex < 0) decryptedIndex += characters.length;
                return characters[decryptedIndex];
            }
        });
        return (decryptedInput.value = encryptCode.join(""));
    } else {
        alert(`Invalid message, key or empty input!`);
        decryptedInput.value = "";
        return;
    }
};

encryptButton.addEventListener("click", () =>
    encryptMessage(messageInput.value.toUpperCase(), keyInput.value.toUpperCase(), encryptButton.getAttribute("name"))
);

decryptButton.addEventListener("click", () =>
    encryptMessage(messageInput.value.toUpperCase(), keyInput.value.toUpperCase(), decryptButton.getAttribute("name"))
);

//Copy text from "Your decrypted message" input
let copyTextEvent = () => {
    navigator.clipboard.writeText(decryptedInput.value);
};
copyTextButton.addEventListener("click", copyTextEvent);