import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Skeleton } from 'invin-uix/ui/skeleton';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';

export default function SkeletonDemo() {
  return (
    <ComponentPage
      name="Skeleton"
      description="Animated loading placeholder that mimics content shape while data loads. Three shape variants — compose them to match any layout."
      importCode={`import { Skeleton } from 'invin-uix/ui/skeleton';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'variant', type: "'default' | 'circle' | 'text'", default: "'default'", description: 'Shape — default (rounded-md), circle (rounded-full), text (full-width line)' },
          { name: 'className', type: 'string', default: '—', description: 'Width and height via Tailwind classes (h-10, w-40, etc.)' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Variants ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Variants"
        description="Three shape presets. Size is controlled via className."
        code={`// Rectangle (default) — cards, images, panels
<Skeleton className="h-20 w-full" />

// Circle — avatars, icons
<Skeleton variant="circle" className="h-12 w-12" />

// Text — single line of text (full width, 16px height)
<Skeleton variant="text" />
<Skeleton variant="text" className="w-3/4" />
<Skeleton variant="text" className="w-1/2" />`}
      >
        <div className="flex flex-wrap items-start gap-6">
          <div className="space-y-1">
            <p className="text-[10px] text-[var(--invin-text-faint)] uppercase tracking-[0.05em]">Default</p>
            <Skeleton className="h-20 w-40" />
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-[var(--invin-text-faint)] uppercase tracking-[0.05em]">Circle</p>
            <Skeleton variant="circle" className="h-12 w-12" />
          </div>
          <div className="space-y-1 flex-1 min-w-[150px]">
            <p className="text-[10px] text-[var(--invin-text-faint)] uppercase tracking-[0.05em]">Text lines</p>
            <div className="space-y-2">
              <Skeleton variant="text" />
              <Skeleton variant="text" className="w-3/4" />
              <Skeleton variant="text" className="w-1/2" />
            </div>
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── Custom Sizes ───────────────────────────────────────── */}
      <PlaygroundSection
        title="Custom Sizes"
        description="Control dimensions with standard Tailwind height/width classes."
        code={`<Skeleton className="h-6 w-24" />
<Skeleton className="h-10 w-40" />
<Skeleton className="h-32 w-full" />
<Skeleton variant="circle" className="h-8 w-8" />
<Skeleton variant="circle" className="h-16 w-16" />`}
      >
        <div className="flex flex-wrap items-end gap-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-16 w-32" />
          <Skeleton variant="circle" className="h-8 w-8" />
          <Skeleton variant="circle" className="h-12 w-12" />
          <Skeleton variant="circle" className="h-16 w-16" />
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[length:var(--invin-text-sub-heading)] font-[700]">Use cases</h3>
        <p className="text-[length:var(--invin-text-body)] text-[var(--invin-text-dim)]">Compose skeletons to match the content they replace.</p>
      </div>

      <PlaygroundSection
        title="User profile"
        description="Avatar + name + bio lines — matches a typical user card."
        code={`<div className="flex items-center gap-4">
  <Skeleton variant="circle" className="h-12 w-12" />
  <div className="space-y-2 flex-1">
    <Skeleton variant="text" className="w-1/3" />
    <Skeleton variant="text" className="w-2/3" />
  </div>
</div>`}
      >
        <div className="flex items-center gap-4 w-full">
          <Skeleton variant="circle" className="h-12 w-12" />
          <div className="space-y-2 flex-1">
            <Skeleton variant="text" className="w-1/3" />
            <Skeleton variant="text" className="w-2/3" />
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Card loading"
        description="Image area + title + description to replace a content card."
        code={`<Card>
  <CardContent>
    <Skeleton className="h-36 w-full rounded-lg" />
    <div className="mt-3 space-y-2">
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
    </div>
  </CardContent>
</Card>`}
      >
        <Card>
          <CardContent className="py-4">
            <Skeleton className="h-36 w-full rounded-lg" />
            <div className="mt-3 space-y-2">
              <Skeleton variant="text" className="w-3/4" />
              <Skeleton variant="text" className="w-1/2" />
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="List items"
        description="Repeated row pattern for tables or feeds."
        code={`{[1,2,3,4].map(i => (
  <div key={i} className="flex items-center gap-3 py-2">
    <Skeleton variant="circle" className="h-8 w-8" />
    <Skeleton variant="text" className="flex-1" />
    <Skeleton className="h-5 w-16 rounded-full" />
  </div>
))}`}
      >
        <Card>
          <CardContent className="py-3">
            <div className="space-y-1">
              {[1,2,3,4].map(i => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <Skeleton variant="circle" className="h-8 w-8" />
                  <Skeleton variant="text" className="flex-1" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Stats / KPI grid"
        description="Multiple stat cards loading at once."
        code={`<div className="grid grid-cols-3 gap-4">
  {[1,2,3].map(i => (
    <Card key={i}>
      <CardContent>
        <Skeleton variant="text" className="w-1/2 mb-2" />
        <Skeleton className="h-7 w-20" />
        <Skeleton variant="text" className="w-2/3 mt-2" />
      </CardContent>
    </Card>
  ))}
</div>`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1,2,3].map(i => (
            <Card key={i}>
              <CardContent className="py-3">
                <Skeleton variant="text" className="w-1/2 mb-2" />
                <Skeleton className="h-7 w-20" />
                <Skeleton variant="text" className="w-2/3 mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sidebar navigation"
        description="Menu items loading in a sidebar."
        code={`<div className="w-52 space-y-2">
  <Skeleton variant="text" className="w-1/3 h-3 mb-3" />
  {[1,2,3,4,5].map(i => (
    <div key={i} className="flex items-center gap-2 px-2 py-1.5">
      <Skeleton className="h-4 w-4 rounded" />
      <Skeleton variant="text" className="flex-1" />
    </div>
  ))}
</div>`}
      >
        <div className="w-52 p-3 rounded-[8px] border border-[var(--invin-border)]">
          <Skeleton variant="text" className="w-1/3 h-3 mb-3" />
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex items-center gap-2 px-2 py-1.5">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton variant="text" className="flex-1" />
            </div>
          ))}
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
