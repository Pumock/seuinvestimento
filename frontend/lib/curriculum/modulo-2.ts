import type { Module } from './types';

export const modulo2: Module = {
  number: 2,
  slug: 'gestao-financeira',
  title: 'Gestão Financeira',
  shortTitle: 'Gestão Financeira',
  tagline: 'Organizar o presente: orçamento, reserva e crédito consciente.',
  descricao: [
    'Antes de investir, é preciso arrumar a casa. Este tema trata do dia a dia do dinheiro: para onde ele vai, quanto sobra, e como construir uma reserva que dê tranquilidade.',
    'Também desmistifica o crédito — cartão, consignado, financiamento imobiliário, consórcio — mostrando quando ele é ferramenta e quando vira armadilha.',
  ],
  duracao: '03:46:20',
  totalAulas: 19,
  icon: 'Wallet',
  nivel: 'Fundamentos',
  sections: [
    {
      id: '2.1',
      title: 'Princípios de gestão financeira',
      resumo: [
        'Existe um "ponto ótimo" entre gastar e poupar, e ele muda ao longo da vida. O ciclo do investidor descreve como renda, gastos e capacidade de poupança evoluem com a idade.',
      ],
      topics: [
        { id: '2.1.1', title: 'Ponto financeiro ótimo' },
        { id: '2.1.2', title: 'Ciclo do investidor' },
      ],
    },
    {
      id: '2.2',
      title: 'Ferramentas de gestão financeira',
      resumo: [
        'As ferramentas práticas do controle financeiro: orçamento, fluxo de caixa, balanço patrimonial pessoal e índices que medem sua saúde financeira.',
        'A reserva de emergência aparece aqui como o primeiro objetivo de qualquer plano — o colchão que evita que um imprevisto vire dívida.',
      ],
      topics: [
        { id: '2.2.1', title: 'Planejamento e controle financeiro', ferramenta: true },
        { id: '2.2.2', title: 'Orçamento e fluxo de caixa', ferramenta: true },
        { id: '2.2.3', title: 'Balanço patrimonial pessoal', ferramenta: true },
        { id: '2.2.4', title: 'Análise de índices financeiros pessoais' },
        { id: '2.2.5', title: 'Reserva de emergência', ferramenta: true },
      ],
    },
    {
      id: '2.3',
      title: 'Estudo de caso',
      resumo: [
        'Aplicação prática dos conceitos em situações reais de organização financeira.',
      ],
      topics: [
        { id: '2.3.1', title: 'Estudo de caso — parte 1' },
        { id: '2.3.2', title: 'Estudo de caso — parte 2' },
      ],
    },
    {
      id: '2.4',
      title: 'Produtos de crédito',
      resumo: [
        'Crédito custa caro — mas nem todo crédito é igual. Esta seção compara as principais linhas (cartão, cheque especial, consignado, CDC, imobiliário, consórcio) pelo Custo Efetivo Total.',
        'O objetivo é saber escolher a dívida certa (ou evitá-la) e ter um plano para sair do vermelho.',
      ],
      topics: [
        { id: '2.4.1', title: 'Princípios para disponibilização de crédito' },
        { id: '2.4.2', title: 'Custo Efetivo Total (CET)', ferramenta: true },
        { id: '2.4.3', title: 'Cartão de crédito' },
        { id: '2.4.4', title: 'Cheque especial' },
        { id: '2.4.5', title: 'Crédito consignado' },
        { id: '2.4.6', title: 'Crédito direto ao consumidor (CDC)' },
        { id: '2.4.7', title: 'Crédito imobiliário' },
        { id: '2.4.8', title: 'Consórcio' },
        { id: '2.4.9', title: 'Gestão de dívida e crédito' },
      ],
    },
  ],
};
