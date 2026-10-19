import React from 'react';
import { Wind, Sun, Thermometer, Activity, HardHat, Bell } from 'lucide-react';

const FEATURES = [
  {
    icon: Wind,
    title: 'Welding Fume Monitoring',
    color: 'text-[#F58220]',
    bg: 'bg-[#FFF1E6]',
    border: 'border-[#F9D9B6]',
    description: 'A PM2.5 sensor monitors particulate matter in the surrounding environment to help identify potential welding-fume hazards.',
    note: 'PM2.5 measurements alone do not identify all welding contaminants or establish that an environment is safe.',
  },
  {
    icon: Sun,
    title: 'UV & IR Exposure Sensing',
    color: 'text-[#D86A00]',
    bg: 'bg-[#FFF7ED]',
    border: 'border-[#F8DDB8]',
    description: 'UV and infrared sensors are designed to detect arc-related radiation and support exposure awareness.',
    note: 'Does not provide certified exposure measurement or guaranteed protection.',
  },
  {
    icon: Thermometer,
    title: 'Temperature Monitoring',
    color: 'text-[#D53D3D]',
    bg: 'bg-[#FFF1F2]',
    border: 'border-[#F7CFCF]',
    description: 'A temperature sensor monitors surrounding heat conditions and can support configured warning thresholds for elevated-temperature environments.',
    note: '',
  },
  {
    icon: Activity,
    title: 'Fall Detection',
    color: 'text-[#2457A7]',
    bg: 'bg-[#EEF4FF]',
    border: 'border-[#D6E5FF]',
    description: 'An Inertial Measurement Unit (IMU) monitors movement patterns to support fall and abnormal-motion event detection.',
    note: 'Actual detection performance requires hardware testing and calibration.',
  },
  {
    icon: HardHat,
    title: 'Helmet-Wear Detection',
    color: 'text-[#15966A]',
    bg: 'bg-[#EAFBF5]',
    border: 'border-[#CFEFDF]',
    description: 'A wear-detection sensor in the inner liner helps identify whether the helmet is currently being worn, supporting compliance monitoring.',
    note: '',
  },
  {
    icon: Bell,
    title: 'Local Alert System',
    color: 'text-[#6A5AE0]',
    bg: 'bg-[#F3F1FF]',
    border: 'border-[#D9D2FF]',
    description: 'LED indicators, a vibration motor, and a buzzer provide local alerts when configured sensor thresholds are detected.',
    note: '',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="border-b border-[#E0E6ED] bg-[#F6F8FB]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E0E6ED] bg-white px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2457A7]">Key Features</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#172B4D] sm:text-4xl">Proposed Safety Features</h2>
          <p className="text-base leading-7 text-[#526176]">
            Six integrated sensing and alerting capabilities designed to improve hazard awareness for welding workers.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <article
                key={feat.title}
                className="group relative flex h-full flex-col justify-between rounded-[28px] border border-[#E0E6ED] bg-white p-6 shadow-[0_12px_24px_rgba(23,43,77,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DCE8FF]"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${feat.border} ${feat.bg}`}>
                  <Icon size={20} className={feat.color} />
                </div>

                <div className="mt-5 flex-1 space-y-2">
                  <h3 className="text-base font-bold text-[#172B4D]">{feat.title}</h3>
                  <p className="text-sm leading-7 text-[#526176]">{feat.description}</p>
                </div>

                {feat.note && (
                  <div className="mt-4 border-t border-[#EEF2F6] pt-3">
                    <p className="text-xs leading-6 italic text-[#75829A]">{feat.note}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
