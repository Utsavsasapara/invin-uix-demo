import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Card, CardContent, CardHeader, CardTitle } from 'invin-uix/ui/card';

export default function ChartDemo() {
  return (
    <ComponentPage
      name="Chart"
      description="Chart wrapper component that integrates Recharts with Invin design tokens for consistent theming. Provides themed colors, tooltips, and responsive containers."
      importCode={`import { ChartContainer, ChartTooltip, ChartTooltipContent } from 'invin-uix/ui/chart';`}
    >
      <PlaygroundSection
        title="Overview"
        description="The Chart component wraps Recharts and applies Invin design tokens for colors and styling. It requires recharts as a peer dependency in your project."
        code={`// Install recharts in your project:
// npm install recharts

import { ChartContainer, ChartTooltip, ChartTooltipContent } from 'invin-uix/ui/chart';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

<ChartContainer config={{ revenue: { label: 'Revenue', color: 'var(--invin-color-primary)' } }}>
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="revenue" fill="var(--color-revenue)" />
  </BarChart>
</ChartContainer>`}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Chart Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The Chart component provides a themed wrapper for Recharts. To use it, install <code className="text-xs bg-muted px-1 py-0.5 rounded">recharts</code> in your project and use the ChartContainer, ChartTooltip, and ChartTooltipContent components for consistent styling.
            </p>
            <div className="mt-4 h-32 rounded-md bg-muted flex items-center justify-center text-sm text-muted-foreground">
              Chart preview requires recharts dependency
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>
    </ComponentPage>
  );
}
