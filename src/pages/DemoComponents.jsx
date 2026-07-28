import { useState, useRef } from 'react';

// Tier 1 components
import { Button } from 'invin-uix/ui/button';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import { Skeleton } from 'invin-uix/ui/skeleton';
import { Alert, AlertTitle, AlertDescription } from 'invin-uix/ui/alert';
import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'invin-uix/ui/card';
import { Input } from 'invin-uix/ui/input';
import { Textarea } from 'invin-uix/ui/textarea';
import { Label } from 'invin-uix/ui/label';
import { Switch } from 'invin-uix/ui/switch';

// Icons
import {
  Search, Bell, Settings, Download, Trash2, Plus, Check, X, ChevronRight,
  Mail, Star, Heart, Eye, Lock, Globe, Zap, Shield, Rocket, Database,
  Cloud, Coffee, Flame, Gift, Music, Phone, Printer, Wifi, Camera, Mic,
  Info,
  ProductIcon
} from 'invin-uix/ui/icons';

// Tooltip
import { Tooltip } from 'invin-uix/ui/tooltip';

// ─── Component list for sidebar ──────────────────────────────────────────────

const components = [
  { id: 'button', label: 'Button' },
  { id: 'badge', label: 'Badge' },
  { id: 'separator', label: 'Separator' },
  { id: 'skeleton', label: 'Skeleton' },
  { id: 'alert', label: 'Alert' },
  { id: 'avatar', label: 'Avatar' },
  { id: 'card', label: 'Card' },
  { id: 'input', label: 'Input & Textarea' },
  { id: 'icons', label: 'Icons' },
  { id: 'tooltip', label: 'Tooltip' },
];

function Section({ id, title, description, children }) {
  return (
    <div id={id} className="space-y-4 scroll-mt-20">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        {description && <p className="text-sm text-text-dim mt-1">{description}</p>}
      </div>
      {children}
    </div>
  );
}

