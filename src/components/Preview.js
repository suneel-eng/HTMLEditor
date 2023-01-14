import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Preview() {
    const previewRef = useRef("preview")
    const { codeString } = useSelector((state) => state.plainCode)
    const { currentView: { preView } } = useSelector((state) => state.presentView)

    useEffect(() => {
        previewRef.current.contentDocument.body.innerHTML = codeString;
    }, [codeString])

    return <div className={`col-lg-6 bg-white h-100 ${preView ? "d-block" : "d-none"}`}>
    <iframe title="preview" ref={previewRef} className="w-100 h-100"></iframe>
  </div>
}

export default Preview;