import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('userId'); 
        window.location.href = '/login'; 
    }, []);

    return (
        <div>
            <h2>Logging out...</h2>
        </div>
    );
}

export default Logout;
