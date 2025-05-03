function executeCommand() {
    let message = document.getElementById("inputMessage");
    let text = message.value;
    let arrayFromText = text.split(" ");
  
    let historyContainer = document.getElementById("arrDiv");
    console.log(arrayFromText);
  
    
    
    for (let i = 0; i < arrayFromText.length; i++) {
      console.log(i, arrayFromText[i]);
      historyContainer.innerHTML += arrayFromText[i] + " ";
    }
  
    historyContainer.innerHTML += "<hr>";
    message.value = "";
  }
  
  function clearHistory() {
    let historyContainer = document.getElementById("arrDiv");
    historyContainer.innerHTML = "";
  }

  