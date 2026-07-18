import { useState } from 'react';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';
import { Button } from 'invin-uix/ui/button';
import { Switch } from 'invin-uix/ui/switch';
import { Alert, AlertTitle, AlertDescription } from 'invin-uix/ui/alert';
import { Spinner } from 'invin-uix/ui/spinner';

export default function SpinnerDemo() {
  const [loading, setLoading] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">Loading indicator with sizes, tip text, delay, wrapper overlay, and fullscreen mode.</p></div>

      <Card>
        <CardContent className="pt-6 space-y-8">

          {/* Variants */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Variants</Label>
            <div className="flex items-start gap-10">
              <Spinner variant="default" tip="Default" />
              <Spinner variant="dots" tip="Dots" />
              <Spinner variant="ring" tip="Ring" />
              <Spinner variant="bars" tip="Bars" />
            </div>
          </div>

          <Separator />

          {/* Sizes */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Sizes</Label>
            <div className="flex items-center gap-8">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
            </div>
          </div>

          <Separator />

          {/* Sizes × Variants */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Sizes × Variants</Label>
            <div className="grid grid-cols-4 gap-6">
              {['default', 'dots', 'ring', 'bars'].map(v => (
                <div key={v} className="flex flex-col items-center gap-4">
                  <Spinner variant={v} size="sm" />
                  <Spinner variant={v} size="md" />
                  <Spinner variant={v} size="lg" />
                  <span className="text-xs text-muted-foreground capitalize">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Wrapper mode (content overlay) */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Wrapper Mode (overlay on content)</Label>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm">Loading:</span>
              <Switch size="sm" checked={loading} onCheckedChange={setLoading} />
            </div>
            <Spinner spinning={loading} tip="Loading content...">
              <Alert variant="info">
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This content is wrapped by a Spinner. When loading is true, it blurs and shows the spinner overlay. Toggle the switch above to see the effect.</AlertDescription>
              </Alert>
            </Spinner>
          </div>

          <Separator />

          {/* Wrapper on card content */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Wrapper on Card</Label>
            <Spinner spinning={loading} tip="Fetching data...">
              <div style={{ padding: '20px', border: '1px solid var(--invin-color-border)', borderRadius: '8px' }}>
                <p className="text-sm font-medium">Dashboard Statistics</p>
                <p className="text-xs text-muted-foreground mt-1">Revenue: $45,231 | Users: 2,350 | Orders: 573</p>
                <p className="text-xs text-muted-foreground mt-1">Last updated: 2 minutes ago</p>
              </div>
            </Spinner>
          </div>

          <Separator />

          {/* Delay (prevents flash) */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">With Delay (500ms — prevents flash for quick loads)</Label>
            <Spinner delay={500} tip="Delayed spinner" />
          </div>

          <Separator />

          {/* Fullscreen */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Fullscreen</Label>
            <Button variant="outline" onClick={() => { setFullscreen(true); setTimeout(() => setFullscreen(false), 3000); }}>
              Show Fullscreen (3 seconds)
            </Button>
            <Spinner spinning={fullscreen} fullscreen tip="Loading application..." size="lg" />
          </div>

          <Separator />

          {/* Custom indicator (for truly custom spinners) */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Custom Indicator (override any variant)</Label>
            <div className="flex items-start gap-8">
              <Spinner indicator={<span style={{ fontSize: '24px', animation: 'spinner-rotate 1s linear infinite', display: 'inline-block' }}>⏳</span>} tip="Emoji" />
              <Spinner indicator={
                <div style={{ width: 24, height: 24, border: '3px dotted var(--invin-color-primary)', borderRadius: '50%', animation: 'spinner-rotate 2s linear infinite' }} />
              } tip="Dotted" />
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
