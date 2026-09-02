import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'invin-uix/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from 'invin-uix/ui/card';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';
import { Button } from 'invin-uix/ui/button';
import { Separator } from 'invin-uix/ui/separator';

export default function TabsDemo() {
  return (
    <ComponentPage
      name="Tabs"
      description="Tabbed interface built on Radix UI. Three style variants (underline, pill, enclosed), size options, and keyboard navigation (arrow keys)."
      importCode={`import { Tabs, TabsList, TabsTrigger, TabsContent } from 'invin-uix/ui/tabs';`}
    >
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">TabsList</p>
        <PropsTable
          props={[
            { name: 'variant', type: "'default' | 'pill' | 'enclosed'", default: "'default'", description: 'default = underline, pill = rounded capsule bg, enclosed = bordered container' },
            { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height of the tabs bar (32 / 38 / 44 px)' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">TabsTrigger</p>
        <PropsTable
          props={[
            { name: 'value', type: 'string (required)', default: '—', description: 'Unique tab identifier' },
            { name: 'variant', type: "'default' | 'pill' | 'enclosed'", default: '—', description: 'Overrides list variant (usually inherited)' },
            { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the tab' },
          ]}
        />
      </div>

      <Separator variant="bold" />

      {/* ─── Default (underline) ────────────────────────────────── */}
      <PlaygroundSection
        title="Default (underline)"
        description="Accent bottom border on active tab. Full-width border line below the tab bar."
        code={`<Tabs defaultValue="workflows">
  <TabsList>
    <TabsTrigger value="workflows">Workflows</TabsTrigger>
    <TabsTrigger value="history">Execution History</TabsTrigger>
  </TabsList>
  <TabsContent value="workflows">...</TabsContent>
  <TabsContent value="history">...</TabsContent>
</Tabs>`}
      >
        <div className="w-full">
          <Tabs defaultValue="workflows">
            <TabsList>
              <TabsTrigger value="workflows">Workflows</TabsTrigger>
              <TabsTrigger value="history">Execution History</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>
            <TabsContent value="workflows">
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-4">Active workflows and automation pipelines.</p>
            </TabsContent>
            <TabsContent value="history">
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-4">Past execution logs and results.</p>
            </TabsContent>
            <TabsContent value="templates">
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-4">Pre-built workflow templates.</p>
            </TabsContent>
          </Tabs>
        </div>
      </PlaygroundSection>

      {/* ─── Pill ───────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Pill"
        description="Rounded capsule container with accent-soft fill on active. Matches the sample UI."
        code={`<Tabs defaultValue="workflows">
  <TabsList variant="pill">
    <TabsTrigger variant="pill" value="workflows">Workflows</TabsTrigger>
    <TabsTrigger variant="pill" value="history">Execution History</TabsTrigger>
  </TabsList>
  <TabsContent value="workflows">...</TabsContent>
</Tabs>`}
      >
        <div className="w-full">
          <Tabs defaultValue="workflows">
            <TabsList variant="pill">
              <TabsTrigger variant="pill" value="workflows">Workflows</TabsTrigger>
              <TabsTrigger variant="pill" value="history">Execution History</TabsTrigger>
            </TabsList>
            <TabsContent value="workflows">
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-4">Active workflows listed here.</p>
            </TabsContent>
            <TabsContent value="history">
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-4">Execution history logs.</p>
            </TabsContent>
          </Tabs>
        </div>
      </PlaygroundSection>

      {/* ─── Enclosed ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Enclosed"
        description="Bordered container with filled active tab. Good for card headers."
        code={`<Tabs defaultValue="account">
  <TabsList variant="enclosed">
    <TabsTrigger variant="enclosed" value="account">Account</TabsTrigger>
    <TabsTrigger variant="enclosed" value="password">Password</TabsTrigger>
    <TabsTrigger variant="enclosed" value="team">Team</TabsTrigger>
  </TabsList>
  <TabsContent value="account">...</TabsContent>
</Tabs>`}
      >
        <div className="w-full">
          <Tabs defaultValue="account">
            <TabsList variant="enclosed">
              <TabsTrigger variant="enclosed" value="account">Account</TabsTrigger>
              <TabsTrigger variant="enclosed" value="password">Password</TabsTrigger>
              <TabsTrigger variant="enclosed" value="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-4">Account settings content.</p>
            </TabsContent>
            <TabsContent value="password">
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-4">Password change form.</p>
            </TabsContent>
            <TabsContent value="team">
              <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-4">Team members list.</p>
            </TabsContent>
          </Tabs>
        </div>
      </PlaygroundSection>

      {/* ─── Sizes ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="sm (32px), md (38px, default), lg (44px)."
        code={`<TabsList variant="pill" size="sm">...</TabsList>
<TabsList variant="pill" size="md">...</TabsList>
<TabsList variant="pill" size="lg">...</TabsList>`}
      >
        <div className="space-y-4 w-full">
          <Tabs defaultValue="a">
            <TabsList variant="pill" size="sm">
              <TabsTrigger variant="pill" value="a">Small</TabsTrigger>
              <TabsTrigger variant="pill" value="b">Tabs</TabsTrigger>
              <TabsTrigger variant="pill" value="c">Here</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="a">
            <TabsList variant="pill" size="md">
              <TabsTrigger variant="pill" value="a">Medium</TabsTrigger>
              <TabsTrigger variant="pill" value="b">Tabs</TabsTrigger>
              <TabsTrigger variant="pill" value="c">Here</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="a">
            <TabsList variant="pill" size="lg">
              <TabsTrigger variant="pill" value="a">Large</TabsTrigger>
              <TabsTrigger variant="pill" value="b">Tabs</TabsTrigger>
              <TabsTrigger variant="pill" value="c">Here</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </PlaygroundSection>

      {/* ─── Disabled ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Disabled tab"
        description="Individual tabs can be disabled."
        code={`<TabsTrigger value="settings" disabled>Settings</TabsTrigger>`}
      >
        <div className="w-full">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings" disabled>Settings (disabled)</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns.</p>
      </div>

      <PlaygroundSection
        title="Settings page"
        description="Tabbed form with content panels."
        code={`<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
  </TabsList>
  <TabsContent value="general">
    <Input ... />
    <Button>Save</Button>
  </TabsContent>
</Tabs>`}
      >
        <div className="w-full">
          <Tabs defaultValue="general">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <Card>
                <CardContent className="py-4 space-y-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="t-name">Display name</Label>
                    <Input id="t-name" defaultValue="Admin User" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="t-email">Email</Label>
                    <Input id="t-email" defaultValue="admin@invin.io" />
                  </div>
                  <Button size="sm">Save changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications">
              <Card>
                <CardContent className="py-4">
                  <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Configure notification preferences.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="security">
              <Card>
                <CardContent className="py-4">
                  <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Two-factor authentication settings.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Card header with enclosed tabs"
        description="Tabs inside a card for sub-navigation."
        code={`<Card>
  <CardContent>
    <Tabs defaultValue="overview">
      <TabsList variant="enclosed" size="sm">
        <TabsTrigger variant="enclosed" value="overview">Overview</TabsTrigger>
        <TabsTrigger variant="enclosed" value="metrics">Metrics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">...</TabsContent>
    </Tabs>
  </CardContent>
</Card>`}
      >
        <Card className="w-full">
          <CardContent className="py-4">
            <Tabs defaultValue="overview">
              <TabsList variant="enclosed" size="sm">
                <TabsTrigger variant="enclosed" value="overview">Overview</TabsTrigger>
                <TabsTrigger variant="enclosed" value="metrics">Metrics</TabsTrigger>
                <TabsTrigger variant="enclosed" value="logs">Logs</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-3">Dashboard overview with KPIs and charts.</p>
              </TabsContent>
              <TabsContent value="metrics">
                <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-3">Performance metrics and trends.</p>
              </TabsContent>
              <TabsContent value="logs">
                <p className="text-[var(--foreground)] text-[var(--muted-foreground)] py-3">Activity logs and audit trail.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
