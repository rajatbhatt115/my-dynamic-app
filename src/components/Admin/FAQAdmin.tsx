// ✅ FAQAdmin.tsx (React + TypeScript)
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "../../api/axios";

interface Faq {
  _id: string;
  question: string;
  answer: string;
}

const FAQAdmin: React.FC = () => {
  const [faqData, setFaqData] = useState<Faq[]>([]);
  const [faqForm, setFaqForm] = useState({ question: "", answer: "" });
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    const res = await axios.get<Faq[]>("/faqs");
    setFaqData(res.data);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFaqForm({ ...faqForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`faqs/${editId}`, faqForm);
    } else {
      await axios.post("/faqs", faqForm);
    }
    setFaqForm({ question: "", answer: "" });
    setEditId(null);
    fetchFAQs();
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`/faqs/${id}`);
    fetchFAQs();
  };

  const handleEdit = (faq: Faq) => {
    setEditId(faq._id);
    setFaqForm({ question: faq.question, answer: faq.answer });
  };

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">FAQ Admin</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="question"
          value={faqForm.question}
          onChange={handleChange}
          placeholder="Question"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="answer"
          value={faqForm.answer}
          onChange={handleChange}
          placeholder="Answer"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? "Update" : "Add"} FAQ
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {faqData.map((faq) => (
          <div key={faq._id} className="border p-4 rounded">
            <h4 className="font-bold text-lg">{faq.question}</h4>
            <p className="text-gray-600 mb-2">{faq.answer}</p>
            <button onClick={() => handleEdit(faq)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
              Edit
            </button>
            <button onClick={() => handleDelete(faq._id)} className="bg-red-600 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAdmin;
