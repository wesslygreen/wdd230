// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();
 
// Get the last modified date of the document
const lastModifiedDate = new Date(document.lastModified);
 
// Get the last modified date in a formatted string
const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString();
 
// Get the p element in the footer
const lastModified = document.getElementById("lastModified");
lastModified.innerHTML = formattedLastModifiedDate;


// responsive menu
 
const hamburgerElement = document.querySelector("#menu");
const navElement = document.querySelector(".navigation");
 
hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("current-date");
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    dateElement.textContent = formattedDate;
});

