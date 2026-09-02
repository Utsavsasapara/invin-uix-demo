import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Toggle, ToggleGroup, ToggleGroupItem } from 'invin-uix/ui/toggle';
import { Separator } from 'invin-uix/ui/separator';
import { Card, CardContent } from 'invin-uix/ui/card';
import { TextB, TextItalic, TextUnderline, TextAlignLeft, TextAlignCenter, TextAlignRight, List, SquaresFour } from 'invin-uix/ui/icons';

export default function ToggleDemo() {
  const [bold, setBold] = useState(true);

  return (
    <ComponentPage
      name="Toggle"
      description="Two-state button (on/off). Supports standalone usage and grouped selection (single/multiple). Inline styles ensure proper dark/light mode rendering."
      importCode={`import { Toggle, ToggleGroup, ToggleGroupItem } from 'invin-uix/ui/toggle';`}
    >
      <PropsTable
        props={[
          { name: 'variant', type: "'default' | 'outline'", default: "'default'", description: 'Default (no border) or outline (with border)' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height — sm (28px), md (38px), lg (44px)' },
          { name: 'pressed', type: 'boolean', default: '—', description: 'Controlled pressed state' },
          { name: 'defaultPressed', type: 'boolean', default: 'false', description: 'Uncontrolled initial state' },
          { name: 'onPressedChange', type: '(pressed: boolean) => void', default: '—', description: 'Toggle callback' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction' },
        ]}
      />

      <Separator variant="bold" />

      <PlaygroundSection
        title="Basic (icon)"
        description="Click or press Space to toggle. Active state shows accent-soft background + accent colour."
        code={`<Toggle defaultPressed><TextB style={{ width: 16, height: 16 }} /></Toggle>
<Toggle><TextItalic style={{ width: 16, height: 16 }} /></Toggle>
<Toggle><TextUnderline style={{ width: 16, height: 16 }} /></Toggle>`}
      >
        <div className="flex items-center gap-2">
          <Toggle defaultPressed aria-label="TextB"><TextB style={{ width: 16, height: 16 }} /></Toggle>
          <Toggle aria-label="TextItalic"><TextItalic style={{ width: 16, height: 16 }} /></Toggle>
          <Toggle aria-label="TextUnderline"><TextUnderline style={{ width: 16, height: 16 }} /></Toggle>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Variants"
        description="Default (no border) and outline (with border). Both show accent fill when active."
        code={`<Toggle variant="default" defaultPressed>Default ON</Toggle>
<Toggle variant="default">Default OFF</Toggle>
<Toggle variant="outline" defaultPressed>Outline ON</Toggle>
<Toggle variant="outline">Outline OFF</Toggle>`}
      >
        <div className="flex items-center gap-3">
          <Toggle variant="default" defaultPressed>Default ON</Toggle>
          <Toggle variant="default">Default OFF</Toggle>
          <Toggle variant="outline" defaultPressed>Outline ON</Toggle>
          <Toggle variant="outline">Outline OFF</Toggle>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sizes"
        description="sm (28px), md (38px), lg (44px). Matches Button heights."
        code={`<Toggle size="sm" variant="outline">Small</Toggle>
<Toggle size="md" variant="outline">Medium</Toggle>
<Toggle size="lg" variant="outline">Large</Toggle>`}
      >
        <div className="flex items-center gap-3">
          <Toggle size="sm" variant="outline">Small</Toggle>
          <Toggle size="md" variant="outline">Medium</Toggle>
          <Toggle size="lg" variant="outline">Large</Toggle>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Controlled"
        description="Manage state externally with pressed + onPressedChange."
        code={`const [bold, setBold] = useState(true);

<Toggle pressed={bold} onPressedChange={setBold} variant="outline">
  <TextB /> TextB: {bold ? 'ON' : 'OFF'}
</Toggle>`}
      >
        <Toggle pressed={bold} onPressedChange={setBold} variant="outline">
          <TextB style={{ width: 14, height: 14 }} /> TextB: <strong>{bold ? 'ON' : 'OFF'}</strong>
        </Toggle>
      </PlaygroundSection>

      <PlaygroundSection
        title="Icon + text"
        description="Icons alongside labels."
        code={`<Toggle variant="outline" defaultPressed><TextB /> TextB</Toggle>
<Toggle variant="outline"><TextItalic /> TextItalic</Toggle>`}
      >
        <div className="flex items-center gap-2">
          <Toggle variant="outline" defaultPressed><TextB style={{ width: 14, height: 14 }} /> TextB</Toggle>
          <Toggle variant="outline"><TextItalic style={{ width: 14, height: 14 }} /> TextItalic</Toggle>
          <Toggle variant="outline"><TextUnderline style={{ width: 14, height: 14 }} /> TextUnderline</Toggle>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled"
        description="Cannot be toggled."
        code={`<Toggle disabled variant="outline">Disabled</Toggle>
<Toggle disabled defaultPressed variant="outline">Disabled ON</Toggle>`}
      >
        <div className="flex items-center gap-3">
          <Toggle disabled variant="outline">Disabled</Toggle>
          <Toggle disabled defaultPressed variant="outline">Disabled ON</Toggle>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── ToggleGroup ────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Toggle Group</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Grouped toggles for single (radio) or multiple (checkbox) selection.</p>
      </div>

      <PropsTable
        props={[
          { name: 'type', type: "'single' | 'multiple'", default: '—', description: 'Single = radio, multiple = checkbox' },
          { name: 'value', type: 'string | string[]', default: '—', description: 'Controlled selected value(s)' },
          { name: 'defaultValue', type: 'string | string[]', default: '—', description: 'Uncontrolled initial value(s)' },
          { name: 'onValueChange', type: '(value) => void', default: '—', description: 'Selection change callback' },
          { name: 'variant', type: "'default' | 'outline'", default: "'default'", description: 'Inherited by all items' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Inherited by all items' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables all items' },
        ]}
      />

      <PlaygroundSection
        title="Single selection"
        description="Only one item active at a time. Like radio buttons."
        code={`<ToggleGroup type="single" defaultValue="center" variant="outline">
  <ToggleGroupItem value="left"><TextAlignLeft /></ToggleGroupItem>
  <ToggleGroupItem value="center"><TextAlignCenter /></ToggleGroupItem>
  <ToggleGroupItem value="right"><TextAlignRight /></ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single" defaultValue="center" variant="outline" size="sm">
          <ToggleGroupItem value="left" aria-label="Left"><TextAlignLeft style={{ width: 14, height: 14 }} /></ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center"><TextAlignCenter style={{ width: 14, height: 14 }} /></ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right"><TextAlignRight style={{ width: 14, height: 14 }} /></ToggleGroupItem>
        </ToggleGroup>
      </PlaygroundSection>

      <PlaygroundSection
        title="Multiple selection"
        description="Multiple items active at once. Like checkboxes."
        code={`<ToggleGroup type="multiple" defaultValue={["bold"]} variant="outline">
  <ToggleGroupItem value="bold"><TextB /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><TextItalic /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><TextUnderline /></ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="multiple" defaultValue={["bold"]} variant="outline" size="sm">
          <ToggleGroupItem value="bold" aria-label="TextB"><TextB style={{ width: 14, height: 14 }} /></ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="TextItalic"><TextItalic style={{ width: 14, height: 14 }} /></ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="TextUnderline"><TextUnderline style={{ width: 14, height: 14 }} /></ToggleGroupItem>
        </ToggleGroup>
      </PlaygroundSection>

      <Separator variant="bold" />

      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns.</p>
      </div>

      <PlaygroundSection
        title="Formatting toolbar"
        description="Combines single and multiple groups."
        code={`<ToggleGroup type="multiple" defaultValue={["bold"]} variant="outline" size="sm">
  <ToggleGroupItem value="bold"><TextB /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><TextItalic /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><TextUnderline /></ToggleGroupItem>
</ToggleGroup>
<Separator orientation="vertical" />
<ToggleGroup type="single" defaultValue="left" variant="outline" size="sm">
  <ToggleGroupItem value="left"><TextAlignLeft /></ToggleGroupItem>
  <ToggleGroupItem value="center"><TextAlignCenter /></ToggleGroupItem>
  <ToggleGroupItem value="right"><TextAlignRight /></ToggleGroupItem>
</ToggleGroup>`}
      >
        <div className="flex items-center gap-1 p-1.5 border border-[var(--border)] rounded-[8px] w-fit">
          <ToggleGroup type="multiple" defaultValue={["bold"]} size="sm">
            <ToggleGroupItem value="bold" aria-label="TextB"><TextB style={{ width: 14, height: 14 }} /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="TextItalic"><TextItalic style={{ width: 14, height: 14 }} /></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="TextUnderline"><TextUnderline style={{ width: 14, height: 14 }} /></ToggleGroupItem>
          </ToggleGroup>
          <Separator orientation="vertical" className="mx-1" />
          <ToggleGroup type="single" defaultValue="left" size="sm">
            <ToggleGroupItem value="left" aria-label="Left"><TextAlignLeft style={{ width: 14, height: 14 }} /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center"><TextAlignCenter style={{ width: 14, height: 14 }} /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right"><TextAlignRight style={{ width: 14, height: 14 }} /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="View mode switcher"
        description="Switch between grid and list views."
        code={`<ToggleGroup type="single" defaultValue="grid" variant="outline" size="sm">
  <ToggleGroupItem value="grid"><SquaresFour /> Grid</ToggleGroupItem>
  <ToggleGroupItem value="list"><List /> List</ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single" defaultValue="grid" variant="outline" size="sm">
          <ToggleGroupItem value="grid"><SquaresFour style={{ width: 14, height: 14 }} /> Grid</ToggleGroupItem>
          <ToggleGroupItem value="list"><List style={{ width: 14, height: 14 }} /> List</ToggleGroupItem>
        </ToggleGroup>
      </PlaygroundSection>

    </ComponentPage>
  );
}
