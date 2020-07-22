var randomColor = Math.floor(Math.random()*16777215).toString(16);

document.getElementById(id="mainArea").style.backgroundColor = "#"+randomColor;
// document.getElementById(id="navbar").style.backgroundColor = "#"+randomColor;


let isPaused = false;

var timer = setInterval(
    function () {
      if(!isPaused) {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById(id="mainArea").style.backgroundColor = "#"+randomColor;
        // document.getElementById(id="navbar").style.backgroundColor = "#"+randomColor;
      }      
    },10000000);

let closeBtn = document.getElementsByClassName("nav-icon")[0];
let pauseBtn = document.getElementsByClassName("calcName")[0];

closeBtn.addEventListener('click', () => {
    clearInterval(timer);
})

pauseBtn.addEventListener('click', () => {
    if(!isPaused) isPaused = true;
    else isPaused = false;
})


