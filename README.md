# Encrypting-Decrypting-Project

https://cucgabrielpaul.github.io/Encrypting-Decrypting-Project/

You are given an array of characters 
characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",  "S", "T", "U", "V",  "W", "X", "Y", "Z",  "0", "1",  "2", "3", "4", "5", "6", "7",  "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
I need a function called encryptMessage and a function  called decryptMessage, that both accept a message and a secret key.
For example, If I provide the message ‘abcde’ and the key ‘bbbbb’ the expected encrypted message would be “bcdef”, 
Explanation: each character can be correlated to  it’s index in the array, so “abcde” can be seen as “01234” and “bbbbb” can be seen as “11111”.  The first letter of the encrypted message is the sum of the first letters from the message and the secret key 
a (index 0) + b (index 1)  = b (index 1)
 
Knowing this here are your challenges:
⦁	Write the encyptMessage function
⦁	Write the decryptMessage function
⦁	Handle the case when the secret key is a shorter string than the message, If the key is “b” and the message is “abcde”, the expected result is still “bcdef”. If the key is “aab” and the message is “abcde” the expected result is “abdde”.
⦁	create a simple web page with:
⦁	2 imputs, one for the message, one for the key
⦁	2 buttons, one to encrypt the message and one to decrypt it
⦁	you can enforce an toUppercase() on the input since the array only has uppercase letters
