import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-[var(--bg)] font-serif text-lg font-semibold">
        S
      </span>
      <span className="font-serif text-lg font-semibold tracking-tight text-ink">
        Seu<span className="text-accent">Investimento</span>
      </span>
    </Link>
  );
}
