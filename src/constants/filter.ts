const FILTER_CATEGORYS = [
  {
    title: '유형',
    contents: ['과목', '챌린지', '테스트'],
  },
  {
    title: '진행 방식',
    contents: ['자유 선택형', '순차 완료형'],
  },
  {
    title: '분야',
    contents: ['프로그래밍 기초', '데이터 분석', '웹', '인공지능', '알고리즘'],
  },
  {
    title: '난이도',
    contents: ['입문', '초급', '중급', '고급'],
  },
  {
    title: '언어',
    contents: [
      'C',
      'C++',
      '자바',
      '파이썬',
      '자바스크립트',
      'R',
      'HTML/CSS',
      'SQL',
      '아두이노',
      '스크래치',
    ],
  },
  {
    title: '가격',
    contents: ['무료', '유료', '구독'],
  },
] as const;

export default FILTER_CATEGORYS;
