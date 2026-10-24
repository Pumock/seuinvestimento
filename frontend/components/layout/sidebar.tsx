'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { modules, sectionSlug } from '@/lib/curriculum';
import { cn } from '@/lib/utils';

/** Extrai o slug do tema ativo a partir do pathname. */
function activeTemaSlug(pathname: string): string | null {
  const m = pathname.match(/^\/temas\/([^/]+)/);
  return m ? m[1] : null;
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const activeTema = activeTemaSlug(pathname);

  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    activeTema ? { [activeTema]: true } : {},
  );

  // Mantém o tema ativo sempre expandido ao navegar.
  useEffect(() => {
    if (activeTema) {
      setOpen((prev) => (prev[activeTema] ? prev : { ...prev, [activeTema]: true }));
    }
  }, [activeTema]);

  const toggle = (slug: string) =>
    setOpen((prev) => ({ ...prev, [slug]: !prev[slug] }));

  return (
    <nav className="flex flex-col gap-0.5 py-4 pr-2 text-[0.9rem]">
      <Link
        href="/"
        onClick={onNavigate}
        className={cn(
          'mb-1 rounded-md px-3 py-2 font-medium transition-colors',
          pathname === '/'
            ? 'bg-surface-2 text-accent'
            : 'text-muted hover:bg-surface-2 hover:text-ink',
        )}
      >
        Início
      </Link>

      {modules.map((tema) => {
        const isOpen = !!open[tema.slug];
        const temaActive = pathname === `/temas/${tema.slug}`;
        const groupActive = activeTema === tema.slug;

        return (
          <div key={tema.slug}>
            {/* Cabeçalho do tema (grupo colapsável) */}
            <div
              className={cn(
                'group flex items-center rounded-md pr-1 transition-colors',
                groupActive ? 'text-ink' : 'text-ink',
              )}
            >
              <Link
                href={`/temas/${tema.slug}`}
                onClick={onNavigate}
                className={cn(
                  'flex-1 rounded-md px-3 py-2 font-semibold transition-colors',
                  temaActive ? 'text-accent' : 'hover:text-accent-ink',
                )}
              >
                {tema.shortTitle}
              </Link>
              <button
                type="button"
                aria-label={isOpen ? 'Recolher' : 'Expandir'}
                onClick={() => toggle(tema.slug)}
                className="grid h-7 w-7 place-items-center rounded-md text-faint transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <ChevronRight
                  className={cn(
                    'h-4 w-4 transition-transform',
                    isOpen && 'rotate-90',
                  )}
                />
              </button>
            </div>

            {/* Artigos */}
            {isOpen && (
              <ul className="mb-1 ml-4 border-l border-border pl-2">
                {tema.sections.map((artigo) => {
                  const href = `/temas/${tema.slug}/${sectionSlug(artigo)}`;
                  const active = pathname === href;
                  return (
                    <li key={artigo.id}>
                      <Link
                        href={href}
                        onClick={onNavigate}
                        className={cn(
                          'block rounded-md px-3 py-1.5 transition-colors',
                          active
                            ? 'bg-surface-2 font-medium text-accent'
                            : 'text-muted hover:bg-surface-2 hover:text-ink',
                        )}
                      >
                        {artigo.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}
