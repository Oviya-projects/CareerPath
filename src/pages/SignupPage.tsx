import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Lock, Mail, User, GraduationCap } from 'lucide-react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

export const SignupPage: React.FC = () => {
  const { signup, navigate } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      // Create Firebase account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      // Save user's name in Firebase profile
      await updateProfile(userCredential.user, {
        displayName: name.trim(),
      });

      // Keep your existing application signup logic
      signup({
        name: name.trim(),
        email: email.trim(),
        password,
      });

    } catch (error: any) {
      console.error(error);

      if (error.code === 'auth/email-already-in-use') {
        setError('An account already exists with this email.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else if (error.code === 'auth/operation-not-allowed') {
        setError('Email/Password authentication is not enabled in Firebase.');
      } else {
        setError('Account creation failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mb-3">
            <GraduationCap className="w-6 h-6" />
          </div>

          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Create Student Account
          </h1>

          <p className="text-xs text-slate-500 mt-1">
            Get your customized career roadmap in minutes
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>

            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />

              <input
                type="text"
                id="signup-name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium text-slate-800"
                placeholder="e.g. Alex Chen"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>

            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />

              <input
                type="email"
                id="signup-email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium text-slate-800"
                placeholder="alex.chen@university.edu"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Password
            </label>

            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />

              <input
                type="password"
                id="signup-password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium text-slate-800"
                placeholder="At least 6 characters"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            id="signup-submit-btn"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#2563EB] text-white font-bold text-sm hover:bg-blue-700 shadow-md transition flex items-center justify-center space-x-2 mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>
              {loading
                ? 'Creating Account...'
                : 'Proceed to Career Onboarding'}
            </span>

            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>

        </form>

        <p className="text-center text-xs text-slate-500 mt-6">
          Already have an account?{' '}

          <button
            id="signup-switch-to-login-btn"
            onClick={() => navigate('login')}
            className="font-bold text-blue-600 hover:underline"
          >
            Sign in
          </button>
        </p>

      </div>
    </div>
  );
};