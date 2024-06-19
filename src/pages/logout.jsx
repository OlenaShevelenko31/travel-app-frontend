import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('userId'); 
        window.location.href = '/https://travel-app-backend-uco2.onrender.com/login'; 
    }, []);

    return (
        <div>
            <h2>Logging out...</h2>
        </div>
    );
}

export default Logout;
