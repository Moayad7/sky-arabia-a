async function fetchProjectsData() {
  try {
    const response = await fetch(projects_url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data:", data);
    projects = data;

    displayProjects();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

//   show projects data
function displayProjects() {
  const ProjectsList = document.getElementById("projects-list");
  projects.forEach((project, i) => {
    const projectItem = document.createElement("a");
    projectItem.setAttribute("href", "#");
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

fetchProjectsData();
