import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';

/**
 * v2 type scale — 8 fixed steps, guide names (UI Guide v2.0 §06).
 * Each `text-*` utility sets font-size + line-height (from @theme inline in
 * tokens.css). Weight is applied separately — the guide pairs each step with
 * a recommended weight, shown below.
 *
 * One typeface: Geist (+ Geist Mono for data). 16px base, 12px floor.
 */
const scale = [
  { cls: 'text-display', role: 'Display', size: '30px', lh: '36px', weight: '700', weightCls: 'font-bold', use: 'Hero numbers, big KPI values', sample: 'Dashboard' },
  { cls: 'text-title', role: 'Title', size: '20px', lh: '28px', weight: '600', weightCls: 'font-semibold', use: 'Page H1, main headings', sample: 'Threat Overview' },
  { cls: 'text-section', role: 'Section', size: '18px', lh: '26px', weight: '600', weightCls: 'font-semibold', use: 'Section / group headers', sample: 'Recent Activity' },
  { cls: 'text-page-title', role: 'Page title', size: '16px', lh: '24px', weight: '500', weightCls: 'font-medium', use: 'Card headers, panel titles', sample: 'Compliance Score' },
  { cls: 'text-body', role: 'Body', size: '14px', lh: '20px', weight: '400', weightCls: 'font-normal', use: 'Default reading text', sample: 'This is the default body size for interface content.' },
  { cls: 'text-label', role: 'Label', size: '13px', lh: '18px', weight: '500', weightCls: 'font-medium', use: 'Field labels, buttons, meta', sample: 'Last updated 2 min ago' },
  { cls: 'text-caption', role: 'Caption', size: '12px', lh: '16px', weight: '500', weightCls: 'font-medium', use: 'Eyebrows, captions (the 12px floor)', sample: 'GOVERNANCE' },
  { cls: 'text-data', role: 'Data (mono)', size: '13px', lh: '20px', weight: '400', weightCls: 'font-normal font-mono', use: 'IDs, hashes, code, request IDs', sample: '019f1759-a9bd-7c8e' },
];

