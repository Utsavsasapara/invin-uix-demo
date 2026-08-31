import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Separator } from 'invin-uix/ui/separator';

/* A single class → what it does row */
function ClassRow({ cls, note, children }) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      <div className="shrink-0 w-40">{children}</div>
      <code className="text-[11px] font-mono text-[var(--invin-accent)] shrink-0 w-52">{cls}</code>
      <span className="text-[11px] text-[var(--invin-text-dim)]">{note}</span>
    </div>
  );
}

/* Colour swatch chip */
function Swatch({ className, label }) {
  return (
    <div className={`h-8 w-full rounded-[8px] border border-[var(--invin-border)] ${className}`} title={label} />
  );
}

export default function PresetDemo() {
  return (
    <ComponentPage
      name="Preset (Tailwind classes)"
      description="A convenience layer for building your OWN custom screens on top of invin-uix. It maps short Tailwind classes onto the design tokens, so your hand-written UI stays on-token — dark/light theme and per-product accent cascade automatically. Flip the theme and accent (bottom of the sidebar) and watch this whole page respond without a single override."
      importCode={`// tailwind.config.js
import invinPreset from 'invin-uix/preset';

export default {
  presets: [invinPreset],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/invin-uix/dist/**/*.js',
  ],
};`}
    >

      {/* ─── Who this is for ────────────────────────────────────── */}
      <div className="rounded-[10px] border border-[var(--invin-border)] bg-[var(--invin-bg-elev)] p-4 space-y-2">
        <p className="text-[length:var(--invin-text-card-title)] font-[600]">Who this is for</p>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
          These classes are for <strong className="text-[var(--invin-text)]">your own custom markup</strong> — dashboards,
          layouts, one-off panels. The library's components (<code className="font-mono text-[11px]">&lt;Button&gt;</code>,
          <code className="font-mono text-[11px]"> &lt;Card&gt;</code>…) already ship fully styled and
          <strong className="text-[var(--invin-text)]"> do not need the preset</strong>. Install it only when you want these
          utility classes in the UI you write yourself.
        </p>
      </div>

      {/* ─── The rule ───────────────────────────────────────────── */}
      <div className="rounded-[10px] border border-[var(--invin-border)] bg-[var(--invin-accent-soft)] p-4">
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text)]">
          <strong>The rule:</strong> when writing your own markup, if a value has a token class, use it. Reach for
          arbitrary values like <code className="font-mono text-[11px]">bg-[#123456]</code> or
          <code className="font-mono text-[11px]"> text-[15px]</code> only when nothing in the scale fits.
        </p>
      </div>

      {/* ─── Surfaces & text ────────────────────────────────────── */}
      <PlaygroundSection
        title="Surfaces & text"
        description="Backgrounds and text emphasis levels. These carry theming — the same class is dark in dark mode, light in light mode."
        code={`<div className="bg-surface-elevated text-foreground border border-border rounded-card p-4">
  <p className="text-foreground">Primary text</p>
  <p className="text-muted-foreground">Secondary text</p>
  <p className="text-subtle-foreground">Hint text</p>
</div>`}
      >
        <div className="space-y-1">
          <ClassRow cls="bg-background" note="Page background"><Swatch className="bg-background" /></ClassRow>
          <ClassRow cls="bg-surface-elevated" note="Flat raised surface (panels)"><Swatch className="bg-surface-elevated" /></ClassRow>
          <ClassRow cls="text-foreground" note="Primary text"><span className="text-foreground text-[length:var(--invin-text-body)]">The quick brown fox</span></ClassRow>
          <ClassRow cls="text-muted-foreground" note="Secondary text"><span className="text-muted-foreground text-[length:var(--invin-text-body)]">The quick brown fox</span></ClassRow>
          <ClassRow cls="text-subtle-foreground" note="Hint text"><span className="text-subtle-foreground text-[length:var(--invin-text-body)]">The quick brown fox</span></ClassRow>
        </div>
      </PlaygroundSection>

      {/* ─── Borders ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Borders"
        description="Three strengths for dividers and edges."
        code={`<div className="border border-border rounded-card" />
<div className="border border-border-soft" />
<div className="border border-border-strong" />`}
      >
        <div className="flex gap-4">
          <div className="flex-1 h-14 rounded-[8px] border border-border-soft flex items-center justify-center text-[11px] text-muted-foreground">border-border-soft</div>
          <div className="flex-1 h-14 rounded-[8px] border border-border flex items-center justify-center text-[11px] text-muted-foreground">border-border</div>
          <div className="flex-1 h-14 rounded-[8px] border border-border-strong flex items-center justify-center text-[11px] text-muted-foreground">border-border-strong</div>
        </div>
      </PlaygroundSection>

      {/* ─── Accent ─────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Accent (switches per product)"
        description="The one colour that changes per module. Change the accent in the sidebar and every swatch below updates."
        code={`<div className="bg-accent text-white" />
<div className="bg-gradient-to-b from-accent to-accent-2 text-white" />
<div className="bg-accent-soft text-accent" />`}
      >
        <div className="space-y-1">
          <ClassRow cls="bg-accent" note="The product accent"><Swatch className="bg-accent" /></ClassRow>
          <ClassRow cls="from-accent to-accent-2" note="Gradient (primary button)"><Swatch className="bg-gradient-to-b from-accent to-accent-2" /></ClassRow>
          <ClassRow cls="bg-accent-soft" note="Tinted fill (active states)"><Swatch className="bg-accent-soft" /></ClassRow>
          <ClassRow cls="text-accent" note="Accent text"><span className="text-accent text-[length:var(--invin-text-body)] font-[600]">Accent label</span></ClassRow>
          <ClassRow cls="border-accent" note="Accent border"><div className="h-8 w-full rounded-[8px] border-2 border-accent" /></ClassRow>
        </div>
      </PlaygroundSection>

      {/* ─── Status ─────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Status colours"
        description="Semantic tones stay constant across modules. Solid for icons/emphasis, -bg variants for soft backgrounds."
        code={`<span className="text-ok">Success</span>
<span className="bg-ok-bg text-ok rounded-full px-2 py-0.5">Healthy</span>

<span className="text-warn" />   <span className="bg-warn-bg text-warn" />
<span className="text-info" />   <span className="bg-info-bg text-info" />
<span className="text-error" />  <span className="bg-error-bg text-error" />`}
      >
        <div className="flex flex-wrap gap-2">
          {/* Explicit class strings (not interpolated) so Tailwind emits them */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ok-bg text-ok text-[length:var(--invin-text-label)] px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" /> Success
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-warn-bg text-warn text-[length:var(--invin-text-label)] px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-warn" /> Warning
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-info-bg text-info text-[length:var(--invin-text-label)] px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-info" /> Info
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-error-bg text-error text-[length:var(--invin-text-label)] px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-error" /> Error
          </span>
        </div>
      </PlaygroundSection>

      {/* ─── Destructive ────────────────────────────────────────── */}
      <PlaygroundSection
        title="Destructive"
        description="Two weights for danger. Subtle for triggers, solid for the committed action."
        code={`// subtle
<button className="bg-destructive-bg text-destructive-text border border-destructive-border rounded-btn px-3 py-1.5">
  Delete
</button>

// solid
<button className="bg-destructive-solid text-destructive-fg rounded-btn px-3 py-1.5">
  Delete permanently
</button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <button className="bg-destructive-bg text-destructive-text border border-destructive-border rounded-btn px-3 py-1.5 text-[length:var(--invin-text-btn)]">Delete (subtle)</button>
          <button className="bg-destructive-solid text-destructive-fg rounded-btn px-3 py-1.5 text-[length:var(--invin-text-btn)]">Delete permanently (solid)</button>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Typography ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Typography — role classes"
        description="Role-based sizes carry the correct line-height, weight, and tracking. Prefer these over t-shirt sizes."
        code={`<h1 className="text-page-title">Page title</h1>
<h2 className="text-sub-heading">Sub-heading</h2>
<h3 className="text-card-title">Card title</h3>
<p className="text-kpi">13.2K</p>
<p className="text-body">Body copy — the default reading size.</p>
<p className="text-label">Label / meta</p>
<p className="text-eyebrow uppercase">Section label</p>
<code className="text-mono">019f1759-a9bd</code>`}
      >
        <div className="space-y-2">
          <div className="text-page-title text-foreground">Page title <span className="text-[11px] font-mono text-subtle-foreground">text-page-title · 26px</span></div>
          <div className="text-sub-heading text-foreground">Sub-heading <span className="text-[11px] font-mono text-subtle-foreground">text-sub-heading · 18px</span></div>
          <div className="text-card-title text-foreground">Card title <span className="text-[11px] font-mono text-subtle-foreground">text-card-title · 14.5px</span></div>
          <div className="text-kpi text-foreground">13.2K <span className="text-[11px] font-mono text-subtle-foreground">text-kpi · 26px</span></div>
          <div className="text-body text-foreground">Body copy — the default reading size. <span className="text-[11px] font-mono text-subtle-foreground">text-body · 13.5px</span></div>
          <div className="text-label text-muted-foreground">Label / meta <span className="text-[11px] font-mono text-subtle-foreground">text-label · 12px</span></div>
          <div className="text-eyebrow uppercase text-subtle-foreground">Section label <span className="font-mono normal-case">text-eyebrow · 11px</span></div>
          <div><code className="text-mono text-foreground">019f1759-a9bd</code> <span className="text-[11px] font-mono text-subtle-foreground">text-mono · 12px</span></div>
        </div>
      </PlaygroundSection>

      {/* ─── Radius ─────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Radius"
        description="Fixed radii keep corners consistent. Cards cap at 16px; pills are for chips and avatars."
        code={`<div className="rounded-btn-sm" />  // 9px
<div className="rounded-btn" />     // 11px
<div className="rounded-card" />    // 16px
<div className="rounded-full" />    // pill`}
      >
        <div className="flex flex-wrap gap-4">
          {[
            { cls: 'rounded-btn-sm', label: '9px' },
            { cls: 'rounded-btn', label: '11px' },
            { cls: 'rounded-card', label: '16px' },
            { cls: 'rounded-full', label: 'pill' },
          ].map(r => (
            <div key={r.cls} className="text-center">
              <div className={`h-16 w-16 bg-accent-soft border border-accent ${r.cls}`} />
              <div className="text-[10px] font-mono text-muted-foreground mt-1">{r.cls}</div>
              <div className="text-[10px] text-subtle-foreground">{r.label}</div>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Full example ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Putting it together — a token-only KPI card"
        description="Every value here comes from the preset, so this card is correct in light, dark, and any accent, with zero overrides."
        code={`<div className="bg-surface-elevated border border-border rounded-card p-4">
  <p className="text-eyebrow uppercase text-subtle-foreground">Overview</p>
  <h3 className="text-card-title text-foreground mt-1">Total Requests</h3>
  <p className="text-kpi text-foreground mt-1">13.2K</p>
  <p className="text-label text-muted-foreground">0.31 req/min</p>
  <span className="mt-2 inline-flex rounded-full bg-ok-bg text-ok text-label px-2 py-0.5">
    Healthy
  </span>
</div>`}
      >
        <div className="bg-surface-elevated border border-border rounded-card p-4 max-w-xs">
          <p className="text-eyebrow uppercase text-subtle-foreground">Overview</p>
          <h3 className="text-card-title text-foreground mt-1">Total Requests</h3>
          <p className="text-kpi text-foreground mt-1">13.2K</p>
          <p className="text-label text-muted-foreground">0.31 req/min</p>
          <span className="mt-2 inline-flex rounded-full bg-ok-bg text-ok text-[length:var(--invin-text-label)] px-2 py-0.5">Healthy</span>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
