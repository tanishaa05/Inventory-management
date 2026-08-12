import "./CashierDashboard.css";
import {Link} from 'react-router-dom';
export default function CashierDashboard(){
    return(
        <div className="cashierDashboard">
            <h2 className="Dashboard">Dashboard</h2>
            <h6 className="welcome">Welcome back</h6>
            <div>
                <div className="threeCards">
                    <Link to="/newBilling" className="cards">
                    <p className="p">Today's Bill</p>
                    <h2 className="numbers">32</h2>  
                    </Link>
                    <Link to="/reports" className="cards">
                    <p ClassName="p">Today's Revenue </p>
                    <h2 className="numbers">₹24,632</h2>  
                    </Link>
                    <button className="button">+New Billing</button>
                </div>
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
    )
}