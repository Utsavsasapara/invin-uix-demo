import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Toggle } from 'invin-uix/ui/toggle';
import { Bold, Italic, Underline } from 'invin-uix/ui/icons';

export default function ToggleDemo() {
  return (
    <ComponentPage
      name="Toggle"
      description="A two-state button that can be toggled on/off. Useful for toolbar actions and formatting options."
      importCode={`import { Toggle } from 'invin-uix/ui/toggle';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Toggle with icon content."
        code={`<Toggle aria-label="Toggle bold">
  <Bold style={{ width: 16, height: 16 }} />
</Toggle>`}
      >
        <div className="flex items-center gap-2">
          <Toggle aria-label="Toggle bold">
            <Bold style={{ width: 16, height: 16 }} />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic style={{ width: 16, height: 16 }} />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline style={{ width: 16, height: 16 }} />
          </Toggle>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Variants"
        description="Default (no border) and outline (with border) variants."
        code={`<Toggle variant="default">Default</Toggle>
<Toggle variant="outline">Outline</Toggle>`}
      >
        <div className="flex items-center gap-3">
          <Toggle variant="default">Default</Toggle>
          <Toggle variant="outline">Outline</Toggle>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sizes"
        description="sm, md (default), lg sizes."
        code={`<Toggle size="sm">S</Toggle>
<Toggle size="md">M</Toggle>
<Toggle size="lg">L</Toggle>`}
      >
        <div className="flex items-center gap-3">
          <Toggle size="sm" variant="outline">Small</Toggle>
          <Toggle size="md" variant="outline">Medium</Toggle>
          <Toggle size="lg" variant="outline">Large</Toggle>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="With Text"
        description="Toggle with text and icon combined."
        code={`<Toggle>
  <Bold style={{ width: 14, height: 14 }} /> Bold
</Toggle>`}
      >
        <div className="flex items-center gap-2">
          <Toggle variant="outline" className="gap-1.5">
            <Bold style={{ width: 14, height: 14 }} /> Bold
          </Toggle>
          <Toggle variant="outline" className="gap-1.5">
            <Italic style={{ width: 14, height: 14 }} /> Italic
          </Toggle>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled"
        description="Disabled toggle cannot be pressed."
        code={`<Toggle disabled>Disabled</Toggle>`}
      >
        <div className="flex items-center gap-3">
          <Toggle disabled variant="outline">Disabled</Toggle>
          <Toggle disabled defaultPressed variant="outline">Disabled (pressed)</Toggle>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
