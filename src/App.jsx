import { useState } from 'react';

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
import { ScrollArea } from 'invin-uix/ui/scroll-area';
import { Tooltip } from 'invin-uix/ui/tooltip';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from 'invin-uix/ui/dropdown-menu';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from 'invin-uix/ui/dialog';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from 'invin-uix/ui/sheet';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from 'invin-uix/ui/select';
import { Toaster, toast } from 'invin-uix/ui/toast';
import { Breadcrumb } from 'invin-uix/ui/breadcrumb';
import { Menu } from 'invin-uix/ui/menu';
import {
  LayoutDashboard, Users, Package, FileText, Settings, Bell, Search,
  Plus, MoreHorizontal, ArrowUp, ArrowDown, Eye, Download,
  Mail, CheckCircle2, Clock, AlertCircle, TrendingUp, Menu as MenuIcon,
  LogOut, User, CreditCard, Activity, Home
} from 'invin-uix/ui/icons';

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
  { icon: CheckCircle2, text: 'Invoice #INV001 paid', time: '2 min ago', color: 'text-success' },
  { icon: Mail, text: 'New message from Carol', time: '15 min ago', color: 'text-primary' },
  { icon: AlertCircle, text: 'Payment failed for INV004', time: '1 hour ago', color: 'text-destructive' },
  { icon: Users, text: '3 new team members joined', time: '3 hours ago', color: 'text-primary' },
  { icon: TrendingUp, text: 'Revenue milestone reached', time: '5 hours ago', color: 'text-success' },
  { icon: Clock, text: 'Subscription renewal reminder', time: '1 day ago', color: 'text-warning' },
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
  { key: 'dashboard', label: 'Dashboard', icon: icon(LayoutDashboard) },
  { key: 'demo', label: 'Demo Components', icon: icon(FileText) },
  { key: 'divider1', type: 'divider', label: '' },
  { key: 'nav', type: 'group', label: 'Workspace', children: [
    { key: 'customers', label: 'Customers', icon: icon(Users) },
    { key: 'products', label: 'Products', icon: icon(Package) },
    { key: 'messages', label: 'Messages', icon: icon(Mail) },
  ]},
  { key: 'divider2', type: 'divider', label: '' },
  { key: 'settings', label: 'Settings', icon: icon(Settings) },
];

// ─── App ─────────────────────────────────────────────────────────────────────

