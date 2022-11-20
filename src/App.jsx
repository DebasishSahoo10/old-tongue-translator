import { useState } from 'react'
import './App.css'
let serverURL = "https://api.funtranslations.com/translate/wheel-of-time-old-tongue.json"

function App() {
  let API = (text) => {
    return serverURL + "?" + "text=" + text
  }
  let [input, setInput] = useState("")
  let [output, setOutput] = useState("your output will come here")
  let translate = () => {
    fetch (API(input))
    .then (response => response.json())
    .then (json => setOutput(json.contents.translated))
}
  return (
    <div className="App">
      
      <img src="\public\main-box.svg" alt="" id='main-box'/>
      <h1>old tongue translator</h1>
      <textarea placeholder="your english input goes here" onChange={(e)=>{setInput(e.target.value)}} id='input-field'></textarea>
      <div id='output-field'>{output}</div>
      <button onClick={translate}>Translate</button>
      
      <p>The Old Tongue is a now-dead language in the Wheel of Time universe (an Amazon special webseries), but now spoken only by scholars and certain nobles. Our Wheel of Time translator takes plain English and converts it to Wheel of time old tongue.</p>
      <img src="\public\emoji.svg" alt="" id='emoji'/>
    </div>
  )
}

export default App
