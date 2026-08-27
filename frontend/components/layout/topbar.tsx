'use client';

import { PanelLeft } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { ThemeToggle } from './theme-toggle';

export function Topbar({ onToggle }: { onToggle: () => void }) {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b border-border bg-[var(--bg)]/90 px-3 backdrop-blur sm:px-4">
      <button
        type="button"
        aria-label="Mostrar ou ocultar o menu"
        onClick={onToggle}
        className="grid h-9 w-9 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-ink"
      >
        <PanelLeft className="h-[18px] w-[18px]" strokeWidth={1.7} />
      </button>

      <Logo />

      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  );
}
