import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { HoverCard, HoverCardTrigger, HoverCardContent } from 'invin-uix/ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';
import { Button } from 'invin-uix/ui/button';
import { Badge } from 'invin-uix/ui/badge';

export default function HoverCardDemo() {
  return (
    <ComponentPage
      name="Hover Card"
      description="A floating card that appears when hovering over a trigger. Useful for previews of user profiles, links, or any content you want to show on hover."
      importCode={`import { HoverCard, HoverCardTrigger, HoverCardContent } from 'invin-uix/ui/hover-card';`}
    >
      <PlaygroundSection
        title="User Profile Preview"
        description="Hover over the link to see a profile preview card."
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <a href="#">@john_doe</a>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="flex gap-3">
      <Avatar>...</Avatar>
      <div>
        <h4>John Doe</h4>
        <p>Software Engineer</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
      >
        <p className="text-label">
          Created by{' '}
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="#" className="text-primary underline underline-offset-2 font-medium">@john_doe</a>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/100?u=john" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-label font-semibold">John Doe</h4>
                  <p className="text-caption text-muted-foreground">Software Engineer at Invin</p>
                  <div className="flex items-center gap-2 pt-1">
                    <Badge variant="secondary" size="sm">Pro</Badge>
                    <span className="text-caption text-muted-foreground">Joined Dec 2023</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          {' '}on July 15, 2026.
        </p>
      </PlaygroundSection>

      <PlaygroundSection
        title="Link Preview"
        description="Show a preview when hovering over a link."
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <a href="#">Documentation</a>
  </HoverCardTrigger>
  <HoverCardContent>
    <p>Preview of the linked content...</p>
  </HoverCardContent>
</HoverCard>`}
      >
        <div className="flex gap-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">Getting Started Guide</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-2">
                <h4 className="text-label font-semibold">Getting Started</h4>
                <p className="text-caption text-muted-foreground">Learn how to install and configure Invin UI in your React project. Covers installation, theming, and basic usage.</p>
                <Badge variant="info" size="sm">Documentation</Badge>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
