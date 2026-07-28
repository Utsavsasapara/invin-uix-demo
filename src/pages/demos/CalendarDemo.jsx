import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Calendar } from 'invin-uix/ui/calendar';
import { Separator } from 'invin-uix/ui/separator';
import { Card, CardContent } from 'invin-uix/ui/card';

export default function CalendarDemo() {
  const [date, setDate] = useState(new Date());
  const [range, setRange] = useState({ from: null, to: null });
  const [multi, setMulti] = useState([]);

  return (
    <ComponentPage
      name="Calendar"
      description="Full-featured calendar component. Supports single/range/multiple selection, month/year dropdowns, week numbers, outside days, multiple months side-by-side, disabled dates, and RTL. Zero external dependencies."
      importCode={`import { Calendar } from 'invin-uix/ui/calendar';`}
    >
      <PropsTable
        props={[
          { name: 'mode', type: "'single' | 'range' | 'multiple'", default: "'single'", description: 'Selection mode' },
          { name: 'selected', type: 'Date | null', default: '—', description: 'Selected date (single mode)' },
          { name: 'onSelect', type: '(date: Date) => void', default: '—', description: 'Selection callback (single)' },
          { name: 'selectedRange', type: '{ from, to }', default: '—', description: 'Selected range (range mode)' },
          { name: 'onRangeSelect', type: '(range) => void', default: '—', description: 'Range callback' },
          { name: 'numberOfMonths', type: 'number', default: '1', description: 'Show multiple months side by side' },
          { name: 'captionLayout', type: "'label' | 'dropdown'", default: "'label'", description: 'Month/year navigation style' },
          { name: 'showOutsideDays', type: 'boolean', default: 'false', description: 'Show days from adjacent months' },
          { name: 'showWeekNumber', type: 'boolean', default: 'false', description: 'Show week number column' },
          { name: 'fixedWeeks', type: 'boolean', default: 'false', description: 'Always render 6 weeks (fixed height)' },
          { name: 'fromDate', type: 'Date', default: '—', description: 'Earliest selectable date' },
          { name: 'toDate', type: 'Date', default: '—', description: 'Latest selectable date' },
          { name: 'disabled', type: '(date: Date) => boolean', default: '—', description: 'Disable specific dates' },
          { name: 'dir', type: "'ltr' | 'rtl'", default: "'ltr'", description: 'Text direction' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Single ─────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Single selection"
        description="Click a date to select. Today is outlined, selected is filled with accent."
        code={`const [date, setDate] = useState(new Date());

<Calendar selected={date} onSelect={setDate} />`}
      >
        <div className="flex flex-col items-start gap-2">
          <Card><CardContent className="p-0"><Calendar selected={date} onSelect={setDate} /></CardContent></Card>
          <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)]">Selected: <strong className="text-[var(--invin-text)]">{date?.toLocaleDateString()}</strong></p>
        </div>
      </PlaygroundSection>

      {/* ─── Range ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Range selection"
        description="Click to set start, click again to set end. Visual highlight between dates. Two months shown side-by-side."
        code={`const [range, setRange] = useState({ from: null, to: null });

<Calendar
  mode="range"
  selectedRange={range}
  onRangeSelect={setRange}
  numberOfMonths={2}
/>`}
      >
        <div className="flex flex-col items-start gap-2">
          <Card><CardContent className="p-0">
            <Calendar mode="range" selectedRange={range} onRangeSelect={setRange} numberOfMonths={2} />
          </CardContent></Card>
          <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)]">
            {range.from && range.to
              ? `${range.from.toLocaleDateString()} – ${range.to.toLocaleDateString()}`
              : range.from
                ? `From: ${range.from.toLocaleDateString()} (click end date)`
                : 'Click to select range'}
          </p>
        </div>
      </PlaygroundSection>

      {/* ─── Multiple ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Multiple selection"
        description="Click to toggle multiple dates. Click again to deselect."
        code={`const [dates, setDates] = useState([]);

<Calendar mode="multiple" selectedDates={dates} onMultiSelect={setDates} />`}
      >
        <div className="flex flex-col items-start gap-2">
          <Card><CardContent className="p-0">
            <Calendar mode="multiple" selectedDates={multi} onMultiSelect={setMulti} />
          </CardContent></Card>
          <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)]">Selected: {multi.length} date{multi.length !== 1 ? 's' : ''}</p>
        </div>
      </PlaygroundSection>

      {/* ─── Dropdown ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Month & year dropdown"
        description="captionLayout='dropdown' shows select menus for quick month/year navigation."
        code={`<Calendar
  captionLayout="dropdown"
  fromYear={2020}
  toYear={2030}
  selected={date}
  onSelect={setDate}
/>`}
      >
        <Card><CardContent className="p-0">
          <Calendar captionLayout="dropdown" fromYear={1990} toYear={2030} selected={date} onSelect={setDate} />
        </CardContent></Card>
      </PlaygroundSection>

      {/* ─── Week Numbers + Outside Days ────────────────────────── */}
      <PlaygroundSection
        title="Week numbers & outside days"
        description="Show ISO week numbers and adjacent month days for context."
        code={`<Calendar showWeekNumber showOutsideDays fixedWeeks selected={date} onSelect={setDate} />`}
      >
        <Card><CardContent className="p-0">
          <Calendar showWeekNumber showOutsideDays fixedWeeks selected={date} onSelect={setDate} />
        </CardContent></Card>
      </PlaygroundSection>

      {/* ─── Disabled ───────────────────────────────────────────── */}
      <PlaygroundSection
        title="Disabled dates"
        description="Block weekends and past dates."
        code={`<Calendar
  selected={date}
  onSelect={setDate}
  fromDate={new Date()}
  disabled={(d) => d.getDay() === 0 || d.getDay() === 6}
/>`}
      >
        <Card><CardContent className="p-0">
          <Calendar
            selected={null}
            onSelect={setDate}
            fromDate={new Date()}
            disabled={(d) => d.getDay() === 0 || d.getDay() === 6}
          />
        </CardContent></Card>
        <p className="text-[length:var(--invin-text-label)] text-[var(--invin-text-dim)] mt-2">Weekends + past dates disabled</p>
      </PlaygroundSection>

    </ComponentPage>
  );
}
