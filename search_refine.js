import {generateArticleCards, artObjs} from "./preload.js"; 


async function refineArtWithTag(hashtag){
    let refinedArts = [];
    for (let artObj of artObjs){
        if (artObj.hashtags.includes(hashtag)){
            refinedArts.push(artObj);
        }
    }
    return refinedArts;
}

async function refineArtWithTitle(content){
    content = content.toLowerCase();
    let refinedArts = [];
    for (let artObj of artObjs){
        let checkTag = false;
        for (let tag of artObj.hashtags){
            if (tag.toLowerCase() === content){
                checkTag = true;
                break;
            }
        }
        if (checkTag || artObj.title.toLowerCase().includes(content)){
            refinedArts.push(artObj);
        }
    }

    return refinedArts;
}

const pathName = window.location.pathname;

if (pathName.includes("search")) {
    const params = new URLSearchParams(window.location.search);
    const tag = params.get("hashtag");
    const searchContent = params.get("q");

    if (tag) {
        const refinedArts = await refineArtWithTag(tag);
        generateArticleCards("LATEST", refinedArts);
        document.querySelector(".numberOfSearchResults").textContent = `${refinedArts.length}`;
        document.querySelector(".searchContent").textContent = `#${tag}`;
        if (refinedArts.length==1){
            document.querySelector(".plural").style.display = "none";
        }
    }

    else if (searchContent){
        const refinedArts = await refineArtWithTitle(searchContent);
        generateArticleCards("LATEST", refinedArts); 
        document.querySelector(".numberOfSearchResults").textContent = `${refinedArts.length}`;
        document.querySelector(".searchContent").textContent = `${searchContent}`;
        if (refinedArts.length==1){
            document.querySelector(".plural").style.display = "none";
        }
    }
}
