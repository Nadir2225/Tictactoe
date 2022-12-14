const win = document.getElementById('win')
const lost = document.getElementById('lost')
const player1 = localStorage.getItem("name1")
const player2 = localStorage.getItem('name2')
const xname = document.querySelector('.xname')
const oname = document.querySelector('.oname')
const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
const c4 = document.getElementById('c4')
const c5 = document.getElementById('c5')
const c6 = document.getElementById('c6')
const c7 = document.getElementById('c7')
const c8 = document.getElementById('c8')
const c9 = document.getElementById('c9')
const pl1 = document.querySelector('.player1')
const pl2 = document.querySelector('.player2')
const box2 = document.querySelector('.box2')
const flow = document.querySelector('.flow')
const flow1 = document.querySelector('.flow1')
const pbtn = document.querySelector('.pause')
const match = document.querySelector('.match')
const comment = document.querySelector('.comment')
const scoree1 = document.getElementById('scoree1')
const scoree2 = document.getElementById('scoree2')

var scoreei1 = 0
var scoreei2 = 0

var array = [c1, c2, c3, c4, c5, c6, c7, c8, c9]

const settheme = document.body

Array.prototype.remove = function(from, to) { 
var rest = this.slice((to || from) + 1 || this.length); 
this.length = from < 0 ? this.length + from : from; return this.push.apply(this, rest); };


let gettheme = JSON.parse(localStorage.getItem("pagetheme"));

if (gettheme === "Light") {
settheme.classList = "light-mode"
};

const goback = () => {
    window.history.back()
}

if (player2 ==""){
    xname.innerText = `${player1}`
    oname.innerText = 'Robot'
    var mode = "robot"
}else{
    xname.innerText = `${player1}`
    oname.innerText = `${player2}`
    var mode = "multi"
}

var turn = "ofx"
var i = 0



const check = (id) =>{
  if (id.value !== true && 
      (id.type !== "x" || id.type !== "o") 
      ){
  if (mode == "multi"){  
  if (turn == "ofx"){
      id.innerHTML = '<img class="x" src="x.png">'
      i++
      pl1.style.border = "none"
      pl2.style.border = "0.37rem solid #ff352b"
      id.value = true
      id.type = "x"
      turn = "ofo"
      winner()
      } else {
         id.innerHTML = '<img class="o" src="o.png">'
         i++
         pl1.style.border = "0.37rem solid #18ffff"
         pl2.style.border = "none"
         id.value = true
         id.type = "o"
         turn = "ofx"
         winner()
         }
      }else{
      if (turn == "ofx"){
      id.innerHTML = '<img class="x" src="x.png">'
      i++
      pl1.style.border = "none"
      pl2.style.border = "0.37rem solid #ff352b"
      valeur = array.indexOf(id)
      array.remove(valeur)
      id.value = true
      id.type = "x"
      turn = "ofo"
      winner()
      setTimeout(boat, 1000)
           }
           }
           if(i == 9){
      pl1.style.border ="none"
      pl2.style.border = "none"
           }
  }else{
     return 
  }
}


const auto = () => {
    lengthg = array.length
    calcul = Math.floor(Math.random()* lengthg)
    if (array.length > 0 && array[calcul].value !== true){
    array[calcul].innerHTML = '<img class="o" src="o.png">'
    i++
    pl1.style.border = "0.37rem solid #18ffff"
    pl2.style.border = "none"
    array[calcul].value = true
    idd = array[calcul]
    idd.type = "o"
    array.remove(calcul)
    turn = "ofx"
    winner()
    } else {
        return
    }
}

const stylecolor = (n1,color) => {
    n1.style.width = "14.1rem"
    n1.style.height = "14.1rem"
    n1.style.backgroundColor = `${color}`
    n1.style.boxShadow = `0 0 3rem ${color}`
}

const style = (n1, n2, n3) => {
    if (n1.type == "x"){
setTimeout(stylecolor,0,n1,'#55ffac')
setTimeout(stylecolor,100,n2,'#55ffac')
setTimeout(stylecolor,200,n3,'#55ffac')
    }else{
setTimeout(stylecolor,0,n1,'#ff555f')
setTimeout(stylecolor,100,n2,'#ff555f')
setTimeout(stylecolor,200,n3,'#ff555f')
    }
    if (mode == "multi"){
        win.play()
    }else{
        if(n1.type == "x"){
           win.play() 
        }else{
           lost.play()
        }
    }
}

