"use client";

import { useGetAllApplicationsQuery } from "@/store/api/applicationApi";
import { 
  Mail, Phone, GraduationCap, 
  User, Loader2, Search, MoreVertical 
} from "lucide-react";
import { motion } from "framer-motion";

const AdminApplications = () => {
  const { data: applications, isLoading, isError } = useGetAllApplicationsQuery();

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

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Student Applications</h1>
          <p className="text-sm text-slate-500 font-medium">Manage and review all study abroad applications.</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
          <Search size={16} className="text-slate-400" />
          <input type="text" placeholder="Search students..." className="bg-transparent border-none outline-none text-sm font-medium w-48" />
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
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Choice</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Force casting to any to avoid build-time type errors from backend response */}
              {(applications as any)?.data?.map((app: any) => (
                <tr key={app._id} className="hover:bg-slate-50/50 transition-colors group">
                  {/* Name & Contact */}
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

                  {/* Academic Background */}
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                        <GraduationCap size={13} className="text-blue-500" />
                        {app.qualification}
                      </div>
                      <p className="text-[11px] font-bold text-slate-400 ml-[19px]">Result: {app.result}</p>
                    </div>
                  </td>

                  {/* University & Course */}
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-slate-700 leading-tight mb-1">{app.university}</p>
                      <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-wide">{app.course}</p>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-50 text-yellow-600 border border-yellow-100">
                      Pending
                    </span>
                  </td>

                  {/* Action Menu */}
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-600">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State Logic */}
        {(!(applications as any)?.data || (applications as any)?.data?.length === 0) && (
          <div className="px-6 py-12 text-center">
            <User size={40} className="mx-auto text-slate-200 mb-3" />
            <p className="text-slate-500 font-medium text-sm">No applications found in the database.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AdminApplications;