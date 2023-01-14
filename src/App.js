import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import NavBar from "./components/NavBar"
import Editor from "./components/Editor"
import Preview from "./components/Preview"

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { presentDesktopCompatibleView, presentMobileCompatibleView } from "./store/presentViewSlice";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      window.innerWidth < 992 ? dispatch(presentMobileCompatibleView()) : dispatch(presentDesktopCompatibleView())
    return () => {}
  }, [dispatch])
  
  return (
    <div className="container-fluid g-0 vh-100">
      <NavBar/>
      <div className="row g-0" style={{ height: "calc(100vh - 60px)" }}>
        <Editor/>
        <Preview/>
      </div>
    </div>
  );
}

export default App;
