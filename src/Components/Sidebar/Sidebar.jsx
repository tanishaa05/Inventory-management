import "./Sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar(){
    return(
        <div className="sidebar">
        <h1 className="StockRoom">StockRoom</h1>
        <ul className="modules">
            <li><Link to="/admin/dashboard" className="list">Dashboard</Link></li>
            <li><Link to="/products" className="list">Products</Link></li>
            <li><Link to="/inventory" className="list">Inventory</Link></li>
            <li><Link to="/reports" className="list">Reports</Link></li>
            <li><Link to="/settings" className="list">Settings</Link></li>
        </ul>
        </div>
    )
}