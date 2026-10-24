import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Module } from '@/lib/curriculum';
import { ModuleIcon } from './module-icon';
import { NivelBadge } from '@/components/ui/badge';

export function ModuleCard({ module: tema }: { module: Module }) {
  return (
    <Link
      href={`/temas/${tema.slug}`}
      className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:border-ring hover:shadow-[0_1px_0_0_var(--border),0_18px_40px_-24px_rgba(0,0,0,0.25)]"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent-ink">
          <ModuleIcon name={tema.icon} />
        </span>
        <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>

      <h3 className="mt-5 font-serif text-xl leading-snug text-ink">
        {tema.shortTitle}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {tema.tagline}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <NivelBadge nivel={tema.nivel} />
        <span className="text-xs text-muted">{tema.sections.length} artigos</span>
      </div>
    </Link>
  );
}
