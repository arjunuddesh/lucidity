import { memo } from "react"
import Dashboard from "../../components/Dashboard"
import "./style.css";
const DashboardPage=()=>{
return(
    <div className="dashboard_wrapper">
<Dashboard/>
    </div>
)
}
export default memo(DashboardPage)