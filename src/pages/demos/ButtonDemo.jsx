import { useState } from 'react';
import { Button, ButtonGroup, SplitButton } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';
import { Toaster, toast } from 'invin-uix/ui/toast';
import { DropdownMenuItem } from 'invin-uix/ui/dropdown-menu';
import { Download, Settings, Trash2, Plus, Bell, Search, Mail, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'invin-uix/ui/icons';

export default function ButtonDemo() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const simulateLoad = (setter) => {
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <div className="space-y-6">
      <Toaster position="top-right" />
      <div><p className="text-sm text-muted-foreground">Interactive button with ripple, loading, shapes, groups, and split-button patterns.</p></div>

      <Card>
        <CardContent className="pt-6 space-y-8">

          {/* Variants */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Variants</Label>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="dashed">Dashed</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <Separator />

          {/* Sizes */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Sizes</Label>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="icon-sm" variant="outline"><Search style={{ width: 14, height: 14 }} /></Button>
              <Button size="icon"><Bell style={{ width: 16, height: 16 }} /></Button>
              <Button size="icon-lg" variant="outline"><Mail style={{ width: 20, height: 20 }} /></Button>
            </div>
          </div>

          <Separator />

          {/* Shape */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Shape</Label>
            <div className="flex flex-wrap items-center gap-3">
              <Button shape="default">Default</Button>
              <Button shape="round">Round / Pill</Button>
              <Button shape="circle" size="icon"><Plus style={{ width: 16, height: 16 }} /></Button>
              <Button shape="circle" size="icon" variant="outline"><Search style={{ width: 16, height: 16 }} /></Button>
              <Button shape="round" variant="outline"><Download style={{ width: 14, height: 14 }} /> Download</Button>
            </div>
          </div>

          <Separator />

          {/* Loading */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Loading State</Label>
            <div className="flex flex-wrap items-center gap-3">
              <Button loading>Loading...</Button>
              <Button loading variant="outline">Processing</Button>
              <Button loading variant="secondary">Saving</Button>
              <Button loading={loading1} onClick={() => simulateLoad(setLoading1)}>
                {loading1 ? 'Saving...' : 'Click to Save'}
              </Button>
              <Button loading={loading2} variant="outline" onClick={() => simulateLoad(setLoading2)}>
                {loading2 ? 'Loading...' : 'Fetch Data'}
              </Button>
            </div>
          </div>

          <Separator />

          {/* Block */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Block (Full Width)</Label>
            <div className="space-y-2 w-full">
              <Button block>Full Width Primary</Button>
              <Button block variant="outline">Full Width Outline</Button>
              <Button block variant="dashed"><Plus style={{ width: 14, height: 14 }} /> Add New Item</Button>
            </div>
          </div>

          <Separator />

          {/* With Icons */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">With Icons</Label>
            <div className="flex flex-wrap gap-3">
              <Button><Download style={{ width: 14, height: 14 }} /> Download</Button>
              <Button variant="outline"><Settings style={{ width: 14, height: 14 }} /> Settings</Button>
              <Button variant="destructive"><Trash2 style={{ width: 14, height: 14 }} /> Delete</Button>
              <Button variant="dashed"><Plus style={{ width: 14, height: 14 }} /> Add Item</Button>
            </div>
          </div>

          <Separator />

          {/* Disabled */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Disabled</Label>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Primary</Button>
              <Button disabled variant="outline">Outline</Button>
              <Button disabled variant="dashed">Dashed</Button>
              <Button disabled variant="ghost">Ghost</Button>
            </div>
          </div>

          <Separator />

          {/* Ripple */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Ripple (on by default)</Label>
            <div className="flex flex-wrap gap-3">
              <Button>With Ripple</Button>
              <Button ripple={false}>No Ripple</Button>
              <Button variant="outline">Outline Ripple</Button>
            </div>
          </div>

          <Separator />

          {/* ButtonGroup */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Button Group</Label>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Spaced</p>
                <ButtonGroup>
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button size="sm">Submit</Button>
                </ButtonGroup>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Attached (toolbar style)</p>
                <ButtonGroup attached>
                  <Button variant="outline" size="sm"><Bold style={{ width: 14, height: 14 }} /></Button>
                  <Button variant="outline" size="sm"><Italic style={{ width: 14, height: 14 }} /></Button>
                  <Button variant="outline" size="sm"><Underline style={{ width: 14, height: 14 }} /></Button>
                </ButtonGroup>
                <span style={{ display: 'inline-block', width: '12px' }} />
                <ButtonGroup attached>
                  <Button variant="outline" size="sm"><AlignLeft style={{ width: 14, height: 14 }} /></Button>
                  <Button variant="outline" size="sm"><AlignCenter style={{ width: 14, height: 14 }} /></Button>
                  <Button variant="outline" size="sm"><AlignRight style={{ width: 14, height: 14 }} /></Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

          <Separator />

          {/* SplitButton */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Split Button (primary + dropdown)</Label>
            <div className="flex flex-wrap gap-4">
              <SplitButton
                onClick={() => toast({ title: 'Saved!', variant: 'success' })}
                menu={
                  <>
                    <DropdownMenuItem onClick={() => toast({ title: 'Saved as draft' })}>Save as Draft</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast({ title: 'Published!' })}>Save & Publish</DropdownMenuItem>
                  </>
                }
              >
                Save
              </SplitButton>

              <SplitButton
                variant="outline"
                onClick={() => toast({ title: 'Downloaded CSV' })}
                menu={
                  <>
                    <DropdownMenuItem onClick={() => toast({ title: 'CSV exported' })}>Export CSV</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast({ title: 'PDF exported' })}>Export PDF</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast({ title: 'JSON exported' })}>Export JSON</DropdownMenuItem>
                  </>
                }
              >
                <Download style={{ width: 14, height: 14 }} /> Export
              </SplitButton>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
