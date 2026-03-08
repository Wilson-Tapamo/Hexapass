import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/design-system.css';

// Layout Components
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';

// User Pages
import Dashboard from './pages/Dashboard';
import MyApplications from './pages/MyApplications';
import SavedCredentials from './pages/SavedCredentials';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import AppDetails from './pages/AppDetails';
import Login from './pages/Login';

// Admin Pages
import AdminDashboard from './pages/Admin/Dashboard';
import AdminApplications from './pages/Admin/Applications';
import AdminUsers from './pages/Admin/Users';
import AdminGroups from './pages/Admin/Groups';
import AdminLogs from './pages/Admin/AuditLogs';
import AdminSettings from './pages/Admin/Settings';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simplified for now

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar isAdmin={isAdmin} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header isAdmin={isAdmin} onToggleAdmin={() => setIsAdmin(!isAdmin)} />
          <main style={{ flex: 1, padding: '2rem' }}>
            <Routes>
              {isAdmin ? (
                <>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/AdminDashboard" element={<AdminDashboard />} />
                  <Route path="/AdminApplications" element={<AdminApplications />} />
                  <Route path="/AdminUsers" element={<AdminUsers />} />
                  <Route path="/AdminGroups" element={<AdminGroups />} />
                  <Route path="/AdminLogs" element={<AdminLogs />} />
                  <Route path="/AdminSettings" element={<AdminSettings />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/MyApplications" element={<MyApplications />} />
                  <Route path="/SavedCredentials" element={<SavedCredentials />} />
                  <Route path="/Notifications" element={<Notifications />} />
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/app/:id" element={<AppDetails />} />
                </>
              )}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
