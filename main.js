// history
const historyContainer = document.getElementById("history");

function clearInput() {
    let message = document.getElementById("inputMessage");
    message.value = "";
}

function clearHistory() {
    let historyContainer = document.getElementById("history");
    historyContainer.innerHTML = "Command history will be shown here...";
}

async function getCatFact() {
    const url = "https://catfact.ninja/fact";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        let message = json.fact;
        return message;
    }
    catch (error) {
        let message = error.message;
        return error;
    }
}

async function getFunFact() {
    const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        let message = json.text;
        return message;
    }
    catch (error) {
        let message = error.message;
        return error;
    }
}


function getInput() {
    let commandTxt = document.getElementById("inputMessage");
    let text = commandTxt.value;

    let arrayFromText = text.split(" ");
    return (arrayFromText);
}

function executeCommand() {

    let inputArr = getInput()
    let command = inputArr[0]
    let parameter = inputArr[1]

    
        console.log("command: ", command)
        console.log("parameter: ", parameter)

    if(!command)
    {
        historyContainer.innerHTML += "<hr>Your command cannot be empty"
    }
    else
    {
        switch (command) {
            case "cat":
                switch(parameter)
                {
                    case "-f":
                    case "--fact":
                        getCatFact().then((message) => {
                            historyContainer.innerHTML += `<hr>🐈${message}`
                        })
                    break;

                    case "-i":
                    case "--image":
                        historyContainer.innerHTML += `<hr><img src='https://cataas.com/cat?${Date.now()};' alt='cat'>`

                    default:
                        historyContainer.innerHTML += "<hr>😺"                      
                    break;
                }
                break;
    

            case "fact":
                getFunFact().then((message) => {
                    historyContainer.innerHTML += `<hr>💡${message}`
                })
            break;


            case "clear":
                clearHistory();
                historyContainer.innerHTML += "<hr>History cleared"
                break;
            default:
                historyContainer.innerHTML += `<hr>Unknown command "${command}"`
                
                break;
        }
    }


}

getCatFact()