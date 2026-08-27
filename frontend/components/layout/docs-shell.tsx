'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Topbar } from './topbar';
import { Sidebar } from './sidebar';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'si-sidebar-open';

function isDesktop() {
  return typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
}

export function DocsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Inicializa: desktop respeita preferência salva (padrão aberto); mobile começa fechado.
  useEffect(() => {
    setMounted(true);
    if (isDesktop()) {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {}
      setOpen(stored ? stored === 'true' : true);
    } else {
      setOpen(false);
    }
  }, []);

  // Fecha o drawer ao navegar no mobile.
  useEffect(() => {
    if (mounted && !isDesktop()) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (isDesktop()) {
        try {
          localStorage.setItem(STORAGE_KEY, String(next));
        } catch {}
      }
      return next;
    });
  }, []);

  const closeOnMobile = useCallback(() => {
    if (!isDesktop()) setOpen(false);
  }, []);

  return (
    <div className="min-h-screen">
      <Topbar onToggle={toggle} />

      {/* Backdrop (apenas mobile, quando aberto) */}
      {open && (
        <button
          aria-label="Fechar menu"
          onClick={toggle}
          className="fixed inset-0 top-14 z-30 bg-black/25 md:hidden"
        />
      )}

      <div className="relative flex">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed inset-y-0 left-0 top-14 z-40 w-[17rem] shrink-0 overflow-y-auto border-r border-border bg-surface pl-3 thin-scroll',
            'transition-transform duration-200 ease-out md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] md:translate-x-0 md:transition-[width,transform]',
            open ? 'translate-x-0' : '-translate-x-full',
            open ? 'md:w-[17rem]' : 'md:w-0 md:-translate-x-full md:border-r-0 md:overflow-hidden',
          )}
        >
          <Sidebar onNavigate={closeOnMobile} />
        </aside>

        {/* Conteúdo */}
        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-4xl px-5 py-8 sm:px-8 md:py-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
