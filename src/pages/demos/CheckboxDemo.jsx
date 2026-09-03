import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable, InteractiveDemo } from '../../components/PlaygroundSection.jsx';
import { Checkbox } from 'invin-uix/ui/checkbox';
import { Label } from 'invin-uix/ui/label';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Button } from 'invin-uix/ui/button';

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  const [items, setItems] = useState([
    { id: 'email', label: 'Email notifications', checked: true },
    { id: 'sms', label: 'SMS notifications', checked: false },
    { id: 'push', label: 'Push notifications', checked: true },
    { id: 'slack', label: 'Slack messages', checked: false },
  ]);

  const toggleItem = (id, v) => setItems(prev => prev.map(i => i.id === id ? { ...i, checked: v } : i));
  const allChecked = items.every(i => i.checked);
  const someChecked = items.some(i => i.checked) && !allChecked;

  return (
    <ComponentPage
      name="Checkbox"
      description="Toggle control for binary or multi-select choices. Built on Radix UI with keyboard support, indeterminate state, and 3 sizes. Accent fill on checked."
      importCode={`import { Checkbox } from 'invin-uix/ui/checkbox';`}
    >

      {/* ─── Interactive Playground ─────────────────────────────── */}
      <InteractiveDemo
        title="Checkbox Playground"
        description="Experiment with different checkbox configurations."
        controls={[
          {
            name: 'size',
            type: 'select',
            label: 'Size',
            default: 'md',
            options: [
              { value: 'sm', label: 'Small' },
              { value: 'md', label: 'Medium' },
              { value: 'lg', label: 'Large' },
            ],
          },
          { name: 'checked', type: 'boolean', label: 'Checked', default: true },
          { name: 'disabled', type: 'boolean', label: 'Disabled', default: false },
        ]}
      >
        {(props) => (
          <div className="flex items-center gap-3">
            <Checkbox
              size={props.size}
              checked={props.checked}
              disabled={props.disabled}
              id="demo-checkbox"
            />
            <Label htmlFor="demo-checkbox" className={props.disabled ? 'opacity-50' : ''}>
              Accept terms and conditions
            </Label>
          </div>
        )}
      </InteractiveDemo>

      <Separator variant="bold" />

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Checkbox dimensions (14px / 16px / 20px)' },
          { name: 'checked', type: 'boolean | "indeterminate"', default: '—', description: 'Controlled checked state' },
          { name: 'defaultChecked', type: 'boolean', default: '—', description: 'Uncontrolled initial state' },
          { name: 'onCheckedChange', type: '(checked: boolean | "indeterminate") => void', default: '—', description: 'Change callback' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction (50% opacity)' },
          { name: 'id', type: 'string', default: '—', description: 'Links with Label via htmlFor' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Basic ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic with Label"
        description="Click the checkbox or the label text to toggle. Always pair with Label for accessibility."
        code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="newsletter" defaultChecked />
            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── Sizes ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="sm (14px), md (16px, default), lg (20px). Check icon scales proportionally."
        code={`<Checkbox size="sm" defaultChecked />
<Checkbox size="md" defaultChecked />
<Checkbox size="lg" defaultChecked />`}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Checkbox size="sm" defaultChecked id="cb-sm" />
            <Label htmlFor="cb-sm">Small</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox size="md" defaultChecked id="cb-md" />
            <Label htmlFor="cb-md">Medium</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox size="lg" defaultChecked id="cb-lg" />
            <Label htmlFor="cb-lg">Large</Label>
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── Controlled ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Controlled"
        description="Manage state externally with checked + onCheckedChange."
        code={`const [checked, setChecked] = useState(false);

<Checkbox checked={checked} onCheckedChange={setChecked} />
<span>{checked ? 'Checked' : 'Unchecked'}</span>`}
      >
        <div className="flex items-center gap-3">
          <Checkbox checked={checked} onCheckedChange={setChecked} id="controlled" />
          <Label htmlFor="controlled">
            State: <strong className="text-[var(--accent)]">{checked ? 'Checked' : 'Unchecked'}</strong>
          </Label>
        </div>
      </PlaygroundSection>

      {/* ─── Disabled ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Disabled"
        description="Prevents interaction. Works in both checked and unchecked states."
        code={`<Checkbox disabled />
<Checkbox disabled defaultChecked />`}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Checkbox disabled id="dis-un" />
            <Label htmlFor="dis-un" className="opacity-50">Disabled off</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox disabled defaultChecked id="dis-ch" />
            <Label htmlFor="dis-ch" className="opacity-50">Disabled on</Label>
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
        title="Select all + items"
        description="Parent checkbox controls all children. Shows indeterminate when partially selected."
        code={`<Checkbox
  checked={allChecked ? true : someChecked ? 'indeterminate' : false}
  onCheckedChange={(v) => setItems(items.map(i => ({ ...i, checked: !!v })))}
/>

{items.map(item => (
  <Checkbox checked={item.checked} onCheckedChange={(v) => toggle(item.id, v)} />
))}`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-3 space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-[var(--border)]">
              <Checkbox
                id="select-all"
                checked={allChecked ? true : someChecked ? 'indeterminate' : false}
                onCheckedChange={(v) => setItems(items.map(i => ({ ...i, checked: !!v })))}
              />
              <Label htmlFor="select-all" className="font-[600]">Select all</Label>
              <span className="text-[10px] text-[var(--muted-foreground-faint)] ml-auto">{items.filter(i => i.checked).length}/{items.length}</span>
            </div>
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-2">
                <Checkbox
                  id={item.id}
                  checked={item.checked}
                  onCheckedChange={(v) => toggleItem(item.id, v)}
                />
                <Label htmlFor={item.id}>{item.label}</Label>
              </div>
            ))}
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Form agreement"
        description="Required checkbox before form submission."
        code={`<div className="flex items-start gap-2">
  <Checkbox id="agree" />
  <Label htmlFor="agree" className="leading-relaxed">
    I agree to the <a>Terms</a> and <a>Privacy Policy</a>
  </Label>
</div>`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-4 space-y-4">
            <div className="flex items-start gap-2">
              <Checkbox id="agree-terms" className="mt-0.5" />
              <Label htmlFor="agree-terms" className="leading-relaxed">
                I agree to the <span className="text-[var(--accent)] cursor-pointer">Terms of Service</span> and <span className="text-[var(--accent)] cursor-pointer">Privacy Policy</span>
              </Label>
            </div>
            <Button fullWidth disabled>Create Account</Button>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
