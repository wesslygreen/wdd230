document.addEventListener('DOMContentLoaded', function() {
    const gridButton = document.querySelector("#grid-view-btn");
    const listButton = document.querySelector("#list-view-btn");
    const display = document.querySelector("article");

    // Function to show grid view
    const showGrid = () => {
        display.classList.add("grid");
        display.classList.remove("list");
    };

    // Function to show list view
    const showList = () => {
        display.classList.add("list");
        display.classList.remove("grid");
    };

    // Function to display member data
    const displayMemberData = (members) => {
        display.innerHTML = "";  // Clear existing content

        members.forEach(member => {
            const section = document.createElement("section");
            
            section.innerHTML = `
                <img src="../chamber/images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.membershipLevel} Member</p>
                <p>${member.otherInfo}</p>
                <a href="${member.website}" target="_blank">Website</a>
            `;
            
            display.appendChild(section);
        });
    };

    // Fetching the JSON data and displaying it
    fetch('../data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMemberData(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Set default view
    showGrid();

    // Event listeners
    gridButton.addEventListener("click", showGrid);
    listButton.addEventListener("click", showList);
});