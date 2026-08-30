"use client";

import {
  Code2,
  Cpu,
  Globe,
  Laptop,
  Monitor,
  Network,
  Server,
  Terminal,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const skills = [
  {
    name: "JavaScript / TypeScript",
    icon: Code2,
  },

  {
    name: "C++",
    icon: Cpu,
  },
  {
    name: "Python",
    icon: Terminal,
  },
  {
    name: "React",
    icon: Monitor,
  },
];

const interests = [
  {
    name: "Web Development",
    icon: Globe,
  },
  {
    name: "Machine Learning",
    icon: Cpu,
  },
  {
    name: "Linux",
    icon: Terminal,
  },
  {
    name: "Robotics",
    icon: Network,
  },
  {
    name: "Performance",
    icon: Server,
  },
];

const posts = [
  {
    title: "(待更新..)",
    href: "#",
  },
];

const experiences = [
  {
    date: "2026/7/12 — 2026/7/18",
    title: "NTU CSIE Summer Camp",
    description:
      "參加由國立臺灣大學資訊工程學系舉辦的 CSIE Camp，接觸不同資訊領域，與來自各地的同學交流，累積了十分精彩的營隊與學習經驗。",
  },
  {
    date: "2026/2/2 — 2026/2/5",
    title: "NCKU FunAI Winter Camp",
    description:
      "參加 2026 FunAI Winter Camp，並在 Proly PK 競賽中獲得第一名。透過實際訓練與調整模型，深入了解 Reinforcement Learning，也累積了完整的 AI 專案經驗。",
  },
];

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="border-b border-white/15 pb-4 font-serif text-xl font-medium text-zinc-100 italic">
      {children}
    </h3>
  );
}
export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  const isInView = useInView(aboutRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      ref={aboutRef}
      id="about"
      className="mx-auto w-full max-w-5xl px-6 pt-24 pb-32 md:pt-40"
    >
      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <SectionHeader>About</SectionHeader>

        <div className="mt-12 md:mt-16">
          <h2 className="max-w-4xl text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">
            <span className="font-sans font-medium">I build things</span>
            <br />
            <span className="font-serif font-normal text-zinc-300 italic">
              I want to understand.
            </span>
          </h2>
          <div className="mt-12 max-w-2xl space-y-5">
            <p className="text-sm leading-7 text-zinc-200 md:text-base">
              我是陳威皓，一名對資訊科技抱有極大熱忱的學生。
              我喜歡研究各種技術，也喜歡把學到的東西實際做成專案，
              因此涉獵的領域比較廣。
            </p>

            <p className="text-sm leading-7 text-zinc-300 md:text-base">
              目前主要在探索 Web Development、機器學習算法、Discord
              機器人開發與伺服器架設，也對 Linux、Robotics
              和效能優化等領域感興趣。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-32 md:mt-40"
      >
        <SectionHeader>Education</SectionHeader>

        <div className="grid gap-3 py-8 md:grid-cols-[160px_1fr] md:gap-8">
          <span className="font-mono text-xs text-zinc-300">
            2026 — Present
          </span>

          <div>
            <h3 className="font-serif text-lg font-medium text-zinc-100 md:text-xl">
              Taichung Municipal Hui-Wen Senior High School
            </h3>

            <p className="mt-2 text-sm text-zinc-300">High School Student</p>
          </div>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-24 md:mt-32"
      >
        <SectionHeader>Experience</SectionHeader>

        <div className="mt-10">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="grid grid-cols-[24px_1fr] gap-6 md:grid-cols-[24px_160px_1fr] md:gap-8"
            >
              {/* Timeline */}
              <div className="relative flex justify-center">
                {/* Line */}
                {index !== experiences.length - 1 && (
                  <span className="absolute top-3 h-full w-px bg-white/15" />
                )}

                {/* Dot */}
                <span className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border border-zinc-400 bg-zinc-100 transition-colors duration-300 hover:border-cyan-400" />
              </div>

              {/* Date */}
              <time className="hidden pt-0.5 font-mono text-xs text-zinc-300 md:block">
                {experience.date}
              </time>

              {/* Content */}
              <div
                className={index !== experiences.length - 1 ? "pb-12" : "pb-2"}
              >
                <h4 className="font-serif text-lg font-medium text-zinc-100 md:text-xl">
                  {experience.title}
                </h4>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 md:text-[15px]">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stack */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-24 md:mt-32"
      >
        <SectionHeader>Stack</SectionHeader>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex aspect-square flex-col items-center justify-center border border-white/10 bg-white/[0.015] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                />

                <span className="mt-4 text-sm text-zinc-300 transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-24 md:mt-32"
      >
        <SectionHeader>Interests</SectionHeader>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {interests.map((interest) => {
            const Icon = interest.icon;

            return (
              <div
                key={interest.name}
                className="group flex items-center gap-4 border-b border-white/10 py-5"
              >
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="text-zinc-300 transition-colors duration-300 group-hover:text-zinc-100"
                />

                <span className="font-serif text-lg text-zinc-300 transition-colors duration-300 group-hover:text-white">
                  {interest.name}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Posts */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-24 md:mt-32"
      >
        <SectionHeader>Posts</SectionHeader>

        <div>
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="group flex items-center justify-between border-b border-white/10 py-6"
            >
              <span className="text-sm text-zinc-300 transition-colors duration-300 group-hover:text-white">
                {post.title}
              </span>

              <span className="text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
