import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';

export default function SeparatorDemo() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">A divider line to separate content. Supports text, dashed style, and orientation.</p></div>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Basic</Label>
            <p className="text-sm">Content above the separator.</p>
            <Separator />
            <p className="text-sm">Content below the separator.</p>
          </div>

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Dashed</Label>
            <Separator dashed />
          </div>

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">With Text (center)</Label>
            <Separator>Section Title</Separator>
          </div>

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">With Text (left)</Label>
            <Separator titlePlacement="left">Left Title</Separator>
          </div>

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">With Text (right)</Label>
            <Separator titlePlacement="right">Right Title</Separator>
          </div>

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Dashed + Text</Label>
            <Separator dashed titlePlacement="left">Dashed Left</Separator>
          </div>

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Plain Text (lighter)</Label>
            <Separator plain>Plain Text</Separator>
          </div>

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Vertical</Label>
            <div className="flex items-center">
              <span className="text-sm">Link 1</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Link 2</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Link 3</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
