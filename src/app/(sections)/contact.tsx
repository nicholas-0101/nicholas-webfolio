"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_nxj2umk",
        "template_1z62rif",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "p2j-Oemu8glP-dqOw"
      );
      setStatus("messages sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("email send error:", error);
      setStatus("failed to send message. Try again.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col gap-[60px]">
      <div className="flex justify-center">
        <div className="flex flex-col gap-[20px] w-full max-w-[640px]">
          <h1 className="text-[42px] text-[#e4e4e0] text-center font-sans pt-10">
            CONTACT ME
          </h1>

          <div className="flex flex-col md:flex-row gap-[20px] w-full">
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full md:w-[300px] h-[40px] rounded-[5px] text-[#e4e4e0]"
              type="text"
              placeholder="your name..."
              required
            />
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full md:w-[300px] h-[40px] rounded-[5px] text-[#e4e4e0]"
              type="email"
              placeholder="your@mail.com"
              required
            />
          </div>

          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="md:w-[97%] sm:w-full h-[200px] rounded-[5px] text-[#e4e4e0]"
            placeholder="your message..."
            required
          />

          <Button
            onClick={sendEmail}
            disabled={loading}
            variant="outline"
            className="md:w-[97%] sm:w-full h-[40px] rounded-[5px] text-black cursor-pointer bg-[#e4e4e0] hover:opacity-80"
          >
            {loading ? "Sending..." : "Send!"}
          </Button>

          {status && (
            <p className="text-[#e4e4e0] text-sm mt-2 justify-center">
              {status}
            </p>
          )}
        </div>
      </div>

      <hr className="border-[#e4e4e0]" />

      <div className="flex justify-center flex-wrap gap-4 lg:gap-8">
        <a
          href="https://www.linkedin.com/in/nicholas-samuel-030649268/"
          target="_blank"
          aria-label="linkedin"
          className="w-12 h-12"
        >
          <Button
            className="bg-transparent cursor-pointer hover:opacity-80"
            size={"icon"}
          >
            <img src={"icons8-linkedin.svg"} alt="contact-linkedin" />
          </Button>
        </a>
        <a
          href="https://github.com/nicholas-0101"
          target="_blank"
          aria-label="github"
          className="w-12 h-12"
        >
          <Button
            className="bg-transparent cursor-pointer hover:opacity-80"
            size={"icon"}
          >
            <img src={"icons8-git.svg"} alt="contact-github" />
          </Button>
        </a>
        <a
          href="https://discord.gg/AnNXHpRF"
          target="_blank"
          aria-label="discord"
          className="w-12 h-12"
        >
          <Button
            className="bg-transparent cursor-pointer hover:opacity-80"
            size={"icon"}
          >
            <img src={"icons8-discord.svg"} alt="contact-discord" />
          </Button>
        </a>
        <a
          href="https://www.instagram.com/nic.verr/"
          target="_blank"
          aria-label="instagram"
          className="w-12 h-12"
        >
          <Button
            className="bg-transparent cursor-pointer hover:opacity-80"
            size={"icon"}
          >
            <img src={"icons8-instagram.svg"} alt="contact-instagram"/>
          </Button>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
