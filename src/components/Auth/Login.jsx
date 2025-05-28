import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Projects');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error('Sign-out error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div
        className="max-w-md w-full p-10 rounded-3xl
          bg-black/40
          backdrop-blur-lg
          border border-cyan-600/40
          shadow-lg shadow-cyan-800/60
          text-white
        "
      >
        {!user ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-3xl font-extrabold text-cyan-400 text-center mb-6 drop-shadow-md">
              Welcome Back
            </h2>
            {error && (
              <p className="text-sm bg-red-700/90 text-white p-3 rounded-md border border-red-600/80">
                {error}
              </p>
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-black/30 border border-cyan-600/50
                placeholder:text-cyan-300 placeholder:opacity-70
                focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                text-white
                transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-black/30 border border-cyan-600/50
                placeholder:text-cyan-300 placeholder:opacity-70
                focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                text-white
                transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-cyan-600 bg-opacity-90 hover:bg-cyan-700
                text-white py-3 rounded-lg font-semibold drop-shadow-md transition"
            >
              Log In
            </button>
            <p className="text-center text-sm text-cyan-400/90">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-cyan-400 hover:text-cyan-500 font-medium underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <p className="text-lg font-semibold drop-shadow-md">
              You're logged in as{' '}
              <span className="font-mono text-cyan-400">{user.email}</span>
            </p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-700 bg-opacity-90 hover:bg-red-800
                text-white py-3 rounded-lg font-semibold drop-shadow-md transition"
            >
              Sign Out
            </button>
            <Link
              to="/Projects"
              className="inline-block w-full bg-cyan-600 bg-opacity-90 hover:bg-cyan-700
                text-white py-3 rounded-lg font-semibold drop-shadow-md transition"
            >
              Back to Projects
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