function DemoComponents() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState('button');

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-bg text-foreground flex">

      {/* ─── Sidebar ──────────────────────────────────────── */}
      <aside className="hidden lg:flex w-52 flex-col border-r border-border fixed inset-y-0 left-0 bg-bg z-30">
        <div className="flex items-center gap-2 px-4 h-14 border-b border-border">
          <Button variant="ghost" size="sm" onClick={() => window.__setPage?.('dashboard')}>← Back</Button>
        </div>
        <div className="px-3 py-3">
          <p className="text-[10px] uppercase tracking-wider text-text-dim font-medium px-2 mb-2">Components</p>
          <nav className="space-y-0.5">
            {components.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className={`flex items-center w-full px-2 py-1.5 rounded-md text-sm transition-colors ${active === c.id ? 'bg-primary text-primary-foreground' : 'text-text-dim hover:text-foreground hover:bg-bg-elevated'}`}
              >
                {c.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* ─── Main Content ─────────────────────────────────── */}
      <main className="flex-1 lg:ml-52">

        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-border bg-bg px-6 h-14 flex items-center justify-between">
          <h1 className="text-lg font-bold">Component Demo</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-dim">Dark</span>
            <Switch size="sm" checked={dark} onCheckedChange={(v) => { setDark(v); document.documentElement.setAttribute('data-theme', v ? 'dark' : 'light'); }} />
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* ═══════════════════════════════════════════════════════ */}
        {/* BUTTON                                                 */}
        {/* ═══════════════════════════════════════════════════════ */}
        <Section id="button" title="Button" description="All variants, sizes, and states.">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Variants</Label>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="dashed">Dashed</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">States</Label>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>Disabled Outline</Button>
                  <Button variant="dashed" disabled>Disabled Dashed</Button>
                  <Button asChild><a href="#">As Link</a></Button>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Ripple (default on, disable with ripple=false)</Label>
                <div className="flex flex-wrap gap-3">
                  <Button>With Ripple</Button>
                  <Button ripple={false}>No Ripple</Button>
                  <Button variant="outline">Outline Ripple</Button>
                  <Button variant="dashed">Dashed Ripple</Button>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">With Icons</Label>
                <div className="flex flex-wrap gap-3">
                  <Button><Download className="h-4 w-4" /> Download</Button>
                  <Button variant="outline"><Settings className="h-4 w-4" /> Settings</Button>
                  <Button variant="destructive"><Trash2 className="h-4 w-4" /> Delete</Button>
                  <Button variant="dashed"><Plus className="h-4 w-4" /> Add New</Button>
                  <Button variant="secondary"><Plus className="h-4 w-4" /> Add New</Button>
                  <Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button>
                  <Button size="icon" variant="outline"><Search className="h-4 w-4" /></Button>
                  <Button size="icon" variant="outline"><Mail className="h-4 w-4" /></Button>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Sizes</Label>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* BADGE                                                  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <Section id="badge" title="Badge" description="Labels, notification counts, dots, and status indicators.">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Label Variants</Label>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Count (notification bubble)</Label>
                <div className="flex flex-wrap items-center gap-6">
                  <Badge count={5}>
                    <Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button>
                  </Badge>
                  <Badge count={12}>
                    <Button size="icon" variant="outline"><Mail className="h-4 w-4" /></Button>
                  </Badge>
                  <Badge count={100} overflowCount={99}>
                    <Avatar size="sm"><AvatarFallback>U</AvatarFallback></Avatar>
                  </Badge>
                  <Badge count={0} showZero>
                    <Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button>
                  </Badge>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Dot</Label>
                <div className="flex flex-wrap items-center gap-6">
                  <Badge dot>
                    <Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button>
                  </Badge>
                  <Badge dot>
                    <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=dot1" /><AvatarFallback>U</AvatarFallback></Avatar>
                  </Badge>
                  <Badge dot color="var(--invin-color-success, #16a34a)">
                    <Button size="icon" variant="outline"><Mail className="h-4 w-4" /></Button>
                  </Badge>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Custom Colors</Label>
                <div className="flex flex-wrap items-center gap-6">
                  <Badge count={8} color="#8b5cf6">
                    <Button size="icon" variant="outline"><Star className="h-4 w-4" /></Button>
                  </Badge>
                  <Badge count={3} color="var(--invin-color-success, #16a34a)">
                    <Button size="icon" variant="outline"><Check className="h-4 w-4" /></Button>
                  </Badge>
                  <Badge count={2} color="var(--invin-color-warning, #f59e0b)">
                    <Button size="icon" variant="outline"><Zap className="h-4 w-4" /></Button>
                  </Badge>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Status</Label>
                <div className="flex flex-wrap items-center gap-6">
                  <Badge status="success" text="Active" />
                  <Badge status="processing" text="Running" />
                  <Badge status="error" text="Failed" />
                  <Badge status="warning" text="Pending" />
                  <Badge status="default" text="Idle" />
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Sizes</Label>
                <div className="flex flex-wrap items-center gap-6">
                  <Badge count={5} size="sm">
                    <Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button>
                  </Badge>
                  <Badge count={5} size="md">
                    <Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button>
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SEPARATOR                                              */}
        {/* ═══════════════════════════════════════════════════════ */}
        <Section id="separator" title="Separator" description="Visual divider between sections.">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm">Content above</p>
              <Separator />
              <p className="text-sm">Content below (horizontal separator)</p>
              <div className="flex items-center gap-4 h-8">
                <span className="text-sm">Left</span>
                <Separator orientation="vertical" />
                <span className="text-sm">Right (vertical)</span>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SKELETON                                               */}
        {/* ═══════════════════════════════════════════════════════ */}
        <Section id="skeleton" title="Skeleton" description="Loading placeholders with pulse animation.">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Profile loading</Label>
                <div className="flex items-center gap-4">
                  <Skeleton variant="circle" className="h-12 w-12" />
                  <div className="space-y-2 flex-1">
                    <Skeleton variant="text" className="w-1/3" />
                    <Skeleton variant="text" className="w-2/3" />
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Card loading</Label>
                <Skeleton className="h-40 w-full rounded-lg" />
                <div className="mt-3 space-y-2">
                  <Skeleton variant="text" className="w-3/4" />
                  <Skeleton variant="text" className="w-1/2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ALERT                                                  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <Section id="alert" title="Alert" description="Status messages with variants.">
          <div className="space-y-3">
            <Alert>
              <AlertTitle>Default</AlertTitle>
              <AlertDescription>This is a neutral informational alert.</AlertDescription>
            </Alert>
            <Alert variant="info">
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>Your session will expire in 5 minutes.</AlertDescription>
            </Alert>
            <Alert variant="success">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Your profile has been updated successfully.</AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>Your account storage is almost full (90% used).</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Failed to save changes. Please try again.</AlertDescription>
            </Alert>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* AVATAR                                                 */}
        {/* ═══════════════════════════════════════════════════════ */}
        <Section id="avatar" title="Avatar" description="User images with fallback initials.">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Sizes</Label>
                <div className="flex items-end gap-4">
                  <Avatar size="xs"><AvatarImage src="https://i.pravatar.cc/100?u=a1" /><AvatarFallback>XS</AvatarFallback></Avatar>
                  <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=a2" /><AvatarFallback>SM</AvatarFallback></Avatar>
                  <Avatar><AvatarImage src="https://i.pravatar.cc/100?u=a3" /><AvatarFallback>MD</AvatarFallback></Avatar>
                  <Avatar size="lg"><AvatarImage src="https://i.pravatar.cc/100?u=a4" /><AvatarFallback>LG</AvatarFallback></Avatar>
                  <Avatar size="xl"><AvatarImage src="https://i.pravatar.cc/100?u=a5" /><AvatarFallback>XL</AvatarFallback></Avatar>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Fallbacks (no image)</Label>
                <div className="flex items-center gap-4">
                  <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
                  <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
                  <Avatar><AvatarFallback>🎉</AvatarFallback></Avatar>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Stacked</Label>
                <div className="flex -space-x-3">
                  <Avatar size="sm" className="border-2 border-background"><AvatarImage src="https://i.pravatar.cc/100?u=s1" /><AvatarFallback>1</AvatarFallback></Avatar>
                  <Avatar size="sm" className="border-2 border-background"><AvatarImage src="https://i.pravatar.cc/100?u=s2" /><AvatarFallback>2</AvatarFallback></Avatar>
                  <Avatar size="sm" className="border-2 border-background"><AvatarImage src="https://i.pravatar.cc/100?u=s3" /><AvatarFallback>3</AvatarFallback></Avatar>
                  <Avatar size="sm" className="border-2 border-background"><AvatarFallback>+5</AvatarFallback></Avatar>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* CARD                                                   */}
        {/* ═══════════════════════════════════════════════════════ */}
        <Section id="card" title="Card" description="Container with header, content, and footer sections.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>With header, content, and footer.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card content goes here. It can contain any elements.</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">Save</Button>
                <Button variant="outline" size="sm">Cancel</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stats Card</CardTitle>
                <CardDescription>Monthly revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">$45,231</p>
                <p className="text-sm text-text-dim mt-1">+20.1% from last month</p>
              </CardContent>
              <CardFooter>
                <Badge variant="success">Trending up</Badge>
              </CardFooter>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>People with access to this project.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Alice Johnson', 'Bob Smith', 'Carol Davis'].map((name, i) => (
                    <div key={name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar size="sm"><AvatarImage src={`https://i.pravatar.cc/100?u=team${i}`} /><AvatarFallback>{name[0]}</AvatarFallback></Avatar>
                        <div>
                          <p className="text-sm font-medium">{name}</p>
                          <p className="text-xs text-text-dim">{name.toLowerCase().replace(' ', '.')}@company.com</p>
                        </div>
                      </div>
                      <Badge variant="secondary" size="sm">{['Admin', 'Editor', 'Viewer'][i]}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* INPUT + TEXTAREA + LABEL                               */}
        {/* ═══════════════════════════════════════════════════════ */}
        <Section id="input" title="Input, Textarea & Label" description="Form controls with various states.">
          <Card>
            <CardContent className="pt-6 space-y-6 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="demo-name">Name</Label>
                <Input id="demo-name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-email">Email</Label>
                <Input id="demo-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-password">Password</Label>
                <Input id="demo-password" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-disabled">Disabled</Label>
                <Input id="demo-disabled" disabled placeholder="Can't edit this" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="demo-textarea">Message</Label>
                <Textarea id="demo-textarea" placeholder="Type your message here..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-textarea-disabled">Disabled Textarea</Label>
                <Textarea id="demo-textarea-disabled" disabled placeholder="Not editable" />
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ICONS                                                  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <Section id="icons" title="Icons" description="Lucide icons (1400+) + custom product icons. All bundled — consumer installs nothing.">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Lucide Icons (sample)</Label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Search, name: 'Search' },
                    { icon: Bell, name: 'Bell' },
                    { icon: Settings, name: 'Settings' },
                    { icon: Download, name: 'Download' },
                    { icon: Trash2, name: 'Trash2' },
                    { icon: Plus, name: 'Plus' },
                    { icon: Check, name: 'Check' },
                    { icon: X, name: 'X' },
                    { icon: Mail, name: 'Mail' },
                    { icon: Star, name: 'Star' },
                    { icon: Heart, name: 'Heart' },
                    { icon: Eye, name: 'Eye' },
                    { icon: Lock, name: 'Lock' },
                    { icon: Globe, name: 'Globe' },
                    { icon: Zap, name: 'Zap' },
                    { icon: Shield, name: 'Shield' },
                    { icon: Rocket, name: 'Rocket' },
                    { icon: Database, name: 'Database' },
                    { icon: Cloud, name: 'Cloud' },
                    { icon: Coffee, name: 'Coffee' },
                    { icon: Flame, name: 'Flame' },
                    { icon: Gift, name: 'Gift' },
                    { icon: Music, name: 'Music' },
                    { icon: Phone, name: 'Phone' },
                    { icon: Printer, name: 'Printer' },
                    { icon: Wifi, name: 'Wifi' },
                    { icon: Camera, name: 'Camera' },
                    { icon: Mic, name: 'Mic' },
                  ].map(({ icon: Icon, name }) => (
                    <div key={name} className="flex flex-col items-center gap-1 w-16">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md border border-border">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] text-text-dim truncate w-full text-center">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Icon Sizes</Label>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col items-center gap-1">
                    <Zap className="h-3 w-3" />
                    <span className="text-[10px] text-text-dim">12px</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Zap className="h-4 w-4" />
                    <span className="text-[10px] text-text-dim">16px</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Zap className="h-5 w-5" />
                    <span className="text-[10px] text-text-dim">20px</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Zap className="h-6 w-6" />
                    <span className="text-[10px] text-text-dim">24px</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Zap className="h-8 w-8" />
                    <span className="text-[10px] text-text-dim">32px</span>
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Icons with color</Label>
                <div className="flex items-center gap-4">
                  <Heart className="h-6 w-6 text-destructive" />
                  <Star className="h-6 w-6 text-warning" />
                  <Check className="h-6 w-6 text-success" />
                  <Shield className="h-6 w-6 text-primary" />
                  <Flame className="h-6 w-6 text-destructive" />
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Product Icons</Label>
                <div className="flex flex-wrap gap-4">
                  {['siem', 'ai-firewall', 'ndr', 'soar', 'asm', 'bas', 'nac', 'vm', 'tip', 'redops'].map((name) => (
                    <div key={name} className="flex flex-col items-center gap-1 w-16">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md border border-border">
                        <ProductIcon name={name} size="md" />
                      </div>
                      <span className="text-[10px] text-text-dim truncate w-full text-center">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Icons in context</Label>
                <div className="space-y-3">
                  <Alert variant="info">
                    <Info className="h-4 w-4" />
                    <AlertTitle>With Lucide icon</AlertTitle>
                    <AlertDescription>Alerts can use any Lucide icon as a prefix.</AlertDescription>
                  </Alert>
                  <div className="flex items-center gap-2 border border-border rounded-md px-3 py-2">
                    <Search className="h-4 w-4 text-text-dim" />
                    <Input placeholder="Search with icon..." style={{ border: 'none', padding: 0, boxShadow: 'none', height: 'auto' }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* TOOLTIP                                                */}
        {/* ═══════════════════════════════════════════════════════ */}
        <Section id="tooltip" title="Tooltip" description="Hover to reveal contextual info. Auto-shifts on edges, 12 placements, custom trigger/color.">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Basic</Label>
                <div className="flex flex-wrap gap-3">
                  <Tooltip title="This is a tooltip">
                    <Button variant="outline">Hover me</Button>
                  </Tooltip>
                  <Tooltip title="Search for anything in your workspace">
                    <Button size="icon" variant="outline"><Search className="h-4 w-4" /></Button>
                  </Tooltip>
                  <Tooltip title="You have 3 unread notifications">
                    <Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button>
                  </Tooltip>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Placements</Label>
                <div className="grid grid-cols-3 gap-3 mx-auto py-4">
                  <Tooltip title="topLeft" placement="topLeft"><Button variant="dashed" size="sm" className="w-full">TL</Button></Tooltip>
                  <Tooltip title="top" placement="top"><Button variant="dashed" size="sm" className="w-full">Top</Button></Tooltip>
                  <Tooltip title="topRight" placement="topRight"><Button variant="dashed" size="sm" className="w-full">TR</Button></Tooltip>
                  <Tooltip title="left" placement="left"><Button variant="dashed" size="sm" className="w-full">Left</Button></Tooltip>
                  <div />
                  <Tooltip title="right" placement="right"><Button variant="dashed" size="sm" className="w-full">Right</Button></Tooltip>
                  <Tooltip title="bottomLeft" placement="bottomLeft"><Button variant="dashed" size="sm" className="w-full">BL</Button></Tooltip>
                  <Tooltip title="bottom" placement="bottom"><Button variant="dashed" size="sm" className="w-full">Bottom</Button></Tooltip>
                  <Tooltip title="bottomRight" placement="bottomRight"><Button variant="dashed" size="sm" className="w-full">BR</Button></Tooltip>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Custom Colors</Label>
                <div className="flex flex-wrap gap-3">
                  <Tooltip title="Primary" color="var(--invin-color-primary, #3b82f6)"><Button variant="outline">Blue</Button></Tooltip>
                  <Tooltip title="Success" color="var(--invin-color-success, #16a34a)"><Button variant="outline">Green</Button></Tooltip>
                  <Tooltip title="Danger!" color="var(--invin-color-danger, #dc2626)"><Button variant="outline">Red</Button></Tooltip>
                  <Tooltip title="Warning" color="var(--invin-color-warning, #f59e0b)"><Button variant="outline">Amber</Button></Tooltip>
                  <Tooltip title="Custom" color="#8b5cf6"><Button variant="outline">Purple</Button></Tooltip>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Trigger Modes</Label>
                <div className="flex flex-wrap gap-3">
                  <Tooltip title="Hover triggered (default)" trigger="hover"><Button variant="outline">Hover</Button></Tooltip>
                  <Tooltip title="Click triggered!" trigger="click"><Button variant="outline">Click me</Button></Tooltip>
                  <Tooltip title="Focus triggered (tab to me)" trigger="focus"><Button variant="outline">Focus (Tab)</Button></Tooltip>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">No Arrow</Label>
                <div className="flex flex-wrap gap-3">
                  <Tooltip title="No arrow tooltip" arrow={false}><Button variant="ghost">No arrow</Button></Tooltip>
                  <Tooltip title="With arrow (default)"><Button variant="ghost">With arrow</Button></Tooltip>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Auto-Shift (edge detection)</Label>
                <p className="text-xs text-text-dim mb-3">Buttons at edges — tooltip auto-repositions to stay in viewport.</p>
                <div className="flex justify-between">
                  <Tooltip title="I auto-shift from the left edge"><Button variant="outline" size="sm">Left Edge</Button></Tooltip>
                  <Tooltip title="I auto-shift from the right edge"><Button variant="outline" size="sm">Right Edge</Button></Tooltip>
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-2 block text-xs text-text-dim uppercase tracking-wide">Long Content</Label>
                <div className="flex flex-wrap gap-3">
                  <Tooltip title="This is a longer tooltip message that demonstrates how the text wraps within the max-width container. It stays readable and positioned correctly.">
                    <Button variant="outline">Long text tooltip</Button>
                  </Tooltip>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        </div>
      </main>
    </div>
  );
}

export default DemoComponents;
