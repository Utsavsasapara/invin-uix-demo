import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Badge } from 'invin-uix/ui/badge';

const roles = [
  { class: 'text-page-title', role: 'Page title', size: '26px', weight: '700', tracking: '-0.02em', lineHeight: '1.25', use: 'Screen H1, main headings', sample: 'Dashboard Overview' },
  { class: 'text-sub-heading', role: 'Sub-heading', size: '18px', weight: '700', tracking: '-0.02em', lineHeight: '1.25', use: 'Group headers, section titles', sample: 'Recent Activity' },
  { class: 'text-card-title', role: 'Card title', size: '14.5px', weight: '700', tracking: '-0.02em', lineHeight: '1.375', use: 'Panel titles, card headers', sample: 'Compliance Score' },
  { class: 'text-kpi', role: 'KPI value', size: '26px', weight: '700', tracking: '-0.02em', lineHeight: '1', use: 'Big numbers, metrics', sample: '$45,231' },
  { class: 'text-body', role: 'Body', size: '13.5px', weight: '400', tracking: '0', lineHeight: '1.5', use: 'Default text, paragraphs', sample: 'This is the default reading size for all body content in the interface.' },
  { class: 'text-label', role: 'Label / meta', size: '12px', weight: '500', tracking: '0', lineHeight: '1.25', use: 'Field labels, captions, metadata', sample: 'Last updated 2 min ago' },
  { class: 'text-eyebrow', role: 'Eyebrow', size: '11px', weight: '600', tracking: '0.05em', lineHeight: '1.25', use: 'Section labels, badges (uppercase)', sample: 'GOVERNANCE' },
  { class: 'text-mono', role: 'Mono', size: '12px', weight: '400', tracking: '0', lineHeight: '1.5', use: 'IDs, request IDs, code, hashes', sample: '019f1759-a9bd-7c8e' },
];

const genericScale = [
  { class: 'text-xs', size: '11px', token: '--invin-text-xs' },
  { class: 'text-sm', size: '12px', token: '--invin-text-sm' },
  { class: 'text-base', size: '13.5px', token: '--invin-text-base' },
  { class: 'text-lg', size: '14.5px', token: '--invin-text-lg' },
  { class: 'text-xl', size: '18px', token: '--invin-text-xl' },
  { class: 'text-2xl', size: '26px', token: '--invin-text-2xl' },
  { class: 'text-3xl', size: '30px', token: '--invin-text-3xl' },
  { class: 'text-4xl', size: '36px', token: '--invin-text-4xl' },
];

