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

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

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
  console.log("toggle");
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
  }, 1700);
  this.setTimeout(() => {
    document.querySelector(".spinnerContainer").classList.add("hidden");
  }, 2700);
});

// var load = window.addEventListener("load",()=>{

//     document.querySelector(".loader1").classList.add("loader1--hidden")
//   })
// setInterval(load,50000)

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

const config = {
  headers: {
    "API-KEY": "your_secret_key",
  },
};
const services_url = "https://dash.skyalarabia.com/api/service";
const projects_url = "https://dash.skyalarabia.com/api/project";
const home_url = "https://dash.skyalarabia.com/api/slide";

// services data fetch



async function fetchData1() {
  try {
    const response = await fetch(services_url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data:", data);
    services = data;
    addDataToPage();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}



// projects data fetch

async function projectsFetchData() {
  try {
    const response = await fetch(projects_url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data:", data);
    projects = data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// projects data show

function displayProjects() {
  const ProjectsList = document.getElementById("projects-list");
  projects.forEach((project, i) => {
    const projectItem = document.createElement("a");
    projectItem.setAttribute("href", "#");
    projectItem.setAttribute("data-aos", "fade-up");
    projectItem.className =
      "proj-card h-96 w-full lg:w-[500px] text-xl font-bold";
    projectItem.innerHTML = `
     <div class="proj-pic${i + 1} flex relative items-end">
       <h3
         class="proj-title text-[#fff] absolute text-center w-full lg:text-3xl bg-[#0044bb55] mb-0 py-2"
       >
         ${project.title}
       </h3>
     </div>
     `;
    ProjectsList.appendChild(projectItem);
  });
}



// Home data fetch

async function homeFetchData() {
  try {
    const response = await fetch(home_url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data:", data);
    home = data;
    displayHome();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Home data show

function displayHome() {
  const Home = document.getElementById("hero");
    const heroItem = document.createElement("div");
    heroItem.className =
      "";
      heroItem.innerHTML = `
    <div class="bg-[url('${home.pictures}')] h-screen">
    <div class="w-100 h-full flex flex-col bg-[#0661ff85]">
      <div
        class="container lg:px-16 mx-auto w-100 h-full flex flex-col justify-center items-center lg:justify-start lg:items-start px-8 lg:ps-64 lg:pt-96 lg:text-start"
      >
        <h1
          class="h-8 md:h-12 home lg:pb-5 text-[#fff] text-xl md:text-5xl font-black uppercase"
        >
          <span> ${home.text} </span>
        </h1>

        <h1
          class="text-[#fff] text-lg md:text-3xl pb-4 md:w-1/3 md:text-justify border-b-2 border-[#fff]"
        >
          We have a passion for what we do, and for being the best in the
          industry.
        </h1>
      </div>
    </div>
  </div>
     `;
     Home.appendChild(heroItem);
}



// function servicePages(){
// console.log("service")
//   const page = document.getElementById("services-page")
//   const servicePage = document.createElement('div');
//   servicePage.className = '';
//   page.innerHTML=`

//             <p
//               class="lg:text-2xl text-blue-900 py-8 lg:py-24 px-8 lg:px-24 lg:px-60"
//             >
//            aaaa
//             </p>
//   `;
//   page.appendChild(servicePage);
// }

function addDataToPage() {

  const page = document.getElementById("services-page")
    const servicePage = document.createElement('div');
    servicePage.className = 'py-8 w-full';
    page.innerHTML=`
    <div class="pb-0 lg:pt-16">
    <div class="grid justify-center w-full ">
      <img
        src="../../Assets/images/services1.jpg"
        alt=""
        class="hover:opacity-90 duration-300 w-full shadow"
      />
    </div>
  </div>

  <div class="container mx-auto lg:text-justify" id="services-page">
    <div class="">
      <div
        class="lg:text-2xl text-blue-900 py-8 lg:py-24 px-8 lg:px-24 lg:px-60"
      >
       ${services[0].description}
      </div>
    </div>
  </div>
    `;
    page.appendChild(servicePage);
}



fetchData();
projectsFetchData();
homeFetchData();
fetchData1();


