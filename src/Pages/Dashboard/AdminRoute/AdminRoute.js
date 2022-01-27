import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, admin }) => {
    // const [admin, setAdmin] = useState(false);
    // const [user, setUser] = useState(false);
    // useEffect(()=>{
    //     fetch('https://vast-inlet-83299.herokuapp.com/users')
    //     .then(res => res.json())
    //     .then(data => data.map(dt => setUser(dt)))
    // }, [])

    // useEffect(() => {
    //     fetch(`https://stark-caverns-04377.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])

    const {isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) { return <CircularProgress /> }
    if (admin) {
        return children;
    }
    return <Navigate to="/dashboard" state={{ from: location }} />;

};

export default AdminRoute;