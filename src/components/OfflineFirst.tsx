import React from 'react';
import { ArrowDown, Database, Cpu, Bell, Wifi, Monitor } from 'lucide-react';

const OfflineFirst: React.FC = () => {
  const archLeft = [
    { icon: ArrowDown, label: '', color: 'text-[#75829A]', isArrow: true },
    { icon: Cpu, label: 'Environmental & Motion Sensors', sub: 'PM2.5 · UV · IR · Temp · IMU · Wear', color: 'text-[#F58220]', bg: 'bg-[#FFF5EC]', border: 'border-[#F9D9B6]', isArrow: false },
    { icon: ArrowDown, label: '', color: 'text-[#75829A]', isArrow: true },
    { icon: Cpu, label: 'ESP32-S3 Controller', sub: 'Reads sensors · Evaluates thresholds · Manages alerts', color: 'text-[#2457A7]', bg: 'bg-[#EEF4FF]', border: 'border-[#D6E5FF]', isArrow: false },
    { icon: ArrowDown, label: '', color: 'text-[#75829A]', isArrow: true },
    { icon: Bell, label: 'Local Alerts', sub: 'LED indicator · Vibration motor · Buzzer', color: 'text-[#D53D3D]', bg: 'bg-[#FFF1F2]', border: 'border-[#F7CFCF]', isArrow: false },
  ];

  const archRight = [
    { icon: Cpu, label: 'ESP32-S3 (Helmet)', sub: 'Generates event records', color: 'text-[#F58220]', bg: 'bg-[#FFF5EC]', border: 'border-[#F9D9B6]' },
    { label: 'ESP-NOW (Short-range wireless)', isProtocol: true },
    { icon: Wifi, label: 'Nearby Gateway', sub: 'ESP32 or Raspberry Pi', color: 'text-[#2457A7]', bg: 'bg-[#EEF4FF]', border: 'border-[#D6E5FF]' },
    { label: 'Local Sync / Internet', isProtocol: true },
    { icon: Database, label: 'Local Event Storage', sub: 'SQLite on gateway', color: 'text-[#6A5AE0]', bg: 'bg-[#F3F1FF]', border: 'border-[#D9D2FF]' },
    { label: 'Web request', isProtocol: true },
    { icon: Monitor, label: 'Supervisor Dashboard', sub: 'Browser-based monitoring interface', color: 'text-[#15966A]', bg: 'bg-[#EAFBF5]', border: 'border-[#CFEFDF]' },
  ];

  return (
    <section id="offline-first" className="border-b border-[#E0E6ED] bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F9D9B6] bg-[#FFF8F2] px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F58220]">Architecture</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold text-[#172B4D] sm:text-4xl">
            Designed for Offline-First Safety Monitoring
          </h2>
          <p className="text-base leading-7 text-[#526176]">
            Local sensing and local alerts are designed to operate without an internet connection.
            Event records can be buffered locally and forwarded when connectivity becomes available,
            provided the corresponding firmware and gateway implement those functions.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#75829A]">Helmet-Side Processing</h3>
            <div className="flex flex-col items-center gap-1">
              {archLeft.map((item, i) => {
                if (item.isArrow) {
                  return <ArrowDown key={i} size={16} className="my-1 text-[#A4AEC1]" />;
                }
                const Icon = item.icon;
                return (
                  <div key={i} className={`w-full rounded-2xl border ${item.border} bg-[#F8FAFC] p-4`}>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${item.border} ${item.bg}`}>
                        <Icon size={15} className={item.color} />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${item.color}`}>{item.label}</p>
                        <p className="mt-0.5 text-xs leading-6 text-[#526176]">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#75829A]">Communication Path</h3>
            <div className="flex flex-col items-center gap-1">
              {archRight.map((item: any, i) => {
                if (item.isProtocol) {
                  return (
                    <div key={i} className="my-1 flex flex-col items-center gap-0.5">
                      <ArrowDown size={14} className="text-[#A4AEC1]" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#75829A]">{item.label}</span>
                      <ArrowDown size={14} className="text-[#A4AEC1]" />
                    </div>
                  );
                }
                const Icon = item.icon;
                return (
                  <div key={i} className={`w-full rounded-2xl border ${item.border} bg-[#F8FAFC] p-4`}>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${item.border} ${item.bg}`}>
                        <Icon size={15} className={item.color} />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${item.color}`}>{item.label}</p>
                        <p className="mt-0.5 text-xs leading-6 text-[#526176]">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#F9D9B6] bg-[#FFF8F2] p-5 text-center">
          <p className="text-sm leading-7 text-[#7A4B00]">
            <strong className="text-[#B36100]">Note:</strong> The website's dashboard is a demonstration using simulated data. The hardware, firmware, gateway software, and synchronization mechanisms described above require their own implementation and testing before operational use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfflineFirst;
