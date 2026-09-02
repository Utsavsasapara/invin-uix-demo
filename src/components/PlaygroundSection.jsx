import { useState } from 'react';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Button } from 'invin-uix/ui/button';
import { Separator } from 'invin-uix/ui/separator';
import { Code, Eye } from 'invin-uix/ui/icons';

/**
 * PlaygroundSection — Wraps a single demo example with title, description,
 * live preview, and toggleable code snippet.
 */
export function PlaygroundSection({ title, description, code, children }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-label font-semibold text-[var(--foreground)]">{title}</h3>
        {description && <p className="text-caption text-muted-foreground mt-0.5">{description}</p>}
      </div>

      <Card>
        <CardContent className="pt-5 pb-5">
          {/* Live Preview */}
          <div className="">
            {children}
          </div>
        </CardContent>

        {/* Code Toggle */}
        {code && (
          <>
            <div className="border-t border-[var(--border)] px-4 py-2 flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">
                {showCode ? 'Code' : 'Preview'}
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setShowCode(!showCode)}
                aria-label={showCode ? 'Hide code' : 'Show code'}
              >
                {showCode ? <Eye style={{ width: 14, height: 14 }} /> : <Code style={{ width: 14, height: 14 }} />}
              </Button>
            </div>

            {showCode && (
              <div className="border-t border-[var(--border)] bg-[var(--card)]/30">
                <pre className="p-4 text-caption overflow-x-auto font-mono text-[var(--foreground)] leading-relaxed">
                  <code>{code.trim()}</code>
                </pre>
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
}

/**
 * PropsTable — Displays component props in a compact table format.
 */
export function PropsTable({ props: propsList }) {
  if (!propsList || propsList.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-caption border-collapse">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="text-left py-2 px-3 font-medium text-[var(--muted-foreground)]">Prop</th>
            <th className="text-left py-2 px-3 font-medium text-[var(--muted-foreground)]">Type</th>
            <th className="text-left py-2 px-3 font-medium text-[var(--muted-foreground)]">Default</th>
            <th className="text-left py-2 px-3 font-medium text-[var(--muted-foreground)]">Description</th>
          </tr>
        </thead>
        <tbody>
          {propsList.map((p, i) => (
            <tr key={i} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-3 font-mono text-[var(--accent)]">{p.name}</td>
              <td className="py-2 px-3 font-mono text-[var(--muted-foreground)]">{p.type}</td>
              <td className="py-2 px-3 font-mono">{p.default || '—'}</td>
              <td className="py-2 px-3 text-[var(--muted-foreground)]">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * ComponentPage — Full page layout for a single component demo.
 * Provides consistent header, description, and sections.
 */
export function ComponentPage({ name, description, importCode, children }) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-[var(--foreground)] font-[700] tracking-[-0.02em]">{name}</h2>
        {description && <p className="text-[var(--foreground)] text-[var(--muted-foreground)] mt-1">{description}</p>}
      </div>

      {/* Import */}
      {importCode && (
        <Card>
          <CardContent className="py-3">
            <pre className="text-caption font-mono text-[var(--foreground)] overflow-x-auto">
              <code>{importCode}</code>
            </pre>
          </CardContent>
        </Card>
      )}

      <Separator />

      {/* Demo Sections */}
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
}
