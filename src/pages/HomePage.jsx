import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from 'invin-uix/ui/card';
import { Badge } from 'invin-uix/ui/badge';
import { Button } from 'invin-uix/ui/button';
import { Separator } from 'invin-uix/ui/separator';
import {
  SquaresFour, BookOpen, Package, ArrowRight,
  Shield, Pulse, FileText, Users, ChartBar, Gear,
  ShoppingCart, Envelope, Calendar, Kanban, ProductIcon
} from 'invin-uix/ui/icons';

// ─── Demo Apps Registry ──────────────────────────────────────────────────────

const demoApps = [
  {
    key: 'soar-dashboard',
    title: 'SOAR',
    description: 'Security Orchestration, Automation & Response — visual workflow builder, 100+ integrations, blueprints & AI assistant.',
    icon: 'soar',
    path: '/apps/soar-dashboard',
    status: 'ready',
    tags: ['Layout', 'Table', 'Card', 'Chart'],
  },
  {
    key: 'soc-dashboard',
    title: 'SOC Dashboard',
    description: 'Security Operations Center with threat monitoring, incident tracking, and compliance posture.',
    icon: Shield,
    path: '/apps/soc-dashboard',
    status: 'coming-soon',
    tags: ['KPI', 'Alert', 'Table', 'Badge'],
  },
  {
    key: 'analytics',
    title: 'Analytics Platform',
    description: 'Data analytics with charts, date range filters, and drill-down views.',
    icon: ChartBar,
    path: '/apps/analytics',
    status: 'coming-soon',
    tags: ['Chart', 'DatePicker', 'Select', 'Card'],
  },
  {
    key: 'crm',
    title: 'CRM App',
    description: 'Customer relationship management with contacts, deals pipeline, and activity tracking.',
    icon: Users,
    path: '/apps/crm',
    status: 'coming-soon',
    tags: ['Table', 'Dialog', 'Form', 'Avatar'],
  },
  {
    key: 'project-management',
    title: 'Project Management',
    description: 'Kanban boards, task lists, calendars, and team collaboration.',
    icon: Kanban,
    path: '/apps/project-management',
    status: 'coming-soon',
    tags: ['Card', 'Checkbox', 'Progress', 'Tabs'],
  },
  {
    key: 'ecommerce',
    title: 'E-Commerce',
    description: 'Product catalog, shopping cart, and order management dashboard.',
    icon: ShoppingCart,
    path: '/apps/ecommerce',
    status: 'coming-soon',
    tags: ['Table', 'Card', 'Badge', 'Dialog'],
  },
  {
    key: 'email-client',
    title: 'Email Client',
    description: 'Inbox, compose, folders, and email thread viewer.',
    icon: Envelope,
    path: '/apps/email-client',
    status: 'coming-soon',
    tags: ['Sheet', 'Table', 'Avatar', 'Badge'],
  },
  {
    key: 'settings-panel',
    title: 'Gear Panel',
    description: 'Multi-section settings with forms, toggles, and account management.',
    icon: Gear,
    path: '/apps/settings-panel',
    status: 'coming-soon',
    tags: ['Switch', 'Input', 'Accordion', 'Tabs'],
  },
  {
    key: 'calendar-app',
    title: 'Calendar App',
    description: 'Event management with month/week/day views and scheduling.',
    icon: Calendar,
    path: '/apps/calendar-app',
    status: 'coming-soon',
    tags: ['Calendar', 'Dialog', 'Popover', 'Select'],
  },
  {
    key: 'document-manager',
    title: 'Document Manager',
    description: 'File browser with upload, folders, context menus, and previews.',
    icon: FileText,
    path: '/apps/document-manager',
    status: 'coming-soon',
    tags: ['ContextMenu', 'Table', 'Sheet', 'Progress'],
  },
];

// ─── Quick Links ─────────────────────────────────────────────────────────────

const quickLinks = [
  { title: 'UI Guide', description: 'Design principles, tokens, typography, and module standards.', icon: BookOpen, path: '/ui-guide' },
  { title: 'Components', description: '40+ interactive component demos with props playground.', icon: Package, path: '/components' },
];

// ─── Status Badge ────────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  if (status === 'ready') return <Badge variant="success" size="sm">Ready</Badge>;
  if (status === 'wip') return <Badge variant="warning" size="sm">WIP</Badge>;
  return <Badge variant="secondary" size="sm">Coming Soon</Badge>;
}

// ─── Home Page ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">

      {/* Hero */}
      <section className="space-y-3">
        <h1 className="text-[var(--foreground)] font-[700] tracking-[-0.02em]">
          Invin UI — Demo Showcase
        </h1>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
          Explore real-world applications built with <strong className="text-[var(--foreground)]">invin-uix</strong>. 
          Each demo app shows how the component library works together to build production-ready interfaces.
        </p>
      </section>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickLinks.map(link => (
          <Link key={link.path} to={link.path} className="no-underline">
            <Card hover className="h-full">
              <CardContent>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-[10px] bg-[var(--accent-soft)] flex items-center justify-center shrink-0">
                    <link.icon style={{ width: 20, height: 20, color: 'var(--accent)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[var(--foreground)] font-[600]">{link.title}</p>
                    <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)] mt-0.5">{link.description}</p>
                  </div>
                  <ArrowRight style={{ width: 16, height: 16, color: 'var(--muted-foreground-faint)', marginTop: 2 }} />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Separator>Demo Applications</Separator>

      {/* Demo Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {demoApps.map(app => {
          const isReady = app.status === 'ready';
          const Wrapper = isReady ? Link : 'div';
          const wrapperProps = isReady ? { to: app.path, className: 'no-underline' } : {};

          return (
            <Wrapper key={app.key} {...wrapperProps}>
              <Card hover={isReady} className={`h-full ${!isReady ? 'opacity-70' : ''}`}>
                <CardContent>
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="h-10 w-10 rounded-[10px] bg-[var(--accent-soft)] flex items-center justify-center">
                        {typeof app.icon === 'string' ? (
                          <ProductIcon name={app.icon} size="sm" />
                        ) : (
                          <app.icon style={{ width: 20, height: 20, color: 'var(--accent)' }} />
                        )}
                      </div>
                      <StatusBadge status={app.status} />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <p className="text-[var(--foreground)] font-[600]">{app.title}</p>
                      <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)] mt-1 leading-relaxed line-clamp-2">
                        {app.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {app.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] font-[500] px-1.5 py-0.5 rounded bg-[var(--secondary)] text-[var(--muted-foreground)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action */}
                    {isReady && (
                      <div className="pt-1">
                        <Button variant="ghost" size="sm" className="px-0 text-[var(--accent)]">
                          Open App <ArrowRight style={{ width: 14, height: 14, marginLeft: 4 }} />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Wrapper>
          );
        })}
      </div>

      {/* Footer info */}
      <div className="text-center py-8">
        <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground-faint)]">
          More demo apps will be added over time. Each one demonstrates different component combinations and patterns.
        </p>
      </div>
    </div>
  );
}
