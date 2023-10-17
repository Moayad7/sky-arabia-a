var myElement = document.getElementById("link");
var logo1 = document.getElementById("logo1");
var logo2 = document.getElementById("logo2");
var a2030 = document.getElementById("2030-1");
var b2030 = document.getElementById("2030-2");
var toggle = document.getElementById("navbar-toggler");
var toggle2 = document.getElementById("navbar-toggler2");

window.onscroll = function () {
  scrollFunction();
};

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
    a2030.classList.add("hidden");
    a2030.classList.remove("block");
    b2030.classList.add("block");
    b2030.classList.remove("hidden");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
    myElement.classList.remove("scrolled1");
    myElement.classList.add("scrolled2");
    toggle.classList.add("scrolled4");
    toggle.classList.remove("scrolled3");
    logo1.classList.add("block");
    logo1.classList.remove("hidden");
    logo2.classList.add("hidden");
    logo2.classList.remove("block");
    b2030.classList.add("hidden");
    b2030.classList.remove("block");
    a2030.classList.add("block");
    a2030.classList.remove("hidden");
  }
}
logo2.classList.add("hidden");
b2030.classList.add("hidden");

AOS.init();


toggle.onclick = function () {
  Menu();
};
toggle2.onclick = function () {
  Menu2();
};

function Menu() {
  let item = toggle;
  let list = document.querySelector("ul");
  item.name === "menu" ? (item.name = "close") : (item.name = "menu");
  item.name === "close"
    ? list.classList.add("left-[0px]")
    : list.classList.remove("left-[0px]");
}
function Menu2() {
  let item = toggle;
  let list = document.querySelector("ul");
  item.name === "menu" ? (item.name = "close") : (item.name = "menu");
  item.name === "close";
  list.classList.remove("left-[0px]");
}

var loader = document.getElementsByClassName("loader");
var content = document.querySelector(".content");

window.addEventListener("load", () => {
  this.setTimeout(() => {
    document
      .querySelector(".spinnerContainer")
      .classList.add("loader1--hidden");
    document
      .querySelector(".spinnerContainer")
      .classList.remove("loader1--visible");
  },800);
  this.setTimeout(() => {
    document.querySelector(".spinnerContainer").classList.add("hidden");
  }, 1300);
});

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 15s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
};

// fetching data from api

let services;
let projects;
let home;
let contacts;

const services_url = "https://dash.skyalarabia.com/api/service";
const projects_url = "https://dash.skyalarabia.com/api/project";
const home_url = "https://dash.skyalarabia.com/api/slide";
