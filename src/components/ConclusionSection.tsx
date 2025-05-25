export function ConclusionSection() {
  return (
    <section className="max-w-2xl md:max-w-4xl mb-20 text-center">
      <h3 className="text-4xl font-semibold mb-8">Conclusion</h3>
      <p className="text-gray-700 text-justify leading-relaxed text-lg">
        In this paper, we introduced SRPO, a reflection-aware reinforcement
        learning framework designed to enhance multimodal reasoning capabilities
        in mutlimodal large language models. By systematically generating
        high-quality reflection-focused training data and employing a novel
        reward mechanism that explicitly incentivizes concise and effective
        self-reflection, our method successfully addresses the limitations of
        previous approaches, including insufficient data quality and lack of
        self-reflective behavior for refining response. Comprehensive
        experiments across multiple multimodal reasoning benchmarks demonstrated
        the significant effectiveness of SRPO, surpassing existing
        state-of-the-art models in both reasoning accuracy and reflection
        quality. Our results highlight the critical role of reflection-driven
        training strategies for robust multimodal reasoning.
      </p>
    </section>
  );
}

export default ConclusionSection;
