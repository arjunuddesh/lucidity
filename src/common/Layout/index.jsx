import { memo } from "react"
import "./style.css";
import Router from "../../routes";
const Layout=()=>{
    return(
        <div className="layout_wrapper">
            <div className="main">
             <Router/>
            </div >
        </div>
    )
}

export default memo(Layout);