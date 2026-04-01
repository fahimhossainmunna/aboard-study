"use client";

import { useGetAllApplicationsQuery } from "@/store/api/applicationApi";
import { 
  Mail, Phone, GraduationCap, 
  User, Loader2, Search, MoreVertical, X 
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const AdminApplications = () => {
  const { data: applications, isLoading, isError } = useGetAllApplicationsQuery();
  
  // ── SEARCH STATE ──
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-red-500 font-bold">
        Failed to load applications. Backend connection check koren!
      </div>
    );
  }

  // ── SEARCH LOGIC ──
  // Data array-ta kothay ache check kore filter kora (Name, Email ba Phone diye search kora jabe)
  const allApps = (applications as any)?.data || [];
  
  const filteredApps = allApps.filter((app: any) => 
    app.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.phone?.includes(searchTerm)
  );

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Header & Search Bar */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Student Applications</h1>
          <p className="text-sm text-slate-500 font-medium">Total: {filteredApps.length} applications found</p>
        </div>

        {/* Search Input Field */}
        <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, email or phone..." 
            className="bg-transparent border-none outline-none text-sm font-medium w-64 text-slate-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm("")} className="text-slate-400 hover:text-slate-600">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Student Info</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Academic</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">University & Course</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredApps.map((app: any) => (
                <tr key={app._id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                        {app.fullName ? app.fullName.charAt(0) : "S"}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 leading-none mb-1.5">{app.fullName}</p>
                        <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400">
                           <span className="flex items-center gap-1"><Mail size={10} /> {app.email}</span>
                           <span className="flex items-center gap-1"><Phone size={10} /> {app.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                        <GraduationCap size={13} className="text-blue-500" />
                        {app.qualification}
                      </div>
                      <p className="text-[11px] font-bold text-slate-400 ml-[19px]">GPA: {app.result}</p>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-slate-700 leading-tight mb-1">{app.university}</p>
                      <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-wide">{app.course}</p>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-yellow-50 text-yellow-600 border border-yellow-100">
                      Pending
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State (If search results found nothing) */}
        {filteredApps.length === 0 && (
          <div className="px-6 py-12 text-center bg-white">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
              <Search size={24} className="text-slate-300" />
            </div>
            <h3 className="text-slate-900 font-bold text-base mb-1">No applications found</h3>
            <p className="text-slate-500 text-sm">We couldn't find any results matching "{searchTerm}"</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AdminApplications;