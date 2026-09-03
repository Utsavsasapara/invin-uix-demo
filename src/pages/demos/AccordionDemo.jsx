import { ComponentPage, PlaygroundSection, PropsTable, InteractiveDemo } from '../../components/PlaygroundSection.jsx';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'invin-uix/ui/accordion';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Badge } from 'invin-uix/ui/badge';

export default function AccordionDemo() {
  return (
    <ComponentPage
      name="Accordion"
      description="Expandable content sections. Single or multiple open at once. Four visual variants. Also includes Collapsible for single-section expand/collapse."
      importCode={`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'invin-uix/ui/accordion';`}
    >

      {/* ─── Interactive Playground ─────────────────────────────── */}
      <InteractiveDemo
        title="Accordion Playground"
        description="Experiment with different accordion configurations."
        controls={[
          {
            name: 'type',
            type: 'select',
            label: 'Type',
            default: 'single',
            options: [
              { value: 'single', label: 'Single' },
              { value: 'multiple', label: 'Multiple' },
            ],
          },
          {
            name: 'variant',
            type: 'select',
            label: 'Variant',
            default: 'default',
            options: [
              { value: 'default', label: 'Default' },
              { value: 'bordered', label: 'Bordered' },
              { value: 'filled', label: 'Filled' },
              { value: 'ghost', label: 'Ghost' },
            ],
          },
          { name: 'collapsible', type: 'boolean', label: 'Collapsible', default: true },
        ]}
      >
        {(props) => (
          <div className="w-full max-w-md">
            <Accordion 
              type={props.type} 
              collapsible={props.collapsible} 
              defaultValue={props.type === 'multiple' ? ['item-1'] : 'item-1'}
            >
              <AccordionItem value="item-1" variant={props.variant}>
                <AccordionTrigger>What is Invin UI?</AccordionTrigger>
                <AccordionContent>A production-ready React component library with 40+ components.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" variant={props.variant}>
                <AccordionTrigger>How do I install it?</AccordionTrigger>
                <AccordionContent>Run pnpm add invin-uix and import tokens.css in your entry file.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" variant={props.variant}>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes, built on Radix UI with full keyboard support and ARIA labels.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </InteractiveDemo>

      <Separator variant="bold" />

      <PropsTable
        props={[
          { name: 'type', type: "'single' | 'multiple'", default: '—', description: 'single = only one open at a time, multiple = any number open' },
          { name: 'value', type: 'string | string[]', default: '—', description: 'Controlled open item(s)' },
          { name: 'defaultValue', type: 'string | string[]', default: '—', description: 'Uncontrolled default open item(s)' },
          { name: 'collapsible', type: 'boolean', default: 'false', description: 'Allow closing all items (only for type="single")' },
          { name: 'variant', type: "'default' | 'bordered' | 'filled' | 'ghost'", default: "'default'", description: 'Visual style on AccordionItem' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Default ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Default (single)"
        description="Only one item open at a time. Chevron rotates on open."
        code={`<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Invin UI?</AccordionTrigger>
    <AccordionContent>A component library for React...</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How do I install it?</AccordionTrigger>
    <AccordionContent>pnpm add invin-uix</AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <div className="w-full">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Invin UI?</AccordionTrigger>
              <AccordionContent>A production-ready React component library with 40+ components, design tokens, dark/light themes, and 5 accent colours.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I install it?</AccordionTrigger>
              <AccordionContent>Run <code className="font-mono bg-[var(--secondary)] px-1 py-0.5 rounded text-[11px]">pnpm add invin-uix</code> and import tokens.css in your entry file.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Does it work with Next.js?</AccordionTrigger>
              <AccordionContent>Yes — all components have 'use client' and work in both App Router and Pages Router.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PlaygroundSection>

      {/* ─── Multiple ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Multiple"
        description="Multiple items can be open simultaneously."
        code={`<Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
  <AccordionItem value="item-1">...</AccordionItem>
  <AccordionItem value="item-2">...</AccordionItem>
</Accordion>`}
      >
        <div className="w-full">
          <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
            <AccordionItem value="item-1">
              <AccordionTrigger>Design Tokens</AccordionTrigger>
              <AccordionContent>Colours, typography, spacing, borders, and motion — all as CSS variables.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Tailwind Preset</AccordionTrigger>
              <AccordionContent>A preset that maps tokens to Tailwind utilities. Import once in tailwind.config.js.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Icons</AccordionTrigger>
              <AccordionContent>1400+ Lucide icons re-exported plus 26 custom product SVGs.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PlaygroundSection>

      {/* ─── Variants ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Variants"
        description="Four visual styles: default (border-bottom), bordered (outlined card), filled (surface bg), ghost (no border)."
        code={`<AccordionItem value="..." variant="bordered">...</AccordionItem>
<AccordionItem value="..." variant="filled">...</AccordionItem>
<AccordionItem value="..." variant="ghost">...</AccordionItem>`}
      >
        <div className="space-y-6 w-full">
          <div>
            <p className="text-[10px] text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em] mb-2">Bordered</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="b1" variant="bordered">
                <AccordionTrigger>Bordered item</AccordionTrigger>
                <AccordionContent>Content inside a bordered card-like container.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b2" variant="bordered">
                <AccordionTrigger>Another bordered item</AccordionTrigger>
                <AccordionContent>Each item is visually distinct.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <p className="text-[10px] text-[var(--muted-foreground-faint)] uppercase tracking-[0.05em] mb-2">Filled</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="f1" variant="filled">
                <AccordionTrigger>Filled item</AccordionTrigger>
                <AccordionContent>Surface-hover background for a subtle filled look.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="f2" variant="filled">
                <AccordionTrigger>Another filled item</AccordionTrigger>
                <AccordionContent>Works well on clean backgrounds.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns.</p>
      </div>

      <PlaygroundSection
        title="FAQ section"
        description="Classic FAQ layout with single-open accordion."
        code={`<Accordion type="single" collapsible>
  <AccordionItem value="q1" variant="bordered">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer.</AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <div className="w-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="q1" variant="bordered">
              <AccordionTrigger>Is there a free tier?</AccordionTrigger>
              <AccordionContent>Yes — the library is open source and free for all projects.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" variant="bordered">
              <AccordionTrigger>Can I customise the theme?</AccordionTrigger>
              <AccordionContent>Absolutely. Override CSS variables or use data-accent to switch between 5 colour palettes.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" variant="bordered">
              <AccordionTrigger>What frameworks are supported?</AccordionTrigger>
              <AccordionContent>React 18+ and Next.js (App Router and Pages Router). All components use 'use client'.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Settings sections"
        description="Multiple open sections for settings groups."
        code={`<Accordion type="multiple" defaultValue={["general"]}>
  <AccordionItem value="general">
    <AccordionTrigger>General</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
  <AccordionItem value="security">
    <AccordionTrigger>Security</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <Card className="w-full">
          <CardContent className="py-4">
            <Accordion type="multiple" defaultValue={["general"]}>
              <AccordionItem value="general">
                <AccordionTrigger>General <Badge variant="secondary" size="sm" className="ml-2">3 settings</Badge></AccordionTrigger>
                <AccordionContent>Display name, email, timezone configuration.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="notifications">
                <AccordionTrigger>Notifications <Badge variant="secondary" size="sm" className="ml-2">5 settings</Badge></AccordionTrigger>
                <AccordionContent>Email, push, SMS notification preferences.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="security">
                <AccordionTrigger>Security <Badge variant="secondary" size="sm" className="ml-2">2 settings</Badge></AccordionTrigger>
                <AccordionContent>Two-factor authentication, session management.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
