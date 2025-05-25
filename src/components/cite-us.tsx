"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import fireworksAnimation from "../../public/firework.json";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { Button } from "./ui/button";

const bibtex = `@inproceedings{Zhongwei2025srpo,
  title     = {SRPO: Enhancing Multimodal LLM Reasoning via Reflection-Aware Reinforcement Learning},
  author    = {Zhongwei Wan and Alex ZH Dou and Che Liu and Yu Zhang and Dongfei Cui and Qinjian Zhao and and Hui Shen and Jing Xiong and Yi Xin and Yifan Jiang and Chaofan Tao and Yangfan He and Mi Zhang and Shen Yan},
  booktitle = {arxiv preprint arXiv:2505,
  year      = {2025},
  url       = {https://arxiv.org/abs/2505.05000},
}`;

export function CiteUsBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (
        typeof navigator !== "undefined" &&
        navigator.clipboard &&
        navigator.clipboard.writeText
      ) {
        await navigator.clipboard.writeText(bibtex);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = bibtex;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="relative bg-white rounded-2xl border border-gray-200 shadow-md mt-16 max-w-3xl mx-auto p-6 overflow-hidden">
      {copied && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <Lottie
            animationData={fireworksAnimation}
            loop={false}
            className="w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
            style={{ maxWidth: 800, maxHeight: 800 }}
          />
        </div>
      )}

      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4 z-10 relative">
        <span>📖</span>
        <span>Cite Us</span>
      </h2>

      <div className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono border border-gray-300 z-10 relative">
        <div className="absolute top-2 right-2 z-30">
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            className="text-sm px-4 py-1.5rounded-md hover:bg-green-300 transition"
          >
            {copied ? <ClipboardCheck /> : <Clipboard className="" />}
          </Button>
        </div>
        <pre className="whitespace-pre-wrap break-words text-gray-800">
          {bibtex}
        </pre>
      </div>
    </div>
  );
}
