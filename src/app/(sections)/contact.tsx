"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { SendIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const socials = [
  {
    href: "https://www.linkedin.com/in/nicholas-samuel-030649268/",
    icon: "icons8-linkedin.svg",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/nicholas-0101",
    icon: "icons8-git.svg",
    alt: "GitHub",
    label: "GitHub",
  },
  {
    href: "https://discord.gg/AnNXHpRF",
    icon: "icons8-discord.svg",
    alt: "Discord",
    label: "Discord",
  },
  {
    href: "https://www.instagram.com/nic.verr/",
    icon: "icons8-instagram.svg",
    alt: "Instagram",
    label: "Instagram",
  },
];

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const { ref, isVisible } = useScrollReveal(0.1);

  // Initialize EmailJS with public key
  useEffect(() => {
    emailjs.init("p2j-Oemu8glP-dqOw");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    // Validate form
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus("");
    try {
      await emailjs.send(
        "service_nxj2umk",
        "template_1z62rif",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        }
      );
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS error:", error?.text || error);
      setStatus("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-between gap-[40px]"
      ref={ref}
    >
      {/* Top: Contact form */}
      <div className="flex justify-center pt-4">
        <div className="flex flex-col gap-[20px] w-full max-w-[640px]">
          <p
            className={`text-[#8a8884] text-sm font-sans tracking-[0.3em] uppercase text-center ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            06 — Contact
          </p>
          <h1
            className={`text-[42px] text-[#e4e4e0] text-center font-sans ${
              isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            CONTACT ME
          </h1>

          <div
            className={`flex flex-col md:flex-row gap-[20px] w-full ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full md:w-[300px] h-[44px] rounded-[5px] text-[#e4e4e0] bg-white/5 border-white/10 placeholder:text-white/30 focus:border-[#e4e4e0]/50 focus:ring-1 focus:ring-[#e4e4e0]/20 transition-all duration-300"
              type="text"
              placeholder="your name..."
              required
            />
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full md:w-[300px] h-[44px] rounded-[5px] text-[#e4e4e0] bg-white/5 border-white/10 placeholder:text-white/30 focus:border-[#e4e4e0]/50 focus:ring-1 focus:ring-[#e4e4e0]/20 transition-all duration-300"
              type="email"
              placeholder="your@mail.com"
              required
            />
          </div>

          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`w-full h-[200px] rounded-[5px] text-[#e4e4e0] bg-white/5 border-white/10 placeholder:text-white/30 focus:border-[#e4e4e0]/50 focus:ring-1 focus:ring-[#e4e4e0]/20 transition-all duration-300 resize-none ${
              isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
            placeholder="your message..."
            required
          />

          <Button
            onClick={sendEmail}
            disabled={loading}
            variant="outline"
            className={`w-full h-[44px] rounded-[5px] text-black cursor-pointer bg-[#e4e4e0] hover:bg-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 font-sans text-[16px] inline-flex items-center justify-center gap-2 ${
              isVisible ? "animate-fade-in-up delay-400" : "opacity-0"
            }`}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send <SendIcon className="w-4 h-4" />
              </>
            )}
          </Button>

          {status && (
            <p className="text-[#e4e4e0] text-sm text-center animate-fade-in">
              {status}
            </p>
          )}
        </div>
      </div>

      {/* Bottom: Social links + footer */}
      <div className="flex flex-col gap-6">
        <hr className="border-white/10" />

        <div
          className={`flex justify-center gap-6 ${
            isVisible ? "animate-fade-in-up delay-500" : "opacity-0"
          }`}
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-300">
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
          ))}
        </div>

        <p
          className={`text-center text-[13px] text-white/30 font-sans pb-4 ${
            isVisible ? "animate-fade-in delay-600" : "opacity-0"
          }`}
        >
          © {new Date().getFullYear()} Nicholas. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
