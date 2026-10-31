export type Publication = {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  topic: string;
  /** Verbatim author abstract from the published version, with PDF extraction artifacts normalized. */
  abstract: string;
  abstractSource: string;
  award?: string;
  figure: {
    src: string;
    alt: string;
    source: string;
    caption: string;
    width: number;
    height: number;
  };
  links: {
    label: string;
    detail: string;
    href: string;
    kind: 'paper' | 'code' | 'project';
  }[];
  bibtex: string;
};

// Publication metadata checked against ACL Anthology, COLM proceedings,
// arXiv, and Springer. Run npm run generate:bib after changing these entries.
export const publications: Publication[] = [
  {
    id: 'pac',
    figure: {"src": "/papers/pac.png", "alt": "PAC framework: Thompson sampling allocates task rollouts, GRPO trains the policy, and progress-aware utility updates task posteriors.", "source": "https://github.com/metaqiang/pac-curricula/blob/main/assets/main.png", "width": 1000, "height": 563, "caption": "Figure 1 · PAC framework: Thompson sampling allocates task rollouts, GRPO trains the policy, and progress-aware utility updates task posteriors."},
    title: 'PAC: Progress-Augmented Advantage Curriculum for Multi-Task Reinforcement Learning of LLMs',
    authors: 'Yuanqiang Yu, Yanzhao Zheng, Zhentao Zhang, Tianze Xu, Chao Ma, Jihuai Zhu, Jiashun Liu, Xinle Deng, Baohua Dong, Hangcheng Zhu, and Ruohui Huang',
    year: 2026,
    venue: 'EMNLP 2026',
    topic: 'Post-training',
    abstract: 'Reinforcement learning (RL) is used to improve the reasoning abilities of LLMs, while training data span heterogeneous tasks. However, most RL post-training pipelines rely on fixed or manually designed task mixtures, even though task usefulness changes as training progresses. Online curriculum methods often define learnability by update magnitude, ignoring whether the update translates into reward gains, which can misallocate rollout budget toward tasks with large but ineffective updates. We propose PAC, a Progress-Augmented Advantage Curriculum for multi-task RL of LLMs that combines two task-level signals: advantage-derived learnability, which measures the magnitude of the policy update a task can induce, and recent reward gains, which show whether those updates have improved task performance. A Bayesian Thompson Sampling controller uses these signals to allocate rollouts across tasks during GRPO training. We evaluate PAC under two settings: a multi-level reasoning setting and a multi-domain reasoning setting. PAC improves sample efficiency and final performance: it reaches comparable validation scores with fewer rollout steps and achieves higher final averages than random sampling and advantage-based curriculum baselines in both settings. These results show that jointly tracking advantage signals and actual reward gains yields an effective online curriculum for LLM post-training.',
    abstractSource: 'https://aclanthology.org/2026.emnlp-main.1127.pdf',
    links: [
      { label: 'ACL', detail: 'Paper', href: 'https://aclanthology.org/2026.emnlp-main.1127/', kind: 'paper' },
      { label: 'arXiv', detail: '2608.30528', href: 'https://arxiv.org/abs/2608.30528', kind: 'paper' },
      { label: 'GitHub', detail: 'Code', href: 'https://github.com/metaqiang/pac-curricula', kind: 'code' },
    ],
    bibtex: `@inproceedings{yu-etal-2026-pac,
  title = {{PAC}: Progress-Augmented Advantage Curriculum for Multi-Task Reinforcement Learning of {LLM}s},
  author = {Yu, Yuanqiang and Zheng, Yanzhao and Zhang, Zhentao and Xu, Tianze and Ma, Chao and Zhu, Jihuai and Liu, Jiashun and Deng, Xinle and Dong, Baohua and Zhu, Hangcheng and Huang, Ruohui},
  booktitle = {Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing},
  year = {2026},
  month = oct,
  address = {Budapest, Hungary},
  publisher = {Association for Computational Linguistics},
  pages = {25825--25843},
  doi = {10.18653/2026.emnlp-main.1127},
  url = {https://aclanthology.org/2026.emnlp-main.1127/}
}`,
  },
  {
    id: 'counterfactual',
    figure: {"src": "/papers/counterfactual.png", "alt": "CC-OPD pipeline: a frozen teacher scores the same student response under full and leave-one-out constraints, producing token-level rewards for a student-only PPO update.", "source": "https://aclanthology.org/2026.emnlp-main.1037.pdf", "width": 1000, "height": 631, "caption": "Figure 2 · CC-OPD pipeline: a frozen teacher scores the same student response under full and leave-one-out constraints, producing token-level rewards for a student-only PPO update."},
    title: 'Counterfactual Constraint-Conditioned On-Policy Distillation for Multi-Constraint Instruction Following',
    authors: 'Yanzhao Zheng, Yuanqiang Yu, Tianze Xu, Chao Ma, Zhentao Zhang, Jihuai Zhu, Baohua Dong, Hangcheng Zhu, and Ruohui Huang',
    year: 2026,
    venue: 'EMNLP 2026',
    topic: 'Post-training',
    abstract: 'Multi-constraint instruction following requires a model to respond to a query under many simultaneously active constraints. Even strong instruction-tuned models still routinely violate some of them. Existing approaches either augment supervision with sequence- or token-level RL rewards from external verifiers or learned graders, or use on-policy distillation (OPD) against a single full-context teacher whose probability mass becomes diluted as more constraints become simultaneously active. We propose CC-OPD (Counterfactual Constraint-Conditioned On-Policy Distillation), which inverts the standard supervision-generation direction in distillation. Rather than enriching the teacher with information beyond what the student sees, CC-OPD ablates each constraint from the teacher’s conditioning in turn, and constructs the per-constraint signal from the resulting per-token probability differentials. The resulting per-token leave-one-out log-likelihood shifts are summed, clipped, and added to the vanilla OPD reward as a token-level shaping term. All shaping terms are obtained from the frozen teacher, without an external verifier during distillation, and the reward equals vanilla OPD wherever the aggregate shift is zero. Across two Qwen model pairs and seven benchmarks, CC-OPD achieves the highest average among all evaluated student-training methods. A 1.5B student trained with CC-OPD surpasses its own 7B RL-trained teacher on the MulDimIF benchmark.',
    abstractSource: 'https://aclanthology.org/2026.emnlp-main.1037.pdf',
    award: 'Outstanding Paper',
    links: [
      { label: 'ACL', detail: 'Paper', href: 'https://aclanthology.org/2026.emnlp-main.1037/', kind: 'paper' },
      { label: 'arXiv', detail: '2609.27421', href: 'https://arxiv.org/abs/2609.27421', kind: 'paper' },
    ],
    bibtex: `@inproceedings{zheng-etal-2026-counterfactual,
  title = {Counterfactual Constraint-Conditioned On-Policy Distillation for Multi-Constraint Instruction Following},
  author = {Zheng, Yanzhao and Yu, Yuanqiang and Xu, Tianze and Ma, Chao and Zhang, Zhentao and Zhu, Jihuai and Dong, Baohua and Zhu, Hangcheng and Huang, Ruohui},
  booktitle = {Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing},
  year = {2026},
  month = oct,
  address = {Budapest, Hungary},
  publisher = {Association for Computational Linguistics},
  pages = {23799--23827},
  doi = {10.18653/2026.emnlp-main.1037},
  url = {https://aclanthology.org/2026.emnlp-main.1037/}
}`,
  },
  {
    id: 'skillrouter',
    figure: {"src": "/papers/skillrouter.png", "alt": "SkillRouter training and inference pipeline with a bi-encoder retriever, cross-encoder reranker, and selected skills passed to an LLM agent.", "source": "https://github.com/zhengyanzhao1997/SkillRouter/blob/main/assets/readme/pipeline.png", "width": 960, "height": 540, "caption": "Figure 2 · SkillRouter training and inference pipeline with a bi-encoder retriever, cross-encoder reranker, and selected skills passed to an LLM agent."},
    title: 'SkillRouter: Skill Routing for LLM Agents at Scale',
    authors: 'Yanzhao Zheng, Zhentao Zhang, Chao Ma, Yuanqiang Yu, Jihuai Zhu, Yong Wu, Tianze Xu, Baohua Dong, Hangcheng Zhu, Ruohui Huang, and Gang Yu',
    year: 2026,
    venue: 'COLM 2026',
    topic: 'Agent systems',
    abstract: 'Reusable skills let LLM agents package task-specific procedures, tool affordances, and execution guidance into modular building blocks. As skill ecosystems grow to tens of thousands of entries, exposing every skill at inference time becomes infeasible. This creates a skill-routing problem: given a user task, the system must identify relevant skills before downstream planning or execution. Existing agent stacks often rely on progressive disclosure, exposing only skill names and descriptions while hiding the full implementation body. We examine this design choice on a SkillsBench-derived benchmark with approximately 80K candidate skills, targeting the practically important setting of large skill registries with heavy overlap. Across representative dense and reranking baselines on this setting, hiding the skill body causes a 37–44 percentage point drop in routing accuracy. Stronger controls show that the missing signal is body-resident rather than a simple length artifact: body-distilled descriptions recover part of the gap, but remain 7–21 points below direct all-field routing, while a metadata-only encoder trained with the same data remains 14.0 points below its all-field counterpart. Motivated by this finding, we present SKILLROUTER, a compact 1.2B body-aware retrieve-and-rerank pipeline. SKILLROUTER achieves 74.0% Hit@1 on our benchmark—the strongest average top-1 routing performance among the baselines we evaluate—while using 13× fewer parameters and running 5.8× faster than the strongest base pipeline. The ranking gains further generalize to a supplementary benchmark independently constructed from three skill sources. In a complementary end-to-end study across four coding agents, routing gains transfer to improved task success, with larger gains for more capable agents.',
    abstractSource: 'https://proceedings.colm.cc/paper_files/paper/2026/file/7eca17ef54789b0663cab421f2e9dbf5-Paper-Conference.pdf',
    links: [
      { label: 'arXiv', detail: '2603.22455', href: 'https://arxiv.org/abs/2603.22455', kind: 'paper' },
      { label: 'GitHub', detail: 'Code', href: 'https://github.com/zhengyanzhao1997/SkillRouter', kind: 'code' },
    ],
    bibtex: `@inproceedings{zheng2026skillrouter,
  title = {{SkillRouter}: Skill Routing for {LLM} Agents at Scale},
  author = {Zheng, Yanzhao and Zhang, Zhentao and Ma, Chao and Yu, Yuanqiang and Zhu, Jihuai and Wu, Yong and Xu, Tianze and Dong, Baohua and Zhu, Hangcheng and Huang, Ruohui and Yu, Gang},
  booktitle = {Conference on Language Modeling},
  year = {2026},
  eprint = {2603.22455},
  archivePrefix = {arXiv},
  primaryClass = {cs.LG},
  url = {https://proceedings.colm.cc/paper_files/paper/2026/hash/7eca17ef54789b0663cab421f2e9dbf5-Abstract-Conference.html}
}`,
  },
  {
    id: 'contextbudget',
    figure: {"src": "/papers/contextbudget.png", "alt": "ContextBudget framework with budget-conditioned observation loading, adaptive history compression, and reinforcement learning under a tightening context budget.", "source": "https://github.com/yw-0311/ContextBudget/blob/main/pic/pipeline.png", "width": 1000, "height": 565, "caption": "Figure 1 · ContextBudget framework with budget-conditioned observation loading, adaptive history compression, and reinforcement learning under a tightening context budget."},
    title: 'ContextBudget: Budget-Aware Context Management for Long-Horizon Search Agents',
    authors: 'Yong Wu, Yanzhao Zheng, Tianze Xu, Zhentao Zhang, Yuanqiang Yu, Jihuai Zhu, Chao Ma, Binbin Lin, Baohua Dong, Hangcheng Zhu, Ruohui Huang, and Gang Yu',
    year: 2026,
    venue: 'COLM 2026',
    topic: 'Agent systems',
    abstract: 'LLM-based agents show strong potential for long-horizon reasoning, yet their context size is limited by deployment factors (e.g., memory, latency, and cost), yielding a constrained context budget. As interaction histories grow, this induces a trade-off between retaining past information and staying within the context limit. To address this challenge, we propose Budget-Aware Context Management (BACM), which formulates context management as a sequential decision problem with a context budget constraint. It enables agents to assess the available budget before incorporating new observations and decide when and how much of the interaction history to compress. We further develop BACM-RL, an end-to-end curriculum-based reinforcement learning approach that learns compression strategies under varying context budgets. Experiments on compositional multi-objective QA and long-horizon web browsing benchmarks show that BACM-RL consistently outperforms prior methods across model scales and task complexities, achieving over 1.6× gains over strong baselines in high-complexity settings, while maintaining strong advantages as budgets shrink, where most methods exhibit a downward performance trend.',
    abstractSource: 'https://proceedings.colm.cc/paper_files/paper/2026/file/f1320d2e2842169c6fc89dcbd80e94d0-Paper-Conference.pdf',
    links: [
      { label: 'arXiv', detail: '2604.01664', href: 'https://arxiv.org/abs/2604.01664', kind: 'paper' },
      { label: 'GitHub', detail: 'Code', href: 'https://github.com/yw-0311/ContextBudget', kind: 'code' },
    ],
    bibtex: `@inproceedings{wu2026contextbudget,
  title = {{ContextBudget}: Budget-Aware Context Management for Long-Horizon Search Agents},
  author = {Wu, Yong and Zheng, Yanzhao and Xu, Tianze and Zhang, Zhentao and Yu, Yuanqiang and Zhu, Jihuai and Ma, Chao and Lin, Binbin and Dong, Baohua and Zhu, Hangcheng and Huang, Ruohui and Yu, Gang},
  booktitle = {Conference on Language Modeling},
  year = {2026},
  eprint = {2604.01664},
  archivePrefix = {arXiv},
  primaryClass = {cs.AI},
  url = {https://arxiv.org/abs/2604.01664}
}`,
  },
  {
    id: 'rubrics-to-tokens',
    figure: {"src": "/papers/rubrics-to-tokens.png", "alt": "Rubrics to Tokens architecture combines response-level advantages with token-level rubric rewards and normalized token advantages to update the policy.", "source": "https://github.com/TURLEing/Rubrics-To-Tokens/blob/main/assets/overview.png", "width": 1000, "height": 375, "caption": "Figure 1 · Rubrics to Tokens architecture combines response-level advantages with token-level rubric rewards and normalized token advantages to update the policy."},
    title: 'Rubrics to Tokens: Bridging Response-level Rubrics and Token-level Rewards in Instruction Following Tasks',
    authors: 'Tianze Xu, Yanzhao Zheng, Pengrui Lu, Lyumanshan Ye, Yong Wu, Zhentao Zhang, Yuanqiang Yu, Chao Ma, Jihuai Zhu, Pengfei Liu, Baohua Dong, Hangcheng Zhu, Ruohui Huang, and Gang Yu',
    year: 2026,
    venue: 'COLM 2026',
    topic: 'Post-training',
    abstract: 'Rubric-based Reinforcement Learning (RL) has emerged as a promising approach for aligning Large Language Models (LLMs) with complex, open-domain instruction following tasks. However, existing methods predominantly rely on response-level rewards, introducing severe reward sparsity and reward ambiguity problems. To address these issues, we propose Rubrics to Tokens (RTT), a novel rubric-based RL framework that bridges coarse response-level scores and fine-grained token-level credit assignment. RTT introduces a Token-Level Relevance Discriminator to predict which tokens in the response are responsible for a specific constraint, and optimizes the policy model via RTT-GRPO, which integrates response-level and token-level advantages within a unified framework. Furthermore, we identify the Group Partitioning Problem when transitioning from one-dimensional, outcome-level reward to three-dimensional reward space in the token-level rubric-based RL, and propose a novel group normalization method, called Intra-sample Token Group Normalization, to accommodate this shift. Extensive experiments demonstrate that RTT consistently outperforms all baselines in both instruction-level and rubric-level accuracy across different models. We open-source our RTT framework to facilitate future research: https://github.com/TURLEing/Rubrics-To-Tokens.',
    abstractSource: 'https://proceedings.colm.cc/paper_files/paper/2026/file/ae0509bfd3e0c2414164209949708e4e-Paper-Conference.pdf',
    links: [
      { label: 'arXiv', detail: '2604.02795', href: 'https://arxiv.org/abs/2604.02795', kind: 'paper' },
      { label: 'GitHub', detail: 'Code', href: 'https://github.com/TURLEing/Rubrics-To-Tokens', kind: 'code' },
    ],
    bibtex: `@inproceedings{xu2026rubrics,
  title = {Rubrics to Tokens: Bridging Response-level Rubrics and Token-level Rewards in Instruction Following Tasks},
  author = {Xu, Tianze and Zheng, Yanzhao and Lu, Pengrui and Ye, Lyumanshan and Wu, Yong and Zhang, Zhentao and Yu, Yuanqiang and Ma, Chao and Zhu, Jihuai and Liu, Pengfei and Dong, Baohua and Zhu, Hangcheng and Huang, Ruohui and Yu, Gang},
  booktitle = {Conference on Language Modeling},
  year = {2026},
  eprint = {2604.02795},
  archivePrefix = {arXiv},
  primaryClass = {cs.CL},
  url = {https://proceedings.colm.cc/paper_files/paper/2026/hash/ae0509bfd3e0c2414164209949708e4e-Abstract-Conference.html}
}`,
  },
  {
    id: 'limited-information-opponent-modeling',
    figure: {"src": "/papers/limited-information-opponent-modeling.webp", "alt": "LIOM framework with contrastive opponent representation learning during offline training and adaptive policy selection during online testing.", "source": "https://doi.org/10.1007/978-3-031-44198-1_42", "width": 932, "height": 576, "caption": "Figure 1 · LIOM framework with contrastive opponent representation learning during offline training and adaptive policy selection during online testing."},
    title: 'Limited Information Opponent Modeling',
    authors: 'Yongliang Lv, Yuanqiang Yu, Yan Zheng, Jianye Hao, Yongming Wen, and Yue Yu',
    year: 2023,
    venue: 'ICANN 2023',
    topic: 'Reinforcement learning',
    abstract: "The goal of opponent modeling is to model the opponent policy to maximize the reward of the main agent. Most prior works fail to effectively handle scenarios where opponent information is limited. To this end, we propose a Limited Information Opponent Modeling (LIOM) approach that extracts opponent policy representations across episodes using only self-observations. LIOM introduces a novel policy-based data augmentation method that extracts opponent policy representations offline via contrastive learning and incorporates them as additional inputs for training a general response policy. During online testing, LIOM dynamically responds to opponent policies by extracting opponent policy representations from recent historical trajectory data and combining them with the general policy. Moreover, LIOM ensures a lower bound on expected rewards through a balance between conservative and exploitation. Experimental results demonstrate that LIOM is able to accurately extract opponent policy representations even when the opponent’s information is limited, and has a certain degree of generalization ability for unknown policies, outperforming existing opponent modeling algorithms.",
    abstractSource: "https://link.springer.com/chapter/10.1007/978-3-031-44198-1_42",
    links: [
      { label: 'Paper', detail: 'Springer', href: 'https://doi.org/10.1007/978-3-031-44198-1_42', kind: 'paper' },
    ],
    bibtex: `@inproceedings{lv2023limited,
  title = {Limited Information Opponent Modeling},
  author = {Lv, Yongliang and Yu, Yuanqiang and Zheng, Yan and Hao, Jianye and Wen, Yongming and Yu, Yue},
  booktitle = {Artificial Neural Networks and Machine Learning -- ICANN 2023},
  series = {Lecture Notes in Computer Science},
  volume = {14261},
  year = {2023},
  publisher = {Springer},
  address = {Cham},
  pages = {511--522},
  doi = {10.1007/978-3-031-44198-1_42},
  url = {https://doi.org/10.1007/978-3-031-44198-1_42}
}`,
  },
  {
    id: 't3s',
    figure: {"src": "/papers/t3s-architecture.webp", "alt": "T3S network architecture with a globally shared network, two task-specific feature selectors, hypernetworks, and soft-mask feature selection.", "source": "https://doi.org/10.1109/IJCNN54540.2023.10191536", "width": 1232, "height": 564, "caption": "Figure 2 · Network architecture with globally shared layers and task-specific feature selectors. Hypernetworks generate soft masks that select features for each task."},
    title: 'T3S: Improving Multi-Task Reinforcement Learning with Task-Specific Feature Selector and Scheduler',
    authors: 'Yuanqiang Yu, Tianpei Yang, Yongliang Lv, Yan Zheng, and Jianye Hao',
    year: 2023,
    venue: 'IJCNN 2023',
    topic: 'Reinforcement learning',
    // Official published abstract supplied by the author.
    abstract: 'Multi-task reinforcement learning (MTRL) is a technique to train multiple tasks simultaneously, where previous works usually train a single model to solve different tasks by sharing parameters across various tasks. However, these methods are faced with inter-task interference since what parameters should be shared across tasks is not addressed, dramatically reducing learning efficiency. To solve these problems, we propose a novel MTRL framework called Task-Specific feature Selector and Scheduler (T3S), which consists of two components: a feature selector and a task scheduler. Specifically, the feature selectors employ hypernetworks to construct task-specific soft masks, which can be applied by globally shared representation to construct task-specific features. The task scheduler selects tasks for learning through two metrics, where the selection probability is inversely proportional to task progress (e.g., success rate) and task learning speed. Experimental results show that T3S consistently outperforms the state-of-the-art MTRL algorithms on various robotics manipulation tasks.',
    abstractSource: 'https://doi.org/10.1109/IJCNN54540.2023.10191536',
    links: [
      { label: 'Paper', detail: 'IEEE', href: 'https://doi.org/10.1109/IJCNN54540.2023.10191536', kind: 'paper' },
      { label: 'arXiv', detail: '2608.30765', href: 'https://arxiv.org/abs/2608.30765', kind: 'paper' },
      { label: 'GitHub', detail: 'Code', href: 'https://github.com/metaqiang/t3s-multitask-rl', kind: 'code' },
    ],
    bibtex: `@inproceedings{yu2023t3s,
  title = {{T3S}: Improving Multi-Task Reinforcement Learning with Task-Specific Feature Selector and Scheduler},
  author = {Yu, Yuanqiang and Yang, Tianpei and Lv, Yongliang and Zheng, Yan and Hao, Jianye},
  booktitle = {2023 International Joint Conference on Neural Networks (IJCNN)},
  year = {2023},
  publisher = {IEEE},
  pages = {1--8},
  doi = {10.1109/IJCNN54540.2023.10191536},
  url = {https://doi.org/10.1109/IJCNN54540.2023.10191536}
}`,
  },
  {
    id: 'knowledge-guided-policy',
    figure: {"src": "/papers/knowledge-guided-policy.webp", "alt": "Knowledge-guided policy network combining a fuzzy-rule knowledge controller with a trainable refinement module.", "source": "https://link.springer.com/article/10.1007/s10458-023-09600-1/figures/2", "width": 932, "height": 362, "caption": "Figure 2 · Knowledge-guided policy network combining a fuzzy-rule knowledge controller with a trainable refinement module."},
    title: 'Accelerating Deep Reinforcement Learning via Knowledge-Guided Policy Network',
    authors: 'Yuanqiang Yu, Peng Zhang, Kai Zhao, Yan Zheng, and Jianye Hao',
    year: 2023,
    venue: 'JAAMAS 2023',
    topic: 'Reinforcement learning',
    abstract: "Deep reinforcement learning has contributed to dramatic advances in many tasks, such as playing games, controlling robots, and navigating complex environments. However, it requires many interactions with the environment. This is different from the human learning process since humans can use prior knowledge, which can significantly speed up the learning process as it avoids unnecessary exploration. Previous works integrating knowledge in RL did not model uncertainty in human cognition, which reduces the reliability of knowledge. In this paper, we propose a knowledge-guided policy network, a novel framework that combines suboptimal human knowledge with reinforcement learning. Our framework consists of a fuzzy rule controller representing human knowledge and a refined module to fine-tune suboptimal prior knowledge. The proposed framework is end-to-end and can be combined with existing reinforcement learning algorithms such as PPO, AC, and SAC. We conduct experiments on both discrete and continuous control tasks. The empirical results show that our approach, which combines suboptimal human knowledge and RL, significantly improves the learning efficiency of basic RL algorithms, even with very low-performance human prior knowledge. Additional experiments are conducted on the number of fuzzy rules and the interpretability of the policy, which make our proposed framework more complete and reasonable. The code for this research is released under the project page of https://github.com/yuyuanq/reinforcement-learning-using-knowledge-controller.",
    abstractSource: "https://link.springer.com/article/10.1007/s10458-023-09600-1",
    links: [
      { label: 'Paper', detail: 'Springer', href: 'https://doi.org/10.1007/s10458-023-09600-1', kind: 'paper' },
      { label: 'GitHub', detail: 'Code', href: 'https://github.com/metaqiang/knowledge-guided-rl', kind: 'code' },
    ],
    bibtex: `@article{yu2023knowledgeguided,
  title = {Accelerating Deep Reinforcement Learning via Knowledge-Guided Policy Network},
  author = {Yu, Yuanqiang and Zhang, Peng and Zhao, Kai and Zheng, Yan and Hao, Jianye},
  journal = {Autonomous Agents and Multi-Agent Systems},
  year = {2023},
  volume = {37},
  eid = {17},
  doi = {10.1007/s10458-023-09600-1},
  url = {https://doi.org/10.1007/s10458-023-09600-1}
}`,
  },
];
