"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TAGS = ["습관 기록", "따뜻한 디자인", "함께 채우기"];

// Heatmap color palette from to dot app
const HEATMAP_DOTS = [
  "#7CB88A", "#5FA0C4", "#E8A87C", "#B8A0D0",
  "#D4848A", "#C4CDD4", "#D4B86C", "#88C49C",
  "#A4866C", "#D4786C", "#8C6494", "#6CB4CC",
  "#7CB88A", "#E8A87C", "#5FA0C4", "#88C49C",
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="bg-warm-beige px-5 py-20 md:px-10 md:py-[120px]"
    >
      <div ref={ref} className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Text content - 60% */}
          <div className="lg:w-[60%]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.08em] text-accent"
            >
              ABOUT
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 text-[30px] font-bold leading-[1.3] tracking-[-0.02em] text-text-primary md:text-[40px]"
            >
              기록의 온도를
              <br />
              디자인합니다
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mb-4 text-lg leading-[1.7] text-text-primary md:text-xl"
            >
              dstudio는 일상을 기록하는 경험을 더 따뜻하고 의미 있게
              만들어가는 앱 개발 스튜디오입니다.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mb-12 text-base leading-[1.7] text-text-secondary"
            >
              우리는 화려한 기능보다 매일 꺼내보고 싶은 편안함을 추구해요.
              <br />
              사람들의 하루가 작은 점이 되어 모이면,
              <br />
              그것이 하나의 아름다운 그림이 된다고 믿습니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-3xl border border-primary/30 bg-cream-white px-5 py-2 text-sm font-medium text-text-primary transition-all duration-200 ease-out hover:bg-primary hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Decorative element - 40% - Heatmap-inspired dot grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex lg:w-[40%] lg:items-center lg:justify-center"
          >
            <div className="relative h-80 w-full">
              {/* Abstract decorative shapes */}
              <div className="absolute right-8 top-4 h-48 w-48 rounded-[32px] bg-primary-light/20" />
              <div className="absolute bottom-8 left-4 h-36 w-36 rounded-[24px] bg-accent-soft/30" />
              <div className="absolute right-20 bottom-16 h-20 w-20 rounded-full bg-secondary-light/40" />
              {/* Heatmap-style dot pattern */}
              <div className="absolute left-16 top-12 grid grid-cols-4 gap-3">
                {HEATMAP_DOTS.map((color, i) => (
                  <div
                    key={i}
                    className="h-2.5 w-2.5 rounded-[2px]"
                    style={{
                      backgroundColor: color,
                      opacity: 0.4 + (i % 4) * 0.15,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
