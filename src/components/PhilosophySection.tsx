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
          ABOUT
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mb-4 text-lg leading-[1.7] text-text-on-dark md:text-xl"
        >
          dstudio는 일상을 기록하는 경험을 더 따뜻하고 의미 있게
          <br />
          만들어가는 앱 개발 스튜디오예요.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mb-12 text-base leading-[1.7] text-text-on-dark/70"
        >
          화려한 기능보다 매일 꺼내보고 싶은 편안함을 추구해요.
          <br />
          사람들의 하루가 작은 점이 되어 모이면,
          <br />
          그것이 하나의 아름다운 그림이 된다고 믿어요.
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
          완벽하지 않아도 괜찮아요.
          <br />
          기록은 있는 그대로의
          <br />
          오늘을 남기는 일이니까요.
        </motion.blockquote>

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
