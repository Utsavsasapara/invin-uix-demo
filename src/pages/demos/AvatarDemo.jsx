import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';

export default function AvatarDemo() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">User images with fallback initials and multiple sizes.</p></div>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Sizes</Label>
            <div className="flex items-end gap-4">
              <Avatar size="xs"><AvatarImage src="https://i.pravatar.cc/100?u=a1" /><AvatarFallback>XS</AvatarFallback></Avatar>
              <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=a2" /><AvatarFallback>SM</AvatarFallback></Avatar>
              <Avatar><AvatarImage src="https://i.pravatar.cc/100?u=a3" /><AvatarFallback>MD</AvatarFallback></Avatar>
              <Avatar size="lg"><AvatarImage src="https://i.pravatar.cc/100?u=a4" /><AvatarFallback>LG</AvatarFallback></Avatar>
              <Avatar size="xl"><AvatarImage src="https://i.pravatar.cc/100?u=a5" /><AvatarFallback>XL</AvatarFallback></Avatar>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Fallbacks</Label>
            <div className="flex items-center gap-4">
              <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>🎉</AvatarFallback></Avatar>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Stacked</Label>
            <div className="flex -space-x-3">
              <Avatar size="sm" className="border-2 border-background"><AvatarImage src="https://i.pravatar.cc/100?u=s1" /><AvatarFallback>1</AvatarFallback></Avatar>
              <Avatar size="sm" className="border-2 border-background"><AvatarImage src="https://i.pravatar.cc/100?u=s2" /><AvatarFallback>2</AvatarFallback></Avatar>
              <Avatar size="sm" className="border-2 border-background"><AvatarImage src="https://i.pravatar.cc/100?u=s3" /><AvatarFallback>3</AvatarFallback></Avatar>
              <Avatar size="sm" className="border-2 border-background"><AvatarFallback>+5</AvatarFallback></Avatar>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
