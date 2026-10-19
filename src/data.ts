import type { Helmet, DemoEvent, TeamMember } from './types';

export const DEMO_HELMETS: Helmet[] = [
  {
    id: 'ST-001',
    label: 'Helmet ST-001',
    status: 'active',
    worn: true,
    connected: true,
    pm25: 38.4,
    temperature: 34.2,
    uvStatus: 'normal',
    irStatus: 'normal',
    imuStatus: 'moving',
    riskState: 'normal',
  },
  {
    id: 'ST-002',
    label: 'Helmet ST-002',
    status: 'alert',
    worn: true,
    connected: true,
    pm25: 87.6,
    temperature: 42.1,
    uvStatus: 'elevated',
    irStatus: 'elevated',
    imuStatus: 'stationary',
    riskState: 'caution',
  },
  {
    id: 'ST-003',
    label: 'Helmet ST-003',
    status: 'inactive',
    worn: false,
    connected: true,
    pm25: 12.1,
    temperature: 28.7,
    uvStatus: 'normal',
    irStatus: 'normal',
    imuStatus: 'stationary',
    riskState: 'normal',
  },
];

export const INITIAL_EVENTS: DemoEvent[] = [
  {
    id: 'evt-001',
    timestamp: '2026-10-19 14:52:10',
    helmetId: 'ST-002',
    eventType: 'PM2.5 Threshold Exceeded',
    severity: 'caution',
  },
  {
    id: 'evt-002',
    timestamp: '2026-10-19 14:48:33',
    helmetId: 'ST-001',
    eventType: 'UV Sensor: Normal Reading',
    severity: 'info',
  },
  {
    id: 'evt-003',
    timestamp: '2026-10-19 14:41:07',
    helmetId: 'ST-002',
    eventType: 'Temperature Alert: Elevated',
    severity: 'caution',
  },
  {
    id: 'evt-004',
    timestamp: '2026-10-19 14:35:21',
    helmetId: 'ST-003',
    eventType: 'Helmet Not Worn Detected',
    severity: 'info',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Om Prakash Mandal', role: 'Team Leader & System Integration', initials: 'OM', photo: '/Team/om-prakash.jpg.jpeg', isLeader: true },
  { name: 'Anusha Karki', role: 'Web Development & Dashboard Design', initials: 'AK', photo: '/Team/anusha.jpg.jpeg' },
  { name: 'Ashish Kumar Shah Gupta', role: 'Research & Documentation', initials: 'AS', photo: '/Team/ashish.jpg.jpeg' },
  { name: 'Laxman Chaudhary', role: 'Safety Analysis & Testing', initials: 'LC', photo: '/Team/laxman.jpg.jpeg' },
  { name: 'Piruthvi Saran A', role: 'Sensor Integration & Embedded Systems', initials: 'PS', photo: '/Team/piruthvi.jpg.jpeg' },
  { name: 'Mukesh M', role: 'Helmet Mechanical Design & Hardware Assembly', initials: 'MM', photo: '/Team/mukesh.jpg.jpeg' },
];
