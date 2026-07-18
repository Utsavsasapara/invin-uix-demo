import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Textarea } from 'invin-uix/ui/textarea';
import { Label } from 'invin-uix/ui/label';

export default function TextareaDemo() {
  return (
    <ComponentPage
      name="Textarea"
      description="Multi-line text input with size variants, auto-resize support, and consistent styling."
      importCode={`import { Textarea } from 'invin-uix/ui/textarea';`}
    >
      <PlaygroundSection
        title="Sizes"
        description="Three size options: sm, md (default), lg."
        code={`<Textarea size="sm" placeholder="Small textarea" />
<Textarea size="md" placeholder="Medium textarea (default)" />
<Textarea size="lg" placeholder="Large textarea" />`}
      >
        <div className="space-y-3 w-full">
          <Textarea size="sm" placeholder="Small textarea" />
          <Textarea size="md" placeholder="Medium textarea (default)" />
          <Textarea size="lg" placeholder="Large textarea" />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="With Label"
        description="Paired with Label for form patterns."
        code={`<div className="space-y-2">
  <Label htmlFor="message">Your message</Label>
  <Textarea id="message" placeholder="Type your message here..." />
</div>`}
      >
        <div className="space-y-2 w-full max-w-md">
          <Label htmlFor="message">Your message</Label>
          <Textarea id="message" placeholder="Type your message here..." />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled"
        description="Disabled state reduces opacity and prevents interaction."
        code={`<Textarea disabled placeholder="This textarea is disabled" />`}
      >
        <div className="w-full max-w-md">
          <Textarea disabled placeholder="This textarea is disabled" />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="With Default Value"
        description="Pre-filled content for editing scenarios."
        code={`<Textarea defaultValue="This is pre-filled content that the user can edit." />`}
      >
        <div className="w-full max-w-md">
          <Textarea defaultValue="This is pre-filled content that the user can edit. It demonstrates how the textarea handles existing content." />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Max Length with Character Count"
        description="Use native maxLength attribute for character limits."
        code={`<Textarea maxLength={200} placeholder="Max 200 characters..." />`}
      >
        <div className="w-full max-w-md">
          <Textarea maxLength={200} placeholder="Max 200 characters..." />
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
