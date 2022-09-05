import React, { useContext } from 'react';
import { Routes, Route, Redirect, Navigate } from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const { user } = useContext(Context);
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Element }) =>
                <Route key={path} element={<Element />} />
            )}
            {publicRoutes.map(({ path, element }) =>
                <Route
                    key={path}
                    element={<Element />}
                />
            )}
            {<Route path="/*" element={<Navigate to={SHOP_ROUTE} />} />}

        </Routes>
    );
};

export default AppRouter;