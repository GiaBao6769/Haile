import {addComponent, getComponent} from "./load_templates.js"

async function loadArticle(journalPath) {
    try {
        const res = await fetch(journalPath + "/journal.md");
        const data = await res.text();
        const lines = data.split("\n");

        for (const line of lines) {
            if (line.startsWith("[title]")) {
                document.getElementById("TITLE").textContent = line.slice(7);
            }
            else if (line.startsWith("[authors]")) {
                const p = document.createElement("p");
                p.textContent = `Author: ${line.slice(9)}`;
                document.getElementById("AUTHORS").appendChild(p);
            }
            else if (line.startsWith("[date]")) {
                document.getElementById("DATE").textContent = `Date: ${line.slice(6)}`;
            }
            else if (line.startsWith("[desc]")) {
                document.getElementById("DESC").textContent = line.slice(6);
            }
            else if (line.startsWith("[source]")) {
                document.getElementById("SOURCE").textContent = `Source: ${line.slice(8)}`;
            }
            else if (line.startsWith("[img]")) {
                const newElement = await getComponent("IMGDIV-TEMP");

                let keys = line.split(":");
                newElement.querySelector("img").src = `${journalPath}/images/${keys[0].slice(6)}`;
                newElement.querySelector("p").textContent = keys[1];
                document.getElementById("CONTENT-SECTION").appendChild(newElement);
            }
            else if (line.startsWith("[hashtags]")) {
                // TODO
            }
            else if (line.startsWith("[thumbnail]")){

            }
            else {
                const p = document.createElement("p");
                p.textContent = line;
                document
                    .getElementById("CONTENT-SECTION")
                    .appendChild(p);
            }
        }
    }
    catch (err) {
        console.error(err);
    }
}


const pathName = window.location.pathname;

if (pathName.includes("articleTemplate")) {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("journal");

    if (path) {
        loadArticle(path);
    }
}
