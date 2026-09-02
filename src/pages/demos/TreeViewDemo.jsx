import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { TreeView } from 'invin-uix/ui/tree-view';
import { Badge } from 'invin-uix/ui/badge';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Toaster, toast } from 'invin-uix/ui/toast';
import {
  Folder, FileText, Image, Code, Shield, Users,
  Gear, Database, Globe, Lock, Eye,
} from 'invin-uix/ui/icons';

// ─── Mock Data ───────────────────────────────────────────────────────────────

const fileTree = [
  {
    id: 'src',
    label: 'src',
    icon: <Folder style={{ width: 14, height: 14, color: 'var(--accent)' }} />,
    children: [
      {
        id: 'components',
        label: 'components',
        icon: <Folder style={{ width: 14, height: 14, color: 'var(--accent)' }} />,
        children: [
          { id: 'button.tsx', label: 'button.tsx', icon: <Code style={{ width: 14, height: 14 }} /> },
          { id: 'card.tsx', label: 'card.tsx', icon: <Code style={{ width: 14, height: 14 }} /> },
          { id: 'dialog.tsx', label: 'dialog.tsx', icon: <Code style={{ width: 14, height: 14 }} /> },
        ],
      },
      {
        id: 'pages',
        label: 'pages',
        icon: <Folder style={{ width: 14, height: 14, color: 'var(--accent)' }} />,
        children: [
          { id: 'index.tsx', label: 'index.tsx', icon: <Code style={{ width: 14, height: 14 }} /> },
          { id: 'about.tsx', label: 'about.tsx', icon: <Code style={{ width: 14, height: 14 }} /> },
        ],
      },
      {
        id: 'assets',
        label: 'assets',
        icon: <Folder style={{ width: 14, height: 14, color: 'var(--accent)' }} />,
        children: [
          { id: 'logo.svg', label: 'logo.svg', icon: <Image style={{ width: 14, height: 14 }} /> },
          { id: 'hero.png', label: 'hero.png', icon: <Image style={{ width: 14, height: 14 }} /> },
        ],
      },
      { id: 'app.tsx', label: 'App.tsx', icon: <Code style={{ width: 14, height: 14 }} /> },
      { id: 'main.tsx', label: 'main.tsx', icon: <Code style={{ width: 14, height: 14 }} /> },
    ],
  },
  { id: 'package.json', label: 'package.json', icon: <FileText style={{ width: 14, height: 14 }} /> },
  { id: 'tsconfig.json', label: 'tsconfig.json', icon: <Gear style={{ width: 14, height: 14 }} /> },
  { id: 'readme.md', label: 'README.md', icon: <FileText style={{ width: 14, height: 14 }} /> },
];

const permissionTree = [
  {
    id: 'admin',
    label: 'Administrators',
    icon: <Shield style={{ width: 14, height: 14 }} />,
    extra: <Badge variant="destructive" size="sm">Full</Badge>,
    children: [
      { id: 'admin-users', label: 'User Management', icon: <Users style={{ width: 14, height: 14 }} />, extra: <Badge variant="success" size="sm">RW</Badge> },
      { id: 'admin-settings', label: 'System Gear', icon: <Gear style={{ width: 14, height: 14 }} />, extra: <Badge variant="success" size="sm">RW</Badge> },
      { id: 'admin-security', label: 'Security Config', icon: <Lock style={{ width: 14, height: 14 }} />, extra: <Badge variant="success" size="sm">RW</Badge> },
    ],
  },
  {
    id: 'analyst',
    label: 'SOC Analysts',
    icon: <Eye style={{ width: 14, height: 14 }} />,
    extra: <Badge variant="warning" size="sm">Limited</Badge>,
    children: [
      { id: 'analyst-incidents', label: 'Incidents', icon: <Shield style={{ width: 14, height: 14 }} />, extra: <Badge variant="success" size="sm">RW</Badge> },
      { id: 'analyst-reports', label: 'Reports', icon: <FileText style={{ width: 14, height: 14 }} />, extra: <Badge variant="secondary" size="sm">RO</Badge> },
      { id: 'analyst-settings', label: 'System Gear', icon: <Gear style={{ width: 14, height: 14 }} />, disabled: true, extra: <Badge variant="outline" size="sm">—</Badge> },
    ],
  },
  {
    id: 'viewer',
    label: 'Viewers',
    icon: <Globe style={{ width: 14, height: 14 }} />,
    extra: <Badge variant="secondary" size="sm">Read Only</Badge>,
    children: [
      { id: 'viewer-dashboard', label: 'Dashboard', icon: <Database style={{ width: 14, height: 14 }} />, extra: <Badge variant="secondary" size="sm">RO</Badge> },
      { id: 'viewer-reports', label: 'Reports', icon: <FileText style={{ width: 14, height: 14 }} />, extra: <Badge variant="secondary" size="sm">RO</Badge> },
    ],
  },
];

