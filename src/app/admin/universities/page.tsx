"use client";

import {
  useAddUniversityMutation,
  useDeleteUniversityMutation,
  useGetUniversitiesQuery,
} from "@/store/api/universityApi";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Building2,
  Globe,
  ImageIcon,
  Loader2,
  MapPin,
  Plus,
  School,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

// ── Delete Modal ──
const DeleteModal = ({
  university,
  onConfirm,
  onCancel,
  isDeleting,
}: {
  university: { _id: string; name: string; location: string } | null;
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting: boolean;
}) => {
  if (!university) return null;
  return (
    <AnimatePresence>
      {university && (
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
              <div className="px-7 pt-7 pb-6 flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
                  <AlertTriangle size={22} className="text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">Delete University?</h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">This action is permanent and cannot be undone.</p>
                </div>
                <button onClick={onCancel} className="w-8 h-8 flex-shrink-0 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
                  <X size={14} />
                </button>
              </div>
              <div className="mx-7 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <School size={18} className="text-blue-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-slate-800 text-sm truncate">{university.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={10} className="text-blue-400 flex-shrink-0" />
                    <span className="text-[11px] text-slate-400 truncate">{university.location}</span>
                  </div>
                </div>
              </div>
              <div className="px-7 pb-7 flex gap-3">
                <button onClick={onCancel} disabled={isDeleting} className="flex-1 py-3 rounded-2xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all disabled:opacity-50">
                  Cancel
                </button>
                <button onClick={onConfirm} disabled={isDeleting} className="flex-1 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-red-100">
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
};

// ── Main Component ──
const AdminUniversities = () => {
  const { data: universities, isLoading: isFetching } = useGetUniversitiesQuery();
  const [addUniversity, { isLoading: isAdding }] = useAddUniversityMutation();
  const [deleteUniversity, { isLoading: isDeleting }] = useDeleteUniversityMutation();

  const [search, setSearch] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<{ _id: string; name: string; location: string } | null>(null);

  // ── Controlled form state (react-hook-form এর বদলে) ──
  const [formData, setFormData] = useState({ name: "", location: "", image: "" });
  const [formErrors, setFormErrors] = useState({ name: false, location: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate
    const errors = { name: !formData.name.trim(), location: !formData.location.trim() };
    setFormErrors(errors);
    if (errors.name || errors.location) return;

    try {
      await addUniversity(formData).unwrap();
      toast.success("University added successfully!");
      setFormData({ name: "", location: "", image: "" });
      setSearch("");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to add university");
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    try {
      await deleteUniversity(deleteTarget._id).unwrap();
      toast.success("University deleted successfully");
      setDeleteTarget(null);
    } catch {
      toast.error("Failed to delete university");
    }
  };

  const allUniversities = (universities as any)?.data || [];
  const universityList = allUniversities.filter(
    (u: any) =>
      (u.name?.toLowerCase() || "").includes(search.toLowerCase()) ||
      (u.location?.toLowerCase() || "").includes(search.toLowerCase())
  );

  return (
    <>
      <DeleteModal
        university={deleteTarget}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
        isDeleting={isDeleting}
      />

      <div className="min-h-screen bg-[#f8fafc] p-6 md:p-10">
        <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.5 }} />
        <div className="fixed top-0 right-0 w-[500px] h-[400px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/60 via-transparent to-transparent rounded-bl-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
                  <Building2 size={13} className="text-white" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600">Admin Panel</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">
                University{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Management</span>
              </h1>
              <p className="text-slate-400 text-sm mt-2 font-medium">Add, manage, and remove your partner universities</p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-blue-600 shadow-lg shadow-blue-200">
                <span className="text-2xl font-black text-white leading-none">{allUniversities.length}</span>
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wide mt-1">Total</span>
              </div>
              {search && universityList.length !== allUniversities.length && (
                <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <span className="text-2xl font-black text-slate-800 leading-none">{universityList.length}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-1">Found</span>
                </div>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* ── LEFT: FORM ── */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.08 }} className="lg:col-span-2">
              <div className="sticky top-6 bg-white border border-slate-200/80 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] overflow-hidden">
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-500 px-7 py-6 overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full" />
                  <div className="relative flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Plus size={18} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-base font-black text-white tracking-tight">Add New University</h2>
                      <p className="text-[12px] text-blue-200 mt-0.5">Fill in the details below</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-7 space-y-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                      University Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. University of Malaya"
                      className={`w-full bg-slate-50 border-2 ${formErrors.name ? "border-red-400 bg-red-50" : "border-slate-100 hover:border-slate-200"} rounded-2xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all duration-200`}
                    />
                    {formErrors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wide">⚠ Name is required</p>}
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                      Location <span className="text-blue-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                      <input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Kuala Lumpur, Malaysia"
                        className={`w-full bg-slate-50 border-2 ${formErrors.location ? "border-red-400 bg-red-50" : "border-slate-100 hover:border-slate-200"} rounded-2xl pl-10 pr-4 py-3.5 text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all duration-200`}
                      />
                    </div>
                    {formErrors.location && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wide">⚠ Location is required</p>}
                  </div>

                  {/* Image URL */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                      Image URL <span className="normal-case font-normal text-slate-300">(optional)</span>
                    </label>
                    <div className="relative">
                      <ImageIcon size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                      <input
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://..."
                        className="w-full bg-slate-50 border-2 border-slate-100 hover:border-slate-200 rounded-2xl pl-10 pr-4 py-3.5 text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isAdding}
                    className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-sm py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-blue-100 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isAdding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                    {isAdding ? "Saving..." : "Save University"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ── RIGHT: LIST ── */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.12 }} className="lg:col-span-3">
              {/* Search */}
              <div className="relative mb-4">
                <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name or location..."
                  className="w-full bg-white border-2 border-slate-100 hover:border-slate-200 rounded-2xl pl-11 pr-4 py-4 text-sm text-slate-700 placeholder-slate-300 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-200"
                />
              </div>

              {/* List card */}
              <div className="bg-white border border-slate-200/80 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                  <h3 className="text-sm font-black text-slate-700 tracking-tight">Existing Universities</h3>
                  <span className="bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {universityList.length} found
                  </span>
                </div>

                <div className="divide-y divide-slate-50 max-h-[500px] overflow-y-auto">
                  {isFetching ? (
                    <div className="py-24 flex flex-col items-center gap-3">
                      <Loader2 size={24} className="animate-spin text-blue-500" />
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide">Loading...</p>
                    </div>
                  ) : universityList.length > 0 ? (
                    universityList.map((uni: any) => (
                      <div
                        key={uni._id}
                        className="flex items-center justify-between px-6 py-4 hover:bg-gradient-to-r hover:from-blue-50/40 hover:to-transparent transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                            {uni.image ? (
                              <img src={uni.image} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <School size={20} className="text-blue-400" />
                            )}
                          </div>
                          <div>
                            <p className="font-black text-slate-800 text-sm tracking-tight">{uni.name}</p>
                            <div className="flex items-center gap-1.5 mt-1">
                              <MapPin size={10} className="text-blue-400" />
                              <span className="text-[11px] text-slate-400 font-medium">{uni.location}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setDeleteTarget(uni)}
                          className="opacity-0 group-hover:opacity-100 flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-red-100 bg-red-50 text-red-400 hover:text-red-500 hover:bg-red-100 transition-all duration-200 text-[11px] font-bold"
                        >
                          <Trash2 size={12} /> Delete
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="py-24 flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <Globe size={26} className="text-slate-200" />
                      </div>
                      <div className="text-center">
                        <p className="text-slate-600 font-black text-sm tracking-tight">
                          {search ? "No results found" : "No universities yet"}
                        </p>
                        <p className="text-slate-400 text-xs mt-1 font-medium">
                          {search ? "Try a different keyword" : "Use the form to add one"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUniversities;