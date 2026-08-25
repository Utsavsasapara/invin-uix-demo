import { useState } from 'react';
import { Card } from 'invin-uix/ui/card';
import { Button } from 'invin-uix/ui/button';
import { Badge } from 'invin-uix/ui/badge';
import { Tabs, TabsList, TabsTrigger } from 'invin-uix/ui/tabs';
import { Input } from 'invin-uix/ui/input';
import { Tooltip } from 'invin-uix/ui/tooltip';
import { Label } from 'invin-uix/ui/label';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from 'invin-uix/ui/table';
import {
  Play,
  Plus,
  Star,
  Search,
  Pencil,
  Copy,
  Trash2,
  Download,
  Upload,
  MoreVertical,
  User,
  Calendar,
  Clock,
  Filter,
  RefreshCw,
  Eye,
} from 'invin-uix/ui/icons';

// ─── Workflow Data ───────────────────────────────────────────────────────────

const workflows = [
  {
    name: 'GITLAB: Protected Branches Missing',
    description: 'Created from blueprint: GITLAB...',
    createdBy: 'You',
    dateCreated: '11/6/2026',
    lastRun: '11/6/2026',
  },
  {
    name: 'GITLAB: Webhooks Not Using HTTPS',
    description: 'Created from blueprint: GITLAB...',
    createdBy: 'You',
    dateCreated: '11/6/2026',
    lastRun: '11/6/2026',
  },
  {
    name: 'Office 365 User Create & Delete',
    description: 'Manual build',
    createdBy: 'You',
    dateCreated: '17/4/2026',
    lastRun: '18/4/2026',
  },
  {
    name: 'AWS check',
    description: 'Manual build',
    createdBy: 'You',
    dateCreated: '11/5/2026',
    lastRun: '—',
  },
  {
    name: 'Email Notification - AWS GuardDuty',
    description: 'Manual build',
    createdBy: 'You',
    dateCreated: '3/3/2026',
    lastRun: '—',
  },
  {
    name: 'SSH Failed Login',
    description: 'Manual build',
    createdBy: 'You',
    dateCreated: '3/3/2026',
    lastRun: '—',
  },
  {
    name: 'VirusTotal-IP Check',
    description: 'Manual build',
    createdBy: 'You',
    dateCreated: '3/3/2026',
    lastRun: '—',
  },
  {
    name: 'Office 365 failed login',
    description: 'Manual build',
    createdBy: 'You',
    dateCreated: '3/3/2026',
    lastRun: '—',
  },
  {
    name: 'AWS Security Group Modification',
    description: 'Manual build',
    createdBy: 'You',
    dateCreated: '3/3/2026',
    lastRun: '—',
  },
  {
    name: 'GITLAB: Webhook Secrets Not Configured',
    description: 'Created from blueprint: GITI AB...',
    createdBy: 'You',
    dateCreated: '11/6/2026',
    lastRun: '—',
  },
  {
    name: 'Test(a)',
    description: 'Manual build',
    createdBy: 'You',
    dateCreated: '2/3/2026',
    lastRun: '—',
  },
];

// ─── Workflow Card ───────────────────────────────────────────────────────────



