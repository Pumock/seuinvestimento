import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Breadcrumbs } from '@/components/curriculum/breadcrumbs';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'O que é o SeuInvestimento e como o conteúdo está organizado.',
};

export default function SobrePage() {
  return (
    <Container className="py-12 md:py-16">
      <Breadcrumbs
        items={[{ label: 'Início', href: '/' }, { label: 'Sobre' }]}
      />

      <article className="mt-8 max-w-reading">
        <h1 className="font-serif text-4xl text-ink md:text-5xl">
          Sobre o projeto
        </h1>

        <div className="prose-editorial mt-8">
          <p>
            O <strong>SeuInvestimento</strong> nasceu de uma ideia simples: reunir,
            em um só lugar e com linguagem clara, tudo o que uma pessoa precisa
            saber para cuidar bem do próprio dinheiro — do básico ao avançado.
          </p>
          <p>
            O conteúdo está organizado por temas que cobrem todo o ciclo do
            planejamento financeiro: <strong>organizar</strong> o presente,{' '}
            <strong>investir</strong> para o futuro, <strong>proteger</strong> o
            patrimônio e <strong>transmiti-lo</strong> com eficiência. A estrutura
            é inspirada nas melhores referências de planejamento financeiro, mas
            escrita para qualquer pessoa — não apenas para especialistas.
          </p>
          <p>
            A estrutura cobre todos os temas com o conteúdo essencial de cada um,
            e cada artigo ganha profundidade ao longo do tempo — sempre com foco em
            explicar de forma clara e aplicável ao dia a dia.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-serif text-lg text-ink">Aviso importante</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Todo o conteúdo tem caráter estritamente educativo e informativo. Ele
            não constitui recomendação de investimento, consultoria financeira ou
            assessoria tributária personalizada. Decisões sobre o seu patrimônio
            devem considerar sua situação individual e, quando necessário, o apoio
            de um profissional habilitado.
          </p>
        </div>
      </article>
    </Container>
  );
}
