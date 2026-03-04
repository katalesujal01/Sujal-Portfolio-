"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiBarChart2, FiFolder, FiBook, FiAward, FiZap, FiGlobe, FiMail } from "react-icons/fi";

const sections = [
  { id: "hero", label: "Home", icon: FiHome },
  { id: "summary", label: "Summary", icon: FiUser },
  { id: "skills", label: "Skills", icon: FiBarChart2 },
  { id: "projects", label: "Projects", icon: FiFolder },
  { id: "education", label: "Education", icon: FiBook },
  { id: "certs", label: "Certifications", icon: FiAward },
  { id: "strengths", label: "Strengths", icon: FiZap },
  { id: "languages", label: "Languages", icon: FiGlobe },
  { id: "contact", label: "Contact", icon: FiMail }
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed z-40 hidden md:block h-screen w-64 bg-bg/70 border-r border-cyan-400/10 backdrop-blur-md">
      <div className="h-full flex flex-col p-4">
        <div className="mb-6">
          <Link href="#hero" className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-neon-blue shadow-glow-strong" />
            <span className="font-semibold tracking-wide text-neon-blue">Sujal • Data Analyst</span>
          </Link>
        </div>
        <nav className="relative">
          <ul className="space-y-1">
            {sections.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <Link href={`#${id}`} className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition">
                  <span className="text-neon-blue/80 group-hover:text-neon-blue">
                    <Icon />
                  </span>
                  <span className="text-sm">{label}</span>
                  {active === id && (
                    <motion.span
                      layoutId="active"
                      className="ml-auto h-1 w-6 rounded-full bg-neon-blue shadow-glow"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto p-3 rounded-lg border border-cyan-400/10 bg-white/5">
          <p className="text-xs text-white/70">Futuristic analytics portfolio</p>
        </div>
      </div>
    </aside>
  );
}
