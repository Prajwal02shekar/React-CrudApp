import { AuthContextApi } from "../context/AuthContext";
import { useContext } from 'react';
import { UserContextApi } from './../context/UserContext';
import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }) => {
    let { isAuth } = useContext(AuthContextApi);
    if (isAuth) {
        return <Navigate to='/users' />
    } else {
        return <>{children}</>
    }
}
export default PublicRouter;