// ─── Demo ────────────────────────────────────────────────────────────────────

export default function TreeViewDemo() {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);

  return (
    <ComponentPage
      name="Tree View"
      description="Expandable hierarchical tree for file browsers, permission trees, org charts, and nested navigation. Supports single/multi selection, connecting lines, icons, and custom content."
      importCode={`import { TreeView } from 'invin-uix/ui/tree-view';`}
    >
      <Toaster position="top-right" />

      <PropsTable
        props={[
          { name: 'data', type: 'TreeNode[]', default: '[]', description: 'Tree data ({id, label, icon?, children?, disabled?, extra?})' },
          { name: 'defaultExpanded', type: 'string[]', default: '[]', description: 'Initially expanded node ids' },
          { name: 'expanded', type: 'string[]', default: '—', description: 'Controlled expanded ids' },
          { name: 'selectedId', type: 'string', default: '—', description: 'Selected node (single mode)' },
          { name: 'onSelect', type: '(id, node) => void', default: '—', description: 'Selection callback' },
          { name: 'showLines', type: 'boolean', default: 'false', description: 'Show connecting lines' },
          { name: 'multiSelect', type: 'boolean', default: 'false', description: 'Enable multi-select with checkboxes' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size preset' },
          { name: 'indent', type: 'number', default: '20', description: 'Pixels per nesting level' },
        ]}
      />

      <Separator />

      {/* ─── File browser ─────────────────────────────────────── */}
      <PlaygroundSection
        title="File browser"
        description="Classic file tree with folders and files. Click to select, click folders to expand."
      >
        <Card className="max-w-sm">
          <CardContent className="py-3 px-1">
            <TreeView
              data={fileTree}
              defaultExpanded={['src']}
              selectedId={selected}
              onSelect={(id) => { setSelected(id); toast({ title: `Selected: ${id}` }); }}
              showLines
            />
          </CardContent>
        </Card>
        {selected && <p className="text-caption text-[var(--muted-foreground)] mt-2">Selected: {selected}</p>}
      </PlaygroundSection>

      {/* ─── Permission tree with extras ──────────────────────── */}
      <PlaygroundSection
        title="Permission tree"
        description="Nodes with extra content (badges) on the right — useful for RBAC views."
      >
        <Card className="max-w-md">
          <CardContent className="py-3 px-1">
            <TreeView
              data={permissionTree}
              defaultExpanded={['admin', 'analyst']}
              onSelect={(id) => toast({ title: `Clicked: ${id}` })}
              size="md"
            />
          </CardContent>
        </Card>
      </PlaygroundSection>

      {/* ─── Multi-select ─────────────────────────────────────── */}
      <PlaygroundSection
        title="Multi-select with checkboxes"
        description="Select multiple nodes — useful for batch operations on files or permissions."
      >
        <Card className="max-w-sm">
          <CardContent className="py-3 px-1">
            <TreeView
              data={fileTree}
              defaultExpanded={['src', 'components']}
              multiSelect
              selectedIds={multiSelected}
              onSelectionChange={setMultiSelected}
            />
          </CardContent>
        </Card>
        {multiSelected.length > 0 && (
          <p className="text-caption text-[var(--muted-foreground)] mt-2">{multiSelected.length} items selected: {multiSelected.join(', ')}</p>
        )}
      </PlaygroundSection>

      {/* ─── Sizes ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="Three density presets."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['sm', 'md', 'lg']).map((s) => (
            <div key={s}>
              <p className="text-[11px] font-[500] text-[var(--muted-foreground-faint)] uppercase mb-2">{s}</p>
              <Card>
                <CardContent className="py-2 px-1">
                  <TreeView
                    data={[
                      { id: `${s}-1`, label: 'Documents', icon: <Folder style={{ width: 14, height: 14 }} />, children: [
                        { id: `${s}-1a`, label: 'Report.pdf', icon: <FileText style={{ width: 14, height: 14 }} /> },
                        { id: `${s}-1b`, label: 'Data.csv', icon: <FileText style={{ width: 14, height: 14 }} /> },
                      ]},
                      { id: `${s}-2`, label: 'Images', icon: <Folder style={{ width: 14, height: 14 }} />, children: [
                        { id: `${s}-2a`, label: 'Photo.jpg', icon: <Image style={{ width: 14, height: 14 }} /> },
                      ]},
                    ]}
                    defaultExpanded={[`${s}-1`]}
                    size={s}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      {/* ─── With connecting lines ────────────────────────────── */}
      <PlaygroundSection
        title="Connecting lines"
        description="Visual hierarchy lines connecting parent to children."
      >
        <Card className="max-w-xs">
          <CardContent className="py-3 px-1">
            <TreeView
              data={permissionTree}
              defaultExpanded={['admin', 'analyst', 'viewer']}
              showLines
              size="sm"
            />
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
