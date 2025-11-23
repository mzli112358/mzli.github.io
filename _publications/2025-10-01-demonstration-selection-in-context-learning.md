---
title: "Demonstration Selection for In-Context Learning via Reinforcement Learning"
collection: publications
category: conferences
permalink: /publication/2025-10-01-demonstration-selection-in-context-learning
excerpt: 'This paper introduces RDES, a reinforcement learning-based approach to optimize demonstration selection for in-context learning, significantly improving performance on text classification and reasoning tasks.'
date: 2024-12-05
venue: 'arXiv preprint arXiv:2412.03966'
paperurl: 'https://arxiv.org/abs/2412.03966'
posterurl: 'https://icml.cc/virtual/2025/poster/43807'
citation: 'Xubin Wang, Jianfei Wu, Yichen Yuan, Deyu Cai, Mingzhe Li, Weijia Jia. (2024). &quot;Demonstration Selection for In-Context Learning via Reinforcement Learning.&quot; <i>arXiv preprint arXiv:2412.03966</i>.'
authors: 'Xubin Wang, Jianfei Wu, Yichen Yuan, Deyu Cai, Mingzhe Li, Weijia Jia'
---

**Authors:** Xubin Wang, Jianfei Wu, Yichen Yuan, Deyu Cai, Mingzhe Li, Weijia Jia

**Published:** December 5, 2024

**Journal:** arXiv preprint arXiv:2412.03966

[Download Paper]({{ page.paperurl }}){: .btn} | [View Poster]({{ page.posterurl }}){: .btn}

## Poster

<figure>
  <a href="{{ page.posterurl }}" target="_blank">
    <img src="/images/icml2025-poster-43807.png" alt="ICML 2025 Poster - Demonstration Selection for In-Context Learning via Reinforcement Learning" style="max-width: 100%; height: auto;">
  </a>
  <figcaption>Poster presented at ICML 2025. Click to view on ICML website.</figcaption>
</figure>

## Abstract

Diversity in demonstration selection is critical for enhancing model generalization by enabling broader coverage of structures and concepts. Constructing appropriate demonstration sets remains a key research challenge. This paper introduces the Relevance-Diversity Enhanced Selection (RDES), an innovative approach that leverages reinforcement learning (RL) frameworks to optimize the selection of diverse reference demonstrations for tasks amenable to in-context learning (ICL), particularly text classification and reasoning, in few-shot prompting scenarios.

<details>
<summary><strong>Show more</strong></summary>

RDES employs frameworks like Q-learning and a PPO-based variant to dynamically identify demonstrations that maximize both diversity (quantified by label distribution) and relevance to the task objective. This strategy ensures a balanced representation of reference data, leading to improved accuracy and generalization. Through extensive experiments on multiple benchmark datasets, including diverse reasoning tasks, and involving 14 closed-source and open-source LLMs, we demonstrate that RDES significantly enhances performance compared to ten established baselines. Our evaluation includes analysis of performance across varying numbers of demonstrations on selected datasets. Furthermore, we investigate incorporating Chain-of-Thought (CoT) reasoning, which further boosts predictive performance. The results highlight the potential of RL for adaptive demonstration selection and addressing challenges in ICL.

</details>
