import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Label } from 'invin-uix/ui/label';
import { Input } from 'invin-uix/ui/input';
import { Checkbox } from 'invin-uix/ui/checkbox';
import { Switch } from 'invin-uix/ui/switch';

export default function LabelDemo() {
  return (
    <ComponentPage
      name="Label"
      description="Accessible label component that pairs with form controls. Supports peer-disabled styling for connected inputs."
      importCode={`import { Label } from 'invin-uix/ui/label';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Label linked to an input via htmlFor."
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

      <PlaygroundSection
        title="With Checkbox"
        description="Label as a clickable wrapper for checkbox controls."
        code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled State"
        description="When paired with a disabled input, the label automatically reduces opacity via peer-disabled styling."
        code={`<div className="space-y-2">
  <Label htmlFor="disabled-input">Disabled field</Label>
  <Input id="disabled-input" disabled placeholder="Cannot edit" className="peer" />
</div>`}
      >
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="disabled-input" className="peer-disabled:opacity-70 peer-disabled:cursor-not-allowed">Disabled field</Label>
          <Input id="disabled-input" disabled placeholder="Cannot edit" />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="With Switch"
        description="Label paired with a Switch for settings patterns."
        code={`<div className="flex items-center justify-between w-full max-w-sm">
  <Label htmlFor="notifications">Enable notifications</Label>
  <Switch id="notifications" />
</div>`}
      >
        <div className="flex items-center justify-between w-full max-w-sm">
          <Label htmlFor="notifications">Enable notifications</Label>
          <Switch id="notifications" />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Required Field"
        description="Add a visual required indicator with custom styling."
        code={`<div className="space-y-2">
  <Label htmlFor="name">
    Full name <span className="text-destructive">*</span>
  </Label>
  <Input id="name" placeholder="John Doe" />
</div>`}
      >
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="name">
            Full name <span className="text-destructive">*</span>
          </Label>
          <Input id="name" placeholder="John Doe" />
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
