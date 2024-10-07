import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'; // Adjust according to your router setup

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');

        if (token) {
            // Here, you could also make a call to your backend to validate the token
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            navigate('/login'); // Redirect to login page if not authenticated
        }
    }, [navigate]);

    return isAuthenticated;
};

export default useAuth;
