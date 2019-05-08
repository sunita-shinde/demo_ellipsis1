import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
     <h2>text-overflow: clip (default):</h2>
<div class="a">Hello world!</div>

<h2>text-overflow: ellipsis:</h2>
<div class="b">Hello world!</div>

<h2>text-overflow: "----" (user defined string):</h2>
<div class="c">Hello world!</div>

    </div>
  );
}

export default App;
