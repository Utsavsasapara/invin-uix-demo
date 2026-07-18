import { useState } from 'react';
import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Slider } from 'invin-uix/ui/slider';
import { Label } from 'invin-uix/ui/label';

export default function SliderDemo() {
  const [value, setValue] = useState([50]);
  const [range, setRange] = useState([25, 75]);

  return (
    <ComponentPage
      name="Slider"
      description="A range slider built on Radix UI for selecting numeric values along a track."
      importCode={`import { Slider } from 'invin-uix/ui/slider';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Single-thumb slider with default value."
        code={`<Slider defaultValue={[50]} max={100} step={1} />`}
      >
        <div className="w-full max-w-sm">
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Controlled with Value Display"
        description="Controlled slider showing the current value."
        code={`const [value, setValue] = useState([50]);
<Slider value={value} onValueChange={setValue} max={100} />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <div className="flex items-center justify-between">
            <Label>Volume</Label>
            <span className="text-sm font-medium">{value[0]}%</span>
          </div>
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Range Slider"
        description="Two thumbs for selecting a range."
        code={`const [range, setRange] = useState([25, 75]);
<Slider value={range} onValueChange={setRange} max={100} />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <div className="flex items-center justify-between">
            <Label>Price range</Label>
            <span className="text-sm font-medium">${range[0]} - ${range[1]}</span>
          </div>
          <Slider value={range} onValueChange={setRange} max={100} step={5} />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="With Steps"
        description="Discrete steps for structured values."
        code={`<Slider defaultValue={[3]} max={5} step={1} />`}
      >
        <div className="space-y-3 w-full max-w-sm">
          <Label>Rating (1-5)</Label>
          <Slider defaultValue={[3]} max={5} min={1} step={1} />
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled"
        description="Disabled slider prevents interaction."
        code={`<Slider disabled defaultValue={[40]} max={100} />`}
      >
        <div className="w-full max-w-sm">
          <Slider disabled defaultValue={[40]} max={100} />
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
