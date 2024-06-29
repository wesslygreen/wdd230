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

    // Set default view
    showGrid();

    // Event listeners
    gridButton.addEventListener("click", showGrid);
    listButton.addEventListener("click", showList);
});