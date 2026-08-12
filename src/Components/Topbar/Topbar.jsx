import "./Topbar.css";
import profileIcon from "../profile_icon.png";
import {useState} from "react";
export default function Topbar(){
    const [search,setSearch] = useState("");
    return(
        <div className="topbar">
        <input type="search" placeholder=" Search anything..."
        onChange={(e)=>setSearch(e.target.value)}
        className="searchBox"/>
        <div className="profile">
            <img src={profileIcon} className="profile_icon"/>
            <div className="profile_names">
            <p className="name">Name</p>
            <span className="role">Admin</span>
            </div>
        </div>
        </div>
    )
}