import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const steps = [
    { label: 'Sense Hazards', color: 'text-[#F58220]', desc: 'Sensors capture environmental and motion data' },
    { label: 'Process Readings', color: 'text-[#2457A7]', desc: 'ESP32-S3 evaluates sensor values against thresholds' },
    { label: 'Alert Locally', color: 'text-[#15966A]', desc: 'LED, vibration, and buzzer notify the wearer' },
    { label: 'Communicate Events', color: 'text-[#2457A7]', desc: 'ESP-NOW transmits event data to a nearby gateway' },
    { label: 'Monitor Incidents', color: 'text-[#15966A]', desc: 'Dashboard enables supervisory review of safety events' },
  ];

  return (
    <section id="about" className="border-b border-[#E0E6ED] bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E0E6ED] bg-[#F6F9FC] px-3 py-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2457A7]">About the Project</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#172B4D] sm:text-4xl">About SafeTrade</h2>
          <p className="text-lg leading-8 text-[#526176]">
            Welding environments can involve airborne fumes, UV and infrared radiation, elevated temperatures,
            and physical hazards. Traditional personal protective equipment addresses many of these risks,
            but visibility into real-time conditions and event history remains limited in many small workshops.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="leading-8 text-[#526176]">
              The proposed SafeTrade system combines <strong className="text-[#172B4D]">sensor readings</strong>,{' '}
              <strong className="text-[#172B4D]">local alerts</strong>,{' '}
              <strong className="text-[#172B4D]">wireless communication</strong>, and{' '}
              <strong className="text-[#172B4D]">event monitoring</strong> to help improve hazard awareness in welding workshops.
              The system is designed to operate offline-first, ensuring local warnings work without an internet connection.
            </p>

            <p className="leading-8 text-[#526176]">
              A supervisor dashboard provides a view of helmet status, sensor readings, and safety events across multiple workers —
              supporting a more informed safety-management approach for workshop operators.
            </p>

            <div className="flex gap-3 rounded-2xl border border-[#F9D9B6] bg-[#FFF8F2] p-4 shadow-sm">
              <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#F58220]" />
              <div>
                <p className="mb-1 text-sm font-semibold text-[#B36100]">Safety Disclaimer</p>
                <p className="text-sm leading-7 text-[#526176]">
                  SafeTrade is intended to <strong className="text-[#172B4D]">supplement</strong> certified protective equipment and established welding-safety procedures,
                  not replace them. It does not constitute certified safety equipment.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#75829A]">Central Concept</h3>
            {steps.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="group flex items-center gap-4 rounded-[22px] border border-[#E0E6ED] bg-[#F8FAFC] p-4 shadow-[0_10px_20px_rgba(23,43,77,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D7E5FF]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white font-bold text-sm text-[#172B4D] shadow-sm ring-1 ring-[#E0E6ED]">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-base font-semibold ${step.color}`}>{step.label}</p>
                    <p className="mt-0.5 text-sm leading-6 text-[#526176]">{step.desc}</p>
                  </div>
                  <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-white text-[#526176] shadow-sm ring-1 ring-[#E0E6ED] transition-colors group-hover:bg-[#F3F6FB] sm:flex">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
