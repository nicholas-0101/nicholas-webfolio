"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Send } from "lucide-react";
import {
  MotionSection,
  MotionFade,
} from "@/components/motion/MotionSection";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experiences", label: "Experiences" },
  { id: "contact", label: "Contact" },
];

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    emailjs.init("waJDlpWliFV3W7WXV");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill in all fields.");
      setTimeout(() => setStatus(""), 7000);
      return;
    }
    setLoading(true);
    setStatus("");
    try {
      await emailjs.send("service_eqz23tp", "template_758wpfn", {
        name: form.name,
        from_name: form.name,
        from_email: form.email,
        reply_to: form.email,
        title: `New message from ${form.name}`,
        message: form.message,
      });
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (error: any) {
      console.error("EmailJS error:", error?.text || error);
      setStatus("Failed to send message. Please try again later.");
      setTimeout(() => setStatus(""), 7000);
    }
    setLoading(false);
  };

  return (
    <MotionSection className="relative bg-[#0a0a0a] pt-16 md:pt-24 lg:pt-28 grain">
      <div className="px-8 md:px-12 lg:px-16">
        {/* Contact form — centered */}
        <div className="flex justify-center pb-24 md:pb-32">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-10 md:mb-12">
              <MotionFade>
                <div className="flex items-center justify-center gap-3 pb-6">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
                  <span className="text-[#FF4D00] text-sm tracking-[0.3em] uppercase">
                    Contact
                  </span>
                </div>
              </MotionFade>
              <MotionFade
                as="h2"
                delay={0.15}
                className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
              >
                LET&apos;S WORK
                <br />
                <span className="text-[#FF4D00]">TOGETHER</span>
              </MotionFade>
              <MotionFade as="p" delay={0.3} className="text-[#666] text-sm md:text-base mb-10 md:mb-14">
                Have a project in mind? Let&apos;s bring it to life.
              </MotionFade>
            </div>

            <MotionFade delay={0.45}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full h-12 rounded-xl text-white bg-[#111111] border-white/5 placeholder:text-white/20 focus:border-[#FF4D00]/50 focus:ring-1 focus:ring-[#FF4D00]/20 transition-all duration-300"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                  <Input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full h-12 rounded-xl text-white bg-[#111111] border-white/5 placeholder:text-white/20 focus:border-[#FF4D00]/50 focus:ring-1 focus:ring-[#FF4D00]/20 transition-all duration-300"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full h-40 rounded-xl text-white bg-[#111111] border-white/5 placeholder:text-white/20 focus:border-[#FF4D00]/50 focus:ring-1 focus:ring-[#FF4D00]/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
                <Button
                  onClick={sendEmail}
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-[#FF4D00] text-white hover:bg-[#FF6B2B] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 text-sm tracking-wider cursor-pointer font-medium inline-flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
                </Button>
                {status && (
                  <p className={`text-center text-sm animate-fade-in ${status.includes("success") ? "text-green-400" : "text-red-400"}`}>
                    {status}
                  </p>
                )}
                <p className="text-center text-[#666] text-sm pt-4">
                  Or email me directly at{" "}
                  <a
                    href="mailto:work.nicholassamuel@gmail.com"
                    className="text-[#FF4D00] hover:text-[#FF6B2B] transition-colors duration-300 underline underline-offset-2"
                  >
                    work.nicholassamuel@gmail.com
                  </a>
                </p>
              </div>
            </MotionFade>
          </div>
        </div>

      </div>
    </MotionSection>
  );
}

export default ContactSection;
