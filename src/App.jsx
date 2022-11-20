import { useState } from 'react'
import './App.css'
let serverURL = "https://api.funtranslations.com/translate/wheel-of-time-old-tongue.json"

function App() {
  let API = (text) => {
    return serverURL + "?" + "text=" + text
  }
  let [input, setInput] = useState("")
  let [output, setOutput] = useState("")
  let translate = () => {
    fetch (API(input))
    .then (response => response.json())
    .then (json => setOutput(json.contents.translated))
}
  return (
    <div className="App">
      <img src="\public\main-box.svg" alt="" id='main-box'/>
      <textarea placeholder="your english input goes here" onChange={(e)=>{setInput(e.target.value)}}></textarea>
      <button onClick={translate}>Translate</button>
      <div>{output}</div>
      <p>The Old Tongue is a now-dead language in the Wheel of Time universe (an Amazon special webseries), but now spoken only by scholars and certain nobles. Our Wheel of Time translator takes plain English and converts it to Wheel of time old tongue.</p>
    </div>
  )
}

export default App