function WorkflowCard({ workflow }) {
  const [selectedWorkflow, setSelectedWorkflow] = useState(false);

  return (
    <Card selected={selectedWorkflow} onClick={() => setSelectedWorkflow(!selectedWorkflow)} className='gap-1'>
      {/* Top row: Name + Star + More */}
      <div className="flex items-start justify-between">
        <h3 className="text-[length:var(--invin-text-body)] font-[600] text-[var(--invin-text)] leading-tight truncate flex-1">
          {workflow.name}
        </h3>
        <div className="flex items-center gap-0.5 shrink-0">
          <Tooltip title="Favorite">
            <Button variant="ghost" size="icon-sm">
              <Star style={{ width: 14, height: 14 }} />
            </Button>
          </Tooltip>
          <Tooltip title="More actions">
            <Button variant="ghost" size="icon-sm">
              <MoreVertical style={{ width: 14, height: 14 }} />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Description */}
      <Label className="text-[var(--invin-text-dim)] mb-3 block">
        {workflow.description}
      </Label>

      {/* Metadata labels */}
      <div className="flex items-center gap-4 mb-0">
        <Label className="flex-1 flex items-center gap-1 text-[var(--invin-text-faint)] uppercase tracking-[0.03em]">
          <User style={{ width: 10, height: 10 }} /> Created by
        </Label>
        <Label className="flex-1 flex items-center gap-1 text-[var(--invin-text-faint)] uppercase tracking-[0.03em]">
          <Calendar style={{ width: 10, height: 10 }} /> Date Created
        </Label>
        <Label className="flex-1 flex items-center gap-1 text-[var(--invin-text-faint)] uppercase tracking-[0.03em]">
          <Clock style={{ width: 10, height: 10 }} /> Last Run
        </Label>
      </div>

      {/* Metadata values */}
      <div className="flex items-center gap-4 text-[11px] text-[var(--invin-text-dim)] mb-4">
        <span className="font-[500] flex-1">{workflow.createdBy}</span>
        <span className="font-[500] flex-1">{workflow.dateCreated}</span>
        <span className="font-[500] flex-1">{workflow.lastRun}</span>
      </div>

      {/* Actions row */}
      <div className="flex items-center gap-1.5">
        <Button size="sm">
          <Play style={{ width: 12, height: 12 }} /> Run
        </Button>
        <Tooltip title="Edit">
          <Button variant="outline" size="icon-sm">
            <Pencil style={{ width: 13, height: 13 }} />
          </Button>
        </Tooltip>
        <Tooltip title="Clone">
          <Button variant="outline" size="icon-sm">
            <Copy style={{ width: 13, height: 13 }} />
          </Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button variant="destructive" size="icon-sm" className="text-[var(--invin-error)] hover:text-[var(--invin-error)]">
            <Trash2 style={{ width: 13, height: 13 }} />
          </Button>
        </Tooltip>
      </div>
    </Card>
  );
}

// ─── Execution History Data ──────────────────────────────────────────────────

const executionHistory = [
  { srNo: 11, workflow: 'GITLAB: Protected Branches Missi...', status: 'Failed', startedAt: '11/06/2026, 07:00:15', duration: '4.769824s', successTotal: '0/3', trigger: 'async_task' },
  { srNo: 10, workflow: 'GITLAB: Protected Branches Missi...', status: 'Failed', startedAt: '11/06/2026, 06:49:24', duration: '4.1807295s', successTotal: '0/3', trigger: 'async_task' },
  { srNo: 9, workflow: 'GITLAB: Webhooks Not Using HTTPS', status: 'Failed', startedAt: '11/06/2026, 06:35:35', duration: '4.8720665s', successTotal: '0/3', trigger: 'async_task' },
  { srNo: 8, workflow: 'GITLAB: Webhooks Not Using HTTPS', status: 'Failed', startedAt: '11/06/2026, 06:23:41', duration: '4.9822895s', successTotal: '2/3', trigger: 'async_task' },
  { srNo: 7, workflow: 'GITLAB: Webhooks Not Using HTTPS', status: 'Failed', startedAt: '11/06/2026, 06:18:09', duration: '5.2679045s', successTotal: '1/3', trigger: 'async_task' },
  { srNo: 6, workflow: 'Office 365 User Create & Delete', status: 'Success', startedAt: '18/04/2026, 05:53:52', duration: '1.92537s', successTotal: '6/6', trigger: 'async_task' },
  { srNo: 5, workflow: 'Office 365 User Create & Delete', status: 'Success', startedAt: '17/04/2026, 09:44:52', duration: '0.2565334s', successTotal: '6/6', trigger: 'async_task' },
  { srNo: 4, workflow: 'Office 365 User Create & Delete', status: 'Success', startedAt: '17/04/2026, 09:43:17', duration: '0.3293965s', successTotal: '6/6', trigger: 'async_task' },
  { srNo: 3, workflow: 'Office 365 User Create & Delete', status: 'Success', startedAt: '17/04/2026, 09:39:28', duration: '0.4563045s', successTotal: '6/6', trigger: 'async_task' },
  { srNo: 2, workflow: 'Test(a)', status: 'Success', startedAt: '02/03/2026, 04:20:11', duration: '0.112208s', successTotal: '1/1', trigger: 'manual' },
  { srNo: 1, workflow: 'SSH Failed Login', status: 'Success', startedAt: '02/03/2026, 04:02:44', duration: '0.7341125s', successTotal: '4/4', trigger: 'webhook' },
];

// ─── Execution History Component ─────────────────────────────────────────────

