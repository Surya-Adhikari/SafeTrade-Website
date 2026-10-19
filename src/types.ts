// Shared types for the SafeTrade application

export interface Helmet {
  id: string;
  label: string;
  status: 'active' | 'inactive' | 'alert';
  worn: boolean;
  connected: boolean;
  pm25: number;
  temperature: number;
  uvStatus: 'normal' | 'elevated' | 'high';
  irStatus: 'normal' | 'elevated';
  imuStatus: 'stationary' | 'moving' | 'fall_detected';
  riskState: 'normal' | 'caution' | 'warning';
}

export interface DemoEvent {
  id: string;
  timestamp: string;
  helmetId: string;
  eventType: string;
  severity: 'info' | 'caution' | 'warning';
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  isLeader?: boolean;
}
