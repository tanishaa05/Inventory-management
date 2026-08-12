import { BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";
import AppLayout from "./Components/AppLayout/AppLayout";
import Login from "./Pages/Login/Login";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import ManagerDashboard from "./Pages/ManagerDashboard/ManagerDashboard";
import CashierDashboard from "./Pages/CashierDashboard/CashierDashboard";
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
            </Route>
        </Routes>
        </BrowserRouter>
    
    );
}