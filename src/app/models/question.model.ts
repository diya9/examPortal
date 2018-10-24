export class Question {
    id: number;
    question: string;
    options: Option[];
    answered: boolean;
}


export class Option {
    id: number;
    name: string;
    isAnswer: boolean;
    selected: boolean;
}