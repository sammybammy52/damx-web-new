import { Outlet, Navigate} from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'


const PrivateRoutes = () => {
    
   const { token } = useAuthContext();
    return(
        token == null ? <Navigate to="/"/> : <Outlet/>
    )
}

export default PrivateRoutes;