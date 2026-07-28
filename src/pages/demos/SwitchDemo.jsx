import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Switch } from 'invin-uix/ui/switch';
import { Label } from 'invin-uix/ui/label';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';

export default function SwitchDemo() {
  const [airplane, setAirplane] = useState(false);

  return (
    <ComponentPage
      name="Switch"
      description="Toggle switch for binary on/off controls. Built on Radix UI with keyboard support (Space to toggle), 3 sizes, and accent fill when checked."
      importCode={`import { Switch } from 'invin-uix/ui/switch';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Track dimensions (16×28 / 20×36 / 24×44 px)' },
          { name: 'checked', type: 'boolean', default: '—', description: 'Controlled checked state' },
          { name: 'defaultChecked', type: 'boolean', default: '—', description: 'Uncontrolled initial state' },
          { name: 'onCheckedChange', type: '(checked: boolean) => void', default: '—', description: 'Toggle callback' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction (50% opacity)' },
          { name: 'id', type: 'string', default: '—', description: 'Links with Label via htmlFor' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Basic ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic with Label"
        description="Pair with Label for accessibility. Clicking either toggles the switch."
        code={`<div className="flex items-center gap-2">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane Mode</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Switch id="airplane" />
          <Label htmlFor="airplane">Airplane Mode</Label>
        </div>
      </PlaygroundSection>

      {/* ─── Sizes ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="sm, md (default), lg. Thumb scales with the track."
        code={`<Switch size="sm" defaultChecked />
<Switch size="md" defaultChecked />
<Switch size="lg" defaultChecked />`}
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Switch size="sm" defaultChecked id="sw-sm" />
            <Label htmlFor="sw-sm">Small</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch size="md" defaultChecked id="sw-md" />
            <Label htmlFor="sw-md">Medium</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch size="lg" defaultChecked id="sw-lg" />
            <Label htmlFor="sw-lg">Large</Label>
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── Controlled ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Controlled"
        description="Manage state externally with checked + onCheckedChange."
        code={`const [airplane, setAirplane] = useState(false);

<Switch checked={airplane} onCheckedChange={setAirplane} />
<span>Airplane mode is {airplane ? 'ON' : 'OFF'}</span>`}
      >
        <div className="flex items-center gap-3">
          <Switch checked={airplane} onCheckedChange={setAirplane} id="ctrl-sw" />
          <Label htmlFor="ctrl-sw">
            Airplane mode is <strong className="text-[var(--invin-accent)]">{airplane ? 'ON' : 'OFF'}</strong>
          </Label>
        </div>
      </PlaygroundSection>

      {/* ─── Disabled ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Disabled"
        description="Prevents toggle. Works in both on and off states."
        code={`<Switch disabled />
<Switch disabled defaultChecked />`}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Switch disabled id="dis-off" />
            <Label htmlFor="dis-off" className="opacity-50">Disabled off</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch disabled defaultChecked id="dis-on" />
            <Label htmlFor="dis-on" className="opacity-50">Disabled on</Label>
          </div>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Common patterns in real applications.</p>
      </div>

      <PlaygroundSection
        title="Settings panel"
        description="Multiple toggles in a settings list with descriptions."
        code={`<div className="flex items-center justify-between">
  <div>
    <Label>Email notifications</Label>
    <p className="text-xs text-dim">Receive updates via email</p>
  </div>
  <Switch defaultChecked />
</div>`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-3 space-y-4">
            {[
              { id: 'notif', label: 'Email notifications', desc: 'Receive updates via email', on: true },
              { id: 'marketing', label: 'Marketing emails', desc: 'Product news and offers', on: false },
              { id: 'security', label: 'Security alerts', desc: 'Login attempts and changes', on: true },
              { id: 'sound', label: 'Sound effects', desc: 'Play sounds for actions', on: false },
            ].map(s => (
              <div key={s.id} className="flex items-center justify-between">
                <div>
                  <Label htmlFor={`set-${s.id}`}>{s.label}</Label>
                  <p className="text-[10px] text-[var(--invin-text-faint)]">{s.desc}</p>
                </div>
                <Switch id={`set-${s.id}`} size="sm" defaultChecked={s.on} />
              </div>
            ))}
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Feature toggle"
        description="Enable/disable a feature with immediate visual feedback."
        code={`<div className="flex items-center gap-3">
  <Switch size="sm" defaultChecked />
  <span>Dark mode</span>
</div>`}
      >
        <div className="flex items-center gap-3 p-3 rounded-[8px] border border-[var(--invin-border)] w-fit">
          <Switch size="sm" defaultChecked />
          <span className="text-[length:var(--invin-text-body)]">Dark mode</span>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
