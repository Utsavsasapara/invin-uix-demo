import { FlowBuilder } from 'invin-uix/ui/flow-builder';
import { Button } from 'invin-uix/ui/button';
import { Tooltip } from 'invin-uix/ui/tooltip';
import { Input } from 'invin-uix/ui/input';
import {
  Check, Play, Save, Search,
  GitBranch, Webhook, Clock, Split, Repeat, Timer,
  Database, Filter as FilterIcon, GitMerge, Scissors, Variable,
  Globe, Mail, Bell, Shield,
} from 'invin-uix/ui/icons';
import { useState } from 'react';

// ─── Node palette ────────────────────────────────────────────────────────────

const paletteCategories = [
  {
    label: 'CONTROL FLOW',
    nodes: [
      { id: 'trigger', label: 'Trigger', icon: <Play style={{ width: 14, height: 14 }} />, color: 'var(--invin-error)' },
      { id: 'webhook', label: 'Webhook', icon: <Webhook style={{ width: 14, height: 14 }} /> },
      { id: 'schedule', label: 'Schedule', icon: <Clock style={{ width: 14, height: 14 }} /> },
      { id: 'condition', label: 'Condition', icon: <GitBranch style={{ width: 14, height: 14 }} /> },
      { id: 'switch', label: 'Switch', icon: <Split style={{ width: 14, height: 14 }} /> },
      { id: 'loop', label: 'Loop', icon: <Repeat style={{ width: 14, height: 14 }} /> },
      { id: 'delay', label: 'Delay', icon: <Timer style={{ width: 14, height: 14 }} /> },
    ],
  },
  {
    label: 'DATA',
    nodes: [
      { id: 'transform', label: 'Transform', icon: <Database style={{ width: 14, height: 14 }} /> },
      { id: 'filter', label: 'Filter', icon: <FilterIcon style={{ width: 14, height: 14 }} /> },
      { id: 'merge', label: 'Merge', icon: <GitMerge style={{ width: 14, height: 14 }} /> },
      { id: 'split', label: 'Split', icon: <Scissors style={{ width: 14, height: 14 }} /> },
      { id: 'set-var', label: 'Set Variable', icon: <Variable style={{ width: 14, height: 14 }} /> },
    ],
  },
  {
    label: 'ACTIONS',
    nodes: [
      { id: 'http', label: 'HTTP Request', icon: <Globe style={{ width: 14, height: 14 }} /> },
      { id: 'email', label: 'Send Email', icon: <Mail style={{ width: 14, height: 14 }} /> },
      { id: 'notify', label: 'Notify', icon: <Bell style={{ width: 14, height: 14 }} /> },
      { id: 'integration', label: 'Integration', icon: <Shield style={{ width: 14, height: 14 }} /> },
    ],
  },
];

// ─── Initial flow data ───────────────────────────────────────────────────────

const initialNodes = [
  {
    id: '1',
    type: 'invinNode',
    position: { x: 50, y: 120 },
    data: { label: 'TRIGGER · WEBHOOK', title: 'SSH Failed Login', subtitle: 'POST /hooks/ssh-failed', color: 'var(--invin-error)' },
  },
  {
    id: '2',
    type: 'invinNode',
    position: { x: 350, y: 80 },
    data: { label: 'CONDITION', title: 'Attempts > 5 ?', subtitle: 'Window: 10 min', color: 'var(--invin-warn)' },
  },
  {
    id: '3',
    type: 'invinNode',
    position: { x: 650, y: 40 },
    data: { label: 'INTEGRATION ACTION', title: 'AbuseIPDB · Check IP', subtitle: 'reputation score()', color: 'var(--invin-ok)' },
  },
  {
    id: '4',
    type: 'invinNode',
    position: { x: 580, y: 220 },
    data: { label: 'HTTP REQUEST', title: 'Block at Firewall', subtitle: 'PUT /api/blocklist', color: 'var(--invin-accent)' },
  },
  {
    id: '5',
    type: 'invinNode',
    position: { x: 950, y: 120 },
    data: { label: 'NOTIFY', title: 'Slack #soc-alerts', subtitle: 'summary + verdict', color: 'var(--chart-5, #8b5cf6)' },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
  { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
  { id: 'e3-5', source: '3', target: '5', type: 'smoothstep' },
  { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SoarWorkflowBuilder() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPalette = paletteCategories
    .map(cat => ({ ...cat, nodes: cat.nodes.filter(n => n.label.toLowerCase().includes(searchQuery.toLowerCase())) }))
    .filter(cat => cat.nodes.length > 0);

  return (
    <div className="flex flex-col h-[calc(100vh-var(--invin-topbar-h))]">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--invin-border)] shrink-0">
        <div>
          <h1 className="text-[length:var(--invin-text-page-title)] font-[700] tracking-[-0.02em]">Workflow Builder</h1>
          <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] mt-0.5">
            Drag-and-drop canvas · 21 node types across 4 categories · real-time validation
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm"><Check style={{ width: 13, height: 13 }} /> Validate</Button>
          <Button variant="outline" size="sm"><Play style={{ width: 13, height: 13 }} /> Test Run</Button>
          <Button size="sm"><Save style={{ width: 13, height: 13 }} /> Save Workflow</Button>
        </div>
      </div>

      {/* Body: palette + canvas */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left: Node Palette */}
        <div className="w-[240px] border-r border-[var(--invin-border)] bg-[var(--invin-bg)] overflow-y-auto shrink-0">
          <div className="p-3">
            <div className="relative">
              <Search style={{ width: 13, height: 13, position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--invin-text-faint)', pointerEvents: 'none' }} />
              <Input placeholder="Search nodes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-8 h-8 text-[12px]" />
            </div>
          </div>
          <div className="px-2 pb-4 space-y-4">
            {filteredPalette.map(cat => (
              <div key={cat.label}>
                <p className="text-[10px] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)] px-3 mb-1.5">
                  {cat.label} · {cat.nodes.length}
                </p>
                <div className="space-y-0.5">
                  {cat.nodes.map(node => (
                    <div key={node.id} className="flex items-center gap-2.5 px-3 py-2 rounded-[8px] cursor-grab hover:bg-[var(--invin-surface-hover)] transition-colors">
                      <span style={{ color: node.color || 'var(--invin-text-dim)' }}>{node.icon}</span>
                      <span className="text-[13px] font-[500]">{node.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: React Flow Canvas */}
        <FlowBuilder
          initialNodes={initialNodes}
          initialEdges={initialEdges}
          showControls
          showMinimap
          showBackground
          backgroundVariant="dots"
          height="100%"
          className="flex-1"
        />
      </div>
    </div>
  );
}
