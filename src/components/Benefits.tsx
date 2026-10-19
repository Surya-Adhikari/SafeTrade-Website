import React from 'react';
import { Eye, WifiOff, LayoutDashboard, FileText, BarChart2 } from 'lucide-react';

const BENEFITS = [
  {
    icon: Eye,
    title: 'Improved Hazard Awareness',
    description: 'Real-time sensor readings support improved awareness of selected welding hazards including particulate matter, radiation, and heat.',
    color: 'text-[#F58220]',
    bg: 'bg-[#FFF5EC]',
    border: 'border-[#F9D9B6]',
  },
  {
    icon: WifiOff,
    title: 'Offline-First Local Warnings',
    description: 'Local LED, vibration, and audible alerts function without dependence on internet connectivity or cloud infrastructure.',
    color: 'text-[#D86A00]',
    bg: 'bg-[#FFF7ED]',
    border: 'border-[#F8DDB8]',
  },
  {
    icon: LayoutDashboard,
    title: 'Multi-Helmet Monitoring',
    description: 'A supervisor dashboard supports monitoring of multiple helmets, enabling workshop-level visibility into safety-sensor states.',
    color: 'text-[#2457A7]',
    bg: 'bg-[#EEF4FF]',
    border: 'border-[#D6E5FF]',
  },
  {
    icon: FileText,
    title: 'Incident & Near-Miss Logging',
    description: 'The system records safety events locally, creating a log for later review by supervisors or safety officers.',
    color: 'text-[#15966A]',
    bg: 'bg-[#EAFBF5]',
    border: 'border-[#CFEFDF]',
  },
  {
    icon: BarChart2,
    title: 'Safety-Event Visibility',
    description: 'Better access to workshop safety-event information supports more informed decisions about safety practices and equipment.',
    color: 'text-[#6A5AE0]',
    bg: 'bg-[#F3F1FF]',
    border: 'border-[#D9D2FF]',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="border-b border-[#E0E6ED] bg-[#F6F8FB]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F9D9B6] bg-[#FFF8F2] px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F58220]">Expected Benefits</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#172B4D] sm:text-4xl">Expected Benefits</h2>
          <p className="text-base leading-7 text-[#526176]">
            These are <strong className="text-[#172B4D]">expected benefits</strong> of the proposed system,
            not proven outcomes. No performance guarantees, accuracy figures, or productivity claims are made.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <article
                key={b.title}
                className="flex h-full flex-col justify-between rounded-[28px] border border-[#E0E6ED] bg-white p-6 shadow-[0_12px_24px_rgba(23,43,77,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DCE8FF]"
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border ${b.border} ${b.bg}`}>
                  <Icon size={18} className={b.color} />
                </div>
                <h3 className="mb-2 text-base font-bold text-[#172B4D]">{b.title}</h3>
                <p className="text-sm leading-7 text-[#526176]">{b.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
