import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from '../utils/privateRoute';
import PublicRoute from '../utils/publickRoute'; // Perbaikan typo: "publicRoute"
import IdleRoute from './idleRouter'; // Import IdleRoute
import {
  Dashboard,
  Error404,
  Setting,
  ContentSatu,
  Login,
  Patient,
  TravelSchedule,
  Register,
} from '../pages';
import Layout from './layout';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../pages/errorBoundry';

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
              path="*"
              element={<Error404 />} 
            />
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
                <Register/>
              </PublicRoute>
            }
          />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default AppRouter;
