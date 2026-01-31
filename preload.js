let templateRoot = null;

export async function preloadTemplates() {
    if (templateRoot) return templateRoot;

    const res = await fetch("templates.html");
    const html = await res.text();

    const div = document.createElement("div");
    div.innerHTML = html;

    templateRoot = div;
    return templateRoot;
}


// let artObj = {
//     "title": "",
//     "desc": "",
//     "author": "",
//     "date": "",
//     "thumbnail": "",
//     "tags": []
// };




async function createAObj(path){
    let PATH = "journals\\" + path + "\\journal.md"; 
    const res = await fetch(PATH);
    const data = await res.text();
    const lines = data.split("\n");

    let title = null, date = null, desc = null, thumbnail = null, hashtags = null;

    for (const line of lines) {
        if (line.startsWith("[title]")) {
            title = line.slice(7);
        }
        else if (line.startsWith("[date]")) {
            date = line.slice(6);
        }
        else if (line.startsWith("[desc]")) {
            desc = line.slice(6);
        }
        else if (line.startsWith("[img]") && thumbnail == null) {
            let keys = line.split(":");
            thumbnail = `${path}/images/${keys[0].slice(6)}`;
        }
        else if (line.startsWith("[hashtags]")) {
            let keys = line.split(" ");
            hashtags = keys.slice(1);
        }
    }

    return new Object({
        "title":title,
        "desc": desc,
        "date": date,
        "thumbnail": thumbnail,
        "hashtags": hashtags,
        "path": path
    });
}


async function getArtObjs(path){
    const res = await fetch(path);
    const data = await res.json();
    const jObjs = Object.values(data.journalList);
    let artObjs = [];
    for (let jO of jObjs){
        let Oj = await createAObj(jO.path);
        artObjs.push(Oj);
    }
    return artObjs
}

export const artObjs = await getArtObjs("journal_list.json");

export const suggestArtObjs = await getArtObjs("suggest_list.json");

// remember to remove /r next time
