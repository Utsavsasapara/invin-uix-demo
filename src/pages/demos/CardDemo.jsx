import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'invin-uix/ui/card';
import { Button } from 'invin-uix/ui/button';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';
import { ArrowUp, ArrowDown, CreditCard, Users, Pulse } from 'invin-uix/ui/icons';

export default function CardDemo() {
  return (
    <ComponentPage
      name="Card"
      description="Container component with gradient background, card-specific tokens (padding, gap, radius, shadow, border), hover lift effect, and selected accent border. Composed from 6 sub-components."
      importCode={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'invin-uix/ui/card';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'hover', type: 'boolean', default: 'false', description: 'Enables hover lift animation and border-colour transition' },
          { name: 'selected', type: 'boolean', default: 'false', description: 'Accent border + glow ring (for active/selected state)' },
          { name: 'className', type: 'string', default: '—', description: 'Additional Tailwind/CSS classes' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Basic ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic Card"
        description="Full composition: Header (Title + Description), Content, Footer."
        code={`<Card>
  <CardHeader>
    <CardTitle>Project Settings</CardTitle>
    <CardDescription>Manage your project configuration.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">Cancel</Button>
    <Button size="sm">Save</Button>
  </CardFooter>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Project Settings</CardTitle>
            <CardDescription>Manage your project configuration.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">
              Update your project name, description, and visibility settings here.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      </PlaygroundSection>

      {/* ─── Hover & Selected ───────────────────────────────────── */}
      <PlaygroundSection
        title="Hover & Selected"
        description="hover adds lift + border transition on cursor enter. selected adds accent border + soft glow. When both applied, hover only translates (doesn't override selected border)."
        code={`<Card hover>
  <CardContent>Default + hover</CardContent>
</Card>

<Card selected>
  <CardContent>Selected (accent border + glow)</CardContent>
</Card>

<Card hover selected>
  <CardContent>Both — hover only lifts, selected stays</CardContent>
</Card>`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <Card hover>
            <CardContent>
              <p className="text-[var(--foreground)] font-[600]">Hover me</p>
              <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)] mt-1">Border transitions on hover</p>
            </CardContent>
          </Card>
          <Card selected>
            <CardContent>
              <p className="text-[var(--foreground)] font-[600]">Selected</p>
              <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)] mt-1">Accent border + glow ring</p>
            </CardContent>
          </Card>
          <Card hover selected>
            <CardContent>
              <p className="text-[var(--foreground)] font-[600]">Both</p>
              <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)] mt-1">Hover lifts, selected stays</p>
            </CardContent>
          </Card>
        </div>
      </PlaygroundSection>

      {/* ─── Minimal ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Minimal (content only)"
        description="No header or footer — just content. Useful as a container wrapper."
        code={`<Card>
  <CardContent>
    Simple content-only card.
  </CardContent>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardContent>
            <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">
              This is a minimal card. No header, no footer — just wrapping content with card styling.
            </p>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns in real applications.</p>
      </div>

      <PlaygroundSection
        title="KPI / Stats grid"
        description="Cards for dashboards showing key metrics with trend indicators."
        code={`<Card>
  <CardContent>
    <div className="flex items-center justify-between">
      <p className="text-caption text-[var(--muted-foreground)]">Revenue</p>
      <CreditCard style={{ width: 14, height: 14 }} />
    </div>
    <p className="text-[var(--foreground)] font-[700] mt-1">$45,231</p>
    <p className="text-caption text-[var(--ok)]">+20.1% from last month</p>
  </CardContent>
</Card>`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {[
            { label: 'Revenue', value: '$45,231', change: '+20.1%', up: true, icon: CreditCard },
            { label: 'Users', value: '+2,350', change: '+12.5%', up: true, icon: Users },
            { label: 'Active Now', value: '573', change: '-2.3%', up: false, icon: Pulse },
          ].map(s => (
            <Card key={s.label} hover>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)]">{s.label}</p>
                  <s.icon style={{ width: 14, height: 14, color: 'var(--muted-foreground)' }} />
                </div>
                <p className="text-[var(--foreground)] font-[700] mt-1">{s.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {s.up ? <ArrowUp style={{ width: 12, height: 12, color: 'var(--ok)' }} /> : <ArrowDown style={{ width: 12, height: 12, color: 'var(--error)' }} />}
                  <span className={`text-[10px] ${s.up ? 'text-[var(--ok)]' : 'text-[var(--error)]'}`}>{s.change}</span>
                  <span className="text-[10px] text-[var(--muted-foreground-faint)]">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Team members"
        description="Card with a list of users, avatars, and role badges."
        code={`<Card>
  <CardHeader>
    <CardTitle>Team</CardTitle>
    <CardDescription>Project members</CardDescription>
  </CardHeader>
  <CardContent>
    {members.map(m => (
      <div className="flex items-center justify-between">
        <Avatar /><span>{m.name}</span>
        <Badge variant="secondary">{m.role}</Badge>
      </div>
    ))}
  </CardContent>
</Card>`}
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Team</CardTitle>
            <CardDescription>Project members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Alice Johnson', role: 'Admin', email: 'alice@co.com' },
                { name: 'Bob Smith', role: 'Editor', email: 'bob@co.com' },
                { name: 'Carol Davis', role: 'Viewer', email: 'carol@co.com' },
              ].map((m, i) => (
                <div key={m.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar size="sm"><AvatarImage src={`https://i.pravatar.cc/100?u=card${i}`} alt={m.name} /><AvatarFallback>{m.name[0]}</AvatarFallback></Avatar>
                    <div>
                      <p className="text-[var(--foreground)] font-[500]">{m.name}</p>
                      <p className="text-[10px] text-[var(--muted-foreground)]">{m.email}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" size="sm">{m.role}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Selectable cards (radio pattern)"
        description="Use selected prop for plan selection, option picking, or multi-select."
        code={`<Card hover selected={plan === 'pro'} onClick={() => setPlan('pro')}>
  <CardContent>Pro Plan — $29/mo</CardContent>
</Card>`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <Card hover>
            <CardContent>
              <p className="text-[var(--foreground)] font-[600]">Free</p>
              <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)] mt-1">5 projects, 1GB storage</p>
              <p className="text-[var(--foreground)] font-[700] mt-2">$0/mo</p>
            </CardContent>
          </Card>
          <Card hover selected>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-[var(--foreground)] font-[600]">Pro</p>
                <Badge variant="default" size="sm">Popular</Badge>
              </div>
              <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)] mt-1">Unlimited projects, 100GB</p>
              <p className="text-[var(--foreground)] font-[700] mt-2">$29/mo</p>
            </CardContent>
          </Card>
          <Card hover>
            <CardContent>
              <p className="text-[var(--foreground)] font-[600]">Enterprise</p>
              <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)] mt-1">Custom limits, SSO, SLA</p>
              <p className="text-[var(--foreground)] font-[700] mt-2">Custom</p>
            </CardContent>
          </Card>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
