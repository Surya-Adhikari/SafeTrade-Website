import React, { useState, useCallback } from 'react';
import {
  HardHat, Wifi, WifiOff, AlertTriangle, CheckCircle, Activity,
  Thermometer, Wind, Sun, Zap, Bell, Play, RotateCcw,
  ChevronDown, Info, Clock
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import type { Helmet, DemoEvent } from '../types';
import { DEMO_HELMETS, INITIAL_EVENTS } from '../data';

// ---- Helpers ----
const now = () => {
  const d = new Date();
  return d.toLocaleString('en-IN', { hour12: false }).replace(',', '');
};

const randBetween = (min: number, max: number, dp = 1) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(dp));

const genChartData = (baseVal: number, label: string, count = 10) =>
  Array.from({ length: count }, (_, i) => ({
    time: `T-${count - i}`,
    [label]: parseFloat((baseVal + (Math.random() - 0.5) * baseVal * 0.2).toFixed(1)),
  }));

type RiskState = 'normal' | 'caution' | 'warning';

const RISK_CONFIGS: Record<RiskState, { pm25: [number,number]; temp: [number,number]; uv: Helmet['uvStatus']; ir: Helmet['irStatus'] }> = {
  normal:  { pm25: [10, 35],  temp: [25, 33], uv: 'normal',   ir: 'normal' },
  caution: { pm25: [50, 85],  temp: [38, 45], uv: 'elevated', ir: 'elevated' },
  warning: { pm25: [90, 150], temp: [48, 60], uv: 'high',     ir: 'elevated' },
};

// ---- Sub-components ----
interface SensorBadgeProps {
  label: string;
  value: string | number;
  unit?: string;
  status: 'ok' | 'caution' | 'warning';
  icon: React.ElementType;
}
const SensorBadge: React.FC<SensorBadgeProps> = ({ label, value, unit, status, icon: Icon }) => {
  const colors = {
    ok:      { bg: 'bg-[#EAFBF5]', border: 'border-[#CFEFDF]', text: 'text-[#15966A]', val: 'text-[#15966A]' },
    caution: { bg: 'bg-[#FFF7ED]', border: 'border-[#F8DDB8]', text: 'text-[#D86A00]', val: 'text-[#D86A00]' },
    warning: { bg: 'bg-[#FFF1F2]', border: 'border-[#F7CFCF]', text: 'text-[#D53D3D]', val: 'text-[#D53D3D]' },
  }[status];

  return (
    <div className={`rounded-xl border p-3 ${colors.bg} ${colors.border}`}>
      <div className="mb-1.5 flex items-center gap-2">
        <Icon size={14} className={colors.text} />
        <span className="text-xs font-medium text-[#526176]">{label}</span>
      </div>
      <div className={`text-lg font-bold font-mono ${colors.val}`}>
        {value}{unit && <span className="ml-0.5 text-sm font-normal opacity-80">{unit}</span>}
      </div>
    </div>
  );
};

