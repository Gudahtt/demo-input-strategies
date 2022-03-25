import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClick = () => {
    document.getElementById('clear-on-navigate').innerHTML = ""
    navigate('done')
  }

  return (
    <div>
      <h1>Input Strategies</h1>

      <div className="strategies">
        <div>
          <h2>Input</h2>
          <input type="text"/>
        </div>
        <div>
          <h2>Input (password)</h2>
          <input type="password" />
        </div>
        <div>
          <h2>Input (autocomplete off)</h2>
          <input autocomplete="off" type="text" />
        </div>
        <div>
          <h2>Input (cleared on navigate)</h2>
          <input id="clear-on-navigate" type="text"/>
        </div>
        <div>
          <h2>Textarea</h2>
          <textarea />
        </div>
        <div>
          <h2>Textarea (autocomplete off)</h2>
          <textarea autocomplete="off" />
        </div>
        <div>
          <h2>Contenteditable</h2>
          <div contentEditable />
        </div>
      </div>
      <footer>
        <button onClick={onClick}>Next</button>
      </footer>
    </div>
  )
}

export default Home