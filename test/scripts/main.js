let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/red-t-rex-bust.png') {
      myImage.setAttribute('src','images/skeleton.png');
    } else {
      myImage.setAttribute('src','images/red-t-rex-bust.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('Please enter your name');
  if(!myName){
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
  }
}
if(!localStorage.getItem('name')){
  setUserName();
}
else{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}