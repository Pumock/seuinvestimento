'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { modules, sectionSlug } from '@/lib/curriculum';
import { cn } from '@/lib/utils';

/** Extrai o slug do módulo ativo a partir do pathname. */
function activeModuleSlug(pathname: string): string | null {
  const m = pathname.match(/^\/modulos\/([^/]+)/);
  return m ? m[1] : null;
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const activeMod = activeModuleSlug(pathname);

  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    activeMod ? { [activeMod]: true } : {},
  );

  // Mantém o módulo ativo sempre expandido ao navegar.
  useEffect(() => {
    if (activeMod) {
      setOpen((prev) => (prev[activeMod] ? prev : { ...prev, [activeMod]: true }));
    }
  }, [activeMod]);

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

      {modules.map((module) => {
        const isOpen = !!open[module.slug];
        const modActive = pathname === `/modulos/${module.slug}`;
        const groupActive = activeMod === module.slug;

        return (
          <div key={module.slug}>
            {/* Cabeçalho do módulo (grupo colapsável) */}
            <div
              className={cn(
                'group flex items-center rounded-md pr-1 transition-colors',
                groupActive ? 'text-ink' : 'text-ink',
              )}
            >
              <Link
                href={`/modulos/${module.slug}`}
                onClick={onNavigate}
                className={cn(
                  'flex-1 rounded-md px-3 py-2 font-semibold transition-colors',
                  modActive
                    ? 'text-accent'
                    : 'hover:text-accent-ink',
                )}
              >
                <span className="mr-1.5 text-xs font-normal text-faint">
                  {String(module.number).padStart(2, '0')}
                </span>
                {module.shortTitle}
              </Link>
              <button
                type="button"
                aria-label={isOpen ? 'Recolher' : 'Expandir'}
                onClick={() => toggle(module.slug)}
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

            {/* Seções */}
            {isOpen && (
              <ul className="mb-1 ml-4 border-l border-border pl-2">
                {module.sections.map((section) => {
                  const href = `/modulos/${module.slug}/${sectionSlug(section)}`;
                  const active = pathname === href;
                  return (
                    <li key={section.id}>
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
                        {section.title}
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
