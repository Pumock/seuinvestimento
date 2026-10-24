import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Breadcrumbs } from '@/components/curriculum/breadcrumbs';
import { ModuleIcon } from '@/components/curriculum/module-icon';
import { contentModules, type Nivel } from '@/lib/curriculum';

export const metadata: Metadata = {
  title: 'Trilhas',
  description:
    'Trilhas de estudo por nível: dos fundamentos ao conteúdo avançado.',
};

const ordem: Nivel[] = ['Fundamentos', 'Intermediário', 'Avançado'];

const descricaoNivel: Record<Nivel, string> = {
  Fundamentos:
    'O ponto de partida. Organize a vida financeira e entenda os conceitos que sustentam todo o resto.',
  'Intermediário':
    'Coloque o dinheiro para trabalhar e proteja o que construiu: investimentos, aposentadoria, seguros e comportamento.',
  'Avançado':
    'Estruture e transmita patrimônio com eficiência: tributação e planejamento sucessório.',
};

export default function TrilhasPage() {
  return (
    <Container className="py-12 md:py-16">
      <Breadcrumbs
        items={[{ label: 'Início', href: '/' }, { label: 'Trilhas' }]}
      />

      <header className="mt-6 max-w-reading">
        <h1 className="font-serif text-4xl text-ink md:text-5xl">
          Trilhas de estudo
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Não sabe por onde começar? Siga por nível. Cada trilha agrupa os
          temas numa progressão natural — do primeiro passo ao domínio.
        </p>
      </header>

      <div className="mt-14 space-y-16">
        {ordem.map((nivel) => {
          const mods = contentModules.filter((m) => m.nivel === nivel);
          if (mods.length === 0) return null;
          return (
            <section key={nivel}>
              <div className="max-w-reading">
                <h2 className="font-serif text-2xl text-ink md:text-3xl">
                  {nivel}
                </h2>
                <p className="mt-2 text-muted">{descricaoNivel[nivel]}</p>
              </div>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {mods.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/temas/${m.slug}`}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-ring"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent-ink">
                        <ModuleIcon name={m.icon} />
                      </span>
                      <div>
                        <h3 className="font-serif text-lg text-ink group-hover:text-accent">
                          {m.shortTitle}
                        </h3>
                        <p className="text-sm text-muted">{m.tagline}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </Container>
  );
}
