export function MethodSection() {
  return (
    <section className="max-w-3xl md:max-w-5xl mb-12 text-center">
      <h3 className="text-4xl font-semibold mb-4">Method</h3>
      <div className="text-gray-700 text-justify leading-relaxed text-lg space-y-5">
        <p>
          We present SRPO: Self-Reflection enhanced reasoning with Group
          Relative Policy Optimization, a two-stage training framework for
          improving multimodal reasoning. The two stages are:
        </p>
        <ul className="list-disc list-inside text-left ml-4">
          <li>
            <strong>
              Stage 1: Reflection-oriented Cold-start Initialization (SFT)
            </strong>
          </li>
          <li>
            <strong>
              Stage 2: Reflection-aware Reinforcement Learning (RL)
            </strong>
          </li>
        </ul>

        <h4 className="text-2xl font-semibold mt-6">
          Reflection-oriented Cold-start Initialization
        </h4>
        <p>
          To address local dependency and poor coherence in MLLM reasoning, we
          construct a high-quality dataset by sampling 10,000 instances from
          datasets like LLaVA-CoT, Mulberry, and MathV360K. For each sample, we
          generate an initial reasoning response, then produce a self-reflection
          using a stronger MLLM (e.g., GPT-o4-mini) based on the discrepancy
          between the initial output and ground truth. The result is a dataset
          where each instance includes the initial response, the reflection, and
          the correct answer.
        </p>

        <h4 className="text-2xl font-semibold mt-6">
          Reflection-aware Reinforcement Learning
        </h4>
        <p>
          During RL training, we optimize the policy with an enhanced Group
          Relative Policy Optimization (GRPO) framework. Our method introduces a
          novel reward function:
        </p>
        <ul className="list-disc list-inside text-left ml-4">
          <li>
            <strong>Task reward:</strong> Encourages accurate answers and proper
            format (e.g., use of &lt;think&gt; tags).
          </li>
          <li>
            <strong>Reflection reward:</strong> Measures formatting, brevity,
            and effectiveness of the reflection step.
          </li>
        </ul>
        <p>
          The total reward encourages correct answers and concise, useful
          reflection. It penalizes irrelevant or misleading reflections. Our
          reward design improves sample efficiency and suppresses reward
          hacking.
        </p>
      </div>
    </section>
  );
}

export default MethodSection;
