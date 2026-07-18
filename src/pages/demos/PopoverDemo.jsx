import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Popover, PopoverTrigger, PopoverContent } from 'invin-uix/ui/popover';
import { Button } from 'invin-uix/ui/button';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';
import { Settings } from 'invin-uix/ui/icons';

export default function PopoverDemo() {
  return (
    <ComponentPage
      name="Popover"
      description="A floating panel triggered by a button click, positioned relative to the trigger. Useful for forms, settings, and contextual content."
      importCode={`import { Popover, PopoverTrigger, PopoverContent } from 'invin-uix/ui/popover';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Click to open a floating popover panel."
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Popover content here.</p>
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Dimensions</h4>
              <p className="text-xs text-muted-foreground">Set the dimensions for the layer.</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <Label htmlFor="pop-w" className="text-xs">Width</Label>
                  <Input id="pop-w" defaultValue="100%" size="sm" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="pop-h" className="text-xs">Height</Label>
                  <Input id="pop-h" defaultValue="auto" size="sm" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </PlaygroundSection>

      <PlaygroundSection
        title="Alignment"
        description="Control how the popover aligns relative to the trigger."
        code={`<PopoverContent align="start">...</PopoverContent>
<PopoverContent align="center">...</PopoverContent>
<PopoverContent align="end">...</PopoverContent>`}
      >
        <div className="flex flex-wrap gap-3">
          {['start', 'center', 'end'].map(align => (
            <Popover key={align}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="capitalize">{align}</Button>
              </PopoverTrigger>
              <PopoverContent align={align}>
                <p className="text-sm">Aligned to <strong>{align}</strong></p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Settings Panel"
        description="Common use case: compact settings form in a popover."
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="ghost" size="icon"><Settings /></Button>
  </PopoverTrigger>
  <PopoverContent>
    {/* Settings form */}
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon"><Settings style={{ width: 16, height: 16 }} /></Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Display Settings</h4>
              <div className="space-y-1">
                <Label htmlFor="pop-font" className="text-xs">Font size</Label>
                <Input id="pop-font" defaultValue="14px" size="sm" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="pop-line" className="text-xs">Line height</Label>
                <Input id="pop-line" defaultValue="1.5" size="sm" />
              </div>
              <Button size="sm" block>Apply</Button>
            </div>
          </PopoverContent>
        </Popover>
      </PlaygroundSection>
    </ComponentPage>
  );
}
