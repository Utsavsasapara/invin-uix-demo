import { useState } from 'react';
import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from 'invin-uix/ui/dialog';
import { Button } from 'invin-uix/ui/button';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';

export default function DialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <ComponentPage
      name="Dialog"
      description="A modal dialog overlay built on Radix UI. Traps focus, supports keyboard navigation (Escape to close), and dims the background."
      importCode={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from 'invin-uix/ui/dialog';`}
    >
      <PlaygroundSection
        title="Basic Dialog"
        description="Click the trigger button to open a modal dialog."
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <div className="space-y-3">
      <Label htmlFor="name">Name</Label>
      <Input id="name" defaultValue="John Doe" />
    </div>
    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 py-2">
              <div className="space-y-1">
                <Label htmlFor="dialog-name">Name</Label>
                <Input id="dialog-name" defaultValue="John Doe" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="dialog-email">Email</Label>
                <Input id="dialog-email" defaultValue="john@example.com" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PlaygroundSection>

      <PlaygroundSection
        title="Controlled Dialog"
        description="Control open state programmatically with open and onOpenChange."
        code={`const [open, setOpen] = useState(false);
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>...</DialogContent>
</Dialog>`}
      >
        <div className="flex items-center gap-3">
          <Button onClick={() => setOpen(true)}>Open Controlled</Button>
          <span className="text-xs text-muted-foreground">State: {open ? 'open' : 'closed'}</span>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>This dialog is controlled via state. Close it by clicking X, pressing Escape, or clicking outside.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PlaygroundSection>

      <PlaygroundSection
        title="Scrollable Content"
        description="Dialog with long content — body scrolls while header/footer stay fixed."
        code={`<DialogContent>
  <DialogHeader>...</DialogHeader>
  <div className="max-h-[60vh] overflow-y-auto">
    {/* Long content */}
  </div>
  <DialogFooter>...</DialogFooter>
</DialogContent>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Long Content</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Terms of Service</DialogTitle>
              <DialogDescription>Please read and accept the following terms.</DialogDescription>
            </DialogHeader>
            <div className="max-h-[40vh] overflow-y-auto text-sm text-muted-foreground space-y-3 py-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="outline">Decline</Button></DialogClose>
              <Button>Accept</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PlaygroundSection>
    </ComponentPage>
  );
}
