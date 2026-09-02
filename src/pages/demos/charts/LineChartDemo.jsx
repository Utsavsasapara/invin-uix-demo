import { ComponentPage, PlaygroundSection } from '../../../components/PlaygroundSection.jsx';
import { LineChart } from 'invin-uix/ui/chart';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';

const trendData = [
  { month: 'Jan', incidents: 45, resolved: 40, falsePositives: 12 },
  { month: 'Feb', incidents: 52, resolved: 48, falsePositives: 15 },
  { month: 'Mar', incidents: 38, resolved: 35, falsePositives: 8 },
  { month: 'Apr', incidents: 65, resolved: 58, falsePositives: 20 },
  { month: 'May', incidents: 42, resolved: 41, falsePositives: 10 },
  { month: 'Jun', incidents: 55, resolved: 50, falsePositives: 14 },
  { month: 'Jul', incidents: 35, resolved: 34, falsePositives: 7 },
];

export default function LineChartDemo() {
  return (
    <ComponentPage
      name="Line Chart"
      description="Track metrics over time with multi-line support, tooltips, dots, dashed lines, and area fills."
      importCode={`import { LineChart } from 'invin-uix/ui/chart';`}
    >

      {/* ─── Step 1: Basic ────────────────────────────────────── */}
      <PlaygroundSection
        title="Step 1 — Basic Line Chart"
        description="Pass data array, xKey for the X-axis, and a lines config."
        code={`const data = [
  { month: 'Jan', incidents: 45 },
  { month: 'Feb', incidents: 52 },
  { month: 'Mar', incidents: 38 },
  { month: 'Apr', incidents: 65 },
  { month: 'May', incidents: 42 },
];

<LineChart
  data={data}
  xKey="month"
  lines={[
    { key: 'incidents', name: 'Incidents' },
  ]}
  height={250}
/>`}
      >
        <LineChart
          data={trendData}
          xKey="month"
          lines={[{ key: 'incidents', name: 'Incidents' }]}
          height={250}
        />
      </PlaygroundSection>

      <Separator />

      {/* ─── Step 2: Multiple lines ───────────────────────────── */}
      <PlaygroundSection
        title="Step 2 — Multiple Lines with Custom Colors"
        description="Add more entries to the lines array. Each line gets its own color."
        code={`<LineChart
  data={data}
  xKey="month"
  lines={[
    { key: 'incidents', name: 'Incidents', color: 'var(--error)' },
    { key: 'resolved', name: 'Resolved', color: 'var(--ok)' },
  ]}
  height={280}
/>`}
      >
        <LineChart
          data={trendData}
          xKey="month"
          lines={[
            { key: 'incidents', name: 'Incidents', color: 'var(--error)' },
            { key: 'resolved', name: 'Resolved', color: 'var(--ok)' },
          ]}
          height={280}
        />
      </PlaygroundSection>

      <Separator />

      {/* ─── Step 3: Dashed lines ─────────────────────────────── */}
      <PlaygroundSection
        title="Step 3 — Dashed Line for Projections"
        description="Set dashed: true on a line to render it as a projection/forecast."
        code={`<LineChart
  data={data}
  xKey="month"
  lines={[
    { key: 'incidents', name: 'Actual', color: 'var(--accent)' },
    { key: 'falsePositives', name: 'Projected', dashed: true, color: 'var(--muted-foreground)' },
  ]}
  height={250}
/>`}
      >
        <LineChart
          data={trendData}
          xKey="month"
          lines={[
            { key: 'incidents', name: 'Actual', color: 'var(--accent)' },
            { key: 'falsePositives', name: 'Projected', dashed: true, color: 'var(--muted-foreground)' },
          ]}
          height={250}
        />
      </PlaygroundSection>

      <Separator />

      {/* ─── Step 4: No dots, no grid ─────────────────────────── */}
      <PlaygroundSection
        title="Step 4 — Minimal (No Dots, No Grid)"
        description="Clean look for embedded or secondary charts."
        code={`<LineChart
  data={data}
  xKey="month"
  lines={[{ key: 'resolved', name: 'Resolved' }]}
  showDots={false}
  showGrid={false}
  height={180}
/>`}
      >
        <LineChart
          data={trendData}
          xKey="month"
          lines={[{ key: 'resolved', name: 'Resolved' }]}
          showDots={false}
          showGrid={false}
          height={180}
        />
      </PlaygroundSection>

      <Separator />

      {/* ─── Props ────────────────────────────────────────────── */}
      <div className="space-y-2">
        <h3 className="text-[var(--foreground)] font-[700]">Props</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead><tr className="border-b border-[var(--border)]">
              <th className="text-left py-2 pr-4 font-[600] text-[var(--muted-foreground)]">Prop</th>
              <th className="text-left py-2 pr-4 font-[600] text-[var(--muted-foreground)]">Type</th>
              <th className="text-left py-2 pr-4 font-[600] text-[var(--muted-foreground)]">Default</th>
              <th className="text-left py-2 font-[600] text-[var(--muted-foreground)]">Description</th>
            </tr></thead>
            <tbody className="font-mono text-[11px]">
              <tr className="border-b border-[var(--border)]"><td className="py-2 pr-4 text-[var(--accent)]">data</td><td className="py-2 pr-4">Record[]</td><td>—</td><td className="text-[var(--muted-foreground)]">Array of data points</td></tr>
              <tr className="border-b border-[var(--border)]"><td className="py-2 pr-4 text-[var(--accent)]">xKey</td><td className="py-2 pr-4">string</td><td>—</td><td className="text-[var(--muted-foreground)]">Key for X-axis</td></tr>
              <tr className="border-b border-[var(--border)]"><td className="py-2 pr-4 text-[var(--accent)]">lines</td><td className="py-2 pr-4">{`{key, name?, color?, dashed?}[]`}</td><td>—</td><td className="text-[var(--muted-foreground)]">Line series config</td></tr>
              <tr className="border-b border-[var(--border)]"><td className="py-2 pr-4 text-[var(--accent)]">height</td><td className="py-2 pr-4">number</td><td>300</td><td className="text-[var(--muted-foreground)]">Chart height (px)</td></tr>
              <tr className="border-b border-[var(--border)]"><td className="py-2 pr-4 text-[var(--accent)]">showGrid</td><td className="py-2 pr-4">boolean</td><td>true</td><td className="text-[var(--muted-foreground)]">Background grid</td></tr>
              <tr className="border-b border-[var(--border)]"><td className="py-2 pr-4 text-[var(--accent)]">showDots</td><td className="py-2 pr-4">boolean</td><td>true</td><td className="text-[var(--muted-foreground)]">Data point dots</td></tr>
              <tr><td className="py-2 pr-4 text-[var(--accent)]">curved</td><td className="py-2 pr-4">boolean</td><td>true</td><td className="text-[var(--muted-foreground)]">Smooth curves vs straight</td></tr>
            </tbody>
          </table>
        </div>
      </div>

    </ComponentPage>
  );
}
