import { ComponentPage, PlaygroundSection } from '../../../components/PlaygroundSection.jsx';
import { BarChart } from 'invin-uix/ui/chart';
import { Separator } from 'invin-uix/ui/separator';

const threats = [
  { category: 'Malware', detected: 342, blocked: 338 },
  { category: 'Phishing', detected: 187, blocked: 180 },
  { category: 'DDoS', detected: 45, blocked: 45 },
  { category: 'Brute Force', detected: 892, blocked: 890 },
  { category: 'SQL Injection', detected: 67, blocked: 65 },
];

const riskAssets = [
  { asset: 'db-prod-01', risk: 92 },
  { asset: 'api-gateway', risk: 78 },
  { asset: 'web-server-3', risk: 65 },
  { asset: 'mail-relay', risk: 54 },
  { asset: 'vpn-endpoint', risk: 42 },
];

export default function BarChartDemo() {
  return (
    <ComponentPage
      name="Bar Chart"
      description="Vertical or horizontal bars for category comparison. Supports multi-series, stacking, and rounded corners."
      importCode={`import { BarChart } from 'invin-uix/ui/chart';`}
    >

      <PlaygroundSection
        title="Step 1 — Vertical Bars"
        description="Compare values across categories."
        code={`<BarChart
  data={data}
  xKey="category"
  bars={[
    { key: 'detected', name: 'Detected', color: 'var(--error)', radius: 4 },
    { key: 'blocked', name: 'Blocked', color: 'var(--ok)', radius: 4 },
  ]}
  height={280}
/>`}
      >
        <BarChart
          data={threats}
          xKey="category"
          bars={[
            { key: 'detected', name: 'Detected', color: 'var(--error)', radius: 4 },
            { key: 'blocked', name: 'Blocked', color: 'var(--ok)', radius: 4 },
          ]}
          height={280}
        />
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 2 — Horizontal Bars"
        description="Set horizontal={true} for long category labels."
        code={`<BarChart
  data={data}
  xKey="asset"
  bars={[{ key: 'risk', name: 'Risk Score', color: 'var(--degraded)', radius: 4 }]}
  horizontal
  height={220}
/>`}
      >
        <BarChart
          data={riskAssets}
          xKey="asset"
          bars={[{ key: 'risk', name: 'Risk Score', color: 'var(--degraded)', radius: 4 }]}
          horizontal
          height={220}
        />
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 3 — Stacked Bars"
        description="Set stacked={true} for part-to-whole breakdown."
        code={`<BarChart
  data={data}
  xKey="category"
  bars={[
    { key: 'blocked', name: 'Blocked', color: 'var(--ok)' },
    { key: 'detected', name: 'Unblocked', color: 'var(--error)' },
  ]}
  stacked
  height={250}
/>`}
      >
        <BarChart
          data={threats}
          xKey="category"
          bars={[
            { key: 'blocked', name: 'Blocked', color: 'var(--ok)' },
            { key: 'detected', name: 'Detected', color: 'var(--error)' },
          ]}
          stacked
          height={250}
        />
      </PlaygroundSection>

    </ComponentPage>
  );
}
