import { FC } from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { LoginPage, RegisterPage } from '../../authPages';
import { Mobile, Layout } from '../../core';
import { LandingPage } from '../../landingPage';

const RouteManager: FC = () => {
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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Layout>
      </MediaQuery>
    </Router>
  );
};

export default RouteManager;
