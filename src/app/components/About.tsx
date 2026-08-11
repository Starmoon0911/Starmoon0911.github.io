"use client";

import { useRef } from "react";
import { m, motion, useInView } from "motion/react";

const skills = ["JavaScript", "TypeScript", "C++", "Python", "React"];

const interests = [
  "Web Development",
  "Machine Learning",
  "Linux",
  "Robotics",
  "Performance",
];

const posts = [
  {
    date: "NaN",
    title: "(待更新..)",
    href: "#",
  },
];

const experiences = [
  {
    date: "2026/7/12 ~ 2026/7/18",
    title: "NTU CSIE Summer Camp",
    description:
      "參加由國立臺灣大學資訊工程學系舉辦的 CSIE Camp，接觸不同資訊領域，與來自各地的同學交流，累積了十分精彩的營隊與學習經驗。",
  },
  {
    date: "2026/2/2 ~ 2026/2/5",
    title: "NCKU FunAI Winter Camp — 競賽特優",
    description:
      "參加 2026 FunAI Winter Camp，並在Proly PK競賽中獲得第一名。透過實際訓練與調整模型，深入了RL，也累積了完整的 AI 專案經驗。",
  },
];

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  const isInView = useInView(aboutRef, {
    once: true,
    amount: 0.25,
  });

  const command = "cat ./About.md";

  return (
    <section
      ref={aboutRef}
      id="about"
      className="mx-auto flex min-h-screen w-full max-w-4xl items-center px-6 py-24"
    >
      <div className="w-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-2xl md:p-8">
        {/* Terminal command */}
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-sm text-zinc-400">~/</span>

          <h2 className="font-mono text-lg font-semibold text-white">
            <motion.span>
              {isInView &&
                command.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
            </motion.span>
          </h2>
        </div>

        {/* About */}
        <div className="space-y-5">
          <h3 className="font-mono text-2xl font-bold text-white md:text-3xl">
            <span className="text-cyan-500"># </span>
            About me
          </h3>

          <p className="max-w-2xl text-sm leading-7 text-zinc-200">
            我是陳威皓，一名對資訊科技抱有極大熱忱的學生。
            我喜歡研究各種技術，也喜歡把學到的東西實際做成專案，因此涉獵的領域比較廣。
            <span className="ml-1 text-zinc-400">
              <del>I use Arch btw.</del>
            </span>
          </p>

          <p className="max-w-2xl text-sm leading-7 text-zinc-300">
            目前主要在探索 Web Development、機器學習算法、Discord
            機器人開發與伺服器架設，也對 Linux、Robotics
            和效能優化等領域感興趣。
          </p>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="font-mono text-lg font-semibold text-white">
            <span className="text-cyan-500">## </span>
            Education
          </h3>

          <div className="mt-6 border-l border-white/10 pl-6">
            <p className="font-mono text-xs text-zinc-300">2026 — Present</p>

            <h4 className="mt-2 text-base font-medium text-zinc-100">
              Taichung Municipal Hui-Wen Senior High School
            </h4>

            <p className="mt-1 text-sm text-zinc-300">High School Student</p>
          </div>
        </div>

        {/* Special Experience */}
        <div className="mt-16">
          <h3 className="font-mono text-lg font-semibold text-white">
            <span className="text-cyan-500">## </span>
            Special Experience
          </h3>

          <div className="relative mt-8 ml-2 border-l border-white/10 pl-7">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`relative ${
                  index !== experiences.length - 1 ? "pb-10" : ""
                }`}
              >
                {/* Timeline dot */}
                <span
                  className={`absolute top-1.5 -left-[33px] h-2.5 w-2.5 rounded-full border-2 bg-zinc-400 ${
                    false ? "border-cyan-500" : "border-zinc-500"
                  }`}
                />

                <p className="font-mono text-xs text-zinc-300">
                  {experience.date}
                </p>

                <h4 className="mt-2 text-base font-semibold text-zinc-100">
                  {experience.title}
                </h4>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-300">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="font-mono text-lg font-semibold text-white">
            <span className="text-cyan-500">## </span>
            Skills
          </h3>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="mt-16">
          <h3 className="font-mono text-lg font-semibold text-white">
            <span className="text-cyan-500">## </span>
            Interests
          </h3>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="font-mono text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="mt-16">
          <h3 className="font-mono text-lg font-semibold text-white">
            <span className="text-cyan-500">## </span>
            Posts
          </h3>

          <div className="mt-6 space-y-4">
            {posts.map((post) => (
              <a
                key={post.title}
                href={post.href}
                className="group flex flex-col gap-1 font-mono sm:flex-row sm:items-center sm:gap-5"
              >
                <span className="shrink-0 text-xs text-zinc-400">
                  {post.date}
                </span>

                <span className="text-sm text-zinc-300 transition-colors group-hover:text-white">
                  {post.title}
                </span>

                <span className="text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-200">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Terminal footer */}
        <div className="mt-12 border-t border-white/10 pt-5">
          <p className="font-mono text-xs text-zinc-400">
            $ echo &quot;睡不飽..&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
