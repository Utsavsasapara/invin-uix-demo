import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Stepper, Step } from 'invin-uix/ui/stepper';
import { Button } from 'invin-uix/ui/button';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { User, Mail, Check, Settings, CreditCard, Package } from 'invin-uix/ui/icons';

export default function StepperDemo() {
  const [activeH, setActiveH] = useState(1);
  const [activeV, setActiveV] = useState(1);

  return (
    <ComponentPage
      name="Stepper"
      description="Multi-step progress indicator for wizard flows, onboarding, and checkout processes. Supports horizontal and vertical orientations with multiple visual variants."
      importCode={`import { Stepper, Step } from 'invin-uix/ui/stepper';`}
    >

      {/* ─── Props ──────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'activeStep', type: 'number', default: '0', description: 'Currently active step (0-indexed)' },
          { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout direction' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of indicators and text' },
          { name: 'variant', type: "'default' | 'dots' | 'numbered'", default: "'default'", description: 'Visual style of step indicators' },
          { name: 'clickable', type: 'boolean', default: 'false', description: 'Allow clicking steps to navigate' },
          { name: 'onStepClick', type: '(step: number) => void', default: '—', description: 'Callback when a step is clicked' },
        ]}
      />

      <Separator />

      {/* ─── Horizontal (default) ────────────────────────────── */}
      <PlaygroundSection
        title="Horizontal — default"
        description="Standard numbered step indicator with connector lines."
      >
        <div className="space-y-4">
          <Stepper activeStep={activeH} clickable onStepClick={setActiveH}>
            <Step title="Account" description="Create account" />
            <Step title="Profile" description="Set up profile" />
            <Step title="Preferences" description="Configure" />
            <Step title="Complete" description="All done" />
          </Stepper>
          <div className="flex gap-2 justify-center pt-2">
            <Button variant="outline" size="sm" onClick={() => setActiveH(Math.max(0, activeH - 1))} disabled={activeH === 0}>Back</Button>
            <Button size="sm" onClick={() => setActiveH(Math.min(3, activeH + 1))} disabled={activeH === 3}>Next</Button>
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── Horizontal — dots variant ────────────────────────── */}
      <PlaygroundSection
        title="Horizontal — dots variant"
        description="Minimal dot indicators, great for compact wizards."
      >
        <Stepper activeStep={2} variant="dots" size="sm">
          <Step title="Step 1" />
          <Step title="Step 2" />
          <Step title="Step 3" />
          <Step title="Step 4" />
          <Step title="Step 5" />
        </Stepper>
      </PlaygroundSection>

      {/* ─── Horizontal — with custom icons ───────────────────── */}
      <PlaygroundSection
        title="Horizontal — custom icons"
        description="Override default indicators with custom icons."
      >
        <Stepper activeStep={1} size="lg">
          <Step title="Account" icon={<User style={{ width: 16, height: 16 }} />} />
          <Step title="Billing" icon={<CreditCard style={{ width: 16, height: 16 }} />} />
          <Step title="Shipping" icon={<Package style={{ width: 16, height: 16 }} />} />
          <Step title="Confirm" icon={<Check style={{ width: 16, height: 16 }} />} />
        </Stepper>
      </PlaygroundSection>

      {/* ─── Vertical ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Vertical orientation"
        description="Vertical stepper with content for the active step — ideal for form wizards."
      >
        <div className="max-w-md">
          <Stepper activeStep={activeV} orientation="vertical" clickable onStepClick={setActiveV}>
            <Step title="Account details" description="Create your credentials">
              <Card>
                <CardContent className="space-y-3 pt-4">
                  <div className="space-y-1">
                    <Label>Email</Label>
                    <Input placeholder="you@example.com" />
                  </div>
                  <div className="space-y-1">
                    <Label>Password</Label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <Button size="sm" onClick={() => setActiveV(1)}>Continue</Button>
                </CardContent>
              </Card>
            </Step>
            <Step title="Personal info" description="Tell us about yourself">
              <Card>
                <CardContent className="space-y-3 pt-4">
                  <div className="space-y-1">
                    <Label>Full name</Label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setActiveV(0)}>Back</Button>
                    <Button size="sm" onClick={() => setActiveV(2)}>Continue</Button>
                  </div>
                </CardContent>
              </Card>
            </Step>
            <Step title="Preferences" description="Configure your workspace">
              <Card>
                <CardContent className="space-y-3 pt-4">
                  <p className="text-sm text-[var(--invin-text-dim)]">Choose your theme and notification settings.</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setActiveV(1)}>Back</Button>
                    <Button size="sm" onClick={() => setActiveV(3)}>Finish</Button>
                  </div>
                </CardContent>
              </Card>
            </Step>
            <Step title="Complete" description="You're all set!" />
          </Stepper>
        </div>
      </PlaygroundSection>

      {/* ─── Error state ──────────────────────────────────────── */}
      <PlaygroundSection
        title="Error state"
        description="Highlight a step with an error that needs attention."
      >
        <Stepper activeStep={1} orientation="vertical">
          <Step title="Upload file" description="CSV uploaded successfully" />
          <Step title="Validate data" description="3 rows have invalid email format" error />
          <Step title="Import" description="Waiting for validation" />
        </Stepper>
      </PlaygroundSection>

      {/* ─── Sizes ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="Three size presets: sm, md, lg."
      >
        <div className="space-y-6">
          {(['sm', 'md', 'lg']).map((size) => (
            <div key={size}>
              <p className="text-[11px] font-[500] text-[var(--invin-text-faint)] uppercase mb-2">{size}</p>
              <Stepper activeStep={1} size={size}>
                <Step title="First" />
                <Step title="Second" />
                <Step title="Third" />
              </Stepper>
            </div>
          ))}
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
