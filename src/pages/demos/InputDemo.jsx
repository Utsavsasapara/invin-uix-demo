import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Search, Mail, Lock, Eye, EyeOff, User } from 'invin-uix/ui/icons';

export default function InputDemo() {
  const [showPw, setShowPw] = useState(false);

  return (
    <ComponentPage
      name="Input"
      description="Form text input with 3 sizes, focus ring, disabled state, error validation styling (aria-invalid), and file input support. Uses --invin-field-bg for subtle background contrast."
      importCode={`import { Input } from 'invin-uix/ui/input';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height preset — sm (28px), md (38px), lg (44px). Matches Button heights.' },
          { name: 'type', type: 'string', default: "'text'", description: 'HTML input type (text, email, password, number, file, etc.)' },
          { name: 'placeholder', type: 'string', default: '—', description: 'Placeholder text (styled with text-dim)' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables input (50% opacity, no interaction)' },
          { name: 'error', type: 'string', default: '—', description: 'Error message — renders below input and auto-sets aria-invalid' },
          { name: 'className', type: 'string', default: '—', description: 'Additional Tailwind/CSS classes' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Sizes ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="sm (32px height), md (40px, default), lg (48px). Font size scales with the preset."
        code={`<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium (default)" />
<Input size="lg" placeholder="Large" />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input (default)" />
          <Input size="lg" placeholder="Large input" />
        </div>
      </PlaygroundSection>

      {/* ─── Types ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Input types"
        description="Works with all standard HTML input types. The styling adapts automatically."
        code={`<Input type="text" placeholder="Text" />
<Input type="email" placeholder="you@example.com" />
<Input type="password" placeholder="••••••••" />
<Input type="number" placeholder="0" />
<Input type="date" />
<Input type="file" />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <div className="space-y-1.5">
            <Label htmlFor="type-text">Text</Label>
            <Input id="type-text" type="text" placeholder="Enter text..." />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="type-email">Email</Label>
            <Input id="type-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="type-number">Number</Label>
            <Input id="type-number" type="number" placeholder="0" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="type-date">Date</Label>
            <Input id="type-date" type="date" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="type-file">File</Label>
            <Input id="type-file" type="file" />
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── Disabled ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Disabled"
        description="50% opacity, no pointer events. Value is still readable."
        code={`<Input disabled placeholder="Cannot edit" />
<Input disabled defaultValue="Read-only value" />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <Input disabled placeholder="Cannot edit" />
          <Input disabled defaultValue="Read-only value" />
        </div>
      </PlaygroundSection>

      {/* ─── Error / Validation ─────────────────────────────────── */}
      <PlaygroundSection
        title="Error state"
        description="Pass error='message' to show red border + error text below the input. aria-invalid is set automatically."
        code={`<Input error="Please enter a valid email address." defaultValue="not-an-email" />

<Input type="password" error="Password must be at least 8 characters." defaultValue="123" />`}
      >
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-1.5">
            <Label htmlFor="err-email">Email</Label>
            <Input id="err-email" error="Please enter a valid email address." defaultValue="not-an-email" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="err-pw">Password</Label>
            <Input id="err-pw" type="password" error="Password must be at least 8 characters." defaultValue="123" />
          </div>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Common patterns in real forms.</p>
      </div>

      <PlaygroundSection
        title="With icon prefix"
        description="Wrap input in a relative container and position an icon to the left."
        code={`<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--invin-text-dim)]" />
  <Input className="pl-9" placeholder="Search..." />
</div>`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <div className="relative">
            <Search style={{ width: 16, height: 16 }} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--invin-text-dim)]" />
            <Input className="pl-9" placeholder="Search..." />
          </div>
          <div className="relative">
            <Mail style={{ width: 16, height: 16 }} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--invin-text-dim)]" />
            <Input className="pl-9" type="email" placeholder="Email address" />
          </div>
          <div className="relative">
            <User style={{ width: 16, height: 16 }} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--invin-text-dim)]" />
            <Input className="pl-9" placeholder="Username" />
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Password with toggle"
        description="Toggle visibility button on the right side."
        code={`const [showPw, setShowPw] = useState(false);

<div className="relative">
  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
  <Input
    className="pl-9 pr-10"
    type={showPw ? 'text' : 'password'}
    placeholder="••••••••"
  />
  <Button
    variant="ghost" size="icon-sm"
    className="absolute right-1 top-1/2 -translate-y-1/2"
    onClick={() => setShowPw(!showPw)}
  >
    {showPw ? <EyeOff /> : <Eye />}
  </Button>
</div>`}
      >
        <div className="w-full max-w-sm">
          <Label htmlFor="pw-toggle" className="mb-1.5 block">Password</Label>
          <div className="relative">
            <Lock style={{ width: 16, height: 16 }} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--invin-text-dim)]" />
            <Input
              id="pw-toggle"
              className="pl-9 pr-10"
              type={showPw ? 'text' : 'password'}
              placeholder="••••••••"
            />
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute right-1 top-1/2 -translate-y-1/2"
              onClick={() => setShowPw(!showPw)}
              aria-label={showPw ? 'Hide password' : 'Show password'}
            >
              {showPw ? <EyeOff style={{ width: 14, height: 14 }} /> : <Eye style={{ width: 14, height: 14 }} />}
            </Button>
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Input with button"
        description="Search bar or email subscribe pattern with inline button."
        code={`<div className="flex gap-2">
  <Input placeholder="Enter email..." className="flex-1" />
  <Button>Subscribe</Button>
</div>`}
      >
        <div className="space-y-3 w-full max-w-md">
          <div className="flex gap-2">
            <Input placeholder="Enter your email..." className="flex-1" />
            <Button>Subscribe</Button>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Search documentation..." className="flex-1" />
            <Button variant="outline"><Search style={{ width: 14, height: 14 }} /> Search</Button>
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Form group"
        description="Multiple inputs in a card layout with labels."
        code={`<Card>
  <CardContent>
    <div className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="fname">First name</Label>
        <Input id="fname" placeholder="John" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="lname">Last name</Label>
        <Input id="lname" placeholder="Doe" />
      </div>
      <Button fullWidth>Save</Button>
    </div>
  </CardContent>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="fname">First name</Label>
                  <Input id="fname" placeholder="John" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lname">Last name</Label>
                  <Input id="lname" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="femail">Email</Label>
                <Input id="femail" type="email" placeholder="john@example.com" />
              </div>
              <Button fullWidth>Create Account</Button>
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
