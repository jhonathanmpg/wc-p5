let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
btn.addEventListener("click", refresh);
function refresh(){
    $.getJSON("https://api.chucknorris.io/jokes/random",function(data){
        h2.innerText = data.value
})}
window.onload = refresh


