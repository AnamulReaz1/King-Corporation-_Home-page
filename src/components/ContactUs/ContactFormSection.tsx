"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaUser, FaAt, FaMobileAlt, FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export function ContactFormSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...form }, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        toast.success("Message sent successfully!");
      },
      () => {
        setLoading(false);
        toast.error("Failed to send message. Please try again.");
      }
    );
  }

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
        className={cn(
          "w-full max-w-5xl rounded-2xl border transition-all duration-300 p-8 md:p-12",
          "min-h-[600px] flex flex-col", // ensures consistent height
          // 🌞 Light Mode Gradient
          "bg-gradient-to-br from-green-50 via-white to-green-100 border-zinc-200 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]",
          // 🌙 Dark Mode Gradient
          "dark:bg-gradient-to-br dark:from-zinc-800/60 dark:via-zinc-900/50 dark:to-zinc-950/80 dark:border-zinc-700 dark:hover:border-green-500 dark:hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
        )}
      >
        <p className="text-lg text-green text-center mb-2 tracking-wider">CONTACT US</p>
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-10 text-center">
          Send Us Message
        </h2>
        <form className="space-y-6 flex-1 flex flex-col justify-between" onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Full Name"
                className="pl-12 bg-white/10 dark:bg-white/10 border-0 text-zinc-900 dark:text-zinc-100"
                value={form.name}
                onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-green text-xl pointer-events-none" />
            </div>
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="Email Address"
                className="pl-12 bg-white/10 dark:bg-white/10 border-0 text-zinc-900 dark:text-zinc-100"
                value={form.email}
                onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                required
              />
              <FaAt className="absolute left-4 top-1/2 -translate-y-1/2 text-green text-xl pointer-events-none" />
            </div>
            <div className="relative flex-1">
              <Input
                type="tel"
                placeholder="Phone Number"
                className="pl-12 bg-white/10 dark:bg-white/10 border-0 text-zinc-900 dark:text-zinc-100"
                value={form.phone}
                onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
              />
              <FaMobileAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-green text-xl pointer-events-none" />
            </div>
          </div>
          <Input
            type="text"
            placeholder="Subject"
            className="bg-white/10 dark:bg-white/10 border-0 text-zinc-900 dark:text-zinc-100"
            value={form.subject}
            onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))}
            required
          />
          <Textarea
            rows={7}
            placeholder="Message"
            className="bg-white/10 dark:bg-white/10 border-0 text-zinc-900 dark:text-zinc-100 resize-none"
            value={form.message}
            onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className={cn(
              "bg-green hover:bg-green-950 text-white font-semibold px-8 py-3 rounded-full text-lg mt-4 shadow-md flex gap-2 items-center",
              loading && "opacity-70 cursor-not-allowed"
            )}
          >
            SEND US MESSAGE <FaArrowRight className="ml-2" />
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
