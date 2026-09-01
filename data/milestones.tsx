import { siteLinks } from '@/data/profile';
import type { Milestone } from '@/types/profile';

export const milestones: Milestone[] = [
  {
    date: { iso: '2026-08', label: 'Aug 2026' },
    title: 'Two papers accepted to EMNLP 2026',
    description: 'Conference on Empirical Methods in Natural Language Processing.',
    papers: [
      {
        title: 'PAC: Progress-Augmented Advantage Curriculum for Multi-Task Reinforcement Learning of LLMs',
        authors: 'Yuanqiang Yu, Yanzhao Zheng, Zhentao Zhang, Tianze Xu, Chao Ma, Jihuai Zhu, Jiashun Liu, Xinle Deng, Baohua Dong, Hangcheng Zhu, and Ruohui Huang',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2608.30528' },
          { label: 'GitHub', href: 'https://github.com/metaqiang/pac-curricula' },
        ],
      },
      {
        title: 'Counterfactual Constraint-Conditioned On-Policy Distillation for Multi-Constraint Instruction Following',
        authors: 'Yanzhao Zheng, Yuanqiang Yu, Tianze Xu, Chao Ma, Zhentao Zhang, Jihuai Zhu, Baohua Dong, Hangcheng Zhu, and Ruohui Huang',
        links: [],
      },
    ],
  },
  {
    date: { iso: '2026-07', label: 'Jul 2026' },
    title: 'Three papers accepted to COLM 2026',
    description: 'Conference on Language Modeling.',
    papers: [
      {
        title: 'SkillRouter: Skill Routing for LLM Agents at Scale',
        authors: 'Yanzhao Zheng, Zhentao Zhang, Chao Ma, Yuanqiang Yu, Jihuai Zhu, Yong Wu, Tianze Xu, Baohua Dong, Hangcheng Zhu, Ruohui Huang, and Gang Yu',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2603.22455' },
          { label: 'GitHub', href: 'https://github.com/zhengyanzhao1997/SkillRouter' },
        ],
      },
      {
        title: 'ContextBudget: Budget-Aware Context Management for Long-Horizon Search Agents',
        authors: 'Yong Wu, Yanzhao Zheng, Tianze Xu, Zhentao Zhang, Yuanqiang Yu, Jihuai Zhu, Chao Ma, Binbin Lin, Baohua Dong, Hangcheng Zhu, Ruohui Huang, and Gang Yu',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2604.01664' },
          { label: 'GitHub', href: 'https://github.com/yw-0311/ContextBudget' },
        ],
      },
      {
        title: 'Rubrics to Tokens: Bridging Response-level Rubrics and Token-level Rewards in Instruction Following Tasks',
        authors: 'Tianze Xu, Yanzhao Zheng, Pengrui Lu, Lyumanshan Ye, Yong Wu, Zhentao Zhang, Yuanqiang Yu, Chao Ma, Jihuai Zhu, Pengfei Liu, Baohua Dong, Hangcheng Zhu, Ruohui Huang, and Gang Yu',
        links: [
          { label: 'Paper', href: 'https://arxiv.org/abs/2604.02795' },
          { label: 'GitHub', href: 'https://github.com/TURLEing/Rubrics-To-Tokens' },
        ],
      },
    ],
  },
  {
    date: { iso: '2025-10', label: 'Oct 2025' },
    title: 'Joined Alibaba Group in Hangzhou, China',
    titleLink: { label: 'Alibaba Group', href: siteLinks.alibaba },
    logo: { src: '/institutions/alibaba.png', alt: 'Alibaba Group logo' },
    description: 'Applied Research Scientist · Oct 2025 — Present.',
  },
  {
    date: { iso: '2023-06', label: 'Jun 2023' },
    title: 'Joined Huawei in Shenzhen, China',
    titleLink: { label: 'Huawei', href: siteLinks.huawei },
    logo: { src: '/institutions/huawei.png', alt: 'Huawei logo' },
    description: 'Machine Learning Engineer · MetaERP agent · Jun 2023 — Oct 2025.',
  },
  {
    date: { iso: '2023-02', label: 'Feb 2023' },
    title: 'One paper accepted to AAMAS',
    description: 'Autonomous Agents and Multi-Agent Systems.',
    papers: [{
      title: 'Accelerating Deep Reinforcement Learning via Knowledge-Guided Policy Network',
      authors: 'Yuanqiang Yu, Peng Zhang, Kai Zhao, Yan Zheng, Jianye Hao',
      links: [
        { label: 'Paper', href: 'https://doi.org/10.1007/s10458-023-09600-1' },
        { label: 'GitHub', href: 'https://github.com/metaqiang/knowledge-guided-rl' },
      ],
    }],
  },
  {
    date: { iso: '2023-06', label: 'Jun 2023' },
    title: 'One paper accepted to IJCNN 2023',
    description: 'International Joint Conference on Neural Networks.',
    papers: [{
      title: 'T3S: Improving Multi-Task Reinforcement Learning with Task-Specific Feature Selector and Scheduler',
      authors: 'Yuanqiang Yu, Tianpei Yang, Yongliang Lv, Yan Zheng, Jianye Hao',
      links: [
        { label: 'Paper', href: 'https://doi.org/10.1109/IJCNN54540.2023.10191536' },
        { label: 'GitHub', href: 'https://github.com/metaqiang/t3s-multitask-rl' },
      ],
    }],
  },
  {
    date: { iso: '2023-09', label: 'Sep 2023' },
    title: 'One paper accepted to ICANN 2023',
    description: 'International Conference on Artificial Neural Networks.',
    papers: [{
      title: 'Limited Information Opponent Modeling',
      authors: 'Yongliang Lv, Yuanqiang Yu, Yan Zheng, Jianye Hao, Yongming Wen, and Yue Yu',
      links: [{ label: 'Paper', href: 'https://doi.org/10.1007/978-3-031-44198-1_42' }],
    }],
  },
  {
    date: { iso: '2021-10', label: 'Oct 2021' },
    title: 'Received First Prize in the Huawei Cup',
    links: [{ label: 'Certificate', href: '/attachments/CPMCM.pdf' }],
    description: '18th China Post-Graduate Mathematical Contest in Modeling.',
  },
  {
    date: { iso: '2020-09', label: 'Sep 2020' },
    title: 'Began M.Sc. studies at Tianjin University',
    logo: { src: '/institutions/tianjin-university-emblem.png', alt: 'Tianjin University emblem', square: true },
    tags: ['985', '211', 'Double First-Class'],
    description: <>Computer Science & Technology · Advised by <a href={siteLinks.jianyeHaoScholar} target="_blank" rel="noreferrer">Prof. Jianye Hao</a>.</>,
  },
  {
    date: { iso: '2019-09', label: 'Sep 2019' },
    title: 'Received First Prize in CUMCM',
    links: [{ label: 'Certificate', href: '/attachments/CUMCM.pdf' }],
    description: 'China Undergraduate Mathematical Contest in Modeling.',
  },
  {
    date: { iso: '2018-04', label: 'Apr 2018' },
    title: 'We published 《数学建模方法入门及其应用》',
    links: [{ label: 'Book', href: siteLinks.book }],
    description: 'Edited by Xiaoyin Wang et al. · China Science Publishing & Media Ltd. · ISBN 9787030569578.',
  },
  {
    date: { iso: '2018-02', label: 'Feb 2018' },
    title: 'Received the Outstanding Winner Award in ICM',
    links: [{ label: 'Certificate', href: 'https://www.comap-math.org/mcm/2018Certs/73156.pdf' }],
    description: 'Interdisciplinary Contest in Modeling.',
  },
  {
    date: { iso: '2016-09', label: 'Sep 2016' },
    title: 'Began B.Eng. studies at Tiangong University',
    logo: { src: '/institutions/tiangong-university-emblem.png', alt: 'Tiangong University emblem', square: true },
    tags: ['Double First-Class'],
    description: 'Computer Science & Technology.',
  },
];
