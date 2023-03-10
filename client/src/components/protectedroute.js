import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const { user }= useSelector((state) => state.username);
    let location = useLocation();

    if(!user){
        return <Navigate to="/" state={{from: location}} replace/>
    }
    return children;
}

export default ProtectedRoute;