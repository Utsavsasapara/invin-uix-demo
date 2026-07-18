import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from 'invin-uix/ui/drawer';
import { Button } from 'invin-uix/ui/button';

export default function DrawerDemo() {
  return (
    <ComponentPage
      name="Drawer"
      description="A bottom sheet drawer that slides up from the bottom of the screen. Supports drag handle and snap points. Ideal for mobile-first interactions."
      importCode={`import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from 'invin-uix/ui/drawer';`}
    >
      <PlaygroundSection
        title="Basic Drawer"
        description="Bottom sheet with drag handle and content."
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>Drag the handle to resize.</DrawerDescription>
    </DrawerHeader>
    <div className="p-4">Content here</div>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 text-center">
              <p className="text-4xl font-bold">350</p>
              <p className="text-sm text-muted-foreground mt-1">calories/day</p>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </PlaygroundSection>

      <PlaygroundSection
        title="Use Case: Action Sheet"
        description="Mobile action sheet pattern with multiple options."
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button>Share</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Share this post</DrawerTitle>
    </DrawerHeader>
    <div className="p-4 space-y-2">
      <Button variant="ghost" block>Copy link</Button>
      <Button variant="ghost" block>Email</Button>
      <Button variant="ghost" block>Twitter</Button>
    </div>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Share</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Share this post</DrawerTitle>
              <DrawerDescription>Choose how you want to share.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-2">
              <Button variant="ghost" block className="justify-start">Copy link</Button>
              <Button variant="ghost" block className="justify-start">Send via email</Button>
              <Button variant="ghost" block className="justify-start">Share on Twitter</Button>
              <Button variant="ghost" block className="justify-start">Share on LinkedIn</Button>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline" block>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </PlaygroundSection>
    </ComponentPage>
  );
}
