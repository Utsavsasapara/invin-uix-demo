import { ComponentPage, PlaygroundSection } from '../../../components/PlaygroundSection.jsx';
import { Sparkline } from 'invin-uix/ui/chart';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from 'invin-uix/ui/table';
import { Separator } from 'invin-uix/ui/separator';

export default function SparklineDemo() {
  return (
    <ComponentPage
      name="Sparkline"
      description="Tiny inline charts for KPI cards, table cells, or any space-constrained context. Supports line and bar types."
      importCode={`import { Sparkline } from 'invin-uix/ui/chart';`}
    >

      <PlaygroundSection
        title="Step 1 — Basic Line Sparkline"
        description="Pass a simple number array. Renders an inline trend."
        code={`<Sparkline data={[3, 7, 4, 8, 2, 9, 5]} height={28} />`}
      >
        <div className="max-w-[200px]">
          <Sparkline data={[3, 7, 4, 8, 2, 9, 5]} height={32} />
        </div>
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 2 — Bar Type"
        description="Set type='bar' for discrete value visualization."
        code={`<Sparkline data={[1, 3, 2, 5, 4, 6, 3]} height={28} type="bar" color="var(--error)" />`}
      >
        <div className="max-w-[200px]">
          <Sparkline data={[1, 3, 2, 5, 4, 6, 3]} height={32} type="bar" color="var(--error)" />
        </div>
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 3 — In KPI Cards"
        description="Embed sparklines in metric cards to show trend context."
        code={`<Card>
  <CardContent>
    <p className="text-caption text-dim">Requests</p>
    <p className="text-display font-bold">13.2K</p>
    <Sparkline data={[4,5,3,7,6,8,5,9]} height={24} color="var(--ok)" />
  </CardContent>
</Card>`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-[var(--muted-foreground)]">Requests</span>
                <Badge variant="success" size="sm">+12%</Badge>
              </div>
              <p className="text-[var(--foreground)] font-[700] mb-2">13.2K</p>
              <Sparkline data={[4,5,3,7,6,8,5,9,7,8]} height={24} color="var(--ok)" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-[var(--muted-foreground)]">Errors</span>
                <Badge variant="destructive" size="sm">+3</Badge>
              </div>
              <p className="text-[var(--foreground)] font-[700] mb-2">24</p>
              <Sparkline data={[1,0,2,1,3,0,1,2,4,3]} height={24} color="var(--error)" type="bar" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[12px] text-[var(--muted-foreground)]">CPU</span>
                <Badge variant="warning" size="sm">67%</Badge>
              </div>
              <p className="text-[var(--foreground)] font-[700] mb-2">67%</p>
              <Sparkline data={[45,52,48,67,72,65,58,70]} height={24} color="var(--degraded)" />
            </CardContent>
          </Card>
        </div>
      </PlaygroundSection>

      <Separator />

      <PlaygroundSection
        title="Step 4 — In Table Cells"
        description="Inline sparklines with fixed width inside tables."
        code={`<Sparkline data={svc.trend} height={20} width={80} color="var(--ok)" />`}
      >
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Trend (7d)</TableHead>
                  <TableHead className="text-right">Req/s</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: 'API Gateway', ok: true, data: [4,5,3,7,6,8,5], rps: '142' },
                  { name: 'Auth Service', ok: true, data: [2,3,2,4,3,3,2], rps: '89' },
                  { name: 'Log Collector', ok: false, data: [6,8,9,7,10,12,11], rps: '451' },
                ].map(svc => (
                  <TableRow key={svc.name}>
                    <TableCell className="font-[500]">{svc.name}</TableCell>
                    <TableCell><Badge variant={svc.ok ? 'success' : 'warning'} size="sm">{svc.ok ? 'Healthy' : 'Warning'}</Badge></TableCell>
                    <TableCell><Sparkline data={svc.data} height={20} width={80} color={svc.ok ? 'var(--ok)' : 'var(--degraded)'} /></TableCell>
                    <TableCell className="text-right font-mono text-[12px]">{svc.rps}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
