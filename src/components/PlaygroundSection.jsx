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
        <h3 className="text-sm font-semibold text-[var(--invin-text)]">{title}</h3>
        {description && <p className="text-xs text-text-dim mt-0.5">{description}</p>}
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
            <div className="border-t border-[var(--invin-border)] px-4 py-2 flex items-center justify-between">
              <span className="text-[11px] text-text-dim font-medium uppercase tracking-wide">
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
              <div className="border-t border-[var(--invin-border)] bg-[var(--invin-bg-elev)]/30">
                <pre className="p-4 text-xs overflow-x-auto font-mono text-[var(--invin-text)] leading-relaxed">
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
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="border-b border-[var(--invin-border)]">
            <th className="text-left py-2 px-3 font-medium text-[var(--invin-text-dim)]">Prop</th>
            <th className="text-left py-2 px-3 font-medium text-[var(--invin-text-dim)]">Type</th>
            <th className="text-left py-2 px-3 font-medium text-[var(--invin-text-dim)]">Default</th>
            <th className="text-left py-2 px-3 font-medium text-[var(--invin-text-dim)]">Description</th>
          </tr>
        </thead>
        <tbody>
          {propsList.map((p, i) => (
            <tr key={i} className="border-b border-[var(--invin-border)] last:border-0">
              <td className="py-2 px-3 font-mono text-[var(--invin-accent)]">{p.name}</td>
              <td className="py-2 px-3 font-mono text-[var(--invin-text-dim)]">{p.type}</td>
              <td className="py-2 px-3 font-mono">{p.default || '—'}</td>
              <td className="py-2 px-3 text-[var(--invin-text-dim)]">{p.description}</td>
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
        <h2 className="text-[length:var(--invin-text-page-title)] font-[700] tracking-[-0.02em]">{name}</h2>
        {description && <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] mt-1">{description}</p>}
      </div>

      {/* Import */}
      {importCode && (
        <Card>
          <CardContent className="py-3">
            <pre className="text-xs font-mono text-[var(--invin-text)] overflow-x-auto">
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
