"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiHome, FiUser, FiBarChart2, FiFolder, FiMail } from "react-icons/fi";

const items = [
  { id: "hero", label: "Home", icon: FiHome },
  { id: "skills", label: "Skills", icon: FiBarChart2 },
  { id: "projects", label: "Cases", icon: FiFolder },
  { id: "summary", label: "Profile", icon: FiUser },
  { id: "contact", label: "Contact", icon: FiMail }
];

export default function MobileNav() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-bg/80 backdrop-blur border-t border-cyan-400/10">
      <ul className="flex justify-around py-2">
        {items.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <Link href={`#${id}`} className="flex flex-col items-center text-xs">
              <span className={`${active === id ? "text-neon-blue" : "text-white/70"}`}>
                <Icon />
              </span>
              <span className="mt-1">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
