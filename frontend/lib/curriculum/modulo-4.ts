import type { Module } from './types';

export const modulo4: Module = {
  number: 4,
  slug: 'aposentadoria',
  title: 'Planejamento de Aposentadoria',
  shortTitle: 'Aposentadoria',
  tagline: 'Construir hoje a renda que você vai viver amanhã.',
  descricao: [
    'Aposentadoria não é uma idade — é um patrimônio que gera renda. Este tema mostra como funciona a Previdência Social (INSS), o que esperar dela e como complementar com previdência privada.',
    'Você vai entender PGBL x VGBL, os regimes de tributação, portabilidade e como calcular quanto precisa acumular para manter seu padrão de vida.',
  ],
  duracao: '06:01:21',
  totalAulas: 24,
  icon: 'Umbrella',
  nivel: 'Intermediário',
  sections: [
    {
      id: '4.1',
      title: 'Objetivos do planejamento de aposentadoria',
      resumo: [
        'Por que começar cedo importa tanto: o tempo é o maior aliado de quem planeja a aposentadoria, graças aos juros compostos.',
      ],
      topics: [
        { id: '4.1.1', title: 'Princípios e objetivos do planejamento de aposentadoria' },
      ],
    },
    {
      id: '4.2',
      title: 'A Previdência Social (INSS)',
      resumo: [
        'O primeiro pilar da aposentadoria brasileira: quem contribui, como se contribui e quais benefícios o INSS oferece — incluindo suas limitações (o teto).',
      ],
      topics: [
        { id: '4.2.1', title: 'Panorama da Previdência Social' },
        { id: '4.2.2', title: 'Contribuintes do INSS' },
        { id: '4.2.3', title: 'Benefícios do INSS' },
        { id: '4.2.4', title: 'Composição da renda na aposentadoria' },
        { id: '4.2.5', title: 'Regimes Próprios de Previdência Social' },
        { id: '4.2.6', title: 'Sobreposição de benefícios do INSS' },
      ],
    },
    {
      id: '4.3',
      title: 'Previdência complementar (aberta)',
      resumo: [
        'O segundo pilar: planos PGBL e VGBL. Aqui estão as fases do produto, os benefícios fiscais, os regimes de tributação (progressivo x regressivo), custos e portabilidade.',
        'É um dos temas mais mal compreendidos — e onde escolher errado o regime de tributação custa caro.',
      ],
      topics: [
        { id: '4.3.1', title: 'Previdência complementar' },
        { id: '4.3.2', title: 'Declaração anual de ajuste de IR' },
        { id: '4.3.3', title: 'Fases do produto' },
        { id: '4.3.4', title: 'Benefícios da previdência complementar' },
        { id: '4.3.5', title: 'Benefícios da previdência complementar — parte 2' },
        { id: '4.3.6', title: 'Regimes de tributação', ferramenta: true },
        { id: '4.3.7', title: 'Custos da previdência' },
        { id: '4.3.8', title: 'Classificação dos fundos previdenciários' },
        { id: '4.3.9', title: 'Portabilidade' },
        { id: '4.3.10', title: 'Tábua atuarial' },
        { id: '4.3.11', title: 'Excedente financeiro' },
        { id: '4.3.12', title: 'Estudo de caso — fator de correção' },
      ],
    },
    {
      id: '4.4',
      title: 'Previdência complementar (fechada)',
      resumo: [
        'Os fundos de pensão fechados (EFPC), oferecidos por empresas e entidades — muitas vezes com contrapartida do empregador.',
      ],
      topics: [
        { id: '4.4.1', title: 'Previdência privada complementar (fechada)' },
        { id: '4.4.2', title: 'Estudo de caso — EFPC' },
      ],
    },
    {
      id: '4.5',
      title: 'Previdência na prática',
      resumo: [
        'Estudos de caso aplicando os conceitos a decisões reais de PGBL e composição de renda.',
      ],
      topics: [
        { id: '4.5.1', title: 'Estudo de caso — previdência' },
        { id: '4.5.2', title: 'Estudo de caso — PGBL' },
      ],
    },
  ],
};
