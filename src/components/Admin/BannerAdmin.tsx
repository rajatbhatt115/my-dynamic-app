import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "../../api/axios"; // ✅ Make sure axios has baseURL
import { useAppDispatch } from "../../redux/hooks";
import { fetchBannerData } from "../../features/banner/bannerSlice";

interface BannerData {
  heading: string;
  description: string;
  image: string;
}

const BannerAdmin: React.FC = () => {
  const [bannerData, setBannerData] = useState<BannerData>({
    heading: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get<BannerData>("/banner?page=home").then((res) => {
      setBannerData(res.data);
      setLoading(false);
    }).catch((err) => {
      console.error("Error loading banner:", err);
      setLoading(false);
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBannerData({ ...bannerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.put("/banner", {
        ...bannerData,
        page: "home", // ✅ VERY IMPORTANT
      });
      alert("Banner updated successfully!");
      dispatch(fetchBannerData("home")); // ✅ Reload home banner in redux
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Update Home Banner</h2>

      {bannerData.image && (
        <img src={bannerData.image} alt="Preview" className="w-full h-48 object-cover mb-4 rounded" />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="heading" value={bannerData.heading} onChange={handleChange} placeholder="Heading" className="w-full p-2 border rounded" />
        <textarea name="description" value={bannerData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />
        <input name="image" value={bannerData.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default BannerAdmin;
