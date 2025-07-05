// ✅ 19. src/components/Team.tsx
import React from 'react';
import { TeamMember } from '../features/team/teamSlice';

interface Props {
  members: TeamMember[];
}

const Team: React.FC<Props> = ({ members }) => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member) => (
            <div key={member._id} className="bg-gray-100 p-6 rounded shadow text-center hover:scale-105 transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[350px] object-cover mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
