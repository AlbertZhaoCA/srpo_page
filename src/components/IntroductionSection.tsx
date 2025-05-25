"use client";

import { useEffect, useRef, useState } from "react";
import FakeLLMStack from "./llm-stack";

const interactions = [
  {
    question: `As shown in the figure, the radius of circle O is 5, and acute triangle ABC is inscribed in circle O. BD is perpendicular to AC at point D, and AB = 8. What is the value of tan∠CBD?  
A. \\(\\frac{4}{3}\\),  B. \\(\\frac{4}{5}\\), C. \\(\\frac{3}{5}\\),  D. \\(\\frac{3}{4}\\) `,
    think: `To solve for \\(\\tan \\angle CBD\\), we need to use the properties of the circle and the given information about the triangle.\n\n1. Since \\(BD\\) is perpendicular to \\(AC\\) at \\(D\\), \\(\\angle BDC = 90^\\circ\\).\n2. Triangle \\(ABC\\) is inscribed in circle \\(O\\), so \\(\\angle BDC = \\angle BAC\\) because they subtend the same arc \\(BC\\).\n3. We know that \\(\\angle BAC\\) is part of the right triangle \\(ABD\\) where \\(AB = 8\\) and \\(BD\\) is the altitude from \\(B\\) to \\(AC\\).\n\nUsing the Pythagorean theorem in \\(\\triangle ABD\\):\n\\[ AB^2 = AD^2 + BD^2 \\]\n\\[ 8^2 = AD^2 + BD^2 \\]\n\\[ 64 = AD^2 + BD^2 \\]\n\nSince \\(BD\\) is the altitude, it splits \\(\\triangle ABC\\) into two right triangles, \\(\\triangle ABD\\) and \\(\\triangle BCD\\). We need to find the length of \\(BD\\) and \\(AD\\).\n\nLet's denote \\(AD = x\\) and \\(DC = y\\). Then \\(AC = x + y\\).\n\nUsing the fact that \\(\\angle BDC = 90^\\circ\\), we can use the tangent function in \\(\\triangle BCD\\):\n\\[ \\tan \\angle CBD = \\frac{BD}{DC} = \\frac{BD}{y} \\]\n\nWe need to find the relationship between \\(BD\\) and \\(y\\). From the circle properties and the fact that \\(BD\\) is the altitude, we can use the power of a point theorem or the fact that the area of the triangle can be expressed in terms of the sides and the altitude.\n\nThe area of \\(\\triangle ABC\\) can also be expressed as:\n\\[ \\text{Area} = \\frac{1}{2} \\times AC \\times BD = \\frac{1}{2} \\times (x + y) \\times BD \\]\n\nAnd using the formula for the area involving the circumradius \\(R\\):\n\\[ \\text{Area} = \\frac{abc}{4R} \\]\nwhere \\(a = BC\\), \\(b = CA\\), \\(c = AB = 8\\), and \\(R = 5\\).\n\nHowever, a simpler approach is to use the fact that the altitude splits the triangle into two similar triangles and the tangent function directly.\n\nGiven the options, we can test the values:\nIf \\(\\tan \\angle CBD = \\frac{3}{4}\\), then \\(BD = 3k\\) and \\(DC = 4k\\) for some \\(k\\).\n\nChecking the Pythagorean theorem:\n\\[ 64 = AD^2 + BD^2 = x^2 + (3k)^2 \\]\n\\[ 64 = x^2 + 9k^2 \\]\n\nAnd since \\(x + y = AC\\), and using the fact that the triangle is inscribed and the radius is 5, we can deduce that the correct ratio fits the options.\n\nThus, the correct value is \\(\\frac{3}{4}\\)`,
    answer: `The correct answer is A`,
    groundTruth: `The correct answer is D`,
    critique:
      'The original chain‐of‐thought has several weaknesses and gaps in reasoning. First, it makes an incorrect or unclear association between angles in the triangle and angles in the circle. For example, it states that ∠BDC equals ∠BAC because they subtend the same arc, an assertion that is not generally true without a proper explanation or proof. Next, the CoT invokes the Pythagorean theorem on triangle ABD without clearly establishing how the lengths AD and BD relate to the known quantities, nor does it justify the assignment of variables or the relationship between different segments of the triangle. The reasoning about splitting the triangle into two right triangles is introduced but not fully developed to connect the altitude BD to the tangent of ∠CBD, leaving an important part of the problem unresolved. This results in an unclear path from the given information to the conclusion regarding tan∠CBD. \n\nTo improve the reasoning, the following suggestions can be made:\n1. Clarify which angles and triangles are being considered and explicitly state the known relationships from circle geometry (e.g., the inscribed angle theorem) with proper justification.\n2. Clearly define all variables (such as AD, DC, and BD) and relate them using known properties and theorems such as similar triangles or the Power of a Point if applicable.\n3. Rather than merely testing the multiple-choice options by substituting assumed ratios, develop a systematic derivation that directly expresses tan∠CBD in terms of the known quantities. In doing so, show explicitly how the properties of the inscribed triangle, circle radius, and altitude lead to the ratio, ensuring each step is logically sound.\n4. Finally, ensure that the final step links back to the tangent definition correctly: that tan∠CBD is the ratio of the side opposite that angle to the side adjacent, with both segments accurately identified from the diagram.\n\nOverall, a more rigorous derivation with clear statements of the geometric properties used would significantly strengthen the chain‐of‐thought. This would remove ambiguity and ensure consistency in the logical flow that leads to the correct answer of 3/4."',
    image: "demo0.png",
  },
  {
    question: `In the provided diagram, there is a ladder with a length of 2.5 units. One end of the ladder is positioned 1.5 units away from the corner of the wall, while the other end rests against the wall. What is the distance between the top of the ladder and the corner of the wall?
Choices: A: 0.2 m, B: 0.4 m, C: 2 m, D: 4 m`,
    think: `The problem involves a right triangle where the ladder acts as the hypotenuse. We can use the Pythagorean theorem to find the height of the ladder on the wall. The theorem states that for a right triangle, the square of the hypotenuse (c) is equal to the sum of the squares of the other two sides (a and b). 
In this case, c = 2.5 units, and one side a = 1.5 units. We need to find the other side b, which represents the distance from the top of the ladder to the corner of the wall.
The formula is: \\( c^2 = a^2 + b^2 \\).
Rearranging to solve for b: \\( b = \\sqrt{c^2 - a^2} \\).
Substituting the known values: \\( b = \\sqrt{(2.5)^2 - (1.5)^2} \\).
Calculating inside the square root: \\( b = \\sqrt{6.25 - 2.25} \\).
Simplifying further: \\( b = \\sqrt{4} \\).
So, \\( b = 2 \\) units.
Therefore, the distance between the top of the ladder and the corner of the wall is 2 units.,
`,
    critique: `The original chain-of-thought is essentially correct, but there are areas where the reasoning process can be refined. First, it would help to clarify the assignment of the sides of the triangle: explicitly confirm that the 1.5-unit distance is the base of the triangle (adjacent to the wall), and that the ladder (2.5 units) is the hypotenuse. Second, the explanation could include mentioning that the unknown distance (2 units) is actually the height at which the ladder meets the wall and thus is the answer. Adding a sentence on why solving for b (in this case, representing the vertical distance from the top of the ladder to the floor or the corner of the wall if the floor and wall meet at a right angle) reinforces understanding. Lastly, while the arithmetic and substitution are correct, the chain-of-thought might benefit from a brief discussion of the validity of using the Pythagorean theorem given the right angle between the wall and the floor. This additional step ensures that the diagram’s interpretation is not taken for granted. Overall, making these clarifications would improve the logic and robustness of the reasoning.`,
    answer: "C",
    image: "demo1.png",
  },
];

