import React, { useState } from 'react';
import { createPortal } from "react-dom"
import logo from './logo.svg';
import './App.css';

function Portal({ children }) {
  return (
    <>{createPortal(children, document.body)}</>
  )
}

function Modal({ isOpen }) {
  return (
    <Portal>
      {isOpen && <div>Modalです</div>}
    </Portal>
  )
}


function App() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className="App">
        <button onClick={() => { setOpen(!isOpen) }}>Push</button>
      </div>
      <Modal isOpen={isOpen} />
    </>
  );
}


export default App;
