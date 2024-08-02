import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from '../utils/privateRoute/index.jsx';
import PublicRoute from '../utils/publickRoute/index.jsx';
import IdleRoute from './idleRouter.jsx';
import { Suspense, lazy } from 'react';
import {
  Dashboard,
  Error404,
  Setting,
  ContentSatu,
  Login,
  Patient,
  TravelSchedule,
  Register,
} from '../pages/index.jsx';
import Layout from './layout.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../pages/errorBoundry/index.jsx';

const Cabang = lazy(() => import('../pages/Cabang/index.jsx'));

const AppRouter = () => {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <IdleRoute>
                    <Dashboard />
                  </IdleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/setting"
              element={
                <PrivateRoute>
                  <IdleRoute>
                    <Setting />
                  </IdleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/pendaftaranJamaah"
              element={
                <PrivateRoute>
                  <IdleRoute>
                    <ContentSatu />
                  </IdleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/jamaah"
              element={
                <PrivateRoute>
                  <IdleRoute>
                    <Patient />
                  </IdleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/schedule"
              element={
                <PrivateRoute>
                  <IdleRoute>
                    <TravelSchedule />
                  </IdleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/cabang"
              element={
                <PrivateRoute>
                  <IdleRoute>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Cabang />
                    </Suspense>
                  </IdleRoute>
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default AppRouter;
