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
  nameZh: '余元强',
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
