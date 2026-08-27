import type { Module } from './types';

export const modulo5: Module = {
  number: 5,
  slug: 'seguros',
  title: 'Planejamento de Seguros e Gestão de Risco',
  shortTitle: 'Seguros e Risco',
  tagline: 'Proteger o que você construiu antes de multiplicar.',
  descricao: [
    'Gestão de risco é decidir quais riscos você assume, quais evita e quais transfere para uma seguradora. Este módulo cobre os princípios de seguros e os principais produtos — de vida a automóvel, saúde e responsabilidade civil.',
    'Proteção vem antes de rentabilidade: de nada adianta uma boa carteira se um único evento pode destruir o patrimônio da família.',
  ],
  duracao: '06:25:43',
  totalAulas: 28,
  icon: 'ShieldCheck',
  nivel: 'Intermediário',
  sections: [
    {
      id: '5.1',
      title: 'Princípios de gestão de risco',
      resumo: [
        'Os quatro caminhos para lidar com risco: evitar, reduzir, reter ou transferir. E como o seguro se encaixa nesse leque, dentro do Sistema Nacional de Seguros.',
      ],
      topics: [
        { id: '5.1.1', title: 'Princípios de gestão de risco (exceto investimentos)' },
        { id: '5.1.2', title: 'Princípios de seguros' },
        { id: '5.1.3', title: 'Sistema Nacional de Seguros' },
      ],
    },
    {
      id: '5.2',
      title: 'Objetivos do planejamento de seguros',
      resumo: [
        'Como identificar as exposições que realmente ameaçam seu plano financeiro e priorizar coberturas.',
      ],
      topics: [{ id: '5.2.1', title: 'Objetivos do planejamento de seguro' }],
    },
    {
      id: '5.3',
      title: 'Exposição a riscos',
      resumo: [
        'Um panorama dos seguros gerais e de como avaliar a probabilidade e o impacto de cada risco.',
      ],
      topics: [{ id: '5.3.1', title: 'Introdução aos seguros gerais' }],
    },
    {
      id: '5.4',
      title: 'Lei de seguros e sinistro',
      resumo: [
        'As regras do jogo: características técnicas, legais e financeiras dos contratos, e como funciona o processo de indenização quando o sinistro acontece.',
      ],
      topics: [
        { id: '5.4.1', title: 'Características técnicas dos seguros' },
        { id: '5.4.2', title: 'Características legais e financeiras' },
        { id: '5.4.3', title: 'Conceitos da Lei de Seguros' },
        { id: '5.4.4', title: 'Processo de indenização' },
        { id: '5.4.5', title: 'Quantificação das perdas e seguro em dobro' },
      ],
    },
    {
      id: '5.5',
      title: 'Soluções de seguro',
      resumo: [
        'O catálogo prático de coberturas: vida, acidentes pessoais, viagem, educacional, automóvel, residencial, responsabilidade civil, saúde e rural.',
        'Para cada um, o que cobre, o que não cobre e quando faz sentido contratar.',
      ],
      topics: [
        { id: '5.5.1.1', title: 'Seguro de vida' },
        { id: '5.5.1.2', title: 'Coberturas adicionais do seguro de vida' },
        { id: '5.5.1.3', title: 'Invalidez permanente por acidente' },
        { id: '5.5.2', title: 'Seguro de acidentes pessoais' },
        { id: '5.5.3', title: 'Seguro viagem' },
        { id: '5.5.4', title: 'Seguro educacional' },
        { id: '5.5.5.1', title: 'Seguro automóvel' },
        { id: '5.5.5.2', title: 'Cobertura APP (acidente pessoal passageiro)' },
        { id: '5.5.5.3', title: 'Cobertura RC-F (responsabilidade civil facultativa)' },
        { id: '5.5.5.4', title: 'Operacional do seguro de automóvel' },
        { id: '5.5.6', title: 'Seguro residencial' },
        { id: '5.5.7', title: 'Seguro de responsabilidade civil' },
        { id: '5.5.8', title: 'Seguro executivo-chave' },
        { id: '5.5.9.1', title: 'Seguro saúde e plano de saúde' },
        { id: '5.5.9.2', title: 'ANS — Agência Nacional de Saúde Suplementar' },
        { id: '5.5.10', title: 'Seguro rural' },
      ],
    },
    {
      id: '5.6',
      title: 'Tributação em seguros',
      resumo: [
        'Como o imposto de renda incide (ou não) sobre prêmios e indenizações — um ponto que conecta este módulo ao de tributação.',
      ],
      topics: [{ id: '5.6.1', title: 'Aspectos tributários dos seguros' }],
    },
  ],
};
