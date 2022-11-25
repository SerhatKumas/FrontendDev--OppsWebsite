//Opps and Apps For All headings mobile responsiveness
function displayNoneDiv(){
    document.getElementById("opps-logo").style.display = "none";
    document.getElementById("footer-logos").style.display = "none";
    if(window.innerWidth > 1200) {
        document.getElementById("body").style.overflow = "hidden!important";
    }
    else {
        document.getElementById("body").style.overflow = "scroll";
    }
}
function displayFlexDiv(){
    document.getElementById("opps-logo").style.display = "flex";
    document.getElementById("footer-logos").style.display = "flex";
    document.getElementById("body").style.overflow = "hidden";
}
