let width = "50%";

let x = window.matchMedia("(min-width: 550px)");

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {

    if (x.matches) width = "30%";
    else width = "50%"; 
    document.getElementById("mySidenav").style.width = width;
    //document.getElementById("main").style.marginLeft = width;
}
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
}

document.getElementById("mainArea").addEventListener('click', () => {
    if(document.getElementById("mySidenav").style.width === width) {
        closeNav();
    }
})