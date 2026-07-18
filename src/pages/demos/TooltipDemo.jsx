import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';
import { Tooltip } from 'invin-uix/ui/tooltip';
import { Search, Bell } from 'invin-uix/ui/icons';

export default function TooltipDemo() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">Hover to reveal contextual info. Auto-shifts on edges, 12 placements, custom trigger/color.</p></div>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Basic</Label>
            <div className="flex flex-wrap gap-3">
              <Tooltip title="This is a tooltip"><Button variant="outline">Hover me</Button></Tooltip>
              <Tooltip title="Search your workspace"><Button size="icon" variant="outline"><Search className="h-4 w-4" /></Button></Tooltip>
              <Tooltip title="3 unread notifications"><Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button></Tooltip>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Placements (12)</Label>
            <div className="grid grid-cols-3 gap-3 w-full mx-auto py-4">
              <Tooltip title="topLeft" placement="topLeft"><Button variant="dashed" size="sm" className="w-full">TL</Button></Tooltip>
              <Tooltip title="top" placement="top"><Button variant="dashed" size="sm" className="w-full">Top</Button></Tooltip>
              <Tooltip title="topRight" placement="topRight"><Button variant="dashed" size="sm" className="w-full">TR</Button></Tooltip>
              <Tooltip title="left" placement="left"><Button variant="dashed" size="sm" className="w-full">Left</Button></Tooltip>
              <div />
              <Tooltip title="right" placement="right"><Button variant="dashed" size="sm" className="w-full">Right</Button></Tooltip>
              <Tooltip title="bottomLeft" placement="bottomLeft"><Button variant="dashed" size="sm" className="w-full">BL</Button></Tooltip>
              <Tooltip title="bottom" placement="bottom"><Button variant="dashed" size="sm" className="w-full">Bottom</Button></Tooltip>
              <Tooltip title="bottomRight" placement="bottomRight"><Button variant="dashed" size="sm" className="w-full">BR</Button></Tooltip>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Custom Colors</Label>
            <div className="flex flex-wrap gap-3">
              <Tooltip title="Primary" color="var(--invin-color-primary, #3b82f6)"><Button variant="outline">Blue</Button></Tooltip>
              <Tooltip title="Success" color="var(--invin-color-success, #16a34a)"><Button variant="outline">Green</Button></Tooltip>
              <Tooltip title="Danger" color="var(--invin-color-danger, #dc2626)"><Button variant="outline">Red</Button></Tooltip>
              <Tooltip title="Custom" color="#8b5cf6"><Button variant="outline">Purple</Button></Tooltip>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Trigger Modes</Label>
            <div className="flex flex-wrap gap-3">
              <Tooltip title="Hover triggered" trigger="hover"><Button variant="outline">Hover</Button></Tooltip>
              <Tooltip title="Click triggered!" trigger="click"><Button variant="outline">Click me</Button></Tooltip>
              <Tooltip title="Focus triggered" trigger="focus"><Button variant="outline">Focus (Tab)</Button></Tooltip>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">No Arrow / Auto-Shift</Label>
            <div className="flex justify-between">
              <Tooltip title="No arrow" arrow={false}><Button variant="ghost">No arrow</Button></Tooltip>
              <Tooltip title="I auto-shift from the right edge to stay visible"><Button variant="outline" size="sm">Right Edge</Button></Tooltip>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Long Content</Label>
            <Tooltip title="This is a longer tooltip message that demonstrates how the text wraps within the max-width container. It stays readable and positioned correctly even with lots of text.">
              <Button variant="outline">Long text tooltip</Button>
            </Tooltip>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
