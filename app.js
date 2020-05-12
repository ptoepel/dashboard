
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

const showAmPm = true;

function showTime() {
    let today = new Date();
    hour = today.getHours();
    min =  today.getMinutes();
    sec = today.getSeconds();

    const amPm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
    setTimeout(showTime,1000);
}

function addZero(n){
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}

function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();
    if(hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('../img/castle-pueblo.jpg')";
        greeting.textContent = "Good Morning";
    }else if(hour < 18){
        //Afternoon
        document.body.style.backgroundImage = "url('../img/taos.jpg')";
        greeting.textContent = "Good Afternoon";
        document.body.style.color = "turquoise";
    }else{
        //Evening
        document.body.style.backgroundImage = "url('../img/mesa-verde.jpg')";
        greeting.textContent = "Good Evening";
    }
}

function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else {
        name.textContent= localStorage.getItem('name');
    }
}

function setName(e) {
    if(e.type === 'keypress'){

        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name',e.target.innerText);
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else {
        focus.textContent= localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if(e.type === 'keypress'){

        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur',setFocus)

showTime();
setBgGreet()
getName();
getFocus();