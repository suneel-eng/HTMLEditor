import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import logo from "./assets/images/logo.svg"
import code from "./assets/images/code.svg"
import preview from "./assets/images/preview.svg"
import './App.css';

import { useEffect, useRef, useState } from "react"

function App() {
  const previewRef = useRef("preview")
  const codeRef = useRef("code")

  const [currentView, setCurrentView] = useState({
    codeView: true,
    preView: true
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 992 ? presentCodeView() : presentBothCodeViewAndPreView()
    })
    return () => {}
  }, [])

  const presentCodeView = () => {
    setCurrentView({codeView: true, preView: false})
  }

  const presentPreView = () => {
    setCurrentView({codeView: false, preView: true})
  }

  const presentBothCodeViewAndPreView = () => {
    setCurrentView({codeView: true, preView: true})
  }

  const run = () => {
    previewRef.current.contentDocument.body.innerHTML = codeRef.current.innerText;
  }
  
  return (
    <div className="container-fluid g-0 vh-100">
      <nav className="navbar bg-body-tertiary shadow" style={{ height: "60px" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            HTMLEditor
          </a>
          <div className="btn-group d-lg-none">
            <button onClick={() => presentCodeView()} className={`btn btn-primary ${currentView.codeView && "active"}`} aria-current="page">
              <img src={code} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            </button>
            <button onClick={() => presentPreView()} className={`btn btn-primary ${currentView.preView && "active"}`}>
              <img src={preview} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            </button>
          </div>
        </div>
      </nav>
      <div className="row g-0" style={{ height: "calc(100vh - 60px)" }}>
        <div ref={codeRef} id="code" className={`col-lg-6 bg-primary h-100 text-white p-3 ${currentView.codeView ? "d-block" : "d-none"}`} contentEditable onKeyUp={() => run()}></div>
        <div className={`col-lg-6 bg-white h-100 ${currentView.preView ? "d-block" : "d-none"}`}>
          <iframe title="preview" ref={previewRef} className="w-100 h-100"></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
