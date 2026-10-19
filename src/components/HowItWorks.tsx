import React from 'react';
import { Radio, Cpu, BellRing, Wifi, Monitor, Zap } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    icon: Radio,
    title: 'Sense',
    color: 'text-[#F58220]',
    borderColor: 'border-[#F9D9B6]',
    bgColor: 'bg-[#FFF5EC]',
    description: 'Sensors collect environmental and motion-related readings — PM2.5, UV, IR, temperature, IMU, and helmet-wear status.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Process',
    color: 'text-[#2457A7]',
    borderColor: 'border-[#D6E5FF]',
    bgColor: 'bg-[#EEF4FF]',
    description: 'The ESP32-S3 controller evaluates sensor readings against configured thresholds in real time.',
  },
  {
    number: '03',
    icon: BellRing,
    title: 'Alert',
    color: 'text-[#15966A]',
    borderColor: 'border-[#CFEFDF]',
    bgColor: 'bg-[#EAFBF5]',
    description: 'The helmet provides local visual (LED), vibration, and audible (buzzer) alerts when configured conditions are detected.',
  },
  {
    number: '04',
    icon: Wifi,
    title: 'Communicate',
    color: 'text-[#2457A7]',
    borderColor: 'border-[#DCE8FF]',
    bgColor: 'bg-[#F4F8FF]',
    description: 'ESP-NOW transmits event data over a short-range wireless connection to a nearby gateway device.',
  },
  {
    number: '05',
    icon: Monitor,
    title: 'Monitor',
    color: 'text-[#15966A]',
    borderColor: 'border-[#CFEFDF]',
    bgColor: 'bg-[#EFFAF4]',
    description: 'The gateway stores records locally and forwards them when connectivity is available. A supervisor dashboard supports helmet-status monitoring and incident review.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="border-b border-[#E0E6ED] bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F9D9B6] bg-[#FFF8F2] px-3 py-1">
            <Zap size={12} className="text-[#F58220]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F58220]">How It Works</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#172B4D] sm:text-4xl">Five-Step Safety Pipeline</h2>
          <p className="text-base leading-7 text-[#526176]">
            From sensor detection to supervisor visibility — a cohesive safety workflow designed for welding environments.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:absolute lg:inset-x-0 lg:top-16 lg:block lg:h-px lg:bg-gradient-to-r lg:from-transparent lg:via-[#D7E5FF] lg:to-transparent" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="group relative flex flex-col items-center text-center">
                  <div className={`mb-4 flex h-16 w-16 flex-col items-center justify-center rounded-2xl border ${step.borderColor} ${step.bgColor} transition-transform duration-300 group-hover:scale-[1.03]`}>
                    <Icon size={22} className={step.color} />
                    <span className={`mt-0.5 font-mono text-[10px] font-bold ${step.color} opacity-70`}>{step.number}</span>
                  </div>

                  <h3 className={`mb-2 text-base font-bold ${step.color}`}>{step.title}</h3>
                  <p className="text-xs leading-6 text-[#526176]">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#E0E6ED] bg-[#F8FAFC] p-4 text-center">
          <p className="text-xs leading-6 text-[#526176]">
            This pipeline describes the <strong className="text-[#172B4D]">proposed system design</strong>.
            Hardware, firmware, gateway software, and synchronization mechanisms each require independent
            implementation and testing before operational use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
