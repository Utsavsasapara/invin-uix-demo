import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Badge, NotificationBadge, StatusBadge } from 'invin-uix/ui/badge';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';
import { Bell, Mail, Star, Check, Zap, User, Shield, Clock, Activity } from 'invin-uix/ui/icons';

export default function BadgeDemo() {
  return (
    <ComponentPage
      name="Badge"
      description="Three focused components: Badge (inline label pill), NotificationBadge (count/dot on an element), and StatusBadge (status dot + text). Badge also accepts count/dot/status for back-compat and delegates automatically."
      importCode={`import { Badge, NotificationBadge, StatusBadge } from 'invin-uix/ui/badge';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">Badge (label pill)</p>
        <PropsTable
          props={[
            { name: 'variant', type: "'default' | 'secondary' | 'destructive' | 'success' | 'warning' | 'info' | 'outline'", default: "'default'", description: 'Colour variant' },
            { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'sm (11px, tight), md (12px), lg (12px, roomy)' },
            { name: 'children', type: 'ReactNode', default: '—', description: 'Label text' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">NotificationBadge (count / dot)</p>
        <PropsTable
          props={[
            { name: 'count', type: 'number | ReactNode', default: '—', description: 'Count bubble value' },
            { name: 'dot', type: 'boolean', default: 'false', description: 'Show a dot instead of a count' },
            { name: 'overflowCount', type: 'number', default: '99', description: 'Max before showing "99+"' },
            { name: 'showZero', type: 'boolean', default: 'false', description: 'Show even when count is 0' },
            { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Bubble size — 14px / 18px' },
            { name: 'color', type: 'string', default: '—', description: 'Custom bubble/dot colour' },
            { name: 'offset', type: '[right, top]', default: '—', description: 'Pixel offset for the bubble/dot' },
            { name: 'children', type: 'ReactNode', default: '—', description: 'Element to badge' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">StatusBadge (dot + text)</p>
        <PropsTable
          props={[
            { name: 'status', type: "'default' | 'success' | 'processing' | 'error' | 'warning'", default: '—', description: 'Drives dot colour; processing pulses' },
            { name: 'text', type: 'string', default: '—', description: 'Text next to the dot' },
            { name: 'color', type: 'string', default: '—', description: 'Override the dot colour' },
          ]}
        />
      </div>

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
        description="Three sizes, distinct by font size and padding: sm (11px, tight), md (12px, default), lg (12px, roomy)."
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
        description="NotificationBadge wraps any element (button, avatar, icon) to show a count bubble in the top-right corner."
        code={`<NotificationBadge count={5}>
  <Button size="icon" variant="outline"><Bell /></Button>
</NotificationBadge>

// Overflow (shows "99+")
<NotificationBadge count={120} overflowCount={99}>
  <Avatar size="md"><AvatarFallback>U</AvatarFallback></Avatar>
</NotificationBadge>

// Show when count is 0
<NotificationBadge count={0} showZero>
  <Button size="icon" variant="outline"><Bell /></Button>
</NotificationBadge>`}
      >
        <div className="flex flex-wrap items-center gap-5">
          <NotificationBadge count={5}>
            <Button size="icon" variant="outline" aria-label="Notifications"><Bell style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
          <NotificationBadge count={12}>
            <Button size="icon" variant="outline" aria-label="Messages"><Mail style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
          <NotificationBadge count={120} overflowCount={99}>
            <Avatar size="md"><AvatarImage src="https://i.pravatar.cc/100?u=badge3" /><AvatarFallback>U</AvatarFallback></Avatar>
          </NotificationBadge>
          <NotificationBadge count={0} showZero>
            <Button size="icon" variant="outline" aria-label="Notifications"><Bell style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
        </div>
      </PlaygroundSection>

      {/* ─── Counter Size ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Counter Size"
        description="sm (14px bubble) vs md (18px bubble, default) for the notification counter. Both use 11px text."
        code={`<NotificationBadge count={5} size="sm">
  <Button size="icon-sm" variant="outline"><Bell /></Button>
</NotificationBadge>

<NotificationBadge count={5} size="md">
  <Button size="icon" variant="outline"><Bell /></Button>
</NotificationBadge>`}
      >
        <div className="flex flex-wrap items-center gap-5">
          <NotificationBadge count={5} size="sm">
            <Button size="icon-sm" variant="outline" aria-label="Notifications"><Bell style={{ width: 14, height: 14 }} /></Button>
          </NotificationBadge>
          <NotificationBadge count={5} size="md">
            <Button size="icon" variant="outline" aria-label="Notifications"><Bell style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
          <NotificationBadge count={25} size="sm">
            <Avatar size="sm"><AvatarFallback>A</AvatarFallback></Avatar>
          </NotificationBadge>
          <NotificationBadge count={25} size="md">
            <Avatar size="sm"><AvatarFallback>B</AvatarFallback></Avatar>
          </NotificationBadge>
        </div>
      </PlaygroundSection>

      <Separator />

      {/* ─── Dot Mode ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Dot Mode"
        description="Minimal dot indicator without a number. Shows a 7px circle in the top-right corner."
        code={`<NotificationBadge dot>
  <Button size="icon" variant="outline"><Bell /></Button>
</NotificationBadge>

// Custom dot colour
<NotificationBadge dot color="var(--invin-ok)">
  <Avatar size="sm"><AvatarFallback>U</AvatarFallback></Avatar>
</NotificationBadge>`}
      >
        <div className="flex flex-wrap items-center gap-5">
          <NotificationBadge dot>
            <Button size="icon" variant="outline" aria-label="Notifications"><Bell style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
          <NotificationBadge dot>
            <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=dot1" /><AvatarFallback>U</AvatarFallback></Avatar>
          </NotificationBadge>
          <NotificationBadge dot color="var(--invin-ok)">
            <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=dot2" /><AvatarFallback>U</AvatarFallback></Avatar>
          </NotificationBadge>
          <NotificationBadge dot color="var(--invin-warn)">
            <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=dot3" /><AvatarFallback>U</AvatarFallback></Avatar>
          </NotificationBadge>
        </div>
      </PlaygroundSection>

      {/* ─── Custom Colors ──────────────────────────────────────── */}
      <PlaygroundSection
        title="Custom Colours"
        description="Override the default red counter/dot colour with any CSS colour value."
        code={`<NotificationBadge count={3} color="var(--invin-ok)">...</NotificationBadge>
<NotificationBadge count={2} color="var(--invin-warn)">...</NotificationBadge>
<NotificationBadge count={1} color="var(--invin-accent)">...</NotificationBadge>`}
      >
        <div className="flex flex-wrap items-center gap-5">
          <NotificationBadge count={8} color="var(--invin-purple)">
            <Button size="icon" variant="outline" aria-label="Stars"><Star style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
          <NotificationBadge count={3} color="var(--invin-ok)">
            <Button size="icon" variant="outline" aria-label="Done"><Check style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
          <NotificationBadge count={2} color="var(--invin-warn)">
            <Button size="icon" variant="outline" aria-label="Alerts"><Zap style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
          <NotificationBadge count={1} color="var(--invin-accent)">
            <Button size="icon" variant="outline" aria-label="Activity"><Activity style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
        </div>
      </PlaygroundSection>

      <Separator />

      {/* ─── Status Dot Mode ────────────────────────────────────── */}
      <PlaygroundSection
        title="Status Dot (StatusBadge)"
        description="Standalone status indicator with an animated dot and text. 'processing' pulses."
        code={`<StatusBadge status="success" text="Active" />
<StatusBadge status="processing" text="Syncing..." />
<StatusBadge status="error" text="Failed" />
<StatusBadge status="warning" text="Pending" />
<StatusBadge status="default" text="Idle" />`}
      >
        <div className="flex flex-wrap items-center gap-4">
          <StatusBadge status="success" text="Active" />
          <StatusBadge status="processing" text="Syncing..." />
          <StatusBadge status="error" text="Failed" />
          <StatusBadge status="warning" text="Pending" />
          <StatusBadge status="default" text="Idle" />
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
        code={`<NotificationBadge count={3} size="sm">
  <Button variant="ghost" size="icon-sm"><Bell /></Button>
</NotificationBadge>`}
      >
        <div className="flex items-center gap-1 p-1 rounded-[8px] border border-[var(--invin-border)] w-fit">
          <NotificationBadge count={3} size="sm">
            <Button variant="ghost" size="icon-sm" aria-label="Notifications"><Bell style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
          <NotificationBadge count={7} size="sm" color="var(--invin-accent)">
            <Button variant="ghost" size="icon-sm" aria-label="Messages"><Mail style={{ width: 16, height: 16 }} /></Button>
          </NotificationBadge>
          <Button variant="ghost" size="icon-sm" aria-label="User"><User style={{ width: 16, height: 16 }} /></Button>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="User list with status"
        description="Avatar with online/offline dot indicator."
        code={`// Online / away / offline via token colours
<NotificationBadge dot color="var(--invin-ok)">
  <Avatar size="sm"><AvatarFallback>SC</AvatarFallback></Avatar>
</NotificationBadge>

<NotificationBadge dot color="var(--invin-warn)">
  <Avatar size="sm"><AvatarFallback>LP</AvatarFallback></Avatar>
</NotificationBadge>`}
      >
        <div className="flex flex-wrap items-center gap-4">
          {[
            { name: 'Sarah C.', color: 'var(--invin-ok)', img: 'u=team10' },
            { name: 'John R.', color: 'var(--invin-ok)', img: 'u=team11' },
            { name: 'Lisa P.', color: 'var(--invin-warn)', img: 'u=team12' },
            { name: 'Mike C.', color: 'var(--invin-text-faint)', img: 'u=team13' },
          ].map(u => (
            <div key={u.name} className="flex items-center gap-2">
              <NotificationBadge dot color={u.color}>
                <Avatar size="sm"><AvatarImage src={`https://i.pravatar.cc/100?${u.img}`} /><AvatarFallback>{u.name[0]}</AvatarFallback></Avatar>
              </NotificationBadge>
              <span className="text-[length:var(--invin-text-body)]">{u.name}</span>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Status table column"
        description="Status dots in a data list or table row."
        code={`<StatusBadge status="success" text="Running" />
<StatusBadge status="processing" text="Deploying..." />
<StatusBadge status="error" text="Crashed" />
<StatusBadge status="warning" text="Degraded" />`}
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
                  <StatusBadge status={s.status} text={s.text} />
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
