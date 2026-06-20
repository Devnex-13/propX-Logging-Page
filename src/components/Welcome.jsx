import './styles/Welcome.css';

const DECOR_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function Welcome({ onNavigate }) {
  return (
    <div className="welcome-container">
      <div className="numbers-grid" aria-hidden="true">
        {DECOR_NUMBERS.map((num) => (
          <div key={num} className="number-circle">
            {num}
          </div>
        ))}
      </div>

      <div className="welcome-card">
        <div className="welcome-header">
          <h1>
            Welcome to PopX <span className="number-circle-inline">1</span>
          </h1>
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
          Create your PopX account
        </button>
      </div>
    </div>
  );
}

export default Welcome;
