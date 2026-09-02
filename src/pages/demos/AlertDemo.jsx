import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Alert, AlertTitle, AlertDescription } from 'invin-uix/ui/alert';
import { Separator } from 'invin-uix/ui/separator';
import { Button } from 'invin-uix/ui/button';
import { WarningCircle, CheckCircle, Info, Warning, Terminal } from 'invin-uix/ui/icons';

export default function AlertDemo() {
  const [showDismissible, setShowDismissible] = useState(true);

  return (
    <ComponentPage
      name="Alert"
      description="Status message component with 5 semantic variants. Pass an icon via the icon prop (auto-positioned + coloured to match the variant), plus title + description and dismissible mode."
      importCode={`import { Alert, AlertTitle, AlertDescription } from 'invin-uix/ui/alert';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'variant', type: "'default' | 'info' | 'success' | 'warning' | 'destructive'", default: "'default'", description: 'Semantic colour variant' },
          { name: 'icon', type: 'ReactNode', default: '—', description: 'Icon auto-positioned top-left and coloured to match the variant' },
          { name: 'closable', type: 'boolean', default: 'false', description: 'Shows a dismiss (X) button in top-right corner' },
          { name: 'onClose', type: '() => void', default: '—', description: 'Callback when dismiss button is clicked' },
          { name: 'className', type: 'string', default: '—', description: 'Additional Tailwind/CSS classes' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'AlertTitle + AlertDescription' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── All Variants ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Variants"
        description="Five semantic variants. Each gets a tinted background, matching border, and icon colour."
        code={`<Alert icon={<Terminal />}>
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>Neutral informational message.</AlertDescription>
</Alert>

<Alert variant="info" icon={<Info />}>
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>Your session expires in 5 minutes.</AlertDescription>
</Alert>

<Alert variant="success" icon={<CheckCircle />}>
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Profile updated successfully.</AlertDescription>
</Alert>

<Alert variant="warning" icon={<Warning />}>...</Alert>
<Alert variant="destructive" icon={<WarningCircle />}>...</Alert>`}
      >
        <div className="space-y-3 w-full">
          <Alert icon={<Terminal style={{ width: 16, height: 16 }} />}>
            <AlertTitle>Default</AlertTitle>
            <AlertDescription>Neutral informational message with no severity.</AlertDescription>
          </Alert>
          <Alert variant="info" icon={<Info style={{ width: 16, height: 16 }} />}>
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>Your session will expire in 5 minutes.</AlertDescription>
          </Alert>
          <Alert variant="success" icon={<CheckCircle style={{ width: 16, height: 16 }} />}>
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Profile updated successfully.</AlertDescription>
          </Alert>
          <Alert variant="warning" icon={<Warning style={{ width: 16, height: 16 }} />}>
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Storage is 90% full. Consider cleaning up old files.</AlertDescription>
          </Alert>
          <Alert variant="destructive" icon={<WarningCircle style={{ width: 16, height: 16 }} />}>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Failed to save changes. Please try again.</AlertDescription>
          </Alert>
        </div>
      </PlaygroundSection>

      {/* ─── Without Icon ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Without Icon"
        description="Icons are optional. Without an SVG child, the left padding doesn't activate."
        code={`<Alert variant="info">
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
</Alert>`}
      >
        <div className="space-y-3 w-full">
          <Alert variant="info">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Deprecation notice</AlertTitle>
            <AlertDescription>This API endpoint will be removed in v3.0.</AlertDescription>
          </Alert>
        </div>
      </PlaygroundSection>

      {/* ─── Dismissible ────────────────────────────────────────── */}
      <PlaygroundSection
        title="Dismissible"
        description="Add closable to show a dismiss button. Use onClose to handle the dismiss action."
        code={`const [show, setShow] = useState(true);

{show && (
  <Alert variant="info" closable onClose={() => setShow(false)} icon={<Info />}>
    <AlertTitle>Tip</AlertTitle>
    <AlertDescription>Click the X to dismiss this alert.</AlertDescription>
  </Alert>
)}`}
      >
        <div className="space-y-3 w-full">
          {showDismissible ? (
            <Alert variant="info" closable onClose={() => setShowDismissible(false)} icon={<Info style={{ width: 16, height: 16 }} />}>
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>Click the X to dismiss this alert.</AlertDescription>
            </Alert>
          ) : (
            <Button variant="outline" size="sm" onClick={() => setShowDismissible(true)}>Show alert again</Button>
          )}
          <Alert variant="success" closable onClose={() => {}} icon={<CheckCircle style={{ width: 16, height: 16 }} />}>
            <AlertTitle>Deployment complete</AlertTitle>
            <AlertDescription>Your changes are now live.</AlertDescription>
          </Alert>
        </div>
      </PlaygroundSection>

      {/* ─── Description Only ───────────────────────────────────── */}
      <PlaygroundSection
        title="Description only (no title)"
        description="Title is optional — use just AlertDescription for compact messages."
        code={`<Alert variant="success" icon={<CheckCircle />}>
  <AlertDescription>Settings saved.</AlertDescription>
</Alert>`}
      >
        <div className="space-y-3 w-full">
          <Alert variant="success" icon={<CheckCircle style={{ width: 16, height: 16 }} />}>
            <AlertDescription>Settings saved.</AlertDescription>
          </Alert>
          <Alert variant="destructive" icon={<WarningCircle style={{ width: 16, height: 16 }} />}>
            <AlertDescription>Network connection lost.</AlertDescription>
          </Alert>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns in real applications.</p>
      </div>

      <PlaygroundSection
        title="Form validation errors"
        description="Show validation feedback after form submission."
        code={`<Alert variant="destructive" icon={<WarningCircle />}>
  <AlertTitle>Validation failed</AlertTitle>
  <AlertDescription>
    <ul className="list-disc pl-4 mt-1 space-y-0.5">
      <li>Email is required</li>
      <li>Password must be at least 8 characters</li>
    </ul>
  </AlertDescription>
</Alert>`}
      >
        <Alert variant="destructive" icon={<WarningCircle style={{ width: 16, height: 16 }} />}>
          <AlertTitle>Validation failed</AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-4 mt-1 space-y-0.5">
              <li>Email is required</li>
              <li>Password must be at least 8 characters</li>
              <li>Please agree to the terms of service</li>
            </ul>
          </AlertDescription>
        </Alert>
      </PlaygroundSection>

      <PlaygroundSection
        title="System maintenance banner"
        description="Warning at the top of a page about upcoming downtime."
        code={`<Alert variant="warning" closable onClose={() => {}} icon={<Warning />}>
  <AlertTitle>Scheduled maintenance</AlertTitle>
  <AlertDescription>
    The system will be unavailable on Sunday, 2am–4am UTC for database migration.
  </AlertDescription>
</Alert>`}
      >
        <Alert variant="warning" closable onClose={() => {}} icon={<Warning style={{ width: 16, height: 16 }} />}>
          <AlertTitle>Scheduled maintenance</AlertTitle>
          <AlertDescription>
            The system will be unavailable on Sunday, 2am–4am UTC for database migration.
          </AlertDescription>
        </Alert>
      </PlaygroundSection>

      <PlaygroundSection
        title="Feature announcement"
        description="Inform users about new features or changes."
        code={`<Alert variant="info" closable onClose={() => {}} icon={<Info />}>
  <AlertTitle>New: Dark mode support</AlertTitle>
  <AlertDescription>
    You can now switch between light and dark themes in Settings → Appearance.
  </AlertDescription>
</Alert>`}
      >
        <Alert variant="info" closable onClose={() => {}} icon={<Info style={{ width: 16, height: 16 }} />}>
          <AlertTitle>New: Dark mode support</AlertTitle>
          <AlertDescription>
            You can now switch between light and dark themes in Settings → Appearance.
          </AlertDescription>
        </Alert>
      </PlaygroundSection>

    </ComponentPage>
  );
}
