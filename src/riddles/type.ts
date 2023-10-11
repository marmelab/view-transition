export type Riddle = {
  title: string;
  questions: Question[];
};

export type Question = {
  text: string;
  answers: Answer[];
};

export type Answer = {
  text: string;
  correct: boolean;
};
