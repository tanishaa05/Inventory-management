import {Outlet} from "react-router-dom";
import "./AppLayout.css"
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
export default function AppLayout(){
    return(
        <div className="appLayout">
            <Sidebar/>
            <div className="mainPage">
                <Topbar/>
                <Outlet/>
            </div>
        </div>

    )
}