import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable, InteractiveDemo } from '../../components/PlaygroundSection.jsx';
import {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator, CommandShortcut, CommandDialog,
} from 'invin-uix/ui/command';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Toaster, toast } from 'invin-uix/ui/toast';
import {
  SquaresFour, Users, Gear, FileText, MagnifyingGlass, Shield,
  Envelope, Calendar, CreditCard, Plus, Moon, SignOut,
} from 'invin-uix/ui/icons';

export default function CommandDemo() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <ComponentPage
      name="Command Palette"
      description="Searchable command menu with keyboard navigation. Use as an inline command list or as a ⌘K dialog overlay for quick navigation, actions, and search."
      importCode={`import {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandSeparator, CommandShortcut,
  CommandDialog,
} from 'invin-uix/ui/command';`}
    >
      <Toaster position="top-right" />

      {/* ─── Interactive Playground ─────────────────────────────── */}
      <InteractiveDemo
        title="Command Playground"
        description="Experiment with Command list."
        controls={[]}
      >
        {() => (
          <Card className="max-w-sm">
            <CardContent className="p-0">
              <Command onValueChange={(v) => toast({ title: `Selected: ${v}` })}>
                <CommandInput placeholder="Search commands..." />
                <CommandList>
                  <CommandEmpty>No results.</CommandEmpty>
                  <CommandGroup heading="Navigation">
                    <CommandItem value="dashboard"><SquaresFour style={{ width: 14, height: 14 }} /> Dashboard</CommandItem>
                    <CommandItem value="users"><Users style={{ width: 14, height: 14 }} /> Users</CommandItem>
                    <CommandItem value="settings"><Gear style={{ width: 14, height: 14 }} /> Settings</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CardContent>
          </Card>
        )}
      </InteractiveDemo>
      <Separator variant="bold" />

      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">Command</p>
        <PropsTable
          props={[
            { name: 'filter', type: '(value, search) => boolean', default: 'includes', description: 'Custom filter function' },
            { name: 'onValueChange', type: '(value) => void', default: '—', description: 'Callback when item is selected' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">CommandDialog</p>
        <PropsTable
          props={[
            { name: 'open', type: 'boolean', default: '—', description: 'Controlled open state' },
            { name: 'onOpenChange', type: '(open) => void', default: '—', description: 'Open/close callback' },
            { name: 'shortcut', type: 'string', default: '—', description: 'Shortcut label in footer' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">CommandItem</p>
        <PropsTable
          props={[
            { name: 'value', type: 'string', default: '—', description: 'Item value (used for filtering)' },
            { name: 'keywords', type: 'string[]', default: '[]', description: 'Extra search keywords' },
            { name: 'onSelect', type: '(value) => void', default: '—', description: 'Selection callback' },
            { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable item' },
          ]}
        />
      </div>

      <Separator />

      {/* ─── Dialog trigger (⌘K) ──────────────────────────────── */}
      <PlaygroundSection
        title="Command Dialog (⌘K)"
        description="Press ⌘K (or Ctrl+K) anywhere on this page, or click the button below."
      >
        <Button variant="outline" onClick={() => setDialogOpen(true)}>
          <MagnifyingGlass style={{ width: 14, height: 14 }} />
          MagnifyingGlass commands...
          <CommandShortcut>⌘K</CommandShortcut>
        </Button>

        <CommandDialog open={dialogOpen} onOpenChange={setDialogOpen} shortcut="⌘K">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem value="dashboard" onSelect={() => { toast({ title: 'Go to Dashboard' }); setDialogOpen(false); }}>
                <SquaresFour style={{ width: 14, height: 14 }} /> Dashboard
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem value="users" onSelect={() => { toast({ title: 'Go to Users' }); setDialogOpen(false); }}>
                <Users style={{ width: 14, height: 14 }} /> Users
                <CommandShortcut>⌘U</CommandShortcut>
              </CommandItem>
              <CommandItem value="settings" onSelect={() => { toast({ title: 'Go to Gear' }); setDialogOpen(false); }}>
                <Gear style={{ width: 14, height: 14 }} /> Gear
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem value="new-document" onSelect={() => { toast({ title: 'New document created' }); setDialogOpen(false); }}>
                <Plus style={{ width: 14, height: 14 }} /> New Document
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem value="send-email" onSelect={() => { toast({ title: 'Email composer opened' }); setDialogOpen(false); }}>
                <Envelope style={{ width: 14, height: 14 }} /> Send Email
              </CommandItem>
              <CommandItem value="toggle-theme" onSelect={() => { toast({ title: 'Theme toggled' }); setDialogOpen(false); }}>
                <Moon style={{ width: 14, height: 14 }} /> Toggle Dark Mode
                <CommandShortcut>⌘⇧D</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Account">
              <CommandItem value="billing" onSelect={() => { toast({ title: 'Billing page' }); setDialogOpen(false); }}>
                <CreditCard style={{ width: 14, height: 14 }} /> Billing
              </CommandItem>
              <CommandItem value="logout" onSelect={() => { toast({ title: 'Logged out' }); setDialogOpen(false); }}>
                <SignOut style={{ width: 14, height: 14 }} /> Sign Out
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </PlaygroundSection>

      {/* ─── Inline command list ──────────────────────────────── */}
      <PlaygroundSection
        title="Inline command list"
        description="Command can also be used inline (not in a dialog) — great for sidebar search or embedded pickers."
      >
        <Card className="max-w-sm">
          <CardContent className="p-0">
            <Command onValueChange={(v) => toast({ title: `Selected: ${v}` })}>
              <CommandInput placeholder="MagnifyingGlass pages..." />
              <CommandList>
                <CommandEmpty>Nothing found.</CommandEmpty>
                <CommandGroup heading="Pages">
                  <CommandItem value="dashboard">
                    <SquaresFour style={{ width: 14, height: 14 }} /> Dashboard
                  </CommandItem>
                  <CommandItem value="incidents">
                    <Shield style={{ width: 14, height: 14 }} /> Incidents
                  </CommandItem>
                  <CommandItem value="reports">
                    <FileText style={{ width: 14, height: 14 }} /> Reports
                  </CommandItem>
                  <CommandItem value="calendar">
                    <Calendar style={{ width: 14, height: 14 }} /> Calendar
                  </CommandItem>
                  <CommandItem value="team">
                    <Users style={{ width: 14, height: 14 }} /> Team
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CardContent>
        </Card>
      </PlaygroundSection>

      {/* ─── With keywords ────────────────────────────────────── */}
      <PlaygroundSection
        title="MagnifyingGlass with keywords"
        description="Items have hidden keywords — try searching 'security' or 'money'."
      >
        <Card className="max-w-sm">
          <CardContent className="p-0">
            <Command>
              <CommandInput placeholder="Try 'security' or 'money'..." />
              <CommandList>
                <CommandEmpty>No matches.</CommandEmpty>
                <CommandItem value="shield" keywords={['security', 'protection', 'firewall']}>
                  <Shield style={{ width: 14, height: 14 }} /> Shield Protection
                </CommandItem>
                <CommandItem value="billing" keywords={['money', 'payment', 'invoice', 'subscription']}>
                  <CreditCard style={{ width: 14, height: 14 }} /> Billing & Payments
                </CommandItem>
                <CommandItem value="users" keywords={['team', 'people', 'members', 'staff']}>
                  <Users style={{ width: 14, height: 14 }} /> User Management
                </CommandItem>
              </CommandList>
            </Command>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
