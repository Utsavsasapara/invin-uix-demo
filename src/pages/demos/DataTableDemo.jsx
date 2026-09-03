import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable, InteractiveDemo } from '../../components/PlaygroundSection.jsx';
import { DataTable } from 'invin-uix/ui/data-table';
import { Badge } from 'invin-uix/ui/badge';
import { Button } from 'invin-uix/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from 'invin-uix/ui/avatar';
import { Separator } from 'invin-uix/ui/separator';
import { Toaster, toast } from 'invin-uix/ui/toast';
import { Trash, DownloadSimple, Eye } from 'invin-uix/ui/icons';

// ─── Mock Data ───────────────────────────────────────────────────────────────

const users = [
  { id: 'USR-001', name: 'Alice Johnson', email: 'alice@company.com', role: 'Admin', status: 'Active', lastLogin: '2024-07-12', avatar: 'https://i.pravatar.cc/100?u=alice' },
  { id: 'USR-002', name: 'Bob Smith', email: 'bob@company.com', role: 'Editor', status: 'Active', lastLogin: '2024-07-11', avatar: 'https://i.pravatar.cc/100?u=bob' },
  { id: 'USR-003', name: 'Carol Davis', email: 'carol@company.com', role: 'Viewer', status: 'Inactive', lastLogin: '2024-06-28', avatar: 'https://i.pravatar.cc/100?u=carol' },
  { id: 'USR-004', name: 'David Lee', email: 'david@company.com', role: 'Admin', status: 'Active', lastLogin: '2024-07-12', avatar: 'https://i.pravatar.cc/100?u=david' },
  { id: 'USR-005', name: 'Emma Wilson', email: 'emma@company.com', role: 'Editor', status: 'Active', lastLogin: '2024-07-10', avatar: 'https://i.pravatar.cc/100?u=emma' },
  { id: 'USR-006', name: 'Frank Chen', email: 'frank@company.com', role: 'Viewer', status: 'Suspended', lastLogin: '2024-05-15', avatar: 'https://i.pravatar.cc/100?u=frank' },
  { id: 'USR-007', name: 'Grace Kim', email: 'grace@company.com', role: 'Editor', status: 'Active', lastLogin: '2024-07-11', avatar: 'https://i.pravatar.cc/100?u=grace' },
  { id: 'USR-008', name: 'Henry Park', email: 'henry@company.com', role: 'Viewer', status: 'Active', lastLogin: '2024-07-09', avatar: 'https://i.pravatar.cc/100?u=henry' },
  { id: 'USR-009', name: 'Irene Lopez', email: 'irene@company.com', role: 'Admin', status: 'Active', lastLogin: '2024-07-12', avatar: 'https://i.pravatar.cc/100?u=irene' },
  { id: 'USR-010', name: 'Jack Turner', email: 'jack@company.com', role: 'Viewer', status: 'Inactive', lastLogin: '2024-06-01', avatar: 'https://i.pravatar.cc/100?u=jack' },
  { id: 'USR-011', name: 'Karen White', email: 'karen@company.com', role: 'Editor', status: 'Active', lastLogin: '2024-07-08', avatar: 'https://i.pravatar.cc/100?u=karen' },
  { id: 'USR-012', name: 'Leo Garcia', email: 'leo@company.com', role: 'Viewer', status: 'Active', lastLogin: '2024-07-07', avatar: 'https://i.pravatar.cc/100?u=leo' },
];

const incidents = [
  { id: 'INC-2847', title: 'Unauthorized access attempt', severity: 'Critical', status: 'Open', assignee: 'SOC Team', created: '2024-07-12 09:00' },
  { id: 'INC-2846', title: 'Suspicious login from new IP', severity: 'High', status: 'Investigating', assignee: 'Alice J.', created: '2024-07-12 08:30' },
  { id: 'INC-2845', title: 'Failed certificate validation', severity: 'Medium', status: 'Open', assignee: 'Bob S.', created: '2024-07-11 22:15' },
  { id: 'INC-2844', title: 'Brute force attempt detected', severity: 'High', status: 'Resolved', assignee: 'SOC Team', created: '2024-07-11 18:00' },
  { id: 'INC-2843', title: 'Anomalous data exfiltration', severity: 'Critical', status: 'Investigating', assignee: 'David L.', created: '2024-07-11 14:30' },
  { id: 'INC-2842', title: 'Outdated TLS version detected', severity: 'Low', status: 'Resolved', assignee: 'Grace K.', created: '2024-07-11 10:00' },
  { id: 'INC-2841', title: 'Privilege escalation attempt', severity: 'High', status: 'Open', assignee: 'SOC Team', created: '2024-07-10 23:45' },
  { id: 'INC-2840', title: 'Unpatched vulnerability found', severity: 'Medium', status: 'Open', assignee: 'Henry P.', created: '2024-07-10 16:00' },
];

