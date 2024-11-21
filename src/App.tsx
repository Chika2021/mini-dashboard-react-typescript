import React from 'react';
import './App.css';
import DashboardLayout from './layout/DashboardLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <DashboardLayout>
            <Routes>
              <Route path='/dashboard' element = {<DashboardPage />} />
              <Route path='/users' element = {<UsersPage />}/>
              <Route path='/settings' element = {<SettingPage />}/>
            </Routes>
        </DashboardLayout>
        
      </Router>
    </div>
  );
}

export default App;
