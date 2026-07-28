import { useState, lazy, Suspense } from 'react';

import { Button } from 'invin-uix/ui/button';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'invin-uix/ui/card';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';
import { Switch } from 'invin-uix/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'invin-uix/ui/tabs';
import { Progress } from 'invin-uix/ui/progress';
import { Checkbox } from 'invin-uix/ui/checkbox';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from 'invin-uix/ui/table';
import { Tooltip } from 'invin-uix/ui/tooltip';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from 'invin-uix/ui/dropdown-menu';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from 'invin-uix/ui/dialog';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from 'invin-uix/ui/select';
import { Toaster, toast } from 'invin-uix/ui/toast';
import { Menu } from 'invin-uix/ui/menu';
import { Topbar } from 'invin-uix/ui/topbar';
import { Sidebar } from 'invin-uix/ui/sidebar';
import { Alert, AlertTitle, AlertDescription } from 'invin-uix/ui/alert';
import { Slider } from 'invin-uix/ui/slider';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'invin-uix/ui/accordion';
import {
  LayoutDashboard, Users, Package, FileText, Settings, Bell, Search,
  Plus, MoreHorizontal, ArrowUp, ArrowDown, Eye, Download,
  Mail, CheckCircle2, Clock, AlertCircle, TrendingUp,
  LogOut, User, CreditCard, Activity, Sun, Moon, Info
} from 'invin-uix/ui/icons';
import { useTheme } from './useTheme.jsx';

const UIGuidePage = lazy(() => import('./pages/UIGuidePage.jsx'));

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { label: 'Total Revenue', value: '$45,231', change: '+20.1%', up: true, icon: CreditCard },
  { label: 'Subscriptions', value: '+2,350', change: '+180.1%', up: true, icon: Users },
  { label: 'Active Now', value: '+573', change: '+19%', up: true, icon: Activity },
  { label: 'Pending', value: '12', change: '-2', up: false, icon: Clock },
];

const recentOrders = [
  { id: 'INV001', customer: 'Alice Johnson', email: 'alice@email.com', amount: '$250.00', status: 'Completed', date: 'Jul 12' },
  { id: 'INV002', customer: 'Bob Smith', email: 'bob@email.com', amount: '$150.00', status: 'Pending', date: 'Jul 12' },
  { id: 'INV003', customer: 'Carol Davis', email: 'carol@email.com', amount: '$350.00', status: 'Completed', date: 'Jul 11' },
  { id: 'INV004', customer: 'David Lee', email: 'david@email.com', amount: '$450.00', status: 'Failed', date: 'Jul 11' },
  { id: 'INV005', customer: 'Emma Wilson', email: 'emma@email.com', amount: '$550.00', status: 'Completed', date: 'Jul 10' },
  { id: 'INV006', customer: 'Frank Chen', email: 'frank@email.com', amount: '$200.00', status: 'Pending', date: 'Jul 10' },
];

const activities = [
  { icon: CheckCircle2, text: 'Invoice #INV001 paid', time: '2 min ago', color: 'text-[var(--invin-ok)]' },
  { icon: Mail, text: 'New message from Carol', time: '15 min ago', color: 'text-[var(--invin-accent)]' },
  { icon: AlertCircle, text: 'Payment failed for INV004', time: '1 hour ago', color: 'text-[var(--invin-error)]' },
  { icon: Users, text: '3 new team members joined', time: '3 hours ago', color: 'text-[var(--invin-accent)]' },
  { icon: TrendingUp, text: 'Revenue milestone reached', time: '5 hours ago', color: 'text-[var(--invin-ok)]' },
  { icon: Clock, text: 'Subscription renewal reminder', time: '1 day ago', color: 'text-[var(--invin-warn)]' },
];

const tasks = [
  { id: 1, text: 'Review Q3 financial report', done: false, priority: 'high' },
  { id: 2, text: 'Update team access permissions', done: true, priority: 'medium' },
  { id: 3, text: 'Prepare client presentation', done: false, priority: 'high' },
  { id: 4, text: 'Deploy v2.4 to production', done: false, priority: 'medium' },
  { id: 5, text: 'Send onboarding emails', done: true, priority: 'low' },
];

