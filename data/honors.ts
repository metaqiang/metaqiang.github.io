export type HonorLevel = 'International' | 'National' | 'Provincial';

export type Honor = {
  id: string;
  year: number;
  title: string;
  distinction: string;
  level: HonorLevel;
};

// Checked against the original certificates in the user's local awards folder;
// the EMNLP paper award was separately verified against ACL Anthology.
// Levels describe the award's scope, not the scope of its parent competition.
// Tianjin is a province-level municipality. Certificate numbers and scans are
// deliberately excluded from this public-facing data.
// English event names below follow organizer websites or official certificates.
// The scholarship's English name is a faithful translation, as noted on its entry.
export const honors: Honor[] = [
  {
    id: 'emnlp-outstanding-paper-2026',
    year: 2026,
    title: 'Conference on Empirical Methods in Natural Language Processing (EMNLP)',
    distinction: 'Outstanding Paper',
    // Official conference name: https://2026.emnlp.org/
    // https://aclanthology.org/2026.emnlp-main.1037/
    level: 'International',
  },
  {
    id: 'icm-2018',
    year: 2018,
    title: 'Interdisciplinary Contest in Modeling (ICM)',
    distinction: 'Outstanding Winner',
    // Official name: https://contest.comap.com/undergraduate/contests/mcm/instructions.html
    level: 'International',
  },
  {
    id: 'apmcm-2018',
    // The certificate says 2018; its source filename incorrectly begins "2019_".
    year: 2018,
    title: 'Asia and Pacific Mathematical Contest in Modeling (APMCM)',
    distinction: 'Second Prize',
    // Official name: https://www.apmcm.org/?language=en
    level: 'International',
  },
  {
    id: 'huawei-cup-2021',
    year: 2021,
    title: 'China Post-Graduate Mathematical Contest in Modeling (Huawei Cup)',
    distinction: 'First Prize',
    // Matches the 2021 bilingual certificate and the organizer's English invitation:
    // https://cpipc.acge.org.cn/cw/contestNews/detail/4/2c9080189914a5c4019940d4f22060bc?page=3
    level: 'National',
  },
  {
    id: 'teddy-cup-2019',
    year: 2019,
    title: 'TipDM Cup Data Mining Challenge',
    distinction: 'Second Prize',
    // The 2019 certificate's official seal says "COMMITTEE FOR THE TIPDM CUP
    // DATA MINING CHALLENGE"; its watermark uses the brand capitalization "TipDM".
    // Organizer: https://www.tipdmcup.cn/tdbtzsjs.jhtml
    // The certificate explicitly states "全国二等奖".
    level: 'National',
  },
  {
    id: 'cumcm-tianjin-2019',
    year: 2019,
    title: 'Contemporary Undergraduate Mathematical Contest in Modeling (CUMCM)',
    distinction: 'First Prize',
    // Official name: https://en.mcm.edu.cn/ (adopted by the organizer in 2010).
    // The certificate explicitly states "天津赛区一等奖", not a national award.
    level: 'Provincial',
  },
  {
    id: 'lanqiao-cup-tianjin-2019',
    year: 2019,
    title: 'Lan Qiao Cup National Software and Information Technology Professional Talent Contest',
    distinction: 'First Prize',
    // The organizer's English website uses this full title: https://www.lanqiaobei.cn/
    // "National" belongs to the competition name; this award remains provincial.
    level: 'Provincial',
  },
  {
    id: 'tianjin-government-scholarship-2018',
    year: 2018,
    title: 'Tianjin Municipal People\'s Government Scholarship',
    distinction: 'Recipient',
    // Awarded by the Tianjin Municipal Education Commission in December 2018.
    // Faithful translation of the Chinese certificate, also used by university news:
    // https://ai.tust.edu.cn/english/StudentWorks/d6bed384c5684e8c8d54a965faaaef7f.htm
    // No issuer-standard English title was verified for this domestic-student award.
    level: 'Provincial',
  },
];
