import type { Module } from './types';

export const modulo6: Module = {
  number: 6,
  slug: 'tributacao',
  title: 'Planejamento Tributário',
  shortTitle: 'Tributação',
  tagline: 'Pagar o imposto certo — nem mais, nem menos — de forma legal.',
  descricao: [
    'Impostos corroem retorno silenciosamente. Este tema ensina a lógica do sistema tributário brasileiro e como ele incide sobre pessoas físicas, investimentos, imóveis e patrimônio.',
    'A meta não é sonegar, e sim organizar. Entender a tributação permite escolher produtos, prazos e estruturas que reduzem a mordida do Leão dentro da lei.',
  ],
  duracao: '06:52:01',
  totalAulas: 27,
  icon: 'Landmark',
  nivel: 'Avançado',
  sections: [
    // ============================================================
    // 6.1 Princípios de tributação
    // ============================================================
    {
      id: '6.1',
      title: 'Princípios de tributação',
      resumo: [
        'O alfabeto tributário: o que é um tributo, os princípios constitucionais que limitam o poder de cobrar e a estrutura do sistema tributário nacional.',
      ],
      topics: [
        {
          id: '6.1.1',
          title: 'Conceito de tributo',
          content: [
            {
              type: 'p',
              text: 'O Código Tributário Nacional (CTN) define tributo como toda prestação pecuniária compulsória, instituída em lei, que não constitui sanção por ato ilícito e é cobrada mediante atividade administrativa vinculada. Em outras palavras: é uma obrigação de pagar em dinheiro, prevista em lei, que não é multa e cuja cobrança segue um rito regrado.',
            },
            {
              type: 'p',
              text: 'A formulação geral do CTN classifica os tributos em três espécies: impostos, taxas e contribuições de melhoria. A Constituição prevê ainda empréstimos compulsórios e contribuições especiais.',
            },
            {
              type: 'list',
              items: [
                'Imposto: decorre de uma situação do contribuinte independente de qualquer atividade estatal específica (ex.: ter renda, possuir um imóvel).',
                'Taxa: relaciona-se ao poder de polícia ou à prestação de um serviço público específico e divisível.',
                'Contribuição de melhoria: decorre de obra pública que valoriza o imóvel do contribuinte.',
              ],
            },
            {
              type: 'p',
              text: 'A espécie de um tributo não depende do nome que a lei lhe dá, mas do seu fato gerador e da sua estrutura jurídica. Essa distinção importa porque cada espécie tem pressupostos, limites e finalidades próprios.',
            },
          ],
        },
        {
          id: '6.1.2',
          title: 'Princípios constitucionais',
          content: [
            {
              type: 'p',
              text: 'A Constituição impõe limites ao poder de tributar. Conhecer esses princípios é o que permite reconhecer quando uma cobrança é indevida.',
            },
            {
              type: 'list',
              items: [
                'Legalidade: não há tributo sem lei que o institua ou majore.',
                'Anterioridade (anual e nonagesimal): protege contra cobranças imediatas, salvo exceções constitucionais.',
                'Isonomia: tratamento igual para situações equivalentes, admitidas diferenciações justificadas (como a capacidade contributiva).',
                'Capacidade contributiva: sempre que possível, os impostos são graduados conforme a capacidade econômica de cada um.',
                'Vedação ao confisco: a tributação não pode ser tão intensa a ponto de esvaziar a propriedade.',
                'Irretroatividade: fatos passados não são alcançados por nova incidência mais gravosa.',
                'Liberdade de tráfego: tributos não podem virar barreira à circulação de pessoas e mercadorias entre Estados e Municípios.',
              ],
            },
            {
              type: 'p',
              text: 'A Emenda Constitucional nº 132/2023 acrescentou os princípios da simplicidade, transparência, justiça tributária, cooperação e defesa do meio ambiente, e determinou que as mudanças busquem atenuar efeitos regressivos. Ou seja: não basta arrecadar — importa também clareza, neutralidade e distribuição justa do ônus.',
            },
          ],
        },
        {
          id: '6.1.3',
          title: 'Sistema tributário brasileiro',
          content: [
            {
              type: 'p',
              text: 'O sistema é federativo: União, Estados, Distrito Federal e Municípios têm competências próprias para instituir tributos.',
            },
            {
              type: 'table',
              headers: ['Ente', 'Principais tributos'],
              rows: [
                ['União', 'IR, IPI, IOF, contribuições sociais e CIDE'],
                ['Estados e DF', 'ICMS, IPVA e ITCMD'],
                ['Municípios', 'ISS, IPTU e ITBI'],
              ],
            },
            {
              type: 'p',
              text: 'A Reforma Tributária do consumo criou o IBS (competência compartilhada entre Estados, Municípios e DF), a CBS (competência da União) e o Imposto Seletivo. A Lei Complementar nº 214/2025 orienta IBS e CBS pelo princípio da neutralidade, com não cumulatividade ampla e transição gradual — sem eliminar de imediato todos os tributos anteriores.',
            },
          ],
        },
        {
          id: '6.1.4',
          title: 'Conceitos importantes das normas tributárias',
          content: [
            {
              type: 'list',
              items: [
                'Fato gerador: a situação prevista em lei que faz nascer a obrigação de pagar.',
                'Base de cálculo: o valor que quantifica o fato gerador.',
                'Alíquota: o percentual (ou valor) aplicado sobre a base.',
                'Contribuinte: quem tem relação pessoal e direta com o fato gerador.',
                'Responsável: quem, sem ser o contribuinte, é obrigado a pagar por determinação legal.',
              ],
            },
            {
              type: 'p',
              text: 'A obrigação principal é o pagamento do tributo ou da penalidade. A obrigação acessória são os deveres instrumentais — escriturar, emitir nota, entregar declarações. Descumprir uma obrigação acessória pode gerar multa, convertendo-a em obrigação principal.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // 6.2 Tributação sobre empresas
    // ============================================================
    {
      id: '6.2',
      title: 'Tributação sobre empresas',
      resumo: [
        'Os regimes empresariais (Simples, Lucro Presumido, Lucro Real) e o que muda com a Reforma Tributária de 2026 — relevante para quem tem empresa ou pretende abrir uma.',
      ],
      topics: [
        {
          id: '6.2.1',
          title: 'Regimes de tributação empresarial',
          content: [
            {
              type: 'p',
              text: 'Escolher o regime é uma das decisões fiscais mais importantes de uma empresa. Há três grandes caminhos, cada um com sua base de cálculo.',
            },
            {
              type: 'p',
              text: 'Simples Nacional: regime favorecido para microempresas e empresas de pequeno porte, com recolhimento unificado (DAS). A alíquota efetiva depende da receita acumulada, do anexo, da atividade e da folha (fator R). Não existe uma alíquota única — a tabela traz alíquotas nominais, mas o cálculo real usa a fórmula da alíquota efetiva.',
            },
            {
              type: 'p',
              text: 'Lucro Presumido: a lei presume uma margem de lucro sobre a receita. O IRPJ é de 15%, com adicional de 10% sobre a parcela do lucro que exceder R$ 20.000,00 por mês do período. A CSLL costuma ser de 9%, sobre base presumida de 12% ou 32% da receita conforme a atividade. PIS e Cofins, em regra cumulativos nesse regime, têm regras próprias.',
            },
            {
              type: 'p',
              text: 'Lucro Real: IRPJ e CSLL incidem sobre o lucro contábil ajustado por adições, exclusões e compensações. Tende a ser mais vantajoso quando a margem efetiva é baixa, há muitas despesas dedutíveis ou é preciso maior precisão na apuração.',
            },
            {
              type: 'table',
              headers: [
                'Regime',
                'Base central',
                'IRPJ e CSLL (referência)',
                'Ponto de atenção',
              ],
              rows: [
                [
                  'Simples Nacional',
                  'Receita bruta e anexos',
                  'Alíquota efetiva variável',
                  'Atividade, faixa de receita, fator R e sublimites',
                ],
                [
                  'Lucro Presumido',
                  'Percentual de presunção sobre a receita',
                  'IRPJ 15% + adicional; CSLL em regra 9%',
                  'Margem presumida pode superar ou ficar abaixo da real',
                ],
                [
                  'Lucro Real',
                  'Lucro contábil ajustado',
                  'IRPJ 15% + adicional; CSLL em regra 9%',
                  'Mais complexidade; permite compensações conforme a lei',
                ],
              ],
            },
          ],
        },
        {
          id: '6.2.2',
          title: 'Reforma Tributária (2026)',
          content: [
            {
              type: 'p',
              text: 'A Reforma Tributária do consumo não é a troca instantânea de todos os tributos. Ela institui IBS, CBS e Imposto Seletivo, com período de transição e regulamentações sucessivas. Por isso, 2026 é um marco de adaptação operacional, fiscal e tecnológica: empresas precisam revisar cadastros, contratos, documentos fiscais, formação de preços, créditos e sistemas.',
            },
            {
              type: 'p',
              text: 'A neutralidade busca reduzir decisões econômicas motivadas apenas por diferenças artificiais de tributação. A não cumulatividade procura evitar a incidência em cascata, mas seus efeitos dependem das regras de creditamento, dos regimes diferenciados e do tratamento setorial. Para pequenas empresas, a relação entre o Simples e o aproveitamento de créditos pelo comprador merece atenção especial.',
            },
          ],
        },
        {
          id: '6.2.3',
          title: 'Estrutura de tributação empresarial no Brasil',
          content: [
            {
              type: 'p',
              text: 'A carga de uma empresa deve ser analisada por camadas, não por uma alíquota isolada.',
            },
            {
              type: 'list',
              items: [
                'Tributos sobre consumo e faturamento',
                'Tributos sobre o lucro',
                'Encargos sobre a folha de pagamento',
                'Tributos patrimoniais',
                'Retenções na fonte',
                'Obrigações acessórias (o custo de conformidade)',
              ],
            },
            {
              type: 'p',
              text: 'Comparar regimes apenas pela alíquota nominal leva a conclusões erradas, porque cada regime adota bases, créditos, prazos e responsabilidades diferentes. O que importa é a carga efetiva.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // 6.3 Tributação das pessoas físicas
    // ============================================================
    {
      id: '6.3',
      title: 'Tributação das pessoas físicas',
      resumo: [
        'O Imposto de Renda da Pessoa Física de ponta a ponta: tipos de rendimento, a Declaração Anual de Ajuste (DAA), deduções e a declaração de bens.',
      ],
      topics: [
        {
          id: '6.3.1',
          title: 'Fundamentos do Imposto de Renda PF',
          content: [
            {
              type: 'p',
              text: 'O IRPF incide sobre três grandes grupos: rendimentos tributáveis (na tabela progressiva), rendimentos de tributação exclusiva ou definitiva (como juros e ganhos em bolsa) e ganhos de capital. Há ainda os rendimentos isentos e não tributáveis, que não pagam imposto mas em geral precisam ser declarados.',
            },
            {
              type: 'table',
              headers: ['Faixa (base mensal)', 'Alíquota'],
              rows: [
                ['1ª faixa (isenção)', '0%'],
                ['2ª faixa', '7,5%'],
                ['3ª faixa', '15%'],
                ['4ª faixa', '22,5%'],
                ['Acima de R$ 4.664,68', '27,5%'],
              ],
            },
            {
              type: 'p',
              text: 'A alíquota da faixa não é a alíquota efetiva: aplica-se a tabela com a parcela a deduzir, de modo que o imposto real fica abaixo do percentual da faixa. A partir de 2026, há ainda redução do imposto para rendimentos tributáveis até R$ 7.350,00 por mês (e até R$ 88.200,00 no ano), com imposto zerado até os limites inferiores.',
            },
            {
              type: 'note',
              text: 'Primeiro calcula-se o imposto pela tabela; só depois, quando cabível, aplica-se a redução legal. São mecanismos distintos.',
            },
          ],
        },
        {
          id: '6.3.2',
          title: 'Definição dos rendimentos',
          content: [
            {
              type: 'p',
              text: 'Separar a natureza de cada rendimento é o que evita erros na declaração — porque cada tipo segue um regime diferente.',
            },
            {
              type: 'list',
              items: [
                'Sujeitos à tabela progressiva: salários, aluguéis, pensões, proventos e prestação de serviços.',
                'Tributação exclusiva/definitiva: juros, ganhos líquidos em bolsa, rendimentos de fundos e ganhos de capital.',
                'Isentos: não pagam imposto, mas com frequência precisam ser declarados e compõem a análise da evolução patrimonial.',
              ],
            },
          ],
        },
        {
          id: '6.3.3',
          title: 'Declaração Anual de Ajuste (DAA)',
          ferramenta: true,
          content: [
            {
              type: 'p',
              text: 'A Declaração Anual de Ajuste consolida tudo: rendimentos, deduções, imposto retido, carnê-leão, ganhos de capital, operações em bolsa, bens, direitos, dívidas e ônus. É o acerto de contas anual com a Receita.',
            },
            {
              type: 'p',
              text: 'O contribuinte escolhe entre o desconto simplificado e as deduções legais, observados os limites anuais. Para o ano-calendário de 2026 (exercício 2027), a tabela anual chega a 27,5%, com dedução por dependente de R$ 2.275,08, limite de instrução de R$ 3.561,50 e limite do desconto simplificado de R$ 17.640,00.',
            },
          ],
        },
        {
          id: '6.3.4',
          title: 'Demais declarações fiscais',
          content: [
            {
              type: 'p',
              text: 'Além da DAA, alguns eventos geram obrigações específicas, conforme os valores e a regulamentação vigente.',
            },
            {
              type: 'list',
              items: [
                'Ganho de capital (programa GCAP), na venda de bens e direitos.',
                'Operações em bolsa e carnê-leão (rendimentos sem retenção, como aluguéis recebidos de pessoa física).',
                'Atividade rural, criptoativos (DeCripto) e informações patrimoniais no exterior.',
              ],
            },
            {
              type: 'p',
              text: 'O pré-preenchimento facilita, mas não elimina o dever de conferir a documentação. A responsabilidade pelos dados continua sendo do contribuinte.',
            },
          ],
        },
        {
          id: '6.3.5',
          title: 'Estudo de caso — declaração anual',
          content: [
            {
              type: 'p',
              text: 'Imagine alguém que, em 2026, recebeu R$ 72.000,00 de rendimentos tributáveis, R$ 12.000,00 de rendimentos isentos e R$ 10.000,00 de juros de renda fixa.',
            },
            {
              type: 'list',
              items: [
                'Os R$ 72.000,00 entram no ajuste anual pela tabela progressiva (e podem ter redução, se cumpridos os requisitos).',
                'Os R$ 12.000,00 são informados como isentos.',
                'Os R$ 10.000,00 de juros têm tributação própria, em geral retida na fonte, e não devem ser somados de novo como rendimento tributável.',
              ],
            },
            {
              type: 'p',
              text: 'A lição: separar a natureza jurídica e o regime de incidência de cada valor é o que garante uma declaração correta.',
            },
          ],
        },
        {
          id: '6.3.6',
          title: 'Declaração de bens no exterior',
          content: [
            {
              type: 'p',
              text: 'Declarar um bem não significa, por si só, pagar imposto sobre ele. A declaração patrimonial permite ao Fisco acompanhar a evolução do patrimônio e a compatibilidade entre bens e rendimentos.',
            },
            {
              type: 'p',
              text: 'Ativos no exterior devem ser declarados conforme a Lei nº 14.754/2023, com atenção à conversão cambial, à data de aquisição, à realização do rendimento e a eventual imposto já pago no exterior.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // 6.4 Tributação sobre investimentos
    // ============================================================
    {
      id: '6.4',
      title: 'Tributação sobre investimentos',
      resumo: [
        'Como cada aplicação é tributada: a tabela regressiva da renda fixa, o come-cotas dos fundos, isenções (LCI, LCA, dividendos), bolsa e o IR sobre imóveis.',
        'Saber a tributação líquida é o que permite comparar investimentos de verdade.',
      ],
      topics: [
        {
          id: '6.4.1',
          title: 'Tributação das aplicações financeiras',
          ferramenta: true,
          content: [
            {
              type: 'p',
              text: 'A regra de ouro do investidor: comparar retorno líquido, não rentabilidade bruta.',
            },
            {
              type: 'formula',
              text: 'Retorno líquido = retorno bruto − imposto − custos − perdas não recuperáveis',
            },
            {
              type: 'p',
              text: 'Na maior parte da renda fixa e dos fundos de longo prazo, vale a tabela regressiva: quanto mais tempo o dinheiro fica aplicado, menor a alíquota. O imposto incide sobre o rendimento (não sobre o principal) e costuma ser cobrado no resgate.',
            },
            {
              type: 'table',
              headers: ['Prazo da aplicação', 'Alíquota de IR'],
              rows: [
                ['Até 180 dias', '22,5%'],
                ['De 181 a 360 dias', '20%'],
                ['De 361 a 720 dias', '17,5%'],
                ['Acima de 720 dias', '15%'],
              ],
            },
            {
              type: 'table',
              headers: ['Produto ou operação', 'IR de referência', 'Observações'],
              rows: [
                [
                  'Renda fixa geral e fundos de longo prazo',
                  'Tabela regressiva (22,5% a 15%)',
                  'Depende do prazo de permanência',
                ],
                [
                  'Fundo de curto prazo',
                  '22,5% até 180 dias; 20% acima',
                  'A classificação do fundo é decisiva',
                ],
                [
                  'Fundo de ações',
                  '15% no resgate',
                  'Segue a regra própria de renda variável',
                ],
                [
                  'Poupança',
                  'Isenta para pessoa física, em regra',
                  'Deve ser declarada mesmo sendo isenta',
                ],
                [
                  'LCI / LCA e títulos isentos',
                  'Isentos quando enquadrados',
                  'Conferir o produto e a legislação vigente',
                ],
                [
                  'Debêntures incentivadas',
                  'Isenção conforme lei específica',
                  'Não presumir isenção para qualquer debênture',
                ],
              ],
            },
            {
              type: 'p',
              text: 'Exemplo: R$ 100.000,00 que rendem 12% brutos em um ano geram R$ 12.000,00. Se a alíquota for 17,5%, o imposto é R$ 2.100,00 e o rendimento líquido, R$ 9.900,00 — saldo de R$ 109.900,00 antes dos custos. Em um instrumento isento com o mesmo rendimento bruto, o saldo seria R$ 112.000,00. Mas a comparação só é válida se risco, liquidez e retorno bruto forem equivalentes.',
            },
          ],
        },
        {
          id: '6.4.2',
          title: 'Fundos de investimento e come-cotas',
          content: [
            {
              type: 'p',
              text: 'O come-cotas é uma antecipação periódica do imposto em determinados fundos, feita pela redução da quantidade de cotas do investidor (normalmente em maio e novembro). Não é uma alíquota adicional: é um recolhimento antecipado, ajustado no resgate.',
            },
            {
              type: 'p',
              text: 'A incidência depende da classificação do fundo e do prazo médio da carteira. Fundos de ações seguem regra própria (em geral 15% sobre o rendimento no resgate), enquanto fundos de curto e longo prazo seguem as tabelas específicas.',
            },
            {
              type: 'p',
              text: 'Fundos fechados, exclusivos e outras estruturas podem ter regras especiais, inclusive tributação periódica. Vale sempre verificar o regulamento, o informe de rendimentos e a classificação fiscal do fundo.',
            },
          ],
        },
        {
          id: '6.4.3',
          title: 'Ações, ETFs, BDRs e operações em bolsa',
          content: [
            {
              type: 'p',
              text: 'Na renda variável, o ganho líquido é apurado pela diferença entre o preço de venda e o custo de aquisição, descontadas as despesas e os prejuízos compensáveis. A apuração é mensal, e o imposto é pago pelo próprio investidor (via DARF).',
            },
            {
              type: 'p',
              text: 'Há uma retenção na fonte de 0,005% (o chamado dedo-duro) em certas operações, que serve para o Fisco cruzar informações — não é o imposto final. A tributação varia conforme a operação: mercado à vista, opções, termo, futuro, ETF, BDR ou ativo negociado no exterior.',
            },
            {
              type: 'note',
              text: 'No day trade, a alíquota de IR é tradicionalmente mais alta do que na operação comum, e a compensação de prejuízos segue regras próprias, separadas das operações comuns.',
            },
          ],
        },
        {
          id: '6.4.4',
          title: 'Dividendos e juros sobre capital próprio',
          content: [
            {
              type: 'p',
              text: 'Historicamente, dividendos tiveram tratamento distinto do lucro já tributado na empresa, enquanto os juros sobre capital próprio (JCP) têm retenção específica e limites legais.',
            },
            {
              type: 'p',
              text: 'A Lei nº 15.270/2025 alterou o tratamento de altas rendas e dividendos a partir do ano-calendário de 2026, criando regras de tributação mínima e retenções em hipóteses previstas. Como a incidência depende do valor, do beneficiário, da residência e da forma de distribuição, o tema não se resume a uma única porcentagem.',
            },
          ],
        },
        {
          id: '6.4.5',
          title: 'Investimentos imobiliários',
          content: [
            {
              type: 'p',
              text: 'A venda de um imóvel por pessoa física pode gerar ganho de capital, calculado, em geral, pela diferença entre o valor de venda e o custo de aquisição, com ajustes autorizados. As alíquotas são progressivas.',
            },
            {
              type: 'table',
              headers: ['Parcela do ganho de capital', 'Alíquota'],
              rows: [
                ['Até R$ 5 milhões', '15%'],
                ['De R$ 5 mi a R$ 10 mi', '17,5%'],
                ['De R$ 10 mi a R$ 30 mi', '20%'],
                ['Acima de R$ 30 milhões', '22,5%'],
              ],
            },
            {
              type: 'p',
              text: 'Existem hipóteses de isenção ou redução — como a venda do único imóvel dentro de um limite legal, o reinvestimento em imóvel residencial sob condições específicas e fatores de redução ligados ao tempo de propriedade. A aplicação é casuística e deve ser apurada no programa oficial de ganho de capital (GCAP).',
            },
            {
              type: 'p',
              text: 'Aluguéis recebidos por pessoa física, em regra, entram na tabela progressiva (com deduções autorizadas). Fundos imobiliários (FIIs) têm regras próprias, e a isenção dos rendimentos distribuídos depende de requisitos do fundo e do investidor.',
            },
          ],
        },
        {
          id: '6.4.6',
          title: 'Quadro comparativo de retorno líquido',
          content: [
            {
              type: 'p',
              text: 'Três investimentos com o mesmo ganho bruto de R$ 10.000,00 sobre R$ 100.000,00 aplicados. O quadro ignora risco, custos, inflação e liquidez — serve só para mostrar a mecânica.',
            },
            {
              type: 'table',
              headers: [
                'Investimento',
                'Ganho bruto',
                'IR',
                'Ganho líquido',
                'Retorno líquido',
              ],
              rows: [
                ['Renda fixa (15%)', 'R$ 10.000', 'R$ 1.500', 'R$ 8.500', '8,5%'],
                ['Fundo de ações (15%)', 'R$ 10.000', 'R$ 1.500', 'R$ 8.500', '8,5%'],
                ['Instrumento isento', 'R$ 10.000', 'R$ 0', 'R$ 10.000', '10,0%'],
              ],
            },
            {
              type: 'p',
              text: 'Um investimento isento com retorno bruto menor pode acabar rendendo o mesmo — ou menos — que uma alternativa tributada com retorno bruto maior. A decisão racional considera o retorno esperado ajustado ao risco, não só a isenção.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // 6.5 Imposto sobre altas rendas
    // ============================================================
    {
      id: '6.5',
      title: 'Imposto sobre altas rendas',
      resumo: [
        'As regras específicas — e em evolução — para tributação de rendas elevadas.',
      ],
      topics: [
        {
          id: '6.5.1',
          title: 'Imposto sobre altas rendas',
          content: [
            {
              type: 'p',
              text: 'A Lei nº 15.270/2025 criou, a partir do ano-calendário de 2026, dois movimentos complementares: redução do imposto para rendimentos mais baixos e tributação mínima para rendas elevadas. A ideia é aproximar a tributação efetiva de quem tem altos rendimentos globais, incluindo receitas que antes tinham tratamento favorecido, respeitados os limites e exclusões legais.',
            },
            {
              type: 'p',
              text: 'A tributação mínima não é uma alíquota simples aplicada a toda a renda. O cálculo envolve a base legal, os rendimentos computáveis, as deduções, o imposto já pago e uma alíquota mínima progressiva. Dividendos pagos, creditados ou remetidos ao exterior também ganharam disciplina específica — por isso a residência do beneficiário e a natureza do pagamento são decisivas.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // 6.6 Investimento no exterior
    // ============================================================
    {
      id: '6.6',
      title: 'Investimento no exterior',
      resumo: [
        'Como o Brasil tributa quem investe fora: estruturas offshore, ativos internacionais e criptoativos.',
      ],
      topics: [
        {
          id: '6.6.1',
          title: 'Investimento via offshore',
          content: [
            {
              type: 'p',
              text: 'Usar uma sociedade estrangeira, trust ou fundação não elimina automaticamente a tributação brasileira. A Lei nº 14.754/2023 disciplina aplicações financeiras, entidades controladas e trusts no exterior.',
            },
            {
              type: 'p',
              text: 'Entidades controladas enquadradas na lei podem ter seus lucros tributados em 31 de dezembro de cada ano, ainda que não distribuídos — especialmente quando situadas em jurisdição de tributação favorecida ou quando a renda ativa própria for inferior a 60% da renda total.',
            },
            {
              type: 'note',
              text: 'Uma estrutura internacional precisa de finalidade econômica legítima, contabilidade e documentação de origem. Empresa sem substância, usada para ocultar patrimônio, pode gerar autuações, multas e consequências penais.',
            },
          ],
        },
        {
          id: '6.6.2',
          title: 'Tributação sobre investimento no exterior',
          content: [
            {
              type: 'p',
              text: 'Aplicações financeiras no exterior de pessoa física residente no Brasil são, em regra, tributadas no ajuste anual à alíquota de 15%, sem dedução da base (Lei nº 14.754/2023). Isso abrange, por exemplo, depósitos remunerados, títulos, fundos, derivativos, participações não controladas e ativos virtuais enquadrados na lei.',
            },
            {
              type: 'p',
              text: 'O imposto pago no exterior pode ser compensado dentro dos limites legais quando houver tratado ou reciprocidade, sem ultrapassar o imposto brasileiro correspondente. A conversão cambial segue a cotação indicada pela legislação, e a variação cambial de depósito não remunerado pode ter tratamento específico.',
            },
          ],
        },
        {
          id: '6.6.3',
          title: 'Tributação em criptoativos',
          content: [
            {
              type: 'p',
              text: 'A Receita Federal classifica criptoativos como bens e direitos e orienta declará-los pelo valor de aquisição, não pelo valor de mercado. Criptoativos da mesma espécie são declarados quando o custo de aquisição atinge o limite oficial — atualmente R$ 5.000,00 por espécie. A lista inclui Bitcoin, altcoins, stablecoins, NFTs e outros.',
            },
            {
              type: 'p',
              text: 'A Lei nº 14.754/2023 pode tratar cripto custodiado no exterior como aplicação financeira no exterior, sujeita em regra a 15% no ajuste anual. Já operações internas podem seguir as regras de ganho de capital, com isenções e limites próprios. Vender, trocar por outro ativo, receber rendimentos, fazer staking ou mineração podem gerar fatos tributários diferentes.',
            },
            {
              type: 'note',
              text: 'Operações com criptoativos podem exigir informações específicas (como a DeCripto). Guarde o histórico de aquisições, vendas, permutas, transferências, taxas, carteiras e corretoras.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // 6.7 Planejamento tributário
    // ============================================================
    {
      id: '6.7',
      title: 'Planejamento tributário',
      resumo: [
        'Estruturas para organizar patrimônio de forma eficiente: holding patrimonial, ITCMD e as estratégias que conectam tributação a sucessão.',
      ],
      topics: [
        {
          id: '6.7.1',
          title: 'Holding patrimonial',
          content: [
            {
              type: 'p',
              text: 'Holding patrimonial é uma pessoa jurídica usada para organizar participações societárias, imóveis ou outros ativos, com objetivos de governança e sucessão. Constituir uma holding não garante economia tributária — a vantagem depende da integralização, da atividade efetiva, do regime de tributação, das receitas de aluguel, da venda de imóveis, da distribuição de lucros e das regras estaduais e municipais.',
            },
            {
              type: 'p',
              text: 'Ela pode facilitar administração, governança e sucessão, mas também gera custos de constituição, contabilidade e manutenção, além de risco de desconsideração quando usada de forma artificial. O planejamento precisa ser documentado e ter propósito negocial real.',
            },
          ],
        },
        {
          id: '6.7.2',
          title: 'ITCMD',
          content: [
            {
              type: 'p',
              text: 'O ITCMD incide sobre transmissão causa mortis (herança) e sobre doações, sendo de competência dos Estados e do Distrito Federal. A alíquota efetiva varia conforme a legislação local. O Senado fixa o teto — historicamente 8% (Resolução nº 9/1992) —, e cada Estado define sua alíquota dentro desse limite.',
            },
            {
              type: 'p',
              text: 'A Emenda Constitucional nº 132/2023 passou a prever progressividade conforme o valor do quinhão, legado ou doação, e alterou critérios de competência em algumas situações. Como a base, o momento do fato gerador, a localização do bem e o domicílio interferem no cálculo, todo planejamento sucessório deve considerar o Estado competente. Doações fracionadas, usufruto e adiantamento de legítima podem ter efeitos distintos.',
            },
          ],
        },
        {
          id: '6.7.3',
          title: 'Planejamento tributário',
          content: [
            {
              type: 'p',
              text: 'Planejamento tributário legítimo é escolher, entre alternativas permitidas por lei, a estrutura que atende ao objetivo econômico com menor custo fiscal — mantendo substância, transparência e documentação.',
            },
            {
              type: 'list',
              items: [
                'Elisão lícita: ocorre antes do fato gerador e dentro da lei.',
                'Evasão ou sonegação: envolve ocultação, fraude, simulação ou descumprimento deliberado.',
              ],
            },
            {
              type: 'p',
              text: 'A economia tributária não deve ser avaliada isoladamente: custos jurídicos, contábeis, financeiros e reputacionais também entram na conta. Uma estrutura que economiza imposto mas não se sustenta perante o Fisco costuma custar caro no fim.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // 6.8 Resumo tributário
    // ============================================================
    {
      id: '6.8',
      title: 'Resumo tributário',
      resumo: ['Uma síntese dos principais pontos para fixação e consulta rápida.'],
      topics: [
        {
          id: '6.8.1',
          title: 'A tributação pela sua perspectiva',
          content: [
            {
              type: 'p',
              text: 'Para analisar qualquer operação, responda a seis perguntas — nesta ordem — e o retorno (ou custo) líquido aparece:',
            },
            {
              type: 'list',
              items: [
                'Qual é o sujeito: pessoa física ou jurídica?',
                'Qual é o fato gerador?',
                'Qual é a base de cálculo?',
                'Qual é a alíquota?',
                'Quando ocorre o recolhimento?',
                'Quais declarações e documentos são necessários?',
              ],
            },
            {
              type: 'table',
              headers: ['Tema', 'Pergunta decisiva'],
              rows: [
                ['Renda fixa', 'Qual é o prazo e qual faixa regressiva se aplica?'],
                ['Fundos', 'Há come-cotas e qual é a classificação fiscal?'],
                ['Bolsa', 'É operação comum ou day trade? Há prejuízos a compensar?'],
                ['Imóvel', 'Houve ganho de capital? Cabe redução ou isenção?'],
                ['Exterior', 'É aplicação financeira, entidade controlada ou bem patrimonial?'],
                ['Criptoativo', 'Qual foi o custo de aquisição e onde ocorreu a custódia?'],
                ['Sucessão', 'Qual Estado é competente para o ITCMD e qual a alíquota?'],
              ],
            },
          ],
        },
        {
          id: '6.8.2',
          title: 'Resumo tributário',
          content: [
            {
              type: 'p',
              text: 'A tributação brasileira combina princípios constitucionais, as normas gerais do CTN, legislação federal, estadual e municipal e um conjunto de obrigações acessórias. Alguns fios condutores atravessam todo o tema:',
            },
            {
              type: 'list',
              items: [
                'Empresas: comparar regimes pela carga efetiva, não pela alíquota nominal.',
                'Pessoas físicas: separar rendimentos tributáveis, isentos, de tributação exclusiva e ganhos de capital.',
                'Investidores: comparar retorno líquido, prazo, risco, liquidez e custo de conformidade.',
                'Exterior e cripto: atenção redobrada à declaração, ao câmbio, à realização do rendimento e à documentação.',
              ],
            },
            {
              type: 'p',
              text: 'A Reforma Tributária acrescenta um novo eixo de análise para empresas (créditos, formação de preços e transição). A tributação de altas rendas reforça a importância de olhar os rendimentos de forma global. E, no planejamento patrimonial, holdings e doações podem organizar a sucessão, mas não são atalhos automáticos para reduzir tributos.',
            },
          ],
        },
      ],
    },
  ],
};
