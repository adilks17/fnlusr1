import React, { useState, useEffect } from 'react';
import './Signin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signin = ({ onLoginSuccess }) => {
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false); // State to remember user
  const navigate = useNavigate();
  // const isLargeScreen = useMediaQuery('(min-width: 600px)');

  useEffect(() => {
    const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
    if (rememberedUser) {
      setInputs(rememberedUser);
      setRememberMe(true);
    }
  }, []);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const checkData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/login', {
        username: inputs.username,
        password: inputs.password,
      });

      if (response.data.success) {
        alert('Login successful');
        if (rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify(inputs));
        } else {
          localStorage.removeItem('rememberedUser');
        }
        onLoginSuccess(response.data.userId);
        navigate('/home');
      } else {
        alert('Invalid email and Password. Please try again.');
        console.log(response.data);
      }
    } catch (err) {
      alert('Error occurred during login. Please try again.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: 'url(https://wallpapercave.com/wp/WJPC1HS.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div>
        <section style={{
          position: 'relative',
          maxWidth: '400px',
          backgroundColor: 'transparent',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '20px',
          backdropFilter: 'blur(55px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem 3rem'
        }}>
          <form>
            <h1>Login</h1>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                name="username"
                value={inputs.username}
                onChange={inputHandler}
                type="text"
                required
              />
              <label>Username</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                name="password"
                value={inputs.password}
                onChange={inputHandler}
                type="password"
                required
              />
              <label>Password</label>
            </div>
            <div className="forget">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={toggleRememberMe}
                />
                Remember Me
              </label>
              <a href='/fr'>Forget Password</a>
            </div>
            <button
              onClick={checkData}
              style={{
                width: '100%',
                height: '40px',
                borderRadius: '40px',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.4s ease'
              }}>Log in</button>
            <div className="register">
              <p>Don't have an account <a href='/regis'>Register</a></p>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Signin;
