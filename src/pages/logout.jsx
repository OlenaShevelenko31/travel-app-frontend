import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('userId'); 
        window.location.href = 'https://travel-tracker-application.netlify.app/'; 
    }, []);

    return (
        <div>
            <h2>Logging out...</h2>
        </div>
    );
}

export default Logout;
