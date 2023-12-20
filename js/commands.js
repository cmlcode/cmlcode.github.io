import { readJsonFile } from './json.js';
import { getProjects } from './projects.js';

/* Read commands json file */
let commands = [];
(async() => {
    try{
        const json = await readJsonFile('commands.json');
        commands = JSON.parse(json);
    } catch(e) {
    console.error(`Error fetching JSON File: ${e}`);
    }
})();

/* Export command sfrom json file */
export function getCommands () {
    return commands;
}

/* Map commands to functions */
export const commandMap = {
    about,
    help,
    projects,
    socials,
    close,
}

/* Command functions */
export function about(){
    const about_info = "I'm Chris Lewis! I'm a software engineer located in Houston.\nI've worked at Management Controls as a QA Automation Engineer\nI act as the VP of Administration for Cookies and Code, the premier coding club at Tulane University.";
    const skills = "I'm skilled in C/C++, C#, Python, SQL, Git, Selenium, HTML, CSS, JS, and Django.";
    return about_info + "\n" + skills;
}

export function help(){
    function addCommand(command){
        output += command.name + ": " + command.description + "\n";
    }
    let output = "";
    commands.forEach(addCommand);
    return output;
}

export function projects(){
    function addOutline(projectOutline){
        output += "\t" + projectOutline + "\n";
    }
    function addProject(project){
        output += project.name + ":\n";
        project.outline.forEach(addOutline);
    }
    let output = "";
    getProjects().forEach(addProject);
    return output;
}

export function socials(){
    const email = 'email: clewis24@tulane.edu'
    const linkedin = 'linkedin: https://www.linkedin.com/in/christopher-m-lewis/'
    const github = 'github: https://github.com/cmlcode'
    return email + "\n" + linkedin + "\n" + github;
}

export function close(){
    window.location.href = "../index.html";
    return "Closing terminal"
}