var pass = document.querySelector("#password");
var confpass = document.querySelector("#confirmation");
var button = document.querySelector("#button");

button.addEventListener("click",passmatch);


function passmatch(){
    if (pass.value != confpass.value){
        pass.style.border="3px solid red";
        confpass.style.border="3px solid red";
        }
    }
