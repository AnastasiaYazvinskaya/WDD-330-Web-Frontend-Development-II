const links = [
    {
        label: "Week1 notes",
        url: "W01/index.html"
    }
];

let ol = document.querySelector("ol");
for (let link of links) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", link.url);
    a.textContent = link.label;
    li.appendChild(a);
    ol.appendChild(li);
}