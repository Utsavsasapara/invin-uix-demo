import { useState, lazy, Suspense } from 'react';
import { Button } from 'invin-uix/ui/button';
import { Switch } from 'invin-uix/ui/switch';
import { Badge } from 'invin-uix/ui/badge';
import { ScrollArea } from 'invin-uix/ui/scroll-area';
import { Separator } from 'invin-uix/ui/separator';
import { Spinner } from 'invin-uix/ui/spinner';
import { Menu } from 'invin-uix/ui/menu';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from 'invin-uix/ui/sheet';
import { Menu as MenuIcon, Sun, Moon } from 'invin-uix/ui/icons';

// ─── Lazy-loaded demo pages ─────────────────────────────────────────────────

// Tier 1: Display
const ButtonDemo = lazy(() => import('./demos/ButtonDemo.jsx'));
const BadgeDemo = lazy(() => import('./demos/BadgeDemo.jsx'));
const SeparatorDemo = lazy(() => import('./demos/SeparatorDemo.jsx'));
const SkeletonDemo = lazy(() => import('./demos/SkeletonDemo.jsx'));
const AlertDemo = lazy(() => import('./demos/AlertDemo.jsx'));
const AvatarDemo = lazy(() => import('./demos/AvatarDemo.jsx'));
const CardDemo = lazy(() => import('./demos/CardDemo.jsx'));
const LabelDemo = lazy(() => import('./demos/LabelDemo.jsx'));
const SpinnerDemo = lazy(() => import('./demos/SpinnerDemo.jsx'));
const IconsDemo = lazy(() => import('./demos/IconsDemo.jsx'));

// Tier 2: Form / Interactive
const InputDemo = lazy(() => import('./demos/InputDemo.jsx'));
const TextareaDemo = lazy(() => import('./demos/TextareaDemo.jsx'));
const SelectDemo = lazy(() => import('./demos/SelectDemo.jsx'));
const CheckboxDemo = lazy(() => import('./demos/CheckboxDemo.jsx'));
const RadioGroupDemo = lazy(() => import('./demos/RadioGroupDemo.jsx'));
const SwitchDemo = lazy(() => import('./demos/SwitchDemo.jsx'));
const SliderDemo = lazy(() => import('./demos/SliderDemo.jsx'));
const ToggleDemo = lazy(() => import('./demos/ToggleDemo.jsx'));
const ToggleGroupDemo = lazy(() => import('./demos/ToggleGroupDemo.jsx'));
const ProgressDemo = lazy(() => import('./demos/ProgressDemo.jsx'));
const TabsDemo = lazy(() => import('./demos/TabsDemo.jsx'));

// Tier 3: Overlay / Floating
const DialogDemo = lazy(() => import('./demos/DialogDemo.jsx'));
const AlertDialogDemo = lazy(() => import('./demos/AlertDialogDemo.jsx'));
const SheetDemo = lazy(() => import('./demos/SheetDemo.jsx'));
const DrawerDemo = lazy(() => import('./demos/DrawerDemo.jsx'));
const TooltipDemo = lazy(() => import('./demos/TooltipDemo.jsx'));
const PopoverDemo = lazy(() => import('./demos/PopoverDemo.jsx'));
const DropdownDemo = lazy(() => import('./demos/DropdownDemo.jsx'));
const ContextMenuDemo = lazy(() => import('./demos/ContextMenuDemo.jsx'));
const HoverCardDemo = lazy(() => import('./demos/HoverCardDemo.jsx'));
const ToastDemo = lazy(() => import('./demos/ToastDemo.jsx'));

// Tier 4: Complex / Composite
const TableDemo = lazy(() => import('./demos/TableDemo.jsx'));
const AccordionDemo = lazy(() => import('./demos/AccordionDemo.jsx'));
const CollapsibleDemo = lazy(() => import('./demos/CollapsibleDemo.jsx'));
const MenuDemo = lazy(() => import('./demos/MenuDemo.jsx'));
const BreadcrumbDemo = lazy(() => import('./demos/BreadcrumbDemo.jsx'));
const PaginationDemo = lazy(() => import('./demos/PaginationDemo.jsx'));
const ScrollAreaDemo = lazy(() => import('./demos/ScrollAreaDemo.jsx'));
const CalendarDemo = lazy(() => import('./demos/CalendarDemo.jsx'));
const DatePickerDemo = lazy(() => import('./demos/DatePickerDemo.jsx'));
const ChartDemo = lazy(() => import('./demos/ChartDemo.jsx'));

// Tier 5: Layout / Utility
const AspectRatioDemo = lazy(() => import('./demos/AspectRatioDemo.jsx'));

// ─── Component Registry ─────────────────────────────────────────────────────

