import type { Module, Section } from './types';
import { slugify } from './slug';
import { modulo0 } from './modulo-0';
import { modulo1 } from './modulo-1';
import { modulo2 } from './modulo-2';
import { modulo3 } from './modulo-3';
import { modulo4 } from './modulo-4';
import { modulo5 } from './modulo-5';
import { modulo6 } from './modulo-6';
import { modulo7 } from './modulo-7';
import { modulo8 } from './modulo-8';

export type { Module, Section, Topic, Nivel } from './types';
export { slugify } from './slug';

/** Todos os módulos, na ordem do currículo. */
export const modules: Module[] = [
  modulo0,
  modulo1,
  modulo2,
  modulo3,
  modulo4,
  modulo5,
  modulo6,
  modulo7,
  modulo8,
];

/** Módulos "de conteúdo" (exclui o onboarding da grade principal). */
export const contentModules: Module[] = modules.filter(
  (m) => m.number >= 1 && m.number <= 8,
);

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

/** Slug estável para uma seção (derivado do título, único dentro do módulo). */
export function sectionSlug(section: Section): string {
  return slugify(section.title);
}

export function getSection(
  moduleSlug: string,
  secSlug: string,
): { module: Module; section: Section } | undefined {
  const module = getModule(moduleSlug);
  if (!module) return undefined;
  const section = module.sections.find((s) => sectionSlug(s) === secSlug);
  if (!section) return undefined;
  return { module, section };
}

/** Estatísticas agregadas para a home. */
export const stats = {
  modulos: contentModules.length,
  secoes: modules.reduce((acc, m) => acc + m.sections.length, 0),
  aulas: modules.reduce((acc, m) => acc + m.totalAulas, 0),
  topicos: modules.reduce(
    (acc, m) => acc + m.sections.reduce((a, s) => a + s.topics.length, 0),
    0,
  ),
};

/** Índice para navegação anterior/próximo entre módulos de conteúdo. */
export function moduleNeighbors(slug: string): {
  prev?: Module;
  next?: Module;
} {
  const list = modules.filter((m) => m.number >= 1);
  const i = list.findIndex((m) => m.slug === slug);
  if (i === -1) return {};
  return { prev: list[i - 1], next: list[i + 1] };
}
