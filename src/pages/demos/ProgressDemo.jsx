import { useState, useEffect } from 'react';
import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Progress } from 'invin-uix/ui/progress';
import { Label } from 'invin-uix/ui/label';
import { Button } from 'invin-uix/ui/button';

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
      description="A progress bar built on Radix UI with size variants and color variants for different states."
      importCode={`import { Progress } from 'invin-uix/ui/progress';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Animated progress bar."
        code={`<Progress value={60} />`}
      >
        <div className="w-full max-w-md space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sizes"
        description="sm, md (default), lg heights."
        code={`<Progress value={60} size="sm" />
<Progress value={60} size="md" />
<Progress value={60} size="lg" />`}
      >
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-1">
            <Label className="text-xs">Small (h-1)</Label>
            <Progress value={60} size="sm" />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Medium (h-2) — default</Label>
            <Progress value={60} size="md" />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Large (h-3)</Label>
            <Progress value={60} size="lg" />
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Variants"
        description="Color variants for different states."
        code={`<Progress value={80} variant="default" />
<Progress value={80} variant="success" />
<Progress value={80} variant="warning" />
<Progress value={80} variant="destructive" />`}
      >
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-1">
            <Label className="text-xs">Default (primary)</Label>
            <Progress value={80} variant="default" size="md" />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Success</Label>
            <Progress value={80} variant="success" size="md" />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Warning</Label>
            <Progress value={50} variant="warning" size="md" />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Destructive</Label>
            <Progress value={30} variant="destructive" size="md" />
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Static Values"
        description="Common usage: showing upload, download, or task completion."
        code={`<Progress value={25} />  // 25%
<Progress value={50} />  // 50%
<Progress value={100} variant="success" /> // Complete`}
      >
        <div className="w-full max-w-md space-y-3">
          <div className="space-y-1">
            <div className="flex justify-between text-xs"><span>Upload</span><span>25%</span></div>
            <Progress value={25} />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs"><span>Processing</span><span>50%</span></div>
            <Progress value={50} variant="warning" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs"><span>Complete</span><span>100%</span></div>
            <Progress value={100} variant="success" />
          </div>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
