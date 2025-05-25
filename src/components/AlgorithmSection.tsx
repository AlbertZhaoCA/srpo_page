import Image from "next/image";
import SFTPipeline from "../../public/SFT_pipeline_crop-1.png";

export default function AlgorithmSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      <h2 className="text-4xl font-semibold mb-8 text-center">
        🧠 Algorithm Insight
      </h2>

      <div className="space-y-8 text-lg leading-relaxed text-justify">
        <p>
          <strong>SRPO</strong> (Self-Reflection enhanced Reasoning with Group
          Relative Policy Optimization) is a two-stage training framework
          designed to empower Multimodal Large Language Models (MLLMs) with
          explicit self-reflection and correction capabilities. The core idea is
          to train models not only to produce answers but also to evaluate and
          improve their own reasoning.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-2">
          🔧 Two-Stage Training Pipeline
        </h3>

        <h4 className="text-xl font-semibold">
          1. Stage I – Self-Reflection Supervised Fine-Tuning (SFT)
        </h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Reflection Data Construction:</strong> Each training sample
            includes <code>&lt;think&gt;</code>, <code>&lt;reflection&gt;</code>
            , and <code>&lt;answer&gt;</code> tags, enabling models to learn
            from both correct and flawed reasoning.
          </li>
          <li>
            <strong>Reflection Generation:</strong> A powerful MLLM (e.g.,
            GPT-o4-mini) is used to generate high-quality reflections by
            comparing initial model outputs with ground-truth answers.
          </li>
          <li>
            <strong>Goal:</strong> Inject reflective skills early by training
            the model to revise and improve its own responses.
          </li>
        </ul>

        <h4 className="text-xl font-semibold mt-6">
          2. Stage II – Reflection-Aware Reinforcement Learning
        </h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Based on GRPO:</strong> Group Relative Policy Optimization
            enables stable and efficient training using group-wise reward
            comparisons instead of a critic model.
          </li>
          <li>
            <strong>Custom Reward Design:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>
                  Task Reward (
                  <code>
                    R<sub>task</sub>
                  </code>
                  ):
                </strong>{" "}
                Rewards correctness and proper format (e.g., usage of{" "}
                <code>&lt;think&gt;</code> tags).
              </li>
              <li>
                <strong>
                  Reflection Reward (
                  <code>
                    R<sub>reflection</sub>
                  </code>
                  ):
                </strong>{" "}
                Encourages concise, useful, and accurate reflections via:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>
                    <strong>
                      <code>
                        I<sub>eff</sub>
                      </code>
                      :
                    </strong>{" "}
                    Extra reward for correcting mistakes or preserving
                    correctness.
                  </li>
                  <li>
                    <strong>
                      <code>
                        I<sub>ref</sub>
                      </code>
                      :
                    </strong>{" "}
                    Checks correct structure of reflection block.
                  </li>
                  <li>
                    <strong>
                      <code>
                        f<sub>len</sub>
                      </code>
                      :
                    </strong>{" "}
                    Smooth penalty for overly long reflections.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <figure className="my-8">
          <div className="flex justify-center">
            <Image
              src={SFTPipeline}
              alt="Pipeline of Self-Reflection SFT data construction"
              className="rounded-lg shadow-md w-full h-auto"
              width={800}
              height={500}
              placeholder="blur"
            />
          </div>
          <figcaption className="text-center text-sm text-gray-600 mt-3">
            <strong>Figure:</strong> Pipeline of Self-Reflection SFT data
            construction, including CoT and self-reflection generation.
          </figcaption>
        </figure>

        <h3 className="text-2xl font-semibold mt-10 mb-2">✅ Why It Works</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Beyond Imitation:</strong> Unlike traditional SFT which
            mimics correct reasoning, SRPO teaches how to diagnose and revise
            flawed thoughts.
          </li>
          <li>
            <strong>Generalization through Reflection:</strong> Reflection
            improves not just accuracy but also performance across unseen
            domains like physics, biology, and chart comprehension.
          </li>
          <li>
            <strong>Reward Safety:</strong> Prevents &quot;reward hacking&quot;
            by penalizing empty or verbose reflections.
          </li>
          <li>
            <strong>Stable & Efficient Learning:</strong> Faster convergence,
            longer and richer reasoning traces, and smoother policy updates
            compared to vanilla GRPO.
          </li>
        </ul>
      </div>
    </section>
  );
}
