import type { ProfileFact, SiteLink } from '@/types/profile';

export const siteLinks = {
  alibaba: 'https://www.alibabagroup.com/',
  book: 'https://book.sciencereading.cn/shop/book/Booksimple/show.do?id=B694EA8C2D3868C75E053010B0A0A236B000',
  cv: '/Yuanqiang_Yu_CV.pdf',
  email: 'mailto:yuyuanqiang@gmail.com',
  googleScholar: 'https://scholar.google.com/citations?user=L5g90iQAAAAJ',
  huawei: 'https://www.huawei.com/en/',
  jianyeHaoScholar: 'https://scholar.google.com/citations?user=FCJVUYgAAAAJ',
  linkedin: 'https://cn.linkedin.com/in/yuanqiang-yu-b22457297',
  mindRlhf: 'https://gitee.com/mindspore/mindrlhf',
  mindSpore: 'https://gitee.com/mindspore/mindspore',
  tiangongUniversity: 'https://www.tiangong.edu.cn/',
  tianjinUniversity: 'https://www.tju.edu.cn/',
} as const;

export const profile = {
  name: 'Yuanqiang Yu',
  chineseName: '余元强',
  role: 'Machine Learning Engineer',
  introduction:
    'Machine learning engineer at Alibaba Group working on LLM agents, reinforcement learning, agent memory, skill routing, and context management.',
  portrait: {
    src: '/yuanqiang-yu-portrait.jpg',
    alt: 'Portrait of Yuanqiang Yu',
  },
  actions: [
    { label: 'Email', href: siteLinks.email },
    { label: 'Google Scholar', href: siteLinks.googleScholar },
    { label: 'LinkedIn', href: siteLinks.linkedin },
    { label: 'CV', href: siteLinks.cv },
  ] satisfies SiteLink[],
  facts: [
    { label: 'CURRENT', value: 'Alibaba Group' },
    { label: 'LOCATION', value: 'Hangzhou, China' },
    { label: 'FOCUS', value: 'LLM Agents · RL' },
  ] satisfies ProfileFact[],
} as const;

export const aboutContent = (
  <>
    <p>
      I am a Machine Learning Engineer at <a href={siteLinks.alibaba} target="_blank" rel="noreferrer">Alibaba Group</a>, where I work on merchant agents for Taobao. My current research focuses on LLM post-training, agent memory, and reliable long-horizon task execution.
    </p>
    <p>
      Previously, at <a href={siteLinks.huawei} target="_blank" rel="noreferrer">Huawei</a>, I worked on the <a href={siteLinks.mindRlhf} target="_blank" rel="noreferrer">MindRLHF</a> training framework and the <a href={siteLinks.mindSpore} target="_blank" rel="noreferrer">MindSpore</a> framework.
    </p>
    <p>
      I received my M.Sc. in Computer Science and Technology from <a href={siteLinks.tianjinUniversity} target="_blank" rel="noreferrer">Tianjin University</a> under <a href={siteLinks.jianyeHaoScholar} target="_blank" rel="noreferrer">Prof. Jianye Hao</a>. My early research focused primarily on deep reinforcement learning, transfer learning, and multi-task reinforcement learning.
    </p>
  </>
);