function App() {
  const [dark, setDark] = useState(false);
  const [taskList, setTaskList] = useState(tasks);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(['dashboard']);

  const toggleDark = (v) => {
    setDark(v);
    document.documentElement.setAttribute('data-theme', v ? 'dark' : 'light');
  };

  const handleNavClick = ({ key }) => {
    setActiveNav([key]);
    if (key === 'demo') window.__setPage?.('demo');
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-background text-foreground flex">

        {/* ─── Sidebar (using Menu component) ─────────────────── */}
        <aside className="hidden lg:flex w-56 flex-col border-r border-border fixed inset-y-0 left-0 bg-background z-30">
          <div className="flex items-center gap-2 px-4 h-14 border-b border-border">
            <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">IN</div>
            <span className="font-semibold text-sm">Invin UI</span>
            <Badge variant="outline" size="sm" className="ml-auto">v2</Badge>
          </div>

          <ScrollArea className="flex-1 px-2 py-3">
            <Menu
              mode="inline"
              selectedKeys={activeNav}
              defaultOpenKeys={['nav']}
              onClick={handleNavClick}
              items={sidebarItems}
            />
          </ScrollArea>

          <div className="px-3 py-3 border-t border-border space-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Dark mode</span>
              <Switch size="sm" checked={dark} onCheckedChange={toggleDark} className="ml-auto" />
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=admin" /><AvatarFallback>AD</AvatarFallback></Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium truncate">Admin User</p>
                <p className="text-[10px] text-muted-foreground truncate">admin@invin.io</p>
              </div>
              <Tooltip title="Log out">
                <Button variant="ghost" size="icon-sm" onClick={() => toast({ title: 'Logged out', variant: 'success' })}><LogOut style={{ width: 14, height: 14 }} /></Button>
              </Tooltip>
            </div>
          </div>
        </aside>

        {/* ─── Mobile Sheet Sidebar ───────────────────────────── */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden fixed top-3 left-3 z-40">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader><SheetTitle>Navigation</SheetTitle></SheetHeader>
            <Menu
              mode="inline"
              selectedKeys={activeNav}
              onClick={handleNavClick}
              items={sidebarItems}
              style={{ marginTop: '12px' }}
            />
          </SheetContent>
        </Sheet>

        {/* ─── Main ─────────────────────────────────────────── */}
        <main className="flex-1 lg:ml-56">

          {/* Top Bar */}
          <header className="sticky top-0 z-20 h-14 flex items-center justify-between border-b border-border bg-background px-6">
            <Breadcrumb
              items={[
                { title: 'Home', href: '#', icon: <Home style={{ width: 12, height: 12, marginRight: 4, display: 'inline' }} /> },
                { title: 'Dashboard' },
              ]}
            />

            <div className="flex items-center gap-1">
              <Tooltip title="Search (⌘K)">
                <Button shape="circle" variant="ghost" size="icon" onClick={() => setSearchOpen(true)}><Search className="h-4 w-4" /></Button>
              </Tooltip>

              <Tooltip title="Notifications">
                <Badge count={3} size="lg">
                  <Button shape="circle" variant="ghost" size="icon" onClick={() => toast({ title: '3 unread notifications' })}><Bell className="h-4 w-4" /></Button>
                </Badge>
              </Tooltip>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer ml-2"><AvatarImage src="https://i.pravatar.cc/100?u=admin" /><AvatarFallback>A</AvatarFallback></Avatar>
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
          </header>

          {/* Search Dialog */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogContent>
              <DialogHeader><DialogTitle>Search</DialogTitle><DialogDescription>Find anything in your workspace.</DialogDescription></DialogHeader>
              <Input placeholder="Type to search..." autoFocus />
            </DialogContent>
          </Dialog>

          <div className="p-6 space-y-6">

            {/* Page title */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back. Here's what's happening.</p>
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
                <Card key={label}>
                  <CardContent className="pt-5 pb-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-muted-foreground">{label}</p>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-2xl font-bold mt-1">{value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {up ? <ArrowUp className="h-3 w-3 text-success" /> : <ArrowDown className="h-3 w-3 text-destructive" />}
                      <span className={`text-xs ${up ? 'text-success' : 'text-destructive'}`}>{change}</span>
                      <span className="text-xs text-muted-foreground ml-1">from last month</span>
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
                                <p className="text-xs text-muted-foreground">{order.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={order.status === 'Completed' ? 'success' : order.status === 'Pending' ? 'warning' : 'destructive'} size="sm">{order.status}</Badge>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{order.date}</TableCell>
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
                  <ScrollArea className="h-[320px]">
                    <div className="space-y-4">
                      {activities.map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <div className={`mt-0.5 ${item.color}`}><item.icon className="h-4 w-4" /></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">{item.text}</p>
                            <p className="text-xs text-muted-foreground">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
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
                        <span className={`text-sm flex-1 ${task.done ? 'line-through text-muted-foreground' : ''}`}>{task.text}</span>
                        <Badge variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'warning' : 'secondary'} size="sm">{task.priority}</Badge>
                      </div>
                    ))}
                  </div>
                  <Separator style={{ margin: '12px 0' }} />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
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
                            <p className="text-xs text-muted-foreground">{member.role}</p>
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
                      <span className="text-muted-foreground">7.2 GB / 10 GB</span>
                    </div>
                    <Progress value={72} />
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-md" style={{ backgroundColor: 'var(--invin-color-surface-elevated, #f9fafb)' }}>
                        <p className="text-xs text-muted-foreground">Docs</p>
                        <p className="text-sm font-medium">3.1 GB</p>
                      </div>
                      <div className="p-2 rounded-md" style={{ backgroundColor: 'var(--invin-color-surface-elevated, #f9fafb)' }}>
                        <p className="text-xs text-muted-foreground">Media</p>
                        <p className="text-sm font-medium">2.8 GB</p>
                      </div>
                      <div className="p-2 rounded-md" style={{ backgroundColor: 'var(--invin-color-surface-elevated, #f9fafb)' }}>
                        <p className="text-xs text-muted-foreground">Other</p>
                        <p className="text-sm font-medium">1.3 GB</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}

export default App;
