import { useState } from 'react';
import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Calendar } from 'invin-uix/ui/calendar';

export default function CalendarDemo() {
  const [date, setDate] = useState(new Date());

  return (
    <ComponentPage
      name="Calendar"
      description="A date selection calendar component. Used standalone or as part of a DatePicker."
      importCode={`import { Calendar } from 'invin-uix/ui/calendar';`}
    >
      <PlaygroundSection
        title="Basic Calendar"
        description="Select a date by clicking on it."
        code={`const [date, setDate] = useState(new Date());
<Calendar selected={date} onSelect={setDate} />`}
      >
        <div>
          <Calendar selected={date} onSelect={setDate} />
          <p className="text-xs text-muted-foreground mt-2">
            Selected: {date ? date.toLocaleDateString() : 'None'}
          </p>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