import Image from "next/image";
import Example0 from "../../public/new_sample1_crop.png";
import Example1 from "../../public/New_sample_2_crop.png";
import Example3 from "../../public/Motivation_crop.png";

export function IntroductionSection() {
  const [activated, setActivated] = useState(false);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        activated &&
        rightRef.current &&
        !rightRef.current.contains(e.target as Node)
      ) {
        setActivated(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activated]);

  return (
    <section className="max-w-6xl mb-12 mx-auto">
      <h3 className="text-4xl font-semibold mb-8 text-center">
        Reflection Examples
      </h3>
      <div className="transition-all duration-1000 text-gray-700 items-center grid grid-cols-1 md:grid-cols-8 gap-4 text-justify leading-relaxed text-lg">
        <div
          className={`mx-auto transition-all duration-700 ease-in-out ${
            activated ? "col-span-1 md:col-span-8" : "md:col-span-4"
          } flex justify-center`}
          ref={rightRef}
          onClick={() => setActivated(true)}
        >
          <FakeLLMStack items={interactions} />
        </div>

        <div
          className={`md:col-span-4 col-span-1 flex flex-col justify-around transition-all duration-700 ease-in-out overflow-hidden ${
            activated
              ? "opacity-0 max-h-0 scale-95 pointer-events-none"
              : "opacity-100 max-h-[1000px] scale-100"
          }`}
        >
          <figure className="my-8 space-y-8">
            <div className="flex justify-center">
              <Image
                src={Example0}
                alt="Reflection-based correction example 1"
                className="rounded-lg shadow-md"
                width={512}
                height={512}
                placeholder="blur"
              />
            </div>
            <figcaption className="text-center text-sm text-gray-600">
              <strong>Figure:</strong> Generated samples in RL training
            </figcaption>

            <div className="flex justify-center">
              <Image
                src={Example1}
                alt="Reflection-based correction example 2"
                className="rounded-lg shadow-md"
                width={512}
                height={512}
                placeholder="blur"
              />
            </div>
            <figcaption className="text-center text-sm text-gray-600">
              <strong>Figure:</strong> Generated samples in real test case
            </figcaption>
          </figure>
        </div>

        <figure className="col-span-1 md:col-span-8 my-8 space-y-8">
          <div className="flex justify-center">
            <Image
              src={Example3}
              alt="Reflection-based correction example 1"
              className="rounded-lg shadow-md w-full h-auto"
              width={512}
              height={512}
              placeholder="blur"
            />
          </div>
          <figcaption className="text-center text-sm text-gray-600">
            <strong>Figure:</strong> Examples of reflection improving reasoning
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default IntroductionSection;
