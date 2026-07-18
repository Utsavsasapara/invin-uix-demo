import { Skeleton } from 'invin-uix/ui/skeleton';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';

export default function SkeletonDemo() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">Loading placeholder with pulse animation.</p></div>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Profile loading</Label>
            <div className="flex items-center gap-4">
              <Skeleton variant="circle" className="h-12 w-12" />
              <div className="space-y-2 flex-1">
                <Skeleton variant="text" className="w-1/3" />
                <Skeleton variant="text" className="w-2/3" />
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Card loading</Label>
            <Skeleton className="h-40 w-full rounded-lg" />
            <div className="mt-3 space-y-2">
              <Skeleton variant="text" className="w-3/4" />
              <Skeleton variant="text" className="w-1/2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
