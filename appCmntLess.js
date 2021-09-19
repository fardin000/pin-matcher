// console.log('app.js is connected');

function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + ''; 
    //number + empty string = string output;
    if(pinString.length == 4){
        return pin;
    } 
    else{
        return getPin();
    }
}


function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText; //used 
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){ // if not a number
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{ //then it is a number
        const calcInput = document.getElementById('typed-numbers');
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
}); //added a semicolon;
///////////////////////////////////////////
//////////////////////////////////////////
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if(pin == typedNumbers){
        successMassage.style.display = "block";
        failError.style.display = "none";       
    }
    else{
        successMassage.style.display = "none";
        failError.style.display = "block";
       
    }
}