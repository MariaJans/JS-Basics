var inputBox = document.getElementById('name');

inputBox.onkeyup = function(){
    document.getElementById('input').innerHTML = inputBox.value;
}



