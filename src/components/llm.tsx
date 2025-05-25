"use client";

import { useState, useEffect } from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";

type Props = {
  question: string;
  think: string;
  answer: string;
  critique?: string;
  groundTruth?: string;
  image?: string;
};

function renderWithMath(text: string) {
  const blockParts = text.split(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\])/g);

  return (
    <>
      {blockParts.map((blockPart, i) => {
        if (blockPart.startsWith("$$") && blockPart.endsWith("$$")) {
          const latex = blockPart.slice(2, -2).trim();
          return <BlockMath key={`block-${i}`}>{latex}</BlockMath>;
        } else if (blockPart.startsWith("\\[") && blockPart.endsWith("\\]")) {
          const latex = blockPart.slice(2, -2).trim();
          return <BlockMath key={`block-${i}`}>{latex}</BlockMath>;
        } else if (blockPart) {
          const inlineParts = blockPart.split(/(\\\([\s\S]*?\\\))/g);
          return (
            <React.Fragment key={`fragment-${i}`}>
              {inlineParts.map((inlinePart, j) => {
                if (
                  inlinePart.startsWith("\\(") &&
                  inlinePart.endsWith("\\)")
                ) {
                  const latex = inlinePart.slice(2, -2).trim();
                  return (
                    <InlineMath key={`inline-${i}-${j}`}>{latex}</InlineMath>
                  );
                } else {
                  return (
                    <span
                      key={`text-${i}-${j}`}
                      className="whitespace-pre-wrap"
                    >
                      {inlinePart}
                    </span>
                  );
                }
              })}
            </React.Fragment>
          );
        }
        return null;
      })}
    </>
  );
}

export default function FakeLLMInteraction({
  question,
  think,
  answer,
  critique,
  groundTruth,
  image,
}: Props) {
  const [showOutput, setShowOutput] = useState(false);
  const [thinkingText, setThinkingText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [step, setStep] = useState<"idle" | "thinking" | "answering" | "done">(
    "idle",
  );

  useEffect(() => {
    if (showOutput) {
      setThinkingText("");
      setAnswerText("");
      setStep("thinking");

      let thinkIndex = -1;
      const thinkInterval = setInterval(() => {
        if (thinkIndex < think.length - 1) {
          setThinkingText((prev) => prev + think[thinkIndex]);
          thinkIndex++;
        } else {
          clearInterval(thinkInterval);
          setStep("answering");
        }
      }, 1);

      return () => clearInterval(thinkInterval);
    }
  }, [showOutput, think]);

  useEffect(() => {
    if (step === "answering") {
      let answerIndex = -1;
      const answerInterval = setInterval(() => {
        if (answerIndex < answer.length - 1) {
          setAnswerText((prev) => prev + answer[answerIndex]);
          answerIndex++;
        } else {
          clearInterval(answerInterval);
          setStep("done");
        }
      }, 1);

      return () => clearInterval(answerInterval);
    }
  }, [step, answer]);

  return (
    <Card className="relative space-y-2 p-4">
      <CardHeader className="flex items-center justify-between">
        <span className="text-2xl font-bold">Data prepared for SFT</span>
        <Button
          variant="outline"
          size={"icon"}
          className="absolute top-2 right-2"
          onClick={() => setShowOutput(false)}
        >
          <IoIosClose className="text-gray-500 hover:text-gray-700" size={24} />
        </Button>
      </CardHeader>
      <CardContent className="p-0 space-y-4">
        <div className="bg-muted p-4 rounded-md border text-sm text-muted-foreground">
          <strong className="text-black text-2xl">Question:</strong>
          <div className="mt-1 space-y-2 text-xl md:text-2xl leading-relaxed">
            {renderWithMath(question)}
          </div>
          {image && (
            <div className="mt-2">
              <Image
                src={image}
                alt="User question"
                width={250}
                height={300}
                className="h-auto rounded-md"
              />
            </div>
          )}
        </div>

        {showOutput && (
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 font-mono text-sm text-gray-800">
              <div>{renderWithMath(thinkingText)}</div>
              {step === "thinking" && <span className="animate-pulse">▍</span>}
            </div>

            {step !== "thinking" && (
              <>
                <div
                  className={`p-4 rounded-md border font-mono text-sm ${
                    groundTruth
                      ? "bg-red-50 border-red-200 text-red-500"
                      : "bg-green-50 border-green-200 text-green-600"
                  }`}
                >
                  <div>{renderWithMath(answerText)}</div>
                  {step === "answering" && (
                    <span className="animate-pulse">▍</span>
                  )}
                </div>
                {step === "done" && critique && (
                  <div className="mt-2">
                    <div
                      className={`${groundTruth ? "text-red-500" : "text-green-500"} text-sm italic mb-2`}
                    >
                      ⚠️ {renderWithMath(critique)}
                    </div>
                    {groundTruth && (
                      <div className="bg-green-50 p-4 rounded-md border border-green-200 font-mono text-sm text-green-600 mt-2">
                        <div>{renderWithMath(groundTruth)}</div>
                      </div>
                    )}
                    {!groundTruth && (
                      <div className="bg-green-50 p-4 rounded-md border border-green-200 font-mono text-sm text-green-600 mt-2">
                        <div>{renderWithMath(answer)}</div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {!showOutput && (
          <Button variant={"secondary"} onClick={() => setShowOutput(true)}>
            Reflect
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
