import { useState } from 'react';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem,
  DropdownMenuSeparator, DropdownMenuLabel,
  DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubTrigger,
  DropdownMenuSubContent, DropdownMenuRadioGroup,
} from 'invin-uix/ui/dropdown-menu';
import {
  User, Settings, LogOut, Mail, Plus, CreditCard,
  Cloud, Users, Keyboard, Smile, Copy, Scissors,
  Clipboard, Edit, Trash2, Archive, Share2
} from 'invin-uix/ui/icons';

export default function DropdownDemo() {
  const [bookmarks, setBookmarks] = useState(true);
  const [urls, setUrls] = useState(false);
  const [sorting, setSorting] = useState('date');

  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">A menu of actions. Supports icons, shortcuts, sub-menus, checkbox items, radio items, descriptions, and danger state.</p></div>

      <Card>
        <CardContent className="pt-6 space-y-8">

          {/* Basic */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Basic</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Separator />

          {/* With Icons, Shortcuts & Groups */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Icons, Shortcuts & Groups</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">My Account</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent style={{ minWidth: '220px' }}>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem shortcut="⌘P"><User style={{ width: 14, height: 14 }} />Profile</DropdownMenuItem>
                  <DropdownMenuItem shortcut="⌘B"><CreditCard style={{ width: 14, height: 14 }} />Billing</DropdownMenuItem>
                  <DropdownMenuItem shortcut="⌘S"><Settings style={{ width: 14, height: 14 }} />Settings</DropdownMenuItem>
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
                <DropdownMenuItem danger><LogOut style={{ width: 14, height: 14 }} />Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Separator />

          {/* Item with description */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">With Description</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Actions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent style={{ minWidth: '240px' }}>
                <DropdownMenuItem description="Create a copy of this item"><Copy style={{ width: 14, height: 14 }} />Duplicate</DropdownMenuItem>
                <DropdownMenuItem description="Share with team members"><Share2 style={{ width: 14, height: 14 }} />Share</DropdownMenuItem>
                <DropdownMenuItem description="Move to archive folder"><Archive style={{ width: 14, height: 14 }} />Archive</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem danger description="This action cannot be undone"><Trash2 style={{ width: 14, height: 14 }} />Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Separator />

          {/* Sub-menu */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Sub-menu</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Edit style={{ width: 14, height: 14 }} />Edit</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger><Plus style={{ width: 14, height: 14 }} />Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem><Mail style={{ width: 14, height: 14 }} />Email</DropdownMenuItem>
                    <DropdownMenuItem><Smile style={{ width: 14, height: 14 }} />Slack</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Plus style={{ width: 14, height: 14 }} />More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger><Share2 style={{ width: 14, height: 14 }} />Share</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Copy link</DropdownMenuItem>
                    <DropdownMenuItem>Twitter</DropdownMenuItem>
                    <DropdownMenuItem>LinkedIn</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem danger><Trash2 style={{ width: 14, height: 14 }} />Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Separator />

          {/* Checkbox Items (Atlassian-style) */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Checkbox Items</Label>
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
            <span className="ml-3 text-xs text-muted-foreground">Bookmarks: {bookmarks ? 'on' : 'off'}, URLs: {urls ? 'on' : 'off'}</span>
          </div>

          <Separator />

          {/* Radio Items (Atlassian-style) */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Radio Items</Label>
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
            <span className="ml-3 text-xs text-muted-foreground">Current: {sorting}</span>
          </div>

          <Separator />

          {/* Disabled */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Disabled Items</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Edit</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem shortcut="⌘X"><Scissors style={{ width: 14, height: 14 }} />Cut</DropdownMenuItem>
                <DropdownMenuItem shortcut="⌘C"><Copy style={{ width: 14, height: 14 }} />Copy</DropdownMenuItem>
                <DropdownMenuItem shortcut="⌘V" disabled><Clipboard style={{ width: 14, height: 14 }} />Paste (disabled)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Separator />

          {/* Placement */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Placement</Label>
            <div className="flex gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="dashed" size="sm">Bottom</Button></DropdownMenuTrigger>
                <DropdownMenuContent side="bottom"><DropdownMenuItem>Item 1</DropdownMenuItem><DropdownMenuItem>Item 2</DropdownMenuItem></DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="dashed" size="sm">Top</Button></DropdownMenuTrigger>
                <DropdownMenuContent side="top"><DropdownMenuItem>Item 1</DropdownMenuItem><DropdownMenuItem>Item 2</DropdownMenuItem></DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="dashed" size="sm">Right</Button></DropdownMenuTrigger>
                <DropdownMenuContent side="right"><DropdownMenuItem>Item 1</DropdownMenuItem><DropdownMenuItem>Item 2</DropdownMenuItem></DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="dashed" size="sm">Left</Button></DropdownMenuTrigger>
                <DropdownMenuContent side="left"><DropdownMenuItem>Item 1</DropdownMenuItem><DropdownMenuItem>Item 2</DropdownMenuItem></DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
