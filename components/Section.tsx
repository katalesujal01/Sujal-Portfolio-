"use client";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Section({
  id,
  children,
  className = ""
}: {
  id: string;
  children?: any;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 md:px-10 py-16 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={variants}
      >
        {children}
      </motion.div>
    </section>
  );
}
