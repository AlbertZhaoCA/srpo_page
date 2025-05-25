import Image from "next/image";

export function ExperimentSection() {
  return (
    <section className="max-w-3xl md:max-w-6xl mb-12 text-center">
      <h3 className="text-4xl font-semibold mb-8">Experiments</h3>
      <div className="flex flex-col items-center text-gray-700 text-justify leading-relaxed text-lg space-y-5">
        <p>
          We evaluate SRPO across multiple benchmarks, including MathVista,
          MathVerse, MathVision, OlympiadBench, MMMU-Pro, EMMA, and MMK12. We
          compare our models (SRPO-7B and SRPO-32B) against both closed-source
          models (e.g., GPT-4o, Claude3.7, Gemini2) and open-source MLLMs (e.g.,
          Qwen-2.5-VL, MM-Eureka, OpenVLThinker).
        </p>
        <p>
          Results demonstrate that SRPO consistently outperforms prior methods,
          particularly on reflection-critical benchmarks. For example, SRPO-7B
          outperforms VL-Rethinker-7B and MM-Eureka-7B in MathVista and
          MathVerse, and SRPO-32B surpasses Gemini2-flash in EMMA.
        </p>

        <p>
          As illustrated in Figure 1, after two-stage training, SRPO enables
          MLLMs to autonomously generate reflective reasoning, effectively
          refine intermediate thinking steps, and consequently achieve improved
          reasoning performance across various benchmarks compared to the GRPO.
        </p>

        <p>
          Figure 1 and Figure 2 show quantitative comparisons with existing
          methods. Figure 3 illustrates the distribution of our
          reflection-oriented dataset across multiple reasoning categories. To
          further understand how SRPO improves during training, Figures 4–9
          track dynamic trends including accuracy, reward signals, policy loss,
          and response lengths. These curves demonstrate that SRPO stabilizes
          faster, maintains better reflection-to-reasoning balance, and reduces
          variance in output length.
        </p>

        <figure className="my-8">
          <Image
            src="/srpo_grpo_qwen_comparison.png"
            alt="SRPO vs GRPO vs Qwen-2.5-VL on multiple benchmarks"
            className="rounded-lg shadow-md"
            width={800}
            height={480}
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            <strong>Figure 1:</strong> SRPO outperforms GRPO and base Qwen
            across MathVista, MathVerse, and MMMU-Pro.
          </figcaption>
        </figure>

        <figure className="my-8">
          <Image
            src="/table0.png"
            alt="Comparison table of open/closed source models across benchmarks"
            className="rounded-lg shadow-md"
            width={800}
            height={560}
          />
          <figcaption className="text-center text-sm text-gray-600 mt-2">
            <strong>Figure 2:</strong> Comparison of SRPO with state-of-the-art
            closed-source and open-source models on math/general benchmarks.
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <figure>
            <Image
              src="/dynamic_figures/Y_acc_reward.png"
              alt="Accuracy and reward over training steps"
              className="rounded-lg shadow-md"
              width={500}
              height={320}
            />
            <figcaption className="text-sm text-gray-600 mt-1 text-center">
              <strong>Figure 4:</strong> Accuracy & reward over training steps.
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/dynamic_figures/Y_policy_loss.png"
              alt="Policy loss during training"
              className="rounded-lg shadow-md"
              width={500}
              height={320}
            />
            <figcaption className="text-sm text-gray-600 mt-1 text-center">
              <strong>Figure 5:</strong> Policy loss trend of SRPO.
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/dynamic_figures/Y_correct_response_len.png"
              alt="Correct response length over time"
              className="rounded-lg shadow-md"
              width={500}
              height={320}
            />
            <figcaption className="text-sm text-gray-600 mt-1 text-center">
              <strong>Figure 6:</strong> Length of correct responses.
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/dynamic_figures/Y_wrong_response_len.png"
              alt="Wrong response length over time"
              className="rounded-lg shadow-md"
              width={500}
              height={320}
            />
            <figcaption className="text-sm text-gray-600 mt-1 text-center">
              <strong>Figure 7:</strong> Length of incorrect responses.
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/dynamic_figures/Y_total_len.png"
              alt="Total length of generated responses"
              className="rounded-lg shadow-md"
              width={500}
              height={320}
            />
            <figcaption className="text-sm text-gray-600 mt-1 text-center">
              <strong>Figure 8:</strong> Total response length during training.
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/dynamic_figures/Y_ratio_clip_new.png"
              alt="Ratio of clipped gradients"
              className="rounded-lg shadow-md"
              width={500}
              height={320}
            />
            <figcaption className="text-sm text-gray-600 mt-1 text-center">
              <strong>Figure 9:</strong> Ratio of clipped gradients.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default ExperimentSection;
