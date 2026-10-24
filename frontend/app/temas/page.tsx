import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { ModuleCard } from '@/components/curriculum/module-card';
import { Breadcrumbs } from '@/components/curriculum/breadcrumbs';
import { modules } from '@/lib/curriculum';

export const metadata: Metadata = {
  title: 'Temas',
  description:
    'Todos os temas do SeuInvestimento: planejamento, investimentos, aposentadoria, seguros, tributação, sucessão e mais.',
};

export default function TemasPage() {
  const conteudo = modules.filter((m) => m.number >= 1 && m.number <= 8);

  return (
    <Container className="py-12 md:py-16">
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Temas' }]} />

      <header className="mt-6 max-w-reading">
        <h1 className="font-serif text-4xl text-ink md:text-5xl">
          Todos os temas
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Uma coleção de artigos sobre finanças, organizada por tema. Cada tema
          reúne artigos que se conectam — leia na ordem ou vá direto ao que
          precisa.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {conteudo.map((m) => (
          <ModuleCard key={m.slug} module={m} />
        ))}
      </div>
    </Container>
  );
}
