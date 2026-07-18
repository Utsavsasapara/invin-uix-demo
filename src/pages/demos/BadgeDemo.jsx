import { Badge } from 'invin-uix/ui/badge';
import { Button } from 'invin-uix/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';
import { Bell, Mail, Star, Check, Zap } from 'invin-uix/ui/icons';

export default function BadgeDemo() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">Labels, notification counts, dots, and status indicators.</p></div>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Label Variants</Label>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Count (notification bubble)</Label>
            <div className="flex flex-wrap items-center gap-6">
              <Badge count={5}><Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button></Badge>
              <Badge count={12}><Button size="icon" variant="outline"><Mail className="h-4 w-4" /></Button></Badge>
              <Badge count={100} overflowCount={99}><Avatar size="sm"><AvatarFallback>U</AvatarFallback></Avatar></Badge>
              <Badge count={0} showZero><Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button></Badge>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Dot</Label>
            <div className="flex flex-wrap items-center gap-6">
              <Badge dot><Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button></Badge>
              <Badge dot><Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=dot1" /><AvatarFallback>U</AvatarFallback></Avatar></Badge>
              <Badge dot color="var(--invin-color-success, #16a34a)"><Button size="icon" variant="outline"><Mail className="h-4 w-4" /></Button></Badge>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Custom Colors</Label>
            <div className="flex flex-wrap items-center gap-6">
              <Badge count={8} color="#8b5cf6"><Button size="icon" variant="outline"><Star className="h-4 w-4" /></Button></Badge>
              <Badge count={3} color="var(--invin-color-success, #16a34a)"><Button size="icon" variant="outline"><Check className="h-4 w-4" /></Button></Badge>
              <Badge count={2} color="var(--invin-color-warning, #f59e0b)"><Button size="icon" variant="outline"><Zap className="h-4 w-4" /></Button></Badge>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Status</Label>
            <div className="flex flex-wrap items-center gap-6">
              <Badge status="success" text="Active" />
              <Badge status="processing" text="Running" />
              <Badge status="error" text="Failed" />
              <Badge status="warning" text="Pending" />
              <Badge status="default" text="Idle" />
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Sizes</Label>
            <div className="flex flex-wrap items-center gap-6">
              <Badge count={5} size="sm"><Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button></Badge>
              <Badge count={5} size="md"><Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button></Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
