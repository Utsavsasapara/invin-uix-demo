import { ComponentPage, PlaygroundSection } from '../../../components/PlaygroundSection.jsx';
import { AreaChart } from 'invin-uix/ui/chart';
import { Separator } from 'invin-uix/ui/separator';

const trafficData = [
  { hour: '00:00', inbound: 1200, outbound: 800, blocked: 150 },
  { hour: '04:00', inbound: 800, outbound: 500, blocked: 80 },
  { hour: '08:00', inbound: 3200, outbound: 2400, blocked: 420 },
  { hour: '12:00', inbound: 4500, outbound: 3200, blocked: 580 },
  { hour: '16:00', inbound: 3800, outbound: 2800, blocked: 390 },
  { hour: '20:00', inbound: 2200, outbound: 1600, blocked: 220 },
  { hour: '23:59', inbound: 1500, outbound: 1000, blocked: 130 },
];

export default function AreaChartDemo() {
  return (
    <ComponentPage
      name="Area Chart"
      description="Filled area chart for volume and composition over time. Supports stacking and gradient fills."
      importCode={`import { AreaChart } from 'invin-uix/ui/chart';`}
    >

      <PlaygroundSection
        title="Step 1 — Basic Area"
        description="Single area showing volume over time."
        code={`<AreaChart
  data={data}
  xKey="hour"
  areas={[
    { key: 'inbound', name: 'Inbound Traffic' },
  ]}
  height={250}
/>`}
      >
        <AreaChart
          data={trafficData}
          xKey="hour"
          areas={[{ key: 'inbound', name: 'Inbound Traffic' }]}
          height={250}
        />
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 2 — Stacked Areas"
        description="Set stacked={true} to show composition. Each area stacks on top of the previous."
        code={`<AreaChart
  data={data}
  xKey="hour"
  areas={[
    { key: 'inbound', name: 'Inbound', color: 'var(--invin-accent)' },
    { key: 'outbound', name: 'Outbound', color: 'var(--invin-ok)' },
    { key: 'blocked', name: 'Blocked', color: 'var(--invin-error)' },
  ]}
  stacked
  height={280}
/>`}
      >
        <AreaChart
          data={trafficData}
          xKey="hour"
          areas={[
            { key: 'inbound', name: 'Inbound', color: 'var(--invin-accent)' },
            { key: 'outbound', name: 'Outbound', color: 'var(--invin-ok)' },
            { key: 'blocked', name: 'Blocked', color: 'var(--invin-error)' },
          ]}
          stacked
          height={280}
        />
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 3 — Overlay (Non-stacked)"
        description="Multiple overlapping areas for direct comparison."
        code={`<AreaChart
  data={data}
  xKey="hour"
  areas={[
    { key: 'inbound', name: 'Inbound' },
    { key: 'outbound', name: 'Outbound', color: 'var(--invin-ok)' },
  ]}
  height={220}
/>`}
      >
        <AreaChart
          data={trafficData}
          xKey="hour"
          areas={[
            { key: 'inbound', name: 'Inbound' },
            { key: 'outbound', name: 'Outbound', color: 'var(--invin-ok)' },
          ]}
          height={220}
        />
      </PlaygroundSection>

    </ComponentPage>
  );
}
