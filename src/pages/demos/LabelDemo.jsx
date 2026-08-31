import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Label } from 'invin-uix/ui/label';
import { Input } from 'invin-uix/ui/input';
import { Checkbox } from 'invin-uix/ui/checkbox';
import { Switch } from 'invin-uix/ui/switch';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from 'invin-uix/ui/select';

export default function LabelDemo() {
  return (
    <ComponentPage
      name="Label"
      description="Accessible form label that pairs with any input control via htmlFor. Automatically dims when the connected input is disabled (peer-disabled pattern)."
      importCode={`import { Label } from 'invin-uix/ui/label';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'htmlFor', type: 'string', default: '—', description: 'ID of the form control this label is for' },
          { name: 'required', type: 'boolean', default: 'false', description: 'Show a red required asterisk after the label text' },
          { name: 'className', type: 'string', default: '—', description: 'Additional Tailwind/CSS classes' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Label text content' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Basic ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic with Input"
        description="Label linked to an input via htmlFor. Clicking the label focuses the input."
        code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" placeholder="you@example.com" />
</div>`}
      >
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="you@example.com" />
        </div>
      </PlaygroundSection>

      {/* ─── With Checkbox ──────────────────────────────────────── */}
      <PlaygroundSection
        title="With Checkbox"
        description="Label as a clickable target for checkbox. Clicking anywhere on the text toggles the checkbox."
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

      {/* ─── With Switch ────────────────────────────────────────── */}
      <PlaygroundSection
        title="With Switch"
        description="Label + Switch pattern for settings toggles."
        code={`<div className="flex items-center justify-between w-full">
  <Label htmlFor="notifications">Enable notifications</Label>
  <Switch id="notifications" />
</div>`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-3 space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="notif">Enable notifications</Label>
              <Switch id="notif" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="dark">Dark mode</Label>
              <Switch id="dark" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sounds">Sound effects</Label>
              <Switch id="sounds" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      {/* ─── Required Field ─────────────────────────────────────── */}
      <PlaygroundSection
        title="Required indicator"
        description="Pass required to render a red asterisk. It's purely visual — also set the required attribute on the input for actual form validation."
        code={`<Label htmlFor="name" required>Full name</Label>
<Input id="name" required placeholder="John Doe" />`}
      >
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="fullname" required>Full name</Label>
            <Input id="fullname" required placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company <span className="text-[var(--invin-text-faint)]">(optional)</span></Label>
            <Input id="company" placeholder="Acme Inc." />
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── Disabled ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Disabled state"
        description="When paired with a disabled input using the peer pattern, the label dims automatically."
        code={`<div className="space-y-2">
  <Input id="disabled-field" disabled placeholder="Cannot edit" className="peer" />
  <Label htmlFor="disabled-field" className="peer-disabled:opacity-50 peer-disabled:cursor-not-allowed">
    Disabled field
  </Label>
</div>`}
      >
        <div className="space-y-4 w-full max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="active-field">Active field</Label>
            <Input id="active-field" placeholder="Editable" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-field" className="opacity-50">Disabled field</Label>
            <Input id="disabled-field" disabled placeholder="Cannot edit" />
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
        title="Login form"
        description="Labels with inputs in a typical sign-in card."
        code={`<Card>
  <CardContent>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="login-email">Email</Label>
        <Input id="login-email" type="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="login-pass">Password</Label>
        <Input id="login-pass" type="password" placeholder="••••••••" />
      </div>
    </div>
  </CardContent>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-pass">Password</Label>
                <Input id="login-pass" type="password" placeholder="••••••••" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Settings section"
        description="Labels with various control types in a settings panel."
        code={`<Label htmlFor="language">Language</Label>
<Select>
  <SelectTrigger id="language">
    <SelectValue placeholder="Select language" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="en">English</SelectItem>
    <SelectItem value="es">Spanish</SelectItem>
  </SelectContent>
</Select>`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select>
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="ist">IST (India)</SelectItem>
                  <SelectItem value="est">EST (US East)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
