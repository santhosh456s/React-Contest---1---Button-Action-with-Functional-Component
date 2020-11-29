import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [paragraph, setparagraph] = React.useState(
    "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  );
  return (
    <div id="main">
      <button id="click" onClick={() => setparagraph(paragraph)}></button>
      <p id="para">{paragraph}</p>
    </div>
  );
}

export default App;
