import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { ScrollArea } from 'invin-uix/ui/scroll-area';
import { Separator } from 'invin-uix/ui/separator';

const tags = Array.from({ length: 30 }, (_, i) => `Tag ${i + 1}`);

export default function ScrollAreaDemo() {
  return (
    <ComponentPage
      name="Scroll Area"
      description="Custom scrollbar container built on Radix UI. Provides consistent cross-browser scrollbar styling."
      importCode={`import { ScrollArea } from 'invin-uix/ui/scroll-area';`}
    >
      <PlaygroundSection
        title="Vertical Scroll"
        description="Fixed-height container with scrollable content."
        code={`<ScrollArea className="h-48 w-48 rounded-md border p-4">
  {items.map(item => <div key={item}>{item}</div>)}
</ScrollArea>`}
      >
        <ScrollArea className="h-48 w-60 rounded-md border border-border">
          <div className="p-4">
            <h4 className="mb-3 text-sm font-medium">Tags</h4>
            {tags.map(tag => (
              <div key={tag}>
                <div className="text-sm py-1.5">{tag}</div>
                <Separator />
              </div>
            ))}
          </div>
        </ScrollArea>
      </PlaygroundSection>

      <PlaygroundSection
        title="Horizontal Scroll"
        description="Horizontally scrollable content."
        code={`<ScrollArea className="w-full whitespace-nowrap rounded-md border">
  <div className="flex gap-4 p-4">
    {items.map(i => <div className="w-32 h-20 ..." />)}
  </div>
</ScrollArea>`}
      >
        <ScrollArea className="w-full whitespace-nowrap rounded-md border border-border">
          <div className="flex gap-3 p-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="w-32 h-20 rounded-md bg-muted flex items-center justify-center text-sm text-muted-foreground shrink-0">
                Item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </PlaygroundSection>
    </ComponentPage>
  );
}
