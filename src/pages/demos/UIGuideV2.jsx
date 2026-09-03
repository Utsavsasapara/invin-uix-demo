import { useState } from 'react';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { ACCENTS, useAccent } from '../../components/AppSwitcher.jsx';

/* ═══════════════════════════════════════════════════════════════════════════
   UI GUIDE v2.0 — recreated in the demo app with library components.

   Faithful to https://launcher-invinsense.netlify.app/module-ui-guide
   Built entirely from invin-uix components + v2 tokens (dogfooding).
   Plus an added Token Reference section (Tailwind-style) at the end.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─── Shared guide primitives ──────────────────────────────────────────────── */

function GuideSection({ num, title, intro, children }) {
  return (
    <section id={`s${num}`} className="scroll-mt-20 space-y-5">
      <div className="flex items-baseline gap-3">
        <span className="text-data text-[var(--accent)] font-mono shrink-0">{num}</span>
        <h2 className="text-title font-semibold text-[var(--foreground)] tracking-[-0.02em]">{title}</h2>
      </div>
      {intro && <p className="text-body text-[var(--muted-foreground)] max-w-[75ch] leading-relaxed">{intro}</p>}
      {children}
    </section>
  );
}

/** A numbered principle / rule card (icon-beside-heading, never stacked). */
function RuleCard({ label, children }) {
  return (
    <Card>
      <CardContent className="py-4">
        <p className="text-page-title font-medium text-[var(--foreground)] mb-1">{label}</p>
        <p className="text-body text-[var(--muted-foreground)] leading-relaxed">{children}</p>
      </CardContent>
    </Card>
  );
}

/** A "Law" callout — cross-product contract. */
function Law({ n, title, children }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--accent-line)] bg-[var(--accent-soft)] p-4">
      <div className="flex items-center gap-2 mb-1">
        <Badge variant="secondary" size="sm">Law {n}</Badge>
        <span className="text-label font-semibold text-[var(--foreground)]">{title}</span>
      </div>
      <p className="text-body text-[var(--muted-foreground)] leading-relaxed">{children}</p>
    </div>
  );
}

/** Click-to-copy CSS var / class chip. */
function CopyChip({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="font-mono text-data text-[var(--accent)] hover:bg-[var(--accent-soft)] rounded-[var(--radius-sm)] px-1.5 py-0.5 transition-colors cursor-pointer"
      title="Copy"
    >
      {copied ? 'copied' : text}
    </button>
  );
}

/**
 * ColorTokenRow — a color swatch, the token name (copyable), the utility class,
 * and what it is for. Tailwind-style reference row.
 */
function ColorTokenRow({ token, utility, use }) {
  return (
    <tr className="border-b border-[var(--border)] last:border-0">
      <td className="py-2 px-4 align-middle">
        <span
          className="inline-block h-7 w-7 rounded-[var(--radius-md)] border border-[var(--border)] align-middle"
          style={{ background: `var(${token})` }}
        />
      </td>
      <td className="py-2 px-4 align-middle"><CopyChip text={token} /></td>
      <td className="py-2 px-4 align-middle"><CopyChip text={utility} /></td>
      <td className="py-2 px-4 align-middle text-body text-[var(--muted-foreground)]">{use}</td>
    </tr>
  );
}

