import { useState } from 'react';
import { Button } from 'invin-uix/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from 'invin-uix/ui/dropdown-menu';
import { SquaresFour, Check } from 'invin-uix/ui/icons';

// ─── Product / accent families (UI Guide v2.0 §04) ──────────────────────────

export const ACCENTS = [
  { key: 'xdr', label: 'ISOC Core', desc: 'XDR · blue', color: '#2769FC' },
  { key: 'xdrplus', label: 'ISOC Extension', desc: 'XDR+ · purple', color: '#8A3FFC' },
  { key: 'oxdr', label: 'UEMP', desc: 'OXDR · red', color: '#DD3731' },
  { key: 'gsos', label: 'GRC', desc: 'GSOS · magenta', color: '#D02670' },
  { key: 'pulse', label: 'CPS Pulse', desc: 'Pulse · orange', color: '#FF832B' },
  { key: 'regimentAI', label: 'RegimentAI', desc: 'AI · green', color: '#0CB04A' },
  { key: 'assentra', label: 'Assentra', desc: 'Assets · violet', color: '#9752D9' },
];

/**
 * AppSwitcher — the topbar product navigator. Switches the live UI accent by
 * setting html[data-accent]. Shared across the demo layout and the home page.
 */
export function AppSwitcher() {
  const [accent, setAccent] = useState(
    () => document.documentElement.getAttribute('data-accent') || 'xdr'
  );

  const apply = (key) => {
    document.documentElement.setAttribute('data-accent', key);
    setAccent(key);
  };

  const current = ACCENTS.find((a) => a.key === accent) || ACCENTS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Switch product accent">
          <SquaresFour style={{ width: 14, height: 14 }} />
          <span className="hidden sm:inline">{current.label}</span>
          <span
            className="h-3 w-3 rounded-full border border-[var(--border)]"
            style={{ background: 'var(--accent)' }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" style={{ minWidth: 240 }}>
        <DropdownMenuLabel>Product family</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {ACCENTS.map((a) => (
          <DropdownMenuItem
            key={a.key}
            onSelect={() => apply(a.key)}
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <span
              className="h-4 w-4 rounded-full border border-[var(--border)] shrink-0"
              style={{ background: a.color }}
            />
            <span className="flex-1 min-w-0">
              <span className="block text-label text-[var(--foreground)]">{a.label}</span>
              <span className="block text-caption text-[var(--muted-foreground-faint)]">{a.desc}</span>
            </span>
            {accent === a.key && <Check style={{ width: 14, height: 14, color: 'var(--accent)' }} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
