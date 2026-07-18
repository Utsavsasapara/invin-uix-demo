import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from 'invin-uix/ui/sheet';
import { Button } from 'invin-uix/ui/button';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';

export default function SheetDemo() {
  return (
    <ComponentPage
      name="Sheet"
      description="A slide-out panel that overlays the page from any edge (left, right, top, bottom). Useful for navigation, settings, or detail views."
      importCode={`import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from 'invin-uix/ui/sheet';`}
    >
      <PlaygroundSection
        title="Right Sheet (default)"
        description="Opens from the right edge. Common for detail panels and settings."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Right</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>Update your profile information.</SheetDescription>
    </SheetHeader>
    {/* Content */}
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Right</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>Make changes to your profile here.</SheetDescription>
            </SheetHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-1">
                <Label htmlFor="sheet-name">Name</Label>
                <Input id="sheet-name" defaultValue="John Doe" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="sheet-email">Email</Label>
                <Input id="sheet-email" defaultValue="john@example.com" />
              </div>
            </div>
            <SheetFooter>
              <Button>Save</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </PlaygroundSection>

      <PlaygroundSection
        title="All Sides"
        description="Sheet can slide in from any edge using the side prop."
        code={`<SheetContent side="left">...</SheetContent>
<SheetContent side="right">...</SheetContent>
<SheetContent side="top">...</SheetContent>
<SheetContent side="bottom">...</SheetContent>`}
      >
        <div className="flex flex-wrap gap-3">
          {['left', 'right', 'top', 'bottom'].map(side => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" className="capitalize">{side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle className="capitalize">{side} Sheet</SheetTitle>
                  <SheetDescription>This sheet slides in from the {side}.</SheetDescription>
                </SheetHeader>
                <p className="py-4 text-sm text-muted-foreground">
                  Sheet content goes here. Use this for navigation menus, detail panels, or settings.
                </p>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Navigation Sidebar"
        description="Common use case: mobile navigation from the left."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon">☰</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader><SheetTitle>Navigation</SheetTitle></SheetHeader>
    <nav>...</nav>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">☰</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav className="space-y-2 py-4">
              {['Dashboard', 'Projects', 'Team', 'Settings', 'Help'].map(item => (
                <Button key={item} variant="ghost" block className="justify-start">{item}</Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </PlaygroundSection>
    </ComponentPage>
  );
}
