import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Layouts/Main';
import Home from './components/Layouts/Home';
import Heveview from './components/Layouts/heve/Heveview';
import './App.css';

import Signin from './components/Layouts/Login/Signin';
import Movies from './components/Layouts/card/Movies';
import Prof from './components/Layouts/card/Prof';
import Books from './components/Layouts/card/Books';

import Appointment from './components/Layouts/Pages/Appointment';



function App() {
  const [isLoggedIn, setLoggedIn] = useState(() => {
    const storedValue = localStorage.getItem('isLoggedIn');
    return storedValue ? JSON.parse(storedValue) : false;
  });
  const [userId, setUserId] = useState(() => {
    const storedUserId = localStorage.getItem('userId');
    return storedUserId ? storedUserId : null;
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    localStorage.setItem('userId', userId);
  }, [isLoggedIn, userId]);

  const toggleLogin = (storedUserId) => {
    setLoggedIn(!isLoggedIn);
    setUserId(storedUserId);
    console.log(userId);
  };

  const handleLogout = () => {
    // Additional logout logic if needed
    setUserId(null);
    toggleLogin(null); // Call the function to update the isLoggedIn state
  };
  const handleNavigation = (path) => {
    window.location.href = path; 
    console.log(`Navigating to: ${path}`);
  };


  return (
    <div className="App">
      <Router>
        {isLoggedIn ? <Main navigate={handleNavigation} userId={userId} isLoggedIn={isLoggedIn} onLogout={handleLogout} /> : null}
        <Routes>
          <Route path="/login" element={<Signin onLoginSuccess={toggleLogin} />} />
          {isLoggedIn ? (
            <>
              <Route path="/home" element={<Home userId={userId} />} />
              <Route path="/raises" element={<Heveview userId={userId} />} />
              <Route path='/movies' element={<Movies/>}/>
              <Route path='/books' element={<Books/>}/>
              <Route path='/prof' element={<Prof userId={userId}/>}/>
              <Route path='/appointment' element={<Appointment userId={userId}/>}/>
          
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
