import './styles/AccountSettings.css';

function AccountSettings({ user, onLogout }) {
  return (
    <div className="settings-container">
      <div className="settings-card">
        <h2>Account Settings</h2>

        {/* User Profile Section */}
        <div className="profile-section">
          <div className="profile-header">
            <img
              src="https://www.magnific.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_9631091.htm#fromView=keyword&page=1&position=0&uuid=2363483e-5154-4e0f-bf20-fd5089457cac&query=Woman"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-info">
              <h3>{user.fullName || 'User'}</h3>
              <p>{user.email}</p>
              <span className="verified-badge">
                <span className="dot"></span> Verified
              </span>
            </div>
          </div>

          <p className="profile-description">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elit, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam Voluptua.
          </p>
        </div>

        {/* Account Details */}
        <div className="details-section">
          {user.fullName && (
            <div className="detail-item">
              <span className="detail-label">Full Name:</span>
              <span className="detail-value">{user.fullName}</span>
            </div>
          )}

          {user.phone && (
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{user.phone}</span>
            </div>
          )}

          {user.company && (
            <div className="detail-item">
              <span className="detail-label">Company:</span>
              <span className="detail-value">{user.company}</span>
            </div>
          )}

          <div className="detail-item">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{user.email}</span>
          </div>

          {user.isAgency !== undefined && (
            <div className="detail-item">
              <span className="detail-label">Agency:</span>
              <span className="detail-value">
                {user.isAgency ? 'Yes' : 'No'}
              </span>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button className="btn-logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;
