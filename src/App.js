import './App.css';
import './infrastructure/api/fire-credential';
import React, { useState } from 'react'
import { Home } from './page/Home';
import { Loader } from './components/utils';
import { Participativa } from './page/Participativa';
import { Login } from './components/auth';
import { Routes,Route } from 'react-router-dom';
import {UserAuthContextProvider}  from './context/UserAuthContext';
import { Dashboard } from './page/Dashboard';
import {ProtectedRoute} from './page/ProtectedRoute';

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 2700);

  return (
    
    <UserAuthContextProvider>
    <div className="App">
        <Routes>

          <Route  path={"/admin"} element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }/>
          
          <Route  path={"/participativa"} element={
            (loading) ? 
            <Loader/>:
            <Participativa nombres={"Luis & Nancy"} fecha={"04-30-23"}/>
          }/>

          <Route path="/" element={   
              (loading) ? 
                <Loader/>:
              <Home nombres={"Luis & Nancy"} fecha={"04-30-23"}/>
            }/>

          <Route path="/login" element = {
            <Login/>
          }/>
        </Routes>
    </div>
    
    </UserAuthContextProvider>
  );
}

export default App;
