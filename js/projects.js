import { readJsonFile } from './json.js';
let projects = [];
(async() => {
    try{
        const json = await readJsonFile('projects.json');
        projects = JSON.parse(json);
    } catch(e) {
    console.error(`Error fetching JSON File: ${e}`);
    }
})();

export function getProjects () {
    return projects;
}