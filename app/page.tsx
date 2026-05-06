"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Loading from "./components/Loading";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import { experience } from "./data/experience";
import TypingText from "./components/TypingText";

import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaLine, FaCommentDots, FaUser } from "react-icons/fa";


import {
  FaPhp,
  FaLaravel,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiVuedotjs,
  SiJquery,
  SiMysql,
  SiSqlite,
} from "react-icons/si";

/* =========================
   DATA
========================= */
const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Adaptability",
];

const skillsLeft = [
  { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { name: "Laravel", icon: FaLaravel, color: "text-red-400" },
  { name: "MySQL", icon: SiMysql, color: "text-sky-400" },
  { name: "SQL", icon: SiSqlite, color: "text-gray-300" },
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
];

const skillsRight = [
  { name: "JavaScript", icon: FaJs, color: "text-yellow-300" },
  { name: "Vue.js", icon: SiVuedotjs, color: "text-green-400" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-400" },
  { name: "jQuery", icon: SiJquery, color: "text-blue-400" },
];


function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-10">

      <h2 className="text-3xl font-semibold tracking-tight relative inline-block">

        {/* TEXT */}
        <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
          {title}
        </span>

        {/* ACCENT LINE */}
        <span className="absolute left-0 -bottom-2 w-14 h-[2px] bg-[#38e8ff]" />

        {/* GLOW DOT (เพิ่มความ premium เล็กน้อย) */}
        <span className="absolute -right-2 top-2 w-1.5 h-1.5 rounded-full bg-[#38e8ff] blur-[1px]" />

      </h2>

    </div>
  );
}
/* =========================
   SOFT SKILLS
========================= */
function SoftSkills() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Soft Skills
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {softSkills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="
            relative overflow-hidden rounded-2xl px-5 py-4
            bg-white/5 backdrop-blur-xl
            border border-white/10
            text-center cursor-pointer
            hover:scale-[1.05]
            hover:shadow-[0_0_30px_rgba(56,232,255,0.2)]
            transition
            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-[#38e8ff]/10 before:to-[#34d399]/10
            before:opacity-0 hover:before:opacity-100
          "
          >
          <span className="text-white/80 font-medium text-sm tracking-wide">
  {skill}
</span>
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-cyan-400/10 blur-xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   MAIN PAGE
========================= */
export default function Home() {
  const [selectedImages, setSelectedImages] = useState<any[] | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  /* ✅ FIX STATE (สำคัญ) */
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 180]);

  const handleResumeClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      window.open("/images/Resume.jpg", "_blank");
    } else {
      window.open("/Chonthicha_Tadthong_Resume.pdf", "_blank");
    }
  };

  return (
    <div className="bg-[#070a0f] text-white overflow-x-hidden">

      <Loading />

      {/* ================= HERO ================= */}
      <section id="home" className="section-hero h-screen flex items-center justify-center relative overflow-hidden">

        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <div className="w-full h-full bg-[url('/images/photo-2.jpg')] bg-cover bg-center opacity-80" />
        </motion.div>

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          className="relative z-10 text-center max-w-3xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src="/images/photo-3.jpg"
            className="w-32 h-auto mx-auto rounded-full border border-white/10 shadow-xl"
          />

<h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight">
  <span className="block text-white">Chonthicha</span>
  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    Tadthong
  </span>
</h1>

          <TypingText text="Full Stack Web Developer" />

          <p className="text-gray-400 mt-4">
          Full-stack Web Developer with experience developing web applications 
          across frontend, backend, and databases, focused on building reliable 
          and maintainable systems.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            {/* <a className="px-6 py-3 bg-cyan-500 text-black rounded-full" href="#projects">
             View Work 

            </a>
            <a className="px-6 py-3 border border-white/10 rounded-full" href="#contact">
              Contact
            </a> */}
            <div className="mt-8 flex gap-4 justify-center flex-wrap">

<a className="px-6 py-3 bg-cyan-500 text-black rounded-full" href="#projects">
  View Work
</a>

<a  className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition" href="#contact">
  Contact
</a>

{/* ✅ Resume */}
<a
  href="/Chonthicha_Tadthong_Resume.pdf"
  target="_blank"
  className="px-6 py-3 border border-white/10 rounded-full"
>
  Resume
</a>

</div>
          </div>
        </motion.div>
      </section>

      {/* ================= SOFT SKILLS ================= */}
      <SoftSkills />

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section-projects py-28 px-6 max-w-6xl mx-auto">
      
        <SectionHeader
  title="Key Projects"

/>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="section-experience py-28 px-6 max-w-6xl mx-auto">
      
              
        <SectionHeader
  title="Experience"

/>

        <div className="border-l border-white/10 pl-6 space-y-10">
          {experience.map((exp) => (
            <div key={exp.role} className="card p-6 rounded-2xl relative">

              <div className="absolute -left-[9px] top-6 w-3 h-3 bg-green-400 rounded-full" />

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-xs text-gray-400">{exp.period}</span>
              </div>

              <p className="text-sm text-gray-400 mt-1">{exp.company}</p>

              <ul className="mt-4 text-sm text-gray-300 space-y-1">
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionHeader
  title="Skills"

/>
        <div className="grid grid-cols-2 gap-4 w-full">
          {skillsLeft.concat(skillsRight).map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#38e8ff] hover:border-[#38e8ff] hover:shadow-[0_0_20px_rgba(56,232,255,0.25)] transition"
              >
                <Icon className={`text-xl ${skill.color}`} />
                <span className="text-sm text-white/90 font-medium">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 px-6 max-w-6xl mx-auto">
   

        <SectionHeader
  title="Contact"
 
/>


        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="space-y-4">

{/* PHONE */}
<a
  href="tel:+66984975732"
  target="_self"
  onClick={(e) => {
    e.stopPropagation();
  }}
  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38e8ff] transition"
>
  <FaPhone className="text-green-400" />
  <span>+66984975732</span>
</a>

{/* EMAIL */}
<a
  href="mailto:chonticha.chta@gmail.com"
  target="_self"
  onClick={(e) => {
    e.stopPropagation();
  }}
  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38e8ff] transition"
>
  <FaEnvelope className="text-yellow-300" />
  <span>Email</span>
</a>

{/* LINE */}
<a
  href="https://line.me/ti/p/MIZdFGwF2x"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    e.stopPropagation();
  }}
  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38e8ff] transition"