export default function TypographyDemo() {
  return (
    <ComponentPage
      name="Typography & Type Scale"
      description="One typeface — Geist (+ Geist Mono for data) — and one fixed 8-step scale. Sizes are in rem so text scales with the browser setting; 12px is the hard floor. Figures use tabular-nums so numbers align in tables and KPIs."
      importCode={`/* No import or config needed — the type scale ships in tokens.css
   via Tailwind v4 @theme inline. Just use the utilities: */

<h1 className="text-title font-semibold">Threat Overview</h1>
<p className="text-body">Paragraph text</p>
<span className="text-caption font-medium">EYEBROW</span>
<code className="text-data">req-019f1759</code>`}
    >
      {/* ─── Setup ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Setup"
        description="Typography works the moment you import tokens.css — no Tailwind config, no preset. Each text-* utility carries its size and line-height; you add the weight."
        code={`// 1. Import tokens in your app entry
import 'invin-uix/tokens.css';

// 2. Load the fonts (self-hosted)
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';

// 3. That's it. Tailwind v4 @theme inline exposes:
//    text-display  text-title    text-section  text-page-title
//    text-body     text-label    text-caption  text-data`}
      >
        <div className="space-y-2 text-body text-[var(--muted-foreground)]">
          <p><strong className="text-[var(--foreground)]">Font:</strong> Geist (UI) + Geist Mono (data / code)</p>
          <p><strong className="text-[var(--foreground)]">Base:</strong> 16px root — all sizes are rem, so they scale with the browser</p>
          <p><strong className="text-[var(--foreground)]">Floor:</strong> 12px (text-caption) — never go smaller</p>
          <p><strong className="text-[var(--foreground)]">Numerals:</strong> tabular-nums — digits align in columns</p>
        </div>
      </PlaygroundSection>

      {/* ─── Live Scale ───────────────────────────────────── */}
      <PlaygroundSection
        title="The 8-Step Scale"
        description="Every text style in the system is one of these eight. Don't invent sizes outside the set. Each utility sets size + line-height; pair it with the recommended weight."
        code={`<span className="text-display font-bold">Dashboard</span>
<h1 className="text-title font-semibold">Threat Overview</h1>
<h2 className="text-section font-semibold">Recent Activity</h2>
<h3 className="text-page-title font-medium">Compliance Score</h3>
<p  className="text-body">Default body copy</p>
<span className="text-label font-medium">Field label</span>
<span className="text-caption font-medium">EYEBROW</span>
<code className="text-data">019f1759-a9bd</code>`}
      >
        <div className="space-y-4 w-full">
          {scale.map((s) => (
            <div key={s.cls} className="flex items-baseline gap-4 py-2 border-b border-[var(--border)] last:border-0">
              <div className="flex-1 min-w-0">
                <p className={`${s.cls} ${s.weightCls} text-[var(--foreground)] truncate`}>{s.sample}</p>
              </div>
              <div className="shrink-0 text-right hidden sm:block">
                <Badge variant="outline" size="sm">{s.size} / {s.weight}</Badge>
              </div>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      {/* ─── Reference Table ──────────────────────────────── */}
      <PlaygroundSection
        title="Scale Reference"
        description="The full mapping of utility → size / line-height / recommended weight → where to use it."
        code={`/* Each utility sets size + line-height (from @theme inline).
   Apply the weight with a font-* class: */
.text-title { font-size: 1.25rem; line-height: 1.75rem; } /* + font-semibold */
.text-body  { font-size: 0.875rem; line-height: 1.25rem; } /* + font-normal */`}
      >
        <div className="overflow-x-auto w-full">
          <table className="w-full text-body">
            <thead>
              <tr className="border-b border-[var(--border)]">
                {['Role', 'Utility', 'Size', 'Line', 'Weight', 'Use'].map((h) => (
                  <th key={h} className="text-left py-2 pr-4 font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em] text-caption">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scale.map((s) => (
                <tr key={s.cls} className="border-b border-[var(--border)] last:border-0">
                  <td className="py-2 pr-4 font-medium text-[var(--foreground)]">{s.role}</td>
                  <td className="py-2 pr-4 font-mono text-[var(--accent)]">{s.cls}</td>
                  <td className="py-2 pr-4 font-mono text-[var(--muted-foreground)]">{s.size}</td>
                  <td className="py-2 pr-4 font-mono text-[var(--muted-foreground)]">{s.lh}</td>
                  <td className="py-2 pr-4 font-mono text-[var(--muted-foreground)]">{s.weight}</td>
                  <td className="py-2 text-[var(--muted-foreground)]">{s.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PlaygroundSection>

      {/* ─── Usage in Context ─────────────────────────────── */}
      <PlaygroundSection
        title="In Context"
        description="How the steps compose in a real card — title, body, KPI, and meta together."
        code={`<h3 className="text-page-title font-medium">Compliance Status</h3>
<p  className="text-body text-[var(--muted-foreground)]">
  Your organization is 94% compliant across 15 frameworks.
</p>
<span className="text-display font-bold text-[var(--accent)]">94%</span>
<span className="text-caption font-medium text-[var(--muted-foreground-faint)]">
  UPDATED 2 MIN AGO
</span>`}
      >
        <div className="w-full max-w-md">
          <Card>
            <CardContent>
              <h3 className="text-page-title font-medium text-[var(--foreground)]">Compliance Status</h3>
              <p className="text-body text-[var(--muted-foreground)] mt-1">
                Your organization is 94% compliant across 15 frameworks.
              </p>
              <span className="text-display font-bold text-[var(--accent)] mt-3 block">94%</span>
              <span className="text-caption font-medium text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em] mt-2 block">
                Updated 2 min ago
              </span>
              <code className="text-data text-[var(--muted-foreground)] mt-3 block">CVE-2024-38012 · severity: critical</code>
            </CardContent>
          </Card>
        </div>
      </PlaygroundSection>

      {/* ─── Tabular Nums ─────────────────────────────────── */}
      <PlaygroundSection
        title="Tabular Numerals"
        description="Numbers use tabular-nums (set on the app root), so columns of figures align without manual spacing."
        code={`/* Set once on your app root */
:root {
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
}`}
      >
        <div className="w-full max-w-xs">
          <div className="space-y-1 text-data">
            <div className="flex justify-between"><span className="text-[var(--muted-foreground)]">Revenue</span><span className="text-[var(--foreground)]">$1,234.56</span></div>
            <div className="flex justify-between"><span className="text-[var(--muted-foreground)]">Expenses</span><span className="text-[var(--foreground)]">$12,345.67</span></div>
            <div className="flex justify-between"><span className="text-[var(--muted-foreground)]">Profit</span><span className="text-[var(--foreground)]">$123,456.78</span></div>
          </div>
          <p className="text-caption text-[var(--muted-foreground-faint)] mt-3">
            Digits align vertically — each takes equal width.
          </p>
        </div>
      </PlaygroundSection>

      {/* ─── Do & Don't ───────────────────────────────────── */}
      <PlaygroundSection
        title="Do & Don't"
        description="Rules that keep type consistent across every product."
        code={`/* ✓ Do — use a scale utility + weight */
<h1 className="text-title font-semibold">Dashboard</h1>
<p  className="text-body">Content here.</p>

/* ✗ Don't — invent sizes off the scale */
<h1 className="text-[22px] font-bold">Dashboard</h1>
<p  className="text-[15px]">Content here.</p>`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <Card>
            <CardContent>
              <p className="text-label font-semibold text-[var(--ok)] mb-2">✓ Do</p>
              <ul className="space-y-1.5 text-body text-[var(--muted-foreground)]">
                <li>• Use one of the 8 scale utilities</li>
                <li>• Pair it with the recommended weight</li>
                <li>• Use <code className="text-data">text-data</code> for IDs, codes, hashes</li>
                <li>• Keep 12px (<code className="text-data">text-caption</code>) as the floor</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-label font-semibold text-[var(--error)] mb-2">✗ Don't</p>
              <ul className="space-y-1.5 text-body text-[var(--muted-foreground)]">
                <li>• Invent sizes outside the scale (<code className="text-data">text-[15px]</code>)</li>
                <li>• Go below 12px</li>
                <li>• Use px for font sizes (breaks scaling)</li>
                <li>• Change font-family per component</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
