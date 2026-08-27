import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { ModuleCard } from '@/components/curriculum/module-card';
import { Breadcrumbs } from '@/components/curriculum/breadcrumbs';
import { modules } from '@/lib/curriculum';

export const metadata: Metadata = {
  title: 'Módulos',
  description:
    'Todos os módulos do SeuInvestimento: planejamento, investimentos, aposentadoria, seguros, tributação, sucessão e mais.',
};

export default function ModulosPage() {
  const onboarding = modules.find((m) => m.number === 0);
  const conteudo = modules.filter((m) => m.number >= 1 && m.number <= 8);

  return (
    <Container className="py-12 md:py-16">
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Módulos' }]} />

      <header className="mt-6 max-w-reading">
        <h1 className="font-serif text-4xl text-ink md:text-5xl">
          Todos os módulos
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A grade completa de conhecimento financeiro. Cada módulo se aprofunda
          em uma área e se conecta às demais — você pode seguir em ordem ou
          mergulhar direto no que precisa.
        </p>
      </header>

      {onboarding && (
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ModuleCard module={onboarding} />
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {conteudo.map((m) => (
          <ModuleCard key={m.slug} module={m} />
        ))}
      </div>
    </Container>
  );
}
