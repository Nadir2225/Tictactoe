const toggle = document.querySelector('.c')
const settheme = document.body

let gettheme = JSON.parse(localStorage.getItem("pagetheme"));

if (gettheme === "Light") {
settheme.classList = "light-mode"
};

const animation = () => {
settheme.classList.toggle("light-mode");
   
    var theme;
    
if(settheme.classList.contains("light-mode")){
       theme = "Light";
   } else {
       theme = "Dark";
   };
   localStorage.setItem("pagetheme", JSON.stringify(theme));
};

const goback = () => {
    window.history.back();
}