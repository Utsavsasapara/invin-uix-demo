import { useState } from 'react';
import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Switch } from 'invin-uix/ui/switch';
import { Label } from 'invin-uix/ui/label';

export default function SwitchDemo() {
  const [airplane, setAirplane] = useState(false);

  return (
    <ComponentPage
      name="Switch"
      description="A toggle switch built on Radix UI for binary on/off controls."
      importCode={`import { Switch } from 'invin-uix/ui/switch';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Simple switch with a label."
        code={`<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sizes"
        description="Three sizes: sm, md (default), lg."
        code={`<Switch size="sm" />
<Switch size="md" />
<Switch size="lg" />`}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Switch size="sm" id="sw-sm" defaultChecked />
            <Label htmlFor="sw-sm" className="text-xs">Small</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch size="md" id="sw-md" defaultChecked />
            <Label htmlFor="sw-md" className="text-sm">Medium</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch size="lg" id="sw-lg" defaultChecked />
            <Label htmlFor="sw-lg">Large</Label>
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Controlled"
        description="Controlled switch with state display."
        code={`const [airplane, setAirplane] = useState(false);
<Switch checked={airplane} onCheckedChange={setAirplane} />`}
      >
        <div className="flex items-center gap-3">
          <Switch checked={airplane} onCheckedChange={setAirplane} id="ctrl-switch" />
          <Label htmlFor="ctrl-switch">
            Airplane mode is <strong>{airplane ? 'ON' : 'OFF'}</strong>
          </Label>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled"
        description="Disabled in both states."
        code={`<Switch disabled />
<Switch disabled defaultChecked />`}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Switch disabled id="dis-off" />
            <Label htmlFor="dis-off" className="text-muted-foreground">Disabled off</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch disabled defaultChecked id="dis-on" />
            <Label htmlFor="dis-on" className="text-muted-foreground">Disabled on</Label>
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Settings Pattern"
        description="Common use case: settings list with switches."
        code={`<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label>Email notifications</Label>
    <Switch defaultChecked />
  </div>
  <div className="flex items-center justify-between">
    <Label>Marketing emails</Label>
    <Switch />
  </div>
</div>`}
      >
        <div className="space-y-4 w-full max-w-sm">
          <div className="flex items-center justify-between">
            <Label>Email notifications</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label>Marketing emails</Label>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <Label>Security alerts</Label>
            <Switch defaultChecked />
          </div>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
