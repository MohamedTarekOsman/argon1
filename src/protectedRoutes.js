import { Outlet } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";


const ProtectedRoutes=()=>{
    return localStorage.getItem('token')?<Outlet/>:<LoginPage/>
}

export default ProtectedRoutes;