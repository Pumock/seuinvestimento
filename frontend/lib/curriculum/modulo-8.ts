import type { Module } from './types';

export const modulo8: Module = {
  number: 8,
  slug: 'psicologia-financeira',
  title: 'Psicologia do Planejamento Financeiro',
  shortTitle: 'Psicologia Financeira',
  tagline: 'O maior obstáculo entre você e seus objetivos costuma ser você.',
  descricao: [
    'De nada adianta saber a teoria se a emoção sabota a execução. Este módulo apresenta as finanças comportamentais: os atalhos mentais (heurísticas) e os vieses que nos levam a decisões ruins com o dinheiro.',
    'Você vai reconhecer seus próprios padrões — medo, excesso de confiança, aversão à perda — e aprender abordagens para decidir com mais clareza.',
  ],
  duracao: '01:44:24',
  totalAulas: 10,
  icon: 'Brain',
  nivel: 'Intermediário',
  sections: [
    {
      id: '8.1',
      title: 'Finanças comportamentais',
      resumo: [
        'A ponte entre psicologia e dinheiro: por que somos previsivelmente irracionais e como heurísticas e vieses distorcem julgamentos financeiros.',
      ],
      topics: [
        { id: '8.1.1', title: 'Finanças comportamentais e psicologia' },
        { id: '8.1.2', title: 'Heurísticas' },
        { id: '8.1.3', title: 'Vieses' },
      ],
    },
    {
      id: '8.2',
      title: 'Atitudes, valores e vieses',
      resumo: [
        'Tanto o cliente quanto o planejador carregam vieses. Reconhecê-los é o primeiro passo para neutralizá-los.',
      ],
      topics: [
        { id: '8.2.1', title: 'Atitudes, valores e vieses do cliente e do planejador' },
      ],
    },
    {
      id: '8.3',
      title: 'Capacidade cognitiva e educação financeira',
      resumo: [
        'Como o nível de conhecimento e a capacidade cognitiva do cliente influenciam a forma de comunicar e recomendar.',
      ],
      topics: [
        { id: '8.3.1', title: 'Capacidade cognitiva e educação financeira do cliente' },
      ],
    },
    {
      id: '8.5',
      title: 'Crenças e decisões',
      resumo: [
        'As crenças que formamos sobre dinheiro na vida moldam — muitas vezes de forma invisível — nossas decisões financeiras.',
      ],
      topics: [
        { id: '8.5.1', title: 'Crenças dos clientes e a tomada de decisões' },
      ],
    },
    {
      id: '8.6',
      title: 'Abordagens comportamentais',
      resumo: [
        'Técnicas práticas para o planejador conduzir conversas difíceis e ajudar o cliente a agir no próprio interesse.',
      ],
      topics: [
        { id: '8.6.1', title: 'Abordagens comportamentais para planejadores' },
      ],
    },
    {
      id: '8.7',
      title: 'Eventos críticos',
      resumo: [
        'Divórcio, doença, perda de emprego, luto: como lidar com decisões financeiras em momentos de grande impacto emocional.',
      ],
      topics: [
        { id: '8.7.1', title: 'Eventos críticos com graves consequências financeiras' },
      ],
    },
  ],
};
