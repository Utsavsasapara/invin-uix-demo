import { useState } from 'react';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Button } from 'invin-uix/ui/button';
import { Separator } from 'invin-uix/ui/separator';
import {
  Palette, Code, Layout, Sparkles, Moon, SquareStack,
  CheckCircle2, XCircle,
} from 'invin-uix/ui/icons';

const accents = [
  { name: 'crimson', color: '#f0455a', color2: '#c01f33', module: 'UEMP Core', desc: 'Exposure Mgmt', note: 'attacker crimson' },
  { name: 'blue', color: '#4a86ec', color2: '#2358bd', module: 'SOAR', desc: 'Automation', note: 'ISOC Core blue' },
  { name: 'violet', color: '#9752d9', color2: '#7f58d9', module: 'AI-Firewall', desc: 'RegimentAI', note: 'toned-down violet' },
  { name: 'pink', color: '#d64d97', color2: '#9c3268', module: 'GSOS', desc: 'GRC', note: 'toned-down pink' },
  { name: 'amber', color: '#bd8629', color2: '#96660f', module: 'OT Firewall', desc: 'CPS Pulse', note: 'toned-down amber' },
];

const principles = [
  { num: '1', title: 'One shell', desc: 'Fixed left sidebar + fixed top bar + scrolling main. Identical dimensions: sidebar 262px, topbar 58px.', icon: Layout },
  { num: '2', title: 'Accent, not layout', desc: 'A product expresses itself through one accent colour only. Structure stays constant.', icon: Palette },
  { num: '3', title: 'Tokens over hexes', desc: 'Never hardcode colours. Read CSS variables so theme + branding cascade everywhere.', icon: Code },
  { num: '4', title: 'Same components', desc: 'Reuse the shared component set — cards, KPIs, badges, tables — with the same markup.', icon: SquareStack },
  { num: '5', title: 'Guided by default', desc: 'Every module ships a guided tour that auto-starts and can be replayed.', icon: Sparkles },
  { num: '6', title: 'Dark + light', desc: 'Support both themes via html[data-theme]. All colours resolve from tokens.', icon: Moon },
];

const typeScale = [
  { role: 'Page title', size: '26px', weight: '700', use: 'Screen H1' },
  { role: 'Sub-heading', size: '18px', weight: '700', use: 'Group headers' },
  { role: 'Card title', size: '14.5px', weight: '700', use: 'Panel titles' },
  { role: 'KPI value', size: '25–26px', weight: '700', use: 'Big numbers' },
  { role: 'Body', size: '13.5px', weight: '400–500', use: 'Default text' },
  { role: 'Label / meta', size: '12px', weight: '500', use: 'Field labels' },
  { role: 'Eyebrow', size: '10.5–11px', weight: '600', use: 'Uppercase labels' },
  { role: 'Mono', size: '11.5–12px', weight: '400', use: 'IDs, code' },
];

const contents = [
  { num: '01', title: 'Core principles' },
  { num: '02', title: 'Shell anatomy' },
  { num: '03', title: 'Logo & brand' },
  { num: '04', title: 'Tokens & accent' },
  { num: '05', title: 'Typography' },
  { num: '06', title: 'Dark & light' },
  { num: '07', title: 'Navigation' },
  { num: '08', title: 'Do & don\'t' },
  { num: '09', title: 'Checklist' },
];

function SectionHeader({ num, title, desc }) {
  return (
    <div>
      <span className="text-[var(--invin-accent)] text-[length:var(--invin-text-label)] font-[600]">{num}</span>
      <h2 className="text-[length:var(--invin-text-sub-heading)] font-[700] tracking-[-0.02em] mt-1">{title}</h2>
      {desc && <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] mt-1">{desc}</p>}
    </div>
  );
}

