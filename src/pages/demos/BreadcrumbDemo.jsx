import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from 'invin-uix/ui/breadcrumb';
import { Separator } from 'invin-uix/ui/separator';
import { Home, Settings } from 'invin-uix/ui/icons';

export default function BreadcrumbDemo() {
  return (
    <ComponentPage
      name="Breadcrumb"
      description="Hierarchical navigation trail. Dual API: simple items array for quick use, or compound sub-components for full control. Supports icons, custom separators, and ellipsis."
      importCode={`import { Breadcrumb } from 'invin-uix/ui/breadcrumb';
// Compound: BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis`}
    >
      <PropsTable
        props={[
          { name: 'items', type: 'BreadcrumbItemType[]', default: '—', description: 'Simple API: array of { title, href?, icon?, onClick? }' },
          { name: 'separator', type: 'ReactNode', default: "'/'", description: 'Custom separator between items' },
          { name: 'itemRender', type: '(item, index, items) => ReactNode', default: '—', description: 'Custom render function per item' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Compound API: use sub-components instead of items' },
        ]}
      />

      <Separator variant="bold" />
      <PlaygroundSection
        title="Simple Items API"
        description="Pass an items array for quick breadcrumb setup."
        code={`<Breadcrumb
  items={[
    { title: 'Home', href: '#' },
    { title: 'Components', href: '#' },
    { title: 'Breadcrumb' },
  ]}
/>`}
      >
        <Breadcrumb
          items={[
            { title: 'Home', href: '#' },
            { title: 'Components', href: '#' },
            { title: 'Breadcrumb' },
          ]}
        />
      </PlaygroundSection>

      <PlaygroundSection
        title="With Icons"
        description="Add icons to breadcrumb items for visual context."
        code={`import { Home, Settings } from 'invin-uix/ui/icons';

<Breadcrumb
  items={[
    { title: 'Home', href: '#', icon: <Home style={{ width: 14, height: 14, marginRight: 4, display: 'inline' }} /> },
    { title: 'Settings', href: '#', icon: <Settings style={{ width: 14, height: 14, marginRight: 4, display: 'inline' }} /> },
    { title: 'Profile' },
  ]}
/>`}
      >
        <Breadcrumb
          items={[
            { title: 'Home', href: '#', icon: <Home style={{ width: 14, height: 14, marginRight: 4, display: 'inline' }} /> },
            { title: 'Settings', href: '#', icon: <Settings style={{ width: 14, height: 14, marginRight: 4, display: 'inline' }} /> },
            { title: 'Profile' },
          ]}
        />
      </PlaygroundSection>

      <PlaygroundSection
        title="Custom Separator ( > )"
        description="Override the default separator character."
        code={`<Breadcrumb
  separator={<span style={{ margin: '0 8px', color: 'var(--invin-color-text-disabled)' }}>&gt;</span>}
  items={[
    { title: 'Dashboard', href: '#' },
    { title: 'Users', href: '#' },
    { title: 'Alice Johnson' },
  ]}
/>`}
      >
        <Breadcrumb
          separator={<span style={{ margin: '0 8px', color: 'var(--invin-text-faint)' }}>&gt;</span>}
          items={[
            { title: 'Dashboard', href: '#' },
            { title: 'Users', href: '#' },
            { title: 'Alice Johnson' },
          ]}
        />
      </PlaygroundSection>

      <PlaygroundSection
        title="Custom Separator ( → )"
        description="Arrow separator for a different visual style."
        code={`<Breadcrumb
  separator={<span style={{ margin: '0 6px' }}>→</span>}
  items={[
    { title: 'Products', href: '#' },
    { title: 'Electronics', href: '#' },
    { title: 'Laptops', href: '#' },
    { title: 'MacBook Pro' },
  ]}
/>`}
      >
        <Breadcrumb
          separator={<span style={{ margin: '0 6px', color: 'var(--invin-text-faint)' }}>→</span>}
          items={[
            { title: 'Products', href: '#' },
            { title: 'Electronics', href: '#' },
            { title: 'Laptops', href: '#' },
            { title: 'MacBook Pro' },
          ]}
        />
      </PlaygroundSection>

      <PlaygroundSection
        title="Compound API"
        description="Use sub-components for full control over rendering."
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="#">Library</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Current Page</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="#">Library</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Current Page</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PlaygroundSection>

      <PlaygroundSection
        title="Long Path"
        description="Breadcrumb with multiple levels of navigation."
        code={`<Breadcrumb
  items={[
    { title: 'Home', href: '#' },
    { title: 'Projects', href: '#' },
    { title: 'invin-ui', href: '#' },
    { title: 'Components', href: '#' },
    { title: 'Breadcrumb' },
  ]}
/>`}
      >
        <Breadcrumb
          items={[
            { title: 'Home', href: '#' },
            { title: 'Projects', href: '#' },
            { title: 'invin-ui', href: '#' },
            { title: 'Components', href: '#' },
            { title: 'Breadcrumb' },
          ]}
        />
      </PlaygroundSection>
    </ComponentPage>
  );
}
