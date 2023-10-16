const array = [1, 2, 3, 4, 5];
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
  




async function fetchServicesData() {
    try {
      const response = await fetch(services_url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Data:", data);
      services = data;
      displayServices();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }


  async function fetchProjectsData() {
    try {
      const response = await fetch(projects_url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("projects:", data);
      projects = data;
      displayProjects();
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
  
  
// services data show

function displayServices() {
    const servicesList = document.getElementById("services-list");
    services.map((service, i, array) => {
      if (i < 4) {
        const serviceItem = document.createElement("div");
      serviceItem.className =
        `service${i+1} h-80 lg:h-96 w-full`;
      serviceItem.innerHTML = ` <div class="service-card lg:w-[500px] h-full bg-[#063355cc]">
       
        <strong class="card-title"> ${service.title} </strong>

        <span class="flex flex-col px-4">
        <div>
          <strong class="text-xl pb-2"> ${service.title} </strong>
          </div>
          <div>
            <p>
                ${service.description.slice(0,200) + " ..."}
            </p>
          </div>
          <div class="card-btn cursor-pointer pt-4">
            <a href="./Pages/services/${service.title}.html"
              class="border border-slate-700 bg-[#0661ff] hover:bg-[#fff] hover:text-[#0044bb] rounded p-2 duration-300"
            >
              Read more..
            </a>
          </div></span>
      </div>
       `;
      servicesList.appendChild(serviceItem);
      }
      
    });
  }


//   show projects data
function displayProjects() {
    const ProjectsList = document.getElementById("projects-list");
    projects.forEach((project, i, array) => {
        if (i < 5) {
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
        }
    });    
  }
  
  

  fetchProjectsData();
  fetchServicesData();
  homeFetchData();