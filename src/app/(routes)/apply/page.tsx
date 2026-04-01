"use client";

import { courses, nextSteps, steps, universities } from "@/data/applyData";
import { useMultiStep } from "@/hooks/useMultiStep";
import { useSubmitApplicationMutation } from "@/store/api/applicationApi";
import {
  ApplicationFormData,
  applicationSchema,
} from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function ApplyPage() {
  const {
    currentStep,
    totalSteps,
    progress,
    isFirst,
    isLast,
    submitted,
    handleNext,
    handleBack,
    setSubmitted,
  } = useMultiStep(steps.length);

  const [submitApplication, { isLoading }] = useSubmitApplicationMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      await submitApplication(data).unwrap();
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  const onNextStep = async () => {
    const fieldsToValidate =
      currentStep === 1
        ? ["fullName", "email", "phone"]
        : currentStep === 2
          ? ["qualification", "result"]
          : currentStep === 3
            ? ["university"]
            : [];

    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) handleNext();
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-5">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="relative z-10 text-center max-w-md mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-[5px] bg-green-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/30"
          >
            <CheckCircle2 size={36} className="text-white" />
          </motion.div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Application Submitted!
          </h1>
          <p className="text-slate-500 text-[16px] leading-relaxed mb-8">
            Thank you for applying. Our team will review your application and
            reach out within{" "}
            <span className="text-blue-600 font-bold">24 hours</span>.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-[5px] p-5 text-left mb-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              What happens next?
            </p>
            {nextSteps.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0"
              >
                <div className="w-5 h-5 rounded-[3px] bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[10px] font-extrabold">
                    {i + 1}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-600">{s}</p>
              </div>
            ))}
          </div>
          <a
            href="/"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-[5px] font-bold text-[15px] shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200"
          >
            Back to Home{" "}
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-28 pb-16 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1e40af 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest mb-5 block w-fit mx-auto"
          >
            <Sparkles size={12} /> Start Your Application
          </motion.span>
          <motion.h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Apply to Study in <br />{" "}
            <span className="text-blue-600">Malaysia Today.</span>
          </motion.h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="bg-white border border-slate-100 rounded-[5px] shadow-[0_8px_40px_rgba(0,0,0,0.07)] overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="px-8 py-6 border-b border-slate-100 bg-slate-50">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                  Step {currentStep} of {totalSteps}
                </p>
                <h2 className="text-xl font-extrabold text-slate-800">
                  {steps[currentStep - 1].label}
                </h2>
              </div>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-slate-600 uppercase">
                            Full Name *
                          </label>
                          <input
                            {...register("fullName")}
                            placeholder="Your full name"
                            className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 outline-none text-sm"
                          />
                          {errors.fullName && (
                            <span className="text-red-500 text-[10px] font-bold">
                              {errors.fullName.message}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-slate-600 uppercase text-sm">
                            Email *
                          </label>
                          <input
                            {...register("email")}
                            placeholder="example@mail.com"
                            className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 outline-none text-sm"
                          />
                          {errors.email && (
                            <span className="text-red-500 text-[10px] font-bold">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase">
                          Phone / WhatsApp *
                        </label>
                        <input
                          {...register("phone")}
                          placeholder="+880 1XXX XXXXXX"
                          className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 outline-none text-sm"
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-[10px] font-bold">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-slate-600 uppercase">
                            Highest Qualification *
                          </label>
                          <select
                            {...register("qualification")}
                            className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 text-sm outline-none"
                          >
                            <option value="">Select qualification</option>
                            <option value="HSC">HSC / A-Level</option>
                            <option value="Bachelor">Bachelor's Degree</option>
                          </select>
                          {errors.qualification && (
                            <span className="text-red-500 text-[10px] font-bold uppercase">
                              {errors.qualification.message}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-slate-600 uppercase">
                            GPA / Result *
                          </label>
                          <input
                            {...register("result")}
                            placeholder="e.g. 4.5 / 5.0"
                            className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 text-sm outline-none"
                          />
                          {errors.result && (
                            <span className="text-red-500 text-[10px] font-bold uppercase">
                              {errors.result.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase">
                          Preferred University *
                        </label>
                        <select
                          {...register("university")}
                          className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 text-sm outline-none"
                        >
                          <option value="">Select university</option>
                          {universities.map((u) => (
                            <option key={u} value={u}>
                              {u}
                            </option>
                          ))}
                        </select>
                        {errors.university && (
                          <span className="text-red-500 text-[10px] font-bold uppercase">
                            {errors.university.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-slate-600 uppercase">
                          Preferred Course *
                        </label>
                        <select
                          {...register("course")}
                          className="w-full px-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 text-sm outline-none"
                        >
                          <option value="">Select course</option>
                          {courses.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        {errors.course && (
                          <span className="text-red-500 text-[10px] font-bold uppercase">
                            {errors.course.message}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="px-8 py-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={isFirst}
                  className="px-5 py-3 rounded-[5px] text-sm font-bold text-slate-500 bg-white border border-slate-200"
                >
                  Back
                </button>
                {!isLast ? (
                  <button
                    type="button"
                    onClick={onNextStep}
                    className="px-6 py-3 rounded-[5px] text-sm font-bold text-white bg-blue-600"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 rounded-[5px] text-sm font-bold text-white bg-green-500"
                  >
                    {isLoading ? "Submitting..." : "Submit Application"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