/** A titled table wrapper for token groups. */
function TokenTable({ title, headers, children }) {
  return (
    <div className="space-y-2">
      <p className="text-page-title font-medium text-[var(--foreground)]">{title}</p>
      <Card>
        <CardContent className="py-0 px-0">
          <div className="overflow-x-auto">
            <table className="w-full text-body">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  {headers.map(h => (
                    <th key={h} className="text-left py-2.5 px-4 text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/** Do / Don't two-column block. */
function DoDont({ doItems, dontItems }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card>
        <CardContent className="py-4">
          <p className="text-label font-semibold text-[var(--ok)] mb-2">Do</p>
          <ul className="space-y-1.5 text-body text-[var(--muted-foreground)]">
            {doItems.map((t, i) => <li key={i} className="flex gap-2"><span className="text-[var(--ok)]">·</span>{t}</li>)}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="py-4">
          <p className="text-label font-semibold text-[var(--error)] mb-2">Don't</p>
          <ul className="space-y-1.5 text-body text-[var(--muted-foreground)]">
            {dontItems.map((t, i) => <li key={i} className="flex gap-2"><span className="text-[var(--error)]">·</span>{t}</li>)}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

/* ─── Section index (jump links) ───────────────────────────────────────────── */

const SECTIONS = [
  ['01', 'Core principles & Laws'],
  ['02', 'Shell anatomy & layout'],
  ['03', 'Logo & brand placement'],
  ['04', 'Colour & family accent'],
  ['05', 'Design tokens'],
  ['06', 'Typography & scale'],
  ['07', 'Space, radius, depth'],
  ['08', 'Dark & light theme'],
  ['09', 'Icons'],
  ['10', 'Navigation & sidebar'],
  ['11', 'Waffle menu / navigator'],
  ['12', 'Component library'],
  ['13', 'Status vocabulary'],
  ['14', 'Charts'],
  ['15', 'The four states'],
  ['16', 'Guided-tour pattern'],
  ['17', 'Login & auth screens'],
  ['18', 'Motion & accessibility'],
  ['19', 'Voice & copy'],
  ['20', 'File structure & wiring'],
  ['21', 'New-module checklist'],
  ['23', 'Do & don\'t'],
  ['24', 'Anti-slop guardrails'],
  ['TR', 'Token reference'],
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function UIGuideV2() {
  const [activeAccent, applyAccent] = useAccent();

  return (
    <div className="space-y-10">

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="info" size="sm">Guide</Badge>
          <Badge variant="outline" size="sm">v2.0</Badge>
        </div>
        <h1 className="text-display font-bold text-[var(--foreground)] tracking-[-0.02em]">
          Build modules that look and feel like one product
        </h1>
        <p className="text-body text-[var(--muted-foreground)] max-w-[75ch] leading-relaxed">
          Every Invinsense product module shares one shell — the same header, side menu, components,
          logo placement and voice. Only the family accent changes per product. This is the single
          source of truth, recreated here with the live <strong className="text-[var(--foreground)]">invin-uix</strong> component library.
        </p>

        {/* ── In-page accent family switcher ── */}
        <div className="space-y-2">
          <p className="text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">
            Preview family — flip the entire guide
          </p>
          <div className="flex flex-wrap gap-2">
            {ACCENTS.map(a => (
              <button
                key={a.key}
                onClick={() => applyAccent(a.key)}
                className={[
                  'flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-md)] border text-label font-medium cursor-pointer transition-all',
                  activeAccent === a.key
                    ? 'border-[var(--accent-line)] bg-[var(--accent-soft)] text-[var(--accent-text)]'
                    : 'border-[var(--border)] bg-transparent text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]',
                ].join(' ')}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ background: a.color }}
                />
                {a.label}
              </button>
            ))}
          </div>
          <p className="text-caption text-[var(--muted-foreground-faint)]">
            Notice the layout never changes — only the accent moves. Structure, spacing and status colours are shared vocabulary.
          </p>
        </div>
      </header>

      {/* Section index */}
      <nav aria-label="Guide sections">
        <Card>
          <CardContent className="py-4">
            <p className="text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em] mb-3">
              On this page
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5">
              {SECTIONS.map(([num, label]) => (
                <a
                  key={num}
                  href={`#s${num}`}
                  className="flex items-baseline gap-2 text-label text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
                >
                  <span className="font-mono text-caption text-[var(--muted-foreground-faint)]">{num}</span>
                  {label}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </nav>

      {/* ─── 01 · Core principles and the Laws ─────────────────────────────── */}
      <GuideSection
        num="01"
        title="Core principles and the Laws"
        intro="Six rules keep every module recognisably part of one platform. Underneath them sit the Interface Standard's numbered Laws — cross-product contracts. Break one and it splits the suite."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RuleCard label="1 · One shell">Fixed left sidebar, fixed top bar, scrolling main. Identical dimensions across modules: sidebar 262px (rail 76px), topbar 58px.</RuleCard>
          <RuleCard label="2 · Accent, not layout">A product expresses itself through one family accent only. Structure, spacing, status colours and components stay constant.</RuleCard>
          <RuleCard label="3 · Tokens over hexes">Never hardcode colours. Read tokens (var(--accent), var(--muted-foreground)) so theme and branding cascade everywhere.</RuleCard>
          <RuleCard label="4 · Same components">Reuse the shared component set, with the same class names and markup. One library per job.</RuleCard>
          <RuleCard label="5 · Guided by default">Every module ships a doc-specific guided tour that auto-starts once and can be replayed.</RuleCard>
          <RuleCard label="6 · Dark + light">Support both themes via html[data-theme]. All colours resolve from tokens, so both modes come for free.</RuleCard>
        </div>

        <div className="space-y-3">
          <h3 className="text-section font-semibold text-[var(--foreground)]">The Laws, in one table</h3>
          <Card>
            <CardContent className="py-0 px-0">
              <div className="overflow-x-auto">
                <table className="w-full text-body">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-2.5 px-4 text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em] w-12">#</th>
                      <th className="text-left py-2.5 px-4 text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">Law</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1', 'One library per job'],
                      ['2', 'One asset, one source. The wordmark ships from one shared package as SVG'],
                      ['3', 'Every screen is branded, error pages included'],
                      ['4', 'Identity and status are separated by form, not by hue'],
                      ['5', 'OKLCH tokens and only the shared names. No --product-* namespace'],
                      ['6', 'One token set, two values. No dark: on a colour'],
                      ['7', 'Status is never colour alone. A dot always ships beside its word'],
                      ['8', 'One typeface, Geist and Geist Mono, self-hosted, at 16px'],
                      ['9', '12px is the floor, badges and chips included'],
                      ['10', 'One edge per column. Never cap a bordered box short of its neighbours'],
                      ['11', 'Phosphor alone, Bold weight. Emoji are never icons'],
                      ['12', 'Navigation is links: a real href, aria-current when active'],
                      ['13', 'One navigator package, fed by entitlements'],
                      ['14', 'One tour engine, anchored, themed, no mascot'],
                      ['15', 'Every unauthenticated screen is branded'],
                      ['16', 'Toast severity decides the duration, not the caller'],
                      ['17', 'One word per rule state, resolved in one place'],
                      ['18', 'One chart library, and it is reaviz'],
                      ['19', 'Async actions are honest: spinner, disable, explicit confirmation'],
                    ].map(([n, law]) => (
                      <tr key={n} className="border-b border-[var(--border)] last:border-0">
                        <td className="py-2 px-4 font-mono text-[var(--accent)] align-top">{n}</td>
                        <td className="py-2 px-4 text-[var(--muted-foreground)]">{law}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </GuideSection>

      {/* ─── 02 · The shell, anatomy and layout ────────────────────────────── */}
      <GuideSection
        num="02"
        title="The shell, anatomy and layout"
        intro="Every module, regardless of product, is assembled from exactly these regions in exactly these positions: a fixed left sidebar, a fixed top bar, and a scrolling main region that owns the page head."
      >
        {/* Live shell wireframe */}
        <Card>
          <CardContent className="p-4">
            <div
              className="border border-[var(--border)] rounded-[var(--radius-lg)] overflow-hidden"
              style={{ height: 280, display: 'flex' }}
            >
              {/* Sidebar */}
              <div
                className="border-r border-[var(--border)] flex flex-col shrink-0"
                style={{ width: 56, background: 'var(--sidebar)' }}
              >
                {/* Brand row */}
                <div className="flex items-center justify-center border-b border-[var(--border)] shrink-0" style={{ height: 34 }}>
                  <div className="h-5 w-5 rounded-[4px]" style={{ background: 'var(--accent)' }} />
                </div>
                {/* Nav items */}
                <div className="flex flex-col items-center gap-2 py-3 flex-1">
                  {[1,2,3,4,5].map(i => (
                    <div
                      key={i}
                      className="h-3.5 w-3.5 rounded"
                      style={{ background: i === 2 ? 'var(--accent-soft)' : 'var(--secondary)' }}
                    />
                  ))}
                </div>
                {/* Footer */}
                <div className="flex items-center justify-center pb-3">
                  <div className="h-4 w-4 rounded-full" style={{ background: 'var(--secondary)' }} />
                </div>
              </div>

              {/* Main area */}
              <div className="flex-1 flex flex-col min-w-0">
                {/* Topbar */}
                <div
                  className="flex items-center justify-between px-3 border-b border-[var(--border)] shrink-0"
                  style={{ height: 34, background: 'var(--topbar)' }}
                >
                  <div className="h-2 w-20 rounded" style={{ background: 'var(--secondary)' }} />
                  <div className="flex items-center gap-1.5">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-3.5 w-3.5 rounded" style={{ background: 'var(--secondary)' }} />
                    ))}
                    <div className="h-4 w-4 rounded-full" style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-line)' }} />
                  </div>
                </div>

                {/* Content area */}
                <div className="flex-1 p-3 space-y-2.5 overflow-hidden" style={{ background: 'var(--background)' }}>
                  {/* Page head */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="h-1.5 w-24 rounded" style={{ background: 'var(--secondary)' }} />
                      <div className="h-3 w-36 rounded" style={{ background: 'var(--foreground)', opacity: 0.7 }} />
                    </div>
                    <div className="h-5 w-16 rounded-[var(--radius-md)]" style={{ background: 'var(--accent)' }} />
                  </div>
                  {/* KPI row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1,2,3].map(i => (
                      <div
                        key={i}
                        className="rounded-[var(--radius-md)] p-2 space-y-1 border"
                        style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                      >
                        <div className="h-1.5 w-12 rounded" style={{ background: 'var(--secondary)' }} />
                        <div className="h-3 w-14 rounded" style={{ background: i === 1 ? 'var(--accent-soft)' : 'var(--secondary)' }} />
                      </div>
                    ))}
                  </div>
                  {/* Table */}
                  <div
                    className="rounded-[var(--radius-md)] border overflow-hidden"
                    style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                  >
                    {[1,2,3].map(i => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-2 border-b last:border-0"
                        style={{ height: 22, borderColor: 'var(--border)' }}
                      >
                        <div className="h-1.5 w-1.5 rounded-full" style={{ background: i === 1 ? 'var(--ok)' : i === 2 ? 'var(--degraded)' : 'var(--error)' }} />
                        <div className="h-1.5 flex-1 rounded" style={{ background: 'var(--secondary)' }} />
                        <div className="h-1.5 w-8 rounded" style={{ background: 'var(--secondary)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="grid grid-cols-3 gap-4 mt-3">
              {[
                ['Left · Sidebar', '262px → 76px rail'],
                ['Top · Topbar', '58px, sticky, hairline below'],
                ['Main · Content', 'Scrolls under topbar'],
              ].map(([label, sub]) => (
                <div key={label}>
                  <p className="text-label font-semibold text-[var(--accent)]">{label}</p>
                  <p className="text-caption text-[var(--muted-foreground)] mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <RuleCard label="Left · Sidebar">Brand row (58px, matches topbar), grouped nav, footer with Guided Tour. Collapses to a 76px icon rail via the floating chevron on its border.</RuleCard>
          <RuleCard label="Top · Topbar">58px, hairline below. Left side empty — no title, no breadcrumb. Right cluster fixed order: notifications, tour, theme, apps, user chip. The user chip is always last.</RuleCard>
          <RuleCard label="Main · Content">Owns the page head: breadcrumb over page title, then actions on the right. Scrolls under the fixed topbar. Padding 26px 30px. Prose caps at 65–75 characters.</RuleCard>
        </div>

        <div className="space-y-3">
          <h3 className="text-section font-semibold text-[var(--foreground)]">Topbar controls, and their order</h3>
          <p className="text-body text-[var(--muted-foreground)] max-w-[75ch]">
            Left to right, always. A user who moves between products should not have to look for the bell.
            Anything a module does not have simply renders nothing; the order of what is left does not change.
          </p>
          <Card>
            <CardContent className="py-0 px-0">
              <div className="overflow-x-auto">
                <table className="w-full text-body">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      {['#', 'Control', 'Notes'].map(h => (
                        <th key={h} className="text-left py-2.5 px-4 text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1', 'Left side', 'Empty. Page title and breadcrumb live in the content region, never the topbar.'],
                      ['2', 'Tenant switcher', 'Multi-tenant only'],
                      ['3', 'Notifications', 'Count badge top-right, never a bare dot'],
                      ['4', 'Guided tour', 'Restarts the tour'],
                      ['5', 'Theme', 'Toggles html[data-theme], persisted per module'],
                      ['6', 'Invinsense apps', 'Always present (the waffle navigator)'],
                      ['7', 'User chip', 'Always last. The only thing that must never move.'],
                    ].map(([n, c, note]) => (
                      <tr key={n} className="border-b border-[var(--border)] last:border-0">
                        <td className="py-2 px-4 font-mono text-[var(--accent)] align-top">{n}</td>
                        <td className="py-2 px-4 text-[var(--foreground)] align-top whitespace-nowrap">{c}</td>
                        <td className="py-2 px-4 text-[var(--muted-foreground)]">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </GuideSection>

      {/* ─── 03 · Logo, brand placement and naming ─────────────────────────── */}
      <GuideSection
        num="03"
        title="Logo, brand placement and naming"
        intro="The Invinsense mark is always top-left, as the product lockup (C): the glyph, 'Invinsense' small, the product name under it. This is the single most important consistency cue. One mark, three lockups, and a rule for which one goes where."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RuleCard label="A. Glyph">The green V lifted from the corporate lockup. 32px default, 20px absolute minimum. Favicon, collapsed rail, avatar slot.</RuleCard>
          <RuleCard label="B. Wordmark">Knocks out to white on dark, keeps the green accent. Swapped by the theme (.logo-dark / .logo-light). Never recolour the green.</RuleCard>
          <RuleCard label="C. Product lockup">Wordmark, hairline divider, product name at regular weight so the corporate mark stays dominant. The sidebar header in every module.</RuleCard>
          <RuleCard label="Favicon">24×32. Title format is {'{Page} · {Product} · Invinsense'} — page first so tabs stay readable when narrow.</RuleCard>
        </div>

        <Law n="2" title="One asset, one source">The wordmark ships from a single shared package as SVG, never a per-repo copy.</Law>
        <Law n="3" title="Every screen is branded">Login, SSO redirect, error, 403, 404, session expiry and maintenance all carry the lockup. An unbranded error page is often the most-seen screen in a product.</Law>

        <DoDont
          doItems={[
            'Reach for the glyph when the rail is collapsed, or filling a favicon or avatar slot',
            'Reach for the full lockup on auth, error, 403, 404 and maintenance screens',
            'Keep clear space on all sides equal to the mark\'s cap height',
          ]}
          dontItems={[
            'Stretch, rotate, add a shadow, or recreate the mark in CSS',
            'Recolour the green or tint the mark with the family accent',
            'Use the repo name — use the short form users say (SDL, SOAR, TIP)',
          ]}
        />
      </GuideSection>

      {/* ─── 04 · Product colour and the family accent ─────────────────────── */}
      <GuideSection
        num="04"
        title="Product colour and the family accent"
        intro="The only value a new module changes. Every family is a two-tone pair, not a single flat colour, and the pair holds across every icon in the family. Use the accent switch in the sidebar to flip the whole page live."
      >
        <div className="space-y-3">
          <h3 className="text-section font-semibold text-[var(--foreground)]">The seven families</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['ISOC Core', 'Defensive — SDL, SOAR, Case, TIP, UEC', '#2769FC', '#0044DC'],
              ['ISOC Extension', 'Defensive — Decoys, NAC, NDR, AI-Firewall', '#8A3FFC', '#A56EFF'],
              ['UEMP', 'Offensive — UEMP Core, ASM, BAS, Red SIEM', '#DD3731', '#B81922'],
              ['GRC', 'Compliance — Management, Engineering', '#D02670', '#FF44A5'],
              ['CPS Pulse', 'OT Insights — OT Firewall, SRA, IDS, NMS', '#FF832B', '#CC5500'],
              ['RegimentAI', 'AI — RegimentAI, AI-Firewall', '#0CB04A', '#0D903E'],
              ['Assentra', 'Assets — Assentra', '#9752D9', '#7F58D9'],
            ].map(([name, use, base, shade]) => (
              <Card key={name}>
                <CardContent className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1 shrink-0">
                      <span className="h-9 w-9 rounded-[var(--radius-md)] border border-[var(--border)]" style={{ background: base }} title={base} />
                      <span className="h-9 w-9 rounded-[var(--radius-md)] border border-[var(--border)]" style={{ background: shade }} title={shade} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-label font-medium text-[var(--foreground)]">{name}</p>
                      <p className="text-caption text-[var(--muted-foreground)] truncate">{use}</p>
                      <p className="text-data font-mono text-[var(--muted-foreground-faint)]">{base} · {shade}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Law n="4" title="Identity and status are separated by form, not by hue">
          Status is only ever a dot beside a word. Identity is only ever a 2px rule, a heading, or a tile wash.
          Identity never takes a dot, a pill or a badge. Get it wrong and an OXDR chip reads as an error.
        </Law>

        {/* OXDR comparison — the critical example */}
        <div className="space-y-2">
          <h3 className="text-section font-semibold text-[var(--foreground)]">OXDR — identity vs theme vs status</h3>
          <p className="text-body text-[var(--muted-foreground)] max-w-[75ch]">
            OXDR's <span className="font-mono text-[var(--accent)]">#DD3731</span> sits inside the error band.
            The identity colour stays on shipped icons — but the UI theme uses a desaturated crimson so nothing in the chrome reads as an alarm.
            Only vivid red on an OXDR screen is true status.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Bad — raw red everywhere */}
            <Card>
              <CardContent className="py-4 space-y-2">
                <p className="text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">Base red as fill</p>
                <div className="h-1.5 w-full rounded-full" style={{ background: '#DD3731' }} />
                <div className="flex items-center gap-2 p-2 rounded-[var(--radius-md)]" style={{ background: '#DD3731' + '22', border: '1px solid #DD3731' + '55' }}>
                  <div className="h-2 w-2 rounded-full shrink-0" style={{ background: '#DD3731' }} />
                  <div>
                    <p className="text-caption font-semibold" style={{ color: '#DD3731' }}>Exposures</p>
                    <p className="text-caption text-[var(--muted-foreground)]">142 findings</p>
                  </div>
                </div>
                <p className="text-caption text-[var(--muted-foreground)]">Reads as one long alarm.</p>
              </CardContent>
            </Card>

            {/* OXDR theme — desaturated */}
            <Card>
              <CardContent className="py-4 space-y-2">
                <p className="text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">OXDR theme (correct)</p>
                <div className="h-1.5 w-full rounded-full" style={{ background: '#B7423D' }} />
                <div className="flex items-center gap-2 p-2 rounded-[var(--radius-md)]" style={{ background: '#B7423D' + '15', border: '1px solid #B7423D' + '40' }}>
                  <div className="h-2 w-2 rounded-full shrink-0" style={{ background: '#B7423D' }} />
                  <div>
                    <p className="text-caption font-semibold" style={{ color: '#E6A6A1' }}>Exposures</p>
                    <p className="text-caption text-[var(--muted-foreground)]">142 findings</p>
                  </div>
                </div>
                <p className="text-caption text-[var(--muted-foreground)]">Same hue, chroma pulled down 40%.</p>
              </CardContent>
            </Card>

            {/* Real alert beside it */}
            <Card>
              <CardContent className="py-4 space-y-2">
                <p className="text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">Real status beside it</p>
                <div className="h-1.5 w-full rounded-full" style={{ background: '#B7423D' }} />
                <div className="flex items-center gap-2 p-2 rounded-[var(--radius-md)] border" style={{ borderColor: 'var(--border)' }}>
                  <span className="h-2 w-2 rounded-full animate-pulse shrink-0" style={{ background: 'var(--error)' }} />
                  <div>
                    <p className="text-caption font-semibold text-[var(--error)]">Offline</p>
                    <p className="text-caption text-[var(--muted-foreground)]">Critical</p>
                  </div>
                </div>
                <p className="text-caption text-[var(--muted-foreground)]">Status stays vivid. Never confused with identity.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-section font-semibold text-[var(--foreground)]">Accent token roles</h3>
          <Card>
            <CardContent className="py-0 px-0">
              <div className="overflow-x-auto">
                <table className="w-full text-body">
                  <tbody>
                    {[
                      ['--accent', 'The family base. Primary action, active nav, selection, focus ring'],
                      ['--accent-2', 'The family shade. In the product icon and the launcher tile pair'],
                      ['--accent-soft', 'A 12–15% wash. Active nav fill, selected tile, tint chips'],
                      ['--accent-line', 'A 35% mix. Hairlines around accented surfaces'],
                      ['--accent-text', 'The AA-measured text tone of the accent, per theme'],
                    ].map(([tok, use]) => (
                      <tr key={tok} className="border-b border-[var(--border)] last:border-0">
                        <td className="py-2 px-4 font-mono text-[var(--accent)] align-top whitespace-nowrap">{tok}</td>
                        <td className="py-2 px-4 text-[var(--muted-foreground)]">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </GuideSection>

      {/* ─── 05 · Design tokens ────────────────────────────────────────────── */}
      <GuideSection
        num="05"
        title="Design tokens"
        intro="All colour, type and spacing live as CSS variables. Consume the tokens; don't hardcode. A component never knows which theme it is in — it reads a token name, and the value resolves per theme."
      >
        <Law n="5" title="OKLCH and only these names">
          Every colour token is authored in OKLCH. No redefining a token to mean something else, no parallel
          namespace (--soar-*, --aifw-*, --brand-*). Extending the set is a PR against the shared package, not a local override.
        </Law>
        <p className="text-body text-[var(--muted-foreground)] max-w-[75ch]">
          The full, copy-ready token catalogue with live swatches is in the{' '}
          <a href="#sTR" className="text-[var(--accent)] hover:underline">Token reference</a> at the end of this page.
        </p>
        <DoDont
          doItems={[
            'Use an existing token — nine times out of ten one already means what you mean',
            'Reach for a tint (bg-primary/10) before inventing a new --primary-soft',
            'Name a new token for its job, not its colour (--warn, never --amber)',
          ]}
          dontItems={[
            'Author in hex — swatches show rendered sRGB for reference only',
            'Add a token before you have authored both themes and measured contrast',
            'Use --accent-glow or --ambient — glow is banned and both are removed',
          ]}
        />
      </GuideSection>

      {/* ─── 06 · Typography and font scale ────────────────────────────────── */}
      <GuideSection
        num="06"
        title="Typography and font scale"
        intro="One family, Geist, and one scale of eight fixed steps. Figures use tabular-nums so numbers align; IDs, hashes and code use Geist Mono. Every specimen below is the real face."
      >
        <Law n="8" title="One typeface, Geist, at 16px">
          Base 16px, two self-hosted variable WOFF2 files with a metric-matched fallback so there is never a
          flash of unstyled text. Never a third family, never a CDN link, never font-display: swap.
        </Law>

        <Card>
          <CardContent className="py-5 space-y-3">
            <p className="text-display font-bold text-[var(--foreground)]">Display · 30 / 700</p>
            <p className="text-title font-semibold text-[var(--foreground)]">Title · 20 / 600</p>
            <p className="text-section font-semibold text-[var(--foreground)]">Section · 18 / 600</p>
            <p className="text-page-title font-medium text-[var(--foreground)]">Page title · 16 / 500</p>
            <p className="text-body text-[var(--foreground)]">Body · 14 / 400. Events are flowing from 41 of 43 configured sources.</p>
            <p className="text-label font-medium text-[var(--foreground)]">Label · 13 / 500 · Collector endpoint</p>
            <p className="text-caption font-medium text-[var(--foreground)]">Caption · 12 / 500 · Investigation</p>
            <p className="text-data font-mono text-[var(--foreground)]">Data · 13 Geist Mono · ALT-7f4c91a20e8b3d6</p>
          </CardContent>
        </Card>

        <Law n="9" title="12px is the floor">Nothing renders below 12px, badges and chips included.</Law>

        <DoDont
          doItems={[
            'One h1 per route (the page title); headings descend in order',
            'Sentence case — "Data source health", not "Data Source Health"',
            'tabular-nums on number columns and any ticking value',
          ]}
          dontItems={[
            'Uppercase tracked eyebrows above every section',
            'Three type sizes inside one card',
            'Weight 300, or 700 in product chrome',
          ]}
        />
      </GuideSection>

      {/* ─── 07 · Space, radius, depth and layering ────────────────────────── */}
      <GuideSection
        num="07"
        title="Space, radius, depth and layering"
        intro="4px grid. Dense steps 4/8/12/16, layout steps 24/32/48/64. Group by proximity: 8px inside a label-and-field pair, 24px between pairs. A gap does the job a divider line does badly."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Radius scale */}
          <Card>
            <CardContent className="py-4 space-y-3">
              <p className="text-page-title font-medium text-[var(--foreground)]">Radius steps</p>
              <div className="flex items-end gap-4">
                {[['sm', 6], ['md', 8], ['lg', 10], ['xl', 14]].map(([name, px]) => (
                  <div key={name} className="text-center">
                    <div
                      className="h-14 w-14 bg-[var(--accent-soft)] border border-[var(--accent-line)] mb-1.5"
                      style={{ borderRadius: `var(--radius-${name})` }}
                    />
                    <p className="text-caption font-mono text-[var(--muted-foreground)]">{name}</p>
                    <p className="text-data font-mono text-[var(--muted-foreground-faint)]">{px}px</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Spacing scale */}
          <Card>
            <CardContent className="py-4 space-y-3">
              <p className="text-page-title font-medium text-[var(--foreground)]">Spacing steps</p>
              <div className="space-y-1.5">
                {[4, 8, 12, 16, 24, 32, 48].map(px => (
                  <div key={px} className="flex items-center gap-3">
                    <span className="h-3 bg-[var(--accent)] rounded-sm" style={{ width: px }} />
                    <span className="text-data font-mono text-[var(--muted-foreground)]">{px}px</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Z-index layers */}
        <div className="space-y-2">
          <p className="text-page-title font-medium text-[var(--foreground)]">Layering (z-index)</p>
          <Card>
            <CardContent className="py-0 px-0">
              <div className="overflow-x-auto">
                <table className="w-full text-body">
                  <tbody>
                    {[
                      ['base', '0', 'Page content'],
                      ['sticky', '20', 'In-page sticky chrome, below the header'],
                      ['appheader', '50', 'Topbar (sidebar 40, floating toggle 45)'],
                      ['dropdown', '100', 'Menus, selects, comboboxes, apps panel'],
                      ['overlay / modal', '200 / 300', 'Backdrop, then dialogs and drawers'],
                      ['toast / tooltip', '400 / 500', 'Notifications, then tooltips above everything'],
                    ].map(([name, z, use]) => (
                      <tr key={name} className="border-b border-[var(--border)] last:border-0">
                        <td className="py-2 px-4 font-mono text-[var(--accent)] align-top whitespace-nowrap">{name}</td>
                        <td className="py-2 px-4 font-mono text-[var(--muted-foreground)] align-top">{z}</td>
                        <td className="py-2 px-4 text-[var(--muted-foreground)]">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <Law n="10" title="One edge per column">
          Everything stacked in a column shares one left edge and one right edge. A reading measure caps the
          text, never a bordered box. Wide content scrolls inside its own container; the page body never scrolls sideways.
        </Law>
      </GuideSection>

      {/* ─── 08 · Dark and light theme ─────────────────────────────────────── */}
      <GuideSection
        num="08"
        title="Dark and light theme"
        intro="Every module ships both themes. Because all colours resolve from CSS variables, light mode is a token remap — no per-component work. Toggle the theme from the topbar and nothing in any component changes but the resolved values."
      >
        <Law n="6" title="One token set, two values">
          A component never knows which theme it is in. It reads tokens. If you find yourself writing
          <span className="font-mono"> dark: </span> on a colour, the token is missing.
        </Law>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RuleCard label="Strategy">A class or attribute on &lt;html&gt; (data-theme). Not a media query, so the user's choice beats the OS.</RuleCard>
          <RuleCard label="Where values live">:root for the default theme, one override block for the other, both at the top of the stylesheet. Nowhere else.</RuleCard>
          <RuleCard label="Control">The sun/moon icon in the topbar. Persisted per module and restored before first paint, or you ship a white flash into a dark room.</RuleCard>
          <RuleCard label="Accent">Stays the same hue in both themes. Only --accent-text lightens for dark, because the base hues sit at different lightnesses.</RuleCard>
        </div>
      </GuideSection>

      {/* ─── 09 · Icons ────────────────────────────────────────────────────── */}
      <GuideSection
        num="09"
        title="Icons and product icons"
        intro="One pack, one grid, one weight for UI icons: Phosphor Icons, Bold. This library ships Phosphor — every glyph you import from invin-uix/ui/icons renders Phosphor Bold. Product icons are a separate system, drawn as a set."
      >
        <Law n="11" title="Phosphor alone, Bold weight">
          One UI icon library suite-wide, Bold weight only — it holds up at 12–16px on a SOC monitor where
          Regular thins out. Emoji are never icons. Icon-only controls carry aria-label. Lucide is retired.
        </Law>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RuleCard label="Sizes">16px inline with text (the default), 20px for toolbar controls, 24px for empty states and section headers, 40px for product icons only.</RuleCard>
          <RuleCard label="Colour">fill="currentColor", inherited from the text beside it. Never a hard-coded fill.</RuleCard>
        </div>

        <DoDont
          doItems={[
            'Use an icon when it repeats across many rows so shape beats text',
            'Give an icon-only control an aria-label',
            'Use one obvious glyph — search, filter, delete, download',
          ]}
          dontItems={[
            'Reach for a second icon set to find a glyph',
            'Put an icon next to a label that already says the same thing',
            'Mix icon weights on one screen',
          ]}
        />
      </GuideSection>

      {/* ─── 10 · Navigation and sidebar model ─────────────────────────────── */}
      <GuideSection
        num="10"
        title="Navigation and sidebar model"
        intro="The sidebar is the single most recognisable surface in the suite. A flat list of grouped items with sentence-case section labels; items have an icon plus label and five states. (You are looking at a live one on the left.)"
      >
        {/* Live nav states demo */}
        <Card>
          <CardContent className="py-4 space-y-3">
            <p className="text-page-title font-medium text-[var(--foreground)] mb-1">Item states — live</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { label: 'Default',  bg: 'transparent',            color: 'var(--muted-foreground)',  weight: '500', note: 'dim text' },
                { label: 'Hover',    bg: 'var(--secondary)',        color: 'var(--foreground)',         weight: '500', note: 'surface + text' },
                { label: 'Active',   bg: 'var(--accent-soft)',      color: 'var(--accent-text)',        weight: '600', note: 'accent fill + text + 600' },
                { label: 'Focus',    bg: 'transparent',            color: 'var(--foreground)',         weight: '500', note: 'ring visible', ring: true },
                { label: 'Disabled', bg: 'transparent',            color: 'var(--muted-foreground)',   weight: '500', note: '0.55 opacity', opacity: true },
              ].map(s => (
                <div
                  key={s.label}
                  className={[
                    'flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-[var(--radius-md)] text-center',
                    s.ring ? 'outline outline-2 outline-offset-2 outline-[var(--accent-line)]' : '',
                    s.opacity ? 'opacity-55' : '',
                  ].join(' ')}
                  style={{ background: s.bg }}
                >
                  <div className="h-3.5 w-3.5 rounded" style={{ background: s.bg === 'var(--accent-soft)' ? 'var(--accent-text)' : 'var(--muted-foreground)', opacity: 0.6 }} />
                  <p className="text-caption" style={{ color: s.color, fontWeight: s.weight }}>{s.label}</p>
                  <p className="text-data text-[var(--muted-foreground-faint)]" style={{ fontSize: 10 }}>{s.note}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-2">
          <p className="text-page-title font-medium text-[var(--foreground)]">Item states</p>
          <Card>
            <CardContent className="py-0 px-0">
              <div className="overflow-x-auto">
                <table className="w-full text-body">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      {['State', 'Fill', 'Label', 'Notes'].map(h => (
                        <th key={h} className="text-left py-2.5 px-4 text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Default', 'none', '--muted-foreground, 500', ''],
                      ['Hover', '--secondary', '--foreground', ''],
                      ['Active', '--accent-soft', '--accent-text, 600', 'Three signals: fill, weight and colour'],
                      ['Focus', 'ring', '', 'The global 2px ring, inset so it never clips at the rail edge'],
                      ['Disabled', 'none', '0.55 opacity', 'aria-disabled, tooltip giving the reason'],
                    ].map(([s, f, l, n]) => (
                      <tr key={s} className="border-b border-[var(--border)] last:border-0">
                        <td className="py-2 px-4 text-[var(--foreground)] align-top whitespace-nowrap">{s}</td>
                        <td className="py-2 px-4 font-mono text-[var(--muted-foreground)] align-top">{f}</td>
                        <td className="py-2 px-4 font-mono text-[var(--muted-foreground)] align-top">{l}</td>
                        <td className="py-2 px-4 text-[var(--muted-foreground)]">{n}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <Law n="12" title="Navigation is links">
          Every nav target is an &lt;a href&gt; with a real URL, inside a &lt;nav&gt;, carrying aria-current="page"
          when active. Without a real href there is no keyboard access, no middle-click, no open-in-new-tab.
        </Law>
      </GuideSection>

      {/* ─── 11 · Waffle menu / product navigator ──────────────────────────── */}
      <GuideSection
        num="11"
        title="Waffle menu — the product navigator"
        intro="The apps icon in the topbar opens the suite navigator, identical in every module. It lists every Invinsense product grouped by family in fixed order. Content and order are identical across modules; only the current-product pill follows the module accent."
      >
        <Law n="13" title="One package, one source">
          The navigator ships as a shared component fed by an entitlements API. Modules do not keep their own
          product list, icons or ordering. A newly licensed product appears everywhere at once, or the feature is broken.
        </Law>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RuleCard label="Trigger">The seven-dot mark, topbar slot 6, 36px button. Always present.</RuleCard>
          <RuleCard label="Panel">360px wide, grouped by family in fixed order, 3-up tiles with product icons at 40px. Scrolls internally past 620px.</RuleCard>
          <RuleCard label="Unlicensed products">Sit at 45% opacity with a "Not licensed" chip — never hidden, never a dead click.</RuleCard>
          <RuleCard label="Behaviour">Opens as a popover anchored to the trigger. Closes on outside click and Escape. Arrows move in the grid.</RuleCard>
        </div>

        <div className="space-y-2">
          <p className="text-page-title font-medium text-[var(--foreground)]">Family order (fixed, never reordered between modules)</p>
          <Card>
            <CardContent className="py-0 px-0">
              <div className="overflow-x-auto">
                <table className="w-full text-body">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      {['#', 'Family (shown to users)', 'Accent key', 'Products'].map(h => (
                        <th key={h} className="text-left py-2.5 px-4 text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1', 'ISOC Core', 'xdr', 'SDL, SOAR, Case, TIP, UEC'],
                      ['2', 'ISOC Extension', 'xdrplus', 'Decoys, NAC, NDR, LLM Gateway'],
                      ['3', 'UEMP', 'oxdr', 'UEMP Core, ASM, BAS, Red SIEM, Phishing'],
                      ['4', 'GRC', 'gsos', 'Management, Engineering'],
                      ['5', 'CPS Pulse', 'pulse', 'OT Firewall, SRA, IDS, Data Diode, NMS, ITSM'],
                      ['6', 'RegimentAI', 'regimentAI', 'RegimentAI, AI-Firewall'],
                      ['7', 'Assentra', 'assentra', 'Assentra'],
                    ].map(([n, family, key, products]) => (
                      <tr key={n} className="border-b border-[var(--border)] last:border-0">
                        <td className="py-2 px-4 font-mono text-[var(--accent)] align-top">{n}</td>
                        <td className="py-2 px-4 text-[var(--foreground)] align-top whitespace-nowrap">{family}</td>
                        <td className="py-2 px-4 font-mono text-[var(--muted-foreground)] align-top">{key}</td>
                        <td className="py-2 px-4 text-[var(--muted-foreground)]">{products}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <p className="text-body text-[var(--muted-foreground)] max-w-[75ch]">
            The internal accent keys (xdr, xdrplus, oxdr, gsos, pulse, regimentAI, assentra) stay in code.
            The family headings shown to users are always the full names above — never the short keys.
          </p>
        </div>

        <DoDont
          doItems={[
            'Feed the navigator from the shared component + entitlements API',
            'Show unlicensed products at 45% with a "Not licensed" chip',
            'Keep family order identical across every module',
          ]}
          dontItems={[
            'Keep a per-module product list or icon set',
            'Hide unlicensed products — they are discoverable, not dead',
            'Reorder families or rename them from the catalog names',
          ]}
        />
      </GuideSection>

      {/* ─── 12 · Component library ─────────────────────────────────────────── */}
      <GuideSection
        num="12"
        title="Component library"
        intro="The shared kit. Same class names, same markup, same behaviour in every module — only the accent varies. All components are available from invin-uix via subpath imports."
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-page-title font-medium text-[var(--foreground)]">Buttons</p>
            <Card>
              <CardContent className="py-4 space-y-2">
                <p className="text-body text-[var(--muted-foreground)]">
                  Primary (flat accent fill — gradient and glow retired), outline, ghost, destructive.
                  Exactly one primary action per screen. Destructive trigger stays ghost; the red lives only
                  on the confirm inside the AlertDialog, naming its object. Async: spinner + disabled in flight.
                </p>
                <p className="text-caption font-mono text-[var(--muted-foreground-faint)]">
                  {'import { Button } from \'invin-uix/ui/button\''}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <p className="text-page-title font-medium text-[var(--foreground)]">Inputs and form fields</p>
            <Card>
              <CardContent className="py-4 space-y-1.5 text-body text-[var(--muted-foreground)]">
                <p>Label above, hint below, error replacing the hint with an icon as well as colour.</p>
                <p>Validate on blur, not the first keystroke. Width hints at content length.</p>
                <p>Under five options is a radio group, not a dropdown. A Switch promises immediate effect — in a form that saves on submit, use a checkbox instead.</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <p className="text-page-title font-medium text-[var(--foreground)]">Badges and KPI cards</p>
            <Card>
              <CardContent className="py-4 text-body text-[var(--muted-foreground)]">
                A badge labels a thing and is neutral by default. Severity variants are for OCSF severity and nothing else,
                or severity stops meaning severity. Only the accent variant follows the product colour.
                KPI cards keep the accent legend dot on the label, a big tabular value, one sub-line.
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <p className="text-page-title font-medium text-[var(--foreground)]">Tables</p>
            <Card>
              <CardContent className="py-4 text-body text-[var(--muted-foreground)]">
                Dim headers, hairline row borders, hover highlight. Numbers right-aligned and tabular — alignment
                is a property of the whole column, never a cell. Sticky header, density and column visibility
                persist. Sort state in the URL, virtualise past a few hundred rows. Every status carries a dot and a word.
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <p className="text-page-title font-medium text-[var(--foreground)]">Dialogs and overlays</p>
            <Card>
              <CardContent className="py-4 text-body text-[var(--muted-foreground)]">
                Dialog for a task with a form. AlertDialog for a decision that cannot be undone — it traps focus
                on its actions and does not close on outside click. Title names the object, never "Are you sure?".
                Drawers for context-heavy work. A tooltip only ever supplements an aria-label; invisible on touch.
              </CardContent>
            </Card>
          </div>
        </div>

        <DoDont
          doItems={[
            'Import from invin-uix subpaths: invin-uix/ui/button, invin-uix/ui/card etc.',
            'One primary action per screen — if two look primary, neither is',
            'Name the object in destructive confirms, never just "Are you sure?"',
          ]}
          dontItems={[
            'Rebuild a component that already exists in the library',
            'Use a placeholder as a label, block paste, or toast for a field error',
            'Nest cards — flatten with spacing, a divider, or a heading',
          ]}
        />
      </GuideSection>

      {/* ─── 13 · Status vocabulary ──────────────────────────────────────── */}
      <GuideSection
        num="13"
        title="Status vocabulary, badges and toasts"
        intro="Health tone is a total record. Nine rule states, one word each. Red is only for things an operator can act on. idle is deliberately neutral and never pulses."
      >
        {/* Live status pills */}
        <Card>
          <CardContent className="py-4">
            <p className="text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em] mb-3">Health tones — dot + word, never colour alone</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                ['ok', 'var(--ok)', false],
                ['degraded', 'var(--degraded)', false],
                ['error', 'var(--error)', true],
                ['offline', 'var(--error)', true],
                ['idle', 'var(--idle)', false],
                ['pending', 'var(--pending)', false],
              ].map(([word, color, pulse]) => (
                <span key={word} className="inline-flex items-center gap-2 text-label text-[var(--foreground)]">
                  <span
                    className={`h-2 w-2 rounded-full ${pulse ? 'animate-pulse' : ''}`}
                    style={{ background: color }}
                  />
                  {word}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Law n="7" title="Status is never colour alone">
          Every dot ships beside its word. Red is only for things an operator can act on. idle is deliberately
          neutral and never pulses. Never map tones with inline tone === '...' chains.
        </Law>

        <DoDont
          doItems={[
            'Treat it as status when it changes on its own and has a small closed set of values',
            'Pulse only error and offline',
            'Keep idle grey — it never reads as a problem',
          ]}
          dontItems={[
            'Use a permanent red dot — it teaches people to ignore red',
            'Mark product origin with a status dot (that is identity, §04)',
            'Use colour without the word beside it',
          ]}
        />
      </GuideSection>

      {/* ─── 14 · Charts and data visualisation ────────────────────────────── */}
      <GuideSection
        num="14"
        title="Charts and data visualisation"
        intro="One charting library across the suite, three permitted escapes, and a single rule for colour. A chart is the one place where a module is most tempted to invent its own palette — and where doing so is most expensive."
      >
        <Law n="18" title="One chart library, and it is reaviz">
          New charts are built with reaviz. echarts only for what reaviz has no primitive for (geo maps, word clouds,
          sankey, calendar heatmaps). recharts is the incumbent, kept where it works; reagraph for node-link graphs.
        </Law>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RuleCard label="Colour rule">One accent for one series. A single-series chart is one colour, not a rainbow. Read the value off a token (var(--primary)) so the chart repaints on a theme switch.</RuleCard>
          <RuleCard label="Severity colours">Take them from §13, so a High bar and a High badge are the same orange. Never a library default palette.</RuleCard>
          <RuleCard label="Empty and error states">A chart with no data is not a blank box. Ship the empty and error states per §15.</RuleCard>
          <RuleCard label="OXDR charts">Take neutral chart tokens, not the accent. A red series on a red product is unreadable as data.</RuleCard>
        </div>

        <DoDont
          doItems={[
            'Read the accent value off a token (var(--primary)) inside chart config',
            'Use one accent for one series — encode categories with shape or label too',
            'Ship empty and error states for every chart',
          ]}
          dontItems={[
            'Use a library default palette — it\'s the one palette nobody on the team picked',
            'Hard-code a hex inside a chart config, where no theme switch will reach it',
            'Animate a series on every re-render, or draw gridlines heavier than the data',
          ]}
        />
      </GuideSection>

      {/* ─── 15 · The four states ──────────────────────────────────────────── */}
      <GuideSection
        num="15"
        title="The four states"
        intro="Every view that fetches ships all four: loading, empty, error, partial. Shipping only the success state is the most common defect in the suite."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RuleCard label="Loading">A skeleton shaped like the content, reserving its final height. Under 300ms, show nothing — a flash of skeleton is worse than a pause.</RuleCard>
          <RuleCard label="Empty">What is missing, why, and one clear next action. "No results for this filter" offers Clear filters.</RuleCard>
          <RuleCard label="Error">What failed in the user's terms plus a retry, never a stack trace. Correlation ID in mono, copyable.</RuleCard>
          <RuleCard label="Partial">One failing source never blanks the dashboard. Render what arrived, mark what did not, use the degraded tone.</RuleCard>
        </div>

        <Law n="19" title="Async actions are honest">
          A submit button shows a spinner and disables in flight, then confirms explicitly. Silence is not
          confirmation, and neither is a silent reset.
        </Law>
      </GuideSection>

      {/* ─── 16 · Guided-tour pattern ───────────────────────────────────────── */}
      <GuideSection
        num="16"
        title="Guided-tour pattern"
        intro="Every module ships a guided tour on the same engine and the same card. Steps are specific — each anchors to a real control and says what clicking it does. Never generic 'this is the dashboard' copy."
      >
        <Law n="14" title="One engine, anchored, themed, no mascot">
          One engine suite-wide: nextstepjs. The card anchors to its subject, uses app tokens so it themes
          with the app, and never covers what it explains. No mascots, no confetti — people are reading this during an incident.
        </Law>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RuleCard label="Engine">nextstepjs 2.2.0. The card is ours, portalled to document.body at position:fixed. One engine, nothing else.</RuleCard>
          <RuleCard label="Card spec">380px, 14px radius, --popover surface with a border-primary/30 hairline. 3px rail across the top (transform: scaleX). Glyph, title, X, counter, Back, one filled Next.</RuleCard>
          <RuleCard label="Body copy">14px, three lines maximum. "Click X to…" with real numbers and labels from the screen. Longer than three lines means the UI needs fixing, not explaining.</RuleCard>
          <RuleCard label="Chapters">5–7 steps per chapter. Use the counter as the chapter-menu trigger past 12 steps. A 60-step tour without chapters is a manual in a tour's clothing.</RuleCard>
        </div>

        <div className="space-y-2">
          <p className="text-page-title font-medium text-[var(--foreground)]">Card anatomy</p>
          <Card>
            <CardContent className="py-0 px-0">
              <div className="overflow-x-auto">
                <table className="w-full text-body">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      {['Part', 'Spec'].map(h => (
                        <th key={h} className="text-left py-2.5 px-4 text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Progress rail', '3px, bg-muted/50 under bg-primary fill, transform: scaleX — never a text fraction'],
                      ['Header', '16px Phosphor glyph, title at 16px/600 sentence case, X close on trailing edge'],
                      ['Body', '14px/400 text-muted-foreground, three lines max, text-pretty'],
                      ['Counter', 'Mono 12px, zero-padded 04/07, tabular, wide-tracked'],
                      ['Primary', '"Next" with trailing chevron, size="sm" 32px, --accent-fill'],
                      ['Secondary', '"Skip" on step one, then "Back" with leading chevron. Ghost, never hidden'],
                      ['Dismiss', 'X in header + Escape. Both end the tour and record progress'],
                    ].map(([part, spec]) => (
                      <tr key={part} className="border-b border-[var(--border)] last:border-0">
                        <td className="py-2 px-4 text-[var(--foreground)] align-top whitespace-nowrap">{part}</td>
                        <td className="py-2 px-4 text-[var(--muted-foreground)]">{spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <DoDont
          doItems={[
            '"Click X to…" with real controls and real data in the copy',
            'Anchor each step to a stable id that survives re-renders',
            'Resolve the plan against permissions before the tour starts',
            'Skip stays reachable on every step via showSkip',
          ]}
          dontItems={[
            '"This is the dashboard" — narrate a control\'s outcome, not its existence',
            'Gate the UI — the app stays usable behind the card, Escape always exits',
            'Hard-code colours — card reads --popover, --primary, --muted from app tokens',
            'A mascot, illustration, or confetti',
          ]}
        />
      </GuideSection>

      {/* ─── 17 · Login and auth screens ────────────────────────────────────── */}
      <GuideSection
        num="17"
        title="Login and auth screens"
        intro="The first screen anyone sees, and the one they screenshot. Every module uses the same layout so the suite introduces itself once. The reference is a 50/50 split: animated illustration left, lockup and sign-in card right, in both themes."
      >
        <Law n="15" title="Every unauthenticated screen is branded">
          Login, SSO redirect, MFA, change password, 403, 404, session expiry and maintenance all carry the lockup and the product name.
          An unbranded error page is often the most-seen screen in a product.
        </Law>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RuleCard label="Split layout">50/50. Illustration left, lockup and card right. Below 1024px the illustration drops out — the form is the whole screen.</RuleCard>
          <RuleCard label="Illustration">One animated isometric scene per product in the family's two tones on an --accent-soft tinted ground. Ambient and slow (2–4s loops). Never reuse another product's scene.</RuleCard>
          <RuleCard label="Lockup">V glyph 30px, "Invinsense" 12px/600, product name 24px/700. Centred above the card. Never recoloured.</RuleCard>
          <RuleCard label="Card">--card on --background, 1px hairline, 12px radius, max-width 400px. Tenant (multi-tenant only), Username, Password with reveal toggle, one full-width "Sign in".</RuleCard>
          <RuleCard label="Error">Above the fields, inline, in a destructive Alert — never a toast (it disappears). Say what to do next; never reveal which field was wrong.</RuleCard>
          <RuleCard label="Both themes">Reads the same token block as the app and follows the persisted theme before first paint. Dark form on a light app is a defect.</RuleCard>
        </div>

        <DoDont
          doItems={[
            'Set autocomplete="username" and autocomplete="current-password" — password managers are a security control',
            'Put the tenant select first, and only when the deployment is multi-tenant',
            'Version bottom-left in mono — support asks for it on every call',
          ]}
          dontItems={[
            '"Invalid credentials" — say what to do next',
            'Animate the submit button on hover or put a glow under the card',
            'Hard-code a colour — the page has two themes',
          ]}
        />
      </GuideSection>

      {/* ─── 18 · Motion and accessibility ─────────────────────────────────── */}
      <GuideSection
        num="18"
        title="Motion and accessibility"
        intro="Minimal and functional. Motion conveys state change, never decoration. Accessibility is measured, not asserted."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="py-4">
              <p className="text-page-title font-medium text-[var(--foreground)] mb-2">Motion</p>
              <ul className="space-y-1.5 text-body text-[var(--muted-foreground)]">
                <li>· 150–250ms, feedback never exceeds 200ms</li>
                <li>· ease-out. No bounce, no elastic, no overshoot</li>
                <li>· transform and opacity only. Never transition: all</li>
                <li>· prefers-reduced-motion is not optional</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4">
              <p className="text-page-title font-medium text-[var(--foreground)] mb-2">Accessibility</p>
              <ul className="space-y-1.5 text-body text-[var(--muted-foreground)]">
                <li>· WCAG 2.1 AA: 4.5:1 body, 3:1 large text — measured in both themes</li>
                <li>· A visible 3px focus-visible ring on everything interactive</li>
                <li>· Status carries a dot + label, never colour alone</li>
                <li>· 44px targets on coarse pointers, 32px on fine</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </GuideSection>

      {/* ─── 19 · Voice and copy ───────────────────────────────────────────── */}
      <GuideSection
        num="19"
        title="Voice and copy"
        intro="Plain, present, active. Name the outcome; say what failed and what to do next."
      >
        <DoDont
          doItems={[
            'Sentence case everywhere. Active voice, present tense',
            'Buttons name their outcome: "Deploy data source", then "Data source deployed"',
            'Errors state what failed and what to do next',
            'Relative time in feeds, absolute in records',
          ]}
          dontItems={[
            'Em-dashes anywhere, including code comments and commit messages',
            'Apologies — "Sorry, something went wrong" tells an analyst nothing',
            'Marketing verbs in product UI',
            'Cute empty states or "This is the dashboard" tour copy',
          ]}
        />
      </GuideSection>

      {/* ─── 20 · File structure and launcher wiring ───────────────────────── */}
      <GuideSection
        num="20"
        title="File structure and launcher wiring"
        intro="Each module is a self-contained static app with an identical layout, so any team can pick it up and any module drops into the launcher the same way."
      >
        <div className="space-y-2">
          <p className="text-page-title font-medium text-[var(--foreground)]">Standard module folder</p>
          <Card>
            <CardContent className="py-3">
              <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`<module>/
├── index.html        # shell: sidebar + topbar + page + tour overlay
├── css/<name>.css    # tokens at top (§05), both themes, nothing theme-aware elsewhere
├── js/charts.js      # inline SVG charts + Phosphor icon paths
├── js/data.js        # NAV model + mock data
├── js/pages.js       # PAGES registry, one renderer per screen, all four states
├── js/tour.js        # TOUR_STEPS + spotlight engine
├── js/app.js         # hash router, sidebar/topbar, theme, navigator
└── assets/           # lockups from the shared package + mark.svg`}</pre>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-2">
          <p className="text-page-title font-medium text-[var(--foreground)]">Wiring into the launcher</p>
          <Card>
            <CardContent className="py-4 space-y-3 text-body text-[var(--muted-foreground)]">
              <p>1. Copy the folder to <span className="font-mono text-[var(--accent)]">invinsense-launcher/public/{'<id>'}/ </span> (served at <span className="font-mono text-[var(--accent)]">{'/<id>/'}</span>).</p>
              <p>2. Add the module id to <span className="font-mono text-[var(--accent)]">INTERNAL_MODULE_URLS</span> in the launcher catalog:</p>
              <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`INTERNAL_MODULE_URLS = {
  uemp: '/uemp/index.html#/dashboard',
  soar: '/soar/index.html#/dashboard',
  aifw: '/aifw/index.html#/getting-started',
  grcmgmt: '/gsos/index.html#/dashboard',
}`}</pre>
              <p>The catalog entry carries the family, the product icon from assets/product-icons, and the licence flag the navigator reads.</p>
            </CardContent>
          </Card>
        </div>
      </GuideSection>

      {/* ─── 21 · New-module checklist ──────────────────────────────────────── */}
      <GuideSection
        num="21"
        title="New-module checklist"
        intro="Follow in order. If you can tick all fourteen, your module will feel native to the platform."
      >
        <Card>
          <CardContent className="py-4">
            <div className="space-y-1.5">
              {[
                'Copy the shell from an existing module (UEMP Core, SOAR, AI-Firewall, GSOS, OT Firewall). Keep index.html, app.js, the tour engine, the CSS structure, and the shell ids the tour anchors to.',
                'Adopt the token set. Paste the §05 token block verbatim. Set --accent to your family pair from §04. Delete --accent-glow and --ambient.',
                'Use the product lockup. Lockup C from the shared package (glyph, "Invinsense", your product name) in the sidebar header and on login. Glyph only when collapsed.',
                'Ship a product icon on the 44×44 artboard in your family\'s two tones, and register it in the catalog so the navigator shows it everywhere at once.',
                'Model the nav in data.js: grouped sections with icon + label per item, real hrefs, one level of nesting at most.',
                'Build screens using shared components: Geist and Geist Mono from the shared package, the 8-step type scale, named radius steps, 4px spacing.',
                'Ship all four states for every view that fetches: loading, empty, error, partial.',
                'Consume tokens only. No hardcoded hexes; charts read the accent and severity tokens so branding cascades.',
                'Write a specific tour. One step per key control, "click here to X", real data, chapters of 5–7, resolved against permissions.',
                'Support both themes. Verify dark + light via html[data-theme]; there is no theme conditional on a colour anywhere. Screenshot both before the PR.',
                'Measure contrast for every new foreground on a tinted surface, in both themes. Record the numbers beside the token.',
                'Drop into public/<id>/ and add the INTERNAL_MODULE_URLS entry. Ship a README describing screens, routing and the tour.',
                'Run npm run slop and get to zero. It fails on any banned pattern (§24). Warnings are advisory; violations are not.',
                'Read the copy out loud. Sentence case, no buzzwords, no em dashes, no exclamation marks, no label-plus-sublabel-plus-hint saying the same thing three ways.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-1">
                  <span className="text-data font-mono text-[var(--accent)] shrink-0 w-6 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-body text-[var(--muted-foreground)]">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </GuideSection>

      {/* ─── 23 · Do and don't ─────────────────────────────────────────────── */}
      <GuideSection
        num="23"
        title="Do and don't"
        intro="The whole guide, distilled to two columns."
      >
        <DoDont
          doItems={[
            'Reuse the shared shell, class names and component markup verbatim',
            'Express the product with a single family accent from §04',
            'Read tokens everywhere, including charts and the tour',
            'Ship loading, empty, error and partial for every fetching view',
            'Keep every size on the type scale, nothing below 12px',
            'Animate transform and opacity only, 150–250ms, eased out',
          ]}
          dontItems={[
            'Invent a new header, sidebar width, or nav pattern',
            'Hardcode hex colours or add a --yourmodule-* namespace',
            'Give an identity colour a dot, a pill or a badge',
            'Put a thick accent bar down one side of a card',
            'Use gradient primaries, gradient text, or glow on resting elements',
            'Write "streamline", "empower", "seamless", or "enterprise-grade"',
          ]}
        />
      </GuideSection>

      {/* ─── 24 · Anti-slop guardrails ─────────────────────────────────────── */}
      <GuideSection
        num="24"
        title="Anti-slop guardrails and conformance"
        intro="Every wave of generated UI converges on the same look. These are the patterns that mark an interface as machine-default rather than designed. scripts/slop-check.mjs enforces them; npm run slop fails on violation."
      >
        <div className="space-y-2">
          <p className="text-page-title font-medium text-[var(--foreground)]">Common tells, and the rule that catches them</p>
          <Card>
            <CardContent className="py-0 px-0">
              <div className="overflow-x-auto">
                <table className="w-full text-body">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      {['Pattern', 'Verdict', 'Rule'].map(h => (
                        <th key={h} className="text-left py-2.5 px-4 text-caption font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Coloured side-stripe on a card / alert', 'violation', 'side-tab-border'],
                      ['Extreme radius (24px+) on a small card', 'violation', 'extreme-radius'],
                      ['Nested cards', 'warning', 'nested-card'],
                      ['Decorative glass (backdrop-filter as a look)', 'violation', 'glass-outside-overlay'],
                      ['Icon tile stacked above a heading', 'violation', 'icon-tile-heading'],
                      ['Eyebrow on every section', 'warning', 'numbered-section-label'],
                      ['Purple gradient wash', 'violation', 'purple-gradient-wash'],
                      ['Gradient text', 'violation', 'gradient-text'],
                      ['Per-element neon glow', 'violation', 'decorative-glow'],
                      ['Hardcoded hex where a token exists', 'warning', 'hardcoded-hex'],
                      ['Bounce / elastic easing', 'violation', 'bounce-easing'],
                      ['Layout-property animation (width/height)', 'violation', 'layout-property-animation'],
                      ['Marketing buzzwords', 'violation', 'marketing-buzzword'],
                      ['Em dashes / exclamation marks / fake numbers', 'warning', 'em-dash-overuse'],
                    ].map(([pattern, verdict, rule]) => (
                      <tr key={rule} className="border-b border-[var(--border)] last:border-0">
                        <td className="py-2 px-4 text-[var(--foreground)] align-top">{pattern}</td>
                        <td className="py-2 px-4 align-top">
                          <Badge variant={verdict === 'violation' ? 'destructive' : 'secondary'} size="sm">{verdict}</Badge>
                        </td>
                        <td className="py-2 px-4 font-mono text-data text-[var(--muted-foreground)] align-top whitespace-nowrap">{rule}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </GuideSection>

      {/* ─── TR · Token reference ──────────────────────────────────────────── */}
      <GuideSection
        num="TR"
        title="Token reference"
        intro="The complete token catalogue. Every colour swatch is live — it repaints on theme and accent switch. Click any token or class to copy it. Consume these names; never author in hex."
      >
        {/* ── Surfaces ──────────────────────────────────────────────────────── */}
        <TokenTable title="Surfaces" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--background"  utility="bg-background"  use="Page canvas" />
          <ColorTokenRow token="--foreground"  utility="text-foreground" use="Primary text" />
          <ColorTokenRow token="--card"        utility="bg-card"         use="Raised surface — cards, panels" />
          <ColorTokenRow token="--card-foreground" utility="text-card-foreground" use="Text on a card" />
          <ColorTokenRow token="--popover"     utility="bg-popover"      use="Overlay surface — menus, tooltips" />
          <ColorTokenRow token="--popover-foreground" utility="text-popover-foreground" use="Text on an overlay" />
          <ColorTokenRow token="--secondary"   utility="bg-secondary"    use="Secondary fill, hover surface" />
          <ColorTokenRow token="--secondary-foreground" utility="text-secondary-foreground" use="Text on secondary" />
          <ColorTokenRow token="--muted"       utility="bg-muted"        use="Recessed fill" />
          <ColorTokenRow token="--sidebar"     utility="bg-sidebar"      use="Rail ground (matches canvas)" />
          <ColorTokenRow token="--topbar"      utility="bg-topbar"       use="App header ground" />
        </TokenTable>

        {/* ── Text ──────────────────────────────────────────────────────────── */}
        <TokenTable title="Text" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--foreground"            utility="text-foreground"            use="Primary text" />
          <ColorTokenRow token="--muted-foreground"      utility="text-muted-foreground"      use="Secondary text" />
          <ColorTokenRow token="--muted-foreground-faint" utility="text-muted-foreground-faint" use="Tertiary / faint text" />
        </TokenTable>

        {/* ── Accent (live — changes with data-accent) ───────────────────────── */}
        <TokenTable title="Accent (live — changes with data-accent)" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--accent"       utility="bg-accent / text-accent"   use="Family base — primary action, active nav, focus ring" />
          <ColorTokenRow token="--accent-2"     utility="bg-accent-2"               use="Family shade — icon + tile pair, launcher tile" />
          <ColorTokenRow token="--accent-fill"  utility="bg-accent-fill"            use="Filled controls — primary button, switch on, progress rail" />
          <ColorTokenRow token="--accent-text"  utility="text-accent-text"          use="AA-measured accent text tone (lighter in dark)" />
          <ColorTokenRow token="--accent-soft"  utility="bg-accent-soft"            use="12–15% wash — active nav fill, selected tile, tint chips" />
          <ColorTokenRow token="--accent-line"  utility="border-accent-line"        use="35% mix — hairlines around accented surfaces" />
        </TokenTable>

        {/* ── Primary (semantic alias for accent — what components read) ──────── */}
        <TokenTable title="Primary (semantic alias for accent)" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--primary"           utility="bg-primary"            use="= --accent. The value components use internally" />
          <ColorTokenRow token="--primary-foreground" utility="text-primary-foreground" use="White-ish text on filled accent" />
          <ColorTokenRow token="--primary-accent"    utility="text-primary-accent"   use="= --accent-text. Accent doing a text job" />
          <ColorTokenRow token="--sidebar-accent"    utility="bg-sidebar-accent"     use="= --accent-soft. Active nav fill" />
        </TokenTable>

        {/* ── Status tones ──────────────────────────────────────────────────── */}
        <TokenTable title="Status tones" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--ok"            utility="text-ok"            use="Events flowing, no active error" />
          <ColorTokenRow token="--ok-wash"       utility="bg-ok-wash"         use="Soft ok surface" />
          <ColorTokenRow token="--degraded"      utility="text-degraded"      use="Data lands while a collector errors" />
          <ColorTokenRow token="--degraded-wash" utility="bg-degraded-wash"   use="Soft degraded surface" />
          <ColorTokenRow token="--error"         utility="text-error"         use="Failing and nothing arriving (red, pulses)" />
          <ColorTokenRow token="--error-wash"    utility="bg-error-wash"      use="Soft error surface" />
          <ColorTokenRow token="--offline"       utility="text-offline"       use="Silent past threshold, cause unknown (red, pulses)" />
          <ColorTokenRow token="--idle"          utility="text-idle"          use="Provably alive, nothing to send" />
          <ColorTokenRow token="--idle-wash"     utility="bg-idle-wash"       use="Soft idle surface" />
          <ColorTokenRow token="--pending"       utility="text-pending"       use="Undetermined, or deliberately paused" />
          <ColorTokenRow token="--pending-wash"  utility="bg-pending-wash"    use="Soft pending surface" />
          <ColorTokenRow token="--info"          utility="text-info"          use="Informational" />
          <ColorTokenRow token="--info-wash"     utility="bg-info-wash"       use="Soft info surface" />
        </TokenTable>

        {/* ── Destructive ───────────────────────────────────────────────────── */}
        <TokenTable title="Destructive" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--destructive"            utility="bg-destructive"            use="Destructive action surface (buttons, confirms)" />
          <ColorTokenRow token="--destructive-foreground" utility="text-destructive-foreground" use="Text on solid destructive" />
        </TokenTable>

        {/* ── Overlay ───────────────────────────────────────────────────────── */}
        <TokenTable title="Overlay" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--overlay-bg" utility="bg-overlay-bg" use="Modal/drawer backdrop (60% dark, 40% light)" />
        </TokenTable>

        {/* ── Tooltip (inverted) ────────────────────────────────────────────── */}
        <TokenTable title="Tooltip (inverted palette)" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--tooltip"            utility="bg-tooltip"            use="Tooltip background (light in dark mode)" />
          <ColorTokenRow token="--tooltip-foreground" utility="text-tooltip-foreground" use="Tooltip text (dark in dark mode)" />
        </TokenTable>

        {/* ── Lines, rings ──────────────────────────────────────────────────── */}
        <TokenTable title="Lines & rings" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--border" utility="border-border" use="Default hairline" />
          <ColorTokenRow token="--input"  utility="border-input"  use="Field border (stronger than --border)" />
          <ColorTokenRow token="--ring"   utility="ring-ring"     use="Focus ring (= --accent-line, follows product accent)" />
        </TokenTable>

        {/* ── Border widths ─────────────────────────────────────────────────── */}
        <TokenTable title="Border widths" headers={['Sample', 'Token', 'Value', 'Use']}>
          {[
            ['--border-hairline', '0.5px', 'Subtle dividers'],
            ['--border-thin', '1px', 'Default — most borders'],
            ['--border-thick', '2px', 'Emphasis, active indicators'],
          ].map(([token, value, use]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-middle">
                <span
                  className="block w-10 bg-[var(--foreground)] rounded-sm"
                  style={{ height: value }}
                />
              </td>
              <td className="py-2 px-4 align-middle"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-middle text-data font-mono text-[var(--muted-foreground)]">{value}</td>
              <td className="py-2 px-4 align-middle text-body text-[var(--muted-foreground)]">{use}</td>
            </tr>
          ))}
        </TokenTable>

        {/* ── Type scale ────────────────────────────────────────────────────── */}
        <TokenTable title="Type scale" headers={['Sample', 'Token', 'Class', 'Size / weight']}>
          {[
            ['--text-display',    'text-display',    '30 / 36 / 700', 'text-display'],
            ['--text-title',      'text-title',      '20 / 28 / 600', 'text-title'],
            ['--text-section',    'text-section',    '18 / 26 / 600', 'text-section'],
            ['--text-page-title', 'text-page-title', '16 / 24 / 500', 'text-page-title'],
            ['--text-body',       'text-body',       '14 / 20 / 400', 'text-body'],
            ['--text-label',      'text-label',      '13 / 18 / 500', 'text-label'],
            ['--text-caption',    'text-caption',    '12 / 16 / 500', 'text-caption'],
            ['--text-data',       'text-data',       '13 / 20 / 400 mono', 'text-data'],
          ].map(([token, utility, size, cls]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-middle">
                <span className={`${cls} ${cls === 'text-data' ? 'font-mono' : 'font-medium'} text-[var(--foreground)]`}>Ag</span>
              </td>
              <td className="py-2 px-4 align-middle"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-middle"><CopyChip text={utility} /></td>
              <td className="py-2 px-4 align-middle text-data font-mono text-[var(--muted-foreground)]">{size}</td>
            </tr>
          ))}
        </TokenTable>

        {/* ── Font families & weights ───────────────────────────────────────── */}
        <TokenTable title="Font families & weights" headers={['Token', 'Value', 'Use']}>
          {[
            ['--font-sans',            '"Geist", ui-sans-serif, system-ui', 'UI face — all prose and chrome'],
            ['--font-mono',            '"Geist Mono", ui-monospace',        'Data face — IDs, timestamps, code'],
            ['--font-weight-normal',   '400',                               'Default body weight'],
            ['--font-weight-medium',   '500',                               'Labels, page-title'],
            ['--font-weight-semibold', '600',                               'Titles, section headings'],
            ['--font-weight-bold',     '700',                               'Display, buttons'],
          ].map(([token, value, use]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-top"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-top text-data font-mono text-[var(--muted-foreground)]">{value}</td>
              <td className="py-2 px-4 align-top text-body text-[var(--muted-foreground)]">{use}</td>
            </tr>
          ))}
        </TokenTable>

        {/* ── Tracking (letter spacing) ─────────────────────────────────────── */}
        <TokenTable title="Tracking (letter spacing)" headers={['Sample', 'Token', 'Value', 'Use']}>
          {[
            ['--tracking-tighter', '-0.02em', 'Display text — large headlines'],
            ['--tracking-tight',   '-0.01em', 'Titles — section and page titles'],
            ['--tracking-normal',  '0em',     'Body text — default, no adjustment'],
            ['--tracking-wide',    '0.05em',  'Uppercase labels — section headers, captions'],
          ].map(([token, value, use]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-middle">
                <span
                  className="text-label font-medium text-[var(--foreground)]"
                  style={{ letterSpacing: value }}
                >
                  Invinsense
                </span>
              </td>
              <td className="py-2 px-4 align-middle"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-middle text-data font-mono text-[var(--muted-foreground)]">{value}</td>
              <td className="py-2 px-4 align-middle text-body text-[var(--muted-foreground)]">{use}</td>
            </tr>
          ))}
        </TokenTable>

        {/* ── Radius ────────────────────────────────────────────────────────── */}
        <TokenTable title="Radius" headers={['', 'Token', 'Class', 'Value / use']}>
          {[
            ['--radius-sm',   'rounded-sm',   '6px',    'Chips, badges, inline tags'],
            ['--radius-md',   'rounded-md',   '8px',    'Buttons, inputs, nav items (most common)'],
            ['--radius-lg',   'rounded-lg',   '10px',   'Cards, popovers, dropdowns'],
            ['--radius-xl',   'rounded-xl',   '14px',   'Modals, drawers, sheets (largest)'],
            ['--radius-full', 'rounded-full', '9999px', 'Pills, avatars, dots'],
          ].map(([token, utility, value, use]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-middle">
                <span
                  className="inline-block h-7 w-7 bg-[var(--accent-soft)] border border-[var(--accent-line)]"
                  style={{ borderRadius: `var(${token})` }}
                />
              </td>
              <td className="py-2 px-4 align-middle"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-middle"><CopyChip text={utility} /></td>
              <td className="py-2 px-4 align-middle text-body text-[var(--muted-foreground)]">{use}</td>
            </tr>
          ))}
        </TokenTable>

        {/* ── Spacing ───────────────────────────────────────────────────────── */}
        <TokenTable title="Spacing (4px grid)" headers={['', 'Token', 'Value', 'Use']}>
          {[
            ['--space-1',  '4px',  'Dense — inside label+field pairs, icon gaps'],
            ['--space-2',  '8px',  'Dense — between paired items'],
            ['--space-3',  '12px', 'Dense — compact group padding'],
            ['--space-4',  '16px', 'Dense — standard component padding'],
            ['--space-6',  '24px', 'Layout — between groups, page gutter'],
            ['--space-8',  '32px', 'Layout — between sections'],
            ['--space-12', '48px', 'Layout — major section gaps'],
            ['--space-16', '64px', 'Layout — page-level spacing'],
          ].map(([token, value, use]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-middle">
                <span className="inline-block h-3 bg-[var(--accent)] rounded-sm align-middle" style={{ width: value }} />
              </td>
              <td className="py-2 px-4 align-middle"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-middle text-data font-mono text-[var(--muted-foreground)]">{value}</td>
              <td className="py-2 px-4 align-middle text-body text-[var(--muted-foreground)]">{use}</td>
            </tr>
          ))}
        </TokenTable>

        {/* ── Motion ────────────────────────────────────────────────────────── */}
        <TokenTable title="Motion" headers={['Token', 'Value', 'Use']}>
          {[
            ['--duration-fast',  '150ms',                           'Interaction feedback (hover, press)'],
            ['--duration',       '200ms',                           'Default transition'],
            ['--duration-enter', '220ms',                           'Entrance (slower — things arriving)'],
            ['--duration-exit',  '160ms',                           'Exit (faster — things leaving)'],
            ['--ease',           'ease-out',                        'The house curve — never ease-in on entrances'],
            ['--ease-enter',     'cubic-bezier(0.2, 0.7, 0.2, 1)', 'Entrance ease'],
          ].map(([token, value, use]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-top"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-top text-data font-mono text-[var(--muted-foreground)]">{value}</td>
              <td className="py-2 px-4 align-top text-body text-[var(--muted-foreground)]">{use}</td>
            </tr>
          ))}
        </TokenTable>

        {/* ── Z-index ───────────────────────────────────────────────────────── */}
        <TokenTable title="Z-index (layering)" headers={['Token', 'Value', 'Use']}>
          {[
            ['--z-base',      '0',   'Page content'],
            ['--z-raised',    '10',  'Hover cards, floating toolbars'],
            ['--z-sticky',    '20',  'In-page sticky chrome, below the header'],
            ['--z-sidebar',   '40',  'Sidebar'],
            ['--z-toggle',    '45',  'Sidebar collapse toggle (above sidebar, below topbar)'],
            ['--z-appheader', '50',  'Topbar'],
            ['--z-dropdown',  '100', 'Menus, selects, comboboxes, apps panel'],
            ['--z-overlay',   '200', 'Backdrop'],
            ['--z-modal',     '300', 'Dialogs and drawers'],
            ['--z-toast',     '400', 'Notifications'],
            ['--z-tooltip',   '500', 'Tooltips — above everything'],
          ].map(([token, value, use]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-top"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-top text-data font-mono text-[var(--accent)]">{value}</td>
              <td className="py-2 px-4 align-top text-body text-[var(--muted-foreground)]">{use}</td>
            </tr>
          ))}
        </TokenTable>

        {/* ── Shell dimensions ──────────────────────────────────────────────── */}
        <TokenTable title="Shell dimensions (fixed)" headers={['Token', 'Value', 'Use']}>
          {[
            ['--sidebar-width',           '262px', 'Expanded sidebar'],
            ['--sidebar-collapsed-width', '76px',  'Collapsed icon rail'],
            ['--topbar-height',           '58px',  'Top bar'],
          ].map(([token, value, use]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-middle"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-middle text-data font-mono text-[var(--muted-foreground)]">{value}</td>
              <td className="py-2 px-4 align-middle text-body text-[var(--muted-foreground)]">{use}</td>
            </tr>
          ))}
        </TokenTable>

        {/* ── How to consume ────────────────────────────────────────────────── */}
        <div className="space-y-6">
          <p className="text-page-title font-medium text-[var(--foreground)]">How to consume</p>

          {/* Setup */}
          <div className="space-y-2">
            <p className="text-label font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">1 · Setup — two CSS imports, nothing else</p>
            <Card>
              <CardContent className="py-4">
                <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`/* src/index.css — the only CSS setup required */
@import "tailwindcss";
@import "invin-uix/tokens.css";        /* @font-face + @theme + all tokens */
@source "../node_modules/invin-uix/dist"; /* scan library classes */`}</pre>
              </CardContent>
            </Card>
            <p className="text-caption text-[var(--muted-foreground)]">
              No tailwind.config, no preset, no @fontsource install. Geist fonts are self-hosted by the library and load from tokens.css automatically.
            </p>
          </div>

          {/* Theme & accent */}
          <div className="space-y-2">
            <p className="text-label font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">2 · Theme + accent — two HTML attributes</p>
            <Card>
              <CardContent className="py-4">
                <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`/* Set before first render — usually in main.jsx */
document.documentElement.setAttribute('data-theme', 'dark');  // 'dark' | 'light'
document.documentElement.setAttribute('data-accent', 'xdr');  // see §04 for all keys

/* Or in JSX on the root element */
<html data-theme="dark" data-accent="xdr">

/* Switch at runtime — everything repaints, no component work needed */
document.documentElement.setAttribute('data-accent', 'gsos');`}</pre>
              </CardContent>
            </Card>
          </div>

          {/* Tailwind utilities */}
          <div className="space-y-2">
            <p className="text-label font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">3 · Tailwind utilities (generated by @theme inline)</p>
            <Card>
              <CardContent className="py-4">
                <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`/* Colour utilities — bg-*, text-*, border-* */
<div className="bg-card text-foreground border border-border rounded-lg p-4">
  <p className="text-muted-foreground">Muted text</p>
  <span className="bg-accent-soft text-accent-text rounded-md px-2 py-0.5">Accent chip</span>
</div>

/* Type scale utilities */
<h1 className="text-display font-bold tracking-[-0.02em]">Display heading</h1>
<h2 className="text-title font-semibold">Section title</h2>
<p  className="text-body text-muted-foreground">Body copy</p>
<span className="text-data font-mono">ALT-7f4c91a20e8b3d6</span>

/* Radius utilities */
<button className="rounded-md px-3 py-1.5">Button (8px)</button>
<div    className="rounded-lg p-4">Card (10px)</div>

/* Status tones */
<span className="text-ok">ok</span>
<span className="text-error">error</span>
<span className="bg-ok-wash text-ok rounded-md px-2 py-0.5">Healthy</span>`}</pre>
              </CardContent>
            </Card>
          </div>

          {/* Raw CSS variables */}
          <div className="space-y-2">
            <p className="text-label font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">4 · Raw CSS variables — when no utility fits</p>
            <Card>
              <CardContent className="py-4">
                <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`/* In style= prop or arbitrary Tailwind values */
<div style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }} />

/* Arbitrary Tailwind value — same token, utility syntax */
<div className="bg-[var(--accent-soft)] text-[var(--accent-text)]" />

/* Inline custom values using spacing tokens */
<div style={{ padding: 'var(--space-4)', gap: 'var(--space-2)' }} />

/* Shell dimensions */
<main style={{ marginLeft: 'var(--sidebar-width)' }} />
<header style={{ height: 'var(--topbar-height)' }} />`}</pre>
              </CardContent>
            </Card>
          </div>

          {/* Tints */}
          <div className="space-y-2">
            <p className="text-label font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">5 · Tints — prefer over inventing tokens</p>
            <Card>
              <CardContent className="py-4">
                <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`/* Tailwind opacity modifier on any token class */
<div className="bg-accent/10">    {/* 10% accent wash */}
<div className="bg-accent/15">    {/* 15% accent wash — same as --accent-soft */}
<div className="text-foreground/60"> {/* 60% foreground opacity */}
<div className="border-border/50">   {/* half-opacity hairline */}

/* Works on status tones too */
<div className="bg-ok/10 text-ok rounded-md px-2 py-0.5">Healthy</div>
<div className="bg-error/10 text-error rounded-md px-2 py-0.5">Failed</div>`}</pre>
              </CardContent>
            </Card>
          </div>

          {/* Motion */}
          <div className="space-y-2">
            <p className="text-label font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">6 · Motion — pair duration and easing tokens</p>
            <Card>
              <CardContent className="py-4">
                <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`/* Inline transition using tokens */
<div style={{ transition: 'transform var(--duration) var(--ease)' }} />

/* Tailwind arbitrary transition */
<div className="transition-[transform] duration-[var(--duration)]
                ease-[var(--ease)]" />

/* Entrance vs exit — entrances are slower */
.panel-enter { transition: opacity var(--duration-enter) var(--ease-enter); }
.panel-exit  { transition: opacity var(--duration-exit)  var(--ease); }

/* Press feedback — applies to everything pressable */
<button className="active:scale-[0.98] transition-transform
                   duration-[var(--duration-fast)] ease-[var(--ease)]" />`}</pre>
              </CardContent>
            </Card>
          </div>

          {/* Z-index */}
          <div className="space-y-2">
            <p className="text-label font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">7 · Z-index — always use the named tokens</p>
            <Card>
              <CardContent className="py-4">
                <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`/* Never a raw number — always a token */
<div style={{ zIndex: 'var(--z-dropdown)' }}>  {/* 100 */}
<div style={{ zIndex: 'var(--z-modal)' }}>     {/* 300 */}
<div style={{ zIndex: 'var(--z-tooltip)' }}>   {/* 500 */}

/* In Tailwind arbitrary value */
<div className="z-[var(--z-dropdown)]" />

/* Landmine: a modal rendered inside a Popover renders under it.
   Split the trigger from the dialog — never fix by raising z-index. */`}</pre>
              </CardContent>
            </Card>
          </div>

          {/* Override font */}
          <div className="space-y-2">
            <p className="text-label font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">8 · Override the typeface (optional)</p>
            <Card>
              <CardContent className="py-4">
                <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`/* In your own CSS, after @import "invin-uix/tokens.css" */
:root {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}
/* The bundled Geist woff2 will not be fetched — nothing referenced them. */`}</pre>
              </CardContent>
            </Card>
            <p className="text-caption text-[var(--muted-foreground)]">
              Every component reads <span className="font-mono text-[var(--accent)]">var(--font-sans)</span> and <span className="font-mono text-[var(--accent)]">var(--font-mono)</span>, never the literal family name. Reassigning the variables switches the whole UI with no per-component work.
            </p>
          </div>

          {/* Anti-patterns */}
          <div className="space-y-2">
            <p className="text-label font-semibold text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em]">What NOT to do</p>
            <Card>
              <CardContent className="py-4">
                <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">{`/* ✗ Hardcoded hex — breaks theming and accent cascade */
<div style={{ color: '#2769FC' }} />
<div className="text-[#2769FC]" />

/* ✗ Tailwind raw colour — same problem */
<div className="bg-blue-600 text-white" />

/* ✗ dark: override — means a token is missing */
<div className="text-gray-900 dark:text-gray-100" />  /* use text-foreground */

/* ✗ Per-module token namespace — violates Law 5 */
:root { --soar-accent: #2769FC; }

/* ✓ Correct — token names, both themes update automatically */
<div className="bg-card text-foreground border border-border" />
<div className="text-accent bg-accent-soft" />`}</pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </GuideSection>

    </div>
  );
}
