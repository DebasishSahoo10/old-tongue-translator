var output = document.querySelector('#output-box')
var input = document.querySelector('#input-box')
var button = document.querySelector('#translate-button')
var serverURL = ("https://api.funtranslations.com/translate/wheel-of-time-old-tongue.json")


function apiURL (text) {
    return serverURL + "?" + "text=" + text
}

function translate () {
    var inputText = input.value
    fetch (apiURL(inputText))
    .then (response => response.json())
    .then (json => output.innerText = json.contents.translated)
}

function typeIdentifier () {
    output.innerText = (" ")
}

button.addEventListener ("click", translate)
input.addEventListener ("change", typeIdentifier)