import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import { Download, Trash2, Plus, Bell, Search, Settings, Send, Copy, Check, ArrowRight, Loader2 } from 'invin-uix/ui/icons';

export default function ButtonDemo() {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const simulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const simulateCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <ComponentPage
      name="Button"
      description="Versatile button component built with CVA (Class Variance Authority). Supports 4 variants, 4 sizes, pill shape, full-width, and loading state with spinner."
      importCode={`import { Button } from 'invin-uix/ui/button';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'variant', type: "'primary' | 'outline' | 'ghost' | 'destructive'", default: "'primary'", description: 'Visual style of the button' },
          { name: 'size', type: "'sm' | 'md' | 'icon' | 'icon-sm'", default: "'md'", description: 'Size preset — md is default, icon/icon-sm for square icon buttons' },
          { name: 'shape', type: "'default' | 'pill'", default: "'default'", description: 'Border radius — pill gives fully rounded corners' },
          { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Makes button take full container width' },
          { name: 'loading', type: 'boolean', default: 'false', description: 'Shows spinner and disables interaction' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button (0.5 opacity)' },
          { name: 'asChild', type: 'boolean', default: 'false', description: 'Render as child element instead of <button> (for links, routing)' },
          { name: 'className', type: 'string', default: '—', description: 'Additional Tailwind/CSS classes' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Button content (text, icons, or both)' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── All Variants ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Variants"
        description="Four distinct visual styles. Primary is the default action, outline for secondary, ghost for toolbar/subtle, destructive for danger."
        code={`<Button>Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </PlaygroundSection>

      {/* ─── Sizes ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="md (default 16px padding), sm (compact 11px padding), icon (34px square), icon-sm (28px square)."
        code={`<Button size="md">Medium (default)</Button>
<Button size="sm">Small</Button>
<Button size="icon"><Plus style={{ width: 16, height: 16 }} /></Button>
<Button size="icon-sm"><Plus style={{ width: 14, height: 14 }} /></Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="md">Medium</Button>
          <Button size="sm">Small</Button>
          <Button size="icon" aria-label="Add"><Plus style={{ width: 16, height: 16 }} /></Button>
          <Button size="icon-sm" aria-label="Add"><Plus style={{ width: 14, height: 14 }} /></Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <Button variant="outline" size="md">Medium</Button>
          <Button variant="outline" size="sm">Small</Button>
          <Button variant="outline" size="icon" aria-label="Settings"><Settings style={{ width: 16, height: 16 }} /></Button>
          <Button variant="outline" size="icon-sm" aria-label="Settings"><Settings style={{ width: 14, height: 14 }} /></Button>
        </div>
      </PlaygroundSection>

      {/* ─── With Icons ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="With Icons"
        description="Icons are placed as children alongside text. The gap-[8px] is built-in."
        code={`// Icon + text
<Button><Download style={{ width: 14, height: 14 }} /> Download</Button>
<Button variant="outline"><Search style={{ width: 14, height: 14 }} /> Search</Button>
<Button variant="ghost"><Plus style={{ width: 14, height: 14 }} /> New</Button>
<Button variant="destructive"><Trash2 style={{ width: 14, height: 14 }} /> Delete</Button>

// Text + icon (trailing)
<Button>Next <ArrowRight style={{ width: 14, height: 14 }} /></Button>

// Icon-only buttons (use aria-label for accessibility)
<Button size="icon" aria-label="Download"><Download style={{ width: 16, height: 16 }} /></Button>
<Button variant="outline" size="icon-sm" aria-label="Bell"><Bell style={{ width: 14, height: 14 }} /></Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button><Download style={{ width: 14, height: 14 }} /> Download</Button>
          <Button variant="outline"><Search style={{ width: 14, height: 14 }} /> Search</Button>
          <Button variant="ghost"><Plus style={{ width: 14, height: 14 }} /> New</Button>
          <Button variant="destructive"><Trash2 style={{ width: 14, height: 14 }} /> Delete</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <Button>Next <ArrowRight style={{ width: 14, height: 14 }} /></Button>
          <Button variant="outline">Send <Send style={{ width: 14, height: 14 }} /></Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <Button size="icon" aria-label="Download"><Download style={{ width: 16, height: 16 }} /></Button>
          <Button variant="outline" size="icon" aria-label="Search"><Search style={{ width: 16, height: 16 }} /></Button>
          <Button variant="ghost" size="icon" aria-label="Bell"><Bell style={{ width: 16, height: 16 }} /></Button>
          <Button variant="outline" size="icon-sm" aria-label="Settings"><Settings style={{ width: 14, height: 14 }} /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Plus"><Plus style={{ width: 14, height: 14 }} /></Button>
        </div>
      </PlaygroundSection>

      {/* ─── Pill Shape ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Pill Shape"
        description="Fully rounded buttons for tags, filters, or chip-style selection. Works with all variants."
        code={`<Button shape="pill">Pill Primary</Button>
<Button variant="outline" shape="pill">Pill Outline</Button>
<Button variant="ghost" shape="pill">Pill Ghost</Button>
<Button variant="destructive" shape="pill">Pill Danger</Button>

// With colored dot indicators (filter chips)
<Button variant="outline" shape="pill">
  <span className="h-2 w-2 rounded-full bg-[#f0455a]" />
  UEMP Core
</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button shape="pill">Pill Primary</Button>
          <Button variant="outline" shape="pill">Pill Outline</Button>
          <Button variant="ghost" shape="pill">Pill Ghost</Button>
          <Button variant="destructive" shape="pill">Pill Danger</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <Button variant="outline" shape="pill">
            <span className="h-2 w-2 rounded-full bg-[#f0455a]" />
            UEMP Core
          </Button>
          <Button variant="outline" shape="pill">
            <span className="h-2 w-2 rounded-full bg-[#4a86ec]" />
            SOAR
          </Button>
          <Button variant="outline" shape="pill">
            <span className="h-2 w-2 rounded-full bg-[#9752d9]" />
            AI-Firewall
          </Button>
          <Button variant="outline" shape="pill">
            <span className="h-2 w-2 rounded-full bg-[#d64d97]" />
            GSOS
          </Button>
          <Button variant="outline" shape="pill">
            <span className="h-2 w-2 rounded-full bg-[#bd8629]" />
            OT Firewall
          </Button>
        </div>
      </PlaygroundSection>

      {/* ─── Loading State ──────────────────────────────────────── */}
      <PlaygroundSection
        title="Loading State"
        description="Pass loading={true} to show a spinner and disable interaction. Works with all variants."
        code={`const [loading, setLoading] = useState(false);

<Button loading={loading} onClick={() => {
  setLoading(true);
  setTimeout(() => setLoading(false), 2000);
}}>
  {loading ? 'Saving...' : 'Save Changes'}
</Button>

// Static loading examples
<Button loading>Loading...</Button>
<Button variant="outline" loading>Loading...</Button>
<Button variant="ghost" loading>Loading...</Button>
<Button variant="destructive" loading>Deleting...</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button loading={loading} onClick={simulateLoad}>
            {loading ? 'Saving...' : 'Click to Save'}
          </Button>
          <Button variant="outline" loading={loading} onClick={simulateLoad}>
            {loading ? 'Fetching...' : 'Fetch Data'}
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <Button loading>Loading...</Button>
          <Button variant="outline" loading>Loading...</Button>
          <Button variant="ghost" loading>Loading...</Button>
          <Button variant="destructive" loading>Deleting...</Button>
        </div>
      </PlaygroundSection>

      {/* ─── Disabled State ─────────────────────────────────────── */}
      <PlaygroundSection
        title="Disabled"
        description="Disabled buttons have 50% opacity and no pointer events."
        code={`<Button disabled>Primary</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="ghost" disabled>Ghost</Button>
<Button variant="destructive" disabled>Destructive</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Primary</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="ghost" disabled>Ghost</Button>
          <Button variant="destructive" disabled>Destructive</Button>
        </div>
      </PlaygroundSection>

      {/* ─── Full Width ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Full Width"
        description="Takes the full container width. Useful for mobile layouts, form submit, and card footers."
        code={`<Button fullWidth>Save Changes</Button>
<Button variant="outline" fullWidth>Cancel</Button>
<Button variant="ghost" fullWidth>Skip for now</Button>`}
      >
        <div className="space-y-2 max-w-sm">
          <Button fullWidth>Save Changes</Button>
          <Button variant="outline" fullWidth>Cancel</Button>
          <Button variant="ghost" fullWidth>Skip for now</Button>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Real-world Use Cases ───────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Common patterns you'll use in your project.</p>
      </div>

      <PlaygroundSection
        title="Form actions"
        description="Primary for submit, outline for cancel, ghost for tertiary."
        code={`<div className="flex items-center gap-2 justify-end">
  <Button variant="ghost">Reset</Button>
  <Button variant="outline">Cancel</Button>
  <Button>Submit</Button>
</div>`}
      >
        <Card>
          <CardContent className="py-4">
            <div className="space-y-3">
              <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Are you sure you want to save these changes?</p>
              <div className="flex items-center gap-2 justify-end">
                <Button variant="ghost">Reset</Button>
                <Button variant="outline">Cancel</Button>
                <Button>Submit</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Toolbar buttons"
        description="Ghost icon buttons for toolbars and action bars."
        code={`<div className="flex items-center gap-1 p-1 rounded-[8px] border border-[var(--invin-border)]">
  <Button variant="ghost" size="icon-sm"><Search /></Button>
  <Button variant="ghost" size="icon-sm"><Bell /></Button>
  <Button variant="ghost" size="icon-sm"><Settings /></Button>
</div>`}
      >
        <div className="flex items-center gap-1 p-1 rounded-[8px] border border-[var(--invin-border)] w-fit">
          <Button variant="ghost" size="icon-sm" aria-label="Search"><Search style={{ width: 14, height: 14 }} /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Notifications"><Bell style={{ width: 14, height: 14 }} /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Settings"><Settings style={{ width: 14, height: 14 }} /></Button>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Copy to clipboard"
        description="Toggle icon state on click for instant feedback."
        code={`const [copied, setCopied] = useState(false);

<Button
  variant="outline"
  size="sm"
  onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }}
>
  {copied ? <Check style={{ width: 14, height: 14 }} /> : <Copy style={{ width: 14, height: 14 }} />}
  {copied ? 'Copied!' : 'Copy code'}
</Button>`}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={simulateCopy}
        >
          {copied ? <Check style={{ width: 14, height: 14, color: 'var(--invin-ok)' }} /> : <Copy style={{ width: 14, height: 14 }} />}
          {copied ? 'Copied!' : 'Copy code'}
        </Button>
      </PlaygroundSection>

      <PlaygroundSection
        title="Destructive confirmation"
        description="Danger action with confirmation pattern."
        code={`<div className="flex items-center gap-2">
  <Button variant="outline">Cancel</Button>
  <Button variant="destructive">
    <Trash2 style={{ width: 14, height: 14 }} /> Delete Account
  </Button>
</div>`}
      >
        <Card>
          <CardContent className="py-4">
            <div className="space-y-3">
              <div>
                <p className="text-[length:var(--invin-text-card-title)] font-[600]">Delete account</p>
                <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] mt-1">This action cannot be undone. All data will be permanently removed.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive"><Trash2 style={{ width: 14, height: 14 }} /> Delete Account</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="As link (asChild)"
        description="Use asChild to render Button styles on an <a> tag or router Link. The button styling transfers to the child element — no nested button-in-anchor issues."
        code={`// As a plain <a> link
<Button asChild>
  <a href="/dashboard">Go to Dashboard</a>
</Button>

// Outline link
<Button variant="outline" asChild>
  <a href="/docs">Read Docs</a>
</Button>

// Ghost link with icon
<Button variant="ghost" size="sm" asChild>
  <a href="/settings">
    <Settings style={{ width: 14, height: 14 }} /> Settings
  </a>
</Button>

// With React Router (or any router)
import { Link } from 'react-router-dom';

<Button asChild>
  <Link to="/dashboard">Navigate</Link>
</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href="#aschild-demo">Go to Dashboard</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#aschild-demo">Read Docs</a>
          </Button>
          <Button variant="ghost" size="md" asChild>
            <a href="#aschild-demo"><Settings style={{ width: 14, height: 14 }} /> Settings</a>
          </Button>
          <Button variant="outline" shape="pill" asChild>
            <a href="#aschild-demo"><ArrowRight style={{ width: 14, height: 14 }} /> Learn more</a>
          </Button>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
