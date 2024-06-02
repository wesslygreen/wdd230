const visitsElement = document.querySelector("#pageVisits");
 
let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;
 
if (numVisits != 0)
{
    visitsElement.textContent = numVisits;
} else {
    visitsElement.textContent = "This is your fist visit. Welcome!";
}
 
numVisits++;
 
localStorage.setItem("numVisits",numVisits);