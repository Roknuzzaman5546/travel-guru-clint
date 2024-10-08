import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";


const ClintPrivet = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 items-center">
                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-60"></div>
                    <div className="skeleton h-4 w-74"></div>
                </div>
            </div>
            <div className="skeleton h-96 w-full"></div>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default ClintPrivet;