export default function UIGuidePage() {
  const [activeAccent, setActiveAccent] = useState('blue');

  const switchAccent = (name) => {
    setActiveAccent(name);
    document.documentElement.setAttribute('data-accent', name);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16">

      {/* Hero */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <Badge variant="info" size="sm">Module UI Guide</Badge>
          <Badge variant="outline" size="sm">v1.0</Badge>
        </div>
        <h1 className="text-[length:var(--invin-text-page-title)] font-[700] tracking-[-0.02em]">
          Build modules that look and feel like the launcher
        </h1>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] max-w-2xl leading-relaxed">
          Every Invinsense product module shares <strong className="text-[var(--invin-text)]">one shell</strong>: the same header, the same side menu, the same components. Only the <strong className="text-[var(--invin-accent)]">accent colour</strong> changes per product.
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-[length:var(--invin-text-label)] text-[var(--invin-text-faint)] mr-1">Preview accent:</span>
          {accents.map(a => (
            <button key={a.name} onClick={() => switchAccent(a.name)} className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[12px] font-[500] cursor-pointer transition-all ${activeAccent === a.name ? 'border-[var(--invin-accent)] bg-[var(--invin-accent-soft)]' : 'border-[var(--invin-border)] hover:bg-[var(--invin-surface-hover)]'}`}>
              <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: a.color }} />
              {a.module}
            </button>
          ))}
        </div>
      </section>

      {/* TOC */}
      <Card>
        <CardContent>
          <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)] mb-3">Contents</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {contents.map(c => (
              <div key={c.num} className="flex items-center gap-1.5 py-1.5 px-2 rounded-[6px] hover:bg-[var(--invin-surface-hover)] cursor-pointer">
                <span className="text-[var(--invin-accent)] text-[10px] font-[600]">{c.num}</span>
                <span className="text-[length:var(--invin-text-label)] font-[500] truncate">{c.title}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* 01 Core Principles */}
      <section className="space-y-6">
        <SectionHeader num="01" title="Core principles" desc="Six rules keep every module recognisably part of one platform." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map(p => (
            <Card key={p.num} hover>
              <CardContent>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-[8px] bg-[var(--invin-accent-soft)] flex items-center justify-center shrink-0">
                    <p.icon style={{ width: 16, height: 16, color: 'var(--invin-accent)' }} />
                  </div>
                  <div>
                    <p className="text-[length:var(--invin-text-card-title)] font-[600]"><span className="text-[var(--invin-accent)] mr-1">{p.num} ·</span>{p.title}</p>
                    <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)] mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* 02 Shell Anatomy */}
      <section className="space-y-6">
        <SectionHeader num="02" title="The shell — anatomy & layout" desc="Every module is assembled from exactly these regions." />
        <Card>
          <CardContent>
            <div className="border border-[var(--invin-border)] rounded-[12px] overflow-hidden h-[260px] flex">
              <div className="w-[56px] border-r border-[var(--invin-border)] bg-[var(--invin-bg-elev)] flex flex-col items-center py-3 gap-2.5 shrink-0">
                <div className="h-5 w-5 rounded-[5px] bg-[var(--invin-accent)]" />
                <div className="flex-1 flex flex-col items-center gap-2 mt-2">
                  {[1,2,3,4,5].map(i => <div key={i} className="h-3.5 w-3.5 rounded bg-[var(--invin-surface-hover)]" />)}
                </div>
                <div className="h-4 w-4 rounded-full bg-[var(--invin-surface-hover)]" />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="h-[34px] border-b border-[var(--invin-border)] flex items-center px-3 shrink-0">
                  <div className="h-2 w-16 rounded bg-[var(--invin-surface-hover)]" />
                  <div className="ml-auto flex gap-1.5">{[1,2,3].map(i => <div key={i} className="h-3.5 w-3.5 rounded bg-[var(--invin-surface-hover)]" />)}</div>
                </div>
                <div className="flex-1 p-3 space-y-2">
                  <div className="h-2.5 w-28 rounded bg-[var(--invin-surface-hover)]" />
                  <div className="grid grid-cols-3 gap-2">{[1,2,3].map(i => <div key={i} className="h-14 rounded-[8px] border border-[var(--invin-border)]" />)}</div>
                  <div className="h-20 rounded-[8px] border border-[var(--invin-border)]" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 text-[length:var(--invin-text-label)]">
              <div><span className="text-[var(--invin-accent)] font-[600]">Sidebar</span><p className="text-[var(--invin-text-dim)] mt-0.5">262px → 76px</p></div>
              <div><span className="text-[var(--invin-accent)] font-[600]">Topbar</span><p className="text-[var(--invin-text-dim)] mt-0.5">58px, sticky, blur</p></div>
              <div><span className="text-[var(--invin-accent)] font-[600]">Content</span><p className="text-[var(--invin-text-dim)] mt-0.5">Scrollable main</p></div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* 03 Accent Themes */}
      <section className="space-y-6">
        <SectionHeader num="03" title="Per-module accent" desc="The only value a new module changes. Click a row to preview." />
        <Card>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-[length:var(--invin-text-body)]">
                <thead>
                  <tr className="border-b border-[var(--invin-border)]">
                    <th className="text-left py-2 pr-4 text-[10px] font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em]">Module</th>
                    <th className="text-left py-2 pr-4 text-[10px] font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em]">Product</th>
                    <th className="text-left py-2 pr-4 text-[10px] font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em]">--accent</th>
                    <th className="text-left py-2 pr-4 text-[10px] font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em]">--accent-2</th>
                    <th className="text-left py-2 text-[10px] font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em]">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {accents.map(a => (
                    <tr key={a.name} className="border-b border-[var(--invin-border)] last:border-0 cursor-pointer hover:bg-[var(--invin-surface-hover)] transition-colors" onClick={() => switchAccent(a.name)}>
                      <td className="py-2.5 pr-4 font-[500]"><span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full shrink-0" style={{ background: a.color }} />{a.module}</span></td>
                      <td className="py-2.5 pr-4 text-[var(--invin-text-dim)]">{a.desc}</td>
                      <td className="py-2.5 pr-4 font-mono text-[length:var(--invin-text-mono)]">{a.color}</td>
                      <td className="py-2.5 pr-4 font-mono text-[length:var(--invin-text-mono)]">{a.color2}</td>
                      <td className="py-2.5 text-[var(--invin-text-faint)] text-[length:var(--invin-text-label)]">{a.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* 04 Typography */}
      <section className="space-y-6">
        <SectionHeader num="04" title="Typography & font scale" desc="One typeface — Inter — and one compact scale. JetBrains Mono for code." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardContent>
              <div className="space-y-3">
                <p className="text-[length:var(--invin-text-page-title)] font-[700] tracking-[-0.02em]">Page title · 26 / 700</p>
                <p className="text-[length:var(--invin-text-sub-heading)] font-[700] tracking-[-0.02em]">Sub-heading · 18 / 700</p>
                <p className="text-[length:var(--invin-text-card-title)] font-[700] tracking-[-0.02em]">Card title · 14.5 / 700</p>
                <p className="text-[length:var(--invin-text-body)]">Body copy · 13.5 / 400 — the base reading size.</p>
                <p className="text-[length:var(--invin-text-label)] font-[500]">Label & meta · 12 / 500</p>
                <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">Eyebrow · 10.5 / 600</p>
                <p className="font-mono text-[length:var(--invin-text-mono)]">019f1759-a9bd · mono 11.5</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <table className="w-full text-[length:var(--invin-text-label)]">
                <thead><tr className="border-b border-[var(--invin-border)]"><th className="text-left py-1.5 pr-3 font-[600] text-[var(--invin-text-faint)] text-[10px] uppercase tracking-[0.05em]">Role</th><th className="text-left py-1.5 pr-3 font-[600] text-[var(--invin-text-faint)] text-[10px] uppercase tracking-[0.05em]">Size</th><th className="text-left py-1.5 pr-3 font-[600] text-[var(--invin-text-faint)] text-[10px] uppercase tracking-[0.05em]">Weight</th><th className="text-left py-1.5 font-[600] text-[var(--invin-text-faint)] text-[10px] uppercase tracking-[0.05em]">Use</th></tr></thead>
                <tbody>{typeScale.map(t => (<tr key={t.role} className="border-b border-[var(--invin-border)] last:border-0"><td className="py-1.5 pr-3 font-[500]">{t.role}</td><td className="py-1.5 pr-3 font-mono">{t.size}</td><td className="py-1.5 pr-3 font-mono">{t.weight}</td><td className="py-1.5 text-[var(--invin-text-dim)]">{t.use}</td></tr>))}</tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* 05 Dark & Light */}
      <section className="space-y-6">
        <SectionHeader num="05" title="Dark & light theme" desc="Every module ships both themes. Light mode is a token remap — no per-component work." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent>
              <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)] mb-2">Rules</p>
              <ul className="space-y-1.5 text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
                <li>① Redefine tokens under <code className="text-mono bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded text-[11px]">html[data-theme]</code></li>
                <li>② Logo swaps automatically via CSS</li>
                <li>③ Theme persists to localStorage</li>
                <li>④ Accent stays the same hue in both</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)] mb-2">Token approach</p>
              <pre className="text-[length:var(--invin-text-mono)] font-mono text-[var(--invin-text-dim)] overflow-x-auto leading-relaxed">{`[data-theme="dark"] {
  --invin-bg: #0a080e;
  --invin-text: #e8edf4;
  --invin-border: rgba(255,255,255,0.08);
}`}</pre>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* 06 Navigation */}
      <section className="space-y-6">
        <SectionHeader num="06" title="Navigation & sidebar model" desc="Flat list of grouped nav items. Four states: default, hover, active, disabled." />
        <Card>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-[8px] text-center"><p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)]">Default</p><p className="text-[10px] text-[var(--invin-text-faint)]">dim text</p></div>
              <div className="p-3 rounded-[8px] bg-[var(--invin-surface-hover)] text-center"><p className="text-[length:var(--invin-text-label)] text-[var(--invin-text)]">Hover</p><p className="text-[10px] text-[var(--invin-text-faint)]">surface + text</p></div>
              <div className="p-3 rounded-[8px] bg-[var(--invin-accent-soft)] text-center"><p className="text-[length:var(--invin-text-label)] text-[var(--invin-accent)]">Active</p><p className="text-[10px] text-[var(--invin-text-faint)]">accent bg + text</p></div>
              <div className="p-3 rounded-[8px] opacity-50 text-center"><p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)]">Disabled</p><p className="text-[10px] text-[var(--invin-text-faint)]">0.5 opacity</p></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <ul className="space-y-1.5 text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
              <li>• Group items under uppercase section labels</li>
              <li>• Sub-nav nests one level with a left keyline</li>
              <li>• Active state derives from the current route</li>
              <li>• Sidebar footer holds a persistent utility</li>
              <li>• No breadcrumb in the topbar — nav item is the cue</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* 07 Do & Don't */}
      <section className="space-y-6">
        <SectionHeader num="07" title="Do & don't" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent>
              <p className="text-[length:var(--invin-text-card-title)] font-[600] text-[var(--invin-ok)] mb-2 flex items-center gap-1.5"><CheckCircle2 style={{ width: 14, height: 14 }} /> Do</p>
              <ul className="space-y-1.5 text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
                <li>• Reuse the shared shell and component markup</li>
                <li>• Express product with a single toned-down accent</li>
                <li>• Read var(--accent) everywhere including charts</li>
                <li>• Keep logo lockup and topbar order identical</li>
                <li>• Ship a specific, replayable guided tour</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-[length:var(--invin-text-card-title)] font-[600] text-[var(--invin-error)] mb-2 flex items-center gap-1.5"><XCircle style={{ width: 14, height: 14 }} /> Don't</p>
              <ul className="space-y-1.5 text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
                <li>• Invent a new header, sidebar width or nav pattern</li>
                <li>• Hardcode hex colours for accent elements</li>
                <li>• Recolour or replace the Invinsense mark</li>
                <li>• Add a breadcrumb or move topbar controls</li>
                <li>• Ship generic tour copy</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* 08 New-Module Checklist */}
      <section className="space-y-6">
        <SectionHeader num="08" title="New-module checklist" desc="Follow in order. If you can tick all ten, your module will feel native." />
        <Card>
          <CardContent>
            <div className="space-y-2">
              {[
                'Copy the shell from an existing module (SOAR/GSOS/AI-Firewall)',
                'Set one accent — change only --accent/--accent-2/-soft/-glow',
                'Keep the brand lockup: mark + wordmark + uppercase sub-label',
                'Model the nav with grouped sections, icon + label per item',
                'Build screens using shared components (cards, KPIs, tables)',
                'Consume tokens only — no hardcoded hexes anywhere',
                'Write a specific tour — "click here to X" with real data',
                'Support both themes — verify dark + light via data-theme',
                'Wire into the launcher module registry',
                'Ship a README with screens, routing, and tour docs',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-1.5">
                  <span className="text-[var(--invin-accent)] text-[length:var(--invin-text-label)] font-[700] shrink-0 w-5">{i + 1}</span>
                  <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}
