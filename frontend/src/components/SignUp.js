import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', { email, password });
      alert('Sign-up successful! Please log in.');
      navigate('/login');
    } catch (error) {
      alert('Error during sign-up: ' + (error.response?.data?.message || 'Server error'));
    }
  };

  return (
    <div className="container">
      <img src="/keylitelogo2.png" alt="Keylite Company Limited Logo" style={{ maxWidth: '250px', height: 'auto' }} />
        <p style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '5px 0',
          backgroundImage: 'linear-gradient(to right, #0c2cfb, #f90c0e)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>Accelerate Development</p>
        <hr style={{ border: '0', height: '2px', backgroundColor: '#D32F2F', margin: '5px 0' }} />
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="link">
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
};

export default SignUp;