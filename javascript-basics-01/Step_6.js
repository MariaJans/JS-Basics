function remainder(){
    var num1 = document.getElementById ("first_number").value;
    var num2 = document.getElementById ("second_number").value;
    var result= num1 / num2;
    var remainder = num1 % num2;
    alert (num1 + "/" + num2 + "=" + result + "\n" + "The remainder is:" + remainder);

}