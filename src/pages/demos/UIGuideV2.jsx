import { useState } from 'react';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';

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
  ['13', 'Status vocabulary'],
  ['15', 'The four states'],
  ['18', 'Motion & accessibility'],
  ['19', 'Voice & copy'],
  ['23', 'Do & don\'t'],
  ['24', 'Anti-slop guardrails'],
  ['TR', 'Token reference'],
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function UIGuideV2() {
  return (
    <div className="space-y-12">

      {/* Header */}
      <header className="space-y-3">
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
          source of truth, recreated here with the live <strong className="text-[var(--foreground)]">invin-uix</strong> component
          library. Flip the accent from the sidebar and watch the layout stay constant while only the accent moves.
        </p>
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

      {/* ─── 13 · Status vocabulary, badges and toasts ─────────────────────── */}
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
        intro="The complete token catalogue, the way Tailwind or shadcn documents theirs. Every swatch is live — it repaints on theme and accent switch. Click any token or class to copy it. Consume these names; never author in hex."
      >
        {/* Surfaces */}
        <TokenTable title="Surfaces" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--background" utility="bg-background" use="Page canvas" />
          <ColorTokenRow token="--card" utility="bg-card" use="Raised surface — cards, panels" />
          <ColorTokenRow token="--popover" utility="bg-popover" use="Overlay surface — menus, tooltips" />
          <ColorTokenRow token="--secondary" utility="bg-secondary" use="Secondary fill, hover surface" />
          <ColorTokenRow token="--muted" utility="bg-muted" use="Recessed fill" />
          <ColorTokenRow token="--sidebar" utility="bg-sidebar" use="Rail ground (matches canvas)" />
          <ColorTokenRow token="--topbar" utility="bg-topbar" use="App header ground" />
        </TokenTable>

        {/* Text / foreground */}
        <TokenTable title="Text & foreground" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--foreground" utility="text-foreground" use="Primary text" />
          <ColorTokenRow token="--muted-foreground" utility="text-muted-foreground" use="Secondary text" />
          <ColorTokenRow token="--muted-foreground-faint" utility="text-muted-foreground-faint" use="Tertiary / faint text" />
          <ColorTokenRow token="--card-foreground" utility="text-card-foreground" use="Text on a card" />
          <ColorTokenRow token="--popover-foreground" utility="text-popover-foreground" use="Text on an overlay" />
        </TokenTable>

        {/* Accent */}
        <TokenTable title="Accent (family, live)" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--accent" utility="bg-accent / text-accent" use="Family base — primary action, active nav, ring" />
          <ColorTokenRow token="--accent-2" utility="bg-accent-2" use="Family shade — icon + tile pair" />
          <ColorTokenRow token="--accent-soft" utility="bg-accent-soft" use="12–15% wash — active fill, selected tile" />
          <ColorTokenRow token="--accent-line" utility="border-accent-line" use="35% mix — hairlines on accented surfaces" />
          <ColorTokenRow token="--accent-text" utility="text-accent-text" use="AA-measured accent text tone" />
        </TokenTable>

        {/* Status */}
        <TokenTable title="Status tones" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--ok" utility="text-ok" use="Events flowing, no active error" />
          <ColorTokenRow token="--degraded" utility="text-degraded" use="Data lands while a collector errors" />
          <ColorTokenRow token="--error" utility="text-error" use="Failing and nothing arriving" />
          <ColorTokenRow token="--info" utility="text-info" use="Informational" />
          <ColorTokenRow token="--idle" utility="text-idle" use="Provably alive, nothing to send" />
          <ColorTokenRow token="--pending" utility="text-pending" use="Undetermined or paused" />
          <ColorTokenRow token="--ok-wash" utility="bg-ok-wash" use="Soft ok surface" />
          <ColorTokenRow token="--error-wash" utility="bg-error-wash" use="Soft error surface" />
        </TokenTable>

        {/* Lines / action */}
        <TokenTable title="Lines, rings & action" headers={['', 'Token', 'Class', 'Use']}>
          <ColorTokenRow token="--border" utility="border-border" use="Hairline" />
          <ColorTokenRow token="--input" utility="border-input" use="Field border" />
          <ColorTokenRow token="--ring" utility="ring-ring" use="Focus ring" />
          <ColorTokenRow token="--destructive" utility="bg-destructive" use="Destructive action only" />
          <ColorTokenRow token="--destructive-foreground" utility="text-destructive-foreground" use="Text on destructive" />
        </TokenTable>

        {/* Typography scale */}
        <TokenTable title="Type scale" headers={['Sample', 'Token', 'Class', 'Size']}>
          {[
            ['--text-display', 'text-display', '30 / 36', 'text-display'],
            ['--text-title', 'text-title', '20 / 28', 'text-title'],
            ['--text-section', 'text-section', '18 / 26', 'text-section'],
            ['--text-page-title', 'text-page-title', '16 / 24', 'text-page-title'],
            ['--text-body', 'text-body', '14 / 20', 'text-body'],
            ['--text-label', 'text-label', '13 / 18', 'text-label'],
            ['--text-caption', 'text-caption', '12 / 16', 'text-caption'],
            ['--text-data', 'text-data', '13 mono', 'text-data'],
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

        {/* Radius */}
        <TokenTable title="Radius" headers={['', 'Token', 'Class', 'Value']}>
          {[
            ['--radius-sm', 'rounded-sm', '6px', 'sm'],
            ['--radius-md', 'rounded-md', '8px', 'md'],
            ['--radius-lg', 'rounded-lg', '10px', 'lg'],
            ['--radius-xl', 'rounded-xl', '14px', 'xl'],
            ['--radius-full', 'rounded-full', '9999px', 'full'],
          ].map(([token, utility, value, key]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-middle">
                <span
                  className="inline-block h-7 w-7 bg-[var(--accent-soft)] border border-[var(--accent-line)]"
                  style={{ borderRadius: `var(${token})` }}
                />
              </td>
              <td className="py-2 px-4 align-middle"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-middle"><CopyChip text={utility} /></td>
              <td className="py-2 px-4 align-middle text-data font-mono text-[var(--muted-foreground)]">{value}</td>
            </tr>
          ))}
        </TokenTable>

        {/* Spacing */}
        <TokenTable title="Spacing (4px grid)" headers={['', 'Token', 'Value', 'Step']}>
          {[
            ['--space-1', '4px', '1'],
            ['--space-2', '8px', '2'],
            ['--space-3', '12px', '3'],
            ['--space-4', '16px', '4'],
            ['--space-6', '24px', '6'],
            ['--space-8', '32px', '8'],
            ['--space-12', '48px', '12'],
            ['--space-16', '64px', '16'],
          ].map(([token, value, step]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-middle">
                <span className="inline-block h-3 bg-[var(--accent)] rounded-sm align-middle" style={{ width: `var(${token})` }} />
              </td>
              <td className="py-2 px-4 align-middle"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-middle text-data font-mono text-[var(--muted-foreground)]">{value}</td>
              <td className="py-2 px-4 align-middle text-data font-mono text-[var(--muted-foreground-faint)]">{step}</td>
            </tr>
          ))}
        </TokenTable>

        {/* Shell dimensions */}
        <TokenTable title="Shell dimensions (fixed)" headers={['Token', 'Value', 'Use']}>
          {[
            ['--sidebar-width', '262px', 'Expanded sidebar'],
            ['--sidebar-collapsed-width', '76px', 'Collapsed icon rail'],
            ['--topbar-height', '58px', 'Top bar'],
          ].map(([token, value, use]) => (
            <tr key={token} className="border-b border-[var(--border)] last:border-0">
              <td className="py-2 px-4 align-middle"><CopyChip text={token} /></td>
              <td className="py-2 px-4 align-middle text-data font-mono text-[var(--muted-foreground)]">{value}</td>
              <td className="py-2 px-4 align-middle text-body text-[var(--muted-foreground)]">{use}</td>
            </tr>
          ))}
        </TokenTable>

        {/* How to consume */}
        <div className="space-y-2">
          <p className="text-page-title font-medium text-[var(--foreground)]">How to consume</p>
          <Card>
            <CardContent className="py-4">
              <pre className="text-data font-mono text-[var(--foreground)] overflow-x-auto leading-relaxed">
{`/* 1. Tailwind utility (from @theme inline) */
<div className="bg-card text-foreground rounded-lg p-4">
  <span className="text-page-title">Panel</span>
</div>

/* 2. Raw CSS variable, when no utility fits */
<div style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }} />

/* 3. A tint — prefer this over a new token */
<div className="bg-accent/10 text-accent" />`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </GuideSection>

    </div>
  );
}
