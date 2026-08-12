import "./AdminDashboard.css";
import {Link} from "react-router-dom";
export default function AdminDashboard(){
    return(
        <div className="adminDashboard">
            <h2 className="Dashboard">Dashboard</h2>
            <h6 className="overviewText">Overview of your store</h6>
            <div>
                <div className="fourCards">
                    <Link to="/products" className="cards">
                    <p className="p">Total Products</p>
                    <h2 className="numbers">245</h2>  
                    </Link>
                    <Link to="/reports" className="cards">
                    <p ClassName="p">Today's Sales </p>
                    <h2 className="numbers">₹18,500</h2>  
                    </Link>
                    <Link to="/inventory" className="cards">
                    <p ClassName="p">Revenue Card</p>
                    <h2 className="numbers">₹2,45,000</h2>  
                    </Link>
                    <Link to="/inventory" className="cards">
                    <p ClassName="p">Low Stock Alert</p>
                    <h2 className="numbers">12</h2>  
                    </Link>
                </div>
                <div className="tableBox">
                <h4 className="recentSales">Recent Sales</h4>
                <table className="table">
                    <thead className="heading">
                        <tr >
                            <th className="rows">Invoice_Id</th>
                            <th className="rows">Customer</th>
                            <th className="rows">Amount</th>
                            <th className="rows">Payment</th>
                            <th className="rows">Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr >
                            <td className="rows">INV-10065</td>
                            <td className="rows">Rahul Sharma</td>
                            <td className="rows">₹2399</td>
                            <td className="rows">UPI</td>
                            <td className="rows">12 May,10:30 AM</td>
                        </tr>

                        <tr>
                            <td className="rows">INV-10064</td>
                            <td className="rows">Priya Verma</td>
                            <td className="rows">₹1850</td>
                            <td className="rows">Card</td>
                            <td className="rows">12 May,10:15 PM</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}