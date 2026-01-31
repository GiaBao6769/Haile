import { preloadTemplates } from "./preload.js";

export async function getComponent(templateId) {
    const root = await preloadTemplates();

    const template = root.querySelector(`#${templateId}`);

    if (!template) {
        console.error("Template not found:", templateId);
        return;
    }
    return template.content.cloneNode(true);
}

export async function addComponent(templateId, targetId) {
    const template = await getComponent(templateId);

    const target = document.getElementById(targetId);
    target.appendChild(template);
}

addComponent("NAVBAR-TEMP", "NAVBAR");
addComponent("FOOTER-TEMP", "FOOTER");