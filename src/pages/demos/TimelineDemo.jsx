import { ComponentPage, PlaygroundSection, PropsTable, InteractiveDemo } from '../../components/PlaygroundSection.jsx';
import { Timeline, TimelineItem } from 'invin-uix/ui/timeline';
import { Badge } from 'invin-uix/ui/badge';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import {
  CheckCircle, WarningCircle, Envelope, Users, TrendUp, Clock,
  Shield, Lightning, Bell, GitBranch, UploadSimple, DownloadSimple, Gear
} from 'invin-uix/ui/icons';

export default function TimelineDemo() {
  return (
    <ComponentPage
      name="Timeline"
      description="Vertical activity timeline for displaying events, audit logs, and activity feeds in chronological order."
      importCode={`import { Timeline, TimelineItem } from 'invin-uix/ui/timeline';`}
    >

      {/* ─── Interactive Playground ─────────────────────────────── */}
      <InteractiveDemo
        title="Timeline Playground"
        description="Experiment with Timeline configurations."
        controls={[
          { name: 'size', type: 'select', label: 'Size', default: 'md', options: [{ value: 'sm', label: 'Small' }, { value: 'md', label: 'Medium' }, { value: 'lg', label: 'Large' }] },
          { name: 'lineVariant', type: 'select', label: 'Line Variant', default: 'solid', options: [{ value: 'solid', label: 'Solid' }, { value: 'dashed', label: 'Dashed' }] },
        ]}
      >
        {(props) => (
          <Timeline size={props.size} lineVariant={props.lineVariant}>
            <TimelineItem time="2 min ago" title="First event" color="var(--ok)" active />
            <TimelineItem time="1 hour ago" title="Second event" color="var(--accent)" />
            <TimelineItem time="3 hours ago" title="Third event" />
          </Timeline>
        )}
      </InteractiveDemo>
      <Separator variant="bold" />

      {/* ─── Props ──────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">Timeline</p>
        <PropsTable
          props={[
            { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of dot indicators' },
            { name: 'lineVariant', type: "'solid' | 'dashed'", default: "'solid'", description: 'Connector line style' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">TimelineItem</p>
        <PropsTable
          props={[
            { name: 'title', type: 'string', default: '—', description: 'Event title (required)' },
            { name: 'description', type: 'ReactNode', default: '—', description: 'Event details' },
            { name: 'time', type: 'string', default: '—', description: 'Timestamp text' },
            { name: 'icon', type: 'ReactNode', default: '—', description: 'Custom icon (replaces dot)' },
            { name: 'color', type: 'string', default: '—', description: 'Dot/icon color (CSS value)' },
            { name: 'variant', type: "'default' | 'outline' | 'filled'", default: "'default'", description: 'Icon container style' },
            { name: 'active', type: 'boolean', default: 'false', description: 'Highlight as current event' },
          ]}
        />
      </div>

      <Separator />

      {/* ─── Basic ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic timeline"
        description="Simple dot-based timeline with titles and descriptions."
      >
        <Timeline>
          <TimelineItem
            time="2 min ago"
            title="Invoice #INV-001 paid"
            description="Payment of $250.00 received via Stripe"
            color="var(--ok)"
            active
          />
          <TimelineItem
            time="15 min ago"
            title="New message from Carol"
            description="Regarding the Q3 compliance report"
            color="var(--accent)"
          />
          <TimelineItem
            time="1 hour ago"
            title="Payment failed for INV-004"
            description="Card ending in 4242 was declined"
            color="var(--error)"
          />
          <TimelineItem
            time="3 hours ago"
            title="3 new team members joined"
            description="Engineering team onboarding complete"
          />
          <TimelineItem
            time="5 hours ago"
            title="Revenue milestone reached"
            description="Monthly recurring revenue exceeded $50K"
          />
        </Timeline>
      </PlaygroundSection>

      {/* ─── With Icons ───────────────────────────────────────── */}
      <PlaygroundSection
        title="With icons"
        description="Replace dots with contextual icons using the filled variant."
      >
        <Timeline>
          <TimelineItem
            time="Just now"
            title="Deployment successful"
            description="v2.4.0 deployed to production"
            icon={<CheckCircle style={{ width: 16, height: 16 }} />}
            color="var(--ok)"
            variant="filled"
            active
          />
          <TimelineItem
            time="10 min ago"
            title="Build started"
            icon={<GitBranch style={{ width: 16, height: 16 }} />}
            color="var(--accent)"
            variant="filled"
          />
          <TimelineItem
            time="25 min ago"
            title="Security scan completed"
            description="No vulnerabilities found"
            icon={<Shield style={{ width: 16, height: 16 }} />}
            color="var(--ok)"
            variant="filled"
          />
          <TimelineItem
            time="1 hour ago"
            title="Alert triggered"
            description="CPU usage exceeded 90% threshold"
            icon={<WarningCircle style={{ width: 16, height: 16 }} />}
            color="var(--error)"
            variant="filled"
          />
          <TimelineItem
            time="2 hours ago"
            title="New integration connected"
            description="Slack webhook configured"
            icon={<Lightning style={{ width: 16, height: 16 }} />}
            color="var(--degraded)"
            variant="filled"
          />
        </Timeline>
      </PlaygroundSection>

      {/* ─── Outline variant ──────────────────────────────────── */}
      <PlaygroundSection
        title="Outline variant"
        description="Icons with outlined containers — lighter visual weight."
      >
        <Timeline>
          <TimelineItem
            title="File uploaded"
            description="report-q3.pdf (2.4 MB)"
            icon={<UploadSimple style={{ width: 14, height: 14 }} />}
            color="var(--accent)"
            variant="outline"
          />
          <TimelineItem
            title="Report downloaded"
            description="audit-log-2024.csv"
            icon={<DownloadSimple style={{ width: 14, height: 14 }} />}
            color="var(--accent)"
            variant="outline"
          />
          <TimelineItem
            title="Notification sent"
            description="Email alert to admin@company.com"
            icon={<Bell style={{ width: 14, height: 14 }} />}
            color="var(--accent)"
            variant="outline"
          />
        </Timeline>
      </PlaygroundSection>

      {/* ─── With content ─────────────────────────────────────── */}
      <PlaygroundSection
        title="Rich content"
        description="Timeline items can contain arbitrary children — cards, badges, buttons."
      >
        <Timeline size="lg">
          <TimelineItem
            time="Today, 9:00 AM"
            title="Incident #INC-2847 opened"
            icon={<WarningCircle style={{ width: 18, height: 18 }} />}
            color="var(--error)"
            variant="filled"
            active
          >
            <Card className="mt-2">
              <CardContent className="pt-3 pb-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="destructive" size="sm">Critical</Badge>
                  <span className="text-caption text-[var(--muted-foreground)]">Assigned to SOC Team</span>
                </div>
                <p className="text-label text-[var(--muted-foreground)]">Unauthorized access attempt detected from IP 192.168.1.45</p>
                <Button variant="outline" size="sm">View Incident</Button>
              </CardContent>
            </Card>
          </TimelineItem>
          <TimelineItem
            time="Today, 8:30 AM"
            title="Automated scan completed"
            icon={<Shield style={{ width: 18, height: 18 }} />}
            color="var(--ok)"
            variant="filled"
          >
            <div className="flex gap-2 mt-1">
              <Badge variant="success" size="sm">0 Critical</Badge>
              <Badge variant="warning" size="sm">2 Medium</Badge>
              <Badge variant="secondary" size="sm">5 Low</Badge>
            </div>
          </TimelineItem>
          <TimelineItem
            time="Yesterday, 5:00 PM"
            title="Policy updated"
            description="Network firewall rules updated by admin"
            icon={<Gear style={{ width: 18, height: 18 }} />}
            color="var(--accent)"
            variant="filled"
          />
        </Timeline>
      </PlaygroundSection>

      {/* ─── Dashed line ──────────────────────────────────────── */}
      <PlaygroundSection
        title="Dashed line"
        description="Use lineVariant='dashed' for a subtler connector."
      >
        <Timeline lineVariant="dashed" size="sm">
          <TimelineItem title="Order placed" time="Mar 1" color="var(--ok)" />
          <TimelineItem title="Payment confirmed" time="Mar 1" color="var(--ok)" />
          <TimelineItem title="Shipped" time="Mar 3" color="var(--accent)" active />
          <TimelineItem title="Delivered" time="Pending" />
        </Timeline>
      </PlaygroundSection>

      {/* ─── Sizes ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="Three dot/icon sizes: sm, md, lg."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(['sm', 'md', 'lg']).map((size) => (
            <div key={size}>
              <p className="text-[11px] font-[500] text-[var(--muted-foreground-faint)] uppercase mb-3">{size}</p>
              <Timeline size={size}>
                <TimelineItem title="First event" color="var(--accent)" active />
                <TimelineItem title="Second event" />
                <TimelineItem title="Third event" />
              </Timeline>
            </div>
          ))}
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
