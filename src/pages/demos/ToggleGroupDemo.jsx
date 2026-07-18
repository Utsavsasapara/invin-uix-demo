import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { ToggleGroup, ToggleGroupItem } from 'invin-uix/ui/toggle-group';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'invin-uix/ui/icons';

export default function ToggleGroupDemo() {
  return (
    <ComponentPage
      name="Toggle Group"
      description="A group of toggle buttons supporting single or multiple selection. Built on Radix UI."
      importCode={`import { ToggleGroup, ToggleGroupItem } from 'invin-uix/ui/toggle-group';`}
    >
      <PlaygroundSection
        title="Single Selection"
        description="Only one item can be active at a time (like radio buttons)."
        code={`<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
  <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
  <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single" defaultValue="center" variant="outline">
          <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft style={{ width: 16, height: 16 }} /></ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter style={{ width: 16, height: 16 }} /></ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right"><AlignRight style={{ width: 16, height: 16 }} /></ToggleGroupItem>
        </ToggleGroup>
      </PlaygroundSection>

      <PlaygroundSection
        title="Multiple Selection"
        description="Multiple items can be active simultaneously (like checkboxes)."
        code={`<ToggleGroup type="multiple" defaultValue={["bold"]}>
  <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><Italic /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><Underline /></ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="multiple" defaultValue={["bold"]} variant="outline">
          <ToggleGroupItem value="bold" aria-label="Bold"><Bold style={{ width: 16, height: 16 }} /></ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic"><Italic style={{ width: 16, height: 16 }} /></ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline"><Underline style={{ width: 16, height: 16 }} /></ToggleGroupItem>
        </ToggleGroup>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sizes"
        description="Size is inherited from the group or overridden per item."
        code={`<ToggleGroup type="single" size="sm">...</ToggleGroup>
<ToggleGroup type="single" size="md">...</ToggleGroup>
<ToggleGroup type="single" size="lg">...</ToggleGroup>`}
      >
        <div className="flex flex-col gap-4">
          <ToggleGroup type="single" size="sm" variant="outline" defaultValue="a">
            <ToggleGroupItem value="a">Small A</ToggleGroupItem>
            <ToggleGroupItem value="b">Small B</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="md" variant="outline" defaultValue="a">
            <ToggleGroupItem value="a">Medium A</ToggleGroupItem>
            <ToggleGroupItem value="b">Medium B</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="lg" variant="outline" defaultValue="a">
            <ToggleGroupItem value="a">Large A</ToggleGroupItem>
            <ToggleGroupItem value="b">Large B</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled"
        description="Disable the entire group or individual items."
        code={`<ToggleGroup type="single" disabled>...</ToggleGroup>`}
      >
        <ToggleGroup type="single" disabled defaultValue="a" variant="outline">
          <ToggleGroupItem value="a">Option A</ToggleGroupItem>
          <ToggleGroupItem value="b">Option B</ToggleGroupItem>
          <ToggleGroupItem value="c">Option C</ToggleGroupItem>
        </ToggleGroup>
      </PlaygroundSection>
    </ComponentPage>
  );
}
