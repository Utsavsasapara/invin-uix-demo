import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
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
          <Badge variant="outline" size="sm">v1.0</Badge>
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
            { label: 'Package Manager', value: 'npm / pnpm', desc: 'npm or pnpm' },
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

        <Step num="2" title="Install dependencies">
          <CodeBlock code={`npm install invin-uix
npm install -D tailwindcss @tailwindcss/vite`} />
        </Step>

        <Step num="3" title="Configure Vite">
          <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)] mb-2">
            Edit <code className="text-[var(--invin-accent)] bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded text-[11px]">vite.config.js</code>:
          </p>
          <CodeBlock title="vite.config.js" code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`} />
        </Step>

        <Step num="4" title="Create Tailwind config">
          <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)] mb-2">
            Create <code className="text-[var(--invin-accent)] bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded text-[11px]">tailwind.config.js</code> in your project root:
          </p>
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

        <Step num="5" title="Setup CSS">
          <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)] mb-2">
            Replace <code className="text-[var(--invin-accent)] bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded text-[11px]">src/index.css</code> with:
          </p>
          <CodeBlock title="src/index.css" code={`@import "tailwindcss";
@import "invin-uix/tokens.css";
@config "../tailwind.config.js";
@source "../node_modules/invin-uix/dist";

/* Base styles - REQUIRED for theming to work */
html, body, #root {
  min-height: 100vh;
  background-color: var(--invin-bg);
  color: var(--invin-text);
  font-family: var(--invin-font-sans), system-ui, sans-serif;
}

body {
  margin: 0;
}`} />
        </Step>

        <Step num="6" title="Set theme">
          <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)] mb-2">
            In <code className="text-[var(--invin-accent)] bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded text-[11px]">src/main.jsx</code>, set the theme before rendering:
          </p>
          <CodeBlock title="src/main.jsx" code={`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Set theme and accent color
document.documentElement.setAttribute('data-theme', 'dark')
document.documentElement.setAttribute('data-accent', 'blue')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`} />
        </Step>

        <Step num="7" title="Use components">
          <CodeBlock title="src/App.jsx" code={`import { Button } from 'invin-uix/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from 'invin-uix/ui/card'

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <Card style={{ maxWidth: '400px' }}>
        <CardHeader>
          <CardTitle>Welcome to invin-uix</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="primary">Get Started</Button>
          <Button variant="outline" style={{ marginLeft: '8px' }}>Learn More</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App`} />
        </Step>

        <Step num="8" title="Run">
          <CodeBlock code={`npm run dev`} />
        </Step>
      </section>

      <Separator />

      {/* Theming */}
      <section className="space-y-4">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Theming</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] leading-relaxed">
          The library supports <strong className="text-[var(--invin-text)]">dark/light themes</strong> via <code className="text-[var(--invin-accent)] bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded text-[11px]">html[data-theme]</code> and <strong className="text-[var(--invin-text)]">5 accent colours</strong> via <code className="text-[var(--invin-accent)] bg-[var(--invin-surface-hover)] px-1 py-0.5 rounded text-[11px]">html[data-accent]</code>.
        </p>
        <CodeBlock title="Theme & accent switching" code={`// Dark mode (default)
document.documentElement.setAttribute('data-theme', 'dark')

// Light mode
document.documentElement.setAttribute('data-theme', 'light')

// Accent colours: blue (default) | crimson | violet | pink | amber
document.documentElement.setAttribute('data-accent', 'blue')
document.documentElement.setAttribute('data-accent', 'crimson')
document.documentElement.setAttribute('data-accent', 'violet')
document.documentElement.setAttribute('data-accent', 'pink')
document.documentElement.setAttribute('data-accent', 'amber')`} />
      </section>

      <Separator />

      {/* Import patterns */}
      <section className="space-y-4">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Import patterns</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] leading-relaxed">
          Every component is available under its own path for optimal tree-shaking:
        </p>
        <CodeBlock code={`// Components
import { Button } from 'invin-uix/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from 'invin-uix/ui/card'
import { Badge } from 'invin-uix/ui/badge'
import { Dialog, DialogTrigger, DialogContent } from 'invin-uix/ui/dialog'
import { Input } from 'invin-uix/ui/input'
import { Select, SelectTrigger, SelectContent, SelectItem } from 'invin-uix/ui/select'

// Icons (all lucide-react icons re-exported + custom product icons)
import { Search, Bell, Settings } from 'invin-uix/ui/icons'
import { ProductIcon } from 'invin-uix/ui/icons'

// Layout components
import { Sidebar } from 'invin-uix/ui/sidebar'
import { Topbar } from 'invin-uix/ui/topbar'
import { Menu } from 'invin-uix/ui/menu'

// Tailwind preset (in tailwind.config.js)
import invinPreset from 'invin-uix/preset'`} />
      </section>

      <Separator />

      {/* What's included */}
      <section className="space-y-4">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">What's included</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { icon: Layers, title: '56+ Components', desc: 'Button, Card, Dialog, DataTable, Sidebar, and more' },
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
