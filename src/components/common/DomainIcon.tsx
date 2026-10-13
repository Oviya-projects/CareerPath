import React from 'react';
import {
  BarChart3,
  Code2,
  Cpu,
  Shield,
  Cloud,
  Palette,
  Terminal,
  Smartphone,
  LineChart,
  Database,
  PieChart,
  TrendingUp,
  Layers,
  Layout,
  Server,
  Sparkles,
  LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  BarChart3,
  Code2,
  Cpu,
  Shield,
  Cloud,
  Palette,
  Terminal,
  Smartphone,
  LineChart,
  Database,
  PieChart,
  TrendingUp,
  Layers,
  Layout,
  Server,
};

interface DomainIconProps {
  iconName?: string;
  className?: string;
  size?: number;
}

export const DomainIcon: React.FC<DomainIconProps> = ({
  iconName,
  className = 'w-6 h-6 text-blue-600',
  size = 24,
}) => {
  if (!iconName) {
    return <Sparkles size={size} className={className} />;
  }

  const IconComponent = ICON_MAP[iconName] || Sparkles;
  return <IconComponent size={size} className={className} />;
};
