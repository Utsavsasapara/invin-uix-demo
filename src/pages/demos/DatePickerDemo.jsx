import { useState } from 'react';
import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { DatePicker } from 'invin-uix/ui/date-picker';

export default function DatePickerDemo() {
  const [date, setDate] = useState(null);

  return (
    <ComponentPage
      name="Date Picker"
      description="A date input with a popover calendar for date selection. Combines Input display with Calendar selection."
      importCode={`import { DatePicker } from 'invin-uix/ui/date-picker';`}
    >
      <PlaygroundSection
        title="Basic Date Picker"
        description="Click the input to open the calendar popover."
        code={`const [date, setDate] = useState(null);
<DatePicker value={date} onChange={setDate} />`}
      >
        <div className="w-full max-w-xs">
          <DatePicker value={date} onChange={setDate} />
          <p className="text-xs text-muted-foreground mt-2">
            Selected: {date ? date.toLocaleDateString() : 'None'}
          </p>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
