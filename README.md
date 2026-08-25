# Invin UIX Demo App

A comprehensive demo application showcasing all 56+ components from the [invin-uix](https://www.npmjs.com/package/invin-uix) React UI library.

## Features

- **62 Component Demos** — Interactive examples for every component
- **Real-World Examples** — SOAR dashboard, workflows, integrations pages
- **Theme Switching** — Dark/light mode + 5 accent color palettes
- **Responsive Layout** — Sidebar navigation with mobile support

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

```
src/
├── layouts/           # AppLayout with sidebar + topbar
├── pages/
│   ├── demos/         # Individual component demos
│   │   └── charts/    # Chart-specific demos
│   └── apps/          # Real-world example pages (SOAR)
├── components/        # Shared demo components
└── App.routes.jsx     # Route definitions
```

## Component Coverage

All invin-uix components have interactive demos:

| Category | Components |
|----------|------------|
| Display | Button, Badge, Card, Alert, Avatar, Spinner, KPI Card, Separator, Skeleton, Icons |
| Form | Input, Textarea, Select, Combobox, Checkbox, Radio Group, Switch, Slider, Toggle, Progress |
| Overlay | Dialog, Alert Dialog, Sheet, Drawer, Command, Tooltip, Popover, Dropdown Menu, Toast |
| Data | Table, Data Table, Accordion, Menu, Tree View, Breadcrumb, Pagination, Calendar, Chart |
| Layout | Topbar, Sidebar, Tabs, Scroll Area, Resizable, Tour, Stepper, Timeline |

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- invin-uix 1.0.0
- React Router 7

## License

MIT
