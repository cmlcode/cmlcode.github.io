import { History } from './history.js';
import { commandMap, getCommands } from './commands.js';

const commandInput = document.getElementById('command-input');
const outputDiv = document.getElementById('output');
const history = new History();
let current_history_id = 0;
let recentCommands = [];

// Listens for the enter key and get values
commandInput.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'Enter':
            if (commandInput.value == 'close') {window.location.href = "../index.html";return;}
            current_history_id = 0;
            event.preventDefault();
            const command = commandInput.value;
            history.addCommand(command);
            executeCommand(command);
            return;
        case 'ArrowUp':
            current_history_id++;
            event.preventDefault();
            recentCommands = history.getRecentCommands();
            if (current_history_id >= recentCommands.length) {
                current_history_id = recentCommands.length;
            }
            commandInput.value = recentCommands[recentCommands.length - current_history_id];
            return;
        case 'ArrowDown':
            current_history_id--;
            event.preventDefault();
            recentCommands = history.getRecentCommands();
            if (current_history_id <= 0) {
                commandInput.value = '';
            }
            else{
                commandInput.value = recentCommands[recentCommands.length - current_history_id];
            }
            return;
    }
});

// Process output
function executeCommand(commandName) {
    let commandFunction = null;
    commandInput.value = '';
    const command = getCommands().find((cmd) => cmd.name === commandName);
    try {commandFunction = commandMap[command.execute];}
    catch(e) {writeCommand(commandName, `Command '${commandName}' not found. Type help for the command list.`); return;}

    if (commandFunction) {
        const result = commandFunction();
        writeCommand(commandName, result);
    }
    else {
        writeCommand(commandName, `Command '${commandName}'. Type help for the command list.`);
    }
    
}

// Write command
function writeCommand(commandName, outputText) {
    //Write command prompt
    const promptText = `guest@cml_portfolio: ${commandName}\n`;
    const promptTextElement = document.createElement('span');
    promptTextElement.className = 'prompt';
    promptTextElement.textContent = promptText;
    outputDiv.appendChild(promptTextElement);
    //write command output
    const outputTextElement = document.createElement('div');
    outputTextElement.className = 'output';
    outputTextElement.textContent = outputText;
    outputDiv.appendChild(outputTextElement);
    //scroll to bottom
    outputDiv.scrollTop = outputDiv.scrollHeight;
}
