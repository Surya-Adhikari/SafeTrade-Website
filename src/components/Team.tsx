import { useState } from 'react';
import { Crown, Code2, BookOpen, FlaskConical, Microchip, Wrench } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';
import type { TeamMember } from '../types';

const ROLE_ICONS = [Crown, Code2, BookOpen, FlaskConical, Microchip, Wrench];
const ACCENT_COLORS = [
  { text: 'text-[#D86A00]', bg: 'bg-[#FFF7ED]', border: 'border-[#F8DDB8]', avatar: 'from-[#F58220]/15 to-[#F7D6A8]/60' },
  { text: 'text-[#2457A7]', bg: 'bg-[#EEF4FF]', border: 'border-[#D6E5FF]', avatar: 'from-[#2457A7]/10 to-[#DDEAFF]/60' },
  { text: 'text-[#15966A]', bg: 'bg-[#EAFBF5]', border: 'border-[#CFEFDF]', avatar: 'from-[#15966A]/10 to-[#CBEEDB]/60' },
  { text: 'text-[#6A5AE0]', bg: 'bg-[#F3F1FF]', border: 'border-[#D9D2FF]', avatar: 'from-[#6A5AE0]/10 to-[#E2DCFF]/60' },
  { text: 'text-[#D86A00]', bg: 'bg-[#FFF7ED]', border: 'border-[#F8DDB8]', avatar: 'from-[#F58220]/10 to-[#F7D6A8]/50' },
  { text: 'text-[#2457A7]', bg: 'bg-[#EEF4FF]', border: 'border-[#D6E5FF]', avatar: 'from-[#2457A7]/10 to-[#DDEAFF]/50' },
];

interface AvatarProps {
  member: TeamMember;
  accent: (typeof ACCENT_COLORS)[number];
}

