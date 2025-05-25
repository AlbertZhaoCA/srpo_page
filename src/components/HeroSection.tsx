"use client";
import { SiArxiv, SiGithub } from "react-icons/si";

import ThinkingLogo from "./Logo";
import { useState } from "react";
import Image from "next/image";

const authors = [
  {
    name: "Zhongwei Wan*†",
    sup: 2,
    email: "wan.512@osu.edu",
    link: "mailto:wan.512@osu.edu",
    affiliation: "The Ohio State University",
    index_aff: 2,
  },
  {
    name: "Zhihao Dou†",
    sup: 3,
    link: null,
    affiliation: "Case Western Reserve University",
    index_aff: 3,
  },
  {
    name: "Che Liu",
    sup: 4,
    link: null,
    affiliation: "Imperial College London",
    index_aff: 4,
  },
  {
    name: "Yu Zhang",
    sup: 11,
    link: null,
    affiliation: "Tongji University",
    index_aff: 11,
  },
  {
    name: "Dongfei Cui",
    sup: 5,
    link: null,
    affiliation: "Duke university",
    index_aff: 5,
  },
  {
    name: "Qinjian Zhao",
    sup: 6,
    link: "https://github.com/AlbertZhaoCA",
    affiliation: "Kean University",
    index_aff: 6,
  },
  {
    name: "Hui Shen",
    sup: 7,
    link: null,
    affiliation: "University of Michigan",
    index_aff: 7,
  },
  {
    name: "Jing Xiong",
    sup: 10,
    link: null,
    affiliation: "The University of Hong Kong",
    index_aff: 10,
  },
  {
    name: "Yi Xin",
    sup: 12,
    link: null,
    affiliation: "Nanjing University",
    index_aff: 12,
  },
  {
    name: "Yifan Jiang",
    sup: 8,
    link: null,
    affiliation: "University of Southern California",
    index_aff: 8,
  },
  {
    name: "Chaofan Tao",
    sup: 10,
    link: null,
    affiliation: "The University of Hong Kong",
    index_aff: 10,
  },
  {
    name: "Yangfan He",
    sup: 9,
    link: null,
    affiliation: "University of Minnesota",
    index_aff: 9,
  },
  {
    name: "Mi Zhang",
    sup: 2,
    link: null,
    affiliation: "The Ohio State University",
    index_aff: 2,
  },
  {
    name: "Shen Yan",
    sup: 1,
    email: "sheny@bytedance.com",
    link: "mailto:sheny@bytedance.com",
    affiliation: "Bytedance Seed",
    index_aff: 1,
  },
];

