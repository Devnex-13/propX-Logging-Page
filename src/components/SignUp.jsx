import { useState } from 'react';
import './styles/Auth.css';

function SignUp({ onSignUp, onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: false
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      onSignUp(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create your PopX account</h2>

        <form onSubmit={handleSubmit} className="auth-form signup-form">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Marray Doe"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? 'input-error' : ''}
            />
            {errors.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone">Phone number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Marray Doe"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email address *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Marray Doe"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Marray Doe"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          {/* Company Name */}
          <div className="form-group">
            <label htmlFor="company">Company name</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Marray Doe"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Agency Toggle */}
          <div className="form-group checkbox-group">
            <label>Are you an Agency?*</label>
            <div className="radio-options">
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === true}
                  onChange={() => setFormData({ ...formData, isAgency: true })}
                />
                <span>Yes</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === false}
                  onChange={() => setFormData({ ...formData, isAgency: false })}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-create">
            Create Account
          </button>
        </form>

        {/* Sign In Link */}
        <p className="auth-footer">
          Already have an account?{' '}
          <button
            type="button"
            className="link-button"
            onClick={() => onNavigate('signin')}
          >
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
