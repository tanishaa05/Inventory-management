import {Link} from "react-router-dom";
import "./Inventory.css";

export default function Inventory(){
    return(
        <div className="Inventorypage">
            <div className="">
                <div>
                 <h2 className="inventory">Inventory</h2>
                 <span> Monitor and manage your current stock levels    </span>
                </div>
                <div className="fourcardsinventory">
                    <Link to="/products" className="cardsinventory">
                    <p className="p">Total Products</p>
                    <h2 className="numbers">245</h2>  
                    </Link>
                    <Link to="/instock" className="cardsinventory">
                    <p ClassName="p">In Stock </p>
                    <h2 className="numbers">₹18,500</h2>  
                    </Link>
                    <Link to="/outofstock" className="cardsinventory">
                    <p ClassName="p">Out of Stock</p>
                    <h2 className="numbers">₹2,45,000</h2>  
                    </Link>
                    <Link to="/lowstock" className="cardsinventory">
                    <p ClassName="p">Low Stock Alert</p>
                    <h2 className="numbers">12</h2>  
                    </Link>
                </div>
            </div>
            <div className="inventoryTableDiv"> 
        <table className="inventory-table">
                    <thead className="inventory-heading">
                        
                        <tr >
                            <th >Product</th>
                            <th>SKU</th>
                            <th >Category</th>
                            <th >Price</th>
                            <th >Stock</th>
                            <th >Status</th>
                        </tr>
                    </thead>

                    <tbody className="inventoryTableBody">
                        <tr >
                            <td >Basmati Rice 5kg</td>
                            <td >BR-1001</td>
                            <td >Groceries</td>
                            <td >₹650</td>
                            <td >67</td>
                            <td >In Stock</td>
                        </tr>

                        <tr>
                            <td >Apples 1kgh</td>
                            <td >AP-5001</td>
                            <td >Fruits & Vegetables</td>
                            <td >₹180</td>
                            <td >24</td>
                            <td >Low Stock</td>
                        </tr>
                        <tr >
                            <td >Wireless Headphones</td>
                            <td >WH-1001</td>
                            <td >Electronics</td>
                            <td >₹2099</td>
                            <td >45</td>
                            <td >In Stock</td>
                        </tr>
                        <tr>
                            <td >Chocolate Bar</td>
                            <td >CB-4002</td>
                            <td >Snacks</td>
                            <td >₹50</td>
                            <td >75</td>
                            <td >In Stock</td>
                        </tr>
                        <tr>
                            <td >Smart Watch</td>
                            <td >SW-3002</td>
                            <td >Electronics</td>
                            <td >₹5499</td>
                            <td >32</td>
                            <td >In Stock</td>
                        </tr>
                        <tr >
                            <td >USB Cable</td>
                            <td >UC-2001</td>
                            <td >Electronics</td>
                            <td >₹2099</td>
                            <td >15</td>
                            <td >Low Stock</td>
                        </tr>

                        
                        <tr >
                            <td >Coca-Cola 500ml</td>
                            <td >CC-2001</td>
                            <td >Beverages</td>
                            <td >₹40</td>
                            <td >86</td>
                            <td >In Stock</td>
                        </tr>

                        <tr>
                            <td >Orange Juice 1L</td>
                            <td >OJ-2002</td>
                            <td >Beverages</td>
                            <td >₹120</td>
                            <td >9</td>
                            <td >Low Stock</td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
        </div>
    )
}