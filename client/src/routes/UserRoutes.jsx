import { Navigate, Route, Routes } from 'react-router-dom';

import  User  from '../pages/User';

export const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<User />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};