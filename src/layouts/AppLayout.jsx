import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'invin-uix/ui/button';
import { Badge } from 'invin-uix/ui/badge';
import { Tooltip } from 'invin-uix/ui/tooltip';
import { Sidebar } from 'invin-uix/ui/sidebar';
import { Topbar } from 'invin-uix/ui/topbar';
import { Menu } from 'invin-uix/ui/menu';
import {
  Sun, Moon, House, BookOpen, Package,
} from 'invin-uix/ui/icons';
import { useTheme } from '../useTheme.jsx';
import { AppSwitcher } from '../components/AppSwitcher.jsx';

const icon = (Icon) => <Icon style={{ width: 16, height: 16 }} />;

const sidebarItems = [
  {
    key: 'main',
    type: 'group',
    label: 'Navigation',
    children: [
      { key: '/', label: 'House', icon: icon(House) },
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
        style={{ marginLeft: collapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)' }}
      >
        <Topbar
          left={
            <div className="flex items-center gap-3">
              <h1 className="text-[var(--foreground)] font-[700] tracking-[-0.02em]">
                Invin UI — Demo Showcase
              </h1>
              <Badge variant="outline" size="sm">v0.1.3</Badge>
            </div>
          }
          right={
            <div className="flex items-center gap-1">
              <AppSwitcher />
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
