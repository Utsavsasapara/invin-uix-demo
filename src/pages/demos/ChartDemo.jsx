import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import {
  LineChart, AreaChart, BarChart, PieChart, DonutChart,
  RadarChart, GaugeChart, Sparkline,
} from 'invin-uix/ui/chart';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import { KpiCard } from 'invin-uix/ui/kpi-card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from 'invin-uix/ui/table';
import { Shield, Activity, AlertCircle, TrendingUp } from 'invin-uix/ui/icons';

// ─── Mock Data ───────────────────────────────────────────────────────────────

// Line Chart — SOC incident trends
const incidentTrends = [
  { month: 'Jan', incidents: 45, resolved: 40, falsePositives: 12 },
  { month: 'Feb', incidents: 52, resolved: 48, falsePositives: 15 },
  { month: 'Mar', incidents: 38, resolved: 35, falsePositives: 8 },
  { month: 'Apr', incidents: 65, resolved: 58, falsePositives: 20 },
  { month: 'May', incidents: 42, resolved: 41, falsePositives: 10 },
  { month: 'Jun', incidents: 55, resolved: 50, falsePositives: 14 },
  { month: 'Jul', incidents: 35, resolved: 34, falsePositives: 7 },
  { month: 'Aug', incidents: 48, resolved: 45, falsePositives: 11 },
];

// Area Chart — network traffic volume
const networkTraffic = [
  { hour: '00:00', inbound: 1200, outbound: 800, blocked: 150 },
  { hour: '04:00', inbound: 800, outbound: 500, blocked: 80 },
  { hour: '08:00', inbound: 3200, outbound: 2400, blocked: 420 },
  { hour: '12:00', inbound: 4500, outbound: 3200, blocked: 580 },
  { hour: '16:00', inbound: 3800, outbound: 2800, blocked: 390 },
  { hour: '20:00', inbound: 2200, outbound: 1600, blocked: 220 },
  { hour: '23:59', inbound: 1500, outbound: 1000, blocked: 130 },
];

// Bar Chart — threats by category
const threatCategories = [
  { category: 'Malware', count: 342, blocked: 338 },
  { category: 'Phishing', count: 187, blocked: 180 },
  { category: 'DDoS', count: 45, blocked: 45 },
  { category: 'Brute Force', count: 892, blocked: 890 },
  { category: 'SQL Injection', count: 67, blocked: 65 },
  { category: 'XSS', count: 124, blocked: 120 },
  { category: 'Ransomware', count: 12, blocked: 11 },
];

// Pie Chart — incident severity
const severityBreakdown = [
  { name: 'Critical', value: 8, color: 'var(--invin-error)' },
  { name: 'High', value: 23, color: 'var(--invin-warn)' },
  { name: 'Medium', value: 45, color: 'var(--invin-accent)' },
  { name: 'Low', value: 67, color: 'var(--invin-ok)' },
  { name: 'Info', value: 120, color: 'var(--chart-5, #8b5cf6)' },
];

// Donut Chart — compliance frameworks
const complianceStatus = [
  { name: 'Compliant', value: 78, color: 'var(--invin-ok)' },
  { name: 'Partial', value: 15, color: 'var(--invin-warn)' },
  { name: 'Non-Compliant', value: 7, color: 'var(--invin-error)' },
];

// Radar Chart — security coverage
const securityCoverage = [
  { domain: 'Network', coverage: 92 },
  { domain: 'Endpoint', coverage: 78 },
  { domain: 'Cloud', coverage: 85 },
  { domain: 'Identity', coverage: 70 },
  { domain: 'Data', coverage: 88 },
  { domain: 'Application', coverage: 65 },
];

// Radar — team comparison
const teamComparison = [
  { metric: 'Detection', alpha: 85, beta: 72 },
  { metric: 'Response', alpha: 70, beta: 88 },
  { metric: 'Recovery', alpha: 90, beta: 75 },
  { metric: 'Prevention', alpha: 82, beta: 65 },
  { metric: 'Analysis', alpha: 78, beta: 92 },
];

// Sparklines
const sparkIncidents = [3, 7, 4, 8, 2, 9, 5, 6, 8, 4, 7, 3, 5, 8, 6];
const sparkCpu = [45, 52, 48, 67, 72, 65, 58, 70, 75, 68, 62, 55, 60, 63, 67];
const sparkErrors = [1, 0, 2, 1, 3, 0, 1, 2, 4, 1, 0, 2, 1, 0, 3];
const sparkRevenue = [12, 15, 14, 18, 20, 22, 19, 25, 28, 26, 30, 32, 35, 33, 38];

