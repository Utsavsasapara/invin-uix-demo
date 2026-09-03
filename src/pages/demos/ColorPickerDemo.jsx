import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable, InteractiveDemo, DemoGrid, DemoCard } from '../../components/PlaygroundSection.jsx';
import { ColorPicker, ColorSwatch, ColorPalette } from 'invin-uix/ui/color-picker';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Badge } from 'invin-uix/ui/badge';

export default function ColorPickerDemo() {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [paletteColor, setPaletteColor] = useState('#10b981');

  const presetColors = [
    '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
    '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9',
    '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
    '#ec4899', '#f43f5e',
  ];

  const brandColors = [
    { name: 'Primary', color: '#6366f1' },
    { name: 'Success', color: '#10b981' },
    { name: 'Warning', color: '#f59e0b' },
    { name: 'Error', color: '#ef4444' },
    { name: 'Info', color: '#0ea5e9' },
  ];

  return (
    <ComponentPage
      name="ColorPicker"
      description="A comprehensive color selection component with gradient picker, hex input, and preset palettes. Includes ColorSwatch for color display and ColorPalette for preset selections."
      importCode={`import { ColorPicker, ColorSwatch, ColorPalette } from 'invin-uix/ui/color-picker';`}
      badges={[{ label: 'New', variant: 'accent' }]}
    >

      {/* ─── Interactive Playground ────────────────────────────── */}
      <InteractiveDemo
        title="Interactive Playground"
        description="Experiment with ColorPicker in real-time. The picker uses HSL color model internally and outputs hex values."
        controls={[
          { name: 'disabled', label: 'Disabled', type: 'boolean', default: false },
          { name: 'showInput', label: 'Show Input', type: 'boolean', default: true },
          { name: 'showPresets', label: 'Show Presets', type: 'boolean', default: true },
        ]}
      >
        {(props) => (
          <div className="flex flex-col items-center gap-4">
            <ColorPicker
              value={selectedColor}
              onChange={setSelectedColor}
              disabled={props.disabled}
              showInput={props.showInput}
              presets={props.showPresets ? presetColors.slice(0, 10) : []}
            />
            <div className="flex items-center gap-2">
              <span className="text-caption text-[var(--muted-foreground)]">Selected:</span>
              <Badge variant="secondary">{selectedColor}</Badge>
            </div>
          </div>
        )}
      </InteractiveDemo>

      <Separator />

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'value', type: 'string', default: "'#000000'", description: 'Current color value in hex format' },
          { name: 'onChange', type: '(color: string) => void', default: '—', description: 'Callback when color changes' },
          { name: 'presets', type: 'string[]', default: 'DEFAULT_PRESETS', description: 'Array of preset colors to display' },
          { name: 'showInput', type: 'boolean', default: 'true', description: 'Show hex input field' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the color picker' },
          { name: 'className', type: 'string', default: '—', description: 'Additional CSS classes' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Basic ColorPicker ──────────────────────────────────── */}
      <PlaygroundSection
        title="Basic ColorPicker"
        description="Full-featured color picker with hue/saturation gradient, hex input, and optional presets."
        code={`const [color, setColor] = useState('#6366f1');

<ColorPicker
  value={color}
  onChange={setColor}
/>

// With preset colors
<ColorPicker
  value={color}
  onChange={setColor}
  presets={['#ef4444', '#f97316', '#10b981', '#3b82f6', '#8b5cf6']}
/>`}
      >
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-3">Default</p>
            <ColorPicker
              value={selectedColor}
              onChange={setSelectedColor}
            />
          </div>
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-3">With Presets</p>
            <ColorPicker
              value={selectedColor}
              onChange={setSelectedColor}
              presets={presetColors.slice(0, 10)}
            />
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── ColorSwatch ────────────────────────────────────────── */}
      <PlaygroundSection
        title="ColorSwatch"
        description="Simple color display component. Use for showing selected colors, color indicators, or building custom color pickers."
        code={`<ColorSwatch color="#6366f1" />
<ColorSwatch color="#10b981" size="lg" />
<ColorSwatch color="#ef4444" size="sm" />

// Clickable swatches
<ColorSwatch color="#6366f1" onClick={() => console.log('clicked')} />`}
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <ColorSwatch color="#6366f1" />
            <span className="text-[11px] text-[var(--muted-foreground)]">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ColorSwatch color="#10b981" size="lg" />
            <span className="text-[11px] text-[var(--muted-foreground)]">Large</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ColorSwatch color="#ef4444" size="sm" />
            <span className="text-[11px] text-[var(--muted-foreground)]">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ColorSwatch color="#f59e0b" selected />
            <span className="text-[11px] text-[var(--muted-foreground)]">Selected</span>
          </div>
        </div>
      </PlaygroundSection>

      {/* ─── ColorPalette ───────────────────────────────────────── */}
      <PlaygroundSection
        title="ColorPalette"
        description="Grid of preset colors for quick selection. Great for theme colors, brand palettes, or constrained color choices."
        code={`const colors = ['#ef4444', '#f97316', '#10b981', '#3b82f6', '#8b5cf6'];

<ColorPalette
  colors={colors}
  value={selectedColor}
  onChange={setSelectedColor}
/>

// With labels
<ColorPalette
  colors={[
    { name: 'Primary', color: '#6366f1' },
    { name: 'Success', color: '#10b981' },
  ]}
  value={selectedColor}
  onChange={setSelectedColor}
  showLabels
/>`}
      >
        <div className="space-y-6">
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-3">Simple Palette</p>
            <ColorPalette
              colors={presetColors}
              value={paletteColor}
              onChange={setPaletteColor}
            />
          </div>
          <div>
            <p className="text-caption text-[var(--muted-foreground)] mb-3">Brand Colors</p>
            <ColorPalette
              colors={brandColors}
              value={paletteColor}
              onChange={setPaletteColor}
              showLabels
            />
          </div>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use Cases</h3>
        <p className="text-[var(--muted-foreground)]">Common patterns for color selection.</p>
      </div>

      <DemoGrid columns={2}>
        <DemoCard
          title="Theme Customization"
          description="Let users pick accent colors for their dashboard or profile."
        >
          <Card className="w-full max-w-[200px]">
            <CardContent className="pt-4 pb-4 space-y-3">
              <p className="text-caption font-medium">Accent Color</p>
              <ColorPalette
                colors={['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#ef4444']}
                value={paletteColor}
                onChange={setPaletteColor}
              />
            </CardContent>
          </Card>
        </DemoCard>

        <DemoCard
          title="Status Indicator"
          description="Color-coded status or category selection."
        >
          <div className="flex flex-wrap gap-2">
            {brandColors.map((c) => (
              <div key={c.color} className="flex items-center gap-2 px-2 py-1 rounded border border-[var(--border)]">
                <ColorSwatch color={c.color} size="sm" />
                <span className="text-caption">{c.name}</span>
              </div>
            ))}
          </div>
        </DemoCard>
      </DemoGrid>

    </ComponentPage>
  );
}
