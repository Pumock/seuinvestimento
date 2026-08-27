import { cn } from '@/lib/utils';

const nivelStyle: Record<string, string> = {
  Fundamentos: 'text-emerald-700 dark:text-emerald-300',
  'Intermediário': 'text-accent-ink',
  'Avançado': 'text-rose-700 dark:text-rose-300',
};

export function NivelBadge({ nivel }: { nivel: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider',
        nivelStyle[nivel] ?? 'text-muted',
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {nivel}
    </span>
  );
}
