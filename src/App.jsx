import { BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";
import AppLayout from "./Components/AppLayout/AppLayout";
import Login from "./Pages/Login/Login";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import ManagerDashboard from "./Pages/ManagerDashboard/ManagerDashboard";
import CashierDashboard from "./Pages/CashierDashboard/CashierDashboard";
import Products from "./Pages/Products/Products";
import AddProduct from "./Pages/AddProduct/AddProduct";
import EditProduct from "./Pages/EditProduct/EditProduct";
export default function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login"
            element={<Login />}
            />
            <Route element={<AppLayout/>}>
                <Route path="/admin/dashboard"
                element={<AdminDashboard />}
                />
                <Route path="/manager/dashboard"
                element={<ManagerDashboard />}
                />
                <Route path="/cashier/dashboard"
                element={<CashierDashboard />}
                />
                <Route path="/products"
                element={<Products />}
                />
                <Route path="/products/addproduct"
                element={<AddProduct />}
                />
                <Route path="/products/editproduct"
                element={<EditProduct />}
                />
            </Route>
        </Routes>
        </BrowserRouter>
    
    );
}