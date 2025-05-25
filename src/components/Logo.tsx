"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThinkingLogo({
  onDone,
  animateToCorner = false,
}: {
  onDone: () => void;
  animateToCorner?: boolean;
}) {
  const [text, setText] = useState("");
  const [stage, setStage] = useState<"typing" | "done">("typing");
  const question = "is ((9 + 7) / 4 - 2)² equal to 4 or 9? let me think...";

  useEffect(() => {
    if (stage === "typing") {
      let i = 0;
      const typing = setInterval(() => {
        setText(question.slice(0, i + 1));
        i++;
        if (i >= question.length) {
          clearInterval(typing);
          setTimeout(() => {
            setStage("done");
            setText("");
            onDone();
          }, 1000);
        }
      }, 60);
      return () => clearInterval(typing);
    }
  }, [stage, onDone]);

  const base =
    "relative z-20 transition-all duration-700 flex flex-col items-center";
  const transform = animateToCorner ? "w-32 h-32" : "w-40 h-40";

  return (
    <div className={`${base} ${transform}`}>
      <Image
        src="logo.svg"
        alt="SRPO Brain Logo"
        width={48}
        height={48}
        className="rounded-md w-full h-full"
        style={{ transition: "all 0.7s cubic-bezier(.4,0,.2,1)" }}
        priority
      />
      <div className="relative min-h-[32px]">
        <div className="text-lg md:text-xl font-mono text-gray-800">
          {text}
          {stage === "typing" && <span className="animate-pulse">|</span>}
        </div>
      </div>
    </div>
  );
}
