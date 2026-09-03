import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable, InteractiveDemo, DemoGrid, DemoCard } from '../../components/PlaygroundSection.jsx';
import { TagInput, TagList } from 'invin-uix/ui/tag-input';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';

// Helper to create tag objects
const createTags = (labels) => labels.map((label, i) => ({ id: `tag-${i}-${label}`, label }));

export default function TagInputDemo() {
  const [tags, setTags] = useState(createTags(['React', 'TypeScript', 'Tailwind']));
  const [emailTags, setEmailTags] = useState(createTags(['john@example.com']));
  const [skillTags, setSkillTags] = useState(createTags(['JavaScript', 'Python']));

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? undefined : 'Please enter a valid email';
  };

  return (
    <ComponentPage
      name="TagInput"
      description="Input component for managing lists of tags/chips. Supports keyboard navigation, validation, max limits, custom delimiters, and paste support. Includes TagList for display-only scenarios."
      importCode={`import { TagInput, TagList } from 'invin-uix/ui/tag-input';`}
      badges={[{ label: 'New', variant: 'accent' }]}
    >

      {/* ─── Interactive Playground ────────────────────────────── */}
      <InteractiveDemo
        title="Interactive Playground"
        description="Add tags by typing and pressing Enter or comma. Remove tags with backspace or the X button."
        controls={[
          { name: 'placeholder', label: 'Placeholder', type: 'text', default: 'Add tag...' },
          { name: 'max', label: 'Max Tags', type: 'number', default: 10, min: 1, max: 20 },
          { name: 'disabled', label: 'Disabled', type: 'boolean', default: false },
          { name: 'allowDuplicates', label: 'Allow Duplicates', type: 'boolean', default: false },
        ]}
      >
        {(props) => (
          <div className="w-full max-w-md">
            <TagInput
              value={tags}
              onChange={setTags}
              placeholder={props.placeholder}
              max={props.max}
              disabled={props.disabled}
              allowDuplicates={props.allowDuplicates}
            />
            <p className="text-[11px] text-[var(--muted-foreground)] mt-2">
              {tags.length} / {props.max} tags
            </p>
          </div>
        )}
      </InteractiveDemo>

      <Separator />

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'value', type: 'Tag[]', default: '[]', description: 'Array of tag objects {id, label, color?}' },
          { name: 'onChange', type: '(tags: Tag[]) => void', default: '—', description: 'Callback when tags change' },
          { name: 'placeholder', type: 'string', default: "'Add tag...'", description: 'Input placeholder text' },
          { name: 'max', type: 'number', default: '—', description: 'Maximum number of tags allowed' },
          { name: 'validate', type: '(input: string, tags: Tag[]) => string | undefined', default: '—', description: 'Validation function. Return error message or undefined.' },
          { name: 'delimiters', type: 'string[]', default: "['Enter', ',']", description: 'Keys that trigger tag creation' },
          { name: 'allowDuplicates', type: 'boolean', default: 'false', description: 'Allow duplicate tags' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the input' },
          { name: 'readOnly', type: 'boolean', default: 'false', description: 'Read-only mode (display only)' },
          { name: 'tagVariant', type: "'default' | 'secondary' | 'outline' | ...", default: "'secondary'", description: 'Badge variant for tags' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Basic TagInput ─────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic TagInput"
        description="Standard tag input with Enter and comma as delimiters. Backspace removes the last tag when input is empty."
        code={`const [tags, setTags] = useState([
  { id: '1', label: 'React' },
  { id: '2', label: 'TypeScript' }
]);

<TagInput
  value={tags}
  onChange={setTags}
  placeholder="Add a skill..."
/>`}
      >
        <div className="w-full max-w-md">
          <TagInput
            value={tags}
            onChange={setTags}
            placeholder="Add a skill..."
          />
        </div>
      </PlaygroundSection>

      {/* ─── With Validation ────────────────────────────────────── */}
      <PlaygroundSection
        title="With Validation"
        description="Custom validation for specific formats like email addresses. Invalid entries show an error message."
        code={`const validateEmail = (value) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(value) ? undefined : 'Please enter a valid email';
};

<TagInput
  value={emailTags}
  onChange={setEmailTags}
  placeholder="Add email..."
  validate={validateEmail}
/>`}
      >
        <div className="w-full max-w-md">
          <TagInput
            value={emailTags}
            onChange={setEmailTags}
            placeholder="Add email address..."
            validate={validateEmail}
          />
          <p className="text-[11px] text-[var(--muted-foreground)] mt-2">
            Try typing an invalid email to see validation
          </p>
        </div>
      </PlaygroundSection>

      {/* ─── With Max Limit ─────────────────────────────────────── */}
      <PlaygroundSection
        title="Max Tags Limit"
        description="Restrict the number of tags. Shows a counter and error when limit is reached."
        code={`<TagInput
  value={tags}
  onChange={setTags}
  max={5}
  placeholder="Add tag (max 5)..."
/>`}
      >
        <div className="w-full max-w-md">
          <TagInput
            value={skillTags}
            onChange={setSkillTags}
            max={5}
            placeholder="Add skill (max 5)..."
          />
        </div>
      </PlaygroundSection>

      {/* ─── Tag Variants ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Tag Variants"
        description="Tags can use different Badge variants for visual distinction."
        code={`<TagInput tagVariant="default" ... />
<TagInput tagVariant="secondary" ... />
<TagInput tagVariant="outline" ... />
<TagInput tagVariant="success" ... />`}
      >
        <div className="w-full max-w-md space-y-4">
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-2">Secondary (default)</p>
            <TagInput
              value={createTags(['Tag 1', 'Tag 2'])}
              onChange={() => {}}
              tagVariant="secondary"
              readOnly
            />
          </div>
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-2">Outline</p>
            <TagInput
              value={createTags(['Tag 1', 'Tag 2'])}
              onChange={() => {}}
              tagVariant="outline"
              readOnly
            />
          </div>
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-2">Success</p>
            <TagInput
              value={createTags(['Approved', 'Verified'])}
              onChange={() => {}}
              tagVariant="success"
              readOnly
            />
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── TagList (Display Only) ─────────────────────────────── */}
      <PlaygroundSection
        title="TagList (Display Only)"
        description="Use TagList when you only need to display tags without input functionality."
        code={`<TagList
  tags={[{ id: '1', label: 'React' }, { id: '2', label: 'TypeScript' }]}
/>

// Removable tags
<TagList
  tags={tags}
  onRemove={(tag) => setTags(tags.filter(t => t.id !== tag.id))}
/>`}
      >
        <div className="space-y-4">
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-2">Static display</p>
            <TagList tags={createTags(['React', 'TypeScript', 'Node.js', 'GraphQL'])} />
          </div>
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-2">Removable</p>
            <TagList
              tags={tags}
              onRemove={(tag) => setTags(tags.filter(t => t.id !== tag.id))}
            />
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── States ─────────────────────────────────────────────── */}
      <PlaygroundSection
        title="States"
        description="Disabled and read-only states for different use cases."
        code={`<TagInput value={tags} disabled />
<TagInput value={tags} readOnly />`}
      >
        <div className="w-full max-w-md space-y-4">
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-2">Disabled</p>
            <TagInput
              value={createTags(['Locked', 'Tags'])}
              onChange={() => {}}
              disabled
            />
          </div>
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-2">Read-only</p>
            <TagInput
              value={createTags(['Display', 'Only'])}
              onChange={() => {}}
              readOnly
            />
          </div>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use Cases</h3>
        <p className="text-[var(--muted-foreground)]">Common patterns for tag management.</p>
      </div>

      <DemoGrid columns={2}>
        <DemoCard
          title="Article Tags"
          description="Add categorization tags to blog posts or articles."
        >
          <Card className="w-full">
            <CardContent className="pt-4 pb-4 space-y-3">
              <p className="text-caption font-medium">Tags</p>
              <TagInput
                value={createTags(['Tutorial', 'React'])}
                onChange={() => {}}
                placeholder="Add tag..."
                max={5}
              />
            </CardContent>
          </Card>
        </DemoCard>

        <DemoCard
          title="Email Recipients"
          description="Collect multiple email addresses with validation."
        >
          <Card className="w-full">
            <CardContent className="pt-4 pb-4 space-y-3">
              <p className="text-caption font-medium">Recipients</p>
              <TagInput
                value={createTags(['team@company.com'])}
                onChange={() => {}}
                placeholder="Add email..."
                validate={validateEmail}
              />
            </CardContent>
          </Card>
        </DemoCard>
      </DemoGrid>

    </ComponentPage>
  );
}