const Avatar: React.FC<AvatarProps> = ({ member, accent }) => {
  const [imgError, setImgError] = useState(false);

  if (member.photo && !imgError) {
    return (
      <div className={`h-16 w-16 shrink-0 rounded-xl bg-gradient-to-br ${accent.avatar} p-[3px] shadow-sm sm:h-20 sm:w-20`}>
        <div className="h-full w-full rounded-lg border border-[#DCE5F0] bg-white">
          <img
            src={member.photo}
            alt={`Portrait of ${member.name}`}
            className="h-16 w-16 rounded-lg object-cover sm:h-20 sm:w-20"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent.avatar} p-[3px] shadow-sm sm:h-20 sm:w-20`}>
      <div className={`flex h-full w-full items-center justify-center rounded-lg border-2 ${accent.border} bg-white`}>
        <span className={`text-lg font-bold ${accent.text} sm:text-xl`}>{member.initials}</span>
      </div>
    </div>
  );
};

const galleryItems = [
  { src: '/Team/team-workshop.jpg.jpeg', alt: 'Team Abacus in a welding workshop discussion' },
  { src: '/Team/team-demonstration.jpg.jpeg', alt: 'Team Abacus demonstrating the SafeTrade concept' },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="border-b border-[#E0E6ED] bg-[#F6F8FB]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F9D9B6] bg-[#FFF8F2] px-3 py-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F58220]">The Team</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#172B4D] sm:text-4xl">Team Abacus</h2>
          <p className="text-base leading-7 text-[#526176]">
            Six students working together on SafeTrade for Smart India Hackathon 2026.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-5">
            <div className="flex w-full justify-center gap-5 md:gap-8">
              {TEAM_MEMBERS.slice(0, 1).map((member) => {
                const memberIndex = TEAM_MEMBERS.findIndex((item) => item.name === member.name);
                const Icon = ROLE_ICONS[memberIndex];
                const accent = ACCENT_COLORS[memberIndex];

                return (
                  <article
                    key={member.name}
                    className="group w-full max-w-[280px] rounded-[28px] border border-[#E0E6ED] bg-white p-5 shadow-[0_16px_28px_rgba(23,43,77,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DCE8FF]"
                  >
                    {member.isLeader && (
                      <div className="mb-4 flex justify-center">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5EC] px-3 py-1.5 text-[11px] font-bold text-[#D86A00] ring-1 ring-[#F9D9B6]">
                          <Crown size={11} />
                          Team Leader
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-4">
                      <Avatar member={member} accent={accent} />

                      <div className="min-w-0 flex-1">
                        <h3 className="mb-2 text-base font-bold leading-tight text-[#172B4D]">{member.name}</h3>
                        <div className={`inline-flex items-start gap-2 rounded-xl border ${accent.border} ${accent.bg} px-2.5 py-2`}>
                          <Icon size={12} className={`${accent.text} mt-0.5 shrink-0`} />
                          <span className={`text-xs font-medium leading-6 ${accent.text}`}>{member.role}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="flex w-full justify-center gap-5 md:gap-8">
              {TEAM_MEMBERS.slice(1, 3).map((member) => {
                const memberIndex = TEAM_MEMBERS.findIndex((item) => item.name === member.name);
                const Icon = ROLE_ICONS[memberIndex];
                const accent = ACCENT_COLORS[memberIndex];

                return (
                  <article
                    key={member.name}
                    className="group w-full max-w-[280px] rounded-[28px] border border-[#E0E6ED] bg-white p-5 shadow-[0_16px_28px_rgba(23,43,77,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DCE8FF]"
                  >
                    <div className="flex items-start gap-4">
                      <Avatar member={member} accent={accent} />

                      <div className="min-w-0 flex-1">
                        <h3 className="mb-2 text-base font-bold leading-tight text-[#172B4D]">{member.name}</h3>
                        <div className={`inline-flex items-start gap-2 rounded-xl border ${accent.border} ${accent.bg} px-2.5 py-2`}>
                          <Icon size={12} className={`${accent.text} mt-0.5 shrink-0`} />
                          <span className={`text-xs font-medium leading-6 ${accent.text}`}>{member.role}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="flex w-full justify-center gap-5 md:gap-8">
              {TEAM_MEMBERS.slice(3).map((member) => {
                const memberIndex = TEAM_MEMBERS.findIndex((item) => item.name === member.name);
                const Icon = ROLE_ICONS[memberIndex];
                const accent = ACCENT_COLORS[memberIndex];

                return (
                  <article
                    key={member.name}
                    className="group w-full max-w-[280px] rounded-[28px] border border-[#E0E6ED] bg-white p-5 shadow-[0_16px_28px_rgba(23,43,77,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DCE8FF]"
                  >
                    <div className="flex items-start gap-4">
                      <Avatar member={member} accent={accent} />

                      <div className="min-w-0 flex-1">
                        <h3 className="mb-2 text-base font-bold leading-tight text-[#172B4D]">{member.name}</h3>
                        <div className={`inline-flex items-start gap-2 rounded-xl border ${accent.border} ${accent.bg} px-2.5 py-2`}>
                          <Icon size={12} className={`${accent.text} mt-0.5 shrink-0`} />
                          <span className={`text-xs font-medium leading-6 ${accent.text}`}>{member.role}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-[#172B4D]">Team Abacus in Action</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {galleryItems.map((item) => (
              <div key={item.src} className="rounded-[28px] border border-[#E0E6ED] bg-white p-3 shadow-[0_18px_36px_rgba(23,43,77,0.04)]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] w-full rounded-[22px] object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-[#E0E6ED] bg-white p-5 text-center shadow-sm">
          <p className="text-sm text-[#526176]">
            <strong className="text-[#172B4D]">Team Abacus</strong> · Smart India Hackathon 2026
          </p>
          <p className="mt-1 text-xs text-[#75829A]">Project: SafeTrade — Smart Connected Safety Helmet for Welding Trades</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
