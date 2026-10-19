import React from 'react';
import { Cpu, Radio, Bell, Wifi, Database, Globe, Layers } from 'lucide-react';

const STACK_CATEGORIES = [
  {
    icon: Cpu,
    title: 'Controller',
    color: 'text-[#F58220]',
    bg: 'bg-[#FFF5EC]',
    border: 'border-[#F9D9B6]',
    items: [{ name: 'ESP32-S3', detail: 'Dual-core MCU with Wi-Fi/BT, sensor processing, and ESP-NOW support' }],
  },
  {
    icon: Radio,
    title: 'Sensors',
    color: 'text-[#D86A00]',
    bg: 'bg-[#FFF7ED]',
    border: 'border-[#F8DDB8]',
    items: [
      { name: 'PM2.5 Sensor', detail: 'Particulate matter monitoring for fume detection' },
      { name: 'UV Sensor', detail: 'Arc-radiation detection in ultraviolet spectrum' },
      { name: 'IR Sensor', detail: 'Infrared radiation sensing for heat-source detection' },
      { name: 'Temperature Sensor', detail: 'Ambient heat monitoring' },
      { name: 'IMU (6-DOF)', detail: 'Motion and orientation for fall detection' },
      { name: 'Wear Sensor', detail: 'Inner-liner contact detection' },
    ],
  },
  {
    icon: Bell,
    title: 'Local Alerts',
    color: 'text-[#D53D3D]',
    bg: 'bg-[#FFF1F2]',
    border: 'border-[#F7CFCF]',
    items: [
      { name: 'LED Indicators', detail: 'Visual status and alert signals' },
      { name: 'Vibration Motor', detail: 'Haptic alert for wearer notification' },
      { name: 'Buzzer', detail: 'Audible alert for threshold conditions' },
    ],
  },
  {
    icon: Wifi,
    title: 'Wireless',
    color: 'text-[#2457A7]',
    bg: 'bg-[#EEF4FF]',
    border: 'border-[#D6E5FF]',
    items: [{ name: 'ESP-NOW', detail: 'Short-range peer-to-peer wireless protocol for event transmission' }],
  },
  {
    icon: Globe,
    title: 'Gateway',
    color: 'text-[#15966A]',
    bg: 'bg-[#EAFBF5]',
    border: 'border-[#CFEFDF]',
    items: [{ name: 'ESP32 / Raspberry Pi', detail: 'Receives events from helmets via ESP-NOW, stores locally' }],
  },
  {
    icon: Database,
    title: 'Local Storage',
    color: 'text-[#6A5AE0]',
    bg: 'bg-[#F3F1FF]',
    border: 'border-[#D9D2FF]',
    items: [{ name: 'SQLite', detail: 'Lightweight embedded database for offline event storage on the gateway' }],
  },
  {
    icon: Layers,
    title: 'Interface',
    color: 'text-[#2457A7]',
    bg: 'bg-[#F3F8FF]',
    border: 'border-[#D9E9FF]',
    items: [{ name: 'Web Dashboard', detail: 'Browser-based supervisor interface for helmet status and incident review (React + TypeScript)' }],
  },
];

const Technology: React.FC = () => {
  return (
    <section id="technology" className="border-b border-[#E0E6ED] bg-[#F6F8FB]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E0E6ED] bg-white px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2457A7]">Technology Stack</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#172B4D] sm:text-4xl">Proposed Technical Architecture</h2>
          <p className="text-base leading-7 text-[#526176]">
            A hardware and software stack selected for cost-effectiveness, offline capability, and extensibility.
            Individual components require separate integration and testing.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {STACK_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="flex h-full flex-col justify-between rounded-[28px] border border-[#E0E6ED] bg-white p-5 shadow-[0_12px_24px_rgba(23,43,77,0.04)]">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${cat.border} ${cat.bg}`}>
                    <Icon size={17} className={cat.color} />
                  </div>
                  <h3 className={`text-sm font-bold ${cat.color}`}>{cat.title}</h3>
                </div>

                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div key={item.name}>
                      <p className="text-sm font-semibold text-[#172B4D]">{item.name}</p>
                      <p className="mt-0.5 text-xs leading-6 text-[#526176]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#E0E6ED] bg-[#F8FAFC] p-4 text-center">
          <p className="text-xs leading-6 text-[#526176]">
            The components listed describe the <strong className="text-[#172B4D]">proposed system design</strong>.
            Not all components are currently integrated or operational. Each subsystem requires independent implementation and testing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
