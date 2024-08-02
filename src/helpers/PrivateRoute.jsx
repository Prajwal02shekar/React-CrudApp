import { AuthContextApi } from "../context/AuthContext";
import { useContext } from 'react';

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    let { isAuth } = useContext(AuthContextApi);    //null or undefined
    console.log(isAuth)
    if (isAuth === undefined || null) {
        return <Navigate to='/login' />
    } else {
        return <>{children}</>
    }
}
export default PrivateRoute;