"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

type ProjectType =
  | ""
  | "Website"
  | "Webshop"
  | "iOS App"
  | "Apple Watch App"
  | "Android App"
  | "Anders";

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: ProjectType;
  message: string;
}

const projectTypes: ProjectType[] = [
  "Website",
  "Webshop",
  "iOS App",
  "Apple Watch App",
  "Android App",
  "Anders",
];

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) newErrors.name = "Naam is verplicht";
    if (!form.email.trim()) {
      newErrors.email = "E-mailadres is verplicht";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Voer een geldig e-mailadres in";
    }
    if (!form.projectType) newErrors.projectType = "Selecteer een projecttype";
    if (!form.message.trim()) newErrors.message = "Bericht is verplicht";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Simulate async submission (replace with real API call)
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-zinc-900 placeholder-zinc-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600/20 ${
      errors[field]
        ? "border-red-300 focus:border-red-400"
        : "border-zinc-200 focus:border-brand-400"
    }`;

  return (
    <div className="pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">
          {/* Left: intro */}
          <div className="lg:col-span-2">
            <AnimateIn>
              <SectionLabel className="mb-4">Contact</SectionLabel>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 tracking-tight text-balance leading-tight">
                Vertel ons over je project
              </h1>
              <p className="mt-5 text-zinc-500 leading-relaxed">
                Of je nu een concreet plan hebt of een onuitgewerkt idee — stuur ons een bericht.
                We reageren binnen één werkdag.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1} className="mt-10 space-y-5">
              {/* Email block */}
              <div className="flex items-start gap-4 p-5 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">
                    E-mail
                  </p>
                  <a
                    href="mailto:hallo@bartio.nl"
                    className="text-zinc-900 font-medium hover:text-brand-600 transition-colors"
                  >
                    hallo@bartio.nl
                  </a>
                  <p className="text-xs text-zinc-400 mt-1">Reactie binnen één werkdag</p>
                </div>
              </div>

              {/* Call booking */}
              <div className="p-5 bg-zinc-50 rounded-2xl border border-zinc-100">
                <p className="font-display font-semibold text-zinc-900 mb-1">
                  Liever meteen bellen?
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                  Plan een vrijblijvend kennismakingsgesprek van 30 minuten. We bespreken je project
                  en wat Bartio voor je kan doen.
                </p>
                <a
                  href="mailto:hallo@bartio.nl?subject=Gesprek inplannen"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  Gesprek aanvragen
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <AnimateIn delay={0.12}>
              <div className="bg-white rounded-3xl border border-zinc-100 shadow-card p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                        <CheckCircle2 size={32} className="text-emerald-500" strokeWidth={1.5} />
                      </div>
                      <h2 className="font-display font-bold text-2xl text-zinc-900 mb-3">
                        Bericht verzonden!
                      </h2>
                      <p className="text-zinc-500 leading-relaxed max-w-sm">
                        Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op —
                        uiterlijk binnen één werkdag.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-8 px-6 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-700 transition-colors"
                      >
                        Nieuw bericht sturen
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      <h2 className="font-display font-bold text-xl text-zinc-900 mb-6">
                        Stuur ons een bericht
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-zinc-700 mb-1.5"
                          >
                            Naam <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Jan de Vries"
                            className={inputClasses("name")}
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-zinc-700 mb-1.5"
                          >
                            E-mailadres <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="jan@bedrijf.nl"
                            className={inputClasses("email")}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-zinc-700 mb-1.5"
                        >
                          Bedrijf{" "}
                          <span className="text-zinc-400 font-normal">(optioneel)</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Jouw bedrijfsnaam"
                          className={inputClasses("company")}
                        />
                      </div>

                      {/* Project type */}
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-sm font-medium text-zinc-700 mb-1.5"
                        >
                          Type project <span className="text-red-400">*</span>
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          className={`${inputClasses("projectType")} appearance-none cursor-pointer`}
                        >
                          <option value="" disabled>
                            Selecteer een type
                          </option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="mt-1 text-xs text-red-500">{errors.projectType}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-zinc-700 mb-1.5"
                        >
                          Bericht <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Vertel ons over je project. Wat wil je bouwen? Voor wie? Wat zijn de doelen?"
                          className={`${inputClasses("message")} resize-none`}
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                        )}
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full py-4 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                        >
                          {status === "loading" ? "Verzenden..." : "Bericht versturen"}
                        </button>
                        <p className="mt-3 text-center text-xs text-zinc-400">
                          We reageren binnen één werkdag. Geen spam, beloofd.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </div>
  );
}
