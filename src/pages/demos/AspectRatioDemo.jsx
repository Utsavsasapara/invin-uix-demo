import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable, InteractiveDemo } from '../../components/PlaygroundSection.jsx';
import { AspectRatio } from 'invin-uix/ui/aspect-ratio';
import { Label } from 'invin-uix/ui/label';
import { Slider } from 'invin-uix/ui/slider';
import { Badge } from 'invin-uix/ui/badge';
import { Separator } from 'invin-uix/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'invin-uix/ui/tabs';
import { Image, VideoCamera, Monitor, DeviceMobile, Square } from 'invin-uix/ui/icons';

const RATIOS = [
  { ratio: 1, label: '1:1', desc: 'Square', icon: Square, useCase: 'Avatars, thumbnails, album covers' },
  { ratio: 4/3, label: '4:3', desc: 'Classic', icon: Monitor, useCase: 'Photos, presentations, older displays' },
  { ratio: 16/9, label: '16:9', desc: 'Widescreen', icon: VideoCamera, useCase: 'Videos, hero banners, YouTube embeds' },
  { ratio: 21/9, label: '21:9', desc: 'Ultra-wide', icon: Monitor, useCase: 'Cinematic banners, panoramic images' },
  { ratio: 9/16, label: '9:16', desc: 'Portrait', icon: DeviceMobile, useCase: 'Mobile stories, reels, portrait videos' },
  { ratio: 3/2, label: '3:2', desc: 'Photo', icon: Image, useCase: 'DSLR photos, standard print format' },
];

