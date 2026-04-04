"use client";

import { 
  useGetAllApplicationsQuery, 
  useDeleteApplicationMutation, 
  useUpdateApplicationStatusMutation // Import kora holo
} from "@/store/api/applicationApi";
import {
  AlertTriangle,
  GraduationCap,
  Loader2,
  Mail,
  Phone,
  Search,
  Trash2,
  Users,
  X,
  CheckCircle, // Approve icon er jonno
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

// ── Status Badge ──
const StatusBadge = ({ status }: { status?: string }) => {
  const s = status?.toLowerCase() || "pending";
  const map: Record<string, { label: string; cls: string }> = {
    pending: { label: "Pending", cls: "bg-amber-50 text-amber-600 border-amber-100" },
    approved: { label: "Approved", cls: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    rejected: { label: "Rejected", cls: "bg-red-50 text-red-500 border-red-100" },
  };
  const { label, cls } = map[s] || map["pending"];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${cls}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {label}
    </span>
  );
};

// ── Delete Confirmation Modal ──
const DeleteModal = ({
  app,
  onConfirm,
  onCancel,
  isDeleting,
}: {
  app: any | null;
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting: boolean;
}) => (
  <AnimatePresence>
    {app && (
      <>
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
          onClick={onCancel}
        />
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        >
          <div className="pointer-events-auto w-full max-w-md bg-white rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.18)] border border-slate-100 overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-red-400 via-rose-500 to-red-400" />

            <div className="px-7 pt-7 pb-5 flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
                <AlertTriangle size={22} className="text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight">Delete Application?</h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  This action is permanent and cannot be undone.
                </p>
              </div>
              <button
                onClick={onCancel}
                className="w-8 h-8 flex-shrink-0 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors ml-2"
              >
                <X size={14} />
              </button>
            </div>

            <div className="mx-7 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black text-sm flex-shrink-0">
                  {app?.fullName?.charAt(0)?.toUpperCase() || "S"}
                </div>
                <div className="min-w-0">
                  <p className="font-black text-slate-800 text-sm truncate">{app?.fullName}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Mail size={10} className="text-blue-400 flex-shrink-0" />
                    <span className="text-[11px] text-slate-400 truncate">{app?.email}</span>
                  </div>
                </div>
              </div>
              {app?.university && (
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">University:</span>
                  <span className="text-[11px] font-bold text-slate-700">{app.university}</span>
                </div>
              )}
            </div>

            <div className="px-7 pb-7 flex gap-3">
              <button
                onClick={onCancel}
                disabled={isDeleting}
                className="flex-1 py-3 rounded-2xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                disabled={isDeleting}
                className="flex-1 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-red-100"
              >
                {isDeleting ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

// ── Main Component ──
const AdminApplications = () => {
  const { data: applications, isLoading, isError, refetch } = useGetAllApplicationsQuery();
  const [deleteApplication, { isLoading: isDeleting }] = useDeleteApplicationMutation();
  
  // 1. Status Update Mutation Hook
  const [updateStatus, { isLoading: isUpdating }] = useUpdateApplicationStatusMutation();

  const [searchTerm, setSearchTerm] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<any | null>(null);

  const allApps = (applications as any)?.data || [];
  const filteredApps = allApps.filter(
    (app: any) =>
      app.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.phone?.includes(searchTerm)
  );

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    try {
      await deleteApplication(deleteTarget._id).unwrap();
      toast.success("Application deleted successfully");
      setDeleteTarget(null);
      refetch();
    } catch {
      toast.error("Failed to delete application");
    }
  };

  // 2. Status Update Handler
  const handleApprove = async (id: string) => {
    try {
      await updateStatus({ id, status: "approved" }).unwrap();
      toast.success("Application Approved!");
    } catch {
      toast.error("Failed to approve application");
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center bg-[#f8fafc]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-3xl bg-white border border-slate-200 shadow-lg flex items-center justify-center">
            <Loader2 className="h-7 w-7 animate-spin text-blue-500" />
          </div>
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Loading...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-[60vh] items-center justify-center bg-[#f8fafc]">
        <div className="text-center">
          <div className="w-16 h-16 rounded-3xl bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-4">
            <X size={24} className="text-red-400" />
          </div>
          <p className="text-red-500 font-bold text-sm">Failed to load applications</p>
          <p className="text-slate-400 text-xs mt-1">Please check backend connection</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <DeleteModal
        app={deleteTarget}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
        isDeleting={isDeleting}
      />

      <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.45,
          }}
        />
        <div className="fixed top-0 right-0 w-[500px] h-[360px] pointer-events-none bg-gradient-to-bl from-blue-100/50 via-transparent to-transparent rounded-bl-full" />

        <div className="relative max-w-7xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
                  <Users size={13} className="text-white" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600">
                  Admin Panel
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">
                Student{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  Applications
                </span>
              </h1>
              <p className="text-slate-400 text-sm mt-2 font-medium">
                {filteredApps.length} application{filteredApps.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="hidden sm:flex flex-col items-center justify-center px-5 py-3 rounded-2xl bg-blue-600 shadow-lg shadow-blue-200 min-w-[4.5rem]">
                <span className="text-xl font-black text-white leading-none">{allApps.length}</span>
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wide mt-0.5">Total</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-2xl border-2 border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50 transition-all duration-200">
                <Search size={15} className="text-slate-300 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search name, email, phone..."
                  className="bg-transparent border-none outline-none text-sm font-medium w-52 text-slate-700 placeholder-slate-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </motion.div>

          {/* TABLE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-slate-200/80 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                    {["Student Info", "Academic", "University & Course", "Status", "Action"].map((h) => (
                      <th key={h} className="px-6 py-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.18em] whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <AnimatePresence>
                    {filteredApps.map((app: any, i: number) => (
                      <motion.tr
                        key={app._id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.22, delay: i * 0.03 }}
                        className="hover:bg-gradient-to-r hover:from-blue-50/40 hover:to-transparent transition-all duration-200 group"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black text-sm flex-shrink-0 shadow-sm">
                              {app.fullName?.charAt(0)?.toUpperCase() || "S"}
                            </div>
                            <div>
                              <p className="text-sm font-black text-slate-800 leading-none mb-1.5 tracking-tight">
                                {app.fullName}
                              </p>
                              <div className="flex flex-col gap-0.5">
                                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                                  <Mail size={9} className="text-blue-300" /> {app.email}
                                </span>
                                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                                  <Phone size={9} className="text-blue-300" /> {app.phone}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2">
                              <GraduationCap size={12} className="text-blue-500" />
                              <span className="text-xs font-black text-slate-700">
                                {app.qualification || "—"}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 pl-1">
                              <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wide">GPA</span>
                              <span className="text-[11px] font-black text-slate-600">{app.result || "—"}</span>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <p className="text-sm font-black text-slate-800 leading-tight tracking-tight mb-1.5">
                            {app.university || "—"}
                          </p>
                          {app.course && (
                            <span className="inline-block px-2.5 py-0.5 rounded-lg bg-blue-50 border border-blue-100 text-[10px] font-extrabold text-blue-600 uppercase tracking-wider">
                              {app.course}
                            </span>
                          )}
                        </td>

                        <td className="px-6 py-4">
                          <StatusBadge status={app.status} />
                        </td>

                        {/* Action Column Fixed */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                            {/* APPROVE BUTTON: Only shows if status is pending */}
                            {app.status === "pending" && (
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleApprove(app._id)}
                                disabled={isUpdating}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-all text-[11px] font-bold"
                              >
                                {isUpdating ? <Loader2 size={12} className="animate-spin" /> : <CheckCircle size={12} />}
                                Approve
                              </motion.button>
                            )}

                            {/* DELETE BUTTON */}
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setDeleteTarget(app)}
                              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-red-50 text-red-400 hover:bg-red-100 transition-all text-[11px] font-bold"
                            >
                              <Trash2 size={12} />
                              Delete
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AdminApplications;