export default function TypographyDemo() {
  return (
    <ComponentPage
      name="Typography & Font Scale"
      description="One typeface — Inter — and one compact scale. Figures use tabular-nums so numbers align in tables and KPIs; IDs and code use JetBrains Mono."
      importCode={`/* No import needed — typography comes from tokens.css + preset */
/* Just use Tailwind classes: */

<h1 className="text-page-title">Dashboard</h1>
<p className="text-body">Paragraph text</p>
<span className="text-label">Caption</span>
<code className="text-mono">req-019f1759</code>`}
    >
      {/* ─── Setup ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Setup"
        description="Typography works automatically when you import tokens.css and use the Tailwind preset. The root font-size is 13.5px — all sizes are relative to this."
        code={`// 1. Import tokens in your app entry
import 'invin-uix/tokens.css';

// 2. Install fonts
import '@fontsource-variable/inter';
import '@fontsource/jetbrains-mono';

// 3. Set root in your CSS
:root {
  font-family: var(--invin-font-sans);
  font-size: 13.5px;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
}

// 4. Use the preset in tailwind.config
import invinPreset from 'invin-uix/preset';
export default { presets: [invinPreset] };`}
      >
        <div className="space-y-2 text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
          <p><strong className="text-[var(--invin-text)]">Font:</strong> Inter (UI) + JetBrains Mono (code)</p>
          <p><strong className="text-[var(--invin-text)]">Root:</strong> 13.5px — all rem values are relative to this</p>
          <p><strong className="text-[var(--invin-text)]">Numerals:</strong> tabular-nums — numbers align in columns</p>
          <p><strong className="text-[var(--invin-text)]">Tracking:</strong> Headings use -0.02em (tight), eyebrows use 0.05em (wide)</p>
        </div>
      </PlaygroundSection>

      {/* ─── Role-Based Scale (Live) ──────────────────────── */}
      <PlaygroundSection
        title="Role-Based Type Scale"
        description="Each role is a single class that applies size + weight + tracking + line-height. Don't invent sizes outside this set."
        code={`<h1 className="text-page-title">Page title · 26 / 700</h1>
<h2 className="text-sub-heading">Sub-heading · 18 / 700</h2>
<h3 className="text-card-title">Card title · 14.5 / 700</h3>
<span className="text-kpi">$45,231</span>
<p className="text-body">Body copy · 13.5 / 400</p>
<span className="text-label">Label & meta · 12 / 500</span>
<span className="text-eyebrow">EYEBROW · 11 / 600</span>
<code className="text-mono">019f1759-a9bd · mono</code>`}
      >
        <div className="space-y-4 w-full">
          {roles.map(r => (
            <div key={r.role} className="flex items-baseline gap-4 py-2 border-b border-[var(--invin-border)] last:border-0">
              <div className="flex-1 min-w-0">
                <p className={r.class}>{r.sample}</p>
              </div>
              <div className="shrink-0 text-right hidden sm:block">
                <Badge variant="outline" size="sm">{r.size} / {r.weight}</Badge>
              </div>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      {/* ─── Role Reference Table ─────────────────────────── */}
      <PlaygroundSection
        title="Role Reference"
        description="Complete mapping of roles → classes → properties. One class does it all."
        code={`/* Each text-* class sets ALL of these at once: */
.text-page-title {
  font-size: var(--invin-text-page-title);  /* 26px */
  line-height: 1.25;
  letter-spacing: -0.02em;
  font-weight: 700;
}

/* You never need to combine classes: */
/* ✗ text-2xl font-bold tracking-tight leading-tight */
/* ✓ text-page-title */`}
      >
        <div className="overflow-x-auto w-full">
          <table className="w-full text-[length:var(--invin-text-label)]">
            <thead>
              <tr className="border-b border-[var(--invin-border)]">
                <th className="text-left py-2 pr-4 font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em] text-[10px]">Role</th>
                <th className="text-left py-2 pr-4 font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em] text-[10px]">Class</th>
                <th className="text-left py-2 pr-4 font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em] text-[10px]">Size</th>
                <th className="text-left py-2 pr-4 font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em] text-[10px]">Weight</th>
                <th className="text-left py-2 font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em] text-[10px]">Use</th>
              </tr>
            </thead>
            <tbody>
              {roles.map(r => (
                <tr key={r.role} className="border-b border-[var(--invin-border)] last:border-0">
                  <td className="py-2 pr-4 font-[500]">{r.role}</td>
                  <td className="py-2 pr-4 font-mono text-[var(--invin-accent)]">{r.class}</td>
                  <td className="py-2 pr-4 font-mono">{r.size}</td>
                  <td className="py-2 pr-4 font-mono">{r.weight}</td>
                  <td className="py-2 text-[var(--invin-text-dim)]">{r.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PlaygroundSection>

      {/* ─── How to Use ───────────────────────────────────── */}
      <PlaygroundSection
        title="Usage Patterns"
        description="Three ways to apply typography — from most to least recommended."
        code={`/* ─── 1. Role-based (recommended) ─────────────────── */
<h1 className="text-page-title">Dashboard</h1>
<p className="text-body">Default paragraph.</p>
<span className="text-eyebrow">SECTION LABEL</span>

/* ─── 2. Direct token reference (edge cases) ──────── */
<p className="text-[length:var(--invin-text-body)]">
  When you need just the size without weight/tracking
</p>

/* ─── 3. Generic scale (escape hatch) ─────────────── */
<p className="text-sm font-medium">12px, medium</p>
<p className="text-lg font-bold">14.5px, bold</p>`}
      >
        <div className="space-y-6 w-full">
          <div>
            <p className="text-[length:var(--invin-text-label)] font-[600] text-[var(--invin-accent)] mb-2">1. Role-based classes (recommended)</p>
            <Card>
              <CardContent>
                <h1 className="text-page-title">Dashboard Overview</h1>
                <h2 className="text-sub-heading mt-2">Compliance Status</h2>
                <p className="text-body mt-1 text-[var(--invin-text-dim)]">Your organization is 94% compliant across 15 frameworks.</p>
                <span className="text-kpi text-[var(--invin-accent)] mt-2 block">94%</span>
              </CardContent>
            </Card>
          </div>

          <div>
            <p className="text-[length:var(--invin-text-label)] font-[600] text-[var(--invin-accent)] mb-2">2. Combining with color tokens</p>
            <Card>
              <CardContent>
                <span className="text-eyebrow text-[var(--invin-text-faint)]">RISK LEVEL</span>
                <p className="text-card-title mt-1">Critical Vulnerabilities</p>
                <p className="text-label text-[var(--invin-text-dim)] mt-0.5">12 unresolved across 3 systems</p>
                <code className="text-mono text-[var(--invin-text-dim)] mt-2 block">CVE-2024-38012 · severity: critical</code>
              </CardContent>
            </Card>
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── Generic Scale ─────────────────────────────────── */}
      <PlaygroundSection
        title="Generic Size Scale"
        description="For cases where role-based doesn't fit. These only set font-size — you add weight/tracking manually."
        code={`<p className="text-xs">11px (extra small)</p>
<p className="text-sm">12px (small)</p>
<p className="text-base">13.5px (base = body)</p>
<p className="text-lg">14.5px (large)</p>
<p className="text-xl">18px (extra large)</p>
<p className="text-2xl">26px</p>
<p className="text-3xl">30px</p>
<p className="text-4xl">36px</p>`}
      >
        <div className="space-y-2 w-full">
          {genericScale.map(s => (
            <div key={s.class} className="flex items-baseline gap-4 py-1">
              <span className={`${s.class} flex-1`}>The quick brown fox — {s.size}</span>
              <code className="text-mono text-[var(--invin-text-dim)] shrink-0">{s.class}</code>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      {/* ─── Tabular Nums ──────────────────────────────────── */}
      <PlaygroundSection
        title="Tabular Numerals"
        description="Numbers use tabular-nums by default (set on :root). This ensures columns of numbers align perfectly without manual spacing."
        code={`/* Set once on :root (already done in tokens.css) */
:root {
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
}

/* Numbers automatically align in tables/KPIs */
<td>$1,234.00</td>
<td>$12,345.00</td>
<td>$123,456.00</td>`}
      >
        <div className="w-full max-w-xs">
          <div className="space-y-1 font-mono text-[length:var(--invin-text-body)]">
            <div className="flex justify-between"><span className="text-[var(--invin-text-dim)]">Revenue</span><span>$1,234.56</span></div>
            <div className="flex justify-between"><span className="text-[var(--invin-text-dim)]">Expenses</span><span>$12,345.67</span></div>
            <div className="flex justify-between"><span className="text-[var(--invin-text-dim)]">Profit</span><span>$123,456.78</span></div>
          </div>
          <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-faint)] mt-3">
            Notice how the digits align vertically — tabular-nums ensures each digit takes equal width.
          </p>
        </div>
      </PlaygroundSection>

      {/* ─── Scale Rule ────────────────────────────────────── */}
      <PlaygroundSection
        title="Scale Rule"
        description="The entire interface scales from the root font-size. Change it once and everything adjusts proportionally."
        code={`/* Default (13.5px root) */
:root { font-size: 13.5px; }

/* All sizes are in rem — relative to root:
   text-page-title = 1.926rem = 26px at 13.5px root
   text-body = 1rem = 13.5px at 13.5px root

   Change root to 14px → everything scales up:
   text-page-title = 1.926rem = 27px
   text-body = 1rem = 14px
*/`}
      >
        <Card>
          <CardContent>
            <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
              <strong className="text-[var(--invin-text)]">Base font: 13.5px</strong> on the app root. All sizes use <code className="text-mono bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded">rem</code> so they scale proportionally. Headings keep tight tracking (<code className="text-mono bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded">-0.02em</code>). Don't invent sizes outside this set.
            </p>
          </CardContent>
        </Card>
      </PlaygroundSection>

      {/* ─── Don't ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Do & Don't"
        description="Typography rules to maintain consistency."
        code={`/* ✓ Do — use role classes */
<h1 className="text-page-title">Dashboard</h1>
<p className="text-body">Content here.</p>

/* ✗ Don't — invent custom sizes */
<h1 className="text-[22px] font-bold">Dashboard</h1>
<p className="text-[15px]">Content here.</p>

/* ✗ Don't — combine multiple classes for what one role does */
<h1 className="text-2xl font-bold tracking-tight leading-tight">
/* ✓ Just use: */
<h1 className="text-page-title">`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <Card>
            <CardContent>
              <p className="text-[length:var(--invin-text-card-title)] font-[600] text-[var(--invin-ok)] mb-2">✓ Do</p>
              <ul className="space-y-1.5 text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
                <li>• Use role-based classes (<code className="text-mono">text-page-title</code>)</li>
                <li>• Stick to the defined scale — 8 roles cover everything</li>
                <li>• Use <code className="text-mono">text-mono</code> for IDs, codes, hashes</li>
                <li>• Let the root font-size control scaling</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-[length:var(--invin-text-card-title)] font-[600] text-[var(--invin-error)] mb-2">✗ Don't</p>
              <ul className="space-y-1.5 text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
                <li>• Invent sizes outside the scale (<code className="text-mono">text-[15px]</code>)</li>
                <li>• Combine 4 classes when one role class does it all</li>
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
