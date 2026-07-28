import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Slider } from 'invin-uix/ui/slider';
import { Label } from 'invin-uix/ui/label';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';

export default function SliderDemo() {
  const [volume, setVolume] = useState([50]);
  const [range, setRange] = useState([25, 75]);
  const [rating, setRating] = useState([3]);

  return (
    <ComponentPage
      name="Slider"
      description="Range slider built on Radix UI. Supports single thumb, dual-thumb range, discrete steps with visible markers, and step labels. Keyboard accessible (arrow keys)."
      importCode={`import { Slider } from 'invin-uix/ui/slider';`}
    >
      <PropsTable
        props={[
          { name: 'value', type: 'number[]', default: '—', description: 'Controlled value(s). [50] for single, [25, 75] for range' },
          { name: 'defaultValue', type: 'number[]', default: '—', description: 'Uncontrolled initial value(s)' },
          { name: 'onValueChange', type: '(value: number[]) => void', default: '—', description: 'Change callback' },
          { name: 'min', type: 'number', default: '0', description: 'Minimum value' },
          { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
          { name: 'step', type: 'number', default: '1', description: 'Step increment' },
          { name: 'showSteps', type: 'boolean', default: 'false', description: 'Show tick markers at each step position' },
          { name: 'stepLabels', type: 'string[]', default: '—', description: 'Labels below each step marker' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction' },
        ]}
      />

      <Separator variant="bold" />

      <PlaygroundSection
        title="Basic"
        description="Single thumb slider. Drag or use arrow keys."
        code={`<Slider defaultValue={[50]} max={100} step={1} />`}
      >
        <div className="w-full max-w-sm">
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Controlled with value"
        description="Display the current value alongside the slider."
        code={`const [volume, setVolume] = useState([50]);

<Slider value={volume} onValueChange={setVolume} max={100} />
<span>{volume[0]}%</span>`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <div className="flex items-center justify-between">
            <Label>Volume</Label>
            <span className="text-[length:var(--invin-text-body)] font-[600] text-[var(--invin-accent)]">{volume[0]}%</span>
          </div>
          <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Range (dual thumb)"
        description="Two thumbs to select a min/max range. Both are draggable independently."
        code={`const [range, setRange] = useState([25, 75]);

<Slider value={range} onValueChange={setRange} max={100} step={5} />
<span>${'{'}range[0]{'}'} – ${'{'}range[1]{'}'}</span>`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <div className="flex items-center justify-between">
            <Label>Price range</Label>
            <span className="text-[length:var(--invin-text-body)] font-[600]">${range[0]} – ${range[1]}</span>
          </div>
          <Slider value={range} onValueChange={setRange} min={0} max={100} step={5} />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Discrete steps with markers"
        description="showSteps renders tick marks at each step. Works best with small step counts (≤20)."
        code={`<Slider defaultValue={[3]} min={1} max={5} step={1} showSteps />`}
      >
        <div className="space-y-4 w-full max-w-sm">
          <div>
            <Label>Rating (1–5)</Label>
            <Slider
              value={rating}
              onValueChange={setRating}
              min={1}
              max={5}
              step={1}
              showSteps
            />
            <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)] mt-2">Selected: <strong className="text-[var(--invin-accent)]">{rating[0]}</strong></p>
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Steps with labels"
        description="stepLabels renders text below each marker. Great for discrete named values."
        code={`<Slider
  defaultValue={[2]}
  min={0}
  max={4}
  step={1}
  showSteps
  stepLabels={['XS', 'SM', 'MD', 'LG', 'XL']}
/>`}
      >
        <div className="space-y-4 w-full max-w-sm">
          <div>
            <Label>Size</Label>
            <Slider
              defaultValue={[2]}
              min={0}
              max={4}
              step={1}
              showSteps
              stepLabels={['XS', 'SM', 'MD', 'LG', 'XL']}
            />
          </div>
          <div className="mt-6">
            <Label>Priority</Label>
            <Slider
              defaultValue={[1]}
              min={0}
              max={3}
              step={1}
              showSteps
              stepLabels={['Low', 'Medium', 'High', 'Critical']}
            />
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled"
        description="Prevents drag and keyboard interaction."
        code={`<Slider disabled defaultValue={[40]} max={100} />`}
      >
        <div className="w-full max-w-sm">
          <Slider disabled defaultValue={[40]} max={100} />
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Common patterns.</p>
      </div>

      <PlaygroundSection
        title="Settings controls"
        description="Multiple sliders in a settings card."
        code={`<Slider defaultValue={[70]} max={100} />
<Slider defaultValue={[50]} max={100} />
<Slider defaultValue={[60]} max={100} />`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-4 space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between text-[length:var(--invin-text-label)]">
                <span>Brightness</span><span className="text-[var(--invin-text-faint)]">70%</span>
              </div>
              <Slider defaultValue={[70]} max={100} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[length:var(--invin-text-label)]">
                <span>Contrast</span><span className="text-[var(--invin-text-faint)]">50%</span>
              </div>
              <Slider defaultValue={[50]} max={100} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[length:var(--invin-text-label)]">
                <span>Saturation</span><span className="text-[var(--invin-text-faint)]">60%</span>
              </div>
              <Slider defaultValue={[60]} max={100} />
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Price filter"
        description="Range slider for e-commerce filtering."
        code={`const [price, setPrice] = useState([20, 80]);

<Slider value={price} onValueChange={setPrice} min={0} max={200} step={10} showSteps />`}
      >
        <Card className="w-full max-w-sm">
          <CardContent className="py-4">
            <div className="flex justify-between text-[length:var(--invin-text-label)] mb-3">
              <span>Price filter</span>
              <span className="font-[600]">$20 – $180</span>
            </div>
            <Slider defaultValue={[20, 180]} min={0} max={200} step={20} showSteps />
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
