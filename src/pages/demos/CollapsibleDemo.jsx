import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'invin-uix/ui/collapsible';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import { CaretDown, CaretRight, Gear, Bell, Shield } from 'invin-uix/ui/icons';

export default function CollapsibleDemo() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);

  return (
    <ComponentPage
      name="Collapsible"
      description="A disclosure primitive that expands/collapses content with smooth animated height transitions. Use for progressive disclosure, expandable sections, and FAQ-style patterns."
      importCode={`import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'invin-uix/ui/collapsible';`}
    >

      <PropsTable
        props={[
          { name: 'open', type: 'boolean', default: '—', description: 'Controlled open state' },
          { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Uncontrolled default state' },
          { name: 'onOpenChange', type: '(open: boolean) => void', default: '—', description: 'Callback on toggle' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable toggling' },
        ]}
      />

      <Separator />

      {/* ─── Basic ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic collapsible"
        description="Click the trigger to expand/collapse content with animated height."
      >
        <div className="max-w-md space-y-3">
          <Collapsible open={open1} onOpenChange={setOpen1}>
            <div className="flex items-center justify-between px-3 py-2 rounded-lg border border-[var(--border)]">
              <div className="flex items-center gap-2">
                <span className="text-label font-[500]">3 starred repositories</span>
                <Badge variant="secondary" size="sm">{open1 ? 'Open' : 'Closed'}</Badge>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <CaretDown style={{ width: 14, height: 14, transition: 'transform 200ms', transform: open1 ? 'rotate(180deg)' : 'rotate(0)' }} />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div className="space-y-2 mt-2">
                {['invin-ui/invin-uix', 'facebook/react', 'vercel/next.js'].map((repo) => (
                  <div key={repo} className="px-3 py-2 rounded-md border border-[var(--border)] text-label font-mono text-[var(--muted-foreground)]">
                    {repo}
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </PlaygroundSection>

      {/* ─── Default open ─────────────────────────────────────── */}
      <PlaygroundSection
        title="Default open"
        description="Use defaultOpen to start expanded without controlling state."
      >
        <div className="max-w-md">
          <Collapsible defaultOpen>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span className="flex items-center gap-2"><Gear style={{ width: 14, height: 14 }} /> Advanced Gear</span>
                <CaretDown style={{ width: 14, height: 14 }} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Card className="mt-2">
                <CardContent className="pt-4 space-y-3">
                  <div className="flex items-center justify-between text-label">
                    <span>Enable debug mode</span>
                    <Badge variant="outline" size="sm">Off</Badge>
                  </div>
                  <div className="flex items-center justify-between text-label">
                    <span>Verbose logging</span>
                    <Badge variant="outline" size="sm">Off</Badge>
                  </div>
                  <div className="flex items-center justify-between text-label">
                    <span>Performance monitoring</span>
                    <Badge variant="success" size="sm">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </PlaygroundSection>

      {/* ─── Multiple sections ────────────────────────────────── */}
      <PlaygroundSection
        title="Multiple sections"
        description="Combine multiple collapsibles for an FAQ or settings panel."
      >
        <div className="max-w-md space-y-2">
          {[
            { icon: Bell, title: 'Notifications', content: 'Configure email, push, and in-app notification preferences.' },
            { icon: Shield, title: 'Security', content: 'Manage 2FA, session timeouts, and API key rotation policies.' },
            { icon: Gear, title: 'Integrations', content: 'Connect third-party services like Slack, Jira, and PagerDuty.' },
          ].map((section) => (
            <Collapsible key={section.title}>
              <CollapsibleTrigger asChild>
                <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors cursor-pointer text-left">
                  <section.icon style={{ width: 16, height: 16, color: 'var(--accent)' }} />
                  <span className="text-label font-[500] flex-1">{section.title}</span>
                  <CaretRight style={{ width: 14, height: 14, color: 'var(--muted-foreground)' }} />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-3 py-2 ml-7 text-label text-[var(--muted-foreground)]">
                  {section.content}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </PlaygroundSection>

      {/* ─── Disabled ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Disabled"
        description="Prevents toggling when disabled."
      >
        <div className="max-w-md">
          <Collapsible disabled>
            <CollapsibleTrigger asChild>
              <Button variant="outline" disabled className="w-full justify-between">
                <span>Locked section</span>
                <CaretDown style={{ width: 14, height: 14 }} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="p-3 text-label">This content is not reachable.</p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
