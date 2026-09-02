import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent,
  AlertDialogHeader, AlertDialogFooter, AlertDialogTitle,
  AlertDialogDescription, AlertDialogAction, AlertDialogCancel,
} from 'invin-uix/ui/alert-dialog';
import { Button } from 'invin-uix/ui/button';
import { Separator } from 'invin-uix/ui/separator';
import { Trash, Warning, SignOut } from 'invin-uix/ui/icons';

export default function AlertDialogDemo() {
  return (
    <ComponentPage
      name="Alert Dialog"
      description="A modal confirmation dialog that requires explicit user action. Use for destructive operations (delete, discard) or important confirmations that interrupt workflow."
      importCode={`import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent,
  AlertDialogHeader, AlertDialogFooter, AlertDialogTitle,
  AlertDialogDescription, AlertDialogAction, AlertDialogCancel,
} from 'invin-uix/ui/alert-dialog';`}
    >

      <PropsTable
        props={[
          { name: 'open', type: 'boolean', default: '—', description: 'Controlled open state' },
          { name: 'onOpenChange', type: '(open: boolean) => void', default: '—', description: 'Callback on open/close' },
          { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Uncontrolled default state' },
        ]}
      />

      <Separator />

      {/* ─── Basic delete confirmation ────────────────────────── */}
      <PlaygroundSection
        title="Delete confirmation"
        description="Classic destructive action confirmation — user must explicitly confirm or cancel."
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive"><Trash style={{ width: 14, height: 14 }} /> Delete Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Yes, delete account</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </PlaygroundSection>

      {/* ─── Discard changes ──────────────────────────────────── */}
      <PlaygroundSection
        title="Discard changes"
        description="Warn users before discarding unsaved work."
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Discard Draft</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Discard unsaved changes?</AlertDialogTitle>
              <AlertDialogDescription>
                You have unsaved changes in this document. If you discard now, all changes since your last save will be lost.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep editing</AlertDialogCancel>
              <AlertDialogAction>Discard</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </PlaygroundSection>

      {/* ─── Logout confirmation ──────────────────────────────── */}
      <PlaygroundSection
        title="Logout confirmation"
        description="Confirm session-ending actions."
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost"><SignOut style={{ width: 14, height: 14 }} /> Sign out</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Sign out?</AlertDialogTitle>
              <AlertDialogDescription>
                You will be signed out of all devices. Any unsaved progress will be lost.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Stay signed in</AlertDialogCancel>
              <AlertDialogAction>Sign out</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </PlaygroundSection>

      {/* ─── With icon ────────────────────────────────────────── */}
      <PlaygroundSection
        title="With warning icon"
        description="Add visual weight with an icon in the header."
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline"><Warning style={{ width: 14, height: 14 }} /> Reset System</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[var(--error-wash)] flex items-center justify-center shrink-0">
                  <Warning style={{ width: 20, height: 20, color: 'var(--error)' }} />
                </div>
                <div>
                  <AlertDialogTitle>Reset all settings?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will restore factory defaults. All customizations, integrations, and user preferences will be erased.
                  </AlertDialogDescription>
                </div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Reset everything</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </PlaygroundSection>

    </ComponentPage>
  );
}
