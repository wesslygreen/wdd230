const baseURL = "https://wesslygreen.github.io/wdd230/";
const linksURL = "https://wesslygreen.github.io/wdd230/data/links.json";
 
async function getLinks() {
  const response = await fetch(linksURL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  displayLinks(data);
}
 
function displayLinks(data) {
  const weeks = data.weeks;
  const container = document.querySelector("#activity-links");
  container.innerHTML = "";
 
  weeks.forEach(week => {
    const weekDiv = document.createElement("div");
    weekDiv.classList.add("week");
 
    const weekTitle = document.createElement("h3");
    weekTitle.textContent = week.week;
    weekDiv.appendChild(weekTitle);
 
    const linkList = document.createElement("ul");
 
    week.links.forEach(link => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linkList.appendChild(listItem);
    });
 
    weekDiv.appendChild(linkList);
    container.appendChild(weekDiv);
  });
}
 
getLinks().catch(error => {
  console.error('Error fetching the links:', error);
});