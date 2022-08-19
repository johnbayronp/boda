import './App.css';
import './infrastructure/api/fire-credential';
import React, { useState } from 'react'
import { Home } from './page/Home';
import { Loader } from './components/utils';
import { Login } from './components/auth';
import { Routes,Route } from 'react-router-dom';
import {UserAuthContextProvider}  from './context/UserAuthContext';
import { Dashboard } from './page/Dashboard';
import {ProtectedRoute} from './page/ProtectedRoute';

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 4700);

  return (
    
    <UserAuthContextProvider>
    <div className="App">
        <Routes>

          <Route  path={"/admin"} element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }/>

          <Route path="/" element={   
              (loading) ? 
                <Loader/>:
              <Home nombres={"Jhon & Angie"} fecha={"10-09-22"}/>
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
