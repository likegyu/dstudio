"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VALUES = [
  {
    number: "01",
    keyword: "편안함",
    description: "부담 없이 시작할 수 있는 기록",
  },
  {
    number: "02",
    keyword: "꾸준함",
    description: "작은 습관이 만드는 큰 변화",
  },
  {
    number: "03",
    keyword: "함께",
    description: "혼자가 아닌 함께 채우는 매일",
  },
];

export default function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="philosophy"
      className="bg-primary-dark px-5 py-20 md:px-10 md:py-[120px]"
    >
      <div ref={ref} className="mx-auto max-w-[800px] text-center">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 inline-block text-xs font-semibold uppercase tracking-[0.08em] text-accent-soft"
        >
          PHILOSOPHY
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-2xl font-bold leading-[1.3] tracking-[-0.02em] text-text-on-dark md:text-[32px]"
        >
          완벽하지 않아도 괜찮아요.
          <br />
          기록은 있는 그대로의
          <br />
          오늘을 남기는 일이니까요.
        </motion.blockquote>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-8 h-px w-12 bg-accent-soft/30"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mb-12 text-lg leading-[1.7] text-text-on-dark md:text-xl"
        >
          우리는 기록이 부담이 되지 않기를 바랍니다.
          <br />
          거창하지 않아도, 매일이 아니어도 괜찮아요.
          <br />
          당신이 편안하게 오늘을 남길 수 있도록,
          <br />
          dstudio는 가장 쉬운 방법을 고민합니다.
        </motion.p>

        {/* Value keywords */}
        <div
          ref={valuesRef}
          className="grid grid-cols-1 gap-8 text-left md:grid-cols-3"
        >
          {VALUES.map((value, i) => (
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
