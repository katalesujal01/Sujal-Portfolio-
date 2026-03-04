"use client";
import { motion } from "framer-motion";

export default function ProgressBar({
  label,
  value
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-white/80">{label}</span>
        <span className="text-neon-blue">{value}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden neon-border">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-indigo via-neon-blue to-neon-cyan rounded-full shadow-glow"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