const icon = (Icon) => <Icon style={{ width: 16, height: 16 }} />;

const sidebarItems = [
  { key: 'overview', type: 'group', label: 'Overview', children: [
    { key: 'dashboard', label: 'Dashboard', icon: icon(LayoutDashboard) },
    { key: 'ui-guide', label: 'UI Guide', icon: icon(FileText) },
    { key: 'demo', label: 'Components', icon: icon(Package) },
  ]},
  { key: 'governance', type: 'group', label: 'Governance', children: [
    { key: 'compliance', label: 'Compliance Management', icon: icon(Activity), 
      children: [
        { key: 'opt1', label: 'Option 1',icon: icon(Activity)},
        { key: 'opt2', label: 'Option 2',icon: icon(Activity) },
      ]
    },
    { key: 'documents', label: 'Documents', icon: icon(FileText) },
    { key: 'evidence', label: 'Evidence Library', icon: icon(Package) },
    { key: 'audit', label: 'Compliance Audit', icon: icon(CreditCard) },
    { key: 'integration', label: 'Integration Control', icon: icon(Settings) },
    { key: 'risk', label: 'Risk Management', icon: icon(AlertCircle) },
    { key: 'vendor', label: 'Vendor Management', icon: icon(Users) },
  ]},
  { key: 'settings', label: 'Settings', icon: icon(Settings) },
];

// ─── App ─────────────────────────────────────────────────────────────────────

