import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Button } from 'invin-uix/ui/button';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem,
  DropdownMenuSeparator, DropdownMenuLabel,
  DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubTrigger,
  DropdownMenuSubContent, DropdownMenuRadioGroup,
} from 'invin-uix/ui/dropdown-menu';
import {
  User, Gear, SignOut, Envelope, Plus, CreditCard,
  Cloud, Users, Keyboard, Smiley, Copy, Scissors,
  Clipboard, PencilSimple, Trash, Archive, ShareNetwork
} from 'invin-uix/ui/icons';

export default function DropdownDemo() {
  const [bookmarks, setBookmarks] = useState(true);
  const [urls, setUrls] = useState(false);
  const [sorting, setSorting] = useState('date');

  return (
    <ComponentPage
      name="Dropdown Menu"
      description="Action menu with icons, keyboard shortcuts, sub-menus, checkbox/radio items, descriptions, and danger state. Built on Radix — full keyboard nav, type-ahead search, portal rendering."
      importCode={`import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel,
  // Optional: DropdownMenuCheckboxItem, DropdownMenuRadioItem,
  // DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent,
  // DropdownMenuGroup, DropdownMenuRadioGroup
} from 'invin-uix/ui/dropdown-menu';`}
    >
      <PropsTable
        props={[
          { name: 'danger', type: 'boolean', default: 'false', description: 'Red text for destructive actions (on DropdownMenuItem)' },
          { name: 'shortcut', type: 'string', default: '—', description: 'Keyboard shortcut hint, right-aligned (on DropdownMenuItem)' },
          { name: 'description', type: 'string', default: '—', description: 'Helper text below the item label (on DropdownMenuItem)' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction (on DropdownMenuItem)' },
          { name: 'align', type: "'start' | 'center' | 'end'", default: "'start'", description: 'Alignment relative to trigger (on DropdownMenuContent)' },
          { name: 'side', type: "'top' | 'bottom' | 'left' | 'right'", default: "'bottom'", description: 'Side to open on (on DropdownMenuContent)' },
          { name: 'sideOffset', type: 'number', default: '6', description: 'Gap from trigger in px (on DropdownMenuContent)' },
        ]}
      />

      <PlaygroundSection
        title="Basic"
        description="Simple dropdown with text items."
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Gear</DropdownMenuItem>
    <DropdownMenuItem>Help</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Gear</DropdownMenuItem>
            <DropdownMenuItem>Help</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </PlaygroundSection>

      <PlaygroundSection
        title="Icons, Shortcuts & Groups"
        description="Items with leading icons, keyboard shortcuts, and grouped sections."
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">My Account</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Account</DropdownMenuLabel>
    <DropdownMenuGroup>
      <DropdownMenuItem shortcut="⌘P"><User /> Profile</DropdownMenuItem>
      <DropdownMenuItem shortcut="⌘B"><CreditCard /> Billing</DropdownMenuItem>
      <DropdownMenuItem shortcut="⌘S"><Gear /> Gear</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem danger><SignOut /> Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">My Account</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent style={{ minWidth: '220px' }}>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem shortcut="⌘P"><User style={{ width: 14, height: 14 }} />Profile</DropdownMenuItem>
              <DropdownMenuItem shortcut="⌘B"><CreditCard style={{ width: 14, height: 14 }} />Billing</DropdownMenuItem>
              <DropdownMenuItem shortcut="⌘S"><Gear style={{ width: 14, height: 14 }} />Gear</DropdownMenuItem>
              <DropdownMenuItem shortcut="⌘K"><Keyboard style={{ width: 14, height: 14 }} />Shortcuts</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem><Users style={{ width: 14, height: 14 }} />Team</DropdownMenuItem>
              <DropdownMenuItem><Plus style={{ width: 14, height: 14 }} />New Team</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Cloud style={{ width: 14, height: 14 }} />API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem danger><SignOut style={{ width: 14, height: 14 }} />Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </PlaygroundSection>

      <PlaygroundSection
        title="With Description"
        description="Items with descriptive text below the label."
        code={`<DropdownMenuItem description="Create a copy of this item">
  <Copy /> Duplicate
</DropdownMenuItem>
<DropdownMenuItem danger description="This action cannot be undone">
  <Trash /> Delete
</DropdownMenuItem>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Actions</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent style={{ minWidth: '240px' }}>
            <DropdownMenuItem description="Create a copy of this item"><Copy style={{ width: 14, height: 14 }} />Duplicate</DropdownMenuItem>
            <DropdownMenuItem description="Share with team members"><ShareNetwork style={{ width: 14, height: 14 }} />Share</DropdownMenuItem>
            <DropdownMenuItem description="Move to archive folder"><Archive style={{ width: 14, height: 14 }} />Archive</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem danger description="This action cannot be undone"><Trash style={{ width: 14, height: 14 }} />Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sub-menu"
        description="Nested menus for hierarchical actions."
        code={`<DropdownMenuSub>
  <DropdownMenuSubTrigger><Plus /> Invite users</DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem><Envelope /> Email</DropdownMenuItem>
    <DropdownMenuItem><Smiley /> Slack</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem><PencilSimple style={{ width: 14, height: 14 }} />PencilSimple</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger><Plus style={{ width: 14, height: 14 }} />Invite users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem><Envelope style={{ width: 14, height: 14 }} />Email</DropdownMenuItem>
                <DropdownMenuItem><Smiley style={{ width: 14, height: 14 }} />Slack</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Plus style={{ width: 14, height: 14 }} />More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger><ShareNetwork style={{ width: 14, height: 14 }} />Share</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Copy link</DropdownMenuItem>
                <DropdownMenuItem>Twitter</DropdownMenuItem>
                <DropdownMenuItem>LinkedIn</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem danger><Trash style={{ width: 14, height: 14 }} />Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </PlaygroundSection>

      <PlaygroundSection
        title="Checkbox Items"
        description="Toggle boolean options within the dropdown."
        code={`<DropdownMenuCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
  Bookmarks Bar
</DropdownMenuCheckboxItem>
<DropdownMenuCheckboxItem checked={urls} onCheckedChange={setUrls}>
  Full URLs
</DropdownMenuCheckboxItem>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">View Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Show</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>Bookmarks Bar</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={urls} onCheckedChange={setUrls}>Full URLs</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Reload</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-caption text-muted-foreground">Bookmarks: {bookmarks ? 'on' : 'off'}, URLs: {urls ? 'on' : 'off'}</span>
      </PlaygroundSection>

      <PlaygroundSection
        title="Radio Items"
        description="Single-select radio group within a dropdown."
        code={`<DropdownMenuRadioGroup value={sorting} onValueChange={setSorting}>
  <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="size">Size</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Sort By</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Sort Order</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={sorting} onValueChange={setSorting}>
              <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="size">Size</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-caption text-muted-foreground">Current: {sorting}</span>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled Items"
        description="Individual items can be disabled."
        code={`<DropdownMenuItem shortcut="⌘X"><Scissors /> Cut</DropdownMenuItem>
<DropdownMenuItem shortcut="⌘C"><Copy /> Copy</DropdownMenuItem>
<DropdownMenuItem shortcut="⌘V" disabled><Clipboard /> Paste (disabled)</DropdownMenuItem>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">PencilSimple</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem shortcut="⌘X"><Scissors style={{ width: 14, height: 14 }} />Cut</DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘C"><Copy style={{ width: 14, height: 14 }} />Copy</DropdownMenuItem>
            <DropdownMenuItem shortcut="⌘V" disabled><Clipboard style={{ width: 14, height: 14 }} />Paste (disabled)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </PlaygroundSection>

      <PlaygroundSection
        title="Placement"
        description="Control which side the menu opens on."
        code={`<DropdownMenuContent side="bottom">...</DropdownMenuContent>
<DropdownMenuContent side="top">...</DropdownMenuContent>
<DropdownMenuContent side="right">...</DropdownMenuContent>
<DropdownMenuContent side="left">...</DropdownMenuContent>`}
      >
        <div className='flex flex-wrap gap-2'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="outline" size="md">Bottom</Button></DropdownMenuTrigger>
          <DropdownMenuContent side="bottom"><DropdownMenuItem>Item 1</DropdownMenuItem><DropdownMenuItem>Item 2</DropdownMenuItem></DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="outline" size="md">Top</Button></DropdownMenuTrigger>
          <DropdownMenuContent side="top"><DropdownMenuItem>Item 1</DropdownMenuItem><DropdownMenuItem>Item 2</DropdownMenuItem></DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="outline" size="md">Right</Button></DropdownMenuTrigger>
          <DropdownMenuContent side="right"><DropdownMenuItem>Item 1</DropdownMenuItem><DropdownMenuItem>Item 2</DropdownMenuItem></DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="outline" size="md">Left</Button></DropdownMenuTrigger>
          <DropdownMenuContent side="left"><DropdownMenuItem>Item 1</DropdownMenuItem><DropdownMenuItem>Item 2</DropdownMenuItem></DropdownMenuContent>
        </DropdownMenu>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