>
  <FaLine className="text-green-500" />
  <span>Line</span>
</a>

{/* GITHUB */}
<a
  href="https://github.com/chontichabam"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    e.stopPropagation();
  }}
  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38e8ff] transition"
>
  <FaGithub />
  <span>GitHub</span>
</a>

{/* LINKEDIN */}
<a
  href="https://www.linkedin.com/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    e.stopPropagation();
  }}
  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38e8ff] transition"
>
  <FaLinkedin className="text-blue-400" />
  <span>LinkedIn</span>
</a>

<a
  onClick={handleResumeClick}
  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38e8ff] transition cursor-pointer"
>
  📄 <span>Resume</span>
</a>

</div>

          {/* RIGHT FORM */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative">

            {/* POPUP */}
            {success && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                <div className="bg-[#0f141b] p-6 rounded-2xl text-center">
                  <h2 className="text-white text-xl">
                    ส่งข้อความไปยัง <span className="text-cyan-400">Chonthicha</span> แล้ว
                  </h2>

                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-4 py-2 bg-cyan-500 text-black rounded-xl"
                  >
                    ปิด
                  </button>
                </div>
              </div>
            )}

            <h3 className="text-xl mb-4">Send Message</h3>

            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);

                const formData = new FormData(e.currentTarget as HTMLFormElement);

                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  phone: formData.get("phone"),
                  message: formData.get("message"),
                };

                await fetch("https://discord.com/api/webhooks/1501444162996932680/7P3Z0YCYr2os2gXep2-78WRyrkwM-mXI6bTMAC_GzAZEogeUx-XVNxNC7SurwPkreI7s", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    content: "@everyone",
                    embeds: [
                      {
                        title: "📩 New Contact Message",
                        color: 0x38e8ff, // สีฟ้า
                  
                        fields: [
                          {
                            name: "👤 Name",
                            value: data.name || "-",
                            inline: true,
                          },
                          {
                            name: "📧 Email",
                            value: data.email || "-",
                            inline: true,
                          },
                          {
                            name: "📞 Phone",
                            value: data.phone || "-",
                            inline: true,
                          },
                          {
                            name: "💬 Message",
                            value: data.message || "-",
                          },
                        ],
                  
                        footer: {
                          text: "Portfolio Contact Form",
                        },
                  
                        timestamp: new Date().toISOString(),
                      },
                    ],
                  }),
                });

                setSuccess(true);
                setLoading(false);
                e.currentTarget.reset();
              }}
            >
              
              <div className="space-y-4">

  {/* NAME */}
  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-white/10">
    <FaUser className="text-cyan-400" />
    <input
      name="name"
      placeholder="Your Name"
      className="w-full bg-transparent outline-none text-white"
    />
  </div>

  {/* EMAIL */}
  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-white/10">
    <FaEnvelope className="text-yellow-300" />
    <input
      name="email"
      placeholder="Your Email"
      className="w-full bg-transparent outline-none text-white"
    />
  </div>

  {/* PHONE */}
  <div className="flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-white/10">
    <FaPhone className="text-green-400" />
    <input
      name="phone"
      placeholder="Your Phone"
      className="w-full bg-transparent outline-none text-white"
    />
  </div>

  {/* MESSAGE */}
  <div className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-white/10">
    <FaCommentDots className="text-purple-400 mt-1" />
    <textarea
      name="message"
      placeholder="Your Message"
      rows={4}
      className="w-full bg-transparent outline-none text-white resize-none"
    />
  </div>

</div>

              <button
                disabled={loading}
                className="w-full py-3 bg-cyan-500 text-black rounded-xl"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
}