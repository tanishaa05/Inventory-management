import {useState} from "react";
import "./Login.css";
export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        console.log("Form Submitted");
        console.log(email);
        console.log(password);
    }
    return(
        <div className="outerBox">
            <h1 className="StockRoom1">StockRoom</h1>
            <p className="outerP">Retail Inventory and Billing Management System</p>
            <div className="innerBox">
                <h1 className="welcome">Welcome Back</h1>
                <p className="outerP">Sign in to continue to your account</p>
                <form onSubmit={handleSubmit}
                className="form">
                <label className="email">Email</label>
                <input type="email" placeholder="Enter your email"
                 className="emailInput"
                 onChange={(e)=> setEmail(e.target.value)}
                />
                <label className="password">Password</label>
                <input type="password" placeholder="Enter your password"
                className="passwordInput"
                onChange={(e)=> setPassword(e.target.value)}
                />
                <div className="rememberMe">
                    <input id="rememberMe" type="checkbox"/>
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <button className="signIn">Sign in</button> 
                </form>
            </div>
        </div>
    );
}