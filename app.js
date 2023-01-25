var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#txtInput");
var output = document.querySelector("#output");

var srcURL = "https://api.funtranslations.com/translate/groot.json"

function getURL(text) {
    return srcURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with the server!")
}

function clickEventHandler() {
    var inputText = txtInput.value;

    fetch(getURL(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        output.innerText = outputText; 
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickEventHandler)
