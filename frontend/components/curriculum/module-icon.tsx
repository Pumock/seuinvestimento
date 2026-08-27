import {
  Compass,
  Target,
  Wallet,
  TrendingUp,
  Umbrella,
  ShieldCheck,
  Landmark,
  Scale,
  Brain,
  GraduationCap,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const map: Record<string, LucideIcon> = {
  Compass,
  Target,
  Wallet,
  TrendingUp,
  Umbrella,
  ShieldCheck,
  Landmark,
  Scale,
  Brain,
  GraduationCap,
};

export function ModuleIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? BookOpen;
  return <Icon className={cn('h-5 w-5', className)} strokeWidth={1.6} />;
}
