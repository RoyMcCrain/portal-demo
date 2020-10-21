import React, { useState, useRef } from 'react';
import { createPortal } from "react-dom"
import './App.css';
import { CSSTransition } from 'react-transition-group';


function Portal({ children }) {
  return (
    <>{createPortal(children, document.body)}</>
  )
}

function Modal({ isOpen, onClose }) {
  const ref = useRef(null);

  // 開くとき 表示した後にアニメーション
  // 閉じるとき アニメーション終わった（0.4s）後に非表示にする
  const callBacks = {
    onEnter: () => {
      console.log("onEnter")
    },
    onEntering: () => {
      console.log("onEntering")
    },
    onEntered: () => {
      console.log("onEntered")
    },
    onExit: () => {
      console.log("onExit")
    },
    onExiting: () => {
      console.log("onExitiNg")
    },
    onExited: () => {
      console.log("onExited")
    },
  };
  return (
    <Portal>
      <CSSTransition classNames="modal" in={isOpen} timeout={{ enter: 1000, exit: 1000 }}  {...callBacks} nodeRef={ref} unmountOnExit>
        <>
          <div className="modal-base" onClick={onClose}>
            <div className="modal-content" ref={ref}>
              <p>Modalです</p>
            </div>
          </div>
        </>
      </CSSTransition>
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
