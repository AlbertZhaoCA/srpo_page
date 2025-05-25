"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import FakeLLMInteraction from "./llm";

type Interaction = {
  question: string;
  think: string;
  answer: string;
  critique?: string;
};

type Props = {
  items: Interaction[];
};

export default function FakeLLMStack({ items }: Props) {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0); // key for triggering animation

  const showNext = () => {
    if (visibleIndex < items.length - 1) {
      setVisibleIndex((prev) => prev + 1);
      setFadeKey((prev) => prev + 1);
    }
  };

  const showPrevious = () => {
    if (visibleIndex > 0) {
      setVisibleIndex((prev) => prev - 1);
      setFadeKey((prev) => prev + 1);
    }
  };

  const currentItem = items[visibleIndex];

  return (
    <div className="space-y-6 w-full">
      <div
        key={fadeKey}
        className="transition-opacity duration-500 ease-in-out animate-fade-in w-full"
      >
        <FakeLLMInteraction {...currentItem} />
      </div>

      <div className="flex justify-between">
        <Button
          variant="secondary"
          onClick={showPrevious}
          disabled={visibleIndex === 0}
        >
          See previous
        </Button>

        <Button
          variant="secondary"
          onClick={showNext}
          disabled={visibleIndex === items.length - 1}
        >
          See next
        </Button>
      </div>
    </div>
  );
}
