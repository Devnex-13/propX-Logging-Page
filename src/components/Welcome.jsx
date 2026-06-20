import './styles/Welcome.css';

function Welcome({ onNavigate }) {
  return (
    <div className="welcome-container">
      {/* Main content card */}
      <div className="welcome-card">
        <div className="welcome-header">
          <h1>Welcome to PopX</h1>
        </div>

        <p className="welcome-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Main CTA Button */}
        <button
          className="btn btn-primary"
          onClick={() => onNavigate('signin')}
        >
          Signin to your PopX account
        </button>

        {/* Secondary Link */}
        <button
          className="btn btn-secondary"
          onClick={() => onNavigate('signup')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
