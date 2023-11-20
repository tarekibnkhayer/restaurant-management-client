import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../myHooks/useAdmin";
import useAuth from "../myHooks/useAuth";


const AdminRoute = (children) => {
    const {loading, user} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
   if(user && isAdmin){
    return children;
   }
   return (<Navigate to="/login" state={location.pathname} ></Navigate>)
};

export default AdminRoute;