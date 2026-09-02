import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Separator } from 'invin-uix/ui/separator';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Button } from 'invin-uix/ui/button';

export default function SeparatorDemo() {
  return (
    <ComponentPage
      name="Separator"
      description="Horizontal or vertical divider line. Supports text labels with placement, dashed style, bold variant, and vertical orientation for inline content."
      importCode={`import { Separator } from 'invin-uix/ui/separator';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direction of the divider' },
          { name: 'variant', type: "'default' | 'bold'", default: "'default'", description: 'Thickness — default (1px) or bold (2px)' },
          { name: 'dashed', type: 'boolean', default: 'false', description: 'Dashed line instead of solid' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Text shown inline within the divider' },
          { name: 'titlePlacement', type: "'left' | 'center' | 'right'", default: "'center'", description: 'Text position when children provided' },
          { name: 'plain', type: 'boolean', default: 'false', description: 'Lighter text weight (400 vs 500)' },
          { name: 'decorative', type: 'boolean', default: 'true', description: 'If true, uses role="none" (no semantic separator)' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Default vs Bold ────────────────────────────────────── */}
      <PlaygroundSection
        title="Default & Bold"
        description="Default is 1px for subtle content breaks. Bold (2px) for major section dividers."
        code={`<Separator />
<Separator variant="bold" />`}
      >
        <div className="w-full space-y-6">
          <div>
            <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground-faint)] mb-2">Default (1px)</p>
            <Separator />
          </div>
          <div>
            <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground-faint)] mb-2">Bold (2px)</p>
            <Separator variant="bold" />
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── Dashed ─────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Dashed"
        description="Dashed style for preview, draft, or less permanent boundaries."
        code={`<Separator dashed />
<Separator dashed variant="bold" />`}
      >
        <div className="w-full space-y-6">
          <Separator dashed />
          <Separator dashed variant="bold" />
        </div>
      </PlaygroundSection>

      {/* ─── With Text ──────────────────────────────────────────── */}
      <PlaygroundSection
        title="With Text Label"
        description="Inline text creates a labeled section divider. Useful for grouping content."
        code={`<Separator>Section Title</Separator>
<Separator variant="bold">Important Section</Separator>
<Separator dashed>Draft Content</Separator>`}
      >
        <div className="w-full space-y-2">
          <Separator>Section Title</Separator>
          <Separator variant="bold">Important Section</Separator>
          <Separator dashed>Draft Content</Separator>
        </div>
      </PlaygroundSection>

      {/* ─── Text Placement ─────────────────────────────────────── */}
      <PlaygroundSection
        title="Text Placement"
        description="Position the label text at left, center, or right."
        code={`<Separator titlePlacement="left">Left</Separator>
<Separator titlePlacement="center">Center</Separator>
<Separator titlePlacement="right">Right</Separator>`}
      >
        <div className="w-full space-y-2">
          <Separator titlePlacement="left">Left Aligned</Separator>
          <Separator titlePlacement="center">Center (default)</Separator>
          <Separator titlePlacement="right">Right Aligned</Separator>
        </div>
      </PlaygroundSection>

      {/* ─── Plain Text ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Plain Text"
        description="Lighter weight text (400) for less prominent dividers."
        code={`<Separator plain>Less emphasis</Separator>
<Separator>Normal emphasis</Separator>`}
      >
        <div className="w-full space-y-2">
          <Separator plain>Less emphasis (plain)</Separator>
          <Separator>Normal emphasis</Separator>
        </div>
      </PlaygroundSection>

      {/* ─── Vertical ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Vertical"
        description="Inline vertical divider between text or buttons. Height matches text line-height."
        code={`<div className="flex items-center">
  <span>Home</span>
  <Separator orientation="vertical" />
  <span>Products</span>
  <Separator orientation="vertical" />
  <span>About</span>
</div>`}
      >
        <div className="flex items-center text-[var(--foreground)]">
          <span>Home</span>
          <Separator orientation="vertical" />
          <span>Products</span>
          <Separator orientation="vertical" />
          <span>About</span>
          <Separator orientation="vertical" />
          <span>Contact</span>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns in real layouts.</p>
      </div>

      <PlaygroundSection
        title="Card content sections"
        description="Separate different content areas within a card."
        code={`<Card>
  <CardContent>
    <h3>Profile</h3>
    <p>User information here...</p>
    <Separator />
    <h3>Preferences</h3>
    <p>Settings here...</p>
  </CardContent>
</Card>`}
      >
        <Card>
          <CardContent className="py-4 space-y-3">
            <div>
              <p className="text-[var(--foreground)] font-[600]">Profile</p>
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] mt-1">Name, email, avatar and other details</p>
            </div>
            <Separator />
            <div>
              <p className="text-[var(--foreground)] font-[600]">Preferences</p>
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] mt-1">Theme, language, notifications</p>
            </div>
            <Separator />
            <div>
              <p className="text-[var(--foreground)] font-[600]">Danger Zone</p>
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] mt-1">Delete account, export data</p>
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Form section headers"
        description="Label different groups in a long form."
        code={`<Separator titlePlacement="left">Personal Info</Separator>
{/* ...form fields... */}
<Separator titlePlacement="left">Address</Separator>
{/* ...form fields... */}`}
      >
        <div className="w-full space-y-3">
          <Separator titlePlacement="left">Personal Info</Separator>
          <div className="grid grid-cols-2 gap-3 pl-1">
            <div className="h-8 rounded-[8px] border border-[var(--border)] bg-[var(--input)]" />
            <div className="h-8 rounded-[8px] border border-[var(--border)] bg-[var(--input)]" />
          </div>
          <Separator titlePlacement="left">Address</Separator>
          <div className="grid grid-cols-2 gap-3 pl-1">
            <div className="h-8 rounded-[8px] border border-[var(--border)] bg-[var(--input)]" />
            <div className="h-8 rounded-[8px] border border-[var(--border)] bg-[var(--input)]" />
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Toolbar with vertical separators"
        description="Group related actions in a toolbar."
        code={`<div className="flex items-center gap-1">
  <Button variant="ghost" size="icon-sm">...</Button>
  <Button variant="ghost" size="icon-sm">...</Button>
  <Separator orientation="vertical" />
  <Button variant="ghost" size="icon-sm">...</Button>
  <Separator orientation="vertical" />
  <Badge variant="outline" size="sm">Saved</Badge>
</div>`}
      >
        <div className="flex items-center gap-1 p-1.5 rounded-[8px] border border-[var(--border)] w-fit">
          <Button variant="ghost" size="icon-sm">B</Button>
          <Button variant="ghost" size="icon-sm">I</Button>
          <Button variant="ghost" size="icon-sm">U</Button>
          <Separator orientation="vertical" />
          <Button variant="ghost" size="icon-sm">L</Button>
          <Button variant="ghost" size="icon-sm">C</Button>
          <Button variant="ghost" size="icon-sm">R</Button>
          <Separator orientation="vertical" />
          <Badge variant="outline" size="sm">Saved</Badge>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
