import { useState } from 'react';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';
import { Badge } from 'invin-uix/ui/badge';
import { Button } from 'invin-uix/ui/button';
import { Switch } from 'invin-uix/ui/switch';
import { Menu } from 'invin-uix/ui/menu';
import {
  Home, Users, Settings, Mail, Calendar,
  FileText, BarChart2 as BarChart, Shield, Inbox,
  LogOut, Bell, Bookmark, PanelLeft, Zap
} from 'invin-uix/ui/icons';

const icon = (Icon) => <Icon style={{ width: 16, height: 16 }} />;

export default function MenuDemo() {
  const [hSelected, setHSelected] = useState(['home']);
  const [vSelected, setVSelected] = useState(['dashboard']);
  const [iSelected, setISelected] = useState(['opt1']);
  const [collapsed, setCollapsed] = useState(false);
  const [bgSelected, setBgSelected] = useState(['dashboard']);
  const [borderSelected, setBorderSelected] = useState(['dashboard']);
  const [filledSelected, setFilledSelected] = useState(['dashboard']);
  const [collapsedSelected, setCollapsedSelected] = useState(['dashboard']);
  const [disabledSelected, setDisabledSelected] = useState(['active']);

  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">Navigation menu with horizontal, vertical, and inline modes. Supports icons, descriptions, badges, sub-menus, groups, collapsed mode, and danger items.</p></div>

      <Card>
        <CardContent className="pt-6 space-y-8">

          {/* Horizontal */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Horizontal (Top Nav)</Label>
            <Menu
              mode="horizontal"
              selectedKeys={hSelected}
              onClick={({ key }) => setHSelected([key])}
              items={[
                { key: 'home', label: 'Home', icon: icon(Home) },
                { key: 'products', label: 'Products' },
                { key: 'about', label: 'About' },
                { key: 'contact', label: 'Contact' },
              ]}
            />
          </div>

          <Separator />

          {/* Horizontal with sub-menu */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Horizontal with Sub-menu</Label>
            <Menu
              mode="horizontal"
              selectedKeys={hSelected}
              onClick={({ key }) => setHSelected([key])}
              items={[
                { key: 'home', label: 'Home', icon: icon(Home) },
                {
                  key: 'docs', label: 'Documentation',
                  children: [
                    { key: 'getting-started', label: 'Getting Started', description: 'Quick setup guide' },
                    { key: 'components', label: 'Components', description: 'All UI components' },
                    { key: 'api', label: 'API Reference' },
                  ]
                },
                { key: 'blog', label: 'Blog' },
              ]}
            />
          </div>

          <Separator />

          {/* Active Variants */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Active Variants</Label>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {/* Background (default) */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">background (default)</p>
                <div style={{ maxWidth: '220px' }}>
                  <Menu
                    mode="vertical"
                    activeVariant="background"
                    selectedKeys={bgSelected}
                    onClick={({ key }) => setBgSelected([key])}
                    items={[
                      { key: 'dashboard', label: 'Dashboard', icon: icon(Home) },
                      { key: 'inbox', label: 'Inbox', icon: icon(Inbox) },
                      { key: 'calendar', label: 'Calendar', icon: icon(Calendar) },
                      { key: 'settings', label: 'Settings', icon: icon(Settings) },
                    ]}
                  />
                </div>
              </div>

              {/* Border */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">border</p>
                <div style={{ maxWidth: '220px' }}>
                  <Menu
                    mode="vertical"
                    activeVariant="border"
                    selectedKeys={borderSelected}
                    onClick={({ key }) => setBorderSelected([key])}
                    items={[
                      { key: 'dashboard', label: 'Dashboard', icon: icon(Home) },
                      { key: 'inbox', label: 'Inbox', icon: icon(Inbox) },
                      { key: 'calendar', label: 'Calendar', icon: icon(Calendar) },
                      { key: 'settings', label: 'Settings', icon: icon(Settings) },
                    ]}
                  />
                </div>
              </div>

              {/* Filled */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">filled</p>
                <div style={{ maxWidth: '220px' }}>
                  <Menu
                    mode="vertical"
                    activeVariant="filled"
                    selectedKeys={filledSelected}
                    onClick={({ key }) => setFilledSelected([key])}
                    items={[
                      { key: 'dashboard', label: 'Dashboard', icon: icon(Home) },
                      { key: 'inbox', label: 'Inbox', icon: icon(Inbox) },
                      { key: 'calendar', label: 'Calendar', icon: icon(Calendar) },
                      { key: 'settings', label: 'Settings', icon: icon(Settings) },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Vertical with badges + description */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Vertical (Sidebar) — with badges & descriptions</Label>
            <div style={{ maxWidth: '260px' }}>
              <Menu
                mode="vertical"
                selectedKeys={vSelected}
                onClick={({ key }) => setVSelected([key])}
                items={[
                  { key: 'dashboard', label: 'Dashboard', icon: icon(Home), description: 'Overview & metrics' },
                  { key: 'inbox', label: 'Inbox', icon: icon(Inbox), extra: <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '18px', height: '18px', padding: '0 5px', borderRadius: '9px', backgroundColor: 'var(--invin-color-danger, #dc2626)', color: '#fff', fontSize: '11px', fontWeight: 600, lineHeight: 1 }}>5</span> },
                  { key: 'calendar', label: 'Calendar', icon: icon(Calendar) },
                  { key: 'reports', label: 'Reports', icon: icon(BarChart), extra: <Badge variant="success" size="sm">New</Badge> },
                  { key: 'divider1', type: 'divider', label: '' },
                  { key: 'settings', label: 'Settings', icon: icon(Settings) },
                  { key: 'logout', label: 'Logout', icon: icon(LogOut), danger: true },
                ]}
              />
            </div>
          </div>

          <Separator />

          {/* Inline (collapsible) */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Inline (Collapsible Sub-menus)</Label>
            <div style={{ maxWidth: '260px' }}>
              <Menu
                mode="inline"
                selectedKeys={iSelected}
                defaultOpenKeys={['navigation']}
                onClick={({ key }) => setISelected([key])}
                items={[
                  { key: 'home', label: 'Home', icon: icon(Home) },
                  {
                    key: 'navigation', label: 'Navigation', icon: icon(Mail),
                    children: [
                      { key: 'opt1', label: 'Option 1' },
                      { key: 'opt2', label: 'Option 2' },
                      { key: 'opt3', label: 'Option 3' },
                    ]
                  },
                  {
                    key: 'features', label: 'Features', icon: icon(Zap),
                    children: [
                      { key: 'feature1', label: 'Analytics' },
                      { key: 'feature2', label: 'Notifications', extra: <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: '18px', height: '18px', padding: '0 5px', borderRadius: '9px', backgroundColor: 'var(--invin-color-danger, #dc2626)', color: '#fff', fontSize: '11px', fontWeight: 600, lineHeight: 1 }}>3</span> },
                      { key: 'feature3', label: 'Integrations' },
                    ]
                  },
                  { key: 'divider', type: 'divider', label: '' },
                  {
                    key: 'admin', type: 'group', label: 'Admin',
                    children: [
                      { key: 'users', label: 'Users', icon: icon(Users) },
                      { key: 'settings', label: 'Settings', icon: icon(Settings) },
                    ]
                  },
                ]}
              />
            </div>
          </div>

          <Separator />

          {/* Without icons + nested sub-menus */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Without Icons + Nested Sub-menus (3 levels)</Label>
            <div style={{ maxWidth: '260px' }}>
              <Menu
                mode="inline"
                selectedKeys={iSelected}
                defaultOpenKeys={['products', 'electronics']}
                onClick={({ key }) => setISelected([key])}
                items={[
                  { key: 'overview', label: 'Overview' },
                  {
                    key: 'products', label: 'Products',
                    children: [
                      { key: 'all-products', label: 'All Products' },
                      {
                        key: 'electronics', label: 'Electronics',
                        children: [
                          { key: 'phones', label: 'Phones' },
                          { key: 'laptops', label: 'Laptops' },
                          { key: 'tablets', label: 'Tablets' },
                        ]
                      },
                      { key: 'clothing', label: 'Clothing' },
                      { key: 'accessories', label: 'Accessories' },
                    ]
                  },
                  {
                    key: 'orders', label: 'Orders',
                    children: [
                      { key: 'pending', label: 'Pending' },
                      { key: 'completed', label: 'Completed' },
                      { key: 'cancelled', label: 'Cancelled' },
                    ]
                  },
                  { key: 'divider2', type: 'divider', label: '' },
                  { key: 'account-settings', label: 'Account Settings' },
                ]}
              />
            </div>
          </div>

          <Separator />

          {/* Collapsed mode */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Collapsed Mode (icon only + tooltip)</Label>
            <p className="text-xs text-muted-foreground mb-3">When collapsed, hovering an icon shows a tooltip with the item label. Set <code>collapsedTooltip=&#123;false&#125;</code> to disable.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', color: 'var(--invin-color-text-subtle)' }}>Collapsed:</span>
              <Switch size="sm" checked={collapsed} onCheckedChange={setCollapsed} />
            </div>
            <div style={{ display: 'flex', gap: '40px' }}>
              {/* With tooltip (default) */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">With tooltip (default)</p>
                <div style={{ width: collapsed ? '48px' : '220px', transition: 'width 200ms ease', overflow: collapsed ? undefined : 'hidden' }}>
                  <Menu
                    mode="inline"
                    collapsed={collapsed}
                    collapsedTooltip={true}
                    selectedKeys={collapsedSelected}
                    onClick={({ key }) => setCollapsedSelected([key])}
                    items={[
                      { key: 'dashboard', label: 'Dashboard', icon: icon(Home) },
                      { key: 'inbox', label: 'Inbox', icon: icon(Inbox) },
                      { key: 'calendar', label: 'Calendar', icon: icon(Calendar) },
                      { key: 'settings', label: 'Settings', icon: icon(Settings) },
                    ]}
                  />
                </div>
              </div>

              {/* Without tooltip */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Without tooltip</p>
                <div style={{ width: collapsed ? '48px' : '220px', transition: 'width 200ms ease', overflow: collapsed ? undefined : 'hidden' }}>
                  <Menu
                    mode="inline"
                    collapsed={collapsed}
                    collapsedTooltip={false}
                    selectedKeys={collapsedSelected}
                    onClick={({ key }) => setCollapsedSelected([key])}
                    items={[
                      { key: 'dashboard', label: 'Dashboard', icon: icon(Home) },
                      { key: 'inbox', label: 'Inbox', icon: icon(Inbox) },
                      { key: 'calendar', label: 'Calendar', icon: icon(Calendar) },
                      { key: 'settings', label: 'Settings', icon: icon(Settings) },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Disabled */}
          <div>
            <Label className="mb-3 block text-xs text-muted-foreground uppercase tracking-wide">Disabled Items</Label>
            <div style={{ maxWidth: '220px' }}>
              <Menu
                mode="vertical"
                selectedKeys={disabledSelected}
                onClick={({ key }) => setDisabledSelected([key])}
                items={[
                  { key: 'active', label: 'Active Item', icon: icon(Bell) },
                  { key: 'disabled', label: 'Disabled Item', icon: icon(Bookmark), disabled: true },
                  { key: 'normal', label: 'Normal Item', icon: icon(FileText) },
                ]}
              />
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
