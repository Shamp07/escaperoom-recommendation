export enum Page {
  START = 'start',
  SURVEY = 'survey',
  RECOMMEND = 'recommend',
}

export interface Answer {
  [index: number]: number[];
}
