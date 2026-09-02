import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Pagination } from 'invin-uix/ui/pagination';
import { Separator } from 'invin-uix/ui/separator';
import { Card, CardContent } from 'invin-uix/ui/card';

export default function PaginationDemo() {
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(5);

  return (
    <ComponentPage
      name="Pagination"
      description="Smart pagination component with 3 variants (default, outline, simple), auto-ellipsis, controlled/uncontrolled, and size options. One prop-based API — no manual assembly needed."
      importCode={`import { Pagination } from 'invin-uix/ui/pagination';`}
    >
      <PropsTable
        props={[
          { name: 'total', type: 'number (required)', default: '—', description: 'Total number of items' },
          { name: 'pageSize', type: 'number', default: '10', description: 'Items per page' },
          { name: 'current', type: 'number', default: '—', description: 'Controlled current page (1-indexed)' },
          { name: 'defaultCurrent', type: 'number', default: '1', description: 'Uncontrolled default page' },
          { name: 'onChange', type: '(page: number) => void', default: '—', description: 'Page change callback' },
          { name: 'variant', type: "'default' | 'outline' | 'simple'", default: "'default'", description: 'Visual style' },
          { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Button size' },
          { name: 'showLabels', type: 'boolean', default: 'true', description: 'Show Prev/Next text labels' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Default ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Default"
        description="Primary filled button for active page. Ghost for inactive. Auto-generates ellipsis for large page counts."
        code={`const [page, setPage] = useState(1);

<Pagination total={100} current={page} onChange={setPage} />`}
      >
        <div className="space-y-3 w-full">
          <Pagination total={100} current={page} onChange={setPage} />
          <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)] text-center">Page: {page} of 10</p>
        </div>
      </PlaygroundSection>

      {/* ─── Outline ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Outline"
        description="Outlined active page with accent border. Subtler than default."
        code={`<Pagination total={120} pageSize={10} current={page} onChange={setPage} variant="outline" />`}
      >
        <div className="space-y-3 w-full">
          <Pagination total={120} pageSize={10} current={page2} onChange={setPage2} variant="outline" />
          <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)] text-center">Page: {page2} of 12</p>
        </div>
      </PlaygroundSection>

      {/* ─── Simple ─────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Simple"
        description="Compact — just arrows and page counter. For tight spaces or mobile."
        code={`<Pagination total={50} current={page} onChange={setPage} variant="simple" />`}
      >
        <Pagination total={50} current={page} onChange={setPage} variant="simple" />
      </PlaygroundSection>

      {/* ─── Sizes ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="md (default, 34px buttons) and sm (28px buttons)."
        code={`<Pagination total={80} defaultCurrent={3} size="md" />
<Pagination total={80} defaultCurrent={3} size="sm" />`}
      >
        <div className="space-y-4 w-full">
          <div>
            <p className="text-[10px] text-[var(--muted-foreground-faint)] mb-2">md (default)</p>
            <Pagination total={80} defaultCurrent={3} size="md" />
          </div>
          <div>
            <p className="text-[10px] text-[var(--muted-foreground-faint)] mb-2">sm</p>
            <Pagination total={80} defaultCurrent={3} size="sm" />
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── No Labels ──────────────────────────────────────────── */}
      <PlaygroundSection
        title="Without labels"
        description="Hide Prev/Next text — just arrow icons."
        code={`<Pagination total={100} defaultCurrent={4} showLabels={false} />`}
      >
        <Pagination total={100} defaultCurrent={4} showLabels={false} />
      </PlaygroundSection>

      {/* ─── Few Pages ──────────────────────────────────────────── */}
      <PlaygroundSection
        title="Few pages (no ellipsis)"
        description="When total pages ≤ 7, all pages show without ellipsis."
        code={`<Pagination total={30} pageSize={10} defaultCurrent={2} />`}
      >
        <Pagination total={30} pageSize={10} defaultCurrent={2} />
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns.</p>
      </div>

      <PlaygroundSection
        title="Table footer"
        description="Pagination below a data table."
        code={`<div className="flex items-center justify-between">
  <span>Showing 1–10 of 245 results</span>
  <Pagination total={245} pageSize={10} current={page} onChange={setPage} size="sm" showLabels={false} />
</div>`}
      >
        <Card className="w-full">
          <CardContent className="py-3">
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted-foreground)] text-[var(--muted-foreground)]">Showing 1–10 of 245 results</span>
              <Pagination total={245} pageSize={10} defaultCurrent={1} size="sm" showLabels={false} />
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Mobile compact"
        description="Simple variant for mobile-first layouts."
        code={`<Pagination total={100} current={page} onChange={setPage} variant="simple" size="sm" />`}
      >
        <Card className="w-full max-w-xs">
          <CardContent className="py-3 flex justify-center">
            <Pagination total={100} defaultCurrent={3} variant="simple" size="sm" />
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
