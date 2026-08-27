import { Info } from 'lucide-react';
import type { ContentBlock } from '@/lib/curriculum';

export function TopicContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-editorial mt-3">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return <p key={i}>{block.text}</p>;

          case 'list':
            return (
              <ul key={i} className="mb-4 space-y-1.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5 text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case 'formula':
            return (
              <p
                key={i}
                className="mb-4 rounded-lg border border-border bg-surface-2 px-4 py-3 text-center font-serif text-[1.05rem] text-ink"
              >
                {block.text}
              </p>
            );

          case 'note':
            return (
              <div
                key={i}
                className="mb-4 flex items-start gap-3 rounded-lg border border-border bg-surface-2 p-4"
              >
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                <p className="!mb-0 text-sm text-muted">{block.text}</p>
              </div>
            );

          case 'table':
            return (
              <div key={i} className="mb-5 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border-strong text-left">
                      {block.headers.map((h, j) => (
                        <th
                          key={j}
                          className="whitespace-nowrap px-3 py-2 font-semibold text-ink"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-b border-border">
                        {row.map((cell, c) => (
                          <td key={c} className="px-3 py-2 align-top text-muted">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
