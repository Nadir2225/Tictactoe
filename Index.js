const settheme = document.body

let gettheme = JSON.parse(localStorage.getItem("pagetheme"));

if (gettheme === "Light") {
settheme.classList = "light-mode"
};