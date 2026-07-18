import { useState } from 'react';
import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Checkbox } from 'invin-uix/ui/checkbox';
import { Label } from 'invin-uix/ui/label';

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <ComponentPage
      name="Checkbox"
      description="A checkbox control built on Radix UI with size variants, indeterminate state, and accessible labeling."
      importCode={`import { Checkbox } from 'invin-uix/ui/checkbox';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Checkbox with a label. Click either to toggle."
        code={`<div className="flex items-center gap-2">
  <Checkbox id="agree" />
  <Label htmlFor="agree">I agree to the terms</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">I agree to the terms</Label>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sizes"
        description="Three sizes: sm, md (default), lg."
        code={`<Checkbox size="sm" defaultChecked />
<Checkbox size="md" defaultChecked />
<Checkbox size="lg" defaultChecked />`}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox size="sm" defaultChecked id="cb-sm" />
            <Label htmlFor="cb-sm" className="text-xs">Small</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox size="md" defaultChecked id="cb-md" />
            <Label htmlFor="cb-md" className="text-sm">Medium</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox size="lg" defaultChecked id="cb-lg" />
            <Label htmlFor="cb-lg">Large</Label>
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Controlled"
        description="Controlled checkbox with onCheckedChange callback."
        code={`const [checked, setChecked] = useState(false);
<Checkbox checked={checked} onCheckedChange={setChecked} />`}
      >
        <div className="flex items-center gap-2">
          <Checkbox checked={checked} onCheckedChange={setChecked} id="controlled" />
          <Label htmlFor="controlled">
            {checked ? 'Checked' : 'Unchecked'} (click to toggle)
          </Label>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled"
        description="Disabled checkboxes in both checked and unchecked states."
        code={`<Checkbox disabled />
<Checkbox disabled defaultChecked />`}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox disabled id="dis-un" />
            <Label htmlFor="dis-un" className="text-muted-foreground">Disabled unchecked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox disabled defaultChecked id="dis-ch" />
            <Label htmlFor="dis-ch" className="text-muted-foreground">Disabled checked</Label>
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Checkbox Group"
        description="Multiple checkboxes for multi-select patterns."
        code={`<div className="space-y-2">
  <div className="flex items-center gap-2">
    <Checkbox id="email" defaultChecked />
    <Label htmlFor="email">Email notifications</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="sms" />
    <Label htmlFor="sms">SMS notifications</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="push" defaultChecked />
    <Label htmlFor="push">Push notifications</Label>
  </div>
</div>`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox id="email-notif" defaultChecked />
            <Label htmlFor="email-notif">Email notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="sms-notif" />
            <Label htmlFor="sms-notif">SMS notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="push-notif" defaultChecked />
            <Label htmlFor="push-notif">Push notifications</Label>
          </div>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
