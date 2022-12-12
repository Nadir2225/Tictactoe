const name1 = document.getElementById('input1');
const name2 = document.getElementById('input2');
const start = document.getElementById('start');
const form = document.getElementById('body');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const friends = document.getElementById('choice1');
const bot = document.getElementById('choice2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const name22 = document.getElementById('name22');
const head = document.querySelector('head');
const settheme = document.body

let gettheme = JSON.parse(localStorage.getItem("pagetheme"));

if (gettheme === "Light") {
settheme.classList = "light-mode"
};

const validation = () => {
document.links[0].onclick = (e) => {
let nam1 = false;
let nam2 = false;

   if(name1.value !==""){
       nam1 = true;
   }
   if(name2.value !==""){
       nam2 = true;
   }
   if (nam1 === false || nam2 === false){
   e.preventDefault();
   }
}
form.addEventListener('input', () => {
    if(name1.value.length > 0 && name2.value.length > 0){
     start.style.opacity = "1";
        }
    if(name1.value.length == 0 ||  name2.value.length == 0){
        start.style.opacity = "0.6";
    }
});
}
const validation1 = () => {
document.links[0].onclick = (e) => {
let nam1 = false;

   if(name1.value !==""){
       nam1 = true;
   }
   if (nam1 === false){
   e.preventDefault();
   }
}
form.addEventListener('input', () => {
    if(name1.value.length > 0){
     start.style.opacity = "1";
        }
    if(name1.value.length == 0){
        start.style.opacity = "0.6";
    }
});
}

const check = () => {
    if(friends.checked == true){
       head.innerHTML =`
       <link rel="stylesheet" href="info.css">
       <style>
.radio1{
    background-color: #18ffff;
    box-shadow: 0 0 12px #18ffff;
}
body.light-mode .radio1{
    background-color: #13e2d9;
    box-shadow: 0 0 12px #13e2d9;
}
.radio2{
    background-color: transparent;
    box-shadow: 0 0 0 0;
}
.box3{
    display: flex;
}
.box4{
    display:flex;
}
.name2{
    display: flex;
}
       </style>
       `
       validation()
      }else if(bot.checked == true){
      head.innerHTML =`
      <link rel="stylesheet" href="info.css">
      <style>
.radio2{
    background-color: #18ffff;
    box-shadow: 0 0 12px #18ffff;
}
body.light-mode .radio2{
    background-color: #13e2d9;
    box-shadow: 0 0 12px #13e2d9;
}
.radio1{
    background-color: transparent;
    box-shadow: 0 0 0 0;
}
.box3{
    display: flex;
}
.box4{
    display:flex;
}
.name2{
    display: none;
}
</style>
`
       validation1()
    }else{
        return
    }
}

const save = () => {
    if (name2 !== ""){
    player1 = name1.value
    player2 = name2.value
  localStorage.setItem("name1",player1)
  localStorage.setItem("name2",player2)
    } else{
    player1 = name1.value
  localStorage.setItem("name1",player1)
    }
    return false;
}

const goback = () => {
    window.history.back();
}
