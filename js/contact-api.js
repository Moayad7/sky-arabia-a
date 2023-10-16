const contact_url = "https://dash.skyalarabia.com/api/contact";



async function fetchContactsData() {
    try {
      const response = await fetch(contact_url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("contacts:", data);
      contacts = data;
      displayContacts();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

//   show projects data
function displayContacts() {
    const whatsapp = document.getElementById("whatsapp");
    const facebook = document.getElementById("facebook");
    const instagram = document.getElementById("instagram");
    const twitter = document.getElementById("twitter");
    const snapchat = document.getElementById("snapchat");
    const linkedin = document.getElementById("linkedin");
    const map = document.getElementById("map");
    whatsapp.setAttribute("href", `https://api.whatsapp.com/send?phone=${contacts.whatsapp}`);
    facebook.setAttribute("href", `${contacts.facebook}`);
    instagram.setAttribute("href", `${contacts.instagram}`);
    twitter.setAttribute("href", `${contacts.twitter}`);
    snapchat.setAttribute("href", `${contacts.snapchat}`);
    linkedin.setAttribute("href", `${contacts.linkedin}`);
    map.setAttribute("data-aos", `fade-up`);    map.innerHTML=`
    <iframe
                src="${contacts.maps}"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full"
              ></iframe>
    `
  }
  
  

  fetchContactsData();