import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col space-y-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let Icon = Info;
        let bgClass = 'bg-white border-blue-200 text-blue-900 shadow-lg';
        let iconClass = 'text-blue-600';

        if (toast.type === 'success') {
          Icon = CheckCircle2;
          bgClass = 'bg-white border-emerald-200 text-emerald-950 shadow-lg';
          iconClass = 'text-emerald-600';
        } else if (toast.type === 'warning') {
          Icon = AlertCircle;
          bgClass = 'bg-white border-amber-200 text-amber-950 shadow-lg';
          iconClass = 'text-amber-600';
        }

        return (
          <div
            key={toast.id}
            id={`toast-${toast.id}`}
            className={`pointer-events-auto flex items-start p-3.5 rounded-xl border ${bgClass} transition-all duration-300 transform translate-y-0`}
          >
            <Icon className={`w-5 h-5 ${iconClass} mt-0.5 shrink-0`} />
            <div className="ml-3 flex-1">
              <h4 className="text-sm font-semibold">{toast.title}</h4>
              <p className="text-xs text-slate-600 mt-0.5">{toast.message}</p>
            </div>
            <button
              id={`close-toast-${toast.id}`}
              onClick={() => removeToast(toast.id)}
              className="ml-2 text-slate-400 hover:text-slate-600 transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