const winner = () => {
    if((c1.type == c2.type) && 
       (c2.type == c3.type) && 
       (c1.type == "x" || c1.type == "o")){
      array.map(x => x.value = true) 
      pl1.style.border ="none"
      pl2.style.border = "none"
      setTimeout(style,200,c1,c2,c3)
      setTimeout(identity,700)
    }else if((c4.type == c5.type) && 
       (c5.type == c6.type) && 
       (c4.type == "x" || c4.type == "o")){
       array.map(x => x.value = true) 
       pl1.style.border ="none"
       pl2.style.border = "none"
       setTimeout(style,200,c4,c5,c6)
       setTimeout(identity,700)
    }else if((c7.type == c8.type) && 
       (c8.type == c9.type) && 
       (c7.type == "x" || c7.type == "o")){
       array.map(x => x.value = true) 
       pl1.style.border ="none"
       pl2.style.border = "none"
       setTimeout(style,200,c7,c8,c9)
       setTimeout(identity,700)
    }else if((c1.type == c4.type) && 
       (c4.type == c7.type) && 
       (c1.type == "x" || c1.type == "o")){
       array.map(x => x.value = true) 
       pl1.style.border ="none"
       pl2.style.border = "none"
       setTimeout(style,200,c7,c4,c1)
       setTimeout(identity,700)
    }else if((c2.type == c5.type) && 
       (c5.type == c8.type) && 
       (c2.type == "x" || c2.type == "o")){
       array.map(x => x.value = true) 
       pl1.style.border ="none"
       pl2.style.border = "none" 
       setTimeout(style,200,c8,c5,c2)
       setTimeout(identity,700)
    }else if((c3.type == c6.type) && 
       (c6.type == c9.type) && 
       (c3.type == "x" || c3.type == "o")){
       array.map(x => x.value = true) 
       pl1.style.border ="none"
       pl2.style.border = "none"
       setTimeout(style,200,c9,c6,c3)
       setTimeout(identity,700)
    }else if((c1.type == c5.type) && 
       (c5.type == c9.type) && 
       (c1.type == "x" || c1.type == "o")){
       array.map(x => x.value = true) 
       pl1.style.border ="none"
       pl2.style.border = "none"
       setTimeout(style,200,c9,c5,c1)
       setTimeout(identity,700)
    }else if((c3.type == c5.type) && 
       (c5.type == c7.type) && 
       (c3.type == "x" || c3.type == "o")){
       array.map(x => x.value = true) 
       pl1.style.border ="none"
       pl2.style.border = "none"
       setTimeout(style,200,c7,c5,c3)
       setTimeout(identity,700)
    }else if (i == 9){
        pl1.style.border ="none"
        pl2.style.border = "none"
    setTimeout(display2,700,'draw','try to break the tie next time ;) ','draw')
    }
}

const boat = () => {
   if (c1.type == "o" && c2.type == "o" &&  c3.value !== true){
    detect(c3)
   }else if (c1.type == "o" && c3.type == "o" &&  c2.value !== true){
    detect(c2)
   }else if (c2.type == "o" && c3.type == "o" &&  c1.value !== true){
    detect(c1)
   }
   
   else if (c4.type == "o" && c5.type == "o" &&  c6.value !== true){
    detect(c6)
   }else if (c4.type == "o" && c6.type == "o" &&  c5.value !== true){
    detect(c5)
   }else if (c5.type == "o" && c6.type == "o" &&  c4.value !== true){
    detect(c4)
   }else
   
    if (c7.type == "o" && c8.type == "o" &&  c9.value !== true){
    detect(c9)
   }else if (c7.type == "o" && c9.type == "o" &&  c8.value !== true){
    detect(c8)
   }else if (c8.type == "o" && c9.type == "o" &&  c7.value !== true){
    detect(c7)
   }else
   
    if (c1.type == "o" && c4.type == "o" &&  c7.value !== true){
    detect(c7)
   }else if (c1.type == "o" && c7.type == "o" &&  c4.value !== true){
    detect(c4)
   }else if (c4.type == "o" && c7.type == "o" &&  c1.value !== true){
    detect(c1)
   }else
   
    if (c2.type == "o" && c5.type == "o" &&  c8.value !== true){
    detect(c8)
   }else if (c2.type == "o" && c8.type == "o" &&  c5.value !== true){
    detect(c5)
   }else if (c5.type == "o" && c8.type == "o" &&  c2.value !== true){
    detect(c2)
   }else
   
    if (c3.type == "o" && c6.type == "o" &&  c9.value !== true){
    detect(c9)
   }else if (c3.type == "o" && c9.type == "o" &&  c6.value !== true){
    detect(c6)
   }else if (c6.type == "o" && c9.type == "o" &&  c3.value !== true){
    detect(c3)
   }else
   
    if (c1.type == "o" && c5.type == "o" &&  c9.value !== true){
    detect(c9)
   }else if (c1.type == "o" && c9.type == "o" &&  c5.value !== true){
    detect(c5)
   }else if (c5.type == "o" && c9.type == "o" &&  c1.value !== true){
    detect(c1)
   }else
   
    if (c3.type == "o" && c5.type == "o" &&  c7.value !== true){
    detect(c7)
   }else if (c3.type == "o" && c7.type == "o" &&  c5.value !== true){
    detect(c5)
   }else if (c5.type == "o" && c7.type == "o" &&  c3.value !== true){
    detect(c3)
   }else
   
    if (c1.type == "x" && c2.type == "x" &&  c3.value !== true){
    detect(c3)
   }else if (c1.type == "x" && c3.type == "x" &&  c2.value !== true){
    detect(c2)
   }else if (c2.type == "x" && c3.type == "x" &&  c1.value !== true){
    detect(c1)
   }
   
   else if (c4.type == "x" && c5.type == "x" &&  c6.value !== true){
    detect(c6)
   }else if (c4.type == "x" && c6.type == "x" &&  c5.value !== true){
    detect(c5)
   }else if (c5.type == "x" && c6.type == "x" &&  c4.value !== true){
    detect(c4)
   }else
   
    if (c7.type == "x" && c8.type == "x" &&  c9.value !== true){
    detect(c9)
   }else if (c7.type == "x" && c9.type == "x" &&  c8.value !== true){
    detect(c8)
   }else if (c8.type == "x" && c9.type == "x" &&  c7.value !== true){
    detect(c7)
   }else
   
    if (c1.type == "x" && c4.type == "x" &&  c7.value !== true){
    detect(c7)
   }else if (c1.type == "x" && c7.type == "x" &&  c4.value !== true){
    detect(c4)
   }else if (c4.type == "x" && c7.type == "x" &&  c1.value !== true){
    detect(c1)
   }else
   
    if (c2.type == "x" && c5.type == "x" &&  c8.value !== true){
    detect(c8)
   }else if (c2.type == "x" && c8.type == "x" &&  c5.value !== true){
    detect(c5)
   }else if (c5.type == "x" && c8.type == "x" &&  c2.value !== true){
    detect(c2)
   }else
   
    if (c3.type == "x" && c6.type == "x" &&  c9.value !== true){
    detect(c9)
   }else if (c3.type == "x" && c9.type == "x" &&  c6.value !== true){
    detect(c6)
   }else if (c6.type == "x" && c9.type == "x" &&  c3.value !== true){
    detect(c3)
   }else
   
    if (c1.type == "x" && c5.type == "x" &&  c9.value !== true){
    detect(c9)
   }else if (c1.type == "x" && c9.type == "x" &&  c5.value !== true){
    detect(c5)
   }else if (c5.type == "x" && c9.type == "x" &&  c1.value !== true){
    detect(c1)
   }else
   
    if (c3.type == "x" && c5.type == "x" &&  c7.value !== true){
    detect(c7)
   }else if (c3.type == "x" && c7.type == "x" &&  c5.value !== true){
    detect(c5)
   }else if (c5.type == "x" && c7.type == "x" &&  c3.value !== true){
    detect(c3)
   }else{
       auto()
   }


}

