import { ComponentPage, PlaygroundSection } from '../../../components/PlaygroundSection.jsx';
import { RadarChart } from 'invin-uix/ui/chart';
import { Separator } from 'invin-uix/ui/separator';

const coverage = [
  { domain: 'Network', score: 92 },
  { domain: 'Endpoint', score: 78 },
  { domain: 'Cloud', score: 85 },
  { domain: 'Identity', score: 70 },
  { domain: 'Data', score: 88 },
  { domain: 'Application', score: 65 },
];

const teams = [
  { metric: 'Detection', alpha: 85, beta: 72 },
  { metric: 'Response', alpha: 70, beta: 88 },
  { metric: 'Recovery', alpha: 90, beta: 75 },
  { metric: 'Prevention', alpha: 82, beta: 65 },
  { metric: 'Analysis', alpha: 78, beta: 92 },
];

export default function RadarChartDemo() {
  return (
    <ComponentPage
      name="Radar Chart"
      description="Multi-dimensional comparison across categories. Use for security coverage, skill matrices, or risk assessments."
      importCode={`import { RadarChart } from 'invin-uix/ui/chart';`}
    >

      <PlaygroundSection
        title="Step 1 — Single Series"
        description="Show one dimension across multiple axes."
        code={`const data = [
  { domain: 'Network', score: 92 },
  { domain: 'Endpoint', score: 78 },
  { domain: 'Cloud', score: 85 },
  { domain: 'Identity', score: 70 },
  { domain: 'Data', score: 88 },
  { domain: 'Application', score: 65 },
];

<RadarChart
  data={data}
  dataKey="domain"
  categories={['score']}
  height={300}
/>`}
      >
        <RadarChart data={coverage} dataKey="domain" categories={['score']} height={300} />
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 2 — Multi-Series Comparison"
        description="Compare two datasets. Set color={null} for automatic multi-color."
        code={`const data = [
  { metric: 'Detection', alpha: 85, beta: 72 },
  { metric: 'Response', alpha: 70, beta: 88 },
  ...
];

<RadarChart
  data={data}
  dataKey="metric"
  categories={['alpha', 'beta']}
  color={null}
  height={300}
/>`}
      >
        <RadarChart data={teams} dataKey="metric" categories={['alpha', 'beta']} color={null} height={300} />
      </PlaygroundSection>

    </ComponentPage>
  );
}