const categories = [
  {
    key: 'display',
    label: 'Display',
    type: 'group',
    children: [
      { key: 'button', label: 'Button', component: ButtonDemo },
      { key: 'badge', label: 'Badge', component: BadgeDemo },
      { key: 'separator', label: 'Separator', component: SeparatorDemo },
      { key: 'skeleton', label: 'Skeleton', component: SkeletonDemo },
      { key: 'alert', label: 'Alert', component: AlertDemo },
      { key: 'avatar', label: 'Avatar', component: AvatarDemo },
      { key: 'card', label: 'Card', component: CardDemo },
      { key: 'label', label: 'Label', component: LabelDemo },
      { key: 'spinner', label: 'Spinner', component: SpinnerDemo },
      { key: 'icons', label: 'Icons', component: IconsDemo },
    ],
  },
  {
    key: 'form',
    label: 'Form & Input',
    type: 'group',
    children: [
      { key: 'input', label: 'Input', component: InputDemo },
      { key: 'textarea', label: 'Textarea', component: TextareaDemo },
      { key: 'select', label: 'Select', component: SelectDemo },
      { key: 'checkbox', label: 'Checkbox', component: CheckboxDemo },
      { key: 'radio-group', label: 'Radio Group', component: RadioGroupDemo },
      { key: 'switch', label: 'Switch', component: SwitchDemo },
      { key: 'slider', label: 'Slider', component: SliderDemo },
      { key: 'toggle', label: 'Toggle', component: ToggleDemo },
      { key: 'toggle-group', label: 'Toggle Group', component: ToggleGroupDemo },
      { key: 'progress', label: 'Progress', component: ProgressDemo },
      { key: 'tabs', label: 'Tabs', component: TabsDemo },
    ],
  },
  {
    key: 'overlay',
    label: 'Overlay & Floating',
    type: 'group',
    children: [
      { key: 'dialog', label: 'Dialog', component: DialogDemo },
      { key: 'alert-dialog', label: 'Alert Dialog', component: AlertDialogDemo },
      { key: 'sheet', label: 'Sheet', component: SheetDemo },
      { key: 'drawer', label: 'Drawer', component: DrawerDemo },
      { key: 'tooltip', label: 'Tooltip', component: TooltipDemo },
      { key: 'popover', label: 'Popover', component: PopoverDemo },
      { key: 'dropdown', label: 'Dropdown Menu', component: DropdownDemo },
      { key: 'context-menu', label: 'Context Menu', component: ContextMenuDemo },
      { key: 'hover-card', label: 'Hover Card', component: HoverCardDemo },
      { key: 'toast', label: 'Toast', component: ToastDemo },
    ],
  },
  {
    key: 'composite',
    label: 'Data & Composite',
    type: 'group',
    children: [
      { key: 'table', label: 'Table', component: TableDemo },
      { key: 'accordion', label: 'Accordion', component: AccordionDemo },
      { key: 'collapsible', label: 'Collapsible', component: CollapsibleDemo },
      { key: 'menu', label: 'Menu', component: MenuDemo },
      { key: 'breadcrumb', label: 'Breadcrumb', component: BreadcrumbDemo },
      { key: 'pagination', label: 'Pagination', component: PaginationDemo },
      { key: 'scroll-area', label: 'Scroll Area', component: ScrollAreaDemo },
      { key: 'calendar', label: 'Calendar', component: CalendarDemo },
      { key: 'date-picker', label: 'Date Picker', component: DatePickerDemo },
      { key: 'chart', label: 'Chart', component: ChartDemo },
    ],
  },
  {
    key: 'layout',
    label: 'Layout & Utility',
    type: 'group',
    children: [
      { key: 'aspect-ratio', label: 'Aspect Ratio', component: AspectRatioDemo },
    ],
  },
];

// Flatten for lookup
const allComponents = categories.flatMap(cat => cat.children);

// Build menu items for the Menu component
const menuItems = categories.map(cat => ({
  key: cat.key,
  label: cat.label,
  type: 'group',
  children: cat.children.map(c => ({ key: c.key, label: c.label })),
}));

// ─── Fallback ────────────────────────────────────────────────────────────────

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <Spinner size="md" tip="Loading component..." />
    </div>
  );
}

// ─── Layout ──────────────────────────────────────────────────────────────────

export default function DemoLayout() {
  const [dark, setDark] = useState(() => document.documentElement.getAttribute('data-theme') === 'dark');
  const [activePage, setActivePage] = useState('button');

  const activeEntry = allComponents.find(c => c.key === activePage);
  const ActiveComponent = activeEntry?.component || ButtonDemo;

  const toggleDark = (v) => {
    setDark(v);
    document.documentElement.setAttribute('data-theme', v ? 'dark' : 'light');
  };

  const sidebarContent = (
    <>
      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">UI</div>
          <div>
            <p className="text-sm font-semibold">Invin UI</p>
            <p className="text-[10px] text-muted-foreground">Component Playground</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 px-2 py-3">
        <Menu
          mode="inline"
          activeVariant="filled"
          selectedKeys={[activePage]}
          defaultOpenKeys={categories.map(c => c.key)}
          onClick={({ key }) => setActivePage(key)}
          items={menuItems}
        />
      </ScrollArea>

      <div className="px-3 py-3 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {dark ? <Moon style={{ width: 14, height: 14 }} /> : <Sun style={{ width: 14, height: 14 }} />}
          <span>{dark ? 'Dark' : 'Light'} mode</span>
          <Switch size="sm" checked={dark} onCheckedChange={toggleDark} className="ml-auto" />
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground">Components</span>
          <Badge variant="secondary" size="sm">{allComponents.length}</Badge>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex">

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-60 flex-col border-r border-border fixed inset-y-0 left-0 bg-background z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden fixed top-3 left-3 z-40">
            <MenuIcon style={{ width: 20, height: 20 }} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-60 p-0">
          <div className="flex flex-col h-full">
            {sidebarContent}
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 lg:ml-60">
        <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-sm px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-0">
            <div className="lg:hidden w-10" /> {/* spacer for mobile menu button */}
            <h1 className="text-lg font-bold">{activeEntry?.label || 'Component'}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => window.__setPage?.('dashboard')}>
              Dashboard
            </Button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-8">
          <Suspense fallback={<LoadingFallback />}>
            <ActiveComponent />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
