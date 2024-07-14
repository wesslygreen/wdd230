// getdates.js
document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("current-date");
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    dateElement.textContent = formattedDate;
});

