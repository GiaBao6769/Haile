import { preloadTemplates , artObjs, suggestArtObjs} from "./preload.js";



async function addJournalCard(target, journal){
    let root = await preloadTemplates();

    const template = root.querySelector("#ARTICLECARD-TEMP");

    if (!template) {
        console.error("Template not found:", "articleCard");
        return;
    }
    let clone = template.content.cloneNode(true);
    clone.querySelector(".articleCardLink").href = `articleTemplate.html?journal=journals/${journal.path}`;
    clone.querySelector(".articleCardImg").src = `journals/${journal.thumbnail}`;
    clone.querySelector(".articleCardTitle").textContent = journal.title;
    clone.querySelector(".articleCardDesc").textContent = journal.desc;

    for (let tag of journal.hashtags){
        const a = document.createElement("a");
        a.classList.add("hashtag")
        a.textContent = tag;
        clone.querySelector(".articleCardHashtags").appendChild(a);
    }

    document.getElementById(target).appendChild(clone);
}

async function generateLatestArticle(){
    try{
        artObjs.forEach(aO => {
            addJournalCard("LATEST", aO);
        })
    }
    catch (err){
        console.error(err);
    }
}

async function generateSuggestArticle(){
    try{
        suggestArtObjs.forEach(aO => {
            addJournalCard("SUGGEST-ARTICLES", aO);
        })
    }
    catch (err){
        console.error(err);
    }
}

generateSuggestArticle()
generateLatestArticle()
