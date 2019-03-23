let myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world!";

// let myHTML = document.querySelector('html');
// myHTML.onclick = function(){
//     alert('别戳我，我怕疼。')
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/picture1.jpg'){
        myImage.setAttribute('src', 'images/re0.jpg');
    }else{
        myImage.setAttribute('src', 'images/picture1.jpg');
    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '!';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedNmae = localStorage.getItem('name');
if(!storedNmae){
    setUserName();
}else{
    setHeading(storedNmae);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;

// function multiply(num1, num2){
//     let result = num1 * num2;
//     return result;
// }