// ─── Demo Page ───────────────────────────────────────────────────────────────

export default function ChartDemo() {
  return (
    <ComponentPage
      name="Charts"
      description="8 chart types powered by Recharts, pre-themed with Invin design tokens. Responsive, dark/light aware, and interactive with tooltips. Zero extra dependencies for consumers."
      importCode={`import {
  LineChart, AreaChart, BarChart, PieChart, DonutChart,
  RadarChart, GaugeChart, Sparkline,
} from 'invin-uix/ui/chart';`}
    >

      {/* ─── Common Props ─────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'data', type: 'Record<string, any>[]', default: '—', description: 'Array of data points' },
          { name: 'height', type: 'number', default: '300', description: 'Chart height in px' },
          { name: 'className', type: 'string', default: '—', description: 'Container className' },
          { name: 'showGrid', type: 'boolean', default: 'true', description: 'Show background grid lines' },
        ]}
      />

      <Separator />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 1. LINE CHART                                              */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <PlaygroundSection
        title="1. LineChart — Incident Trends"
        description="Track metrics over time. Use case: SOC incident count, resolution rate, and false positives month over month."
      >
        <LineChart
          data={incidentTrends}
          xKey="month"
          lines={[
            { key: 'incidents', name: 'Total Incidents', color: 'var(--invin-error)' },
            { key: 'resolved', name: 'Resolved', color: 'var(--invin-ok)' },
            { key: 'falsePositives', name: 'False Positives', dashed: true, color: 'var(--invin-text-dim)' },
          ]}
          height={280}
        />
      </PlaygroundSection>

      <PlaygroundSection
        title="LineChart — Minimal (no dots, no grid)"
        description="Cleaner look for secondary/embedded charts."
      >
        <LineChart
          data={incidentTrends}
          xKey="month"
          lines={[
            { key: 'resolved', name: 'Resolved' },
          ]}
          showDots={false}
          showGrid={false}
          height={180}
        />
      </PlaygroundSection>

      <Separator />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 2. AREA CHART                                              */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <PlaygroundSection
        title="2. AreaChart — Network Traffic"
        description="Stacked areas showing volume composition. Use case: inbound vs outbound vs blocked traffic over 24 hours."
      >
        <AreaChart
          data={networkTraffic}
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

      <PlaygroundSection
        title="AreaChart — Non-stacked (overlay)"
        description="Overlapping areas for direct comparison."
      >
        <AreaChart
          data={networkTraffic}
          xKey="hour"
          areas={[
            { key: 'inbound', name: 'Inbound' },
            { key: 'outbound', name: 'Outbound', color: 'var(--invin-ok)' },
          ]}
          height={220}
        />
      </PlaygroundSection>

      <Separator />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 3. BAR CHART                                               */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <PlaygroundSection
        title="3. BarChart — Threats by Category"
        description="Compare discrete categories. Use case: threat types detected vs blocked."
      >
        <BarChart
          data={threatCategories}
          xKey="category"
          bars={[
            { key: 'count', name: 'Detected', color: 'var(--invin-error)', radius: 4 },
            { key: 'blocked', name: 'Blocked', color: 'var(--invin-ok)', radius: 4 },
          ]}
          height={280}
        />
      </PlaygroundSection>

      <PlaygroundSection
        title="BarChart — Horizontal"
        description="Horizontal bars for long category labels. Use case: top assets by risk score."
      >
        <BarChart
          data={[
            { asset: 'db-prod-01', risk: 92 },
            { asset: 'api-gateway', risk: 78 },
            { asset: 'web-server-3', risk: 65 },
            { asset: 'mail-relay', risk: 54 },
            { asset: 'vpn-endpoint', risk: 42 },
          ]}
          xKey="asset"
          bars={[{ key: 'risk', name: 'Risk Score', color: 'var(--invin-warn)', radius: 4 }]}
          horizontal
          height={220}
        />
      </PlaygroundSection>

      <PlaygroundSection
        title="BarChart — Stacked"
        description="Stacked bars for part-to-whole within categories."
      >
        <BarChart
          data={incidentTrends.slice(0, 6)}
          xKey="month"
          bars={[
            { key: 'resolved', name: 'Resolved', color: 'var(--invin-ok)', radius: 0 },
            { key: 'falsePositives', name: 'False Positives', color: 'var(--invin-text-dim)', radius: 0 },
          ]}
          stacked
          height={220}
        />
      </PlaygroundSection>

      <Separator />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 4. PIE CHART                                               */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <PlaygroundSection
        title="4. PieChart — Severity Distribution"
        description="Show proportions. Use case: breakdown of open incidents by severity level."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-[11px] font-[500] text-[var(--invin-text-faint)] uppercase mb-2">With labels</p>
            <PieChart data={severityBreakdown} height={260} showLabel />
          </div>
          <div>
            <p className="text-[11px] font-[500] text-[var(--invin-text-faint)] uppercase mb-2">Legend only</p>
            <PieChart data={severityBreakdown} height={260} />
          </div>
        </div>
      </PlaygroundSection>

      <Separator />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 5. DONUT CHART                                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <PlaygroundSection
        title="5. DonutChart — Compliance Status"
        description="Donut (pie with hole) for high-level status breakdowns. Use case: overall compliance posture."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DonutChart data={complianceStatus} height={250} />
          <DonutChart
            data={[
              { name: 'Protected', value: 847, color: 'var(--invin-ok)' },
              { name: 'At Risk', value: 53, color: 'var(--invin-warn)' },
              { name: 'Unprotected', value: 12, color: 'var(--invin-error)' },
            ]}
            height={250}
            showLabel
          />
        </div>
      </PlaygroundSection>

      <Separator />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 6. RADAR CHART                                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <PlaygroundSection
        title="6. RadarChart — Security Coverage Matrix"
        description="Multi-dimensional comparison. Use case: coverage score across security domains."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-[11px] font-[500] text-[var(--invin-text-faint)] uppercase mb-2">Single series</p>
            <RadarChart
              data={securityCoverage}
              dataKey="domain"
              categories={['coverage']}
              height={280}
            />
          </div>
          <div>
            <p className="text-[11px] font-[500] text-[var(--invin-text-faint)] uppercase mb-2">Team comparison</p>
            <RadarChart
              data={teamComparison}
              dataKey="metric"
              categories={['alpha', 'beta']}
              color={null}
              height={280}
            />
          </div>
        </div>
      </PlaygroundSection>

      <Separator />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 7. GAUGE CHART                                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <PlaygroundSection
        title="7. GaugeChart — Key Metrics"
        description="Single-value gauge for scores and thresholds. Use case: compliance %, uptime, risk level."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-3 pb-3">
              <GaugeChart value={94} label="Compliance" height={140} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-3 pb-3">
              <GaugeChart value={99.9} label="Uptime" color="var(--invin-ok)" height={140} max={100} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-3 pb-3">
              <GaugeChart value={38} label="Risk Score" color="var(--invin-warn)" height={140} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-3 pb-3">
              <GaugeChart value={7} label="Critical" color="var(--invin-error)" max={20} height={140} />
            </CardContent>
          </Card>
        </div>
      </PlaygroundSection>

      <Separator />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 8. SPARKLINE                                               */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <PlaygroundSection
        title="8. Sparkline — Inline Mini Charts"
        description="Tiny charts for KPI cards and table cells. Two types: line and bar. Use case: trend at a glance."
      >
        {/* In KPI cards */}
        <p className="text-[11px] font-[500] text-[var(--invin-text-faint)] uppercase mb-3">In KPI Cards</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-[var(--invin-text-dim)]">Incidents</span>
                <Badge variant="destructive" size="sm">+3</Badge>
              </div>
              <p className="text-[length:var(--invin-text-kpi)] font-[700] mb-2">142</p>
              <Sparkline data={sparkIncidents} height={28} color="var(--invin-error)" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-[var(--invin-text-dim)]">CPU</span>
                <Badge variant="warning" size="sm">67%</Badge>
              </div>
              <p className="text-[length:var(--invin-text-kpi)] font-[700] mb-2">67%</p>
              <Sparkline data={sparkCpu} height={28} color="var(--invin-warn)" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-[var(--invin-text-dim)]">Errors</span>
                <Badge variant="secondary" size="sm">Low</Badge>
              </div>
              <p className="text-[length:var(--invin-text-kpi)] font-[700] mb-2">24</p>
              <Sparkline data={sparkErrors} height={28} color="var(--invin-error)" type="bar" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-[var(--invin-text-dim)]">Revenue</span>
                <Badge variant="success" size="sm">+22%</Badge>
              </div>
              <p className="text-[length:var(--invin-text-kpi)] font-[700] mb-2">$38K</p>
              <Sparkline data={sparkRevenue} height={28} color="var(--invin-ok)" />
            </CardContent>
          </Card>
        </div>

        {/* In a table */}
        <p className="text-[11px] font-[500] text-[var(--invin-text-faint)] uppercase mb-3 mt-6">In Table Cells</p>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Trend (7d)</TableHead>
                  <TableHead className="text-right">Requests</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: 'API Gateway', status: 'Healthy', data: [4,5,3,7,6,8,5], requests: '12.4K' },
                  { name: 'Auth Service', status: 'Healthy', data: [2,3,2,4,3,3,2], requests: '8.2K' },
                  { name: 'Log Collector', status: 'Warning', data: [6,8,9,7,10,12,11], requests: '45.1K' },
                  { name: 'Alert Engine', status: 'Healthy', data: [1,1,2,1,1,2,1], requests: '3.1K' },
                ].map((svc) => (
                  <TableRow key={svc.name}>
                    <TableCell className="font-[500]">{svc.name}</TableCell>
                    <TableCell>
                      <Badge variant={svc.status === 'Healthy' ? 'success' : 'warning'} size="sm">{svc.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Sparkline
                        data={svc.data}
                        height={20}
                        width={80}
                        color={svc.status === 'Healthy' ? 'var(--invin-ok)' : 'var(--invin-warn)'}
                      />
                    </TableCell>
                    <TableCell className="text-right font-mono text-[12px]">{svc.requests}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <Separator />

      {/* ─── Props Reference ──────────────────────────────────── */}
      <div className="space-y-6">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Props Reference</h3>

        <div className="space-y-4">
          <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">LineChart / AreaChart</p>
          <PropsTable props={[
            { name: 'xKey', type: 'string', default: '—', description: 'Data key for X-axis' },
            { name: 'lines / areas', type: 'array', default: '—', description: '{ key, name?, color?, dashed? }' },
            { name: 'showDots', type: 'boolean', default: 'true', description: 'Show data point dots (LineChart)' },
            { name: 'curved', type: 'boolean', default: 'true', description: 'Smooth curves vs straight lines' },
            { name: 'stacked', type: 'boolean', default: 'false', description: 'Stack areas (AreaChart)' },
          ]} />
        </div>

        <div className="space-y-4">
          <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">BarChart</p>
          <PropsTable props={[
            { name: 'xKey', type: 'string', default: '—', description: 'Category axis key' },
            { name: 'bars', type: 'array', default: '—', description: '{ key, name?, color?, radius? }' },
            { name: 'horizontal', type: 'boolean', default: 'false', description: 'Horizontal bar layout' },
            { name: 'stacked', type: 'boolean', default: 'false', description: 'Stack bars' },
          ]} />
        </div>

        <div className="space-y-4">
          <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">PieChart / DonutChart</p>
          <PropsTable props={[
            { name: 'data', type: '{ name, value, color? }[]', default: '—', description: 'Slice data' },
            { name: 'donut', type: 'boolean', default: 'false', description: 'Hole in center (PieChart only)' },
            { name: 'showLabel', type: 'boolean', default: 'false', description: 'Show percentage labels' },
            { name: 'showLegend', type: 'boolean', default: 'true', description: 'Show legend' },
          ]} />
        </div>

        <div className="space-y-4">
          <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">RadarChart</p>
          <PropsTable props={[
            { name: 'dataKey', type: 'string', default: '—', description: 'Key for axis labels' },
            { name: 'categories', type: 'string[]', default: '—', description: 'Data keys to plot' },
            { name: 'color', type: 'string | null', default: 'accent', description: 'Fill/stroke color (null = auto multi-color)' },
            { name: 'fillOpacity', type: 'number', default: '0.3', description: 'Area fill opacity' },
          ]} />
        </div>

        <div className="space-y-4">
          <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">GaugeChart</p>
          <PropsTable props={[
            { name: 'value', type: 'number', default: '—', description: 'Current value' },
            { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
            { name: 'color', type: 'string', default: 'accent', description: 'Fill color' },
            { name: 'label', type: 'string', default: '—', description: 'Label below value' },
            { name: 'showValue', type: 'boolean', default: 'true', description: 'Show center value' },
          ]} />
        </div>

        <div className="space-y-4">
          <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">Sparkline</p>
          <PropsTable props={[
            { name: 'data', type: 'number[]', default: '—', description: 'Array of values' },
            { name: 'color', type: 'string', default: 'accent', description: 'Line/bar color' },
            { name: 'type', type: "'line' | 'bar'", default: "'line'", description: 'Chart type' },
            { name: 'height', type: 'number', default: '32', description: 'Chart height' },
            { name: 'width', type: 'number', default: '100%', description: 'Chart width' },
            { name: 'showDot', type: 'boolean', default: 'false', description: 'Show last-value dot' },
          ]} />
        </div>
      </div>

    </ComponentPage>
  );
}
