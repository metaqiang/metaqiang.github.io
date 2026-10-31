import { siteLinks } from '@/data/profile';

export function AboutSection() {
  return (
    <section className="about content-section" id="about" aria-labelledby="about-title">
      <div className="about-kicker">
        <div className="eyebrow"><span className="eyebrow-square" aria-hidden="true" /> 01 / ABOUT ME</div>
      </div>
      <h2 id="about-title">Agents that remember,<br />reason <span className="highlight">& improve.</span></h2>
      <div className="about-copy">
        <p>I am an Applied Research Scientist at <a href={siteLinks.alibaba} target="_blank" rel="noreferrer">Alibaba Group</a>. My current work focuses on <strong>LLM post-training, agent memory, and reliable long-horizon task execution.</strong></p>
        <p>Previously at <a href={siteLinks.huawei} target="_blank" rel="noreferrer">Huawei</a>, I contributed to <a href={siteLinks.mindSpore} target="_blank" rel="noreferrer">MindSpore</a>, <a href={siteLinks.mindRlhf} target="_blank" rel="noreferrer">MindRLHF</a>, and the MetaERP agent for invoice reconciliation and validation. I received my M.Sc. in Computer Science and Technology from Tianjin University, advised by <a href={siteLinks.jianyeHaoScholar} target="_blank" rel="noreferrer">Prof. Jianye Hao</a>. My earlier research focused on deep reinforcement learning, transfer learning, and multi-task reinforcement learning, with an emphasis on improving sample efficiency, incorporating prior knowledge, and learning shared representations across tasks.</p>
      </div>
      <div className="research-interests" aria-label="Research interests"><span>LLM Agents</span><span>Reinforcement Learning</span><span>Agent Memory</span></div>
    </section>
  );
}
