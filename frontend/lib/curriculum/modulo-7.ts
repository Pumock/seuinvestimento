import type { Module } from './types';

export const modulo7: Module = {
  number: 7,
  slug: 'patrimonio-e-sucessao',
  title: 'Planejamento Patrimonial e Sucessório',
  shortTitle: 'Patrimônio e Sucessão',
  tagline: 'Transmitir patrimônio com menos conflito, custo e imposto.',
  descricao: [
    'O que acontece com o patrimônio quando alguém falece? Este tema trata da sucessão: regimes de casamento, ordem de herança, testamento, inventário e as ferramentas para planejar tudo isso em vida.',
    'Planejar a sucessão é um ato de cuidado com quem fica — reduz disputas, acelera a partilha e diminui a carga tributária (ITCMD).',
  ],
  duracao: '07:23:54',
  totalAulas: 34,
  icon: 'Scale',
  nivel: 'Avançado',
  sections: [
    {
      id: '7.1',
      title: 'Princípios do planejamento sucessório',
      resumo: [
        'A lógica do processo sucessório e por que antecipá-lo evita que a lei decida sozinha o destino do seu patrimônio.',
      ],
      topics: [{ id: '7.1.1', title: 'O processo do planejamento sucessório' }],
    },
    {
      id: '7.2',
      title: 'Regimes de bens e objetivos',
      resumo: [
        'O regime de casamento define quem tem direito a quê. Comunhão parcial, universal, separação total, união estável — cada um muda meação e herança.',
      ],
      topics: [
        { id: '7.2.1', title: 'Requisitos legais do regime de casamento' },
        { id: '7.2.2', title: 'Comunhão parcial de bens' },
        { id: '7.2.3', title: 'União estável' },
        { id: '7.2.4', title: 'Separação total de bens' },
        { id: '7.2.5', title: 'Comunhão universal de bens' },
        { id: '7.2.6', title: 'Participação final nos aquestos' },
        { id: '7.2.7', title: 'Meação, herança e cláusulas patrimoniais' },
        { id: '7.2.8', title: 'Simulado parcial I' },
      ],
    },
    {
      id: '7.3',
      title: 'Aspectos legais da sucessão',
      resumo: [
        'A ordem de vocação hereditária: quem herda primeiro e em que proporção — descendentes, ascendentes, cônjuge/companheiro e colaterais.',
      ],
      topics: [
        { id: '7.3.1', title: 'Abertura da sucessão e ordem para suceder' },
        { id: '7.3.2', title: 'Descendentes + companheiro/cônjuge' },
        { id: '7.3.3', title: 'Ascendentes + companheiro/cônjuge' },
        { id: '7.3.4', title: 'Companheiro/cônjuge' },
        { id: '7.3.5', title: 'Colaterais até 4º grau' },
        { id: '7.3.6', title: 'Simulado parcial II' },
      ],
    },
    {
      id: '7.4',
      title: 'Aspectos familiares',
      resumo: [
        'Os limites e instrumentos para dispor do patrimônio: a legítima, o testamento, o legado, a doação e o inventário.',
        'Também trata de situações delicadas: deserdação, comoriência, incapacidade e cuidados de saúde.',
      ],
      topics: [
        { id: '7.4.1', title: 'Limite para dispor do patrimônio em vida' },
        { id: '7.4.2', title: 'Regras para herança' },
        { id: '7.4.2.1', title: 'Deserdação' },
        { id: '7.4.3', title: 'Testamento' },
        { id: '7.4.4', title: 'Legado testamentário' },
        { id: '7.4.5', title: 'Inventário e partilha' },
        { id: '7.4.6', title: 'Doação (situações especiais)' },
        { id: '7.4.7', title: 'Comoriência' },
        { id: '7.4.8', title: 'Incapacidade, tutela, procuração e cuidados de saúde' },
        { id: '7.4.9', title: 'Simulado parcial III' },
      ],
    },
    {
      id: '7.5',
      title: 'Ativos e passivos no planejamento',
      resumo: [
        'Ferramentas que facilitam a sucessão: seguro de vida e previdência (que não entram em inventário), holdings, fundos e bens no exterior.',
      ],
      topics: [
        { id: '7.5.1', title: 'Seguro de vida e previdência privada' },
        { id: '7.5.2', title: 'Holding' },
        { id: '7.5.3', title: 'Fundos de investimento' },
        { id: '7.5.4', title: 'Bens e direitos no exterior' },
        { id: '7.5.5', title: 'Fundações' },
        { id: '7.5.6', title: 'Avaliação dos ativos' },
        { id: '7.5.7', title: 'Sucessão empresarial' },
      ],
    },
    {
      id: '7.6',
      title: 'Filantropia e tributação da sucessão',
      resumo: [
        'Aspectos tributários da transmissão de patrimônio e o papel da filantropia no planejamento.',
      ],
      topics: [{ id: '7.6.1', title: 'Aspectos tributários da sucessão' }],
    },
  ],
};
