import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'invin-uix/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from 'invin-uix/ui/card';
import { Input } from 'invin-uix/ui/input';
import { Label } from 'invin-uix/ui/label';
import { Button } from 'invin-uix/ui/button';

export default function TabsDemo() {
  return (
    <ComponentPage
      name="Tabs"
      description="Tabbed interface built on Radix UI for organizing content into switchable panels."
      importCode={`import { Tabs, TabsList, TabsTrigger, TabsContent } from 'invin-uix/ui/tabs';`}
    >
      <PlaygroundSection
        title="Basic Usage"
        description="Simple tabs with content panels."
        code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings here.</TabsContent>
  <TabsContent value="password">Password settings here.</TabsContent>
</Tabs>`}
      >
        <div className="w-full">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Account</CardTitle>
                  <CardDescription>Make changes to your account here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="tab-name">Name</Label>
                    <Input id="tab-name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="tab-email">Email</Label>
                    <Input id="tab-email" defaultValue="john@example.com" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Password</CardTitle>
                  <CardDescription>Change your password here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="tab-current">Current password</Label>
                    <Input id="tab-current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="tab-new">New password</Label>
                    <Input id="tab-new" type="password" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Multiple Tabs"
        description="More than two tabs with disabled option."
        code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
    <TabsTrigger value="settings" disabled>Settings</TabsTrigger>
  </TabsList>
  ...
</Tabs>`}
      >
        <div className="w-full">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings" disabled>Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p className="text-sm text-muted-foreground py-4">Overview content goes here. This is where you'd show summary data.</p>
            </TabsContent>
            <TabsContent value="analytics">
              <p className="text-sm text-muted-foreground py-4">Analytics content with charts and metrics would go here.</p>
            </TabsContent>
            <TabsContent value="reports">
              <p className="text-sm text-muted-foreground py-4">Reports list and export options would be shown here.</p>
            </TabsContent>
          </Tabs>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Use Case: Settings Page"
        description="Common pattern: tabbed settings page with form content."
        code={`<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
  </TabsList>
  ...
</Tabs>`}
      >
        <div className="w-full">
          <Tabs defaultValue="general">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div className="space-y-3 py-4">
                <div className="space-y-1">
                  <Label>Display name</Label>
                  <Input defaultValue="Invin User" />
                </div>
                <Button size="sm">Save changes</Button>
              </div>
            </TabsContent>
            <TabsContent value="notifications">
              <p className="text-sm text-muted-foreground py-4">Configure notification preferences here.</p>
            </TabsContent>
            <TabsContent value="security">
              <p className="text-sm text-muted-foreground py-4">Two-factor authentication and session management.</p>
            </TabsContent>
          </Tabs>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
