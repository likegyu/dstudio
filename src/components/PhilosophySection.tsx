"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Dictionary } from "@/i18n/getDictionary";

export default function PhilosophySection({ dict }: { dict: Dictionary }) {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      className="bg-primary-dark px-5 py-20 md:px-10 md:py-[120px]"
    >
      <div ref={ref} className="mx-auto max-w-[800px] text-center">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.08em] text-accent-soft"
        >
          {dict.philosophy.sectionLabel}
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mb-4 text-lg leading-[1.7] text-text-on-dark md:text-xl"
        >
          {dict.philosophy.intro.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mb-12 text-base leading-[1.7] text-text-on-dark/70"
        >
          {dict.philosophy.body.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mb-12 h-px w-12 bg-accent-soft/30"
        />

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-12 text-2xl font-bold leading-[1.3] tracking-[-0.02em] text-text-on-dark md:text-[32px]"
        >
          {dict.philosophy.quote.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </motion.blockquote>

        {/* Value keywords */}
        <div
          ref={valuesRef}
          className="grid grid-cols-1 gap-8 text-left md:grid-cols-3"
        >
          {dict.philosophy.values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, x: -20 }}
              animate={valuesVisible ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              className="border-l-2 border-accent-soft pl-5"
            >
              <span className="mb-1 block text-xs tracking-[0.04em] text-accent-soft">
                {value.number}
              </span>
              <h3 className="mb-1 text-xl font-bold text-text-on-dark md:text-2xl">
                {value.keyword}
              </h3>
              <p className="text-sm text-text-on-dark/70">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
