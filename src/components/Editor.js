import { useEffect, useRef } from "react"
import { setCodeString } from "../store/plainCodeSlice";
import { useDispatch, useSelector } from "react-redux";

function Editor() {
    const codeRef = useRef("code")
    const dispatch = useDispatch()
    const { codeString } = useSelector((state) => state.plainCode)
    const { currentView: { codeView } } = useSelector((state) => state.presentView)

    // useEffect(() => {
    //     codeRef.current.innerText = codeString;
    //     // eslint-disable-next-line
    // }, [])
    const updateCodeString = () => {
        dispatch(setCodeString(codeRef.current.innerText))
    }

    return <>
        <div
            ref={codeRef}
            id="code"
            className={`col-lg-6 bg-primary h-100 text-white p-3 ${codeView ? "d-block" : "d-none"}`}
        >
            <div className="line">

                <span className="tag-lt">{"<"}</span>
                <span className="tag-name">!DOCTYPE</span>
                <span>{" "}</span>
                <span className="tag-attribute__key">html</span>
                <span className="tag-gt">{">"}</span>

                <br/>

                <span className="tag-lt">{"<"}</span>
                <span className="tag-name">html</span>
                <span className="tag-gt">{">"}</span>

                <br/>

                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="tag-lt">{"<"}</span>
                <span className="tag-name">head</span>
                <span className="tag-gt">{">"}</span>

                <br/>

                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="tag-lt">{"<"}</span>
                <span className="tag-name">title</span>
                <span className="tag-gt">{">"}</span>

                <span className="tag-text">React App</span>

                <span className="tag-lt">{"<"}</span>
                <span className="tag-slash">{"/"}</span>
                <span className="tag-name">title</span>
                <span className="tag-gt">{">"}</span>

                <br/>

                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="tag-lt">{"<"}</span>
                <span className="tag-slash">{"/"}</span>
                <span className="tag-name">head</span>
                <span className="tag-gt">{">"}</span>
                
                <br/>

                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="tag-lt">{"<"}</span>
                <span className="tag-name">body</span>
                <span className="tag-gt">{">"}</span>

                <br/>

                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="tag-lt">{"<"}</span>
                <span className="tag-name">h1</span>
                <span>{" "}</span>
                <span className="tag-attribute__key">style</span>
                <span>{"="}</span>
                <span className="tag-attribute__value">{"\"color: red;\""}</span>
                <span className="tag-gt">{">"}</span>

                <span>Hello React Dev</span>

                <span className="tag-lt">{"<"}</span>
                <span className="tag-slash">{"/"}</span>
                <span className="tag-name">h1</span>
                <span className="tag-gt">{">"}</span>

                <br/>

                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="tag-lt">{"<"}</span>
                <span className="tag-slash">{"/"}</span>
                <span className="tag-name">body</span>
                <span className="tag-gt">{">"}</span>

                <br/>

                <span className="tag-lt">{"<"}</span>
                <span className="tag-slash">{"/"}</span>
                <span className="tag-name">html</span>
                <span className="tag-gt">{">"}</span>
            </div>
        </div>
    </>
}

export default Editor;