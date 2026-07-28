import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from 'invin-uix/ui/dialog';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from 'invin-uix/ui/alert-dialog';
import { Button } from 'invin-uix/ui/button';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';
import { Separator } from 'invin-uix/ui/separator';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Trash2, AlertTriangle } from 'invin-uix/ui/icons';

export default function DialogDemo() {
  return (
    <ComponentPage
      name="Dialog"
      description="Modal overlay for content, forms, and confirmations. Two variants: Dialog (dismissible, general purpose) and AlertDialog (forced-choice, no escape). Both use z-[100], pop-bg, and entrance animation."
      importCode={`// General dialog (dismissible)
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from 'invin-uix/ui/dialog';

// Alert dialog (forced-choice, no overlay dismiss)
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from 'invin-uix/ui/alert-dialog';`}
    >

      <div className="space-y-4">
        <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">Dialog</p>
        <PropsTable
          props={[
            { name: 'open', type: 'boolean', default: '—', description: 'Controlled open state' },
            { name: 'onOpenChange', type: '(open: boolean) => void', default: '—', description: 'Open/close callback' },
            { name: 'hideClose', type: 'boolean', default: 'false', description: 'Hide the X close button (on DialogContent)' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">AlertDialog</p>
        <PropsTable
          props={[
            { name: 'open', type: 'boolean', default: '—', description: 'Controlled open state' },
            { name: 'onOpenChange', type: '(open: boolean) => void', default: '—', description: 'Open/close callback' },
          ]}
        />
        <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)]">
          AlertDialog cannot be dismissed by clicking overlay or pressing Escape — user must choose Cancel or Action.
        </p>
      </div>

      <Separator variant="bold" />

      {/* ─── Basic Dialog ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic Dialog"
        description="General purpose modal. Dismissible via X button, overlay click, or Escape key."
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>Make changes to your profile.</DialogDescription>
    </DialogHeader>
    {/* content */}
    <DialogFooter>
      <Button>Save</Button>
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
              <DialogDescription>Make changes to your profile here. Click save when done.</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 my-2">
              <div className="space-y-1.5">
                <Label htmlFor="dlg-name">Name</Label>
                <Input id="dlg-name" defaultValue="Admin User" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="dlg-email">Email</Label>
                <Input id="dlg-email" defaultValue="admin@invin.io" />
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

      {/* ─── Alert Dialog ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Alert Dialog (confirmation)"
        description="Forced-choice modal. Cannot dismiss by clicking overlay or Escape. User must choose Cancel or Confirm."
        code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive"><Trash2 style={{ width: 14, height: 14 }} /> Delete Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove all data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-[var(--invin-error)] border-transparent hover:brightness-110">Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </PlaygroundSection>

      {/* ─── Dialog without close button ────────────────────────── */}
      <PlaygroundSection
        title="Dialog without X button"
        description="Use hideClose to remove the close button — useful for mandatory forms."
        code={`<DialogContent hideClose>
  ...
</DialogContent>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">No Close Button</Button>
          </DialogTrigger>
          <DialogContent hideClose>
            <DialogHeader>
              <DialogTitle>Complete Setup</DialogTitle>
              <DialogDescription>Please fill in the required information to continue.</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 my-2">
              <div className="space-y-1.5">
                <Label htmlFor="dlg-org">Organization</Label>
                <Input id="dlg-org" placeholder="Your company name" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button>Continue</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">When to use Dialog vs AlertDialog.</p>
      </div>

      <PlaygroundSection
        title="Form dialog"
        description="Dialog for creating or editing records. User can dismiss without saving."
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button>New Project</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create Project</DialogTitle>
    </DialogHeader>
    <Input placeholder="Project name" />
    <DialogFooter>
      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
      <Button>Create</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button>New Project</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Project</DialogTitle>
              <DialogDescription>Start a new project in your workspace.</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 my-2">
              <div className="space-y-1.5">
                <Label htmlFor="dlg-proj">Project name</Label>
                <Input id="dlg-proj" placeholder="My awesome project" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="dlg-desc">Description</Label>
                <Input id="dlg-desc" placeholder="Brief description..." />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
              <Button>Create Project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PlaygroundSection>

      <PlaygroundSection
        title="Destructive confirmation"
        description="AlertDialog for dangerous actions. Forces user to make a deliberate choice."
        code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive" size="sm">Remove Member</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Remove team member?</AlertDialogTitle>
      <AlertDialogDescription>
        They will lose access to all projects.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Keep Member</AlertDialogCancel>
      <AlertDialogAction>Remove</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm"><Trash2 style={{ width: 14, height: 14 }} /> Remove Member</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Remove team member?</AlertDialogTitle>
              <AlertDialogDescription>
                This person will immediately lose access to all shared projects, documents, and resources. This cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep Member</AlertDialogCancel>
              <AlertDialogAction className="bg-[var(--invin-error)] border-transparent">Remove</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </PlaygroundSection>

      <PlaygroundSection
        title="Warning confirmation"
        description="Non-destructive but important confirmation."
        code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Deploy to Production</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Deploy to production?</AlertDialogTitle>
      <AlertDialogDescription>This will push changes to all users.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Deploy</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline"><AlertTriangle style={{ width: 14, height: 14 }} /> Deploy to Production</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Deploy to production?</AlertDialogTitle>
              <AlertDialogDescription>
                This will immediately push all staged changes to production. All active users will see the new version.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Deploy Now</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </PlaygroundSection>

    </ComponentPage>
  );
}