export default function AspectRatioDemo() {
  const [customRatio, setCustomRatio] = useState([16]);

  return (
    <ComponentPage
      name="Aspect Ratio"
      description="Maintains a consistent width-to-height ratio for child content. Essential for responsive images, video embeds, and media containers that must preserve proportions across screen sizes."
      importCode={`import { AspectRatio } from 'invin-uix/ui/aspect-ratio';`}
    >
      {/* ─── Interactive Playground ─────────────────────────────── */}
      <InteractiveDemo
        title="Aspect Ratio Playground"
        description="Experiment with different aspect ratios."
        controls={[
          { name: 'ratio', type: 'select', label: 'Ratio', default: '16/9', options: [{ value: '1/1', label: '1:1' }, { value: '4/3', label: '4:3' }, { value: '16/9', label: '16:9' }, { value: '21/9', label: '21:9' }, { value: '9/16', label: '9:16' }, { value: '3/2', label: '3:2' }] },
        ]}
      >
        {(props) => {
          const ratioMap = { '1/1': 1, '4/3': 4/3, '16/9': 16/9, '21/9': 21/9, '9/16': 9/16, '3/2': 3/2 };
          return (
            <div className="w-full max-w-[300px]">
              <AspectRatio ratio={ratioMap[props.ratio]}>
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                  <span className="text-label font-semibold text-primary">{props.ratio}</span>
                </div>
              </AspectRatio>
            </div>
          );
        }}
      </InteractiveDemo>
      <Separator variant="bold" />

      <PropsTable
        props={[
          { name: 'ratio', type: 'number', default: '1', description: 'Width-to-height ratio (e.g. 16/9 = 1.778)' },
          { name: 'children', type: 'ReactNode', default: '—', description: 'Content to render inside the ratio container' },
        ]}
      />

      <Separator variant="bold" />
      <PlaygroundSection
        title="Common Ratios"
        description="Standard aspect ratios used in web and media design. Each card shows the ratio applied to a fixed-width container."
        code={`<AspectRatio ratio={16 / 9}>
  <img src="..." className="object-cover w-full h-full rounded-md" />
</AspectRatio>

<AspectRatio ratio={1}>
  <div>Square content</div>
</AspectRatio>

<AspectRatio ratio={4 / 3}>
  <div>Classic 4:3</div>
</AspectRatio>`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {RATIOS.map(({ ratio, label, desc, icon: Icon, useCase }) => (
            <div key={label} className="space-y-2">
              <AspectRatio ratio={ratio}>
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex flex-col items-center justify-center gap-1 transition-all hover:from-primary/25 hover:to-primary/10 hover:border-primary/40">
                  <Icon style={{ width: 20, height: 20, opacity: 0.6 }} className="text-primary" />
                  <span className="text-label font-semibold text-primary">{label}</span>
                  <span className="text-[10px] text-muted-foreground">{desc}</span>
                </div>
              </AspectRatio>
              <p className="text-[10px] text-muted-foreground text-center leading-tight">{useCase}</p>
            </div>
          ))}
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Interactive Ratio Slider"
        description="Drag the slider to see how aspect ratio affects a container in real-time."
        code={`const [ratio, setRatio] = useState([16]);

<Slider value={ratio} onValueChange={setRatio} min={4} max={32} step={1} />
<AspectRatio ratio={ratio[0] / 9}>
  <div>Dynamic content at {ratio}:9</div>
</AspectRatio>`}
      >
        <div className="w-full space-y-4">
          <div className="flex items-center justify-between">
            <Label>Ratio: <span className="font-mono font-bold text-primary">{customRatio[0]}:9</span></Label>
            <Badge variant="outline" size="sm">{(customRatio[0] / 9).toFixed(2)}</Badge>
          </div>
          <Slider value={customRatio} onValueChange={setCustomRatio} min={4} max={32} step={1} />
          <div className="w-full max-w-[300px] mx-auto">
            <AspectRatio ratio={customRatio[0] / 9}>
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/20 to-success/10 border border-border flex items-center justify-center transition-all">
                <div className="text-center">
                  <p className="text-section font-bold text-foreground">{customRatio[0]}:9</p>
                  <p className="text-caption text-muted-foreground mt-1">
                    {customRatio[0] < 9 ? 'Portrait' : customRatio[0] === 9 ? 'Square-ish' : customRatio[0] <= 16 ? 'Landscape' : 'Ultra-wide'}
                  </p>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="With Real Images"
        description="Aspect ratio containers with object-cover ensure images fill the space without distortion."
        code={`<AspectRatio ratio={16 / 9}>
  <img
    src="https://images.unsplash.com/photo-..."
    alt="Landscape"
    className="object-cover w-full h-full rounded-lg"
  />
</AspectRatio>`}
      >
        <Tabs defaultValue="landscape" className="w-full">
          <TabsList>
            <TabsTrigger value="landscape">16:9 Landscape</TabsTrigger>
            <TabsTrigger value="square">1:1 Square</TabsTrigger>
            <TabsTrigger value="portrait">9:16 Portrait</TabsTrigger>
          </TabsList>
          <TabsContent value="landscape">
            <div className="max-w-[400px]">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=450&fit=crop"
                  alt="Landscape"
                  className="object-cover w-full h-full rounded-lg"
                />
              </AspectRatio>
            </div>
          </TabsContent>
          <TabsContent value="square">
            <div className="max-w-[280px]">
              <AspectRatio ratio={1}>
                <img
                  src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=400&h=400&fit=crop"
                  alt="Square"
                  className="object-cover w-full h-full rounded-lg"
                />
              </AspectRatio>
            </div>
          </TabsContent>
          <TabsContent value="portrait">
            <div className="max-w-[200px]">
              <AspectRatio ratio={9 / 16}>
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=711&fit=crop"
                  alt="Portrait"
                  className="object-cover w-full h-full rounded-lg"
                />
              </AspectRatio>
            </div>
          </TabsContent>
        </Tabs>
      </PlaygroundSection>

      <PlaygroundSection
        title="VideoCamera Embed"
        description="Responsive video container that maintains 16:9 ratio at any viewport width."
        code={`<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/..."
    title="VideoCamera"
    className="w-full h-full rounded-lg"
    allow="accelerometer; autoplay; clipboard-write"
    allowFullScreen
  />
</AspectRatio>`}
      >
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <div className="w-full h-full rounded-lg bg-surface-elevated border border-border flex flex-col items-center justify-center gap-2">
              <VideoCamera style={{ width: 32, height: 32 }} className="text-muted-foreground" />
              <span className="text-label text-muted-foreground">VideoCamera embed placeholder</span>
              <span className="text-[10px] text-muted-foreground">iframe would go here — always 16:9</span>
            </div>
          </AspectRatio>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Responsive Card Grid"
        description="Use case: product image grid where all thumbnails share the same aspect ratio regardless of original image dimensions."
        code={`<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
  {products.map(product => (
    <div key={product.id}>
      <AspectRatio ratio={4 / 3}>
        <img src={product.image} className="object-cover w-full h-full rounded-md" />
      </AspectRatio>
      <p className="text-label mt-2">{product.name}</p>
    </div>
  ))}
</div>`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {[
            { id: 1, name: 'Mountain View', color: 'from-blue-500/20 to-cyan-500/10' },
            { id: 2, name: 'Forest Path', color: 'from-green-500/20 to-emerald-500/10' },
            { id: 3, name: 'City Lights', color: 'from-purple-500/20 to-pink-500/10' },
            { id: 4, name: 'Ocean Sunset', color: 'from-orange-500/20 to-red-500/10' },
          ].map(item => (
            <div key={item.id}>
              <AspectRatio ratio={4 / 3}>
                <div className={`w-full h-full rounded-md bg-gradient-to-br ${item.color} border border-border flex items-center justify-center`}>
                  <Image style={{ width: 20, height: 20 }} className="text-muted-foreground" />
                </div>
              </AspectRatio>
              <p className="text-caption font-medium mt-1.5">{item.name}</p>
              <p className="text-[10px] text-muted-foreground">4:3 constrained</p>
            </div>
          ))}
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
