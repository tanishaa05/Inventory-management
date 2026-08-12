import {useState} from "react";
import {Link} from "react-router-dom";
import "./Products.css";
export default function Products(){
    const [category,setCategory]=useState("");
    const [product,setProduct]=useState("");
    return(
        <div className="products">
        <h2 className="productsText">Products</h2>
        <span>Manage all your products</span>
        <div className="search-category-button">
            <input type="search"
            placeholder="Search products.."
            className="searchproducts"
            />
            <select value={category} 
            onChange={(e)=>setCategory(e.target.value)}
            className="category">
                <option>All Categories</option>
                <option>Groceries</option>
                <option>Beverages</option>
                <option>Snacks</option>
                <option>Stationery</option>
                <option>Fruits & Vegetables</option>
                <option>Electronics</option>
            </select>
            <Link to="/products/editProduct" className="editProductButton">Edit</Link>
            <Link to="/products/addProduct" className="addProductButton">+ Add Product</Link>
        </div>
        <table className="products-table">
                    <thead className="products-heading">
                        <tr >
                            <th >Product</th>
                            <th>SKU</th>
                            <th >Category</th>
                            <th >Price</th>
                            <th >Stock</th>
                            <th >Status</th>
                        </tr>
                    </thead>

                    <tbody className="productsTableBody">
                        <tr >
                            <td >Wireless Headphones</td>
                            <td >WH-1001</td>
                            <td >Electronics</td>
                            <td >₹2099</td>
                            <td >45</td>
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
                    </tbody>
                </table>
        </div>
    )
}