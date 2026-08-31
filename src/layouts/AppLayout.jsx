import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'invin-uix/ui/button';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import { Switch } from 'invin-uix/ui/switch';
import { Tooltip } from 'invin-uix/ui/tooltip';
import { Sidebar } from 'invin-uix/ui/sidebar';
import { Topbar } from 'invin-uix/ui/topbar';
import { Menu } from 'invin-uix/ui/menu';
import {
  Sun, Moon, Home, BookOpen, Package,
} from 'invin-uix/ui/icons';
import { useTheme } from '../useTheme.jsx';

const icon = (Icon) => <Icon style={{ width: 16, height: 16 }} />;

const sidebarItems = [
  {
    key: 'main',
    type: 'group',
    label: 'Navigation',
    children: [
      { key: '/', label: 'Home', icon: icon(Home) },
      { key: '/ui-guide', label: 'UI Guide', icon: icon(BookOpen) },
      { key: '/components', label: 'Components', icon: icon(Package) },
    ],
  },
];

export default function AppLayout() {
  const { dark, toggleDark } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active key from current path
  const activeKey = location.pathname === '/' ? '/' : location.pathname;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar
        product="InvinUI"
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        footer={
          <div className="space-y-2">
            {!collapsed && (
              <>
                <div className="flex items-center gap-2 text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)]">
                  {dark ? <Moon style={{ width: 14, height: 14 }} /> : <Sun style={{ width: 14, height: 14 }} />}
                  <span>{dark ? 'Dark' : 'Light'}</span>
                  <Switch size="sm" checked={dark} onCheckedChange={toggleDark} className="ml-auto" />
                </div>
                <Separator />
                <div>
                  <span className="text-[10px] text-[var(--invin-text-faint)]">Accent</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    {[
                      { name: 'blue', color: '#4a86ec' },
                      { name: 'crimson', color: '#f0455a' },
                      { name: 'violet', color: '#9752d9' },
                      { name: 'pink', color: '#d64d97' },
                      { name: 'amber', color: '#bd8629' },
                    ].map(a => (
                      <button
                        key={a.name}
                        onClick={() => document.documentElement.setAttribute('data-accent', a.name)}
                        className="h-5 w-5 rounded-full border border-[var(--invin-border)] cursor-pointer hover:scale-110 transition-transform"
                        style={{ background: a.color }}
                        title={a.name}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
            {collapsed && (
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => toggleDark(!dark)}
                  className="h-7 w-7 rounded-md flex items-center justify-center cursor-pointer hover:bg-[var(--invin-surface-hover)] text-[var(--invin-text-dim)]"
                >
                  {dark ? <Moon style={{ width: 14, height: 14 }} /> : <Sun style={{ width: 14, height: 14 }} />}
                </button>
              </div>
            )}
          </div>
        }
      >
        <Menu
          mode="sidebar"
          collapsed={collapsed}
          collapsedTooltip
          selectedKeys={[activeKey]}
          defaultOpenKeys={collapsed ? [] : ['main']}
          onClick={({ key }) => navigate(key)}
          items={sidebarItems}
        />
      </Sidebar>

      {/* Main Content */}
      <main
        className="transition-[margin-left] duration-200 ease-out"
        style={{ marginLeft: collapsed ? 'var(--invin-sidebar-collapsed-w)' : 'var(--invin-sidebar-w)' }}
      >
        <Topbar
          left={
            <div className="flex items-center gap-3">
              <h1 className="text-[length:var(--invin-text-card-title)] font-[700] tracking-[-0.02em]">
                Invin UI — Demo Showcase
              </h1>
              <Badge variant="outline" size="sm">v0.1.3</Badge>
            </div>
          }
          right={
            <div className="flex items-center gap-1">
              <Tooltip title={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
                <Button variant="ghost" size="icon-sm" onClick={() => toggleDark(!dark)}>
                  {dark ? <Sun style={{ width: 16, height: 16 }} /> : <Moon style={{ width: 16, height: 16 }} />}
                </Button>
              </Tooltip>
            </div>
          }
        />

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
