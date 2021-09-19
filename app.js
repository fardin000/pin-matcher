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