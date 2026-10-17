import type { ProfileFact, SiteLink } from '@/types/profile';

export const siteLinks = {
  alibaba: 'https://www.alibabagroup.com/',
  book: 'https://book.sciencereading.cn/shop/book/Booksimple/show.do?id=B694EA8C2D3868C75E053010B0A0A236B000',
  email: 'mailto:yuyuanqiang@gmail.com',
  github: 'https://github.com/metaqiang',
  googleScholar: 'https://scholar.google.com/citations?user=L5g90iQAAAAJ',
  huawei: 'https://www.huawei.com/en/',
  jianyeHaoScholar: 'https://scholar.google.com/citations?user=FCJVUYgAAAAJ',
  linkedin: 'https://cn.linkedin.com/in/yuanqiang-yu-b22457297',
  mindRlhf: 'https://gitee.com/mindspore/mindrlhf',
  mindSpore: 'https://gitee.com/mindspore/mindspore',
} as const;

export const profile = {
  name: 'Yuanqiang Yu',
  role: 'Applied Research Scientist',
  portrait: {
    src: '/yuanqiang-yu-portrait.png',
    alt: 'Portrait of Yuanqiang Yu',
  },
  actions: [
    { label: 'Email', href: siteLinks.email },
    { label: 'GitHub', href: siteLinks.github },
    { label: 'Google Scholar', href: siteLinks.googleScholar },
    { label: 'LinkedIn', href: siteLinks.linkedin },
  ] satisfies SiteLink[],
  facts: [
    { label: 'COMPANY', value: 'Alibaba Group' },
    { label: 'LOCATION', value: 'Hangzhou, China' },
    { label: 'FOCUS', value: 'LLM Agents · RL' },
  ] satisfies ProfileFact[],
} as const;

export const aboutContent = (
  <>
    <p>
      I am an Applied Research Scientist at <a href={siteLinks.alibaba} target="_blank" rel="noreferrer">Alibaba Group</a>, where I work on LLM agent systems. My current research focuses on LLM post-training, agent memory, and reliable long-horizon task execution. Previously, at <a href={siteLinks.huawei} target="_blank" rel="noreferrer">Huawei</a>, I contributed to <a href={siteLinks.mindSpore} target="_blank" rel="noreferrer">MindSpore</a>, a deep learning framework; <a href={siteLinks.mindRlhf} target="_blank" rel="noreferrer">MindRLHF</a>, a large-scale RLHF training framework; and the MetaERP agent, which streamlines invoice reconciliation and validation for accountants.
    </p>
    <p>
      I received my M.Sc. in Computer Science and Technology from Tianjin University under <a href={siteLinks.jianyeHaoScholar} target="_blank" rel="noreferrer">Prof. Jianye Hao</a>. My early research focused primarily on deep reinforcement learning, transfer learning, and multi-task reinforcement learning.
    </p>
    <p>
      Outside of research, I enjoy photography, solving Rubik’s cubes, and traveling.
    </p>
  </>
);
