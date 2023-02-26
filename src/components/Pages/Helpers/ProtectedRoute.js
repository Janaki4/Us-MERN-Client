import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { token } = useSelector(state => {
        return state.user
    });
    if (!token) {
        return (<Navigate to="/landing" />);
    }
    console.log(children)
    return (children)
};

export default ProtectedRoute