// ─── Column Definitions ──────────────────────────────────────────────────────

const userColumns = [
  {
    id: 'name',
    header: 'User',
    cell: ({ row }) => (
      <div className="flex items-center gap-2.5">
        <Avatar size="xs"><AvatarImage src={row.avatar} /><AvatarFallback>{row.name[0]}</AvatarFallback></Avatar>
        <div>
          <p className="text-label font-[500]">{row.name}</p>
          <p className="text-[11px] text-[var(--muted-foreground)]">{row.email}</p>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    id: 'role',
    header: 'Role',
    sortable: true,
    cell: ({ value }) => (
      <Badge variant={value === 'Admin' ? 'default' : value === 'Editor' ? 'secondary' : 'outline'} size="sm">
        {value}
      </Badge>
    ),
  },
  {
    id: 'status',
    header: 'Status',
    sortable: true,
    cell: ({ value }) => (
      <Badge
        variant={value === 'Active' ? 'success' : value === 'Inactive' ? 'warning' : 'destructive'}
        size="sm"
      >
        {value}
      </Badge>
    ),
  },
  { id: 'lastLogin', header: 'Last Login', sortable: true },
  {
    id: 'actions',
    header: '',
    width: '80px',
    align: 'right',
    sortable: false,
    cell: ({ row }) => (
      <Button variant="ghost" size="icon-sm" onClick={(e) => { e.stopPropagation(); toast({ title: `Viewing ${row.name}` }); }}>
        <Eye style={{ width: 14, height: 14 }} />
      </Button>
    ),
  },
];

const incidentColumns = [
  { id: 'id', header: 'ID', width: '100px', sortable: true },
  { id: 'title', header: 'Title', sortable: true },
  {
    id: 'severity',
    header: 'Severity',
    sortable: true,
    cell: ({ value }) => (
      <Badge
        variant={value === 'Critical' ? 'destructive' : value === 'High' ? 'warning' : value === 'Medium' ? 'secondary' : 'outline'}
        size="sm"
      >
        {value}
      </Badge>
    ),
  },
  {
    id: 'status',
    header: 'Status',
    sortable: true,
    cell: ({ value }) => (
      <Badge
        variant={value === 'Open' ? 'destructive' : value === 'Investigating' ? 'warning' : 'success'}
        size="sm"
      >
        {value}
      </Badge>
    ),
  },
  { id: 'assignee', header: 'Assignee', sortable: true },
  { id: 'created', header: 'Created', sortable: true },
];

// ─── Demo Page ───────────────────────────────────────────────────────────────

export default function DataTableDemo() {
  const [selected, setSelected] = useState([]);

  return (
    <ComponentPage
      name="Data Table"
      description="Feature-rich data table with sorting, searching, pagination, and row selection. Built on top of the base Table primitives — zero external dependencies."
      importCode={`import { DataTable } from 'invin-uix/ui/data-table';`}
    >
      <Toaster position="top-right" />

      {/* ─── Interactive Playground ─────────────────────────────── */}
      <InteractiveDemo
        title="Data Table Playground"
        description="Experiment with Data Table configurations."
        controls={[
          { name: 'searchable', type: 'boolean', label: 'Searchable', default: true },
          { name: 'paginated', type: 'boolean', label: 'Paginated', default: true },
          { name: 'selectable', type: 'boolean', label: 'Selectable', default: false },
          { name: 'striped', type: 'boolean', label: 'Striped', default: false },
          { name: 'dense', type: 'boolean', label: 'Dense', default: false },
        ]}
      >
        {(props) => (
          <DataTable
            columns={incidentColumns}
            data={incidents.slice(0, 5)}
            rowKey="id"
            searchable={props.searchable}
            paginated={props.paginated}
            selectable={props.selectable}
            striped={props.striped}
            dense={props.dense}
            pageSize={5}
          />
        )}
      </InteractiveDemo>
      <Separator variant="bold" />

      <PropsTable
        props={[
          { name: 'columns', type: 'ColumnDef[]', default: '—', description: 'Column definitions (id, header, cell, sortable, width, align)' },
          { name: 'data', type: 'T[]', default: '—', description: 'Array of row data' },
          { name: 'rowKey', type: "string | (row, i) => string", default: 'index', description: 'Unique key for each row' },
          { name: 'searchable', type: 'boolean', default: 'false', description: 'Show global search input' },
          { name: 'paginated', type: 'boolean', default: 'true', description: 'Enable pagination' },
          { name: 'pageSize', type: 'number', default: '10', description: 'Initial rows per page' },
          { name: 'selectable', type: 'boolean', default: 'false', description: 'Enable row selection' },
          { name: 'selectionMode', type: "'single' | 'multiple'", default: "'multiple'", description: 'Selection mode' },
          { name: 'onRowClick', type: '(row, index) => void', default: '—', description: 'Row click handler' },
          { name: 'striped', type: 'boolean', default: 'false', description: 'Alternating row colors' },
          { name: 'dense', type: 'boolean', default: 'false', description: 'Compact row height' },
          { name: 'loading', type: 'boolean', default: 'false', description: 'Show loading state' },
        ]}
      />

      <Separator />

      {/* ─── Full-featured: Users table ───────────────────────── */}
      <PlaygroundSection
        title="User management table"
        description="Searchable, sortable, selectable, paginated — a real-world user admin table."
      >
        <DataTable
          columns={userColumns}
          data={users}
          rowKey="id"
          searchable
          searchPlaceholder="Search users..."
          selectable
          pageSize={5}
          selectedKeys={selected}
          onSelectionChange={setSelected}
          onRowClick={(row) => toast({ title: `Clicked: ${row.name}` })}
        />
        {selected.length > 0 && (
          <div className="flex items-center gap-2 mt-3">
            <Button variant="destructive" size="sm" onClick={() => { toast({ title: `Deleted ${selected.length} user(s)`, variant: 'success' }); setSelected([]); }}>
              <Trash style={{ width: 13, height: 13 }} /> Delete ({selected.length})
            </Button>
            <Button variant="outline" size="sm" onClick={() => toast({ title: 'Exported!' })}>
              <DownloadSimple style={{ width: 13, height: 13 }} /> Export
            </Button>
          </div>
        )}
      </PlaygroundSection>

      {/* ─── SOC Incidents (no selection) ─────────────────────── */}
      <PlaygroundSection
        title="Incident table (SOC)"
        description="Sort by severity or status. No selection — just view and sort."
      >
        <DataTable
          columns={incidentColumns}
          data={incidents}
          rowKey="id"
          searchable
          searchPlaceholder="Search incidents..."
          pageSize={5}
        />
      </PlaygroundSection>

      {/* ─── Dense + Striped ──────────────────────────────────── */}
      <PlaygroundSection
        title="Dense & striped"
        description="Compact density with alternating row colors for high-density data views."
      >
        <DataTable
          columns={[
            { id: 'id', header: 'ID', width: '80px', sortable: true },
            { id: 'title', header: 'Incident', sortable: true },
            { id: 'severity', header: 'Severity', sortable: true },
            { id: 'status', header: 'Status', sortable: true },
          ]}
          data={incidents}
          rowKey="id"
          dense
          striped
          pageSize={10}
          paginated={false}
        />
      </PlaygroundSection>

      {/* ─── Loading state ────────────────────────────────────── */}
      <PlaygroundSection
        title="Loading state"
        description="While data is being fetched."
      >
        <DataTable
          columns={userColumns.slice(0, 3)}
          data={[]}
          loading
          pageSize={5}
        />
      </PlaygroundSection>

      {/* ─── Empty state ──────────────────────────────────────── */}
      <PlaygroundSection
        title="Empty state"
        description="When no data matches the filter or the dataset is empty."
      >
        <DataTable
          columns={userColumns.slice(0, 3)}
          data={[]}
          searchable
          pageSize={5}
          emptyState={
            <div className="flex flex-col items-center gap-2 py-4">
              <p className="text-label font-[500]">No users found</p>
              <p className="text-caption text-[var(--muted-foreground)]">Try adjusting your search or add a new user.</p>
              <Button size="sm" className="mt-2">Add User</Button>
            </div>
          }
        />
      </PlaygroundSection>

    </ComponentPage>
  );
}
