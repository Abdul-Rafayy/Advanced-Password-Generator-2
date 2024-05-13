function textInput() {
    document.getElementById("characterCount").innerText = document.getElementById("text-input").value
}
function generatePassword() {
    var textInput = parseInt(document.getElementById("text-input").value);
    var passwordInput = document.getElementById("password");
    var char = ""
    var password = ""
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var digitChars = "0123456789"
    var specialChars = "!@#$%^&*()"
    
    var input = document.getElementById("text-input")
    if (document.getElementById("small-alpha").checked) {
        char+=lowerCaseChars
        
    }
    if (document.getElementById("big-alpha").checked) {
       char+=upperCaseChars
        
    }
    if (document.getElementById("numbers").checked) {
        char+=digitChars
        
    }
    if (document.getElementById("special-char").checked) {
        char+=specialChars
        
    }
    for (var j = 0; j < textInput; j++) {
        var character = char.charAt(Math.floor(Math.random() * char.length));
        password += character;
        
    }
    passwordInput.value = password
}

















// function generatePassword(){
//     var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_!abcdefghijklmnopqrstuvwxyz0123456789"
//     var password = "";
//     var userInput = prompt("Enter how many number of password character you want")
//     for (let i = 0; i < userInput; i++) {
//         randomNum = Math.floor(Math.random()*char.length);
//         password += char[randomNum]    
//     }
//     document.getElementById("password").value = password
// }

// function submit() {
//     var input = document.getElementById("text-input")
//     // document.write(input.value)
// }
// var numb = document.getElementById("").value = numb
