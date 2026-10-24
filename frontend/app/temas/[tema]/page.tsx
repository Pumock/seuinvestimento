import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/curriculum/breadcrumbs';
import { ModuleIcon } from '@/components/curriculum/module-icon';
import { NivelBadge } from '@/components/ui/badge';
import { getModule, modules, sectionSlug, moduleNeighbors } from '@/lib/curriculum';

interface Props {
  params: { tema: string };
}

export function generateStaticParams() {
  return modules.map((m) => ({ tema: m.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const tema = getModule(params.tema);
  if (!tema) return {};
  return { title: tema.shortTitle, description: tema.tagline };
}

export default function TemaPage({ params }: Props) {
  const tema = getModule(params.tema);
  if (!tema) notFound();

  const { prev, next } = moduleNeighbors(tema.slug);

  return (
    <div className="max-w-reading">
      <Breadcrumbs
        items={[{ label: 'Início', href: '/' }, { label: tema.shortTitle }]}
      />

      {/* Cabeçalho */}
      <div className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-surface-2 text-accent-ink">
          <ModuleIcon name={tema.icon} />
        </span>
        <NivelBadge nivel={tema.nivel} />
      </div>

      <h1 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
        {tema.title}
      </h1>

      <div className="prose-editorial mt-5">
        {tema.descricao.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Artigos */}
      {tema.sections.length > 0 && (
        <>
          <h2 className="mt-10 font-serif text-xl text-ink">
            Artigos deste tema
          </h2>
          <ol className="mt-4 space-y-2">
            {tema.sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`/temas/${tema.slug}/${sectionSlug(section)}`}
                  className="group flex items-start gap-4 rounded-lg border border-border p-4 transition-colors hover:border-ring hover:bg-surface-2"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-ink group-hover:text-accent">
                      {section.title}
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-sm text-muted">
                      {section.resumo[0]}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-faint opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ol>
        </>
      )}

      {/* Navegação entre temas */}
      <nav className="mt-12 flex items-stretch justify-between gap-4 border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/temas/${prev.slug}`}
            className="group flex flex-col items-start gap-1"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <ArrowLeft className="h-3.5 w-3.5" /> Anterior
            </span>
            <span className="font-medium text-ink group-hover:text-accent">
              {prev.shortTitle}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/temas/${next.slug}`}
            className="group flex flex-col items-end gap-1"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted">
              Próximo <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="font-medium text-ink group-hover:text-accent">
              {next.shortTitle}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
