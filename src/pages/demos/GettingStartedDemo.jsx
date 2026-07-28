import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import { Button } from 'invin-uix/ui/button';
import { CheckCircle2, Package, Palette, Code, Layers, Sparkles } from 'invin-uix/ui/icons';

function Step({ num, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="h-7 w-7 rounded-full bg-[var(--invin-accent-soft)] flex items-center justify-center shrink-0 mt-0.5">
        <span className="text-[11px] font-[700] text-[var(--invin-accent)]">{num}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[length:var(--invin-text-card-title)] font-[600] mb-2">{title}</p>
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ title, code }) {
  return (
    <div className="rounded-[8px] border border-[var(--invin-border)] overflow-hidden">
      {title && (
        <div className="px-3 py-1.5 border-b border-[var(--invin-border)] bg-[var(--invin-bg-elev)]">
          <span className="text-[10px] font-[600] text-[var(--invin-text-faint)] uppercase tracking-[0.05em]">{title}</span>
        </div>
      )}
      <pre className="p-4 text-[length:var(--invin-text-mono)] font-mono text-[var(--invin-text)] overflow-x-auto leading-relaxed bg-[var(--invin-bg-elev)]/30">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

export default function GettingStartedDemo() {
  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="info" size="sm">Guide</Badge>
          <Badge variant="outline" size="sm">v0.1</Badge>
        </div>
        <h2 className="text-[length:var(--invin-text-page-title)] font-[700] tracking-[-0.02em]">Getting Started</h2>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] mt-1 max-w-2xl leading-relaxed">
          Set up <strong className="text-[var(--invin-text)]">invin-uix</strong> in a new or existing React project. This guide covers requirements, installation, configuration, and your first component.
        </p>
      </div>

      <Separator />

      {/* Requirements */}
      <section className="space-y-4">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Requirements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Node.js', value: '18+', desc: 'LTS recommended' },
            { label: 'React', value: '18 or 19', desc: 'With react-dom' },
            { label: 'Tailwind CSS', value: 'v4', desc: '@tailwindcss/vite plugin' },
            { label: 'Package Manager', value: 'pnpm / npm', desc: 'pnpm preferred' },
          ].map(r => (
            <Card key={r.label}>
              <CardContent className="py-3">
                <div className="flex items-center justify-between">
                  <span className="text-[length:var(--invin-text-body)] font-[500]">{r.label}</span>
                  <Badge variant="outline" size="sm">{r.value}</Badge>
                </div>
                <p className="text-[10px] text-[var(--invin-text-faint)] mt-0.5">{r.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Installation Steps */}
      <section className="space-y-6">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Setup from scratch</h3>

        <Step num="1" title="Create a Vite + React project">
          <CodeBlock code={`npm create vite@latest my-app -- --template react
cd my-app`} />
        </Step>

        <Step num="2" title="Install Tailwind CSS v4 with Vite plugin">
          <CodeBlock code={`pnpm add tailwindcss @tailwindcss/vite`} />
          <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)] mt-2">
            Add the plugin to <code className="text-[var(--invin-accent)] bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded text-[11px]">vite.config.js</code>:
          </p>
          <CodeBlock title="vite.config.js" code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`} />
        </Step>

        <Step num="3" title="Install invin-uix and fonts">
          <CodeBlock code={`pnpm add invin-uix @fontsource-variable/inter @fontsource/jetbrains-mono`} />
          <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)] mt-2">
            The library ships design tokens, Tailwind preset, and 43+ React components.
          </p>
        </Step>

        <Step num="4" title="Configure Tailwind to use the library preset">
          <CodeBlock title="tailwind.config.js" code={`import invinPreset from 'invin-uix/preset';

export default {
  presets: [invinPreset],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/invin-uix/dist/**/*.js',
  ],
};`} />
        </Step>

        <Step num="5" title="Set up your entry CSS">
          <CodeBlock title="src/index.css" code={`@import "tailwindcss";
@config "../tailwind.config.js";

:root {
  font-family: var(--invin-font-sans);
  font-size: 13.5px;
  line-height: 1.5;
  color-scheme: light dark;
  color: var(--invin-text);
  background: var(--invin-bg);
  -webkit-font-smoothing: antialiased;
}`} />
        </Step>

        <Step num="6" title="Import tokens and fonts in your entry file">
          <CodeBlock title="src/main.jsx" code={`import '@fontsource-variable/inter';
