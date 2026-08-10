import React from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  slug: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Devon Lane',
    role: 'Brand Identity Designer',
    image: '/assets/images/about-us/Member-Image-1.jpg',
    slug: 'devon-lane',
  },
  {
    id: '2',
    name: 'James Anderson',
    role: 'Creative Director',
    image: '/assets/images/about-us/Member-Image-2.jpg',
    slug: 'james-anderson',
  },
  {
    id: '3',
    name: 'Dianne Russell',
    role: 'Senior Webflow Developer',
    image: '/assets/images/about-us/Member-Image-3.jpg',
    slug: 'dianne-russell',
  },
  {
    id: '4',
    name: 'Annette Black',
    role: 'UI/UX Strategist',
    image: '/assets/images/about-us/Member-Image-4.jpg',
    slug: 'annette-black',
  },
  {
    id: '5',
    name: 'Floyd Miles',
    role: 'Product Designer',
    image: '/assets/images/about-us/Member-Image-5.jpg',
    slug: 'floyd-miles',
  },
  {
    id: '6',
    name: 'Savannah Nguyen',
    role: 'Digital Marketing Lead',
    image: '/assets/images/about-us/Member-Image-6.jpg',
    slug: 'savannah-nguyen',
  },
  {
    id: '7',
    name: 'Leslie Alexander',
    role: 'Content & Copy Specialist',
    image: '/assets/images/about-us/Member-Image-7.jpg',
    slug: 'leslie-alexander',
  },
  {
    id: '8',
    name: 'Wade Warren',
    role: 'Social Media Manager',
    image: '/assets/images/about-us/Member-Image-8.jpg',
    slug: 'wade-warren',
  },
];

export default function TeamMembersSection() {
  return (
    <section className="relative z-20 bg-white py-16 sm:py-24 xl:py-32">
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-label uppercase tracking-wider text-brand-default border border-brand-default/30 bg-[#f4f8ff]">
            <span>Team Members</span>
          </div>
          <h2 className="text-h2 font-display font-normal text-cs-ink">
            Our Talented Team <span className="text-brand-default font-normal">Members.</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col p-2 rounded-[28px] bg-[#f4f8ff] border border-transparent transition-all duration-300">
              
              <div className="relative w-full aspect-[5/4] rounded-[20px] bg-neutral-100 overflow-hidden flex-shrink-0">
                <img
                  src={member.image}
                  loading="lazy"
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Member Details Area */}
              <div className="bg-white rounded-[20px] p-4 mt-2 flex flex-col items-center justify-center text-center shadow-sm">
                <h3 className="text-base font-medium text-cs-ink mb-0.5">{member.name}</h3>
                <p className="text-[13px] text-neutral-500 mb-3">{member.role}</p>
                
                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-[#f4f8ff] text-neutral-600 flex items-center justify-center hover:bg-brand-default hover:text-white transition-colors">
                    <span className="text-xs font-bold font-sans">X</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#f4f8ff] text-neutral-600 flex items-center justify-center hover:bg-brand-default hover:text-white transition-colors">
                    <span className="text-xs font-bold font-sans">f</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#f4f8ff] text-neutral-600 flex items-center justify-center hover:bg-brand-default hover:text-white transition-colors">
                    <span className="text-xs font-bold font-sans">in</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
