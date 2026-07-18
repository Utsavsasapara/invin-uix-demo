import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from 'invin-uix/ui/breadcrumb';
import { Home, Settings, User } from 'invin-uix/ui/icons';

export default function BreadcrumbDemo() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">Navigate hierarchies. Simple items API or compound sub-components.</p></div>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Simple Items API</Label>
            <Breadcrumb
              items={[
                { title: 'Home', href: '#' },
                { title: 'Components', href: '#' },
                { title: 'Breadcrumb' },
              ]}
            />
          </div>

          <Separator />

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">With Icons</Label>
            <Breadcrumb
              items={[
                { title: 'Home', href: '#', icon: <Home style={{ width: 14, height: 14, marginRight: 4, display: 'inline' }} /> },
                { title: 'Settings', href: '#', icon: <Settings style={{ width: 14, height: 14, marginRight: 4, display: 'inline' }} /> },
                { title: 'Profile' },
              ]}
            />
          </div>

          <Separator />

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Custom Separator ( &gt; )</Label>
            <Breadcrumb
              separator={<span style={{ margin: '0 8px', color: 'var(--invin-color-text-disabled)' }}>&gt;</span>}
              items={[
                { title: 'Dashboard', href: '#' },
                { title: 'Users', href: '#' },
                { title: 'Alice Johnson' },
              ]}
            />
          </div>

          <Separator />

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Custom Separator ( → )</Label>
            <Breadcrumb
              separator={<span style={{ margin: '0 6px', color: 'var(--invin-color-text-disabled)' }}>→</span>}
              items={[
                { title: 'Products', href: '#' },
                { title: 'Electronics', href: '#' },
                { title: 'Laptops', href: '#' },
                { title: 'MacBook Pro' },
              ]}
            />
          </div>

          <Separator />

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Compound API (sub-components)</Label>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="#">Library</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>Current Page</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <Separator />

          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Long Path</Label>
            <Breadcrumb
              items={[
                { title: 'Home', href: '#' },
                { title: 'Projects', href: '#' },
                { title: 'invin-ui', href: '#' },
                { title: 'Components', href: '#' },
                { title: 'Breadcrumb' },
              ]}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
