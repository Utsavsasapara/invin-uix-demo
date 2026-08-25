import { ComponentPage, PlaygroundSection } from '../../../components/PlaygroundSection.jsx';
import { GaugeChart } from 'invin-uix/ui/chart';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';

export default function GaugeChartDemo() {
  return (
    <ComponentPage
      name="Gauge Chart"
      description="Half-circle radial gauge for single-value metrics like compliance scores, risk levels, and thresholds."
      importCode={`import { GaugeChart } from 'invin-uix/ui/chart';`}
    >

      <PlaygroundSection
        title="Step 1 — Basic Gauge"
        description="Pass a value (0–100 by default). Shows a filled arc with center label."
        code={`<GaugeChart value={94} label="Compliance" height={200} />`}
      >
        <div className="max-w-xs mx-auto">
          <GaugeChart value={94} label="Compliance" height={200} />
        </div>
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 2 — Custom Colors"
        description="Match the color to the metric's meaning."
        code={`<GaugeChart value={72} label="Uptime" color="var(--invin-ok)" height={180} />
<GaugeChart value={38} label="Risk" color="var(--invin-warn)" height={180} />
<GaugeChart value={12} label="Critical" color="var(--invin-error)" max={20} height={180} />`}
      >
        <div className="grid grid-cols-3 gap-4">
          <Card><CardContent className="pt-3 pb-3">
            <GaugeChart value={72} label="Uptime" color="var(--invin-ok)" height={150} />
          </CardContent></Card>
          <Card><CardContent className="pt-3 pb-3">
            <GaugeChart value={38} label="Risk" color="var(--invin-warn)" height={150} />
          </CardContent></Card>
          <Card><CardContent className="pt-3 pb-3">
            <GaugeChart value={12} label="Critical" color="var(--invin-error)" max={20} height={150} />
          </CardContent></Card>
        </div>
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 3 — Custom Max Value"
        description="Set max for non-percentage ranges. Displays as value/max."
        code={`<GaugeChart value={7} max={50} label="Open Incidents" color="var(--invin-error)" height={200} />`}
      >
        <div className="max-w-xs mx-auto">
          <GaugeChart value={7} max={50} label="Open Incidents" color="var(--invin-error)" height={200} />
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
