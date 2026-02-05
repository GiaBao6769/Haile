import {addComponent, getComponent} from "./load_templates.js"



async function loadArticle(journalPath) {
    try {
        const res = await fetch(journalPath + "/journal.md");
        const data = await res.text();
        const lines = data.split("\n");

        const contentSection = document.getElementById("CONTENT-SECTION");

        for (const line of lines) {
            if (line.startsWith("[title]")) {
                document.getElementById("TITLE").textContent = line.slice(7);
            }
            else if (line.startsWith("[authors]")) {
                
                let authors = line.slice(9).split(",");
                if (authors.length==1){
                    const p = document.createElement("p");
                    p.innerHTML = `<b>Author</b>: ${authors[0]}`;
                    document.getElementById("AUTHORS").appendChild(p);
                }
                else{
                    const pp = document.createElement("p");
                    pp.innerHTML = `<b>Authors</b>: `;
                    document.getElementById("AUTHORS").appendChild(pp);

                    for (let author of authors){
                        const p = document.createElement("p");
                        p.innerHTML = author;
                        p.classList.add("tab");
                        document.getElementById("AUTHORS").appendChild(p);
                    }
                }

            }
            else if (line.startsWith("[date]")) {
                document.getElementById("DATE").innerHTML = `<b>Date:</b> ${line.slice(6)}`;
            }
            else if (line.startsWith("[desc]")) {
                document.getElementById("DESC").textContent = line.slice(6);
            }
            else if (line.startsWith("[source]")) {
                document.getElementById("SOURCE").innerHTML = `<b>Source:</b> ${line.slice(8)}`;
            }
            else if (line.startsWith("[img]")) {
                const newElement = await getComponent("IMGDIV-TEMP");
                let keys = line.slice(5).split(":");
                keys[0] = keys[0].replace(" ", "");
                newElement.querySelector("img").src = `${journalPath}/images/${keys[0]}`;
                // newElement.querySelector("img").alt = keys;
                newElement.querySelector("p").textContent = keys[1];
                document.getElementById("CONTENT-SECTION").appendChild(newElement);
            }
            else if (line.startsWith("[hashtags]")) {
                // TODO
            }
            else if (line.startsWith("[thumbnail]")){
                continue;
            }
            else if (line.startsWith("[tab]")){
                const p = document.createElement("p");
                p.innerHTML = line.slice(5);
                p.classList.add("tab");
                contentSection.appendChild(p);
            }
            else if (line.startsWith("[center]")){
                const p = document.createElement("p");
                p.innerHTML = line.slice(9);
                p.classList.add("center");
                contentSection.appendChild(p);
            }
            else if (line.startsWith("[HEADING]")){
                const h = document.createElement("h2");
                h.innerHTML = line.slice(10);
                contentSection.appendChild(h);
            }
            else if (line.startsWith("[heading]")){
                const h = document.createElement("h3");
                h.innerHTML = line.slice(10);
                contentSection.appendChild(h);
            }
            else {
                let nline = line;
                if (line.startsWith("[n]")){
                    nline = line.slice(3)
                }
                const p = document.createElement("p");
                p.innerHTML = nline;
                // const words = line.split(" ");
                // for (let word of words){
                //     p.textContent += ` ${word}`;
                // }
                contentSection.appendChild(p);
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
