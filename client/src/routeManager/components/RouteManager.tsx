import { FC } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Mobile, Layout } from '../../core';
import { LandingPage } from '../../landingPage';

/* import { LoadingScreen } from '../../loadingScreen'; */
/* import { ProtectedRoute } from './ProtectedRoute'; */

const RouteManager: FC = () => {
  /*   const { isUserLoggedIn, loggedUserData, loading } = useRouteManager(); */
  /* if (loading) return <LoadingScreen />; */

  return (
    <Router>
      <MediaQuery maxDeviceWidth={1224}>
        <Mobile />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1224}>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/home" element={<LandingPage />} />
            {/*               <Route
                path="/user/"
                element={
                  <ProtectedRoute isAllowed={isUserLoggedIn}>
                    <ProfilePage loggedUserData={loggedUserData} />
                  </ProtectedRoute>
                }
              /> */}
          </Routes>
        </Layout>
      </MediaQuery>
    </Router>
  );
};

export default RouteManager;
