import { memo } from "react"
import "./style.css";
import Router from "../../routes";
import Dashboard from "../../components/Dashboard";
const Layout=()=>{
    return(
        <div className="layout_wrapper">
            <div className="main">
             {/* <Router/> */}
             <Dashboard/>
            </div >
        </div>
    )
}

export default memo(Layout);