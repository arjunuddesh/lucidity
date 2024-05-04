import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesList } from './pageRoutes';

const Router = ({ user }) => {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      {console.log(process.env.PUBLIC_URL)}
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
