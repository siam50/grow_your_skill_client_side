import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Courses = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <h3>{user?.displayName}</h3>
        </div>
    );
};

export default Courses;