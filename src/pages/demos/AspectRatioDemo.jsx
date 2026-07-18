import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { AspectRatio } from 'invin-uix/ui/aspect-ratio';

export default function AspectRatioDemo() {
  return (
    <ComponentPage
      name="Aspect Ratio"
      description="Maintains a consistent width-to-height ratio for its child content. Useful for images, videos, and responsive media containers."
      importCode={`import { AspectRatio } from 'invin-uix/ui/aspect-ratio';`}
    >
      <PlaygroundSection
        title="16:9 (Widescreen)"
        description="Standard video aspect ratio."
        code={`<AspectRatio ratio={16 / 9}>
  <img src="..." className="object-cover w-full h-full rounded-md" />
</AspectRatio>`}
      >
        <div className="w-full max-w-md">
          <AspectRatio ratio={16 / 9}>
            <div className="w-full h-full rounded-md bg-muted flex items-center justify-center text-sm text-muted-foreground border border-border">
              16:9
            </div>
          </AspectRatio>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="1:1 (Square)"
        description="Square ratio for avatars, thumbnails, album art."
        code={`<AspectRatio ratio={1}>
  <img src="..." className="object-cover w-full h-full rounded-md" />
</AspectRatio>`}
      >
        <div className="w-full max-w-[200px]">
          <AspectRatio ratio={1}>
            <div className="w-full h-full rounded-md bg-muted flex items-center justify-center text-sm text-muted-foreground border border-border">
              1:1
            </div>
          </AspectRatio>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="4:3 (Classic)"
        description="Traditional photo/display ratio."
        code={`<AspectRatio ratio={4 / 3}>
  <img src="..." className="object-cover w-full h-full rounded-md" />
</AspectRatio>`}
      >
        <div className="w-full max-w-sm">
          <AspectRatio ratio={4 / 3}>
            <div className="w-full h-full rounded-md bg-muted flex items-center justify-center text-sm text-muted-foreground border border-border">
              4:3
            </div>
          </AspectRatio>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="With Image"
        description="Real-world usage with an image that fills the ratio container."
        code={`<AspectRatio ratio={16 / 9}>
  <img
    src="https://images.unsplash.com/photo-..."
    alt="Landscape"
    className="object-cover w-full h-full rounded-md"
  />
</AspectRatio>`}
      >
        <div className="w-full max-w-md">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=450&fit=crop"
              alt="Landscape placeholder"
              className="object-cover w-full h-full rounded-md"
            />
          </AspectRatio>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Comparison Grid"
        description="Different ratios side by side to visualize proportions."
        code={`<div className="grid grid-cols-3 gap-4">
  <AspectRatio ratio={1}>...</AspectRatio>
  <AspectRatio ratio={4/3}>...</AspectRatio>
  <AspectRatio ratio={16/9}>...</AspectRatio>
</div>`}
      >
        <div className="grid grid-cols-3 gap-4 w-full">
          {[
            { ratio: 1, label: '1:1' },
            { ratio: 4/3, label: '4:3' },
            { ratio: 16/9, label: '16:9' },
          ].map(({ ratio, label }) => (
            <AspectRatio key={label} ratio={ratio}>
              <div className="w-full h-full rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                {label}
              </div>
            </AspectRatio>
          ))}
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
