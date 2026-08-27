export type Nivel = 'Fundamentos' | 'Intermediário' | 'Avançado';

/** Blocos de conteúdo que compõem o corpo de um tópico. */
export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'formula'; text: string }
  | { type: 'note'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface Topic {
  /** Identificador de origem (ex.: "6.1.1"). Não é usado em rotas. */
  id: string;
  title: string;
  /**
   * Marca tópicos que ganharão ferramenta interativa no futuro
   * (ex.: simulador de IR, calculadora de juros compostos).
   */
  ferramenta?: boolean;
  /** Conteúdo do tópico. Quando ausente, o tópico é exibido só como título. */
  content?: ContentBlock[];
}

export interface Section {
  /** Identificador de origem (ex.: "6.1"). */
  id: string;
  title: string;
  /** Conteúdo básico da seção (parágrafos de abertura). */
  resumo: string[];
  topics: Topic[];
}

export interface Module {
  number: number;
  slug: string;
  title: string;
  shortTitle: string;
  /** Frase curta de vitrine. */
  tagline: string;
  /** Conteúdo básico do módulo (parágrafos). */
  descricao: string[];
  duracao: string;
  totalAulas: number;
  /** Nome do ícone lucide-react. */
  icon: string;
  nivel: Nivel;
  sections: Section[];
}
