import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { DatePicker, DateRangePicker } from 'invin-uix/ui/date-picker';
import { Label } from 'invin-uix/ui/label';
import { Separator } from 'invin-uix/ui/separator';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Button } from 'invin-uix/ui/button';

export default function DatePickerDemo() {
  const [date, setDate] = useState(null);
  const [range, setRange] = useState({ from: null, to: null });

  return (
    <ComponentPage
      name="Date Picker"
      description="Input trigger + Calendar popover. Single date or range selection. Supports min/max, disabled dates, dropdowns, and custom format. Also includes DateRangePicker for dual-month range selection."
      importCode={`import { DatePicker, DateRangePicker } from 'invin-uix/ui/date-picker';`}
    >
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">DatePicker</p>
        <PropsTable
          props={[
            { name: 'value', type: 'Date | null', default: '—', description: 'Selected date' },
            { name: 'onChange', type: '(date: Date | null) => void', default: '—', description: 'Selection callback' },
            { name: 'placeholder', type: 'string', default: "'Pick a date'", description: 'Placeholder text' },
            { name: 'fromDate', type: 'Date', default: '—', description: 'Earliest selectable' },
            { name: 'toDate', type: 'Date', default: '—', description: 'Latest selectable' },
            { name: 'disabled', type: '(date) => boolean', default: '—', description: 'Disable specific dates' },
            { name: 'captionLayout', type: "'label' | 'dropdown'", default: "'label'", description: 'Month/year nav style' },
            { name: 'formatDate', type: '(date) => string', default: 'toLocaleDateString', description: 'Custom format' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">DateRangePicker</p>
        <PropsTable
          props={[
            { name: 'value', type: '{ from, to }', default: '—', description: 'Selected range' },
            { name: 'onChange', type: '(range) => void', default: '—', description: 'Range callback' },
            { name: 'numberOfMonths', type: 'number', default: '2', description: 'Months shown side-by-side' },
            { name: 'placeholder', type: 'string', default: "'Pick a date range'", description: 'Placeholder' },
          ]}
        />
      </div>

      <Separator variant="bold" />

      {/* ─── Basic ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic DatePicker"
        description="Click to open calendar. Select a date, auto-closes."
        code={`const [date, setDate] = useState(null);

<DatePicker value={date} onChange={setDate} />`}
      >
        <div className="space-y-2 w-full max-w-xs">
          <Label>Event date</Label>
          <DatePicker value={date} onChange={setDate} />
          {date && <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)]">Selected: {date.toLocaleDateString()}</p>}
        </div>
      </PlaygroundSection>

      {/* ─── With dropdown ──────────────────────────────────────── */}
      <PlaygroundSection
        title="With month/year dropdown"
        description="captionLayout='dropdown' for quick year navigation — e.g. date of birth."
        code={`<DatePicker
  value={date}
  onChange={setDate}
  captionLayout="dropdown"
  toDate={new Date()}
  placeholder="Date of birth"
/>`}
      >
        <div className="space-y-2 w-full max-w-xs">
          <Label>Date of birth</Label>
          <DatePicker value={date} onChange={setDate} captionLayout="dropdown" toDate={new Date()} placeholder="Date of birth" />
        </div>
      </PlaygroundSection>

      {/* ─── Future only ────────────────────────────────────────── */}
      <PlaygroundSection
        title="Future dates only"
        description="fromDate={new Date()} blocks past dates."
        code={`<DatePicker value={date} onChange={setDate} fromDate={new Date()} placeholder="Select future date" />`}
      >
        <div className="space-y-2 w-full max-w-xs">
          <Label>Deadline</Label>
          <DatePicker value={date} onChange={setDate} fromDate={new Date()} placeholder="Select future date" />
        </div>
      </PlaygroundSection>

      {/* ─── Weekends disabled ──────────────────────────────────── */}
      <PlaygroundSection
        title="Weekends disabled"
        description="Block Saturday and Sunday."
        code={`<DatePicker
  value={date}
  onChange={setDate}
  disabled={(d) => d.getDay() === 0 || d.getDay() === 6}
  placeholder="Weekdays only"
/>`}
      >
        <div className="space-y-2 w-full max-w-xs">
          <Label>Meeting date</Label>
          <DatePicker value={date} onChange={setDate} disabled={(d) => d.getDay() === 0 || d.getDay() === 6} placeholder="Weekdays only" />
        </div>
      </PlaygroundSection>

      {/* ─── Custom format ──────────────────────────────────────── */}
      <PlaygroundSection
        title="Custom format (ISO)"
        description="Override display format with formatDate prop."
        code={`<DatePicker
  value={date}
  onChange={setDate}
  formatDate={(d) => d.toISOString().split('T')[0]}
  placeholder="YYYY-MM-DD"
/>`}
      >
        <div className="space-y-2 w-full max-w-xs">
          <Label>ISO format</Label>
          <DatePicker value={date} onChange={setDate} formatDate={(d) => d.toISOString().split('T')[0]} placeholder="YYYY-MM-DD" />
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── DateRangePicker ────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Date Range Picker</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Two months side-by-side for selecting a start and end date.</p>
      </div>

      <PlaygroundSection
        title="Basic range"
        description="Click start date, then click end date. Shows 2 months. Auto-closes after both selected."
        code={`const [range, setRange] = useState({ from: null, to: null });

<DateRangePicker value={range} onChange={setRange} />`}
      >
        <div className="space-y-2 w-full max-w-md">
          <Label>Trip dates</Label>
          <DateRangePicker value={range} onChange={setRange} placeholder="Check-in – Check-out" />
          {range.from && range.to && (
            <p className="text-[var(--muted-foreground)] text-[var(--muted-foreground)]">
              {range.from.toLocaleDateString()} – {range.to.toLocaleDateString()} ({Math.ceil((range.to - range.from) / 86400000)} nights)
            </p>
          )}
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns.</p>
      </div>

      <PlaygroundSection
        title="Booking form"
        description="Check-in/check-out with range picker + submit."
        code={`<DateRangePicker value={range} onChange={setRange} fromDate={new Date()} />
<Button>Book Now</Button>`}
      >
        <Card className="w-full max-w-md">
          <CardContent className="py-4 space-y-3">
            <div className="space-y-1.5">
              <Label>Stay dates</Label>
              <DateRangePicker value={range} onChange={setRange} fromDate={new Date()} placeholder="Select dates" />
            </div>
            <Button fullWidth disabled={!range.from || !range.to}>Book Now</Button>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Filter by date"
        description="Date range filter for reports or analytics."
        code={`<div className="flex gap-2 items-end">
  <DatePicker value={start} onChange={setStart} placeholder="From" />
  <DatePicker value={end} onChange={setEnd} placeholder="To" />
  <Button size="sm">Apply</Button>
</div>`}
      >
        <div className="flex flex-wrap gap-2 items-end">
          <div className="space-y-1.5">
            <Label>From</Label>
            <DatePicker value={null} onChange={() => {}} placeholder="Start date" />
          </div>
          <div className="space-y-1.5">
            <Label>To</Label>
            <DatePicker value={null} onChange={() => {}} placeholder="End date" />
          </div>
          <Button size="sm">Apply</Button>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
