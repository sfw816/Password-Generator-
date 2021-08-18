//generate random password
function generate(){

    //set password length and complexity
    let complexity = document.getElementById("slider").values;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password.values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
   //add password to textbox/ display area
   document.getElementById("display").values = password;
}
 