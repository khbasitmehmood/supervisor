import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/Projects'); // redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <form
        onSubmit={handleSignup}
        className="max-w-md w-full p-10 rounded-3xl
          bg-black/40
          backdrop-blur-lg
          border border-cyan-600/40
          shadow-lg shadow-cyan-800/60
          text-white
          space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-cyan-400 text-center mb-6 drop-shadow-md">
          Create Account
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
          Sign Up
        </button>
        <p className="text-center text-sm text-cyan-400/90">
          Already have an account?{' '}
          <Link to="/login" className="text-cyan-400 hover:text-cyan-500 font-medium underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
