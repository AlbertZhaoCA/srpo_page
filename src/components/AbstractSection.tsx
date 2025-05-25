export function AbstractSection() {
  return (
    <section className="max-w-2xl md:max-w-4xl mb-12 text-center">
      <h3 className="text-4xl font-semibold mb-8">Abstract</h3>
      <p className="text-gray-700 text-justify leading-relaxed text-lg">
        Multimodal large language models (MLLMs) have shown promising
        capabilities in reasoning tasks, yet still struggle significantly with
        complex problems requiring explicit self-reflection and self-correction,
        especially compared to their unimodal text-based counterparts. Existing
        reflection methods are simplistic and struggle to generate meaningful,
        instructive feedback, as the reasoning ability and knowledge limits of
        pre-trained models are largely fixed during initial training. To
        overcome these challenges, we propose multimodal <strong>S</strong>elf-
        <strong>R</strong>eflection enhanced reasoning with Group Relative{" "}
        <strong>P</strong>olicy <strong>O</strong>ptimization{" "}
        <strong>SRPO</strong>, a two-stage reflection-aware reinforcement
        learning (RL) framework explicitly designed to enhance multimodal LLM
        reasoning. In the first stage, we construct a high-quality,
        reflection-focused dataset under the guidance of an advanced MLLM, which
        generates reflections based on initial responses to help the policy
        model to learn both reasoning and self-reflection. In the second stage,
        we introduce a novel reward mechanism within the GRPO framework that
        encourages concise and cognitively meaningful reflection while avoiding
        redundancy. Extensive experiments across multiple multimodal reasoning
        benchmarks—including MathVista, MathVision, Mathverse, and
        MMMU-Pro—using Qwen-2.5-VL-7B and Qwen-2.5-VL-32B demonstrate that SRPO
        significantly outperforms state-of-the-art models, achieving notable
        improvements in both reasoning accuracy and reflection quality.
      </p>
    </section>
  );
}

export default AbstractSection;
