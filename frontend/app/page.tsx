import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ModuleIcon } from '@/components/curriculum/module-icon';
import { contentModules, stats } from '@/lib/curriculum';

export default function HomePage() {
  return (
    <div className="max-w-reading">
      <p className="text-sm font-medium text-accent">SeuInvestimento</p>
      <h1 className="mt-2 font-serif text-4xl leading-tight text-ink">
        Tudo sobre o seu dinheiro, do básico ao avançado
      </h1>

      <div className="prose-editorial mt-5">
        <p>
          Um guia completo de educação financeira: planejamento, investimentos,
          aposentadoria, seguros, tributação, sucessão e comportamento — organizado
          em módulos que você navega pelo menu à esquerda.
        </p>
        <p>
          Use o menu para explorar os temas. Cada seção traz o conteúdo essencial
          agora e vai ganhar <strong>ferramentas interativas</strong> (simuladores e
          calculadoras) ao longo do tempo.
        </p>
      </div>

      <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-border py-5">
        {[
          { n: stats.modulos, l: 'módulos' },
          { n: stats.secoes, l: 'seções' },
          { n: stats.topicos, l: 'tópicos' },
        ].map((s) => (
          <div key={s.l}>
            <dt className="font-serif text-2xl text-ink">{s.n}</dt>
            <dd className="text-sm text-muted">{s.l}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-10 font-serif text-xl text-ink">Comece por um módulo</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {contentModules.map((m) => (
          <li key={m.slug}>
            <Link
              href={`/modulos/${m.slug}`}
              className="group flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:border-ring hover:bg-surface-2"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-surface-2 text-accent-ink">
                <ModuleIcon name={m.icon} className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium text-ink group-hover:text-accent">
                  {m.shortTitle}
                </span>
                <span className="block truncate text-xs text-muted">
                  {m.tagline}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-faint opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
