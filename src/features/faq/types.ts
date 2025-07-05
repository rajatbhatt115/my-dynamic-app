export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqState {
  faqs: FaqItem[];
  loading: boolean;
}
