import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';
import Forbidden from './pages/Forbidden';
import ServerError from './pages/ServerError';
import ServiceUnavailable from './pages/ServiceUnavailable';
import NetworkError from './pages/NetworkError';
import Timeout from './pages/Timeout';
import ErrorBoundary from './components/ErrorBoundary';
import { ToastProvider } from './components/ToastSystem';

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Error Pages */}
            <Route path="/error/401" element={<Unauthorized />} />
            <Route path="/error/403" element={<Forbidden />} />
            <Route path="/error/500" element={<ServerError />} />
            <Route path="/error/503" element={<ServiceUnavailable />} />
            <Route path="/error/network" element={<NetworkError />} />
            <Route path="/error/timeout" element={<Timeout />} />
            <Route path="/error/404" element={<NotFound />} />
            
            {/* Catch all - 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
