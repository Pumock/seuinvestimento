import type { Module } from './types';

export const modulo1: Module = {
  number: 1,
  slug: 'planejamento-financeiro',
  title: 'Planejamento Financeiro: Princípios, Processos e Habilidades',
  shortTitle: 'Planejamento Financeiro',
  tagline: 'Organizar a vida financeira — da pessoa física ao negócio.',
  descricao: [
    'Planejamento financeiro é o processo de organizar recursos hoje para alcançar objetivos amanhã. Este tema começa pelo que mais importa na prática: como uma pessoa constrói uma boa saúde financeira e como um negócio organiza suas finanças.',
    'Em seguida, apresenta o "chão" que sustenta qualquer decisão: o ambiente econômico e regulatório, como o Sistema Financeiro Nacional e suas instituições estão organizados, as regras de conformidade, a matemática financeira (o valor do dinheiro no tempo) e o perfil de risco do investidor.',
  ],
  duracao: '13:52:49',
  totalAulas: 53,
  icon: 'Target',
  nivel: 'Fundamentos',
  sections: [
    // ============================================================
    // 1.1 Saúde financeira da pessoa física
    // ============================================================
    {
      id: '1.1',
      title: 'Saúde financeira da pessoa física',
      resumo: [
        'Ter saúde financeira não é ganhar muito — é ter controle: gastar menos do que se ganha, estar protegido contra imprevistos e caminhar de forma consistente rumo aos seus objetivos.',
        'Este é um processo que qualquer pessoa pode seguir, independentemente da renda. Aqui está o passo a passo, do diagnóstico à construção de patrimônio.',
      ],
      topics: [
        {
          id: '1.1.1',
          title: 'O que é saúde financeira',
          content: [
            {
              type: 'p',
              text: 'Saúde financeira é a capacidade de sustentar seu padrão de vida, honrar compromissos e realizar objetivos sem viver no limite ou no medo. Não depende de ser rico: depende de equilíbrio entre o que entra e o que sai, de proteção contra imprevistos e de constância.',
            },
            {
              type: 'p',
              text: 'Ela se apoia em quatro pilares que se reforçam:',
            },
            {
              type: 'list',
              items: [
                'Gastar menos do que se ganha (sobra mensal positiva).',
                'Ter uma reserva que absorva imprevistos sem recorrer a dívida.',
                'Manter as dívidas sob controle, especialmente as caras.',
                'Poupar e investir com regularidade para objetivos de médio e longo prazo.',
              ],
            },
            {
              type: 'note',
              text: 'Sinais de alerta: usar o cartão para fechar o mês, não saber para onde vai o dinheiro, não ter reserva e depender do próximo salário para sobreviver.',
            },
          ],
        },
        {
          id: '1.1.2',
          title: 'Diagnóstico: onde você está hoje',
          ferramenta: true,
          content: [
            {
              type: 'p',
              text: 'Todo plano começa por um raio-x honesto da situação atual. Dois retratos bastam para começar.',
            },
            {
              type: 'list',
              items: [
                'Fluxo mensal: quanto entra (renda líquida) e quanto sai (gastos fixos, variáveis e dívidas). A diferença é a sua sobra — ou o seu rombo.',
                'Balanço pessoal: tudo o que você tem (dinheiro, investimentos, bens) menos tudo o que você deve. O resultado é o seu patrimônio líquido.',
              ],
            },
            {
              type: 'p',
              text: 'Anotar os gastos por 30 dias, mesmo que dê trabalho, costuma ser a etapa mais reveladora: quase sempre aparecem gastos invisíveis que somados pesam no orçamento.',
            },
          ],
        },
        {
          id: '1.1.3',
          title: 'Definir objetivos (curto, médio e longo prazo)',
          content: [
            {
              type: 'p',
              text: 'Dinheiro sem objetivo vira gasto. Objetivos claros dão direção ao plano e ajudam a resistir a impulsos. Vale classificá-los por prazo, porque o prazo define onde investir.',
            },
            {
              type: 'table',
              headers: ['Prazo', 'Exemplos', 'Característica'],
              rows: [
                ['Curto (até 1-2 anos)', 'Reserva, viagem, troca de celular', 'Prioriza segurança e liquidez'],
                ['Médio (2-5 anos)', 'Entrada de um imóvel, carro, curso', 'Equilíbrio entre segurança e retorno'],
                ['Longo (5+ anos)', 'Aposentadoria, independência financeira', 'Aceita mais risco por mais retorno'],
              ],
            },
            {
              type: 'p',
              text: 'Um bom objetivo é específico e mensurável: em vez de "juntar dinheiro", diga "acumular R$ 20.000 em 24 meses para a entrada de um imóvel" — isso vira R$ 833 por mês.',
            },
          ],
        },
        {
          id: '1.1.4',
          title: 'O processo de planejamento financeiro pessoal',
          content: [
            {
              type: 'p',
              text: 'Planejar não é um evento único, e sim um ciclo que se repete. Seguir as etapas na ordem evita decisões avulsas.',
            },
            {
              type: 'list',
              items: [
                'Diagnosticar: entender receitas, despesas, dívidas e patrimônio.',
                'Definir objetivos: o que você quer, quando e quanto custa.',
                'Montar o plano: orçamento, quitação de dívidas, reserva e investimentos.',
                'Executar: automatizar o que der e seguir o combinado.',
                'Revisar: acompanhar de perto e ajustar sempre que a vida mudar.',
              ],
            },
          ],
        },
        {
          id: '1.1.5',
          title: 'Orçamento e hábitos que sustentam o plano',
          content: [
            {
              type: 'p',
              text: 'O orçamento é a ferramenta que transforma intenção em prática. Um ponto de partida simples é a regra 50-30-20: até 50% da renda para necessidades, 30% para desejos e ao menos 20% para poupar e investir — ajustável à sua realidade.',
            },
            {
              type: 'list',
              items: [
                'Pague-se primeiro: separe a poupança assim que o dinheiro entra, não o que sobra no fim do mês.',
                'Automatize aportes e contas para reduzir esquecimentos e tentações.',
                'Revise o orçamento uma vez por mês, sem culpa — o objetivo é ajustar, não se punir.',
              ],
            },
            {
              type: 'note',
              text: 'As ferramentas práticas (planilhas de orçamento, fluxo de caixa e balanço) estão detalhadas no tema Gestão Financeira.',
            },
          ],
        },
        {
          id: '1.1.6',
          title: 'Sair das dívidas',
          content: [
            {
              type: 'p',
              text: 'Dívida cara é o maior inimigo da saúde financeira: juros de cartão e cheque especial podem superar 300% ao ano e crescem mais rápido do que qualquer investimento rende.',
            },
            {
              type: 'list',
              items: [
                'Liste todas as dívidas com valor, taxa de juros e parcela.',
                'Ataque primeiro as mais caras (método avalanche) — é o que economiza mais juros.',
                'Como alternativa motivacional, quite primeiro as menores (método bola de neve) para ganhar tração.',
                'Renegocie e troque dívida cara por barata (ex.: portabilidade, consignado) sempre que possível.',
              ],
            },
            {
              type: 'p',
              text: 'Enquanto houver dívida de juros altos, quitá-la rende mais, líquido e garantido, do que qualquer aplicação.',
            },
          ],
        },
        {
          id: '1.1.7',
          title: 'Reserva de emergência',
          content: [
            {
              type: 'p',
              text: 'A reserva de emergência é o colchão que impede que um imprevisto (desemprego, saúde, conserto) vire dívida. É o primeiro objetivo de qualquer plano, antes de investir para o longo prazo.',
            },
            {
              type: 'list',
              items: [
                'Tamanho: de 3 a 6 meses do seu custo de vida; quem tem renda instável (autônomos) deve mirar mais.',
                'Onde deixar: em aplicação de alta liquidez e baixo risco, que possa ser resgatada a qualquer momento.',
                'Regra de ouro: reserva não é investimento para render — é para estar lá quando você precisar.',
              ],
            },
            {
              type: 'note',
              text: 'Os produtos adequados para a reserva são detalhados no tema Investimentos (renda fixa de liquidez diária).',
            },
          ],
        },
        {
          id: '1.1.8',
          title: 'Indicadores de saúde financeira',
          ferramenta: true,
          content: [
            {
              type: 'p',
              text: 'Alguns números simples mostram, sem autoengano, como anda a sua vida financeira.',
            },
            {
              type: 'formula',
              text: 'Taxa de poupança = quanto você poupa por mês ÷ renda líquida mensal',
            },
            {
              type: 'table',
              headers: ['Indicador', 'Referência saudável'],
              rows: [
                ['Taxa de poupança', 'Idealmente 20% ou mais da renda'],
                ['Comprometimento com dívidas', 'Parcelas abaixo de 30% da renda'],
                ['Reserva de emergência', 'De 3 a 6 meses de despesas'],
                ['Patrimônio líquido', 'Crescente ao longo do tempo'],
              ],
            },
            {
              type: 'p',
              text: 'Não existe número mágico igual para todos, mas a direção importa: taxa de poupança subindo, endividamento caindo e patrimônio crescendo indicam um plano no rumo certo.',
            },
          ],
        },
        {
          id: '1.1.9',
          title: 'Ciclo de vida financeiro',
          content: [
            {
              type: 'p',
              text: 'As prioridades financeiras mudam com a fase da vida. Reconhecer em que etapa você está ajuda a calibrar quanto arriscar e para onde direcionar o dinheiro.',
            },
            {
              type: 'list',
              items: [
                'Acumulação (início da vida adulta): organizar-se, criar reserva, quitar dívidas e começar a investir com horizonte longo e mais risco.',
                'Consolidação (meia-idade): renda maior, foco em ampliar patrimônio, proteger a família e planejar a aposentadoria.',
                'Usufruto (aposentadoria): preservar o patrimônio e transformá-lo em renda, reduzindo o risco.',
              ],
            },
          ],
        },
        {
          id: '1.1.10',
          title: 'Proteção e próximos passos',
          content: [
            {
              type: 'p',
              text: 'Com a casa organizada, dois movimentos protegem o que você construiu e aceleram o progresso.',
            },
            {
              type: 'list',
              items: [
                'Proteção: seguros básicos (vida, saúde, e do que for essencial) evitam que um único evento destrua anos de esforço — detalhado no tema Seguros e Risco.',
                'Multiplicação: com reserva formada e dívidas sob controle, comece a investir para os objetivos de médio e longo prazo — detalhado no tema Investimentos.',
              ],
            },
            {
              type: 'note',
              text: 'Saúde financeira é hábito, não evento. Pequenas decisões repetidas por anos superam qualquer tentativa de acerto isolado.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // 1.2 Planejamento financeiro da pessoa jurídica
    // ============================================================
    {
      id: '1.2',
      title: 'Planejamento financeiro da pessoa jurídica',
      resumo: [
        'Quem tem um negócio — de MEI a empresa consolidada — precisa planejar as finanças da empresa com o mesmo cuidado das finanças pessoais, mas com regras próprias.',
        'A saúde financeira de um negócio depende de caixa organizado, precificação correta, capital de giro suficiente e separação clara entre o dinheiro da empresa e o do dono.',
      ],
      topics: [
        {
          id: '1.2.1',
          title: 'Por que separar as finanças da pessoa e da empresa',
          content: [
            {
              type: 'p',
              text: 'O erro mais comum de quem empreende é misturar o caixa pessoal com o da empresa. Sem separação, é impossível saber se o negócio dá lucro, e problemas de um lado contaminam o outro.',
            },
            {
              type: 'list',
              items: [
                'Mantenha contas bancárias separadas para a pessoa física e para a empresa.',
                'Defina um pró-labore fixo: o dono recebe um salário, e não retira dinheiro do caixa a esmo.',
                'Registre todas as movimentações — é o que permite enxergar o resultado real do negócio.',
              ],
            },
          ],
        },
        {
          id: '1.2.2',
          title: 'Pró-labore e distribuição de lucros',
          content: [
            {
              type: 'p',
              text: 'O dono pode ser remunerado de duas formas, com tratamentos diferentes.',
            },
            {
              type: 'list',
              items: [
                'Pró-labore: a remuneração pelo trabalho na empresa. Sofre incidência de INSS e, conforme o valor, de Imposto de Renda na fonte.',
                'Distribuição de lucros: a parcela do lucro apurado repartida entre os sócios. Em regra é isenta de IR para o sócio quando há contabilidade que a comprove.',
              ],
            },
            {
              type: 'note',
              text: 'A forma e a proporção dependem do regime tributário e da contabilidade da empresa. Os detalhes tributários estão no tema Tributação.',
            },
          ],
        },
        {
          id: '1.2.3',
          title: 'Fluxo de caixa da empresa',
          content: [
            {
              type: 'p',
              text: 'Fluxo de caixa é o mapa das entradas e saídas de dinheiro ao longo do tempo. Empresa lucrativa quebra por falta de caixa — por isso o acompanhamento é vital.',
            },
            {
              type: 'p',
              text: 'Vale distinguir dois regimes: no regime de caixa, registra-se quando o dinheiro efetivamente entra ou sai; no regime de competência, quando a receita ou a despesa é gerada, mesmo que o pagamento ocorra depois. Um bom controle projeta o caixa das próximas semanas para antecipar apertos.',
            },
          ],
        },
        {
          id: '1.2.4',
          title: 'Capital de giro',
          ferramenta: true,
          content: [
            {
              type: 'p',
              text: 'Capital de giro é o dinheiro necessário para tocar a operação no intervalo entre pagar os custos e receber pelas vendas. Quanto maior esse descompasso, mais capital de giro a empresa precisa.',
            },
            {
              type: 'p',
              text: 'Ele é pressionado por três prazos: quanto tempo o estoque fica parado, quanto tempo os clientes levam para pagar e quanto tempo você tem para pagar os fornecedores. Encurtar recebimentos e alongar pagamentos alivia a necessidade de capital de giro.',
            },
          ],
        },
        {
          id: '1.2.5',
          title: 'Reserva e saúde financeira do negócio',
          content: [
            {
              type: 'p',
              text: 'Assim como a pessoa física, a empresa precisa de um colchão para atravessar meses fracos, sazonalidade ou imprevistos sem recorrer a crédito caro.',
            },
            {
              type: 'list',
              items: [
                'Mire uma reserva equivalente a alguns meses de custo fixo da operação.',
                'Trate a reserva como intocável para o dia a dia — ela existe para emergências e oportunidades.',
              ],
            },
          ],
        },
        {
          id: '1.2.6',
          title: 'Precificação, margem e ponto de equilíbrio',
          ferramenta: true,
          content: [
            {
              type: 'p',
              text: 'Preço mal calculado é a causa silenciosa de muitos negócios que trabalham muito e não sobra nada. Precificar exige conhecer custos fixos, custos variáveis e a margem desejada.',
            },
            {
              type: 'p',
              text: 'A margem de contribuição é quanto sobra de cada venda depois dos custos variáveis, para cobrir os custos fixos e gerar lucro. Com ela chega-se ao ponto de equilíbrio: o faturamento mínimo para não ter prejuízo.',
            },
            {
              type: 'formula',
              text: 'Ponto de equilíbrio = custos fixos ÷ margem de contribuição (%)',
            },
            {
              type: 'p',
              text: 'Vender abaixo do ponto de equilíbrio significa operar no prejuízo; acima dele, cada venda adicional vira lucro.',
            },
          ],
        },
        {
          id: '1.2.7',
          title: 'Indicadores financeiros da empresa',
          content: [
            {
              type: 'p',
              text: 'Alguns indicadores mostram a saúde do negócio para além do saldo em conta.',
            },
            {
              type: 'list',
              items: [
                'Margem de lucro: quanto do faturamento vira lucro depois de todos os custos.',
                'Liquidez: capacidade de honrar as contas de curto prazo com os recursos disponíveis.',
                'Endividamento: quanto da empresa é financiado por dívida e se ela cabe no caixa.',
                'DRE (Demonstração do Resultado): organiza receitas, custos e despesas até o lucro, e é a base para decidir.',
              ],
            },
          ],
        },
        {
          id: '1.2.8',
          title: 'O que fazer com o caixa: reinvestir ou aplicar',
          content: [
            {
              type: 'p',
              text: 'Com o caixa organizado e a reserva formada, o excedente pode seguir dois caminhos, muitas vezes combinados.',
            },
            {
              type: 'list',
              items: [
                'Reinvestir no próprio negócio quando o retorno esperado da expansão supera as alternativas — costuma ser a aplicação mais rentável para quem empreende.',
                'Aplicar no mercado financeiro a parcela que não será usada na operação, buscando liquidez e segurança compatíveis com o prazo.',
              ],
            },
            {
              type: 'note',
              text: 'Crédito para crescer pode fazer sentido, desde que o retorno do investimento supere o custo efetivo total da dívida.',
            },
          ],
        },
        {
          id: '1.2.9',
          title: 'Continuidade e sucessão do negócio',
          content: [
            {
              type: 'p',
              text: 'Um negócio saudável também se planeja para durar além do fundador: o que acontece em caso de saída, incapacidade ou falecimento de um sócio?',
            },
            {
              type: 'p',
              text: 'Acordo de sócios, governança mínima e planejamento sucessório reduzem conflitos e protegem o patrimônio construído. Os instrumentos de sucessão (holding, testamento, ITCMD) estão detalhados no tema Patrimônio e Sucessão.',
            },
          ],
        },
      ],
    },

    {
      id: '1.4',
      title: 'Ambiente regulatório, político e econômico',
      resumo: [
        'Nenhuma decisão financeira acontece no vácuo. Inflação, juros, câmbio, política fiscal e ciclos econômicos moldam o terreno onde você investe e gasta.',
        'Esta seção dá o vocabulário econômico essencial — de microeconomia a políticas monetárias — e alerta para crimes contra o mercado.',
      ],
      topics: [
        { id: '1.4.1', title: 'Introdução ao ambiente regulatório' },
        { id: '1.4.2', title: 'Dever fiduciário: conduta ética e profissional' },
        { id: '1.4.3', title: 'Microeconomia' },
        { id: '1.4.4', title: 'Elasticidade preço-demanda' },
        { id: '1.4.5', title: 'Estruturas de mercado' },
        { id: '1.4.6', title: 'PIB e PNB' },
        { id: '1.4.7', title: 'Índices de inflação' },
        { id: '1.4.8', title: 'Políticas monetárias' },
        { id: '1.4.9', title: 'Política cambial' },
        { id: '1.4.10', title: 'Balança de pagamentos' },
        { id: '1.4.11', title: 'Política fiscal' },
        { id: '1.4.12', title: 'Sentimento em relação ao governo local' },
        { id: '1.4.13', title: 'Análise dos ciclos econômicos' },
        { id: '1.4.14', title: 'Crimes contra o mercado de capitais' },
        { id: '1.4.15', title: 'Manipulação de mercado' },
        { id: '1.4.16', title: 'Práticas não equitativas' },
        { id: '1.4.17', title: 'Taxa Selic e Taxa DI (CDI)' },
        { id: '1.4.18', title: 'Instrumentos de política monetária (compulsório, redesconto e open market)' },
        { id: '1.4.19', title: 'TR — Taxa Referencial' },
        { id: '1.4.20', title: 'Taxa de câmbio: PTAX, comercial e turismo' },
        { id: '1.4.21', title: 'Política de rendas' },
      ],
    },
    {
      id: '1.4b',
      title: 'Sistema Financeiro Nacional',
      resumo: [
        'Quem cria as regras, quem fiscaliza e quem opera. O SFN organiza bancos, mercado de capitais, seguros e previdência em três camadas: órgãos normativos, entidades supervisoras e operadores.',
      ],
      topics: [
        { id: '1.4b.1', title: 'Estrutura do SFN: normativos, supervisores e operadores' },
        { id: '1.4b.2', title: 'Conselho Monetário Nacional (CMN)' },
        { id: '1.4b.3', title: 'Banco Central (BACEN)' },
        { id: '1.4b.4', title: 'Comissão de Valores Mobiliários (CVM)' },
        { id: '1.4b.5', title: 'Tesouro Nacional' },
        { id: '1.4b.6', title: 'CNSP e SUSEP (seguros)' },
        { id: '1.4b.7', title: 'CNPC e PREVIC (previdência complementar)' },
        { id: '1.4b.8', title: 'B3 — Bolsa de Valores' },
        { id: '1.4b.9', title: 'BSM — supervisão de mercado' },
        { id: '1.4b.10', title: 'Sistema de Pagamentos Brasileiro (SPB) e Pix' },
      ],
    },
    {
      id: '1.4c',
      title: 'Instituições e intermediários financeiros',
      resumo: [
        'Onde o dinheiro é guardado, emprestado e negociado. Conhecer cada tipo de instituição ajuda a entender custos, garantias e o papel de quem intermedia suas aplicações.',
      ],
      topics: [
        { id: '1.4c.1', title: 'Bancos comerciais, múltiplos e de investimento' },
        { id: '1.4c.2', title: 'Caixa Econômica Federal' },
        { id: '1.4c.3', title: 'BNDES' },
        { id: '1.4c.4', title: 'Cooperativas de crédito' },
        { id: '1.4c.5', title: 'Sociedades de crédito, financiamento e investimento (financeiras)' },
        { id: '1.4c.6', title: 'Sociedades de crédito imobiliário' },
        { id: '1.4c.7', title: 'Corretoras e distribuidoras (CTVM e DTVM)' },
        { id: '1.4c.8', title: 'Corretoras de câmbio e de mercadorias' },
        { id: '1.4c.9', title: 'Mercados regulamentados de valores mobiliários' },
      ],
    },
    {
      id: '1.5',
      title: 'Lei e conformidade',
      resumo: [
        'As obrigações legais e de compliance que cercam quem lida com dinheiro de terceiros — da atividade do assessor de investimentos à prevenção à lavagem de dinheiro.',
      ],
      topics: [
        { id: '1.5.1', title: 'Lei e conformidade' },
        { id: '1.5.2', title: 'Atividade e autorização do assessor de investimentos' },
        { id: '1.5.3', title: 'Práticas vedadas e penalidades' },
        { id: '1.5.4', title: 'Prevenção à lavagem de dinheiro (Lei 9.613/98)' },
        { id: '1.5.5', title: 'Obrigações de prevenção e comunicação ao COAF' },
        { id: '1.5.6', title: 'Fases da lavagem de dinheiro e penalidades' },
      ],
    },
    {
      id: '1.6',
      title: 'Valor do dinheiro no tempo',
      resumo: [
        'O conceito mais importante das finanças: R$ 1 hoje vale mais do que R$ 1 amanhã. Daqui saem juros compostos, valor presente e futuro, TIR, VPL e amortização.',
        'Domine esta seção e boa parte de investimentos, crédito e viabilidade de projetos passa a fazer sentido.',
      ],
      topics: [
        { id: '1.6.1', title: 'Princípios de matemática financeira', ferramenta: true },
        { id: '1.6.2', title: 'Regimes de capitalização' },
        { id: '1.6.3', title: 'Equivalência de taxas', ferramenta: true },
        { id: '1.6.4', title: 'Fluxo de caixa' },
        { id: '1.6.5', title: 'Viabilidade de projetos (TIR, VPL e TMA)', ferramenta: true },
        { id: '1.6.6', title: 'TIR modificada' },
        { id: '1.6.7', title: 'Perpetuidade' },
        { id: '1.6.8', title: 'Taxa real x taxa nominal', ferramenta: true },
        { id: '1.6.9', title: 'Desconto por dentro x por fora' },
        { id: '1.6.10', title: 'Sistemas de amortização (SAC, Price)', ferramenta: true },
        { id: '1.6.11', title: 'Série postecipada, antecipada e com carência' },
        { id: '1.6.12', title: 'Payback simples e descontado' },
        { id: '1.6.13', title: 'Custo médio ponderado de capital (WACC)' },
        { id: '1.6.14', title: 'EBITDA' },
        { id: '1.6.15', title: 'Cupom cambial' },
      ],
    },
    {
      id: '1.8',
      title: 'Perfil de risco',
      resumo: [
        'Capacidade e tolerância a risco são coisas diferentes. Entender o perfil evita carteiras que a pessoa não consegue sustentar em momentos de queda.',
      ],
      topics: [{ id: '1.8.1', title: 'Perfil de risco do cliente' }],
    },
  ],
};
