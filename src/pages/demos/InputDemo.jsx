import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable, InteractiveDemo } from '../../components/PlaygroundSection.jsx';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { MagnifyingGlass, Envelope, Lock, Eye, EyeSlash, User, Check } from 'invin-uix/ui/icons';

export default function InputDemo() {
  const [showPw, setShowPw] = useState(false);

  return (
    <ComponentPage
      name="Input"
      description="Form text input with 3 sizes, built-in leftIcon/rightIcon slots, focus ring, disabled state, error validation styling (aria-invalid), and file input support."
      importCode={`import { Input } from 'invin-uix/ui/input';`}
    >

      {/* ─── Interactive Playground ────────────────────────────── */}
      <InteractiveDemo
        title="Interactive Playground"
        description="Experiment with Input props in real-time."
        controls={[
          {
            name: 'size',
            label: 'Size',
            type: 'select',
            default: 'md',
            options: [
              { value: 'sm', label: 'Small' },
              { value: 'md', label: 'Medium' },
              { value: 'lg', label: 'Large' },
            ]
          },
          {
            name: 'type',
            label: 'Type',
            type: 'select',
            default: 'text',
            options: [
              { value: 'text', label: 'Text' },
              { value: 'email', label: 'Email' },
              { value: 'password', label: 'Password' },
              { value: 'number', label: 'Number' },
            ]
          },
          { name: 'placeholder', label: 'Placeholder', type: 'text', default: 'Enter text...' },
          { name: 'disabled', label: 'Disabled', type: 'boolean', default: false },
          { name: 'showIcon', label: 'Show Icon', type: 'boolean', default: false },
          { name: 'hasError', label: 'Has Error', type: 'boolean', default: false },
        ]}
      >
        {(props) => (
          <div className="w-full max-w-xs">
            <Input
              size={props.size}
              type={props.type}
              placeholder={props.placeholder}
              disabled={props.disabled}
              leftIcon={props.showIcon ? <MagnifyingGlass style={{ width: 16, height: 16 }} /> : undefined}
              error={props.hasError ? 'This field is required' : undefined}
            />
          </div>
        )}
      </InteractiveDemo>

      <Separator />

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height preset — sm (28px), md (38px), lg (44px). Matches Button heights.' },
          { name: 'leftIcon', type: 'ReactNode', default: '—', description: 'Icon inside the input on the left. Padding adjusts automatically.' },
          { name: 'rightIcon', type: 'ReactNode', default: '—', description: 'Icon inside the input on the right. Padding adjusts automatically.' },
          { name: 'type', type: 'string', default: "'text'", description: 'HTML input type (text, email, password, number, file, etc.)' },
          { name: 'placeholder', type: 'string', default: '—', description: 'Placeholder text (styled with text-dim)' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables input (50% opacity, no interaction)' },
          { name: 'error', type: 'string', default: '—', description: 'Error message — renders below input and auto-sets aria-invalid' },
          { name: 'className', type: 'string', default: '—', description: 'Additional Tailwind/CSS classes for the input' },
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
        description="Use Input for text-like types: text, email, password, number, search, tel, url. For dates use the DatePicker component; for files use FileUpload — those have consistent, themed UI instead of the browser's native controls."
        code={`<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="you@example.com" />
<Input type="number" placeholder="0" />
<Input type="tel" placeholder="+1 (555) 000-0000" />

// For dates and files, use the dedicated components:
// <DatePicker /> · <FileUpload />`}
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
            <Label htmlFor="type-tel">Phone</Label>
            <Input id="type-tel" type="tel" placeholder="+1 (555) 000-0000" />
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
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns in real forms.</p>
      </div>

      <PlaygroundSection
        title="With icons"
        description="Pass leftIcon / rightIcon and the input adds the icon plus the right padding for you — no manual positioning."
        code={`<Input leftIcon={<MagnifyingGlass style={{ width: 16, height: 16 }} />} placeholder="MagnifyingGlass..." />
<Input leftIcon={<Envelope style={{ width: 16, height: 16 }} />} type="email" placeholder="Email address" />
<Input rightIcon={<Check style={{ width: 16, height: 16 }} />} defaultValue="Available" />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <Input leftIcon={<MagnifyingGlass style={{ width: 16, height: 16 }} />} placeholder="MagnifyingGlass..." />
          <Input leftIcon={<Envelope style={{ width: 16, height: 16 }} />} type="email" placeholder="Email address" />
          <Input leftIcon={<User style={{ width: 16, height: 16 }} />} placeholder="Username" />
          <Input rightIcon={<Check style={{ width: 16, height: 16, color: 'var(--ok)' }} />} defaultValue="username-available" />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Password with toggle"
        description="leftIcon holds the lock; the interactive show/hide Button is layered on the right (it needs pointer events, so it sits outside the decorative rightIcon slot)."
        code={`const [showPw, setShowPw] = useState(false);

<div className="relative">
  <Input
    leftIcon={<Lock style={{ width: 16, height: 16 }} />}
    className="pr-10"
    type={showPw ? 'text' : 'password'}
    placeholder="••••••••"
  />
  <Button
    variant="ghost" size="icon-sm"
    className="absolute right-1 top-1/2 -translate-y-1/2"
    onClick={() => setShowPw(!showPw)}
    aria-label={showPw ? 'Hide password' : 'Show password'}
  >
    {showPw ? <EyeSlash /> : <Eye />}
  </Button>
</div>`}
      >
        <div className="w-full max-w-sm">
          <Label htmlFor="pw-toggle" className="mb-1.5 block">Password</Label>
          <div className="relative">
            <Input
              id="pw-toggle"
              leftIcon={<Lock style={{ width: 16, height: 16 }} />}
              className="pr-10"
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
              {showPw ? <EyeSlash style={{ width: 14, height: 14 }} /> : <Eye style={{ width: 14, height: 14 }} />}
            </Button>
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Input with button"
        description="MagnifyingGlass bar or email subscribe pattern with inline button."
        code={`<div className="flex gap-2">
  <div className="flex-1">
    <Input placeholder="Enter email..." />
  </div>
  <Button>Subscribe</Button>
</div>`}
      >
        <div className="space-y-3 w-full max-w-md">
          <div className="flex gap-2">
            <div className="flex-1">
              <Input placeholder="Enter your email..." />
            </div>
            <Button>Subscribe</Button>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <Input leftIcon={<MagnifyingGlass style={{ width: 16, height: 16 }} />} placeholder="MagnifyingGlass documentation..." />
            </div>
            <Button variant="outline">MagnifyingGlass</Button>
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
