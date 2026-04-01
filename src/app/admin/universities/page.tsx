"use client";

import { useAddUniversityMutation, useGetUniversitiesQuery } from "@/store/api/universityApi";
import { useForm } from "react-hook-form";
import { Loader2, Plus, School, MapPin, Globe, Trash2, Search, Building2, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";

const AdminUniversities = () => {
  const { data: universities, isLoading: isFetching, isError } = useGetUniversitiesQuery();
  const [addUniversity, { isLoading: isAdding }] = useAddUniversityMutation();
  const [search, setSearch] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await addUniversity(data).unwrap();
      toast.success("University added successfully!");
      reset();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to add university");
    }
  };

  const universityList = ((universities as any)?.data || []).filter((u: any) =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      {/* subtle background pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #1d4ed8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ── PAGE HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 flex items-center justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Building2 size={14} className="text-blue-600" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
                Admin Panel
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              University Management
            </h1>
            <p className="text-slate-400 text-sm mt-0.5">
              Add and manage your partner universities
            </p>
          </div>

          {/* Total badge */}
          <div className="hidden sm:flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-blue-600 shadow-lg shadow-blue-200">
            <span className="text-2xl font-black text-white leading-none">
              {((universities as any)?.data || []).length}
            </span>
            <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wide mt-0.5">
              Total
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ── LEFT: ADD FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-6 bg-white border border-slate-100 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
              {/* Form header stripe */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                    <Plus size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Add New University</h2>
                    <p className="text-[11px] text-blue-200">Fill in the details below</p>
                  </div>
                </div>
              </div>

              {/* Form body */}
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    University Name *
                  </label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="e.g. University of Malaya"
                    className={`w-full bg-slate-50 border ${
                      errors.name ? "border-red-400" : "border-slate-200"
                    } rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-[10px] font-bold uppercase">Name is required</p>
                  )}
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Location *
                  </label>
                  <div className="relative">
                    <MapPin size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      {...register("location", { required: true })}
                      placeholder="e.g. Kuala Lumpur, Malaysia"
                      className={`w-full bg-slate-50 border ${
                        errors.location ? "border-red-400" : "border-slate-200"
                      } rounded-xl pl-9 pr-4 py-3 text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all`}
                    />
                  </div>
                  {errors.location && (
                    <p className="text-red-500 text-[10px] font-bold uppercase">Location is required</p>
                  )}
                </div>

                {/* Image URL */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Image URL
                    <span className="ml-1.5 normal-case font-normal tracking-normal text-slate-300">
                      (optional)
                    </span>
                  </label>
                  <div className="relative">
                    <ImageIcon size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      {...register("image")}
                      placeholder="https://..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm text-slate-800 placeholder-slate-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isAdding}
                  className="w-full mt-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
                >
                  {isAdding ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Plus size={16} />
                  )}
                  {isAdding ? "Saving..." : "Save University"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* ── RIGHT: LIST ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="lg:col-span-3"
          >
            {/* Search bar */}
            <div className="relative mb-4">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or location..."
                className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-sm text-slate-700 placeholder-slate-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 shadow-sm transition-all"
              />
            </div>

            {/* Table card */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">

              {/* Table header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
                <h3 className="text-sm font-bold text-slate-700">Existing Universities</h3>
                <span className="bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full">
                  {universityList.length} found
                </span>
              </div>

              <div className="divide-y divide-slate-50">
                {isFetching ? (
                  <div className="py-24 flex flex-col items-center gap-3">
                    <Loader2 size={28} className="animate-spin text-blue-500" />
                    <p className="text-slate-400 text-xs font-medium">Loading universities...</p>
                  </div>
                ) : isError ? (
                  <div className="py-16 text-center">
                    <p className="text-red-500 text-sm font-semibold">Failed to load data.</p>
                    <p className="text-slate-400 text-xs mt-1">Please try again later.</p>
                  </div>
                ) : universityList.length > 0 ? (
                  <AnimatePresence>
                    {universityList.map((uni: any, i: number) => (
                      <motion.div
                        key={uni._id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22, delay: i * 0.04 }}
                        className="flex items-center justify-between px-6 py-4 hover:bg-blue-50/30 transition-colors group"
                      >
                        {/* Left: avatar + info */}
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 rounded-xl overflow-hidden bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                            {uni.image ? (
                              <img
                                src={uni.image}
                                alt={uni.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <School size={20} className="text-blue-400" />
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-sm leading-tight">
                              {uni.name}
                            </p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <MapPin size={10} className="text-blue-400" />
                              <span className="text-[11px] text-slate-400 font-medium">
                                {uni.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right: delete */}
                        <button className="opacity-0 group-hover:opacity-100 w-9 h-9 rounded-xl border border-red-100 bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-400 hover:text-red-500 transition-all">
                          <Trash2 size={14} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                ) : (
                  <div className="py-24 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <Globe size={26} className="text-slate-200" />
                    </div>
                    <div className="text-center">
                      <p className="text-slate-600 font-bold text-sm">
                        {search ? "No results found" : "No universities yet"}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
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
  );
};

export default AdminUniversities;