import "./AddProduct.css";
import {useState} from "react";
export default function AddProduct(){
    const [productname,setProductname]=useState("");
    const [sku,setSku]=useState("");
    const [category,setCategory]=useState("");
    const [sellingprice,setSellingprice]=useState("");
    const [costprice,setCostprice]=useState("");
    const [stockquantity,setStockquantity]=useState("");
    const [suppliers,setSuppliers]=useState("");
    const [productImage, setProductImage] = useState(null);
    return(
        <div className="addproduct">
        <h2 className="addProductsText">Add New Products</h2>
        <span>Fill in the details to add a new product</span>
        <div className="row1">
            <div className="propertydetails">
            <label htmlFor="productName" className="labelproducts">Product Name</label>
            <input type="text" id="productName" placeholder="Enter product name" className="property"
            onChange={(e)=>setProductname(e.target.value)}
            />
            </div>
            <div className="propertydetails">
            <label htmlFor="sku" className="labelproducts">SKU</label>
            <input type="text" id="sku" placeholder="Enter SKU" className="property"
            onChange={(e)=>setSku(e.target.value)}
            />
            </div>
            <div className="propertydetails">
            <label htmlFor="category" className="labelproducts">Category</label>
            <select value={category} 
            onChange={(e)=>setCategory(e.target.value)}
            className="propertycategory">
                <option>All Categories</option>
                <option>Groceries</option>
                <option>Beverages</option>
                <option>Snacks</option>
                <option>Stationery</option>
                <option>Fruits & Vegetables</option>
                <option>Electronics</option>
            </select>
            </div>
        </div>
        <div className="row2">
            <div className="propertydetails">
            <label htmlFor="sellingprice" className="labelproducts">Selling Price</label>
            <input type="text" id="sellingprice" placeholder="0.00"
            onChange={(e)=>setSellingprice(e.target.value)} className="property"
            /></div>
            <div className="propertydetails">
            <label htmlFor="costprice" className="labelproducts">Cost Price</label>
            <input type="text" id="costprice" placeholder="0.00" className="property"
            onChange={(e)=>setCostprice(e.target.value)}
            /></div>
            <div className="propertydetails">
            <label htmlFor="stockquantity" className="labelproducts">Stock Quantity</label>
            <input type="text" id="stockquantity" placeholder="0" className="property"
            onChange={(e)=>setStockquantity(e.target.value)}
            /></div>
        </div>
        <div className="row3">
            <div className="propertydetailssupplier">
            <label className="labelproducts">Supplier</label>
            <select value={suppliers} 
            onChange={(e)=>setSuppliers(e.target.value)}
            className="propertyrow3">
                <option value="" disabled hidden>Select Supplier</option>
                <option value="ABCcompany">ABCcompany</option>
                <option value="XYZcompany">XYZcompany</option>
                <option value="DEFcompany">DEFcompany</option>
                <option value="UVWcompany">UVWcompany</option>
            </select>
            </div>
            <div className="propertydetails">
            <label className="labelproducts">Product Image</label>
            <div className="imageUpload">
            <input type="file" className="productImage"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => setProductImage(e.target.files[0])}
            />
            <span className="uploadimagespan">JPG, PNG up to 2MB</span>
            </div>
            </div>

        </div>
        <div className="twoButtons">
        <button className="cancelButton" onClick={() => console.log("clicked")}>Cancel</button>
        <button className="saveButton" onClick={() => console.log("clicked")}>Save Product</button>
        </div>
        </div>
    )
}