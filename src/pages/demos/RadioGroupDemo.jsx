import { useState } from 'react';
import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { RadioGroup, RadioGroupItem } from 'invin-uix/ui/radio-group';
import { Label } from 'invin-uix/ui/label';

export default function RadioGroupDemo() {
  const [value, setValue] = useState('comfortable');

  return (
    <ComponentPage
      name="Radio Group"
      description="A radio button group built on Radix UI for single-selection from a list of options."
      importCode={`import { RadioGroup, RadioGroupItem } from 'invin-uix/ui/radio-group';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Radio group with labeled options."
        code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="comfortable" className="space-y-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sizes"
        description="RadioGroupItem supports sm, md (default), lg sizes."
        code={`<RadioGroupItem size="sm" />
<RadioGroupItem size="md" />
<RadioGroupItem size="lg" />`}
      >
        <div className="flex items-center gap-6">
          <RadioGroup defaultValue="sm">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="sm" size="sm" id="sz-sm" />
              <Label htmlFor="sz-sm" className="text-xs">Small</Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="md">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="md" size="md" id="sz-md" />
              <Label htmlFor="sz-md" className="text-sm">Medium</Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="lg">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="lg" size="lg" id="sz-lg" />
              <Label htmlFor="sz-lg">Large</Label>
            </div>
          </RadioGroup>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Controlled"
        description="Controlled with onValueChange callback."
        code={`const [value, setValue] = useState('comfortable');
<RadioGroup value={value} onValueChange={setValue}>...</RadioGroup>`}
      >
        <div className="space-y-3">
          <RadioGroup value={value} onValueChange={setValue} className="space-y-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="default" id="ctrl-1" />
              <Label htmlFor="ctrl-1">Default</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="comfortable" id="ctrl-2" />
              <Label htmlFor="ctrl-2">Comfortable</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="compact" id="ctrl-3" />
              <Label htmlFor="ctrl-3">Compact</Label>
            </div>
          </RadioGroup>
          <p className="text-xs text-muted-foreground">Selected: <strong>{value}</strong></p>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled"
        description="Individual items or entire group can be disabled."
        code={`<RadioGroup disabled defaultValue="option1">...</RadioGroup>`}
      >
        <RadioGroup disabled defaultValue="option1" className="space-y-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="dis-1" />
            <Label htmlFor="dis-1" className="text-muted-foreground">Option 1 (selected)</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="dis-2" />
            <Label htmlFor="dis-2" className="text-muted-foreground">Option 2</Label>
          </div>
        </RadioGroup>
      </PlaygroundSection>

      <PlaygroundSection
        title="Horizontal Layout"
        description="Use flex for inline radio options."
        code={`<RadioGroup defaultValue="left" className="flex gap-4">
  ...
</RadioGroup>`}
      >
        <RadioGroup defaultValue="left" className="flex gap-4">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="left" id="h-left" />
            <Label htmlFor="h-left">Left</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="center" id="h-center" />
            <Label htmlFor="h-center">Center</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="right" id="h-right" />
            <Label htmlFor="h-right">Right</Label>
          </div>
        </RadioGroup>
      </PlaygroundSection>
    </ComponentPage>
  );
}