function App() {
  const { dark, toggleDark } = useTheme();
  const [taskList, setTaskList] = useState(tasks);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(['dashboard']);
  const [collapsed, setCollapsed] = useState(false);

  const handleNavClick = ({ key }) => {
    setActiveNav([key]);
    if (key === 'demo') window.__setPage?.('demo');
    if (key === 'ui-guide') window.__setPage?.('ui-guide');
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-bg text-foreground">

        {/* ─── Sidebar ────────────────────────────────────────── */}
        <Sidebar
          product="Gsos"
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          footer={
            <div className={`flex items-center gap-2 ${collapsed ? "justify-center" : ""}`}>
              <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=admin" /><AvatarFallback>AD</AvatarFallback></Avatar>
              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-[length:var(--invin-text-label)] font-[500] truncate">Admin User</p>
                  <p className="text-[10px] text-[var(--invin-text-dim)] truncate">admin@invin.io</p>
                </div>
              )}
              {!collapsed && (
                <Tooltip title="Log out">
                  <Button variant="ghost" size="icon-sm" onClick={() => toast({ title: 'Logged out', variant: 'success' })}><LogOut style={{ width: 14, height: 14 }} /></Button>
                </Tooltip>
              )}
            </div>
          }
        >
          <Menu
            mode="sidebar"
            collapsed={collapsed}
            collapsedTooltip
            selectedKeys={activeNav}
            defaultOpenKeys={collapsed ? [] : ['overview', 'governance']}
            onClick={handleNavClick}
            items={sidebarItems}
          />
        </Sidebar>

        {/* ─── Main ─────────────────────────────────────────── */}
        <main
          className="transition-[margin-left] duration-200 ease-out"
          style={{ marginLeft: collapsed ? 'var(--invin-sidebar-collapsed-w)' : 'var(--invin-sidebar-w)' }}
        >

          {/* Top Bar */}
          <Topbar
            left={
              <h1 className="text-[length:var(--invin-text-card-title)] font-[700] tracking-[-0.02em]">Dashboard</h1>
            }
            right={
              <div className="flex items-center gap-1">
                <Tooltip title="Search (⌘K)">
                  <Button variant="ghost" size="icon-sm" onClick={() => setSearchOpen(true)}><Search style={{ width: 16, height: 16 }} /></Button>
                </Tooltip>
                <Tooltip title={dark ? "Switch to light mode" : "Switch to dark mode"}>
                  <Button variant="ghost" size="icon-sm" onClick={() => toggleDark(!dark)}>
                    {dark ? <Sun style={{ width: 16, height: 16 }} /> : <Moon style={{ width: 16, height: 16 }} />}
                  </Button>
                </Tooltip>
                <Tooltip title="Notifications">
                  <Badge count={3} size="sm">
                    <Button variant="ghost" size="icon-sm" onClick={() => toast({ title: '3 unread notifications' })}><Bell style={{ width: 16, height: 16 }} /></Button>
                  </Badge>
                </Tooltip>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer ml-2" size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=admin" /><AvatarFallback>A</AvatarFallback></Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" style={{ minWidth: '180px' }}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem shortcut="⌘P"><User style={{ width: 14, height: 14 }} />Profile</DropdownMenuItem>
                    <DropdownMenuItem shortcut="⌘S"><Settings style={{ width: 14, height: 14 }} />Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem danger><LogOut style={{ width: 14, height: 14 }} />Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            }
          />

          {/* Search Dialog */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogContent>
              <DialogHeader><DialogTitle>Search</DialogTitle><DialogDescription>Find anything in your workspace.</DialogDescription></DialogHeader>
              <Input placeholder="Type to search..." autoFocus />
            </DialogContent>
          </Dialog>

          <div className="p-6 space-y-6">

            {/* Render UI Guide page or Dashboard content */}
            {activeNav.includes('ui-guide') ? (
              <Suspense fallback={<div className="flex items-center justify-center py-20 text-[var(--invin-text-dim)]">Loading...</div>}>
                <UIGuidePage />
              </Suspense>
            ) : (
            <>
            {/* ─── Alert Banner ─────────────────────────────── */}
            <Alert variant="info" closable onClose={() => {}}>
              <Info style={{ width: 16, height: 16 }} />
              <AlertTitle>System Update Scheduled</AlertTitle>
              <AlertDescription>Maintenance window: Sunday 2am–4am UTC. All services will be briefly unavailable.</AlertDescription>
            </Alert>

            {/* Page title */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-sm text-text-dim">Welcome back. Here's what's happening.</p>
              </div>
              <div className="flex gap-2">
                <Tooltip title="Export report as CSV">
                  <Button onClick={() => toast({ title: 'Report exported!', variant: 'success' })}><Download className="h-4 w-4 mr-2" />Export</Button>
                </Tooltip>
              </div>
            </div>

            {/* ─── Stats ──────────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map(({ label, value, change, up, icon: Icon }) => (
                <Card key={label} hover>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-text-dim">{label}</p>
                      <Icon className="h-4 w-4 text-text-dim" />
                    </div>
                    <p className="mt-1 text-[length:var(--invin-text-kpi)]">{value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {up ? <ArrowUp className="h-3 w-3 text-ok" /> : <ArrowDown className="h-3 w-3 text-error" />}
                      <span className={`text-xs ${up ? 'text-ok' : 'text-error'}`}>{change}</span>
                      <span className="text-xs text-text-dim ml-1">from last month</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ─── Main Grid ──────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Orders Table */}
              <Card className="lg:col-span-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">Recent Transactions</CardTitle>
                      <CardDescription>You made 265 sales this month.</CardDescription>
                    </div>
                    <Tooltip title="Add new transaction">
                      <Button variant="outline" size="sm"><Plus className="h-3.5 w-3.5 mr-1" />Add</Button>
                    </Tooltip>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentOrders.map(order => (
                        <TableRow key={order.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar size="xs"><AvatarFallback>{order.customer[0]}</AvatarFallback></Avatar>
                              <div>
                                <p className="text-sm font-medium">{order.customer}</p>
                                <p className="text-xs text-text-dim">{order.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={order.status === 'Completed' ? 'success' : order.status === 'Pending' ? 'warning' : 'destructive'} size="sm">{order.status}</Badge>
                          </TableCell>
                          <TableCell className="text-sm text-text-dim">{order.date}</TableCell>
                          <TableCell className="text-right font-medium">{order.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="justify-center border-t border-border pt-3">
                  <Button variant="ghost" size="sm">View all transactions <Eye className="h-3.5 w-3.5 ml-1" /></Button>
                </CardFooter>
              </Card>

              {/* Activity Feed */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Activity</CardTitle>
                  <CardDescription>Recent events in your workspace.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                      {activities.map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <div className={`mt-0.5 ${item.color}`}><item.icon className="h-4 w-4" /></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">{item.text}</p>
                            <p className="text-xs text-text-dim">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                </CardContent>
              </Card>
            </div>

            <Separator>Quick Actions</Separator>

            {/* ─── Bottom Row ─────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Tasks */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">Tasks</CardTitle>
                      <CardDescription>{taskList.filter(t => !t.done).length} incomplete, {taskList.filter(t => t.done).length} done</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Tooltip title="Create new task">
                          <Button size="sm"><Plus className="h-3.5 w-3.5 mr-1" />New</Button>
                        </Tooltip>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader><DialogTitle>New Task</DialogTitle><DialogDescription>Add a task to your list.</DialogDescription></DialogHeader>
                        <div className="space-y-3">
                          <div className="space-y-1"><Label htmlFor="task-title">Title</Label><Input id="task-title" placeholder="Task description..." /></div>
                          <div className="space-y-1">
                            <Label>Priority</Label>
                            <Select><SelectTrigger><SelectValue placeholder="Select priority" /></SelectTrigger><SelectContent><SelectItem value="high">High</SelectItem><SelectItem value="medium">Medium</SelectItem><SelectItem value="low">Low</SelectItem></SelectContent></Select>
                          </div>
                        </div>
                        <DialogFooter><Button onClick={() => toast({ title: 'Task created!', variant: 'success' })}>Create</Button></DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {taskList.map(task => (
                      <div key={task.id} className="flex items-center gap-3 py-1.5">
                        <Checkbox
                          checked={task.done}
                          onCheckedChange={(v) => {
                            setTaskList(prev => prev.map(t => t.id === task.id ? { ...t, done: v } : t));
                            if (v) toast({ title: 'Task completed!', variant: 'success', duration: 2000 });
                          }}
                        />
                        <span className={`text-sm flex-1 ${task.done ? 'line-through text-text-dim' : ''}`}>{task.text}</span>
                        <Badge variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'warning' : 'secondary'} size="sm">{task.priority}</Badge>
                      </div>
                    ))}
                  </div>
                  <Separator style={{ margin: '12px 0' }} />
                  <div className="flex items-center justify-between text-xs text-text-dim">
                    <span>Progress</span>
                    <span>{Math.round((taskList.filter(t => t.done).length / taskList.length) * 100)}%</span>
                  </div>
                  <Progress value={(taskList.filter(t => t.done).length / taskList.length) * 100} size="sm" className="mt-1.5" />
                </CardContent>
              </Card>

              {/* Team + Storage */}
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Team</CardTitle>
                      <Tooltip title="Invite new member">
                        <Button variant="ghost" size="sm"><Plus className="h-3.5 w-3.5 mr-1" />Invite</Button>
                      </Tooltip>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: 'Sarah Connor', role: 'Engineer', status: 'online' },
                        { name: 'John Reese', role: 'Designer', status: 'online' },
                        { name: 'Lisa Park', role: 'Marketing', status: 'away' },
                        { name: 'Mike Chen', role: 'Product', status: 'offline' },
                      ].map((member, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="relative">
                            <Badge dot color={member.status === 'online' ? '#22c55e' : member.status === 'away' ? '#f59e0b' : '#9ca3af'}>
                              <Avatar size="sm"><AvatarImage src={`https://i.pravatar.cc/100?u=team${i + 10}`} /><AvatarFallback>{member.name[0]}</AvatarFallback></Avatar>
                            </Badge>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{member.name}</p>
                            <p className="text-xs text-text-dim">{member.role}</p>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon-sm"><MoreHorizontal className="h-3.5 w-3.5" /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View profile</DropdownMenuItem>
                              <DropdownMenuItem>Send message</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem danger>Remove</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Storage</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Used</span>
                      <span className="text-text-dim">7.2 GB / 10 GB</span>
                    </div>
                    <Progress value={72} />
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-md bg-[var(--invin-surface-hover)]">
                        <p className="text-xs text-text-dim">Docs</p>
                        <p className="text-sm font-medium">3.1 GB</p>
                      </div>
                      <div className="p-2 rounded-md bg-[var(--invin-surface-hover)]">
                        <p className="text-xs text-text-dim">Media</p>
                        <p className="text-sm font-medium">2.8 GB</p>
                      </div>
                      <div className="p-2 rounded-md bg-[var(--invin-surface-hover)]">
                        <p className="text-xs text-text-dim">Other</p>
                        <p className="text-sm font-medium">1.3 GB</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator>Analytics & Preferences</Separator>

            {/* ─── Tabs Section ───────────────────────────────── */}
            <Card>
              <CardContent className="pt-4">
                <Tabs defaultValue="overview">
                  <TabsList variant="pill" size="sm">
                    <TabsTrigger variant="pill" value="overview">All <span className="ml-1 opacity-60">(5)</span></TabsTrigger>
                    <TabsTrigger variant="pill" value="analytics">Integrations <span className="ml-1 opacity-60">(3)</span></TabsTrigger>
                    <TabsTrigger variant="pill" value="reports">Credentials <span className="ml-1 opacity-60">(2)</span></TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="text-center p-4 rounded-lg bg-[var(--invin-surface-hover)]">
                        <p className="text-[length:var(--invin-text-kpi)] font-[700]">94%</p>
                        <p className="text-xs text-text-dim mt-1">Compliance Score</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--invin-surface-hover)]">
                        <p className="text-[length:var(--invin-text-kpi)] font-[700]">12</p>
                        <p className="text-xs text-text-dim mt-1">Open Issues</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--invin-surface-hover)]">
                        <p className="text-[length:var(--invin-text-kpi)] font-[700]">3</p>
                        <p className="text-xs text-text-dim mt-1">Pending Reviews</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="analytics">
                    <p className="text-sm text-text-dim py-4">Analytics charts and trend data would render here.</p>
                  </TabsContent>
                  <TabsContent value="reports">
                    <p className="text-sm text-text-dim py-4">Generated reports and export options.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* ─── Preferences (Switch, Slider) ───────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Preferences</CardTitle>
                  <CardDescription>Quick settings for your workspace.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Email Notifications</p>
                      <p className="text-xs text-text-dim">Receive alerts via email</p>
                    </div>
                    <Switch defaultChecked size="sm" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Auto-scan Assets</p>
                      <p className="text-xs text-text-dim">Scan new assets automatically</p>
                    </div>
                    <Switch size="sm" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Real-time Sync</p>
                      <p className="text-xs text-text-dim">Keep data in sync across devices</p>
                    </div>
                    <Switch defaultChecked size="sm" />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Alert Threshold</span>
                      <span className="text-text-dim">75%</span>
                    </div>
                    <Slider defaultValue={[75]} max={100} />
                  </div>
                </CardContent>
              </Card>

              {/* ─── Accordion FAQ ─────────────────────────────── */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Quick Help</CardTitle>
                  <CardDescription>Common questions about this module.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible defaultValue="q1">
                    <AccordionItem value="q1">
                      <AccordionTrigger>How do I add a new compliance framework?</AccordionTrigger>
                      <AccordionContent>Navigate to Compliance Management → Frameworks → Add New. Select from 50+ pre-built templates or create a custom framework.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2">
                      <AccordionTrigger>What triggers an automatic scan?</AccordionTrigger>
                      <AccordionContent>Scans trigger on new asset discovery, configuration changes, or on the scheduled interval you set in Settings → Scanning.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3">
                      <AccordionTrigger>How do I export an audit report?</AccordionTrigger>
                      <AccordionContent>Click the Export button in the top-right of any compliance view. Reports are available in PDF, CSV, and JSON formats.</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            </>
            )}

          </div>
        </main>
      </div>
    </>
  );
}

export default App;
