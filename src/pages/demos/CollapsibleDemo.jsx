import { useState } from 'react';
import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'invin-uix/ui/collapsible';
import { Button } from 'invin-uix/ui/button';
import { ChevronDown } from 'invin-uix/ui/icons';

export default function CollapsibleDemo() {
  const [open, setOpen] = useState(false);

  return (
    <ComponentPage
      name="Collapsible"
      description="A simple expand/collapse container built on Radix UI. Unlike Accordion, it's a single collapsible section without grouping behavior."
      importCode={`import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'invin-uix/ui/collapsible';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Click the trigger to expand/collapse content."
        code={`<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">Toggle</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>Hidden content revealed on click.</p>
  </CollapsibleContent>
</Collapsible>`}
      >
        <div className="w-full max-w-sm space-y-2">
          <Collapsible open={open} onOpenChange={setOpen}>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold">3 repositories</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <ChevronDown style={{ width: 14, height: 14, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 200ms' }} />
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border border-border px-3 py-2 text-sm">
              @invin/ui-core
            </div>
            <CollapsibleContent className="space-y-2 mt-2">
              <div className="rounded-md border border-border px-3 py-2 text-sm">
                @invin/ui-icons
              </div>
              <div className="rounded-md border border-border px-3 py-2 text-sm">
                @invin/ui-tokens
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Controlled"
        description="Control open state with open and onOpenChange props."
        code={`const [open, setOpen] = useState(false);
<Collapsible open={open} onOpenChange={setOpen}>
  ...
</Collapsible>`}
      >
        <div className="space-y-2 w-full max-w-sm">
          <p className="text-xs text-muted-foreground">State: {open ? 'Open' : 'Closed'}</p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setOpen(true)}>Open</Button>
            <Button size="sm" variant="outline" onClick={() => setOpen(false)}>Close</Button>
            <Button size="sm" variant="outline" onClick={() => setOpen(!open)}>Toggle</Button>
          </div>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
