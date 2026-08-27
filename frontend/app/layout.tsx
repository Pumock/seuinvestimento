import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers/providers';
import { DocsShell } from '@/components/layout/docs-shell';

export const metadata: Metadata = {
  title: {
    default: 'SeuInvestimento — Do básico ao avançado em finanças',
    template: '%s · SeuInvestimento',
  },
  description:
    'Tudo o que uma pessoa precisa saber sobre finanças pessoais, investimentos, aposentadoria, seguros, tributação e sucessão — do básico ao avançado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg text-ink">
        <Providers>
          <DocsShell>{children}</DocsShell>
        </Providers>
      </body>
    </html>
  );
}
