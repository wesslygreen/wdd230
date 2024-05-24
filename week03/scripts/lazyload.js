const currentYear = new Date().getFullYear();

const lastModifiedDate = new Date(document.lastModified);
const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString();

const lastModified = document.getElementById("lastModified");
lastModified.innerHTML = formattedLastModifiedDate;