export function HeroSectionOne() {
  const [showTitle, setShowTitle] = useState(false);
  const [hoveredAff, setHoveredAff] = useState<string | null>(null);
  const [hoveredAuthor, setHoveredAuthor] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl font-sans flex flex-col items-center mt-20 mb-12 px-6">
      <div
        className={`relative flex w-full  items-center justify-around transition-all duration-700 ${showTitle ? "flex-col xl:flex-row" : "flex-col"}`}
      >
        <ThinkingLogo onDone={() => setShowTitle(true)} />
        <h1
          className={`text-center text-5xl md:text-6xl font-extrabold tracking-tight font-sharetech mb-6 group transition-all duration-700 ${
            showTitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          SRPO: Enhancing{" "}
          <span className="text-blue-600">Multimodal LLM Reasoning</span> via
          <span className="text-blue-600">
            {" "}
            Reflection-Aware Reinforcement Learning
          </span>
        </h1>
      </div>
      <h2 className="text-xl md:text-2xl text-center font-light text-gray-700 mb-4">
        A novel framework that enhances the reasoning capabilities of multimodal
        large language models
      </h2>

      {/* Author List */}
      <div className="flex flex-wrap max-w-4xl justify-center gap-2 mb-4">
        {authors.map((a) => (
          <div
            key={a.name}
            className="flex flex-col items-center text-center group"
          >
            <a
              href={a.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-blue-500 hover:text-yellow-600 text-2xl md:text-3xl transition duration-300 ${a.link ? "cursor-pointer" : "cursor-default"} ${hoveredAff === a.affiliation || hoveredAuthor === a.name ? "text-yellow-600 scale-110" : ""}`}
              title={a.name}
              onMouseEnter={() => setHoveredAuthor(a.name)}
              onMouseLeave={() => setHoveredAuthor(null)}
            >
              {a.name}
              <sup className="text-sm align-super text-gray-500 ml-1">
                {a.sup}
              </sup>
              {a.name !== authors[authors.length - 1].name && (
                <span className="mx-1">,</span>
              )}
            </a>
          </div>
        ))}
      </div>

      {/* Affiliations */}
      {(() => {
        const affMap = authors.reduce((map, a) => {
          if (!map.has(a.affiliation)) {
            map.set(a.affiliation, [
              { sup: a.index_aff, name: a.name, email: a.email },
            ]);
          } else {
            map
              .get(a.affiliation)
              ?.push({ sup: a.index_aff, name: a.name, email: a.email });
          }
          return map;
        }, new Map<string, { sup: number; name: string; email?: string }[]>());

        const affArr = Array.from(affMap.entries()).map(([aff, sups]) => ({
          aff,
          sups,
          minSup: Math.min(...sups.map((s) => s.sup)),
        }));
        affArr.sort((a, b) => a.minSup - b.minSup);

        const firstRow = affArr.slice(0, 2);
        const secondRow = affArr.slice(2);

        const renderRow = (row: typeof affArr, isFirst: boolean) => (
          <div
            className={`flex flex-wrap justify-center gap-x-6 gap-y-1 mb-2 relative overflow-visible w-full`}
          >
            {row.map(({ aff, sups }) => {
              const emails = sups
                .filter((s) => s.email)
                .map((s) => `${s.name}: ${s.email}`);
              const showHighlight =
                hoveredAff === aff ||
                (hoveredAuthor && sups.some((s) => s.name === hoveredAuthor));
              return (
                <div
                  key={aff}
                  className={`transition-all duration-300 cursor-pointer relative ${isFirst ? "text-xl md:text-2xl font-bold text-yellow-400" : "text-base"} ${showHighlight ? "text-yellow-600 scale-110 font-bold" : "text-gray-500"}`}
                  onMouseEnter={() => setHoveredAff(aff)}
                  onMouseLeave={() => setHoveredAff(null)}
                  title={emails.length > 0 ? emails.join("\n") : aff}
                  style={{ display: "inline-block" }}
                >
                  <sup
                    className={`text-xs align-super text-gray-400 relative z-20 ${isFirst ? "text-base md:text-lg" : ""}`}
                  >
                    {sups.map((s, idx) =>
                      idx === 0 ? <span key={idx}>{s.sup}</span> : null,
                    )}
                  </sup>
                  <span
                    className={`transition-all duration-300 ${
                      isFirst
                        ? aff === "Bytedance Seed"
                          ? ""
                          : aff === "The Ohio State University"
                            ? "text-osu"
                            : ""
                        : ""
                    }`}
                  >
                    {aff === "Bytedance Seed" ? (
                      <>
                        <Image
                          src={"bytedance-seed.svg"}
                          alt="Bytedance"
                          width={48}
                          height={48}
                          className="w-auto h-[2rem] inline-block mr-1"
                        />
                      </>
                    ) : aff === "The Ohio State University" ? (
                      <>
                        <Image
                          src={"osu2.png"}
                          alt="OSU"
                          width={48}
                          height={48}
                          className="w-auto h-[2rem] inline-block mr-1"
                        />
                      </>
                    ) : (
                      <span>{aff}</span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        );

        return (
          <>
            {renderRow(firstRow, true)}
            {secondRow.length > 0 && renderRow(secondRow, false)}
          </>
        );
      })()}
      {/* Emails */}
      <div className="flex flex-wrap justify-center items-center gap-2 text-gray-600 text-lg md:text-xl mb-3">
        <span>Correspondence to</span>
        {authors.map((a, i) =>
          a.link && a.email ? (
            <a
              key={a.email}
              href={a.link.startsWith("mailto:") ? a.link : `mailto:${a.email}`}
              onMouseEnter={() => setHoveredAuthor(a.name)}
              onMouseLeave={() => setHoveredAuthor(null)}
              className={`${hoveredAuthor === a.name ? "text-yellow-600 scale-110 font-bold" : ""} transition duration-300 hover:text-yellow-600 hover:underline`}
              title={`Email ${a.name}`}
            >
              <sup className="text-xs align-super text-gray-400">{a.sup}</sup>
              {a.email}
              {i < authors.length - 1 && <span className="px-1">,</span>}
            </a>
          ) : null,
        )}
      </div>

      {/* Contribution Note */}
      <div className="text-center text-gray-500 text-sm mb-2">
        * Project Lead (work completed during internship at Bytedance) <br />†
        Equal Contribution
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-6 justify-center mb-10">
        <a
          href=""
          className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 font-semibold transition"
          title="View Paper"
        >
          <SiArxiv className="h-6 w-6" />
          <span className="text-lg">Paper</span>
        </a>
        <a
          href="https://github.com/SUSTechBruce/SRPO_MLLMs"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 font-semibold transition"
          title="View Code on GitHub"
        >
          <SiGithub className="h-6 w-6" />
          <span className="text-lg">Code</span>
        </a>
        <a
          href=""
          className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl border border-gray-300 text-gray-800 bg-white hover:bg-gray-100 font-semibold transition"
          title="View on HuggingFace"
        >
          <Image
            src="hf-logo.svg"
            alt="Hugging Face"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-lg">Dataset</span>
        </a>
      </div>
    </div>
  );
}
