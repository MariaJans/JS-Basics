

 


function calculate(){
  var shoe_size = document.getElementById("shoe_size").value;
  var birth_year = document.getElementById("year").value;
  var multiply = shoe_size * 2;
  var add = multiply + 5;
  var mult2 = add * 50;
  var sub = mult2 - birth_year;
  var result = sub + 1766;
 
  alert ("The result is:" + result)
}
