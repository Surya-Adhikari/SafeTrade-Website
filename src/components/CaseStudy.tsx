import React from 'react';
import { Eye, Lightbulb, Link2, Info } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const observations = [
    'Welding environments involve potential exposure to UV and IR radiation, elevated heat, and airborne fumes.',
    'Appropriate personal protective equipment — including auto-darkening helmets, gloves, and respiratory protection — is essential for worker safety.',
    'Timely hazard awareness and effective safety monitoring are important in workshop environments, particularly in smaller facilities.',
  ];

  const features = [
    'UV and IR sensing for arc-radiation awareness',
    'PM2.5 monitoring for fume detection',
    'Temperature sensing and threshold alerting',
    'IMU-based motion and fall detection',
    'Helmet-wear detection for compliance monitoring',
    'LED, vibration, and buzzer local alert system',
    'Connected dashboard for safety-event monitoring',
  ];

  return (
    <section id="case-study" className="border-b border-[#E0E6ED] bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F9D9B6] bg-[#FFF8F2] px-3 py-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F58220]">Case Study</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#172B4D] sm:text-4xl">Welding Workshop Visit</h2>
          <p className="text-base leading-7 text-[#526176]">
            Team Abacus visited a welding workshop to observe the working environment, equipment,
            and practical safety considerations associated with welding activities.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_1.4fr]">
          <div>
            <div className="mb-6 flex items-center justify-center rounded-[28px] border border-[#E0E6ED] bg-[#F8FAFC] p-6 shadow-[0_18px_36px_rgba(23,43,77,0.05)]">
              <div className="w-full rounded-[22px] border border-[#DCE5F0] bg-white p-4 shadow-inner shadow-[#EDF3FF]">
                <img
                  src="/Team/safety-helmet.png.jpeg"
                  alt="Safety helmet sensor diagram showing SafeTrade sensing components"
                  className="mx-auto w-full max-h-[420px] rounded-xl object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex gap-3 rounded-2xl border border-[#F9D9B6] bg-[#FFF8F2] p-4 shadow-sm">
              <Info size={16} className="mt-0.5 shrink-0 text-[#F58220]" />
              <p className="text-xs leading-6 text-[#526176]">
                This section documents workshop observation and informs the project concept.
                It does not establish prototype testing or validation.
                No invented dates, quotations, measurements, or testimonials are included.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[28px] border border-[#E0E6ED] bg-[#F8FAFC] p-6 shadow-[0_12px_24px_rgba(23,43,77,0.04)]">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#F9D9B6] bg-[#FFF5EC]">
                  <Eye size={15} className="text-[#F58220]" />
                </div>
                <h3 className="text-sm font-bold text-[#172B4D]">Key Observations</h3>
              </div>
              <ul className="space-y-4">
                {observations.map((obs, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 font-mono text-[10px] font-bold text-[#F58220]">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm leading-7 text-[#526176]">{obs}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#E0E6ED] bg-[#F8FAFC] p-6 shadow-[0_12px_24px_rgba(23,43,77,0.04)]">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#CFEFDF] bg-[#EAFBF5]">
                  <Link2 size={15} className="text-[#15966A]" />
                </div>
                <h3 className="text-sm font-bold text-[#172B4D]">Connection to SafeTrade</h3>
              </div>
              <p className="mb-4 text-xs leading-6 text-[#526176]">
                Observations from the workshop visit informed the SafeTrade concept — a proposed smart helmet with:
              </p>
              <ul className="space-y-2">
                {features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-xs leading-6 text-[#526176]">
                    <span className="mt-0.5 shrink-0 text-[#15966A]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#E0E6ED] bg-[#F8FAFC] p-6 shadow-[0_12px_24px_rgba(23,43,77,0.04)] sm:col-span-2">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D6E5FF] bg-[#EEF4FF]">
                  <Lightbulb size={15} className="text-[#2457A7]" />
                </div>
                <h3 className="text-sm font-bold text-[#172B4D]">Outcome</h3>
              </div>
              <p className="text-sm leading-7 text-[#526176]">
                The workshop visit helped Team Abacus relate the SafeTrade concept to a practical welding
                environment and identify opportunities for technology-assisted hazard awareness. It provided
                valuable context for sensor selection, alert design, and the monitoring dashboard concept.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
