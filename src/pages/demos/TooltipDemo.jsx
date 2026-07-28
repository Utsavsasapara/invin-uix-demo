import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Button } from 'invin-uix/ui/button';
import { Tooltip } from 'invin-uix/ui/tooltip';
import { Separator } from 'invin-uix/ui/separator';
import { Search, Bell, Settings, Copy, Download, Trash2, Info } from 'invin-uix/ui/icons';

export default function TooltipDemo() {
  return (
    <ComponentPage
      name="Tooltip"
      description="Contextual text popup on hover/focus/click. Portal-based positioning with auto-flip at viewport edges, 12 placements, arrow, custom colours, and delay control."
      importCode={`import { Tooltip } from 'invin-uix/ui/tooltip';`}
    >
      <PropsTable
        props={[
          { name: 'title', type: 'ReactNode', default: '—', description: 'Tooltip content. If empty/falsy, tooltip is disabled.' },
          { name: 'placement', type: '12 positions', default: "'top'", description: 'top, topLeft, topRight, bottom, bottomLeft, bottomRight, left, leftTop, leftBottom, right, rightTop, rightBottom' },
          { name: 'trigger', type: "'hover' | 'focus' | 'click' | array", default: "'hover'", description: 'What triggers the tooltip' },
          { name: 'color', type: 'string', default: '—', description: 'Custom background colour (text auto-sets to white)' },
          { name: 'arrow', type: 'boolean', default: 'true', description: 'Show directional arrow' },
          { name: 'open', type: 'boolean', default: '—', description: 'Controlled open state' },
          { name: 'onOpenChange', type: '(open: boolean) => void', default: '—', description: 'Open/close callback' },
          { name: 'mouseEnterDelay', type: 'number (ms)', default: '100', description: 'Delay before showing on hover' },
          { name: 'mouseLeaveDelay', type: 'number (ms)', default: '100', description: 'Delay before hiding on leave' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Basic ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic"
        description="Wrap any element. Tooltip shows on hover with a short delay."
        code={`<Tooltip title="Search your workspace">
  <Button variant="outline" size="icon-sm">
    <Search style={{ width: 14, height: 14 }} />
  </Button>
</Tooltip>`}
      >
        <div className="flex items-center gap-3">
          <Tooltip title="Search"><Button variant="outline" size="icon-sm"><Search style={{ width: 14, height: 14 }} /></Button></Tooltip>
          <Tooltip title="Notifications"><Button variant="outline" size="icon-sm"><Bell style={{ width: 14, height: 14 }} /></Button></Tooltip>
          <Tooltip title="Settings"><Button variant="outline" size="icon-sm"><Settings style={{ width: 14, height: 14 }} /></Button></Tooltip>
          <Tooltip title="This is a text tooltip"><Button variant="outline">Hover me</Button></Tooltip>
        </div>
      </PlaygroundSection>

      {/* ─── Placements ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Placements (12)"
        description="Control positioning. Auto-flips if tooltip would go off-screen."
        code={`<Tooltip title="Top" placement="top">...</Tooltip>
<Tooltip title="Bottom" placement="bottom">...</Tooltip>
<Tooltip title="Left" placement="left">...</Tooltip>
<Tooltip title="Right" placement="right">...</Tooltip>
// Also: topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom`}
      >
        <div className="grid grid-cols-3 gap-3 w-full max-w-xs mx-auto py-4">
          <Tooltip title="topLeft" placement="topLeft"><Button variant="outline" size="sm" className="w-full">TL</Button></Tooltip>
          <Tooltip title="top" placement="top"><Button variant="outline" size="sm" className="w-full">Top</Button></Tooltip>
          <Tooltip title="topRight" placement="topRight"><Button variant="outline" size="sm" className="w-full">TR</Button></Tooltip>
          <Tooltip title="left" placement="left"><Button variant="outline" size="sm" className="w-full">Left</Button></Tooltip>
          <div />
          <Tooltip title="right" placement="right"><Button variant="outline" size="sm" className="w-full">Right</Button></Tooltip>
          <Tooltip title="bottomLeft" placement="bottomLeft"><Button variant="outline" size="sm" className="w-full">BL</Button></Tooltip>
          <Tooltip title="bottom" placement="bottom"><Button variant="outline" size="sm" className="w-full">Bottom</Button></Tooltip>
          <Tooltip title="bottomRight" placement="bottomRight"><Button variant="outline" size="sm" className="w-full">BR</Button></Tooltip>
        </div>
      </PlaygroundSection>

      {/* ─── Triggers ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Trigger modes"
        description="Hover (default), click, or focus. Combine multiple: trigger={['hover', 'focus']}."
        code={`<Tooltip title="Hover" trigger="hover">...</Tooltip>
<Tooltip title="Click!" trigger="click">...</Tooltip>
<Tooltip title="Focus" trigger="focus">...</Tooltip>
<Tooltip title="Hover+Focus" trigger={['hover', 'focus']}>...</Tooltip>`}
      >
        <div className="flex items-center gap-3">
          <Tooltip title="Hover triggered" trigger="hover"><Button variant="outline">Hover</Button></Tooltip>
          <Tooltip title="Click triggered!" trigger="click"><Button variant="outline">Click</Button></Tooltip>
          <Tooltip title="Focus triggered (Tab to me)" trigger="focus"><Button variant="outline">Focus (Tab)</Button></Tooltip>
          <Tooltip title="Hover or focus" trigger={['hover', 'focus']}><Button variant="outline">Both</Button></Tooltip>
        </div>
      </PlaygroundSection>

      {/* ─── Custom Colors ──────────────────────────────────────── */}
      <PlaygroundSection
        title="Custom colours"
        description="Override background with color prop. Text auto-sets to white."
        code={`<Tooltip title="Info" color="var(--invin-info)">...</Tooltip>
<Tooltip title="Success" color="var(--invin-ok)">...</Tooltip>
<Tooltip title="Error" color="var(--invin-error)">...</Tooltip>
<Tooltip title="Purple" color="#8b5cf6">...</Tooltip>`}
      >
        <div className="flex items-center gap-3">
          <Tooltip title="Info tooltip" color="var(--invin-info)"><Button variant="outline">Info</Button></Tooltip>
          <Tooltip title="Success!" color="var(--invin-ok)"><Button variant="outline">Success</Button></Tooltip>
          <Tooltip title="Error state" color="var(--invin-error)"><Button variant="outline">Error</Button></Tooltip>
          <Tooltip title="Custom purple" color="#8b5cf6"><Button variant="outline">Purple</Button></Tooltip>
        </div>
      </PlaygroundSection>

      {/* ─── No Arrow ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="No arrow"
        description="Set arrow={false} for a minimal floating label style."
        code={`<Tooltip title="No arrow" arrow={false}>
  <Button variant="ghost">Minimal</Button>
</Tooltip>`}
      >
        <div className="flex items-center gap-3">
          <Tooltip title="No arrow tooltip" arrow={false}><Button variant="ghost">No arrow</Button></Tooltip>
          <Tooltip title="With arrow (default)"><Button variant="ghost">With arrow</Button></Tooltip>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Common patterns.</p>
      </div>

      <PlaygroundSection
        title="Icon button toolbar"
        description="Tooltips on icon-only buttons explain what each action does."
        code={`<div className="flex items-center gap-1">
  <Tooltip title="Copy"><Button variant="ghost" size="icon-sm"><Copy /></Button></Tooltip>
  <Tooltip title="Download"><Button variant="ghost" size="icon-sm"><Download /></Button></Tooltip>
  <Tooltip title="Delete"><Button variant="ghost" size="icon-sm"><Trash2 /></Button></Tooltip>
</div>`}
      >
        <div className="flex items-center gap-1 p-1.5 rounded-[8px] border border-[var(--invin-border)] w-fit">
          <Tooltip title="Copy to clipboard"><Button variant="ghost" size="icon-sm"><Copy style={{ width: 14, height: 14 }} /></Button></Tooltip>
          <Tooltip title="Download file"><Button variant="ghost" size="icon-sm"><Download style={{ width: 14, height: 14 }} /></Button></Tooltip>
          <Tooltip title="Delete item"><Button variant="ghost" size="icon-sm"><Trash2 style={{ width: 14, height: 14 }} /></Button></Tooltip>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Info icon with tooltip"
        description="Small info icon next to a label that explains the field."
        code={`<div className="flex items-center gap-1.5">
  <span>API Key</span>
  <Tooltip title="Your API key is used to authenticate requests. Keep it secret.">
    <Info style={{ width: 14, height: 14, color: 'var(--invin-text-dim)', cursor: 'help' }} />
  </Tooltip>
</div>`}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-[length:var(--invin-text-body)] font-[500]">API Key</span>
          <Tooltip title="Your API key is used to authenticate requests. Keep it secret and never expose it in client-side code.">
            <Info style={{ width: 14, height: 14, color: 'var(--invin-text-dim)', cursor: 'help' }} />
          </Tooltip>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Keyboard shortcut hint"
        description="Show keyboard shortcuts in tooltips for power users."
        code={`<Tooltip title="Search (⌘K)">
  <Button variant="ghost" size="icon-sm"><Search /></Button>
</Tooltip>`}
      >
        <div className="flex items-center gap-2">
          <Tooltip title="Search (⌘K)"><Button variant="ghost" size="icon-sm"><Search style={{ width: 14, height: 14 }} /></Button></Tooltip>
          <Tooltip title="Notifications (⌘N)"><Button variant="ghost" size="icon-sm"><Bell style={{ width: 14, height: 14 }} /></Button></Tooltip>
          <Tooltip title="Settings (⌘,)"><Button variant="ghost" size="icon-sm"><Settings style={{ width: 14, height: 14 }} /></Button></Tooltip>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
