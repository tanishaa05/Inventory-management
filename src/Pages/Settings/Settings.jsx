import {useState} from "react";
import "./Settings.css";
import {Link} from "react-router-dom";
export default function Settings(){
    const[enternew, setEnternew]=useState("");
    const[confirmnew,setConfirmnew]=useState("");
       return(
        <div className="settingspage">
        <h1 className="settings">Settings</h1>
        <span className="manage"> Manage your account and system settings </span>
        <div className="div1settings">
         <h2 className="changepassword">Change password</h2>
         <span>Update your password</span>
         <div className="password">
         <div className="enterNewPassword">
         <label htmlFor="enterNew" className="text">New Password</label>
         <input type="text" id="enterNew" placeholder="Enter new password"
         onChange={(e)=>setEnternew(e.target.value)}
         /></div>
         <div className="enterNewPassword">
         <label htmlFor="confirmNew" className="text">Confirm New Password</label>
         <input id="confirmNew" type="text" placeholder="Confirm new password"
         onChange={(e)=>setConfirmnew(e.target.value)}
         />
         </div>
         </div>
         <div className="buttondiv">
         <button className="updatePasswordButton" onClick={()=>console.log("clicked")}>Update Password</button>
        </div>
        </div>
        <div className="userLogout">
        <div className="div2settings">
         <h2 className="settings">User Management</h2>   
         <span>Manage users and their access to the system</span>
         <div className="manageUsersDiv">
         <Link to="/settings/usermanagement" className="manageUsers">Manage Users →</Link>
         </div>
        </div>
        <div className="div2settings">
         <h2 className="settings">Logout</h2>   
         <span>Sign out of your account and return to the login page</span>
         <div className="buttondiv">
         <button className="logout" onClick={()=>console.log("clicked")}>Logout</button>  
         </div>
        </div>
        </div>
        </div>
       )
}