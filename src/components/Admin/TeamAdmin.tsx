// src/components/admin/TeamAdmin.tsx
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from "../../api/axios";

interface TeamMember {
  _id?: string;
  name: string;
  role: string;
  image: string;
}

const TeamAdmin: React.FC = () => {
  const [teamData, setTeamData] = useState<TeamMember[]>([]);
  const [teamForm, setTeamForm] = useState<TeamMember>({ name: '', role: '', image: '' });
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    const res = await axios.get<TeamMember[]>('http://localhost:5000/api/team');
    setTeamData(res.data);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamForm({ ...teamForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/api/team/${editId}`, teamForm);
    } else {
      await axios.post('http://localhost:5000/api/team', teamForm);
    }
    setTeamForm({ name: '', role: '', image: '' });
    setEditId(null);
    fetchTeam();
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/team/${id}`);
    fetchTeam();
  };

  const handleEdit = (member: TeamMember) => {
    setEditId(member._id || null);
    setTeamForm({ name: member.name, role: member.role, image: member.image });
  };

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Team Admin</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={teamForm.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" />
        <input name="role" value={teamForm.role} onChange={handleChange} placeholder="Role" className="w-full p-2 border rounded" />
        <input name="image" value={teamForm.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? 'Update' : 'Add'} Member
        </button>
        {editId && (
          <button type="button" onClick={() => {
            setEditId(null);
            setTeamForm({ name: '', role: '', image: '' });
          }} className="bg-gray-500 text-white px-3 py-1 rounded ml-2">
            Cancel
          </button>
        )}
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {teamData.map((member) => (
          <div key={member._id} className="bg-gray-100 p-4 rounded shadow text-center">
            <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p>{member.role}</p>
            <button onClick={() => handleEdit(member)} className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
            <button onClick={() => handleDelete(member._id!)} className="mt-2 bg-red-600 text-white px-3 py-1 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAdmin;
