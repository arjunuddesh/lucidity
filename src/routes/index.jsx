import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesList } from './pageRoutes';

const Router = ({ user }) => {
  return (
    <Routes>
      {routesList?.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default Router;
