import { useState, useEffect } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Progress } from 'invin-uix/ui/progress';
import { Label } from 'invin-uix/ui/label';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';

export default function ProgressDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => prev >= 100 ? 0 : prev + 5);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <ComponentPage
      name="Progress"
      description="Determinate progress bar built on Radix UI. 3 sizes, 4 colour variants, smooth animation. Use for uploads, tasks, or any measurable progress."
      importCode={`import { Progress } from 'invin-uix/ui/progress';`}
    >
      <PropsTable
        props={[
          { name: 'value', type: 'number (0–100)', default: '0', description: 'Current progress percentage' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Bar height (4px / 8px / 12px)' },
          { name: 'variant', type: "'default' | 'success' | 'warning' | 'destructive'", default: "'default'", description: 'Fill colour' },
        ]}
      />

      <Separator variant="bold" />

      <PlaygroundSection
        title="Animated"
        description="Auto-incrementing progress (resets at 100%)."
        code={`const [progress, setProgress] = useState(0);
// increment in useEffect...
<Progress value={progress} />`}
      >
        <div className="w-full max-w-md space-y-2">
          <div className="flex justify-between text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)]">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sizes"
        description="sm (4px), md (8px, default), lg (12px)."
        code={`<Progress value={60} size="sm" />
<Progress value={60} size="md" />
<Progress value={60} size="lg" />`}
      >
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-1">
            <Label>Small (4px)</Label>
            <Progress value={60} size="sm" />
          </div>
          <div className="space-y-1">
            <Label>Medium (8px) — default</Label>
            <Progress value={60} size="md" />
          </div>
          <div className="space-y-1">
            <Label>Large (12px)</Label>
            <Progress value={60} size="lg" />
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Colour variants"
        description="Semantic colours for different states."
        code={`<Progress value={80} variant="default" />
<Progress value={80} variant="success" />
<Progress value={50} variant="warning" />
<Progress value={30} variant="destructive" />`}
      >
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-1">
            <Label>Default (accent)</Label>
            <Progress value={80} variant="default" />
          </div>
          <div className="space-y-1">
            <Label>Success</Label>
            <Progress value={80} variant="success" />
          </div>
          <div className="space-y-1">
            <Label>Warning</Label>
            <Progress value={50} variant="warning" />
          </div>
          <div className="space-y-1">
            <Label>Destructive</Label>
            <Progress value={30} variant="destructive" />
          </div>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Common patterns.</p>
      </div>

      <PlaygroundSection
        title="Task completion"
        description="Multiple task progresses in a dashboard card."
        code={`<Progress value={100} variant="success" size="sm" />
<Progress value={50} variant="warning" size="sm" />
<Progress value={25} size="sm" />`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-3 space-y-3">
            {[
              { label: 'Security audit', value: 100, variant: 'success' },
              { label: 'Data migration', value: 65, variant: 'default' },
              { label: 'Documentation', value: 30, variant: 'warning' },
              { label: 'Bug fixes', value: 10, variant: 'destructive' },
            ].map(t => (
              <div key={t.label} className="space-y-1">
                <div className="flex justify-between text-[length:var(--invin-text-label)]">
                  <span>{t.label}</span>
                  <span className="text-[var(--invin-text-faint)]">{t.value}%</span>
                </div>
                <Progress value={t.value} variant={t.variant} size="sm" />
              </div>
            ))}
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Storage usage"
        description="Show capacity with percentage label."
        code={`<div className="flex justify-between">
  <span>Used</span><span>7.2 GB / 10 GB</span>
</div>
<Progress value={72} />`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-3 space-y-2">
            <div className="flex justify-between text-[length:var(--invin-text-body)]">
              <span>Storage used</span>
              <span className="text-[var(--invin-text-dim)]">7.2 GB / 10 GB</span>
            </div>
            <Progress value={72} size="md" />
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
