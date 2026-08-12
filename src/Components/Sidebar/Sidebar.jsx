import "./Sidebar.css";
export default function Sidebar(){
    return(
        <div className="sidebar">
        <h1 className="StockRoom">StockRoom</h1>
        <ul className="modules">
            <li>Dashboard</li>
            <li>Products</li>
            <li>Inventory</li>
            <li>Reports</li>
            <li>Settings</li>
        </ul>
        </div>
    )
}