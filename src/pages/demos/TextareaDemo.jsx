import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Textarea } from 'invin-uix/ui/textarea';
import { Label } from 'invin-uix/ui/label';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';

export default function TextareaDemo() {
  const [charCount, setCharCount] = useState(0);
  const maxChars = 200;

  return (
    <ComponentPage
      name="Textarea"
      description="Multi-line text input with 3 sizes, vertical resize, focus ring, disabled state, and error validation via aria-invalid. Same design language as Input."
      importCode={`import { Textarea } from 'invin-uix/ui/textarea';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Min-height and padding preset (60px / 80px / 120px)' },
          { name: 'placeholder', type: 'string', default: '—', description: 'Placeholder text' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables textarea (50% opacity)' },
          { name: 'error', type: 'string', default: '—', description: 'Error message — renders below textarea and auto-sets aria-invalid' },
          { name: 'maxLength', type: 'number', default: '—', description: 'Native character limit (browser enforces)' },
          { name: 'rows', type: 'number', default: '—', description: 'Initial visible rows (overrides min-height)' },
          { name: 'className', type: 'string', default: '—', description: 'Additional Tailwind/CSS classes' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Sizes ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="sm (60px min-height), md (80px, default), lg (120px). All are vertically resizable."
        code={`<Textarea size="sm" placeholder="Small" />
<Textarea size="md" placeholder="Medium (default)" />
<Textarea size="lg" placeholder="Large" />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <Textarea size="sm" placeholder="Small textarea" />
          <Textarea size="md" placeholder="Medium textarea (default)" />
          <Textarea size="lg" placeholder="Large textarea" />
        </div>
      </PlaygroundSection>

      {/* ─── With Label ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="With Label"
        description="Standard form pattern — label above, textarea below."
        code={`<div className="space-y-1.5">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message..." />
</div>`}
      >
        <div className="space-y-1.5 w-full max-w-sm">
          <Label htmlFor="msg">Message</Label>
          <Textarea id="msg" placeholder="Type your message here..." />
        </div>
      </PlaygroundSection>

      {/* ─── Disabled ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Disabled"
        description="Reduced opacity, no pointer events. Content is still readable."
        code={`<Textarea disabled placeholder="Cannot edit" />
<Textarea disabled defaultValue="Read-only content that was previously entered." />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <Textarea disabled placeholder="Cannot edit" />
          <Textarea disabled defaultValue="Read-only content that was previously entered by the user." />
        </div>
      </PlaygroundSection>

      {/* ─── Error State ────────────────────────────────────────── */}
      <PlaygroundSection
        title="Error state"
        description="Pass error='message' to show red border + error text below. aria-invalid is set automatically."
        code={`<Textarea error="Bio must be at least 20 characters." defaultValue="x" />`}
      >
        <div className="space-y-1.5 w-full max-w-sm">
          <Label htmlFor="bio-err">Bio</Label>
          <Textarea id="bio-err" error="Bio must be at least 20 characters." defaultValue="x" />
        </div>
      </PlaygroundSection>

      {/* ─── Character Count ────────────────────────────────────── */}
      <PlaygroundSection
        title="Character count"
        description="Combine maxLength with state to show a live character counter."
        code={`const [charCount, setCharCount] = useState(0);
const maxChars = 200;

<div className="space-y-1.5">
  <Label htmlFor="limited">Description</Label>
  <Textarea
    id="limited"
    maxLength={maxChars}
    placeholder="Write something..."
    onChange={(e) => setCharCount(e.target.value.length)}
  />
  <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-faint)] text-right">
    {charCount}/{maxChars}
  </p>
</div>`}
      >
        <div className="space-y-1.5 w-full max-w-sm">
          <Label htmlFor="limited">Description</Label>
          <Textarea
            id="limited"
            maxLength={maxChars}
            placeholder="Write something..."
            onChange={(e) => setCharCount(e.target.value.length)}
          />
          <p className={`text-[length:var(--invin-text-label)] text-right ${charCount >= maxChars ? 'text-[var(--invin-error)]' : 'text-[var(--invin-text-faint)]'}`}>
            {charCount}/{maxChars}
          </p>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Common patterns in real applications.</p>
      </div>

      <PlaygroundSection
        title="Feedback form"
        description="Rating or support feedback with subject + message."
        code={`<Card>
  <CardContent>
    <div className="space-y-4">
      <Input placeholder="Subject" />
      <Textarea placeholder="Describe your issue..." size="lg" />
      <Button fullWidth>Submit Feedback</Button>
    </div>
  </CardContent>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-4">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="fb-subject">Subject</Label>
                <input
                  id="fb-subject"
                  className="flex w-full rounded-md border border-[var(--invin-border)] bg-[var(--invin-field-bg)] text-[var(--invin-text)] h-10 px-3 text-[length:var(--invin-text-body)] outline-none focus:border-[var(--invin-accent)] focus:ring-2 focus:ring-[var(--invin-accent-glow)]/20 transition-[border-color,box-shadow] duration-150 placeholder:text-[var(--invin-text-dim)]"
                  placeholder="Bug report"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="fb-msg">Message</Label>
                <Textarea id="fb-msg" placeholder="Describe your issue in detail..." size="lg" />
              </div>
              <Button fullWidth>Submit Feedback</Button>
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Comment box"
        description="Compact textarea with submit button inline."
        code={`<div className="flex gap-2 items-end">
  <Textarea size="sm" placeholder="Add a comment..." className="flex-1" />
  <Button size="sm">Post</Button>
</div>`}
      >
        <div className="flex gap-2 items-end w-full max-w-md">
          <Textarea size="sm" placeholder="Add a comment..." className="flex-1 !min-h-[40px]" />
          <Button size="sm">Post</Button>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="No resize"
        description="Disable resize with className when you want fixed height."
        code={`<Textarea className="resize-none" placeholder="Fixed height, no resize handle" />`}
      >
        <div className="w-full max-w-sm">
          <Textarea className="resize-none" placeholder="Fixed height — resize is disabled" />
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
