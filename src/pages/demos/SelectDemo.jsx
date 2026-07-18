import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from 'invin-uix/ui/select';
import { Label } from 'invin-uix/ui/label';

export default function SelectDemo() {
  return (
    <ComponentPage
      name="Select"
      description="A dropdown select built on Radix UI with keyboard navigation, size variants, and grouped options."
      importCode={`import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from 'invin-uix/ui/select';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Simple select with placeholder and options."
        code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>`}
      >
        <div className="w-full max-w-xs">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="cherry">Cherry</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Sizes"
        description="Three trigger sizes: sm, md (default), lg."
        code={`<SelectTrigger size="sm">...</SelectTrigger>
<SelectTrigger size="md">...</SelectTrigger>
<SelectTrigger size="lg">...</SelectTrigger>`}
      >
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Select>
            <SelectTrigger size="sm"><SelectValue placeholder="Small" /></SelectTrigger>
            <SelectContent><SelectItem value="a">Option A</SelectItem><SelectItem value="b">Option B</SelectItem></SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="md"><SelectValue placeholder="Medium (default)" /></SelectTrigger>
            <SelectContent><SelectItem value="a">Option A</SelectItem><SelectItem value="b">Option B</SelectItem></SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="lg"><SelectValue placeholder="Large" /></SelectTrigger>
            <SelectContent><SelectItem value="a">Option A</SelectItem><SelectItem value="b">Option B</SelectItem></SelectContent>
          </Select>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="With Label"
        description="Paired with Label for form patterns."
        code={`<Label htmlFor="country">Country</Label>
<Select>
  <SelectTrigger id="country">
    <SelectValue placeholder="Choose country" />
  </SelectTrigger>
  ...
</Select>`}
      >
        <div className="space-y-2 w-full max-w-xs">
          <Label htmlFor="country">Country</Label>
          <Select>
            <SelectTrigger id="country"><SelectValue placeholder="Choose country" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="in">India</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Grouped Options"
        description="Use SelectGroup and SelectLabel for categorized options."
        code={`<SelectContent>
  <SelectGroup>
    <SelectLabel>Fruits</SelectLabel>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectGroup>
  <SelectSeparator />
  <SelectGroup>
    <SelectLabel>Vegetables</SelectLabel>
    <SelectItem value="carrot">Carrot</SelectItem>
    <SelectItem value="broccoli">Broccoli</SelectItem>
  </SelectGroup>
</SelectContent>`}
      >
        <div className="w-full max-w-xs">
          <Select>
            <SelectTrigger><SelectValue placeholder="Select food" /></SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="cherry">Cherry</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="broccoli">Broccoli</SelectItem>
                <SelectItem value="spinach">Spinach</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Disabled"
        description="Disabled select prevents interaction."
        code={`<Select disabled>
  <SelectTrigger><SelectValue placeholder="Disabled" /></SelectTrigger>
  ...
</Select>`}
      >
        <div className="w-full max-w-xs">
          <Select disabled>
            <SelectTrigger><SelectValue placeholder="Disabled" /></SelectTrigger>
            <SelectContent><SelectItem value="a">Option A</SelectItem></SelectContent>
          </Select>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
