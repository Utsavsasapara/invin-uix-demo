import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Badge } from 'invin-uix/ui/badge';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';
import { Bell, Mail, Star, Check, Zap, User, Shield, Clock, Activity } from 'invin-uix/ui/icons';

export default function BadgeDemo() {
  return (
    <ComponentPage
      name="Badge"
      description="Dual-mode component: inline label pills for status/tags AND notification count/dot wrapper. Supports 7 colour variants, 3 sizes, status dots with animation, custom colours, overflow count, and offset positioning."
      importCode={`import { Badge } from 'invin-uix/ui/badge';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'variant', type: "'default' | 'secondary' | 'destructive' | 'success' | 'warning' | 'info' | 'outline'", default: "'default'", description: 'Label mode colour variant' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of badge label or notification counter' },
          { name: 'count', type: 'number | ReactNode', default: '—', description: 'Notification count (triggers wrapper mode)' },
          { name: 'dot', type: 'boolean', default: 'false', description: 'Show dot indicator instead of count' },
          { name: 'overflowCount', type: 'number', default: '99', description: 'Max number before showing "99+"' },
          { name: 'showZero', type: 'boolean', default: 'false', description: 'Show badge when count is 0' },
          { name: 'color', type: 'string', default: '—', description: 'Custom CSS colour for dot/counter background' },
          { name: 'status', type: "'default' | 'success' | 'processing' | 'error' | 'warning'", default: '—', description: 'Status dot mode (standalone, no children)' },
          { name: 'text', type: 'string', default: '—', description: 'Text label next to status dot' },
          { name: 'offset', type: '[right, top]', default: '—', description: 'Pixel offset for counter/dot position' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'In label mode: text content. In wrapper mode: element to badge' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Label Variants ─────────────────────────────────────── */}
      <PlaygroundSection
        title="Label Variants"
        description="Inline badge labels for status tags, categories, and metadata. Default uses the accent colour."
        code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Critical</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="outline">Draft</Badge>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Critical</Badge>
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Draft</Badge>
        </div>
      </PlaygroundSection>

      {/* ─── Label Sizes ────────────────────────────────────────── */}
      <PlaygroundSection
        title="Label Sizes"
        description="Three sizes: sm (10px), md (11px, default), lg (12px)."
        code={`<Badge variant="info" size="sm">Small</Badge>
<Badge variant="info" size="md">Medium</Badge>
<Badge variant="info" size="lg">Large</Badge>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="info" size="sm">Small</Badge>
          <Badge variant="info" size="md">Medium</Badge>
          <Badge variant="info" size="lg">Large</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <Badge variant="success" size="sm">v1.2.0</Badge>
          <Badge variant="outline" size="sm">React 19</Badge>
          <Badge variant="secondary" size="sm">Tailwind v4</Badge>
        </div>
      </PlaygroundSection>

      <Separator />

      {/* ─── Notification Count ─────────────────────────────────── */}
      <PlaygroundSection
        title="Notification Count"
        description="Wrap any element (button, avatar, icon) to show a count bubble in the top-right corner."
        code={`<Badge count={5}>
  <Button size="icon" variant="outline">
    <Bell style={{ width: 16, height: 16 }} />
  </Button>
</Badge>

<Badge count={12}>
  <Avatar size="sm"><AvatarFallback>U</AvatarFallback></Avatar>
</Badge>

// Overflow (shows "99+")
<Badge count={120} overflowCount={99}>
  <Button size="icon" variant="outline">
    <Mail style={{ width: 16, height: 16 }} />
  </Button>
</Badge>

// Show when count is 0
<Badge count={0} showZero>
  <Button size="icon" variant="outline">
    <Bell style={{ width: 16, height: 16 }} />
  </Button>
</Badge>`}
      >
        <div className="flex flex-wrap items-center gap-5">
          <Badge count={5}>
            <Button size="icon" variant="outline" aria-label="Notifications"><Bell style={{ width: 16, height: 16 }} /></Button>
          </Badge>
          <Badge count={12}>
            <Button size="icon" variant="outline" aria-label="Messages"><Mail style={{ width: 16, height: 16 }} /></Button>
          </Badge>
          <Badge count={120} overflowCount={99}>
            <Avatar size="md"><AvatarImage src="https://i.pravatar.cc/100?u=badge3" /><AvatarFallback>U</AvatarFallback></Avatar>
          </Badge>
          <Badge count={0} showZero>
            <Button size="icon" variant="outline" aria-label="Notifications"><Bell style={{ width: 16, height: 16 }} /></Button>
          </Badge>
        </div>
      </PlaygroundSection>

      {/* ─── Counter Size ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Counter Size"
        description="sm (14px height, 9px font) vs md (18px height, 11px font) for the notification bubble."
        code={`<Badge count={5} size="sm">
  <Button size="icon-sm" variant="outline"><Bell /></Button>
</Badge>

<Badge count={5} size="md">
  <Button size="icon" variant="outline"><Bell /></Button>
</Badge>`}
      >
        <div className="flex flex-wrap items-center gap-5">
          <Badge count={5} size="sm">
            <Button size="icon-sm" variant="outline" aria-label="Notifications"><Bell style={{ width: 14, height: 14 }} /></Button>
          </Badge>
          <Badge count={5} size="md">
            <Button size="icon" variant="outline" aria-label="Notifications"><Bell style={{ width: 16, height: 16 }} /></Button>
          </Badge>
          <Badge count={25} size="sm">
            <Avatar size="sm"><AvatarFallback>A</AvatarFallback></Avatar>
          </Badge>
          <Badge count={25} size="md">
            <Avatar size="sm"><AvatarFallback>B</AvatarFallback></Avatar>
          </Badge>
        </div>
      </PlaygroundSection>

      <Separator />

      {/* ─── Dot Mode ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Dot Mode"
        description="Minimal dot indicator without a number. Shows a 7px circle in the top-right corner."
        code={`<Badge dot>
  <Button size="icon" variant="outline"><Bell /></Button>
</Badge>

<Badge dot>
  <Avatar size="sm"><AvatarFallback>U</AvatarFallback></Avatar>
</Badge>

// Custom dot colour
<Badge dot color="#22c55e">
  <Avatar size="sm"><AvatarFallback>U</AvatarFallback></Avatar>
</Badge>`}
      >
        <div className="flex flex-wrap items-center gap-5">
          <Badge dot>
            <Button size="icon" variant="outline" aria-label="Notifications"><Bell style={{ width: 16, height: 16 }} /></Button>
          </Badge>
          <Badge dot>
            <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=dot1" /><AvatarFallback>U</AvatarFallback></Avatar>
          </Badge>
          <Badge dot color="#22c55e">
            <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=dot2" /><AvatarFallback>U</AvatarFallback></Avatar>
          </Badge>
          <Badge dot color="#f59e0b">
            <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=dot3" /><AvatarFallback>U</AvatarFallback></Avatar>
          </Badge>
        </div>
      </PlaygroundSection>

      {/* ─── Custom Colors ──────────────────────────────────────── */}
      <PlaygroundSection
        title="Custom Colours"
        description="Override the default red counter/dot colour with any CSS colour value."
        code={`<Badge count={8} color="#8b5cf6">...</Badge>
<Badge count={3} color="var(--invin-ok)">...</Badge>
<Badge count={2} color="var(--invin-warn)">...</Badge>
<Badge count={1} color="var(--invin-accent)">...</Badge>`}
      >
        <div className="flex flex-wrap items-center gap-5">
          <Badge count={8} color="#8b5cf6">
            <Button size="icon" variant="outline" aria-label="Stars"><Star style={{ width: 16, height: 16 }} /></Button>
          </Badge>
          <Badge count={3} color="var(--invin-ok)">
            <Button size="icon" variant="outline" aria-label="Done"><Check style={{ width: 16, height: 16 }} /></Button>
          </Badge>
          <Badge count={2} color="var(--invin-warn)">
            <Button size="icon" variant="outline" aria-label="Alerts"><Zap style={{ width: 16, height: 16 }} /></Button>
          </Badge>
          <Badge count={1} color="var(--invin-accent)">
            <Button size="icon" variant="outline" aria-label="Activity"><Activity style={{ width: 16, height: 16 }} /></Button>
          </Badge>
        </div>
      </PlaygroundSection>

      <Separator />

      {/* ─── Status Dot Mode ────────────────────────────────────── */}
      <PlaygroundSection
        title="Status Dot Mode"
        description="Standalone status indicator with animated dot and text. No children needed. 'processing' status has a pulse animation."
        code={`<Badge status="success" text="Active" />
<Badge status="processing" text="Syncing..." />
<Badge status="error" text="Failed" />
<Badge status="warning" text="Pending" />
<Badge status="default" text="Idle" />`}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Badge status="success" text="Active" />
          <Badge status="processing" text="Syncing..." />
          <Badge status="error" text="Failed" />
          <Badge status="warning" text="Pending" />
          <Badge status="default" text="Idle" />
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Real-world Use Cases ───────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Common patterns you'll use in your project.</p>
      </div>

      <PlaygroundSection
        title="Notification header"
        description="Topbar notification bell with unread count."
        code={`<div className="flex items-center gap-2">
  <Badge count={3} size="sm">
    <Button variant="ghost" size="icon-sm">
      <Bell style={{ width: 16, height: 16 }} />
    </Button>
  </Badge>
</div>`}
      >
        <div className="flex items-center gap-1 p-1 rounded-[8px] border border-[var(--invin-border)] w-fit">
          <Badge count={3} size="sm">
            <Button variant="ghost" size="icon-sm" aria-label="Notifications"><Bell style={{ width: 16, height: 16 }} /></Button>
          </Badge>
          <Badge count={7} size="sm" color="var(--invin-accent)">
            <Button variant="ghost" size="icon-sm" aria-label="Messages"><Mail style={{ width: 16, height: 16 }} /></Button>
          </Badge>
          <Button variant="ghost" size="icon-sm" aria-label="User"><User style={{ width: 16, height: 16 }} /></Button>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="User list with status"
        description="Avatar with online/offline dot indicator."
        code={`// Online user
<Badge dot color="#22c55e">
  <Avatar size="sm"><AvatarImage src="..." /><AvatarFallback>SC</AvatarFallback></Avatar>
</Badge>

// Away
<Badge dot color="#f59e0b">
  <Avatar size="sm"><AvatarFallback>JR</AvatarFallback></Avatar>
</Badge>

// Offline
<Badge dot color="#9ca3af">
  <Avatar size="sm"><AvatarFallback>LP</AvatarFallback></Avatar>
</Badge>`}
      >
        <div className="flex flex-wrap items-center gap-4">
          {[
            { name: 'Sarah C.', color: '#22c55e', img: 'u=team10' },
            { name: 'John R.', color: '#22c55e', img: 'u=team11' },
            { name: 'Lisa P.', color: '#f59e0b', img: 'u=team12' },
            { name: 'Mike C.', color: '#9ca3af', img: 'u=team13' },
          ].map(u => (
            <div key={u.name} className="flex items-center gap-2">
              <Badge dot color={u.color}>
                <Avatar size="sm"><AvatarImage src={`https://i.pravatar.cc/100?${u.img}`} /><AvatarFallback>{u.name[0]}</AvatarFallback></Avatar>
              </Badge>
              <span className="text-[length:var(--invin-text-body)]">{u.name}</span>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Status table column"
        description="Status dots in a data list or table row."
        code={`<Badge status="success" text="Running" />
<Badge status="processing" text="Deploying..." />
<Badge status="error" text="Crashed" />
<Badge status="warning" text="Degraded" />`}
      >
        <Card>
          <CardContent className="py-3">
            <div className="space-y-3">
              {[
                { name: 'API Gateway', env: 'Production', status: 'success', text: 'Running' },
                { name: 'Auth Service', env: 'Staging', status: 'processing', text: 'Deploying...' },
                { name: 'Worker Queue', env: 'Production', status: 'error', text: 'Crashed' },
                { name: 'CDN Edge', env: 'Production', status: 'warning', text: 'Degraded' },
              ].map(s => (
                <div key={s.name} className="flex items-center justify-between py-1">
                  <div>
                    <p className="text-[length:var(--invin-text-body)] font-[500]">{s.name}</p>
                    <p className="text-[10px] text-[var(--invin-text-faint)]">{s.env}</p>
                  </div>
                  <Badge status={s.status} text={s.text} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Tag labels in cards"
        description="Categorize content with badge labels."
        code={`<Badge variant="info" size="sm">Security</Badge>
<Badge variant="success" size="sm">Resolved</Badge>
<Badge variant="outline" size="sm">v2.1</Badge>`}
      >
        <Card hover>
          <CardContent className="py-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="info" size="sm">Security</Badge>
              <Badge variant="success" size="sm">Resolved</Badge>
              <Badge variant="outline" size="sm">v2.1</Badge>
            </div>
            <p className="text-[length:var(--invin-text-card-title)] font-[600]">Fix authentication bypass vulnerability</p>
            <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)] mt-1">Patched JWT validation to prevent token replay attacks on the auth service.</p>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Feature flags / permissions"
        description="Combine variants to show feature status and access level."
        code={`<div className="flex items-center gap-2">
  <Shield style={{ width: 14, height: 14 }} />
  <span>Role-Based Access</span>
  <Badge variant="success" size="sm">Enabled</Badge>
</div>`}
      >
        <Card>
          <CardContent className="py-3">
            <div className="space-y-3">
              {[
                { icon: Shield, label: 'Role-Based Access', badge: 'success', text: 'Enabled' },
                { icon: Activity, label: 'Real-time Sync', badge: 'warning', text: 'Beta' },
                { icon: Zap, label: 'AI Copilot', badge: 'info', text: 'Preview' },
                { icon: Clock, label: 'Scheduled Reports', badge: 'secondary', text: 'Disabled' },
              ].map(f => (
                <div key={f.label} className="flex items-center gap-2">
                  <f.icon style={{ width: 14, height: 14, color: 'var(--invin-text-dim)' }} />
                  <span className="text-[length:var(--invin-text-body)] flex-1">{f.label}</span>
                  <Badge variant={f.badge} size="sm">{f.text}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
