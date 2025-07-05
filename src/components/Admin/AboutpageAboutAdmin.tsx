import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "../../api/axios";

interface AboutData {
  para1: string;
  para2: string;
  image: string;
}

const AboutpageAboutAdmin: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData>({
    para1: "",
    para2: "",
    image: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("/AboutpageAbout")
      .then((res) => {
        if (res.data) setAboutData(res.data as AboutData); // ✅ FIXED
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading about data:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAboutData({ ...aboutData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.put("/AboutpageAbout", aboutData);
      alert("About section updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Section For About Page Admin</h2>
      {aboutData.image && (
        <img
          src={aboutData.image}
          alt="Preview"
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          name="para1"
          value={aboutData.para1}
          onChange={handleChange}
          placeholder="Paragraph 1"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="para2"
          value={aboutData.para2}
          onChange={handleChange}
          placeholder="Paragraph 2"
          className="w-full p-2 border rounded"
        />
        <input
          name="image"
          value={aboutData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update About
        </button>
      </form>
    </div>
  );
};

export default AboutpageAboutAdmin;
