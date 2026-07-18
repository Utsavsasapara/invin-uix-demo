import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'invin-uix/ui/accordion';

export default function AccordionDemo() {
  return (
    <ComponentPage
      name="Accordion"
      description="A vertically stacked set of collapsible sections. Supports single or multiple expanded items, and visual variants."
      importCode={`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'invin-uix/ui/accordion';`}
    >
      <PlaygroundSection
        title="Single (default)"
        description="Only one item open at a time. Clicking another closes the current."
        code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. Built on Radix UI with full keyboard support.</AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <div className="w-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to WAI-ARIA design patterns and supports full keyboard navigation.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes. It uses Tailwind CSS classes and respects your design tokens via the Invin preset.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes. It uses CSS animations for smooth open/close transitions.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Multiple"
        description="Multiple items can be open simultaneously."
        code={`<Accordion type="multiple" defaultValue={["item-1"]}>
  ...
</Accordion>`}
      >
        <div className="w-full">
          <Accordion type="multiple" defaultValue={["item-1"]}>
            <AccordionItem value="item-1">
              <AccordionTrigger>Section One</AccordionTrigger>
              <AccordionContent>Content for section one. This stays open when you open other sections.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Section Two</AccordionTrigger>
              <AccordionContent>Content for section two. Multiple items can be expanded at once.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Section Three</AccordionTrigger>
              <AccordionContent>Content for section three.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Variants"
        description="Visual styles: default (border-bottom), bordered, filled, ghost."
        code={`<AccordionItem variant="bordered" value="...">
<AccordionItem variant="filled" value="...">`}
      >
        <div className="w-full space-y-6">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Bordered</p>
            <Accordion type="single" collapsible>
              <AccordionItem variant="bordered" value="b1">
                <AccordionTrigger>Bordered item</AccordionTrigger>
                <AccordionContent>Content with a full border and rounded corners.</AccordionContent>
              </AccordionItem>
              <AccordionItem variant="bordered" value="b2">
                <AccordionTrigger>Another bordered</AccordionTrigger>
                <AccordionContent>Each item is visually distinct.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Filled</p>
            <Accordion type="single" collapsible>
              <AccordionItem variant="filled" value="f1">
                <AccordionTrigger>Filled item</AccordionTrigger>
                <AccordionContent>Content with a muted background fill.</AccordionContent>
              </AccordionItem>
              <AccordionItem variant="filled" value="f2">
                <AccordionTrigger>Another filled</AccordionTrigger>
                <AccordionContent>Subtle background distinction.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
