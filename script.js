function myFxnSum(){
let number1=document.querySelector("#num1");
let number2=document.querySelector("#num2");
let nbr1=parseFloat(number1.value);
let nbr2=parseFloat(number2.value);
let sum;
sum=nbr1 + nbr2;

    document.getElementById('sum1').innerHTML = "Result : " + sum;
}

function myFxnSub(){
    let number1=document.querySelector("#num1");
    let number2=document.querySelector("#num2");
    let nbr1=parseFloat(number1.value);
    let nbr2=parseFloat(number2.value);
    let sub;
    sub=nbr1 - nbr2;
    
        document.getElementById('sum1').innerHTML = "Result : " + sub;
    }


function myFxnMul(){
        let number1=document.querySelector("#num1");
        let number2=document.querySelector("#num2");
        let nbr1=parseFloat(number1.value);
        let nbr2=parseFloat(number2.value);
        let mul;
        mul=nbr1 * nbr2;
        
            document.getElementById('sum1').innerHTML = "Result : " + mul;
 }


 function myFxnDiv(){
            let number1=document.querySelector("#num1");
            let number2=document.querySelector("#num2");
            let nbr1=parseFloat(number1.value);
            let nbr2=parseFloat(number2.value);
            let division;
            division=nbr1 / nbr2;
            
                document.getElementById('sum1').innerHTML = "Result : " + division;
 }

 function backFxn(){
    window.location.href="index.html";
 }