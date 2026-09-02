import { useState } from 'react';
import { Button } from 'invin-uix/ui/button';

/**
 * Isolated Button validation page — no app layout, no unmigrated components.
 * Lets us confirm the v2 Button (flat accent fill, Geist, sizes 32/36/40)
 * across themes and accents before building the proper doc page.
 */

const ACCENTS = ['xdr', 'xdrplus', 'oxdr', 'gsos', 'pulse', 'regimentAI', 'assentra'];

function setAttr(name, value) {
  document.documentElement.setAttribute(name, value);
}

function Row({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span
        style={{
          fontSize: 'var(--text-caption)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--muted-foreground)',
        }}
      >
        {label}
      </span>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        {children}
      </div>
    </div>
  );
}

export default function ValidateButton() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );
  const [accent, setAccent] = useState(
    () => document.documentElement.getAttribute('data-accent') || 'xdr'
  );

  const applyTheme = (t) => {
    setAttr('data-theme', t);
    setTheme(t);
  };
  const applyAccent = (a) => {
    setAttr('data-accent', a);
    setAccent(a);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '40px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        maxWidth: 900,
        margin: '0 auto',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <header style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <h1
          style={{
            fontSize: 'var(--text-display)',
            fontWeight: 700,
            color: 'var(--foreground)',
            margin: 0,
          }}
        >
          Button — v2 validation
        </h1>
        <p style={{ color: 'var(--muted-foreground)', margin: 0, fontSize: 'var(--text-body)' }}>
          Flat accent fill, Geist, sizes 32 / 36 / 40. Toggle theme and accent to confirm
          the fill follows the token.
        </p>
      </header>

      {/* Controls */}
      <div
        style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap',
          padding: 16,
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
          background: 'var(--card)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--muted-foreground)' }}>
            Theme
          </span>
          <div style={{ display: 'flex', gap: 8 }}>
            {['dark', 'light'].map((t) => (
              <Button
                key={t}
                size="sm"
                variant={theme === t ? 'primary' : 'outline'}
                onClick={() => applyTheme(t)}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--muted-foreground)' }}>
            Accent
          </span>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {ACCENTS.map((a) => (
              <Button
                key={a}
                size="sm"
                variant={accent === a ? 'primary' : 'outline'}
                onClick={() => applyAccent(a)}
              >
                {a}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Row label="Variants">
        <Button variant="primary">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive-solid">Destructive solid</Button>
      </Row>

      <Row label="Sizes">
        <Button size="sm">Small 32</Button>
        <Button size="md">Medium 36</Button>
        <Button size="lg">Large 40</Button>
      </Row>

      <Row label="States">
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button shape="pill">Pill</Button>
      </Row>

      <Row label="Icon buttons">
        <Button size="icon" aria-label="plus">+</Button>
        <Button size="icon-sm" variant="outline" aria-label="plus small">+</Button>
      </Row>

      <Row label="Full width">
        <Button fullWidth>Full width</Button>
      </Row>
    </main>
  );
}
