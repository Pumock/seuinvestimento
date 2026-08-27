import type { Module } from './types';

export const modulo3: Module = {
  number: 3,
  slug: 'investimentos',
  title: 'Planejamento de Investimentos e Gestão de Ativos',
  shortTitle: 'Investimentos',
  tagline: 'Do Tesouro Direto a derivativos: como fazer o dinheiro trabalhar.',
  descricao: [
    'O coração do site. Aqui você conhece os instrumentos (renda fixa, renda variável, fundos, imóveis, exterior, derivativos) e — mais importante — como combiná-los em uma carteira coerente com seus objetivos e seu risco.',
    'A segunda metade do módulo trata da teoria que sustenta boas carteiras: retorno, risco, diversificação, fronteira eficiente, CAPM e as métricas que medem se um investimento entregou o que prometeu.',
  ],
  duracao: '16:59:51',
  totalAulas: 75,
  icon: 'TrendingUp',
  nivel: 'Intermediário',
  sections: [
    {
      id: '3.1',
      title: 'Princípios de planejamento de investimento',
      resumo: [
        'Investir é uma decisão de propósito, não de palpite. Tudo começa por objetivos, prazos e restrições — só depois vêm os produtos.',
      ],
      topics: [{ id: '3.1.1', title: 'Princípios de planejamento de investimento' }],
    },
    {
      id: '3.2',
      title: 'Objetivos, restrições e adequação',
      resumo: [
        'Como transformar objetivos de vida em uma política de investimento: liquidez, horizonte, tolerância a risco e necessidades específicas.',
      ],
      topics: [
        { id: '3.2.1', title: 'Objetivos, restrições e adequação do planejamento' },
      ],
    },
    {
      id: '3.3',
      title: 'Renda Fixa',
      resumo: [
        'Emprestar dinheiro em troca de juros. Aqui estão os títulos públicos (Tesouro Direto), os bancários (CDB, LCI, LCA) e os privados (debêntures, CRI, CRA), além do Fundo Garantidor de Crédito.',
        'É onde a maioria começa a investir — e onde a matemática financeira do módulo 1 se torna concreta.',
      ],
      topics: [
        { id: '3.3.1', title: 'Instrumentos de renda fixa' },
        { id: '3.3.2', title: 'Títulos públicos e Tesouro Direto', ferramenta: true },
        { id: '3.3.3', title: 'LTN, NTN-F, LFT, NTN-B e NTN-B Principal' },
        { id: '3.3.4', title: 'Poupança' },
        { id: '3.3.5', title: 'CDB e RDB' },
        { id: '3.3.6', title: 'DPGE, LF e LC' },
        { id: '3.3.7', title: 'LCI e LCA' },
        { id: '3.3.8', title: 'Fundo Garantidor de Crédito (FGC)' },
        { id: '3.3.9', title: 'Debêntures' },
        { id: '3.3.10', title: 'CRI e CRA' },
      ],
    },
    {
      id: '3.4',
      title: 'Renda Variável',
      resumo: [
        'Virar sócio de empresas via ações. Esta seção cobre tipos e classes de ações, proventos, direitos de minoritários, BDRs e as duas grandes escolas de análise: técnica e fundamentalista.',
      ],
      topics: [
        { id: '3.4.1', title: 'Instrumentos de renda variável' },
        { id: '3.4.2', title: 'Ações: conceitos, tipos e classes' },
        { id: '3.4.3', title: 'Proventos dos acionistas' },
        { id: '3.4.4', title: 'Direitos dos acionistas minoritários' },
        { id: '3.4.5', title: 'Desdobramento (split) e grupamento (inplit)' },
        { id: '3.4.6', title: 'BDR — Brazilian Depositary Receipt' },
        { id: '3.4.7', title: 'Estratégias de investimento em ações' },
        { id: '3.4.8', title: 'Análise técnica e fundamentalista' },
        { id: '3.4.9', title: 'Oferta pública de valores mobiliários' },
      ],
    },
    {
      id: '3.5',
      title: 'Fundos de Investimento',
      resumo: [
        'Investir em conjunto, com gestão profissional. Da Resolução 175 da CVM aos tipos de fundos (FII, FIDC, FIP, ETF), passando por custos, tributação e a relação entre cotistas e gestores.',
      ],
      topics: [
        { id: '3.5.1', title: 'Resolução 175 CVM — resumo' },
        { id: '3.5.2', title: 'Definições de fundo de investimento' },
        { id: '3.5.3', title: 'Responsabilidades dos prestadores de serviços' },
        { id: '3.5.4', title: 'Direitos e deveres dos cotistas' },
        { id: '3.5.5', title: 'FI e FICFI' },
        { id: '3.5.6', title: 'Tipos: aberto, fechado, restrito e exclusivo' },
        { id: '3.5.7', title: 'Dinâmica de aplicação e resgate' },
        { id: '3.5.8', title: 'Objetivo e política de investimento' },
        { id: '3.5.9', title: 'Informações comerciais na distribuição' },
        { id: '3.5.10', title: 'Prestação de contas aos cotistas' },
        { id: '3.5.11', title: 'Gestão ativa e passiva' },
        { id: '3.5.12', title: 'Fundos para investidor qualificado e profissional' },
        { id: '3.5.13', title: 'Fundos de Investimento Financeiro' },
        { id: '3.5.14', title: 'FIDC — Direitos Creditórios' },
        { id: '3.5.15', title: 'FII — Fundo Imobiliário' },
        { id: '3.5.16', title: 'FIP — Participações' },
        { id: '3.5.17', title: 'ETF — Fundo de Índice' },
        { id: '3.5.18', title: 'Custos do cotista' },
      ],
    },
    {
      id: '3.6',
      title: 'Imóveis',
      resumo: [
        'O investimento favorito do brasileiro, analisado com frieza: tipos, riscos, custos e estratégia — e como ele se compara a alternativas líquidas.',
      ],
      topics: [{ id: '3.6.1', title: 'Imóveis: tipos, riscos, custos e estratégia' }],
    },
    {
      id: '3.7',
      title: 'Investimentos no exterior',
      resumo: [
        'Diversificar para fora do Brasil: títulos americanos, bonds, ADRs, fundos internacionais e criptoativos — com seus riscos de moeda e jurisdição.',
      ],
      topics: [
        { id: '3.7.1', title: 'Títulos públicos norte-americanos' },
        { id: '3.7.2', title: 'Títulos privados: CD, commercial papers, eurobonds, high yield' },
        { id: '3.7.3', title: 'ADRs — American Depositary Receipts' },
        { id: '3.7.4', title: 'Fundos: money market, bond funds, equity funds' },
        { id: '3.7.5', title: 'Criptoativos' },
      ],
    },
    {
      id: '3.8',
      title: 'Derivativos',
      resumo: [
        'Instrumentos que derivam de outros ativos — usados para proteção (hedge) ou especulação. Termo, futuro, swap e opções, do conceito às estratégias.',
      ],
      topics: [
        { id: '3.8.1', title: 'Derivativos: conceitos' },
        { id: '3.8.2', title: 'Termo: ações e dólar' },
        { id: '3.8.3', title: 'Futuro: DI, cupom cambial, Ibovespa e FRA' },
        { id: '3.8.4', title: 'Swap: juros, moeda, índice de preços' },
        { id: '3.8.5', title: 'Opções: conceitos' },
        { id: '3.8.6', title: 'Opções com barreiras' },
      ],
    },
    {
      id: '3.9',
      title: 'Certificado de Operações Estruturadas',
      resumo: [
        'O COE combina renda fixa e variável em um único produto, com cenários de ganho e perda pré-definidos. Entenda quando faz sentido.',
      ],
      topics: [{ id: '3.9.1', title: 'COE — Certificado de Operações Estruturadas' }],
    },
    {
      id: '3.10',
      title: 'Técnicas de gestão de portfólio',
      resumo: [
        'A teoria por trás de uma carteira bem montada: como retorno e risco se relacionam, por que diversificar funciona e o que é a fronteira eficiente de Markowitz.',
        'Aqui aparecem os modelos que precificam risco — CAPM, APT, Fama-French — e o conceito de beta.',
      ],
      topics: [
        { id: '3.10.1', title: 'Teoria da utilidade esperada' },
        { id: '3.10.2', title: 'Retorno' },
        { id: '3.10.3', title: 'Risco' },
        { id: '3.10.4', title: 'Diversificação' },
        { id: '3.10.5', title: 'Eficiência de mercado' },
        { id: '3.10.6', title: 'Fronteira eficiente de Markowitz' },
        { id: '3.10.7', title: 'Beta e a reta característica' },
        { id: '3.10.8', title: 'Modelos de precificação: CAPM e APT' },
        { id: '3.10.9', title: 'Fama-French' },
      ],
    },
    {
      id: '3.11',
      title: 'Medição de desempenho e risco',
      resumo: [
        'Um retorno alto pode esconder um risco alto. As métricas desta seção (Sharpe, Treynor, Sortino, VaR, duration) permitem comparar investimentos de forma justa.',
      ],
      topics: [
        { id: '3.11.1', title: 'Principais índices de referência' },
        { id: '3.11.2', title: 'Índice Sharpe, Treynor e Sortino', ferramenta: true },
        { id: '3.11.3', title: 'Risco de reinvestimento' },
        { id: '3.11.4', title: 'Duration e imunização de carteira' },
        { id: '3.11.5', title: 'Value at Risk (VaR), stress test, stop loss' },
      ],
    },
    {
      id: '3.12',
      title: 'Alocação de ativos',
      resumo: [
        'Como distribuir o dinheiro entre classes de ativos e por que rebalancear periodicamente é o que mantém a carteira alinhada ao plano.',
      ],
      topics: [
        { id: '3.12.1', title: 'Alocação estratégica, tática, dinâmica e estática' },
        { id: '3.12.2', title: 'Rebalanceamento' },
      ],
    },
  ],
};
