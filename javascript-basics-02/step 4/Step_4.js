var thename = document.getElementById("name");
var surname = document.getElementById("surname");
var city = document.getElementById("city");

function erase(){
    if (confirm("Do You Want To Clear All The Fields?")) {
        thename.value="";
        surname.value="";
        city.value="";
    }
}