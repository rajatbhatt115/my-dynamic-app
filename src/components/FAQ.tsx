// ✅ 20. src/components/FAQ.tsx
import React from 'react';
import { FaqItem } from '../features/faq/types'


interface FaqProps {


  faqs: FaqItem[];
  loading: Boolean;
 
}

const FAQ: React.FC<FaqProps> = ({ faqs }) => {
  const toggleAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const answer = target.nextElementSibling;
    const icon = target.querySelector('span.icon');
    if (answer && icon) {
      answer.classList.toggle('hidden');
      icon.textContent = answer.classList.contains('hidden') ? '+' : '−';
    }
  };

  return (
    <section className="container py-12 mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">FAQs</h2>
      <div className="space-y-4 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              className="flex justify-between items-center w-full faq-toggle"
              onClick={toggleAnswer}
            >
              <span className="font-semibold text-gray-700 text-left w-3/4">{faq.question}</span>
              <span className="text-2xl text-gray-700 icon">+</span>
            </button>
            <div className="mt-2 text-gray-600 hidden answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;