import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Toaster, toast } from 'invin-uix/ui/toast';
import { Button } from 'invin-uix/ui/button';

export default function ToastDemo() {
  return (
    <ComponentPage
      name="Toast"
      description="Non-intrusive notification messages that appear temporarily. Supports variants, positioning, duration, and action buttons."
      importCode={`import { Toaster, toast } from 'invin-uix/ui/toast';
// Place <Toaster /> once in your app root`}
    >
      <Toaster position="top-right" />

      <PlaygroundSection
        title="Variants"
        description="Five semantic variants for different message types."
        code={`toast({ title: 'Default notification' });
toast({ title: 'Success!', variant: 'success' });
toast({ title: 'Warning', variant: 'warning' });
toast({ title: 'Error occurred', variant: 'destructive' });
toast({ title: 'Info message', variant: 'info' });`}
      >
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => toast({ title: 'Default notification', description: 'This is a default toast.' })}>Default</Button>
          <Button variant="outline" size="sm" onClick={() => toast({ title: 'Success!', description: 'Action completed.', variant: 'success' })}>Success</Button>
          <Button variant="outline" size="sm" onClick={() => toast({ title: 'Warning', description: 'Check this out.', variant: 'warning' })}>Warning</Button>
          <Button variant="outline" size="sm" onClick={() => toast({ title: 'Error', description: 'Something went wrong.', variant: 'destructive' })}>Destructive</Button>
          <Button variant="outline" size="sm" onClick={() => toast({ title: 'Info', description: 'Here is some info.', variant: 'info' })}>Info</Button>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="With Description"
        description="Add a description for more context."
        code={`toast({
  title: 'Scheduled',
  description: 'Meeting set for Friday at 3pm.',
});`}
      >
        <Button variant="outline" onClick={() => toast({ title: 'Scheduled', description: 'Your meeting has been set for Friday at 3:00 PM.' })}>
          Show with Description
        </Button>
      </PlaygroundSection>

      <PlaygroundSection
        title="Custom Duration"
        description="Control how long the toast stays visible (default 4000ms)."
        code={`toast({ title: 'Quick', duration: 1500 });
toast({ title: 'Long', duration: 8000 });`}
      >
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => toast({ title: 'Quick toast', description: 'Gone in 1.5s', duration: 1500 })}>1.5s</Button>
          <Button variant="outline" size="sm" onClick={() => toast({ title: 'Standard toast', description: 'Default 4s duration' })}>4s (default)</Button>
          <Button variant="outline" size="sm" onClick={() => toast({ title: 'Long toast', description: 'Stays for 8s', duration: 8000 })}>8s</Button>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
