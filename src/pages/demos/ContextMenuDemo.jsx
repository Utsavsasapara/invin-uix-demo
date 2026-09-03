import { useState } from 'react';
import { ComponentPage, PlaygroundSection, InteractiveDemo } from '../../components/PlaygroundSection.jsx';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from 'invin-uix/ui/context-menu';
import { Separator } from 'invin-uix/ui/separator';

export default function ContextMenuDemo() {
  return (
    <ComponentPage
      name="Context Menu"
      description="A menu that appears on right-click. Built on Radix UI."
      importCode={`import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from 'invin-uix/ui/context-menu';`}
    >
      {/* ─── Interactive Playground ─────────────────────────────── */}
      <InteractiveDemo
        title="Context Menu Playground"
        description="Right-click in the area to open the context menu."
        controls={[]}
      >
        {() => (
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="flex items-center justify-center h-32 w-full border-2 border-dashed border-border rounded-lg text-label text-muted-foreground select-none">
                Right-click here
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Cut</ContextMenuItem>
              <ContextMenuItem>Copy</ContextMenuItem>
              <ContextMenuItem>Paste</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        )}
      </InteractiveDemo>
      <Separator variant="bold" />

      <PlaygroundSection
        title="Basic Usage"
        description="Right-click the area below to open the context menu."
        code={`<ContextMenu>
  <ContextMenuTrigger>
    <div>Right click here</div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Cut</ContextMenuItem>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="flex items-center justify-center h-32 w-full border-2 border-dashed border-border rounded-lg text-label text-muted-foreground select-none">
              Right-click here to open context menu
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Cut</ContextMenuItem>
            <ContextMenuItem>Copy</ContextMenuItem>
            <ContextMenuItem>Paste</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Select All</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </PlaygroundSection>
    </ComponentPage>
  );
}
