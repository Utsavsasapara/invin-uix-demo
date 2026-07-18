import { Input } from 'invin-uix/ui/input';
import { Textarea } from 'invin-uix/ui/textarea';
import { Label } from 'invin-uix/ui/label';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';

export default function InputDemo() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">Form controls with focus ring, disabled state, and placeholder styling.</p></div>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2"><Label htmlFor="d-name">Name</Label><Input id="d-name" placeholder="Enter your name" /></div>
          <div className="space-y-2"><Label htmlFor="d-email">Email</Label><Input id="d-email" type="email" placeholder="you@example.com" /></div>
          <div className="space-y-2"><Label htmlFor="d-pw">Password</Label><Input id="d-pw" type="password" placeholder="••••••••" /></div>
          <div className="space-y-2"><Label htmlFor="d-dis">Disabled</Label><Input id="d-dis" disabled placeholder="Can't edit" /></div>
          <Separator />
          <div className="space-y-2"><Label htmlFor="d-ta">Message</Label><Textarea id="d-ta" placeholder="Type here..." /></div>
          <div className="space-y-2"><Label htmlFor="d-ta2">Disabled Textarea</Label><Textarea id="d-ta2" disabled placeholder="Not editable" /></div>
        </CardContent>
      </Card>
    </div>
  );
}