function ExecutionHistory() {
  return (
    <Card className="overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[70px]">SR NO</TableHead>
            <TableHead>WORKFLOW</TableHead>
            <TableHead className="w-[100px]">STATUS</TableHead>
            <TableHead>STARTED AT</TableHead>
            <TableHead>DURATION</TableHead>
            <TableHead className="w-[110px]">SUCCESS/TOTAL</TableHead>
            <TableHead>TRIGGER</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {executionHistory.map((row) => (
            <TableRow key={row.srNo}>
              <TableCell className="font-mono text-[12px] text-[var(--invin-text-dim)]">{row.srNo}</TableCell>
              <TableCell>
                <span className={`font-[500] ${row.status === 'Failed' ? 'text-[var(--invin-error)]' : 'text-[var(--invin-ok)]'}`}>
                  {row.workflow}
                </span>
              </TableCell>
              <TableCell>
                <Badge variant={row.status === 'Success' ? 'success' : 'destructive'} size="sm">
                  {row.status}
                </Badge>
              </TableCell>
              <TableCell className="text-[12px] font-mono text-[var(--invin-text-dim)]">{row.startedAt}</TableCell>
              <TableCell className="text-[12px] font-mono text-[var(--invin-text-dim)]">
                <span className="flex items-center gap-1">
                  <Clock style={{ width: 11, height: 11 }} /> {row.duration}
                </span>
              </TableCell>
              <TableCell>
                <span className={`font-[600] text-[13px] ${
                  row.successTotal.startsWith('0') ? 'text-[var(--invin-error)]' :
                  row.successTotal.split('/')[0] === row.successTotal.split('/')[1] ? 'text-[var(--invin-ok)]' :
                  'text-[var(--invin-warn)]'
                }`}>
                  {row.successTotal}
                </span>
              </TableCell>
              <TableCell>
                <Badge variant="outline" size="sm">{row.trigger}</Badge>
              </TableCell>
              <TableCell>
                <Tooltip title="View details">
                  <Button variant="ghost" size="icon-sm">
                    <Eye style={{ width: 14, height: 14 }} />
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

// ─── Workflows Page ──────────────────────────────────────────────────────────

export default function SoarWorkflows() {
  const [activeTab, setActiveTab] = useState('workflows');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorkflows = workflows.filter((wf) =>
    wf.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-5">

      {/* ─── Page Header ──────────────────────────────────── */}
      <div id="workflow-header" className="flex items-start justify-between">
        <div>
          <h1 className="text-[length:var(--invin-text-page-title)] font-[700] tracking-[-0.02em]">
            {activeTab === 'execution-history' ? 'Execution History' : 'Workflows'}
          </h1>
          <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)] mt-1">
            {activeTab === 'execution-history'
              ? 'View workflow execution history and monitor running tasks'
              : 'Create and manage automation workflows'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {activeTab === 'execution-history' ? (
            <>
              <Button variant="outline" size="sm">
                <Filter style={{ width: 13, height: 13 }} /> Filters
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw style={{ width: 13, height: 13 }} /> Refresh
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline">
                <Download style={{ width: 13, height: 13 }} /> Export
              </Button>
              <Button variant="outline">
                <Upload style={{ width: 13, height: 13 }} /> Import
              </Button>
              <Button>
                <Plus style={{ width: 13, height: 13 }} /> Create Workflow
              </Button>
            </>
          )}
        </div>
      </div>

      {/* ─── Tabs ─────────────────────────────────────────── */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList variant="pill">
          <TabsTrigger value="workflows" variant="pill">Workflows</TabsTrigger>
          <TabsTrigger value="execution-history" variant="pill">Execution History</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* ─── Tab Content ──────────────────────────────────── */}
      {activeTab === 'execution-history' ? (
        <ExecutionHistory />
      ) : (
      <>
      {/* ─── Search + Filter Bar ──────────────────────────── */}
      <div id="workflow-stats" className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-[400px]">
          <Search
            style={{ width: 14, height: 14, position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--invin-text-faint)', pointerEvents: 'none' }}
          />
          <Input
            placeholder="Search... #tag to filter"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <Star style={{ width: 13, height: 13 }} /> Favorites
          </Button>
          <Badge variant="outline">
            Showing {filteredWorkflows.length} workflows out of {workflows.length}
          </Badge>
        </div>
      </div>

      {/* ─── Workflow Cards Grid ──────────────────────────── */}
      <div id="workflow-table" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredWorkflows.map((wf) => (
          <WorkflowCard key={wf.name} workflow={wf} />
        ))}
      </div>
      </>
      )}

    </div>
  );
}