const detect = (p3) => {
    p3.innerHTML = '<img class="o" src="o.png">'
    i++
    pl1.style.border = "0.37rem solid #18ffff"
    pl2.style.border = "none"
    p3.value = true
    p3.type = "o"
    array.remove(array.indexOf(p3))
    turn = "ofx"
    winner()  
}

const display = (wins,drw,sentence,x) => {
    match.innerHTML = `
    <img class="draw" src="${x}.png">
               <div>${drw}</div> 
    `
    comment.innerText = `${wins}${sentence}`
    flow.style.display = "flex"
}

const display2 = (drw,sentence,o) => {
    match.innerHTML = `
    <img class="draw" src="${o}.png">
               <div>${drw}</div> 
    `
    comment.innerText = `${sentence}`
    flow.style.display = "flex"
}


const identity = () => {
    if (mode == "multi"){
    if (turn == "ofx"){
        display(`${player2} `,'won','wins the game!','o')
     scoreei2++
     scoree2.innerText = `${scoreei2}`
    }else{
        display(player1,'won',' wins the game','x')
     scoreei1++
     scoree1.innerText = `${scoreei1}`
    }
    }else{
        if (turn == "ofx"){
        display2('lost','Good game tho!!','o')
     scoreei2++
     scoree2.innerText = `${scoreei2}`
    }else{
      display(player1,'won',' congrats!! you have beaten it','x')
     scoreei1++
     scoree1.innerText = `${scoreei1}`
    }
}
}

const act = () => {
    window.location.reload()
}


const resume = () => {
    i = 0
    turn = "ofx"
    array = [c1, c2, c3, c4, c5, c6, c7, c8, c9]
    array.map(x => {
        x.type =""
        x.value = false
        x.style.width = "14rem"
        x.style.height = "14rem"
        if (gettheme === "Light") {
        x.style.backgroundColor = "#d5f4fd"
        x.style.boxShadow = "0 0 1.5rem grey"
        }else{
        x.style.backgroundColor = "#323232" 
        x.style.boxShadow = "0 0 2rem #323232" 
        }
        x.innerHTML = "<img>"
    })
    pl1.style.border = "0.37rem solid #18ffff"
    pl2.style.border = "none"
    flow.style.display = "none"
}

const pau = () => {
    flow1.style.display = "flex"
    pbtn.style.display = "none"
}



const clos = () => {
    pbtn.style.display = "flex"
    flow1.style.display = "none"
}
