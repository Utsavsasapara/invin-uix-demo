import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Button } from 'invin-uix/ui/button';
import {
  MagnifyingGlass, Bell, Gear, DownloadSimple, Trash, Plus, Check, X,
  Envelope, Star, Heart, Eye, Lock, Globe, Lightning, Shield, Rocket,
  Database, Cloud, Coffee, Fire, Gift, MusicNote, Phone, WifiHigh,
  Camera, Microphone, ArrowRight, CaretDown, DotsThree,
  House, User, FileText, Pulse, WarningCircle, Info,
  ProductIcon
} from 'invin-uix/ui/icons';

export default function IconsDemo() {
  const commonIcons = [
    { icon: MagnifyingGlass, name: 'MagnifyingGlass' }, { icon: Bell, name: 'Bell' },
    { icon: Gear, name: 'Gear' }, { icon: DownloadSimple, name: 'DownloadSimple' },
    { icon: Trash, name: 'Trash' }, { icon: Plus, name: 'Plus' },
    { icon: Check, name: 'Check' }, { icon: X, name: 'X' },
    { icon: Envelope, name: 'Envelope' }, { icon: Star, name: 'Star' },
    { icon: Heart, name: 'Heart' }, { icon: Eye, name: 'Eye' },
    { icon: Lock, name: 'Lock' }, { icon: Globe, name: 'Globe' },
    { icon: Lightning, name: 'Lightning' }, { icon: Shield, name: 'Shield' },
    { icon: Rocket, name: 'Rocket' }, { icon: Database, name: 'Database' },
    { icon: Cloud, name: 'Cloud' }, { icon: Coffee, name: 'Coffee' },
    { icon: Fire, name: 'Fire' }, { icon: Gift, name: 'Gift' },
    { icon: MusicNote, name: 'MusicNote' }, { icon: Phone, name: 'Phone' },
    { icon: WifiHigh, name: 'WifiHigh' }, { icon: Camera, name: 'Camera' },
    { icon: Microphone, name: 'Microphone' }, { icon: House, name: 'House' },
    { icon: User, name: 'User' }, { icon: FileText, name: 'FileText' },
    { icon: Pulse, name: 'Pulse' }, { icon: WarningCircle, name: 'WarningCircle' },
    { icon: ArrowRight, name: 'ArrowRight' }, { icon: CaretDown, name: 'CaretDown' },
    { icon: DotsThree, name: 'DotsThree' }, { icon: Info, name: 'Info' },
  ];

  const productIcons = ['siem', 'ai-firewall', 'ndr', 'soar', 'asm', 'bas', 'nac', 'vm', 'tip', 'redops', 'ot-firewall', 'nms', 'decoys', 'invin-ai', 'gsos-engineering', 'gsos-management'];

  return (
    <ComponentPage
      name="Icons"
      description="Full Phosphor icon set re-exported (tree-shakeable) plus 26 custom product SVG icons. No need to install @phosphor-icons/react separately — it's bundled."
      importCode={`// Phosphor icons (6000+ available, all weights)
import { MagnifyingGlass, Bell, Gear } from 'invin-uix/ui/icons';

// Custom product icons
import { ProductIcon } from 'invin-uix/ui/icons';`}
    >

      {/* ─── Props Tables ───────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">Phosphor Icons</p>
        <PropsTable
          props={[
            { name: 'style', type: '{ width, height }', default: '—', description: 'Set size via inline style (recommended)' },
            { name: 'className', type: 'string', default: '—', description: 'Tailwind classes (h-4 w-4, etc.)' },
            { name: 'color', type: 'string', default: 'currentColor', description: 'Fill/stroke colour (inherits from parent by default)' },
            { name: 'weight', type: "'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'", default: "'regular'", description: 'Icon weight/style. Bold is recommended for UI.' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">ProductIcon</p>
        <PropsTable
          props={[
            { name: 'name', type: 'ProductIconName', default: '—', description: "Product identifier (e.g. 'siem', 'ndr', 'ai-firewall')" },
            { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Preset size (20 / 28 / 36 / 44 px)' },
          ]}
        />
      </div>

      <Separator variant="bold" />

      {/* ─── Phosphor Grid ────────────────────────────────────────── */}
      <PlaygroundSection
        title="Common Phosphor icons"
        description="A sample of frequently used icons. Import any Phosphor icon by its name."
        code={`import { MagnifyingGlass, Bell, Gear } from 'invin-uix/ui/icons';

// Use with inline style (recommended for consistent sizing)
<MagnifyingGlass style={{ width: 16, height: 16 }} />

// Or Tailwind classes
<Bell className="h-4 w-4" />`}
      >
        <div className="flex flex-wrap gap-3">
          {commonIcons.map(({ icon: Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-1 w-14">
              <div className="flex items-center justify-center h-9 w-9 rounded-md border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors">
                <Icon style={{ width: 16, height: 16 }} />
              </div>
              <span className="text-[9px] text-[var(--muted-foreground-faint)] truncate w-full text-center">{name}</span>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      {/* ─── Sizes ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizing"
        description="Icons have no intrinsic size — you control it. Use style or className."
        code={`<Lightning style={{ width: 12, height: 12 }} />  // 12px
<Lightning style={{ width: 16, height: 16 }} />  // 16px (common for buttons)
<Lightning style={{ width: 20, height: 20 }} />  // 20px
<Lightning style={{ width: 24, height: 24 }} />  // 24px
<Lightning style={{ width: 32, height: 32 }} />  // 32px`}
      >
        <div className="flex items-end gap-6">
          {[12, 16, 20, 24, 32].map(s => (
            <div key={s} className="flex flex-col items-center gap-2">
              <Lightning style={{ width: s, height: s }} />
              <span className="text-[10px] text-[var(--muted-foreground-faint)]">{s}px</span>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      {/* ─── Colours ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Colours"
        description="Icons inherit currentColor by default. Override with style or token variables."
        code={`<Heart style={{ width: 20, height: 20, color: 'var(--error)' }} />
<Star style={{ width: 20, height: 20, color: 'var(--degraded)' }} />
<Check style={{ width: 20, height: 20, color: 'var(--ok)' }} />
<Shield style={{ width: 20, height: 20, color: 'var(--accent)' }} />
<Info style={{ width: 20, height: 20, color: 'var(--info)' }} />`}
      >
        <div className="flex items-center gap-5">
          <Heart style={{ width: 20, height: 20, color: 'var(--error)' }} />
          <Star style={{ width: 20, height: 20, color: 'var(--degraded)' }} />
          <Check style={{ width: 20, height: 20, color: 'var(--ok)' }} />
          <Shield style={{ width: 20, height: 20, color: 'var(--accent)' }} />
          <Info style={{ width: 20, height: 20, color: 'var(--info)' }} />
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
              <div className="flex items-center justify-center h-10 w-10 rounded-md border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors">
                <ProductIcon name={name} size="sm" />
              </div>
              <span className="text-[9px] text-[var(--muted-foreground-faint)] truncate w-full text-center">{name}</span>
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
              <span className="text-[10px] text-[var(--muted-foreground-faint)]">{s}</span>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Icons in context.</p>
      </div>

      <PlaygroundSection
        title="In buttons"
        description="Icons as children inside buttons. The button gap handles spacing."
        code={`<Button><DownloadSimple style={{ width: 14, height: 14 }} /> DownloadSimple</Button>
<Button variant="ghost" size="icon-sm"><Gear style={{ width: 14, height: 14 }} /></Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button><DownloadSimple style={{ width: 14, height: 14 }} /> DownloadSimple</Button>
          <Button variant="outline"><MagnifyingGlass style={{ width: 14, height: 14 }} /> MagnifyingGlass</Button>
          <Button variant="ghost" size="icon-sm" aria-label="Gear"><Gear style={{ width: 14, height: 14 }} /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="Bell"><Bell style={{ width: 14, height: 14 }} /></Button>
          <Button variant="ghost" size="icon-sm" aria-label="More"><DotsThree style={{ width: 14, height: 14 }} /></Button>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Navigation items"
        description="Icons paired with text in sidebar or menu items."
        code={`<div className="flex items-center gap-2">
  <House style={{ width: 16, height: 16 }} />
  <span>Dashboard</span>
</div>`}
      >
        <Card className="w-52">
          <CardContent className="py-2">
            <div className="space-y-0.5">
              {[
                { icon: House, label: 'Dashboard', active: true },
                { icon: User, label: 'Users', active: false },
                { icon: FileText, label: 'Documents', active: false },
                { icon: Gear, label: 'Gear', active: false },
              ].map(item => (
                <div key={item.label} className={`flex items-center gap-2 px-2 py-2 rounded-md ${item.active ? 'bg-[var(--accent-soft)] text-[var(--accent)]' : 'text-[var(--muted-foreground)] hover:bg-[var(--secondary)]'}`}>
                  <item.icon style={{ width: 16, height: 16 }} />
                  <span className="text-[var(--foreground)] font-[500]">{item.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
