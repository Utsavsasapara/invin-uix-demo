import { ComponentPage, PlaygroundSection } from '../../../components/PlaygroundSection.jsx';
import { PieChart, DonutChart } from 'invin-uix/ui/chart';
import { Separator } from 'invin-uix/ui/separator';

const severity = [
  { name: 'Critical', value: 8, color: 'var(--invin-error)' },
  { name: 'High', value: 23, color: 'var(--invin-warn)' },
  { name: 'Medium', value: 45, color: 'var(--invin-accent)' },
  { name: 'Low', value: 67, color: 'var(--invin-ok)' },
];

const compliance = [
  { name: 'Compliant', value: 78, color: 'var(--invin-ok)' },
  { name: 'Partial', value: 15, color: 'var(--invin-warn)' },
  { name: 'Non-Compliant', value: 7, color: 'var(--invin-error)' },
];

export default function PieChartDemo() {
  return (
    <ComponentPage
      name="Pie & Donut Chart"
      description="Show proportional data. PieChart for full slices, DonutChart for a ring with center space."
      importCode={`import { PieChart, DonutChart } from 'invin-uix/ui/chart';`}
    >

      <PlaygroundSection
        title="Step 1 — Pie Chart"
        description="Pass data with name, value, and optional color."
        code={`const data = [
  { name: 'Critical', value: 8, color: 'var(--invin-error)' },
  { name: 'High', value: 23, color: 'var(--invin-warn)' },
  { name: 'Medium', value: 45, color: 'var(--invin-accent)' },
  { name: 'Low', value: 67, color: 'var(--invin-ok)' },
];

<PieChart data={data} height={260} />`}
      >
        <PieChart data={severity} height={260} />
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 2 — With Labels"
        description="Set showLabel={true} to display percentage on each slice."
        code={`<PieChart data={data} height={260} showLabel />`}
      >
        <PieChart data={severity} height={260} showLabel />
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 3 — Donut Chart"
        description="DonutChart is a PieChart with a hole in the center."
        code={`<DonutChart data={data} height={250} />`}
      >
        <DonutChart data={compliance} height={250} />
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 4 — Donut with Labels"
        description="Combine donut + labels for maximum readability."
        code={`<DonutChart data={data} height={250} showLabel />`}
      >
        <DonutChart data={severity} height={250} showLabel />
      </PlaygroundSection>

    </ComponentPage>
  );
}
