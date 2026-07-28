import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetClose } from 'invin-uix/ui/sheet';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, DrawerClose } from 'invin-uix/ui/drawer';
import { Button } from 'invin-uix/ui/button';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';
import { Separator } from 'invin-uix/ui/separator';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Settings, Filter, Share2, Menu } from 'invin-uix/ui/icons';

export default function SheetDemo() {
  return (
    <ComponentPage
      name="Drawer"
      description="Slide-in panels. Drawer slides from any side (left/right/top/bottom) for navigation, filters, and settings. Bottom drawer includes drag handle and snap points — ideal for mobile actions."
      importCode={`// Sheet (side panel)
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from 'invin-uix/ui/sheet';

// Drawer (bottom sheet with drag)
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from 'invin-uix/ui/drawer';`}
    >

      {/* ─── Sheet Props ────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">SheetContent</p>
        <PropsTable
          props={[
            { name: 'side', type: "'left' | 'right' | 'top' | 'bottom'", default: "'right'", description: 'Slide-in direction' },
            { name: 'hideClose', type: 'boolean', default: 'false', description: 'Hide the X close button' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">DrawerContent</p>
        <PropsTable
          props={[
            { name: 'showHandle', type: 'boolean', default: 'true', description: 'Show drag handle bar' },
            { name: 'defaultHeight', type: 'number (vh)', default: '50', description: 'Initial height' },
            { name: 'snapPoints', type: 'number[]', default: '[30, 50, 85]', description: 'Heights to snap to on drag release' },
            { name: 'minHeight', type: 'number (vh)', default: '20', description: 'Minimum drag height' },
            { name: 'maxHeight', type: 'number (vh)', default: '90', description: 'Maximum drag height' },
          ]}
        />
      </div>

      <Separator variant="bold" />

      {/* ─── Sheet: Right ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Sheet — right (default)"
        description="Slides in from the right. Good for settings, details, and forms."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Settings</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>Adjust preferences.</SheetDescription>
    </SheetHeader>
    {/* content */}
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline"><Settings style={{ width: 14, height: 14 }} /> Settings Panel</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>Adjust your preferences below.</SheetDescription>
            </SheetHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-1.5">
                <Label>Display name</Label>
                <Input defaultValue="Admin User" />
              </div>
              <div className="space-y-1.5">
                <Label>Email</Label>
                <Input defaultValue="admin@invin.io" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild><Button variant="outline">Cancel</Button></SheetClose>
              <Button>Save</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </PlaygroundSection>

      {/* ─── Sheet: Left ────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sheet — left"
        description="Slides from left. Common for mobile navigation and sidebars."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon"><Menu /></Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
    </SheetHeader>
    {/* nav items */}
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-sm"><Menu style={{ width: 16, height: 16 }} /></Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="space-y-1 mt-4">
              {['Dashboard', 'Projects', 'Team', 'Settings', 'Help'].map(item => (
                <div key={item} className="px-3 py-2 rounded-md hover:bg-[var(--invin-surface-hover)] cursor-pointer text-[length:var(--invin-text-body)]">
                  {item}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </PlaygroundSection>

      {/* ─── Sheet: Bottom ──────────────────────────────────────── */}
      <PlaygroundSection
        title="Sheet — bottom"
        description="Slides up from bottom. Fixed height (no drag). Good for quick actions."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Share</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Share</SheetTitle>
    </SheetHeader>
    {/* share options */}
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline"><Share2 style={{ width: 14, height: 14 }} /> Share</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Share this project</SheetTitle>
              <SheetDescription>Anyone with the link can view.</SheetDescription>
            </SheetHeader>
            <div className="flex gap-2 mt-3">
              <Input defaultValue="https://app.invin.io/project/abc123" readOnly className="flex-1" />
              <Button size="sm">Copy</Button>
            </div>
          </SheetContent>
        </Sheet>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Drawer ─────────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Drawer (bottom sheet with drag)</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Resizable bottom panel with drag handle and snap points. Drag the handle to resize, release to snap.</p>
      </div>

      <PlaygroundSection
        title="Basic Drawer"
        description="Draggable bottom sheet. Snaps to 30%, 50%, 85% height. Drag the handle bar to resize."
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Actions</DrawerTitle>
      <DrawerDescription>Choose an action below.</DrawerDescription>
    </DrawerHeader>
    {/* content */}
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Quick Actions</DrawerTitle>
              <DrawerDescription>Drag the handle to resize. Snaps to 30%, 50%, 85%.</DrawerDescription>
            </DrawerHeader>
            <div className="space-y-2">
              {['Create new project', 'Import data', 'Invite team member', 'Export report', 'View documentation'].map(action => (
                <div key={action} className="px-4 py-3 rounded-[8px] border border-[var(--invin-border)] hover:bg-[var(--invin-surface-hover)] cursor-pointer text-[length:var(--invin-text-body)]">
                  {action}
                </div>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </PlaygroundSection>

      <PlaygroundSection
        title="Drawer with custom snap points"
        description="Configure snap points and default height."
        code={`<DrawerContent defaultHeight={30} snapPoints={[30, 70]} maxHeight={70}>
  ...
</DrawerContent>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Compact Drawer</Button>
          </DrawerTrigger>
          <DrawerContent defaultHeight={30} snapPoints={[30, 70]} maxHeight={70}>
            <DrawerHeader>
              <DrawerTitle>Details</DrawerTitle>
              <DrawerDescription>Snaps between 30% and 70%.</DrawerDescription>
            </DrawerHeader>
            <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">
              Drag up to expand, down to collapse. This drawer has limited height range.
            </p>
          </DrawerContent>
        </Drawer>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">When to use which</h3>
      </div>

      <Card>
        <CardContent className="py-4">
          <div className="space-y-3 text-[length:var(--invin-text-body)]">
            <div className="flex gap-3">
              <span className="text-[var(--invin-accent)] font-[600] shrink-0 w-16">Sheet</span>
              <span className="text-[var(--invin-text-dim)]">Side panels for navigation, filters, settings forms, detail views. Fixed size, any direction.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--invin-accent)] font-[600] shrink-0 w-16">Drawer</span>
              <span className="text-[var(--invin-text-dim)]">Mobile-first bottom sheets for quick actions, share menus, detail panels. Resizable via drag, snap points.</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <PlaygroundSection
        title="Filter panel (Sheet)"
        description="Right-side filter panel for data tables."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" size="sm"><Filter /> Filters</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader><SheetTitle>Filters</SheetTitle></SheetHeader>
    {/* filter controls */}
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm"><Filter style={{ width: 14, height: 14 }} /> Filters</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Narrow down results.</SheetDescription>
            </SheetHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-1.5">
                <Label>Status</Label>
                <Input placeholder="All statuses" />
              </div>
              <div className="space-y-1.5">
                <Label>Date range</Label>
                <Input type="date" />
              </div>
              <div className="space-y-1.5">
                <Label>Assigned to</Label>
                <Input placeholder="Any member" />
              </div>
            </div>
            <SheetFooter>
              <Button variant="outline">Reset</Button>
              <Button>Apply Filters</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </PlaygroundSection>

    </ComponentPage>
  );
}
