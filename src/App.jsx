import { useState } from 'react';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AccountSettings from './components/AccountSettings';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [user, setUser] = useState(null);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleSignIn = (email) => {
    // Mock authentication
    setUser({ email, isLoggedIn: true });
    setCurrentPage('settings');
  };

  const handleSignUp = (formData) => {
    // Mock registration
    setUser({
      email: formData.email,
      fullName: formData.fullName,
      phone: formData.phone,
      company: formData.company,
      isAgency: formData.isAgency,
      isLoggedIn: true
    });
    setCurrentPage('settings');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('welcome');
  };

  return (
    <div className="app-container">
      {currentPage === 'welcome' && (
        <Welcome onNavigate={handleNavigation} />
      )}
      {currentPage === 'signin' && (
        <SignIn 
          onSignIn={handleSignIn}
          onNavigate={handleNavigation}
        />
      )}
      {currentPage === 'signup' && (
        <SignUp 
          onSignUp={handleSignUp}
          onNavigate={handleNavigation}
        />
      )}
      {currentPage === 'settings' && user && (
        <AccountSettings 
          user={user}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;