import '@fontsource/jetbrains-mono';
import './index.css';
import 'invin-uix/tokens.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);`} />
        </Step>

        <Step num="7" title="Use your first component">
          <CodeBlock title="src/App.jsx" code={`import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <Card>
        <CardContent>
          <h1 className="text-[length:var(--invin-text-sub-heading)] font-[700]">
            Hello, Invin UI
          </h1>
          <p className="text-[var(--invin-text-dim)] mt-1">
            Your library is ready.
          </p>
          <Button className="mt-4">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}`} />
        </Step>
      </section>

      <Separator />

      {/* Theming */}
      <section className="space-y-4">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Theming</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] leading-relaxed">
          The library supports <strong className="text-[var(--invin-text)]">dark/light themes</strong> via <code className="text-[var(--invin-accent)] bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded text-[11px]">html[data-theme]</code> and <strong className="text-[var(--invin-text)]">5 accent colours</strong> via <code className="text-[var(--invin-accent)] bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded text-[11px]">html[data-accent]</code>.
        </p>
        <CodeBlock title="Theme & accent switching" code={`// Dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Light mode
document.documentElement.setAttribute('data-theme', 'light');

// Accent colour (blue | crimson | violet | pink | amber)
document.documentElement.setAttribute('data-accent', 'crimson');`} />
      </section>

      <Separator />

      {/* Import patterns */}
      <section className="space-y-4">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Import patterns</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] leading-relaxed">
          Every component is available under its own path for optimal tree-shaking:
        </p>
        <CodeBlock code={`// Components
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Dialog, DialogTrigger, DialogContent } from 'invin-uix/ui/dialog';

// Icons (all lucide-react icons re-exported)
import { Search, Bell, Settings } from 'invin-uix/ui/icons';

// Layout components
import { Sidebar } from 'invin-uix/ui/sidebar';
import { Topbar } from 'invin-uix/ui/topbar';
import { Menu } from 'invin-uix/ui/menu';

// Tokens CSS (import once in entry)
import 'invin-uix/tokens.css';

// Tailwind preset (in tailwind.config.js)
import invinPreset from 'invin-uix/preset';`} />
      </section>

      <Separator />

      {/* What's included */}
      <section className="space-y-4">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">What's included</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { icon: Layers, title: '43+ Components', desc: 'Button, Card, Dialog, Menu, Sidebar, Table, and more' },
            { icon: Palette, title: 'Design Tokens', desc: 'Colours, typography, spacing, borders, motion' },
            { icon: Sparkles, title: '5 Accent Themes', desc: 'Blue, crimson, violet, pink, amber' },
            { icon: Code, title: 'Tailwind Preset', desc: 'Pre-mapped utilities from CSS variables' },
            { icon: Package, title: 'Tree-shakeable', desc: 'Individual component imports, ESM only' },
            { icon: CheckCircle2, title: 'Dark + Light', desc: 'Full theme support via data-theme attribute' },
          ].map(f => (
            <Card key={f.title} hover>
              <CardContent className="py-3">
                <div className="flex items-center gap-2 mb-1">
                  <f.icon style={{ width: 14, height: 14, color: 'var(--invin-accent)' }} />
                  <span className="text-[length:var(--invin-text-body)] font-[600]">{f.title}</span>
                </div>
                <p className="text-[10px] text-[var(--invin-text-dim)]">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Next steps */}
      <section className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Next steps</h3>
        <ul className="space-y-2 text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
          <li className="flex items-center gap-2"><CheckCircle2 style={{ width: 14, height: 14, color: 'var(--invin-ok)' }} /> Browse the component demos in the sidebar</li>
          <li className="flex items-center gap-2"><CheckCircle2 style={{ width: 14, height: 14, color: 'var(--invin-ok)' }} /> Read the UI Guide for design principles</li>
          <li className="flex items-center gap-2"><CheckCircle2 style={{ width: 14, height: 14, color: 'var(--invin-ok)' }} /> Switch theme and accent to see live token updates</li>
          <li className="flex items-center gap-2"><CheckCircle2 style={{ width: 14, height: 14, color: 'var(--invin-ok)' }} /> Copy code snippets directly from each component page</li>
        </ul>
      </section>

    </div>
  );
}
