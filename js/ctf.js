const answers = new Map();
answers.set("answer1", "i love cookies");
answers.set("answer2", "congrats");
answers.set('answer3', 'you found me!');

function showHint(hint_element_id){
    const hint_element = document.getElementById(hint_element_id);
    if (hint_element.hasAttribute("hidden")){
        hint_element.removeAttribute("hidden");
        return;
    }
    hint_element.setAttribute("hidden", "");
}

function checkAnswer(answer_element_id){
    const userInput = document.getElementById(answer_element_id).value.toLowerCase();
    if (userInput == answers.get(answer_element_id)){
        alert("correct");
        return;
    }
    alert("wrong");
}
