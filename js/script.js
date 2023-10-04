var myElement = document.getElementById("link");
var logo1 = document.getElementById("logo1");
var logo2 = document.getElementById("logo2");
var toggle = document.getElementById("navbar-toggler");


window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("navbar").classList.add("scrolled");
        myElement.classList.add("scrolled1");
        myElement.classList.remove("scrolled2");
        toggle.classList.add("scrolled3");
        toggle.classList.remove("scrolled4");
        logo1.classList.add("hidden");
        logo1.classList.remove("block");
        logo2.classList.add("block");
        logo2.classList.remove("hidden");
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
        myElement.classList.remove("scrolled1");
        myElement.classList.add("scrolled2");
        toggle.classList.remove("scrolled4");
        toggle.classList.add("scrolled3");
        logo1.classList.add("block");
        logo1.classList.remove("hidden");
        logo2.classList.add("hidden");
        logo2.classList.remove("block");
    }
}
logo2.classList.add("hidden");


AOS.init();



// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

toggle.onclick = function(){Menu()}



  function Menu() {
    let item = toggle
    let list = document.querySelector('ul')
    item.name === 'menu' ? (item.name = 'close') : (item.name = 'menu')
    item.name === 'close' ? (list.classList.add('left-[0px]')) : (list.classList.remove('left-[0px]'))
    console.log("toggle");
}