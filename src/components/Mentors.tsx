import { useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

interface Mentor {
  name: string;
  title: string;
  position: string;
  institution: string;
  image: string;
  initials: string;
  accent: {
    text: string;
    bg: string;
    border: string;
    gradient: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
  };
  icon: React.ElementType;
}

const MENTORS: Mentor[] = [
  {
    name: 'Er. Gajendran Parthasarathi',
    title: 'PROJECT MENTOR',
    position: 'Head – School of Design and Innovation',
    institution: 'Rathinam Technical Campus',
    image: '/Team/mentor-gajendran.jpg.jpeg',
    initials: 'GP',
    accent: {
      text: 'text-[#D86A00]',
      bg: 'bg-[#FFF7ED]',
      border: 'border-[#F8DDB8]',
      gradient: 'from-[#F58220]/10 to-[#F7D6A8]/60',
      badgeBg: 'bg-[#FFF5EC]',
      badgeBorder: 'border-[#F9D9B6]',
      badgeText: 'text-[#D86A00]',
    },
    icon: GraduationCap,
  },
  {
    name: 'Mr. K. Muthusamy',
    title: 'TECHNICAL MENTOR',
    position: 'Head – Technical Competitions and Hackathons',
    institution: 'Rathinam Technical Campus',
    image: '/Team/mentor-muthusamy.jpg.jpeg',
    initials: 'KM',
    accent: {
      text: 'text-[#2457A7]',
      bg: 'bg-[#EEF4FF]',
      border: 'border-[#D6E5FF]',
      gradient: 'from-[#2457A7]/10 to-[#DDEAFF]/60',
      badgeBg: 'bg-[#EEF4FF]',
      badgeBorder: 'border-[#D6E5FF]',
      badgeText: 'text-[#2457A7]',
    },
    icon: Award,
  },
];

const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => {
  const [imgError, setImgError] = useState(false);
  const Icon = mentor.icon;

  return (
    <article className="group flex h-full flex-col items-center rounded-[28px] border border-[#E0E6ED] bg-white p-8 text-center shadow-[0_18px_36px_rgba(23,43,77,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DCE8FF] sm:p-10">
      <div className={`mb-6 h-24 w-24 shrink-0 rounded-xl bg-gradient-to-br ${mentor.accent.gradient} p-[4px] shadow-sm transition-transform duration-300 group-hover:scale-[1.04]`}>
        <div className="h-full w-full rounded-lg border border-[#DBE7F5] bg-white">
          {!imgError ? (
            <img
              src={mentor.image}
              alt={`Portrait of ${mentor.name}, ${mentor.position}`}
              className="h-24 w-24 rounded-xl object-cover"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#F8FAFC]">
              <span className={`text-xl font-bold ${mentor.accent.text}`}>{mentor.initials}</span>
            </div>
          )}
        </div>
      </div>

      <div className={`mb-4 inline-flex items-center gap-1.5 rounded-full border ${mentor.accent.badgeBorder} ${mentor.accent.badgeBg} px-4 py-1.5`}>
        <Icon size={13} className={mentor.accent.badgeText} />
        <span className={`text-[11px] font-bold tracking-[0.18em] ${mentor.accent.badgeText}`}>
          {mentor.title}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold leading-tight text-[#172B4D]">{mentor.name}</h3>
      <p className={`mb-1.5 text-sm font-medium leading-6 ${mentor.accent.text}`}>{mentor.position}</p>
      <p className="text-xs font-medium text-[#526176]">{mentor.institution}</p>
    </article>
  );
};

const Mentors: React.FC = () => {
  return (
    <section id="mentors" className="border-b border-[#E0E6ED] bg-[#F6F8FB]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F9D9B6] bg-[#FFF8F2] px-3 py-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F58220]">Guidance</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#172B4D] sm:text-4xl">Project Mentors</h2>
          <p className="text-base leading-7 text-[#526176]">
            Experienced faculty members guiding Team Abacus through the development of SafeTrade for Smart India Hackathon 2026.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {MENTORS.map((mentor) => (
            <MentorCard key={mentor.name} mentor={mentor} />
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-[#E0E6ED] bg-white p-5 text-center shadow-sm">
          <p className="text-sm text-[#526176]">
            <strong className="text-[#172B4D]">Rathinam Technical Campus</strong> · Coimbatore
          </p>
          <p className="mt-1 text-xs text-[#75829A]">Mentoring Team Abacus for the SafeTrade project</p>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
