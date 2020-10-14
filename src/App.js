import React, { useState } from 'react';
import { createPortal } from "react-dom"
import './App.css';

function Portal({ children }) {
  return (
    <>{createPortal(children, document.body)}</>
  )
}

function Modal({ isOpen, onClose }) {
  return (
    <Portal>
      {isOpen &&
        <div className="modal-base" onClick={onClose}>
          <div className="modal-content">
            <p>Modalです</p>
          </div>
        </div>}
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
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
}


export default App;
