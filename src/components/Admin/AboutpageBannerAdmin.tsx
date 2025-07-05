import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "../../api/axios";

interface BannerData {
  heading: string;
  description: string;
  image: string;
}

const AboutpageBannerAdmin: React.FC = () => {
  const [bannerData, setBannerData] = useState<BannerData>({
    heading: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("/aboutbanner")
      .then((res) => {
        if (res.data) setBannerData(res.data as BannerData); // ✅ FIXED: Cast response to BannerData
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading banner:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBannerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.put("/aboutbanner", bannerData);
      alert("Banner updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Page Banner Admin</h2>

      {bannerData.image && (
        <img
          src={bannerData.image}
          alt="Preview"
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="heading"
          value={bannerData.heading}
          onChange={handleChange}
          placeholder="Heading"
          className="w-full p-2 border rounded"
        />

        <textarea
          name="description"
          value={bannerData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="image"
          value={bannerData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Update Banner
        </button>
      </form>
    </div>
  );
};

export default AboutpageBannerAdmin;
