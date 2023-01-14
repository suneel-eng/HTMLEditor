import logo from "../assets/images/logo.svg"
import code from "../assets/images/code.svg"
import preview from "../assets/images/preview.svg"

import { presentCodeView, presentPreView } from "../store/presentViewSlice";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {

    const { currentView: { codeView, preView } } = useSelector((state) => state.presentView)
    const dispatch = useDispatch()

    return <nav className="navbar bg-body-tertiary shadow" style={{ height: "60px" }}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
        HTMLEditor
      </a>
      <div className="btn-group d-lg-none">
        <button onClick={() => dispatch(presentCodeView())} className={`btn btn-primary ${codeView && "active"}`} aria-current="page">
          <img src={code} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
        </button>
        <button onClick={() => dispatch(presentPreView())} className={`btn btn-primary ${preView && "active"}`}>
          <img src={preview} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
        </button>
      </div>
    </div>
  </nav>;
}

export default NavBar;