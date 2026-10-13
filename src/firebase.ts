import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

/**
 * Firebase Client Configuration
 * 
 * Loaded securely via Vite environment variables (prefixed with VITE_).
 * - Locally: Loaded from .env (excluded from Git).
 * - Production: Configured in Vercel Project Environment Variables.
 * 
 * If environment variables are absent, a fallback dummy structure prevents
 * initialization crashes, allowing full local demo exploration.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};

const app = initializeApp(
  firebaseConfig.apiKey
    ? firebaseConfig
    : {
        apiKey: 'demo-api-key-placeholder',
        authDomain: 'demo-careerpath.firebaseapp.com',
        projectId: 'demo-careerpath',
        appId: '1:000000000000:web:demo0000',
      }
);

export const auth = getAuth(app);
export default app;
