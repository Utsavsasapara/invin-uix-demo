import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Tour, TourFAB } from 'invin-uix/ui/tour';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import { KpiCard } from 'invin-uix/ui/kpi-card';
import { Users, Pulse, CreditCard } from 'invin-uix/ui/icons';

export default function TourDemo() {
  const [singleTour, setSingleTour] = useState(false);
  const [helpTour, setHelpTour] = useState(false);

  // Single-page tour steps
  const singlePageSteps = [
    {
      target: '#tour-demo-stats',
      title: 'KPI Overview',
      description: <span>These cards show your key metrics at a glance. Click any card to drill down into details.</span>,
      section: 'DASHBOARD',
      placement: 'bottom',
    },
    {
      target: '#tour-demo-table',
      title: 'Recent Pulse',
      description: <span>Track recent events and actions. Use the <strong>badge colours</strong> to quickly identify status — green for success, amber for pending.</span>,
      section: 'DASHBOARD',
      placement: 'top',
    },
    {
      target: '#tour-demo-actions',
      title: 'Quick Actions',
      description: <span>Common actions are always accessible here. Export data, create new items, or open settings.</span>,
      section: 'DASHBOARD',
      placement: 'left',
    },
  ];

  // Cross-page tour steps (simulated — all on same page for demo)
  const crossPageSteps = [
    {
      target: '#tour-demo-stats',
      title: 'Step 1: Dashboard Metrics',
      description: 'Start by reviewing your key numbers. These update in real-time.',
      section: 'DASHBOARD',
      page: '/components',
    },
    {
      target: '#tour-demo-table',
      title: 'Step 2: Pulse Feed',
      description: 'Next, check recent activity. In a real cross-page tour, this step could navigate to a different route.',
      section: 'ACTIVITY',
      page: '/components',
    },
    {
      target: '#tour-demo-actions',
      title: 'Step 3: Take Action',
      description: 'Finally, use these buttons to perform actions. Cross-page tours call onNavigate() when a step requires a different page.',
      section: 'ACTIONS',
      page: '/components',
    },
  ];

  return (
    <ComponentPage
      name="Tour"
      description="Guided product tour with step-by-step highlighting, progress tracking, and cross-page navigation support. Composes Button and Progress from the library."
      importCode={`import { Tour, TourFAB } from 'invin-uix/ui/tour';`}
    >
      {/* ─── Props Tables ───────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">Tour</p>
        <PropsTable
          props={[
            { name: 'steps', type: 'TourStep[]', default: '—', description: 'Array of tour steps with target, title, description' },
            { name: 'open', type: 'boolean', default: 'false', description: 'Whether the tour is visible' },
            { name: 'onClose', type: '() => void', default: '—', description: 'Called on Skip or Finish' },
            { name: 'onFinish', type: '() => void', default: '—', description: 'Called specifically when last step completes' },
            { name: 'startAt', type: 'number', default: '0', description: 'Starting step index' },
            { name: 'highlightPadding', type: 'number (px)', default: '8', description: 'Padding around highlighted element' },
            { name: 'highlightStyle', type: "'dashed' | 'solid'", default: "'dashed'", description: 'Highlight border style' },
            { name: 'currentPage', type: 'string', default: '—', description: 'Current route path (for cross-page tour)' },
            { name: 'onNavigate', type: '(path: string) => void', default: '—', description: 'Called when tour needs to navigate to a different page' },
            { name: 'navigationDelay', type: 'number (ms)', default: '500', description: 'Wait time after navigation before highlighting' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">TourStep</p>
        <PropsTable
          props={[
            { name: 'target', type: 'string', default: '—', description: 'CSS selector for the element to highlight' },
            { name: 'title', type: 'string', default: '—', description: 'Step title (bold heading)' },
            { name: 'description', type: 'ReactNode', default: '—', description: 'Step description (supports bold, links)' },
            { name: 'section', type: 'string', default: '—', description: 'Section label shown in step counter' },
            { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'right'", description: 'Popup position relative to target' },
            { name: 'page', type: 'string', default: '—', description: 'Route path this step belongs to (cross-page)' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">TourFAB</p>
        <PropsTable
          props={[
            { name: 'label', type: 'string', default: "'Take the tour'", description: 'Button text' },
            { name: 'position', type: "'bottom-right' | 'bottom-left'", default: "'bottom-right'", description: 'FAB position on screen' },
            { name: 'onClick', type: '() => void', default: '—', description: 'Click handler (typically opens the tour)' },
          ]}
        />
      </div>

      <Separator variant="bold" />

      {/* ─── Demo Content (targets for tour) ────────────────────── */}
      <div className="space-y-4">
        <h3 className="text-[var(--foreground)] font-[700]">Live Demo</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Click the buttons below to start a tour. The tour will highlight each section below.</p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={() => setSingleTour(true)}>
          Start Single-Page Tour
        </Button>
        <Button variant="outline" onClick={() => setHelpTour(true)}>
          Start Help Tour (Cross-Page)
        </Button>
      </div>

      {/* Target: KPI Stats */}
      <div id="tour-demo-stats" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KpiCard label="Total Users" value="2,350" change="+12.5%" up icon={<Users style={{ width: 14, height: 14 }} />} />
        <KpiCard label="Active Now" value="573" change="+8%" up icon={<Pulse style={{ width: 14, height: 14 }} />} />
        <KpiCard label="Revenue" value="$45,231" change="+20.1%" up icon={<CreditCard style={{ width: 14, height: 14 }} />} />
      </div>

      {/* Target: Pulse Table */}
      <Card id="tour-demo-table">
        <CardContent className="py-4">
          <p className="text-[var(--foreground)] font-[600] mb-3">Recent Pulse</p>
          <div className="space-y-2">
            {[
              { action: 'User signed up', time: '2 min ago', status: 'success' },
              { action: 'Payment processed', time: '5 min ago', status: 'success' },
              { action: 'Export queued', time: '12 min ago', status: 'warning' },
              { action: 'Report generated', time: '1 hour ago', status: 'success' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-[var(--border)] last:border-0">
                <span className="text-[var(--foreground)]">{item.action}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[var(--muted-foreground-faint)]">{item.time}</span>
                  <Badge variant={item.status === 'success' ? 'success' : 'warning'} size="sm">{item.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Target: Actions */}
      <div id="tour-demo-actions" className="flex gap-3">
        <Button>Export Data</Button>
        <Button variant="outline">Create New</Button>
        <Button variant="ghost">Settings</Button>
      </div>

      {/* Tour instances */}
      <Tour
        steps={singlePageSteps}
        open={singleTour}
        onClose={() => setSingleTour(false)}
      />

      <Tour
        steps={crossPageSteps}
        open={helpTour}
        onClose={() => setHelpTour(false)}
        currentPage="/components"
        onNavigate={(path) => console.log('Navigate to:', path)}
      />

      <Separator variant="bold" />

      {/* ─── Usage Examples ─────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Usage</h3>
      </div>

      <PlaygroundSection
        title="Single-page tour"
        description="All steps target elements on the current page. No navigation needed."
        code={`const [showTour, setShowTour] = useState(false);

const steps = [
  {
    target: '#kpi-section',
    title: 'KPI Overview',
    description: 'Track your key metrics here.',
    section: 'DASHBOARD',
  },
  {
    target: '#chart',
    title: 'Trends',
    description: 'Visual trends over time.',
    section: 'DASHBOARD',
    placement: 'right',
  },
];

<Tour steps={steps} open={showTour} onClose={() => setShowTour(false)} />
<TourFAB onClick={() => setShowTour(true)} />`}
      >
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Click "Start Single-Page Tour" above to see this in action.</p>
      </PlaygroundSection>

      <PlaygroundSection
        title="Cross-page tour"
        description="Steps can include a `page` property. When the tour reaches a step on a different page, it calls onNavigate() and waits."
        code={`import { useNavigate, useLocation } from 'react-router-dom';

const navigate = useNavigate();
const location = useLocation();

const steps = [
  { target: '#stats', title: 'Metrics', page: '/dashboard', section: 'DASHBOARD' },
  { target: '#workflows', title: 'Workflows', page: '/workflows', section: 'WORKFLOWS' },
  { target: '#settings', title: 'Settings', page: '/settings', section: 'SETTINGS' },
];

<Tour
  steps={steps}
  open={showTour}
  onClose={() => setShowTour(false)}
  currentPage={location.pathname}
  onNavigate={(path) => navigate(path)}
/>`}
      >
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Click "Start Help Tour" above. In production, each step would navigate to its page before highlighting.</p>
      </PlaygroundSection>

      <PlaygroundSection
        title="Multiple tours per page"
        description="Different tours for different purposes — full onboarding vs quick feature help."
        code={`// Full product tour (triggered by FAB)
<Tour steps={fullTourSteps} open={showFullTour} onClose={() => setShowFullTour(false)} />
<TourFAB onClick={() => setShowFullTour(true)} />

// Quick help tour (triggered by ? button)
<Tour steps={helpSteps} open={showHelp} onClose={() => setShowHelp(false)} />
<Button onClick={() => setShowHelp(true)}>?</Button>`}
      >
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Only one tour can be open at a time (they share the same overlay z-index).</p>
      </PlaygroundSection>

      <PlaygroundSection
        title="TourFAB positioning"
        description="The floating action button can be positioned bottom-right or bottom-left."
        code={`<TourFAB position="bottom-right" onClick={() => setShowTour(true)} />
<TourFAB position="bottom-left" label="Need help?" onClick={() => setShowHelp(true)} />`}
      >
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={() => setSingleTour(true)}>Preview FAB (starts tour)</Button>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
