import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Button } from 'invin-uix/ui/button';
import {
  Search, Bell, Settings, Download, Trash2, Plus, Check, X,
  Mail, Star, Heart, Eye, Lock, Globe, Zap, Shield, Rocket,
  Database, Cloud, Coffee, Flame, Gift, Music, Phone, Wifi,
  Camera, Mic, ArrowRight, ChevronDown, MoreHorizontal,
  Home, User, FileText, Activity, AlertCircle, Info,
  ProductIcon
} from 'invin-uix/ui/icons';

export default function IconsDemo() {
  const commonIcons = [
    { icon: Search, name: 'Search' }, { icon: Bell, name: 'Bell' },
    { icon: Settings, name: 'Settings' }, { icon: Download, name: 'Download' },
    { icon: Trash2, name: 'Trash2' }, { icon: Plus, name: 'Plus' },
    { icon: Check, name: 'Check' }, { icon: X, name: 'X' },
    { icon: Mail, name: 'Mail' }, { icon: Star, name: 'Star' },
    { icon: Heart, name: 'Heart' }, { icon: Eye, name: 'Eye' },
    { icon: Lock, name: 'Lock' }, { icon: Globe, name: 'Globe' },
    { icon: Zap, name: 'Zap' }, { icon: Shield, name: 'Shield' },
    { icon: Rocket, name: 'Rocket' }, { icon: Database, name: 'Database' },
    { icon: Cloud, name: 'Cloud' }, { icon: Coffee, name: 'Coffee' },
    { icon: Flame, name: 'Flame' }, { icon: Gift, name: 'Gift' },
    { icon: Music, name: 'Music' }, { icon: Phone, name: 'Phone' },
    { icon: Wifi, name: 'Wifi' }, { icon: Camera, name: 'Camera' },
    { icon: Mic, name: 'Mic' }, { icon: Home, name: 'Home' },
    { icon: User, name: 'User' }, { icon: FileText, name: 'FileText' },
    { icon: Activity, name: 'Activity' }, { icon: AlertCircle, name: 'AlertCircle' },
    { icon: ArrowRight, name: 'ArrowRight' }, { icon: ChevronDown, name: 'ChevronDown' },
    { icon: MoreHorizontal, name: 'MoreHorizontal' }, { icon: Info, name: 'Info' },
  ];

  const productIcons = ['siem', 'ai-firewall', 'ndr', 'soar', 'asm', 'bas', 'nac', 'vm', 'tip', 'redops', 'ot-firewall', 'nms', 'decoys', 'invin-ai', 'gsos-engineering', 'gsos-management'];

  return (
    <ComponentPage
      name="Icons"
      description="1400+ Lucide icons re-exported (tree-shakeable) plus 26 custom product SVG icons. No need to install lucide-react separately — it's bundled."
      importCode={`// Lucide icons (1400+ available)
import { Search, Bell, Settings } from 'invin-uix/ui/icons';

// Custom product icons
import { ProductIcon } from 'invin-uix/ui/icons';`}
    >

      {/* ─── Props Tables ───────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">Lucide Icons</p>
        <PropsTable
          props={[
            { name: 'style', type: '{ width, height }', default: '—', description: 'Set size via inline style (recommended)' },
            { name: 'className', type: 'string', default: '—', description: 'Tailwind classes (h-4 w-4, etc.)' },
            { name: 'color', type: 'string', default: 'currentColor', description: 'Stroke colour (inherits from parent by default)' },
            { name: 'strokeWidth', type: 'number', default: '2', description: 'Stroke thickness' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[length:var(--invin-text-eyebrow)] font-[600] uppercase tracking-[0.05em] text-[var(--invin-text-faint)]">ProductIcon</p>
        <PropsTable
          props={[
            { name: 'name', type: 'ProductIconName', default: '—', description: "Product identifier (e.g. 'siem', 'ndr', 'ai-firewall')" },
            { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Preset size (20 / 28 / 36 / 44 px)' },
          ]}
        />
      </div>

      <Separator variant="bold" />

      {/* ─── Lucide Grid ────────────────────────────────────────── */}
      <PlaygroundSection
        title="Common Lucide icons"
        description="A sample of frequently used icons. Import any of the 1400+ icons by name."
        code={`import { Search, Bell, Settings } from 'invin-uix/ui/icons';

// Use with inline style (recommended for consistent sizing)
<Search style={{ width: 16, height: 16 }} />

// Or Tailwind classes
<Bell className="h-4 w-4" />`}
      >
        <div className="flex flex-wrap gap-3">
          {commonIcons.map(({ icon: Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1 w-14">
              <div className="flex items-center justify-center h-9 w-9 rounded-md border border-[var(--invin-border)] hover:bg-[var(--invin-surface-hover)] transition-colors">
                <Icon style={{ width: 16, height: 16 }} />
              </div>
              <span className="text-[9px] text-[var(--invin-text-faint)] truncate w-full text-center">{name}</span>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      {/* ─── Sizes ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizing"
        description="Icons have no intrinsic size — you control it. Use style or className."
        code={`<Zap style={{ width: 12, height: 12 }} />  // 12px
<Zap style={{ width: 16, height: 16 }} />  // 16px (common for buttons)
<Zap style={{ width: 20, height: 20 }} />  // 20px
<Zap style={{ width: 24, height: 24 }} />  // 24px
<Zap style={{ width: 32, height: 32 }} />  // 32px`}
      >
        <div className="flex items-end gap-6">
          {[12, 16, 20, 24, 32].map(s => (
            <div key={s} className="flex flex-col items-center gap-2">
              <Zap style={{ width: s, height: s }} />
              <span className="text-[10px] text-[var(--invin-text-faint)]">{s}px</span>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      {/* ─── Colours ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Colours"
        description="Icons inherit currentColor by default. Override with style or token variables."
        code={`<Heart style={{ width: 20, height: 20, color: 'var(--invin-error)' }} />
<Star style={{ width: 20, height: 20, color: 'var(--invin-warn)' }} />
<Check style={{ width: 20, height: 20, color: 'var(--invin-ok)' }} />
<Shield style={{ width: 20, height: 20, color: 'var(--invin-accent)' }} />
<Info style={{ width: 20, height: 20, color: 'var(--invin-info)' }} />`}
      >
        <div className="flex items-center gap-5">
          <Heart style={{ width: 20, height: 20, color: 'var(--invin-error)' }} />
          <Star style={{ width: 20, height: 20, color: 'var(--invin-warn)' }} />
          <Check style={{ width: 20, height: 20, color: 'var(--invin-ok)' }} />
          <Shield style={{ width: 20, height: 20, color: 'var(--invin-accent)' }} />
          <Info style={{ width: 20, height: 20, color: 'var(--invin-info)' }} />
        </div>
      </PlaygroundSection>

      <Separator />

      {/* ─── Product Icons ──────────────────────────────────────── */}
      <PlaygroundSection
        title="Product Icons"
        description="26 custom branded product SVGs. Static assets resolved at build time (no fetch)."
        code={`import { ProductIcon } from 'invin-uix/ui/icons';

<ProductIcon name="siem" size="sm" />   // 20px
<ProductIcon name="ndr" size="md" />    // 28px
<ProductIcon name="soar" size="lg" />   // 36px
<ProductIcon name="asm" size="xl" />    // 44px`}
      >
        <div className="flex flex-wrap gap-3">
          {productIcons.map(name => (
            <div key={name} className="flex flex-col items-center gap-1 w-16">
              <div className="flex items-center justify-center h-10 w-10 rounded-md border border-[var(--invin-border)] hover:bg-[var(--invin-surface-hover)] transition-colors">
                <ProductIcon name={name} size="sm" />
              </div>
              <span className="text-[9px] text-[var(--invin-text-faint)] truncate w-full text-center">{name}</span>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      {/* ─── Product Icon Sizes ─────────────────────────────────── */}
      <PlaygroundSection
        title="Product Icon Sizes"
        description="Four preset sizes for different contexts."
        code={`<ProductIcon name="siem" size="sm" />  // 20px
<ProductIcon name="siem" size="md" />  // 28px
<ProductIcon name="siem" size="lg" />  // 36px
<ProductIcon name="siem" size="xl" />  // 44px`}
      >
        <div className="flex items-end gap-6">
          {['sm', 'md', 'lg', 'xl'].map(s => (
            <div key={s} className="flex flex-col items-center gap-2">
              <ProductIcon name="siem" size={s} />
              <span className="text-[10px] text-[var(--invin-text-faint)]">{s}</span>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Icons in context.</p>
      </div>

      <PlaygroundSection
        title="In buttons"
        description="Icons as children inside buttons. The button gap handles spacing."
        code={`<Button><Download style={{ width: 14, height: 14 }} /> Download</Button>
<Button variant="ghost" size="icon-sm"><Settings style={{ width: 14, height: 14 }} /></Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button><Download style={{ width: 14, height: 14 }} /> Download</Button>
          <Button variant="outline"><Search style={{ width: 14, height: 14 }} /> Search</Button>
          <Button variant="ghost" size="icon-sm" aria-label="Settings"><Settings style={{ width: 14, height: 14 }} /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Bell"><Bell style={{ width: 14, height: 14 }} /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="More"><MoreHorizontal style={{ width: 14, height: 14 }} /></Button>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Navigation items"
        description="Icons paired with text in sidebar or menu items."
        code={`<div className="flex items-center gap-2">
  <Home style={{ width: 16, height: 16 }} />
  <span>Dashboard</span>
</div>`}
      >
        <Card className="w-52">
          <CardContent className="py-2">
            <div className="space-y-0.5">
              {[
                { icon: Home, label: 'Dashboard', active: true },
                { icon: User, label: 'Users', active: false },
                { icon: FileText, label: 'Documents', active: false },
                { icon: Settings, label: 'Settings', active: false },
              ].map(item => (
                <div key={item.label} className={`flex items-center gap-2 px-2 py-2 rounded-md ${item.active ? 'bg-[var(--invin-accent-soft)] text-[var(--invin-accent)]' : 'text-[var(--invin-text-dim)] hover:bg-[var(--invin-surface-hover)]'}`}>
                  <item.icon style={{ width: 16, height: 16 }} />
                  <span className="text-[length:var(--invin-text-body)] font-[500]">{item.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
