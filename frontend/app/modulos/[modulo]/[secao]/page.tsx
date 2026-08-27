import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ShieldAlert, Wrench } from 'lucide-react';
import { Breadcrumbs } from '@/components/curriculum/breadcrumbs';
import { TopicContent } from '@/components/curriculum/topic-content';
import { getSection, modules, sectionSlug } from '@/lib/curriculum';

interface Props {
  params: { modulo: string; secao: string };
}

export function generateStaticParams() {
  return modules.flatMap((m) =>
    m.sections.map((s) => ({ modulo: m.slug, secao: sectionSlug(s) })),
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const found = getSection(params.modulo, params.secao);
  if (!found) return {};
  return {
    title: `${found.section.title} · ${found.module.shortTitle}`,
    description: found.section.resumo[0],
  };
}

export default function SecaoPage({ params }: Props) {
  const found = getSection(params.modulo, params.secao);
  if (!found) notFound();
  const { module, section } = found;

  const idx = module.sections.findIndex((s) => s.id === section.id);
  const prev = module.sections[idx - 1];
  const next = module.sections[idx + 1];
  const temFerramenta = section.topics.some((t) => t.ferramenta);
  const temConteudo = section.topics.some((t) => t.content?.length);
  const avisoTributario = module.slug === 'tributacao';

  return (
    <article className="max-w-reading">
      <Breadcrumbs
        items={[
          { label: 'Início', href: '/' },
          { label: module.shortTitle, href: `/modulos/${module.slug}` },
          { label: section.title },
        ]}
      />

      <h1 className="mt-5 font-serif text-3xl leading-tight text-ink md:text-4xl">
        {section.title}
      </h1>

      <div className="prose-editorial mt-5">
        {section.resumo.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {avisoTributario && (
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-surface-2 p-4">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
          <p className="text-sm leading-relaxed text-muted">
            Conteúdo educativo, com base nas regras vigentes em 2026. As normas
            tributárias mudam com frequência — alíquotas, limites e obrigações
            devem ser conferidos na legislação e na Receita Federal antes de
            qualquer declaração ou decisão. Não substitui orientação de um
            profissional habilitado.
          </p>
        </div>
      )}

      {temFerramenta && (
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-surface-2 p-4">
          <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
          <p className="text-sm leading-relaxed text-muted">
            Esta seção terá <strong className="text-ink">ferramentas interativas</strong>{' '}
            (simuladores e calculadoras) em breve.
          </p>
        </div>
      )}

      {/* Conteúdo por tópico */}
      {temConteudo ? (
        <div className="mt-10 space-y-10">
          {section.topics.map((topic) => (
            <section key={topic.id} className="scroll-mt-20">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-serif text-2xl text-ink">{topic.title}</h2>
                {topic.ferramenta && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent-ink">
                    <Wrench className="h-3 w-3" /> ferramenta em breve
                  </span>
                )}
              </div>
              {topic.content && <TopicContent blocks={topic.content} />}
            </section>
          ))}
        </div>
      ) : (
        section.topics.length > 0 && (
          <section className="mt-10">
            <h2 className="font-serif text-xl text-ink">Tópicos desta seção</h2>
            <p className="mt-1 text-sm text-muted">
              O conteúdo detalhado de cada tópico será desenvolvido em breve.
            </p>

            <ul className="mt-5 divide-y divide-border border-y border-border">
              {section.topics.map((topic, i) => (
                <li key={topic.id} className="flex items-center gap-4 py-3">
                  <span className="w-6 shrink-0 font-serif text-sm text-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-ink">{topic.title}</span>
                  {topic.ferramenta && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent-ink">
                      <Wrench className="h-3 w-3" /> ferramenta
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )
      )}

      {/* Navegação entre seções */}
      <nav className="mt-12 flex items-stretch justify-between gap-4 border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/modulos/${module.slug}/${sectionSlug(prev)}`}
            className="group flex max-w-[45%] flex-col items-start gap-1"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <ArrowLeft className="h-3.5 w-3.5" /> Anterior
            </span>
            <span className="text-left font-medium text-ink group-hover:text-accent">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/modulos/${module.slug}/${sectionSlug(next)}`}
            className="group flex max-w-[45%] flex-col items-end gap-1"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted">
              Próximo <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="text-right font-medium text-ink group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
