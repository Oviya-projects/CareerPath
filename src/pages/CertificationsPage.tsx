import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CERTIFICATIONS_DATA } from '../data/careerData';
import {
  Award,
  Search,
  ExternalLink,
  Bookmark,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const { toggleSaveItem, isItemSaved } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [issuerFilter, setIssuerFilter] = useState('All');

  const issuers = ['All', 'Google', 'IBM', 'Microsoft', 'freeCodeCamp', 'AWS', 'Meta', 'Kaggle', 'Cisco'];

  const filteredCerts = CERTIFICATIONS_DATA.filter((cert) => {
    const matchesSearch =
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesIssuer = issuerFilter === 'All' || cert.provider.toLowerCase().includes(issuerFilter.toLowerCase());

    return matchesSearch && matchesIssuer;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Resume Credentials</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Free & Industry Certifications
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Boost your recruiter ATS visibility with recognized badges from Google, Microsoft, IBM, and freeCodeCamp.
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              id="certs-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search certifications by name, skill, or issuer..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm font-medium"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {issuers.map((iss) => (
              <button
                key={iss}
                onClick={() => setIssuerFilter(iss)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  issuerFilter === iss
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {iss}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => {
          const saved = isItemSaved(cert.id);

          return (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600 mr-1" />
                    {cert.provider}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {cert.isFree ? '100% Free' : 'Financial Aid / Free Audit'}
                    </span>
                    <button
                      onClick={() =>
                        toggleSaveItem('certification', {
                          id: cert.id,
                          title: cert.name,
                          subtitle: `${cert.provider} • ${cert.isFree ? 'Free' : 'Financial Aid'}`,
                        })
                      }
                      className={`p-1.5 rounded-lg border transition ${
                        saved
                          ? 'bg-blue-50 border-blue-200 text-blue-600'
                          : 'border-slate-200 text-slate-400 hover:text-slate-600'
                      }`}
                      title={saved ? 'Remove Bookmark' : 'Save Bookmark'}
                    >
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-slate-900">{cert.name}</h3>

                <div className="mt-3 flex items-center space-x-3 text-xs text-slate-500">
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {cert.duration}
                  </span>
                  <span>•</span>
                  <span>Level: <strong className="text-slate-700">{cert.difficulty}</strong></span>
                </div>

                {/* Skills Covered */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Skills Validated</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center justify-center space-x-1.5"
                >
                  <span>Enroll in Certification</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