interface OverviewCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  sub?: string;
  accent?: string;
}
const OverviewCard: React.FC<OverviewCardProps> = ({ label, value, icon: Icon, sub, accent = 'text-[#F58220]' }) => (
  <div className="rounded-[20px] border border-[#E0E6ED] bg-[#F8FAFC] p-5 shadow-[0_10px_20px_rgba(23,43,77,0.03)]">
    <div className="mb-3 flex items-start justify-between">
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg border border-[#E0E6ED] bg-white ${accent}`}>
        <Icon size={17} />
      </div>
    </div>
    <p className="font-mono text-2xl font-bold text-[#172B4D]">{value}</p>
    <p className="mt-0.5 text-sm font-medium text-[#172B4D]">{label}</p>
    {sub && <p className="mt-1 text-xs text-[#75829A]">{sub}</p>}
  </div>
);

// ---- Main Dashboard ----
const Dashboard: React.FC = () => {
  const [helmets, setHelmets] = useState<Helmet[]>(DEMO_HELMETS);
  const [selectedId, setSelectedId] = useState<string>('ST-001');
  const [events, setEvents] = useState<DemoEvent[]>(INITIAL_EVENTS);
  const [riskState, setRiskState] = useState<RiskState>('normal');

  const selected = helmets.find(h => h.id === selectedId) ?? helmets[0];

  // Derive sensor statuses
  const pm25Status = selected.pm25 > 85 ? 'warning' : selected.pm25 > 45 ? 'caution' : 'ok';
  const tempStatus = selected.temperature > 46 ? 'warning' : selected.temperature > 37 ? 'caution' : 'ok';
  const uvStatus = selected.uvStatus === 'high' ? 'warning' : selected.uvStatus === 'elevated' ? 'caution' : 'ok';
  const irStatus = selected.irStatus === 'elevated' ? 'caution' : 'ok';
  const imuStatus: 'ok' | 'caution' | 'warning' = selected.imuStatus === 'fall_detected' ? 'warning' : selected.imuStatus === 'moving' ? 'ok' : 'ok';
  const wornStatus: 'ok' | 'caution' | 'warning' = selected.worn ? 'ok' : 'warning';

  // Chart data
  const pm25Chart = genChartData(selected.pm25, 'PM2.5');
  const tempChart = genChartData(selected.temperature, 'Temp');

  // Overview metrics
  const wornCount = helmets.filter(h => h.worn).length;
  const connCount = helmets.filter(h => h.connected).length;


  const applyRiskToHelmet = useCallback((currentHelmets: Helmet[], id: string, risk: RiskState): Helmet[] => {
    const cfg = RISK_CONFIGS[risk];
    return currentHelmets.map((h) => {
      if (h.id !== id) return h;
      return {
        ...h,
        pm25: randBetween(...cfg.pm25),
        temperature: randBetween(...cfg.temp),
        uvStatus: cfg.uv,
        irStatus: cfg.ir,
        riskState: risk,
        status: risk === 'warning' ? 'alert' : risk === 'caution' ? 'alert' : 'active',
      };
    });
  }, []);

  const handleRiskChange = (newRisk: RiskState) => {
    setRiskState(newRisk);
    setHelmets(prev => applyRiskToHelmet(prev, selectedId, newRisk));
  };

  const handleHelmetChange = (id: string) => {
    setSelectedId(id);
    setRiskState(helmets.find(h => h.id === id)?.riskState ?? 'normal');
  };

  const handleGenerateEvent = () => {
    const eventTypes: Record<RiskState, string[]> = {
      normal: ['Helmet Status: Normal', 'Sensor Check: OK', 'Connection: Active'],
      caution: ['PM2.5 Elevated', 'Temperature: Caution Level', 'UV Sensor: Elevated Reading'],
      warning: ['PM2.5 High Level', 'Temperature: Warning Level', 'UV Sensor: High Reading', 'IR Sensor: Elevated'],
    };
    const types = eventTypes[riskState];
    const newEvent: DemoEvent = {
      id: `evt-${Date.now()}`,
      timestamp: now(),
      helmetId: selectedId,
      eventType: types[Math.floor(Math.random() * types.length)],
      severity: riskState === 'warning' ? 'warning' : riskState === 'caution' ? 'caution' : 'info',
    };
    setEvents(prev => [newEvent, ...prev].slice(0, 15));
  };

  const handleReset = () => {
    setHelmets(DEMO_HELMETS.map(h => ({ ...h })));
    setEvents(INITIAL_EVENTS.map(e => ({ ...e })));
    setSelectedId('ST-001');
    setRiskState('normal');
  };

  const SEVERITY_STYLES = {
    info:    { bg: 'bg-blue-500/10',  border: 'border-blue-500/20',  text: 'text-blue-300',  dot: 'bg-blue-400' },
    caution: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-300', dot: 'bg-amber-400' },
    warning: { bg: 'bg-red-500/10',   border: 'border-red-500/20',   text: 'text-red-300',   dot: 'bg-red-400' },
  };

  const RISK_STYLES: Record<RiskState, { bg: string; border: string; text: string; label: string }> = {
    normal:  { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', label: 'Normal' },
    caution: { bg: 'bg-amber-500/10',   border: 'border-amber-500/30',   text: 'text-amber-400',   label: 'Caution' },
    warning: { bg: 'bg-red-500/10',     border: 'border-red-500/30',     text: 'text-red-400',     label: 'Warning' },
  };

  return (
    <section id="dashboard" className="border-b border-[#E0E6ED] bg-[#F3F5F7]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="rounded-[30px] border border-[#E0E6ED] bg-white p-6 shadow-[0_18px_36px_rgba(23,43,77,0.06)]">
          <div className="mb-8 flex items-center gap-3 rounded-2xl border border-[#F9D9B6] bg-[#FFF8F2] p-4">
            <AlertTriangle size={18} className="shrink-0 text-[#F58220]" />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B36100]">
                DEMO MODE — SIMULATED DATA
              </p>
              <p className="mt-0.5 text-xs leading-6 text-[#7A4B00]">
                This dashboard is not connected to real hardware. All sensor readings, helmet statuses,
                and events shown are simulated for demonstration purposes only.
              </p>
            </div>
          </div>

          <div className="mb-8 grid gap-4 rounded-[28px] border border-[#E0E6ED] bg-[#F8FAFC] p-5 shadow-[0_12px_24px_rgba(23,43,77,0.04)] sm:grid-cols-2 lg:grid-cols-4">
          {/* Helmet selector */}
          <div>
            <label className="text-xs text-slate-400 font-semibold uppercase tracking-widest block mb-2">
              Select Helmet
            </label>
            <div className="relative">
              <select
                value={selectedId}
                onChange={e => handleHelmetChange(e.target.value)}
                className="w-full rounded-lg border border-[#D7E5FF] bg-white px-3 py-2.5 pr-8 text-sm text-[#172B4D] shadow-sm transition-colors focus:border-[#2457A7] focus:outline-none"
                aria-label="Select helmet"
              >
                {helmets.map(h => (
                  <option key={h.id} value={h.id}>{h.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Risk state */}
          <div>
            <label className="text-xs text-slate-400 font-semibold uppercase tracking-widest block mb-2">
              Simulated State
            </label>
            <div className="flex gap-2">
              {(['normal', 'caution', 'warning'] as RiskState[]).map(r => {
                const s = RISK_STYLES[r];
                return (
                  <button
                    key={r}
                    onClick={() => handleRiskChange(r)}
                    className={`flex-1 rounded-lg border py-2 text-xs font-bold transition-all ${
                      riskState === r
                        ? `${s.bg} ${s.border} ${s.text}`
                        : 'border-[#E0E6ED] bg-white text-[#526176] hover:border-[#D7E5FF]'
                    }`}
                    aria-pressed={riskState === r}
                    aria-label={`Set risk state to ${r}`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generate event */}
          <div>
            <label className="text-xs text-slate-400 font-semibold uppercase tracking-widest block mb-2">
              Generate Event
            </label>
            <button
              onClick={handleGenerateEvent}
              className="btn-primary w-full py-2.5 text-sm"
              aria-label="Generate a sample demo event"
            >
              <Play size={14} />
              Sample Event
            </button>
          </div>

          {/* Reset */}
          <div>
            <label className="text-xs text-slate-400 font-semibold uppercase tracking-widest block mb-2">
              Reset Demo
            </label>
            <button
              onClick={handleReset}
              className="btn-ghost w-full py-2.5 text-sm"
              aria-label="Reset all demonstration data"
            >
              <RotateCcw size={14} />
              Reset All
            </button>
          </div>
        </div>

          {/* Overview Cards */}
          <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <OverviewCard
              icon={HardHat}
              label="Demo Helmets"
              value={helmets.length}
              sub="In demonstration"
              accent="text-orange-400"
            />
            <OverviewCard
              icon={selected.worn ? CheckCircle : AlertTriangle}
              label="Worn / Total"
              value={`${wornCount}/${helmets.length}`}
              sub="Helmet-wear status"
              accent={wornCount === helmets.length ? 'text-emerald-400' : 'text-amber-400'}
            />
            <OverviewCard
              icon={Wifi}
              label="Connected"
              value={`${connCount}/${helmets.length}`}
              sub="Simulated connection"
              accent="text-blue-400"
            />
            <OverviewCard
              icon={Bell}
              label="Demo Events"
              value={events.length}
              sub="Recorded in session"
              accent="text-purple-400"
            />
          </div>

          {/* Main content grid */}
          <div className="mb-6 grid gap-6 lg:grid-cols-3">

          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center justify-between rounded-2xl border border-[#E0E6ED] bg-[#F8FAFC] p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full ${
                  selected.status === 'alert' ? 'bg-[#D53D3D]' : selected.status === 'active' ? 'bg-[#15966A]' : 'bg-[#75829A]'
                } animate-pulse`} />
                <div>
                  <p className="text-sm font-bold text-[#172B4D]">{selected.label}</p>
                  <p className="text-xs text-[#526176]">
                    {selected.connected ? '✓ Connected (simulated)' : '✗ Not connected'} ·{' '}
                    {selected.worn ? '✓ Worn' : '✗ Not worn'}
                  </p>
                </div>
              </div>
              <div className={`px-3 py-1 text-xs font-bold rounded-full ${RISK_STYLES[selected.riskState].bg} ${RISK_STYLES[selected.riskState].border} ${RISK_STYLES[selected.riskState].text}`}>
                {RISK_STYLES[selected.riskState].label}
              </div>
            </div>

            {/* Sensor grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <SensorBadge label="PM2.5" value={selected.pm25} unit="µg/m³" status={pm25Status} icon={Wind} />
              <SensorBadge label="Temperature" value={selected.temperature} unit="°C" status={tempStatus} icon={Thermometer} />
              <SensorBadge label="UV Sensor" value={selected.uvStatus === 'high' ? 'High' : selected.uvStatus === 'elevated' ? 'Elevated' : 'Normal'} status={uvStatus} icon={Sun} />
              <SensorBadge label="IR Sensor" value={selected.irStatus === 'elevated' ? 'Elevated' : 'Normal'} status={irStatus} icon={Zap} />
              <SensorBadge label="IMU / Motion" value={selected.imuStatus === 'fall_detected' ? 'FALL' : selected.imuStatus === 'moving' ? 'Moving' : 'Stationary'} status={imuStatus} icon={Activity} />
              <SensorBadge label="Helmet Worn" value={selected.worn ? 'Worn' : 'Not Worn'} status={wornStatus} icon={HardHat} />
            </div>

            {/* PM2.5 Chart */}
            <div className="rounded-2xl border border-[#E0E6ED] bg-[#F8FAFC] p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Wind size={14} className="text-[#F58220]" />
                <p className="text-sm font-semibold text-[#172B4D]">PM2.5 — Illustrative Reading (µg/m³)</p>
                <span className="ml-auto text-xs italic text-[#75829A]">Simulated data</span>
              </div>
              <ResponsiveContainer width="100%" height={140}>
                <LineChart data={pm25Chart}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} width={30} />
                  <Tooltip
                    contentStyle={{ background: '#FFFFFF', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, fontSize: 12, color: '#172B4D' }}
                    labelStyle={{ color: '#526176' }}
                    itemStyle={{ color: '#F58220' }}
                  />
                  <Line type="monotone" dataKey="PM2.5" stroke="#f97316" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Temperature Chart */}
            <div className="rounded-2xl border border-[#E0E6ED] bg-[#F8FAFC] p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Thermometer size={14} className="text-[#D53D3D]" />
                <p className="text-sm font-semibold text-[#172B4D]">Temperature — Illustrative Reading (°C)</p>
                <span className="ml-auto text-xs italic text-[#75829A]">Simulated data</span>
              </div>
              <ResponsiveContainer width="100%" height={140}>
                <LineChart data={tempChart}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} width={30} />
                  <Tooltip
                    contentStyle={{ background: '#FFFFFF', border: '1px solid rgba(148,163,184,0.35)', borderRadius: 8, fontSize: 12, color: '#172B4D' }}
                    labelStyle={{ color: '#526176' }}
                    itemStyle={{ color: '#D53D3D' }}
                  />
                  <Line type="monotone" dataKey="Temp" stroke="#ef4444" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right: Helmet fleet + events */}
          <div className="space-y-4">
            {/* Helmet fleet */}
            <div className="rounded-2xl border border-[#E0E6ED] bg-[#F8FAFC] p-5 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#172B4D]">
                <HardHat size={14} className="text-[#F58220]" />
                Helmet Fleet
              </h3>
              <div className="space-y-2.5">
                {helmets.map(h => (
                  <button
                    key={h.id}
                    onClick={() => handleHelmetChange(h.id)}
                    className={`w-full rounded-xl border p-3 text-left transition-all ${
                      selectedId === h.id
                        ? 'border-[#F9D9B6] bg-[#FFF8F2]'
                        : 'border-[#E0E6ED] bg-white hover:border-[#D7E5FF]'
                    }`}
                    aria-pressed={selectedId === h.id}
                    aria-label={`Select ${h.label}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`h-2 w-2 shrink-0 rounded-full ${
                        h.status === 'alert' ? 'bg-[#D53D3D] animate-pulse'
                        : h.status === 'active' ? 'bg-[#15966A]'
                        : 'bg-[#75829A]'
                      }`} />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#172B4D]">{h.label}</p>
                        <div className="mt-0.5 flex gap-2">
                          <span className={`text-xs ${h.worn ? 'text-[#15966A]' : 'text-[#D86A00]'}`}>
                            {h.worn ? 'Worn' : 'Not Worn'}
                          </span>
                          <span className="text-[#BDC8D9] text-xs">·</span>
                          <span className={`text-xs font-mono ${RISK_STYLES[h.riskState].text}`}>
                            {RISK_STYLES[h.riskState].label}
                          </span>
                        </div>
                      </div>
                      {h.connected
                        ? <Wifi size={12} className="shrink-0 text-[#15966A]" />
                        : <WifiOff size={12} className="shrink-0 text-[#75829A]" />
                      }
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Event history */}
            <div className="rounded-2xl border border-[#E0E6ED] bg-[#F8FAFC] p-5 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#172B4D]">
                <Clock size={14} className="text-[#6A5AE0]" />
                Event History
                <span className="ml-auto text-xs text-[#75829A]">Demo only</span>
              </h3>
              <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
                {events.map(ev => {
                  const s = SEVERITY_STYLES[ev.severity];
                  return (
                    <div key={ev.id} className={`rounded-lg border p-2.5 ${s.bg} ${s.border}`}>
                      <div className="flex items-start gap-2">
                        <div className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${s.dot}`} />
                        <div className="min-w-0 flex-1">
                          <p className={`text-xs font-semibold leading-tight ${s.text}`}>{ev.eventType}</p>
                          <div className="mt-0.5 flex items-center gap-1.5">
                            <span className="font-mono text-xs text-[#75829A]">{ev.helmetId}</span>
                            <span className="text-[#A4AEC1]">·</span>
                            <span className="text-xs text-[#526176]">{ev.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

          {/* Alert box (conditional) */}
          {selected.riskState !== 'normal' && (
            <div className={`flex gap-3 p-4 ${RISK_STYLES[selected.riskState].bg} border ${RISK_STYLES[selected.riskState].border} rounded-xl shadow-sm`}>
              <AlertTriangle size={18} className={`${RISK_STYLES[selected.riskState].text} flex-shrink-0`} />
              <div>
                <p className={`text-sm font-bold ${RISK_STYLES[selected.riskState].text}`}>
                  DEMO ALERT — {RISK_STYLES[selected.riskState].label.toUpperCase()} STATE ({selected.label})
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  This is a demonstration alert. No real emergency notification has been sent.
                  No real hardware is connected. This simulated alert is for interface demonstration only.
                </p>
              </div>
            </div>
          )}

          {/* Info note */}
          <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-[#E0E6ED] bg-[#F8FAFC] p-4 shadow-sm">
            <Info size={15} className="mt-0.5 shrink-0 text-[#526176]" />
            <p className="text-xs leading-6 text-[#526176]">
              All readings displayed are <strong className="text-[#172B4D]">simulated demonstration values</strong> generated in the browser.
              Risk scores shown are for interface demonstration only and are not scientifically validated measurements.
              No data is transmitted to any server or supervisor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
