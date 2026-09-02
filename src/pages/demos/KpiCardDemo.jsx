import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { KpiCard } from 'invin-uix/ui/kpi-card';
import { Progress } from 'invin-uix/ui/progress';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import {
  Users, CreditCard, Pulse, WarningCircle, TrendUp,
  Shield, Lightning, Clock,
} from 'invin-uix/ui/icons';

export default function KpiCardDemo() {
  return (
    <ComponentPage
      name="KPI Card"
      description="Key Performance Indicator cards for dashboards. Displays a metric label, big number value, change indicator, and optional children (sparklines, progress bars)."
      importCode={`import { KpiCard } from 'invin-uix/ui/kpi-card';`}
    >

      <PropsTable
        props={[
          { name: 'label', type: 'string', default: '—', description: 'Metric label (e.g. "Total Users")' },
          { name: 'value', type: 'string', default: '—', description: 'Big number display value' },
          { name: 'change', type: 'string', default: '—', description: 'Change text (e.g. "+12.5%")' },
          { name: 'up', type: 'boolean', default: '—', description: 'Is the change positive?' },
          { name: 'icon', type: 'ReactNode', default: '—', description: 'Icon in top-right corner' },
          { name: 'variant', type: "'default' | 'bordered' | 'filled'", default: "'default'", description: 'Visual style' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Padding and border radius' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Extra content below value (progress bars, sparklines)' },
        ]}
      />

      <Separator />

      {/* ─── Basic grid ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic KPI grid"
        description="Standard dashboard stat cards with change indicators."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard label="Total Revenue" value="$45,231" change="+20.1%" up icon={<CreditCard style={{ width: 16, height: 16 }} />} />
          <KpiCard label="Subscriptions" value="+2,350" change="+180.1%" up icon={<Users style={{ width: 16, height: 16 }} />} />
          <KpiCard label="Active Now" value="573" change="+19%" up icon={<Pulse style={{ width: 16, height: 16 }} />} />
          <KpiCard label="Incidents" value="12" change="-3" up={false} icon={<WarningCircle style={{ width: 16, height: 16 }} />} />
        </div>
      </PlaygroundSection>

      {/* ─── With progress children ──────────────────────────── */}
      <PlaygroundSection
        title="With children (progress bar)"
        description="Add extra content below the value — progress bars, sparklines, or badges."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <KpiCard label="Storage Used" value="7.2 GB" change="72%" icon={<Shield style={{ width: 16, height: 16 }} />}>
            <Progress value={72} size="sm" />
          </KpiCard>
          <KpiCard label="API Calls" value="12,847" change="+5.2%" up icon={<Lightning style={{ width: 16, height: 16 }} />}>
            <Progress value={48} size="sm" />
          </KpiCard>
          <KpiCard label="Uptime" value="99.98%" icon={<Clock style={{ width: 16, height: 16 }} />}>
            <Progress value={99.98} size="sm" variant="gradient" />
          </KpiCard>
        </div>
      </PlaygroundSection>

      {/* ─── Variants ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Variants"
        description="Three visual styles: default, bordered, and filled."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <KpiCard label="Default" value="1,234" variant="default" change="+8%" up icon={<TrendUp style={{ width: 16, height: 16 }} />} />
          <KpiCard label="Bordered" value="5,678" variant="bordered" change="+12%" up icon={<TrendUp style={{ width: 16, height: 16 }} />} />
          <KpiCard label="Filled" value="9,012" variant="filled" change="-2%" up={false} icon={<TrendUp style={{ width: 16, height: 16 }} />} />
        </div>
      </PlaygroundSection>

      {/* ─── Sizes ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="Three size presets affecting padding and radius."
      >
        <div className="space-y-4">
          <div>
            <p className="text-[11px] font-[500] text-[var(--muted-foreground-faint)] uppercase mb-2">Small</p>
            <KpiCard label="Users Online" value="42" size="sm" icon={<Users style={{ width: 14, height: 14 }} />} />
          </div>
          <div>
            <p className="text-[11px] font-[500] text-[var(--muted-foreground-faint)] uppercase mb-2">Medium (default)</p>
            <KpiCard label="Users Online" value="42" size="md" change="+3" up icon={<Users style={{ width: 16, height: 16 }} />} />
          </div>
          <div>
            <p className="text-[11px] font-[500] text-[var(--muted-foreground-faint)] uppercase mb-2">Large</p>
            <KpiCard label="Users Online" value="42" size="lg" change="+3" up icon={<Users style={{ width: 18, height: 18 }} />} />
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── SOC use case ─────────────────────────────────────── */}
      <PlaygroundSection
        title="SOC dashboard use case"
        description="Real-world security operations metrics."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard label="OPEN INCIDENTS" value="7" change="-2 from yesterday" up={false} icon={<WarningCircle style={{ width: 16, height: 16 }} />} />
          <KpiCard label="MTTR" value="4.2h" change="-18%" up icon={<Clock style={{ width: 16, height: 16 }} />} />
          <KpiCard label="BLOCKED THREATS" value="1,247" change="+156 today" up icon={<Shield style={{ width: 16, height: 16 }} />} />
          <KpiCard label="COMPLIANCE" value="94%" icon={<TrendUp style={{ width: 16, height: 16 }} />}>
            <Progress value={94} size="sm" variant="gradient" />
          </KpiCard>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
