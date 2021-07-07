export enum Page {
  START = 'start',
  QUIZ = 'quiz',
  RECOMMEND = 'recommend',
}

export interface Answer {
  [index: number]: number[];
}
