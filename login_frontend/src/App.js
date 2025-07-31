import React, { useState, useEffect } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import Home from './Home';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('dark'); // Default to dark theme
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Handler for login success
  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        {isLoggedIn
          ? <Home />
          : <LoginForm onLoginSuccess={handleLoginSuccess} />
        }
      </header>
    </div>
  );
}

export default App;
