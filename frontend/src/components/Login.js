import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userAction';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Lock, UserCheck } from 'lucide-react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()

  const { isAuthenticated, error, loading } = useSelector(state => state.authState)

  const redirect = location.search ? '/' + location.search.split('=')[1] : '/';

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
    }

  }, [isAuthenticated, dispatch, navigate, redirect])

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <UserCheck className="text-secondary mx-auto mb-4" size={48} />
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Admin Access Portal</p>
        </div>

        <form onSubmit={submitHandler} className="login-form">
          <div className="input-group">
            <Mail className="input-icon" size={20} />
            <input
              type="email"
              className="login-input"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <Lock className="input-icon" size={20} />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>

        <div className="login-footer">
          <p>Protected System. Authorized Personnel Only.</p>
        </div>
      </div>
    </div>
  );
};
