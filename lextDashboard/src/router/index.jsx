import {
    Routes,
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';

import { PrivateRoute } from '../utils';

import {
    Dashboard,
    Error404,
    Setting,
} from '../pages'

import Layout from './layout';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../pages/errorBoundry/index';


const AppRouter = () => {
    return (
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route
                path='/dashboard'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path='/setting'
                element={
                  <PrivateRoute>
                    <Setting/>
                  </PrivateRoute>
                }
              />
              <Route 
                path='*'
                element={
                  <PrivateRoute>
                    <Error404/>
                  </PrivateRoute>
                  } />
            </Route>
            <Route path='/login' element={<div>login page</div>} />
            <Route path='/register' element={<div>register page</div>} />
          </Routes>
        </ErrorBoundary>
      </Router>
    );
  }
  
  export default AppRouter;