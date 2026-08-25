import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { FlowBuilder } from 'invin-uix/ui/flow-builder';
import { Handle, Position } from '@xyflow/react';
import { Badge } from 'invin-uix/ui/badge';
import { Progress } from 'invin-uix/ui/progress';
import { Separator } from 'invin-uix/ui/separator';
import { Card, CardContent } from 'invin-uix/ui/card';
import {
  ArrowRight, CheckCircle2, Clock, AlertCircle, TrendingUp,
  MessageSquare, Star, Play, Shield,
} from 'invin-uix/ui/icons';

// ═══════════════════════════════════════════════════════════════════════════════
// USE CASE 1: STRIPE-STYLE PROCESS DOCUMENTATION
// Clean, minimal nodes with colored left borders for documentation flows
// ═══════════════════════════════════════════════════════════════════════════════

function ProcessNode({ data, selected }) {
  return (
    <div
      className="rounded-lg border bg-[var(--invin-pop-bg)] px-4 py-3 min-w-[200px] max-w-[280px] shadow-sm"
      style={{ borderLeft: `3px solid ${data.color || 'var(--invin-accent)'}`, borderColor: selected ? 'var(--invin-accent)' : 'var(--invin-border)', borderLeftColor: data.color || 'var(--invin-accent)' }}
    >
      <Handle type="target" position={Position.Left} className="!w-2 !h-2 !bg-[var(--invin-text-dim)] !border-0" />
      <p className="text-[13px] font-[500] text-[var(--invin-text)]">{data.title}</p>
      {data.subtitle && <p className="text-[11px] text-[var(--invin-text-dim)] mt-0.5">{data.subtitle}</p>}
      {data.icon && <div className="mt-2">{data.icon}</div>}
      <Handle type="source" position={Position.Right} className="!w-2 !h-2 !bg-[var(--invin-text-dim)] !border-0" />
    </div>
  );
}

const processNodeTypes = { processNode: ProcessNode };

const processNodes = [
  { id: '1', type: 'processNode', position: { x: 50, y: 40 }, data: { title: 'Customer initiates checkout', subtitle: 'POST /create-checkout-session', color: 'var(--invin-ok)' } },
  { id: '2', type: 'processNode', position: { x: 50, y: 140 }, data: { title: 'Return Checkout Session', subtitle: 'session_id + url', color: 'var(--invin-accent)', icon: <Shield style={{ width: 14, height: 14, color: 'var(--invin-accent)' }} /> } },
  { id: '3', type: 'processNode', position: { x: 350, y: 90 }, data: { title: 'Redirect customer to url from Checkout Session', color: 'var(--invin-warn)' } },
  { id: '4', type: 'processNode', position: { x: 650, y: 90 }, data: { title: 'Customer completes payment', subtitle: 'Stripe handles PCI compliance', color: 'var(--chart-5, #8b5cf6)' } },
  { id: '5', type: 'processNode', position: { x: 350, y: 200 }, data: { title: 'Customer returns to your application', subtitle: 'success_url redirect', color: 'var(--invin-ok)' } },
];

const processEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true },
  { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
  { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
  { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
  { id: 'e5-1', source: '5', target: '1', type: 'smoothstep', style: { strokeDasharray: '5 5' } },
];

// ═══════════════════════════════════════════════════════════════════════════════
// USE CASE 2: DOUBLELOOP-STYLE METRICS DASHBOARD
// Rich card nodes with KPIs, sparklines, and status badges
// ═══════════════════════════════════════════════════════════════════════════════

function MetricNode({ data }) {
  return (
    <div className="rounded-xl border border-[var(--invin-border)] bg-[var(--invin-pop-bg)] p-4 min-w-[200px] max-w-[240px] shadow-md">
      <Handle type="target" position={Position.Left} className="!w-2.5 !h-2.5 !rounded-full !bg-[var(--invin-accent)] !border-2 !border-[var(--invin-bg)]" />

      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <p className="text-[11px] text-[var(--invin-text-dim)] font-[500]">{data.category}</p>
        {data.score && (
          <Badge variant={data.score > 0.9 ? 'success' : data.score > 0.5 ? 'warning' : 'destructive'} size="sm">
            {data.score.toFixed(3)}
          </Badge>
        )}
      </div>

      {/* Title + value */}
      <p className="text-[13px] font-[600] text-[var(--invin-text)]">{data.title}</p>
      {data.value && (
        <p className="text-[length:var(--invin-text-kpi)] font-[700] mt-1">{data.value}</p>
      )}

      {/* Subtitle / meta */}
      {data.meta && <p className="text-[10px] text-[var(--invin-text-faint)] mt-1">{data.meta}</p>}

      {/* Progress */}
      {data.progress !== undefined && (
        <div className="mt-2">
          <Progress value={data.progress} size="sm" />
          <p className="text-[10px] text-[var(--invin-text-dim)] mt-0.5">{data.progressLabel}</p>
        </div>
      )}

      {/* Tags */}
      {data.tags && (
        <div className="flex gap-1 mt-2 flex-wrap">
          {data.tags.map((tag, i) => (
            <Badge key={i} variant={tag.variant || 'secondary'} size="sm">{tag.text}</Badge>
          ))}
        </div>
      )}

      <Handle type="source" position={Position.Right} className="!w-2.5 !h-2.5 !rounded-full !bg-[var(--invin-accent)] !border-2 !border-[var(--invin-bg)]" />
    </div>
  );
}

const metricNodeTypes = { metricNode: MetricNode };

const metricNodes = [
  { id: 'm1', type: 'metricNode', position: { x: 30, y: 30 }, data: { category: 'Jira (Epic)', title: 'Time-based notifications', meta: '4 issues · 50% done', tags: [{ text: 'In Progress', variant: 'warning' }] } },
  { id: 'm2', type: 'metricNode', position: { x: 30, y: 200 }, data: { category: 'Jira (Epic)', title: 'AI model for recommendations', meta: '1 issue · 100% done', tags: [{ text: 'Done', variant: 'success' }] } },
  { id: 'm3', type: 'metricNode', position: { x: 310, y: 30 }, data: { category: 'Metric (Input) · Average', title: 'Avg. sessions per week', value: '641.45', meta: 'Past 7 days · 633.3 · 1.04% ↗', score: 0.998 } },
  { id: 'm4', type: 'metricNode', position: { x: 310, y: 210 }, data: { category: 'Metric (Input) · Sum', title: 'Average session duration', value: '-0.644', progress: 34, progressLabel: 'Goal · 50,000 for 2023 · 34% complete' } },
  { id: 'm5', type: 'metricNode', position: { x: 590, y: 80 }, data: { category: 'Metric (North Star) · Sum', title: 'Time spent listening by subscribers', value: '4.41K mins', meta: 'Past 7 days · 26.1K · 2.57% ↗', score: 0.998 } },
  { id: 'm6', type: 'metricNode', position: { x: 850, y: 30 }, data: { category: 'Metric (KPI) · Amount increased', title: 'Monthly premium subscriptions', value: '$56,760', meta: '100% ↗ · -$60 · -100.17%', score: 0.998 } },
  { id: 'm7', type: 'metricNode', position: { x: 850, y: 210 }, data: { category: 'Metric (KPI) · Average', title: 'Monthly retention', value: '72,315.8%', meta: 'No change · 3.32% ↗ · 37.7% ↗', score: 0.999 } },
];

const metricEdges = [
  { id: 'em1-3', source: 'm1', target: 'm3', type: 'smoothstep' },
  { id: 'em2-4', source: 'm2', target: 'm4', type: 'smoothstep' },
  { id: 'em3-5', source: 'm3', target: 'm5', type: 'smoothstep' },
  { id: 'em4-5', source: 'm4', target: 'm5', type: 'smoothstep' },
  { id: 'em5-6', source: 'm5', target: 'm6', type: 'smoothstep' },
  { id: 'em5-7', source: 'm5', target: 'm7', type: 'smoothstep' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// USE CASE 3: TYPEFORM-STYLE SURVEY/CONVERSATION LOGIC
// Compact colored icon nodes with labels
// ═══════════════════════════════════════════════════════════════════════════════

function SurveyNode({ data }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--invin-border)] bg-[var(--invin-pop-bg)] pl-2 pr-4 py-2 shadow-sm min-w-[120px]">
      <Handle type="target" position={Position.Left} className="!w-2 !h-2 !bg-[var(--invin-border-strong)] !border-0 !-left-1" />

      {/* Icon circle */}
      <div
        className="h-8 w-8 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: data.iconBg || 'var(--invin-surface-hover)' }}
      >
        {data.icon || <MessageSquare style={{ width: 14, height: 14, color: data.iconColor || 'var(--invin-text)' }} />}
      </div>

      {/* Label */}
      <div>
        <p className="text-[12px] font-[600] text-[var(--invin-text)] leading-tight">{data.title}</p>
        {data.subtitle && <p className="text-[10px] text-[var(--invin-text-dim)]">{data.subtitle}</p>}
      </div>

      {/* Add button (visual only) */}
      {data.showAdd && (
        <div className="h-5 w-5 rounded-full border border-[var(--invin-border)] flex items-center justify-center ml-1 text-[var(--invin-text-dim)]">
          <span className="text-[11px]">+</span>
        </div>
      )}

      <Handle type="source" position={Position.Right} className="!w-2 !h-2 !bg-[var(--invin-border-strong)] !border-0 !-right-1" />
    </div>
  );
}

const surveyNodeTypes = { surveyNode: SurveyNode };

const surveyNodes = [
  { id: 's1', type: 'surveyNode', position: { x: 30, y: 100 }, data: { title: 'Starting logic', subtitle: 'based on...', iconBg: '#1f1f1f', icon: <Play style={{ width: 14, height: 14, color: '#fff' }} />, showAdd: true } },
  { id: 's2', type: 'surveyNode', position: { x: 230, y: 100 }, data: { title: 'WS. Welcome!', iconBg: '#333', icon: <Play style={{ width: 12, height: 12, color: '#fff' }} /> } },
  { id: 's3', type: 'surveyNode', position: { x: 420, y: 50 }, data: { title: 'S1. Hello', subtitle: 'good to...', iconBg: 'var(--invin-ok)', icon: <MessageSquare style={{ width: 12, height: 12, color: '#fff' }} />, showAdd: true } },
  { id: 's4', type: 'surveyNode', position: { x: 420, y: 150 }, data: { title: '1. Hello stranger!', subtitle: "What's ...", iconBg: 'var(--invin-accent)', icon: <MessageSquare style={{ width: 12, height: 12, color: '#fff' }} /> } },
  { id: 's5', type: 'surveyNode', position: { x: 640, y: 100 }, data: { title: '2. How would you', subtitle: 'rate this ...', iconBg: 'var(--invin-warn)', icon: <Star style={{ width: 12, height: 12, color: '#fff' }} />, showAdd: true } },
  { id: 's6', type: 'surveyNode', position: { x: 860, y: 100 }, data: { title: 'A. All done!', subtitle: 'Thanks ...', iconBg: '#333', icon: <Play style={{ width: 12, height: 12, color: '#fff' }} /> } },
];

const surveyEdges = [
  { id: 'es1-2', source: 's1', target: 's2', type: 'smoothstep' },
  { id: 'es2-3', source: 's2', target: 's3', type: 'smoothstep' },
  { id: 'es2-4', source: 's2', target: 's4', type: 'smoothstep' },
  { id: 'es3-5', source: 's3', target: 's5', type: 'smoothstep' },
  { id: 'es4-5', source: 's4', target: 's5', type: 'smoothstep' },
  { id: 'es5-6', source: 's5', target: 's6', type: 'smoothstep' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// DEMO PAGE
// ═══════════════════════════════════════════════════════════════════════════════

export default function FlowBuilderDemo() {
  return (
    <ComponentPage
      name="Flow Builder"
      description="Visual node-based canvas powered by React Flow. Fully customizable — create any node design, wire them together, pan, zoom, and export. Three real-world use cases below."
      importCode={`import { FlowBuilder, Handle, Position } from 'invin-uix/ui/flow-builder';`}
    >

      <PropsTable
        props={[
          { name: 'initialNodes', type: 'Node[]', default: '[]', description: 'Nodes on canvas ({ id, type, position, data })' },
          { name: 'initialEdges', type: 'Edge[]', default: '[]', description: 'Connections ({ id, source, target, type })' },
          { name: 'customNodeTypes', type: 'NodeTypes', default: '—', description: 'Custom node components (key = type name)' },
          { name: 'showControls', type: 'boolean', default: 'true', description: 'Zoom in/out/fit buttons' },
          { name: 'showMinimap', type: 'boolean', default: 'false', description: 'Overview minimap' },
          { name: 'showBackground', type: 'boolean', default: 'true', description: 'Grid background' },
          { name: 'backgroundVariant', type: "'dots' | 'lines' | 'cross'", default: "'dots'", description: 'Grid pattern' },
          { name: 'height', type: 'string', default: "'500px'", description: 'Canvas height' },
          { name: 'onConnect', type: '(connection) => void', default: '—', description: 'New connection callback' },
        ]}
      />

      <Separator />

      {/* ─── USE CASE 1: Process Documentation (Stripe) ───────── */}
      <PlaygroundSection
        title="Use Case 1 — Process Documentation"
        description="Stripe-style flow diagrams for API documentation. Clean left-bordered cards with minimal styling. Animated edges show data flow direction."
        code={`// Custom node with left color border
function ProcessNode({ data }) {
  return (
    <div style={{ borderLeft: '3px solid ' + data.color }}>
      <Handle type="target" position={Position.Left} />
      <p>{data.title}</p>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

<FlowBuilder
  initialNodes={nodes}
  initialEdges={edges}
  customNodeTypes={{ processNode: ProcessNode }}
  height="350px"
  backgroundVariant="lines"
/>`}
      >
        <Card className="overflow-hidden">
          <FlowBuilder
            initialNodes={processNodes}
            initialEdges={processEdges}
            customNodeTypes={processNodeTypes}
            height="320px"
            backgroundVariant="lines"
            showMinimap={false}
          />
        </Card>
        <p className="text-center text-[12px] text-[var(--invin-text-dim)] mt-3 font-[500]">
          Stripe Docs — Diagrams for process documentation with interactive nodes
        </p>
      </PlaygroundSection>

      <Separator />

      {/* ─── USE CASE 2: Metrics Dashboard (DoubleLoop) ──────── */}
      <PlaygroundSection
        title="Use Case 2 — Metrics Dashboard Builder"
        description="DoubleLoop-style node graph connecting business metrics. Rich card nodes with KPI values, progress bars, scores, and status badges."
        code={`// Rich metric card node
function MetricNode({ data }) {
  return (
    <div className="card">
      <Handle type="target" position={Position.Left} />
      <Badge>{data.score}</Badge>
      <h3>{data.title}</h3>
      <p className="kpi">{data.value}</p>
      <Progress value={data.progress} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

<FlowBuilder
  initialNodes={nodes}
  initialEdges={edges}
  customNodeTypes={{ metricNode: MetricNode }}
  height="400px"
/>`}
      >
        <Card className="overflow-hidden">
          <FlowBuilder
            initialNodes={metricNodes}
            initialEdges={metricEdges}
            customNodeTypes={metricNodeTypes}
            height="380px"
            showMinimap
          />
        </Card>
        <p className="text-center text-[12px] text-[var(--invin-text-dim)] mt-3 font-[500]">
          DoubleLoop — Node-based dashboard builder to monitor business metrics
        </p>
      </PlaygroundSection>

      <Separator />

      {/* ─── USE CASE 3: Survey Logic (TypeForm) ──────────────── */}
      <PlaygroundSection
        title="Use Case 3 — Conversational Logic Builder"
        description="TypeForm-style survey flow. Compact pill-shaped nodes with colored icons represent steps, branching, and endings."
        code={`// Pill-shaped survey step node
function SurveyNode({ data }) {
  return (
    <div className="flex items-center gap-2 rounded-full">
      <Handle type="target" position={Position.Left} />
      <div className="icon-circle" style={{ bg: data.iconBg }}>
        {data.icon}
      </div>
      <span>{data.title}</span>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

<FlowBuilder
  initialNodes={nodes}
  initialEdges={edges}
  customNodeTypes={{ surveyNode: SurveyNode }}
  height="280px"
  backgroundVariant="dots"
/>`}
      >
        <Card className="overflow-hidden">
          <FlowBuilder
            initialNodes={surveyNodes}
            initialEdges={surveyEdges}
            customNodeTypes={surveyNodeTypes}
            height="280px"
            backgroundVariant="dots"
          />
        </Card>
        <p className="text-center text-[12px] text-[var(--invin-text-dim)] mt-3 font-[500]">
          TypeForm — Interactive tool to build and visualize complex survey logic
        </p>
      </PlaygroundSection>

      <Separator />

      {/* ─── How to create custom nodes ───────────────────────── */}
      <div className="space-y-4">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Creating Custom Nodes</h3>
        <Card>
          <CardContent className="pt-4">
            <pre className="text-[12px] font-mono text-[var(--invin-text)] overflow-x-auto leading-relaxed">{`import { FlowBuilder, Handle, Position } from 'invin-uix/ui/flow-builder';

// 1. Define your custom node component
function MyCustomNode({ data, selected }) {
  return (
    <div className={\`my-node \${selected ? 'selected' : ''}\`}>
      <Handle type="target" position={Position.Left} />
      <h3>{data.title}</h3>
      <p>{data.subtitle}</p>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

// 2. Register it as a node type
const nodeTypes = { myNode: MyCustomNode };

// 3. Use it in your flow
const nodes = [
  { id: '1', type: 'myNode', position: { x: 0, y: 0 },
    data: { title: 'Hello', subtitle: 'World' } },
];

// 4. Pass to FlowBuilder
<FlowBuilder
  initialNodes={nodes}
  initialEdges={edges}
  customNodeTypes={nodeTypes}
/>`}</pre>
          </CardContent>
        </Card>
      </div>

    </ComponentPage>
  );
}
