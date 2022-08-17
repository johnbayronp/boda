import './App.css';
import React, { useState } from 'react'
import { Home } from './page/Home';
import { Loader } from './components/utils';
import './infrastructure/api/fire-credential';

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 4700);

  return (
    <div className="App">

          { (loading) ? 
              <Loader/>:
              <Home nombres={"Jhon & Angie"} fecha={"10-09-22 04:00:00"}/>
          }

    </div>
  );
}

export default App;
