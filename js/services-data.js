

async function fetchData() {
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



  
// services data show

function displayServices() {
    const servicesList = document.getElementById("services-list");
    services.forEach((service, i) => {
      const serviceItem = document.createElement("div");
      serviceItem.className =
        "w-full h-80 bg-slate-300  col-span-1";
      serviceItem.innerHTML = `
       
       <div
         class="service-card-content bg-[url('../Assets/images/services${
           i + 1
         }.webp')] bg-cover bg-center hover:bg-left duration-500 h-full w-full"
       >
         <div
           class="w-full h-full flex justify-center items-center relative bg-[#000000aa] hover:lg:bg-[#0044bbaa] duration-500"
         >
           <span
             class="flex flex-col justify-center px-4 lg:px-8 items-center"
           >
             <strong class="text-xl lg:text-3xl text-[#fff] pb-2">
               ${service.title}
             </strong>
  
             <div class="w-full card-btn cursor-pointer pt-4 duration-500">
               <a
                 href="./services/${service.title}.html"
                 class="w-full text-[#fff] bg-[#058ecc00] border-2 hidden-btn hover:bg-[#fff] hover:text-[#0044bb] p-2 duration-500"
               >
                 Read more..
               </a>
             </div></span
           >
         </div>
       </div>
       `;
      servicesList.appendChild(serviceItem);
    });
  }


  fetchData();