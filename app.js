// console.log('app.js is connected');

function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + ''; 
    //number + empty string = string output;
    if(pinString.length == 4){
        return pin;
    } 
    else{
        // console.log('got a 3 digit and calling again', pin);
        return getPin();
    }
}


function generatePin(){
    // const pin = Math.round(Math.random()* 10000);
    //  console.log('generating');
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    //using (event bubble) or (event-deligate)


    // console.log('any key clicked');
    // console.log(event.target.innerText);
    const number = event.target.innerText; //used (event-bubble) or (event-deligate)
    // typeof --string---parse kore output deya jaite pare 
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){ // if not a number
        // console.log(number);  
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{ //then it is a number
        const calcInput = document.getElementById('typed-numbers');
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        // calc.innerText = number; vul;
        calcInput.value = newNumber;
    }
    
});

function verifyPin(){
    //  console.log('pin verifying');
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if(pin == typedNumbers){
         // console.log('matched! YaY');
        // const successMassage = document.getElementById('notify-success');
        successMassage.style.display = "block";
        failError.style.display = "none"; //hide this 
        
    }
    else{
        // console.log('oops!');
        // const failError = document.getElementById('notify-fail');
        successMassage.style.display = "none"; //hide this
        failError.style.display = "block";
       
    }
}