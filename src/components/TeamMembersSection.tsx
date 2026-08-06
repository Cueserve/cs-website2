import React from 'react';
import Link from 'next/link';

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
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0ffb159d9941921ad2ce_Member-Image-1.jpg',
    slug: 'devon-lane',
  },
  {
    id: '2',
    name: 'James Anderson',
    role: 'Creative Director',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0fc30b9e253f89ff04a8_Member-Image-2.jpg',
    slug: 'james-anderson',
  },
  {
    id: '3',
    name: 'Dianne Russell',
    role: 'Senior Webflow Developer',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0fb490ad3863d9959b46_Member-Image-3.jpg',
    slug: 'dianne-russell',
  },
  {
    id: '4',
    name: 'Annette Black',
    role: 'UI/UX Strategist',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f9cc03a35f586dc7b54_Member-Image-4.jpg',
    slug: 'annette-black',
  },
  {
    id: '5',
    name: 'Floyd Miles',
    role: 'Product Designer',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f867e29ec200271b37c_Member-Image-5.jpg',
    slug: 'floyd-miles',
  },
  {
    id: '6',
    name: 'Savannah Nguyen',
    role: 'Digital Marketing Lead',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f6c1e45f5c5b63fdfc2_Member-Image-6.jpg',
    slug: 'savannah-nguyen',
  },
  {
    id: '7',
    name: 'Leslie Alexander',
    role: 'Content & Copy Specialist',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0f506163f9b04d984bbc_Member-Image-7.jpg',
    slug: 'leslie-alexander',
  },
  {
    id: '8',
    name: 'Wade Warren',
    role: 'Social Media Manager',
    image: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691a0ef033baf106960c2a67_Member-Image-8.jpg',
    slug: 'wade-warren',
  },
];

export default function TeamMembersSection() {
  return (
    <section className="section members">
      <div className="container">
        <div className="section-title-wrapper margin-bottom">
          <div className="section-subtile-wrap">
            <div
              data-wf--subtitle--variant="borders"
              className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450"
            >
              <div className="subtitle-flex-wrap">
                <img
                  src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                  loading="lazy"
                  alt="Subtitle Icon"
                  className="subtitle-icon"
                />
                <div className="subtitle-text">Team Members</div>
              </div>
            </div>
          </div>
          <h2 className="section-title">
            Our Talented Team <span className="section-title-mark">Members.</span>
          </h2>
        </div>
        <div className="members-wrapper">
          <div className="w-dyn-list">
            <div role="list" className="member-grid-wrap w-dyn-items">
              {teamMembers.map((member) => (
                <div key={member.id} role="listitem" className="w-dyn-item">
                  <div className="single-member-wrap">
                    <div className="member-contents-wrap">
                      <Link
                        href={`/team-members/${member.slug}`}
                        className="member-image-wrap w-inline-block"
                      >
                        <img
                          src={member.image}
                          loading="lazy"
                          alt={member.name}
                          className="member-image"
                        />
                      </Link>
                      <div className="member-details-wrapper">
                        <div className="member-details-contents">
                          <div className="member-name-wrap">
                            <Link
                              href={`/team-members/${member.slug}`}
                              className="member-name"
                            >
                              {member.name}
                            </Link>
                          </div>
                          <div className="member-designation">{member.role}</div>
                          <div className="member-social-links-wrap">
                            <a
                              href="https://x.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="single-member-social-link w-inline-block"
                              aria-label={`${member.name} on X`}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                              </svg>
                            </a>
                            <a
                              href="https://www.facebook.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="single-member-social-link w-inline-block"
                              aria-label={`${member.name} on Facebook`}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.742-2.971 2.472v1.5h4.152l-.62 3.667h-3.532v7.98H9.101z" />
                              </svg>
                            </a>
                            <a
                              href="https://www.linkedin.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="single-member-social-link w-inline-block"
                              aria-label={`${member.name} on LinkedIn`}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section-border-top"></div>
    </section>
  );
}
