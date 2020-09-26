const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;

console.log(yearlyRent);

// Strings

const myName = "John Doe";
console.log(myName);

const firstName = "John";
const lastName = "Doe";
const sentence = "Hello " + firstName + " " + lastName + "! How are you?";

console.log(sentence);

// Template Strings

const templateSentence = `Hello ${firstName} ${lastName}`;

console.log(templateSentence);

// Booleans

const isTheSkyBlue = true;

console.log(isTheSkyBlue);

// Numbers

const num = 5;
const num2 = 2.5;

console.log(num, num2);

// Control flow

if (isTheSkyBlue) {
    console.log("The sky is blue");
} else {
    console.log("The sky is not blue");
}

if (2 + 2 === 4) {
    console.log("Math still works");
} else {
    console.log("Uh, panic?");
}

const friendsAtYourParty = 10;

if (friendsAtYourParty === 10) {
    console.log("Cool, now I have all the nachos to myself");
} else if (friendsAtYourParty <= 4) {
    console.log("Perfect amount to play some Mario Kart");
} else {
    console.log("Woooooo, play the dance music");
}