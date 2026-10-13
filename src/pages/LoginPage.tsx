import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Lock, Mail, Sparkles, UserCheck } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const LoginPage: React.FC = () => {
  const { login, loginAsDemo, navigate } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      // Firebase email/password login
      await signInWithEmailAndPassword(auth, email, password);

      // Keep your existing app login/navigation logic
      login(email, password);
    } catch (error: any) {
      console.error(error);

      if (error.code === 'auth/invalid-credential') {
        setError('Invalid email or password.');
      } else if (error.code === 'auth/user-not-found') {
        setError('No account found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    loginAsDemo();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mb-3">
            <Lock className="w-6 h-6" />
          </div>

          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Welcome Back
          </h1>

          <p className="text-xs text-slate-500 mt-1">
            Sign in to resume your career path & skill benchmarks
          </p>
        </div>

        {/* Demo Account */}
        <div className="mb-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-900">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Instant Demo Account</span>
            </div>
            <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
              Local Mode
            </span>
          </div>

          <p className="text-[11px] text-blue-700 mb-3">
            Explore all 15 career domains, 46 roadmaps, skill gaps, and resume tools with our pre-configured student profile (Alex Chen). No Firebase account required.
          </p>

          <button
            id="login-quick-demo-btn"
            type="button"
            onClick={handleDemoLogin}
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center justify-center space-x-2"
          >
            <UserCheck className="w-4 h-4" />
            <span>Launch Instant Demo</span>
          </button>
        </div>

        <div className="relative flex py-2 items-center mb-6">
          <div className="flex-grow border-t border-slate-200"></div>

          <span className="flex-shrink mx-4 text-[11px] font-semibold text-slate-400 uppercase">
            or sign in with email
          </span>

          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              University / Personal Email
            </label>

            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />

              <input
                type="email"
                id="login-email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium text-slate-800"
                placeholder="name@university.edu"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Password
              </label>

              <button
                type="button"
                onClick={() => alert('Please contact the administrator to reset your password.')}
                className="text-xs text-blue-600 hover:underline font-medium"
              >
                Forgot?
              </button>
            </div>

            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />

              <input
                type="password"
                id="login-password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium text-slate-800"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {error}
            </div>
          )}

          {/* Sign In */}
          <button
            type="submit"
            id="login-submit-btn"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#2563EB] text-white font-bold text-sm hover:bg-blue-700 shadow-md transition flex items-center justify-center space-x-2 mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>
              {loading ? 'Signing In...' : 'Sign In to Dashboard'}
            </span>

            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-6">
          Don't have an account yet?{' '}

          <button
            id="login-switch-to-signup-btn"
            onClick={() => navigate('signup')}
            className="font-bold text-blue-600 hover:underline"
          >
            Sign up free
          </button>
        </p>

      </div>
    </div>
  );
};