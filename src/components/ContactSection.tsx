"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Dictionary } from "@/i18n/getDictionary";

export default function ContactSection({ dict }: { dict: Dictionary }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="bg-warm-beige px-5 py-20 md:px-10 md:py-[120px]"
    >
      <div ref={ref} className="mx-auto max-w-[1200px] text-center">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.08em] text-accent"
        >
          {dict.contact.sectionLabel}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 text-[30px] font-bold leading-[1.3] tracking-[-0.02em] text-text-primary md:text-[40px]"
        >
          {dict.contact.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mb-8 text-lg text-text-secondary md:text-xl"
        >
          {dict.contact.description.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          href="mailto:admin@dstudio.kr"
          className="group relative inline-block text-xl font-normal text-primary md:text-[32px]"
          style={{ fontFamily: "var(--font-zilla-slab)" }}
        >
          admin@dstudio.kr
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
        </motion.a>
      </div>
    </section>
  );
}
