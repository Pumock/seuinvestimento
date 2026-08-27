import Link from 'next/link';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="font-serif text-6xl text-accent">404</span>
      <h1 className="mt-4 font-serif text-2xl text-ink">
        Não encontramos esta página
      </h1>
      <p className="mt-2 text-muted">
        O conteúdo pode ter mudado de lugar ou ainda não existe.
      </p>
      <Link
        href="/modulos"
        className="mt-6 rounded-full bg-ink px-5 py-3 text-sm font-medium text-[var(--bg)] hover:opacity-90"
      >
        Ver os módulos
      </Link>
    </Container>
  );
}
