import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from 'invin-uix/ui/avatar';
import { NotificationBadge } from 'invin-uix/ui/badge';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';

export default function AvatarDemo() {
  return (
    <ComponentPage
      name="Avatar"
      description="Circular user image with automatic fallback to initials. Supports 5 sizes, image loading detection, delayed fallback, and composable patterns (stacked groups, status badges)."
      importCode={`import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">Avatar</p>
        <PropsTable
          props={[
            { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Preset size (24px to 64px)' },
            { name: 'className', type: 'string', default: '—', description: 'Additional classes (border, ring, etc.)' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">AvatarImage</p>
        <PropsTable
          props={[
            { name: 'src', type: 'string', default: '—', description: 'Image URL' },
            { name: 'alt', type: 'string', default: '—', description: 'Alt text for accessibility' },
            { name: 'onLoadingStatusChange', type: "(status: 'loading' | 'loaded' | 'error') => void", default: '—', description: 'Callback when image loading state changes' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">AvatarFallback</p>
        <PropsTable
          props={[
            { name: 'delayMs', type: 'number', default: '0', description: 'Delay before showing fallback (prevents flash if image loads fast)' },
            { name: 'children', type: 'ReactNode', default: '—', description: 'Initials, emoji, or icon to show' },
          ]}
        />
      </div>
      <div className="space-y-4">
        <p className="text-[var(--muted-foreground)] font-[600] uppercase tracking-[0.05em] text-[var(--muted-foreground-faint)]">AvatarGroup</p>
        <PropsTable
          props={[
            { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Applied to all avatars and the +N chip' },
            { name: 'max', type: 'number', default: '—', description: 'Show this many, collapse the rest into a +N chip' },
            { name: 'children', type: 'ReactNode', default: '—', description: 'Avatar elements' },
          ]}
        />
      </div>

      <Separator variant="bold" />

      {/* ─── Sizes ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Sizes"
        description="Five presets: xs (24px), sm (32px), md (40px, default), lg (48px), xl (64px)."
        code={`<Avatar size="xs"><AvatarImage src="..." alt="User" /><AvatarFallback>XS</AvatarFallback></Avatar>
<Avatar size="sm"><AvatarImage src="..." alt="User" /><AvatarFallback>SM</AvatarFallback></Avatar>
<Avatar><AvatarImage src="..." alt="User" /><AvatarFallback>MD</AvatarFallback></Avatar>
<Avatar size="lg"><AvatarImage src="..." alt="User" /><AvatarFallback>LG</AvatarFallback></Avatar>
<Avatar size="xl"><AvatarImage src="..." alt="User" /><AvatarFallback>XL</AvatarFallback></Avatar>`}
      >
        <div className="flex items-end gap-4">
          <Avatar size="xs"><AvatarImage src="https://i.pravatar.cc/100?u=a1" alt="User" /><AvatarFallback>XS</AvatarFallback></Avatar>
          <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=a2" alt="User" /><AvatarFallback>SM</AvatarFallback></Avatar>
          <Avatar><AvatarImage src="https://i.pravatar.cc/100?u=a3" alt="User" /><AvatarFallback>MD</AvatarFallback></Avatar>
          <Avatar size="lg"><AvatarImage src="https://i.pravatar.cc/100?u=a4" alt="User" /><AvatarFallback>LG</AvatarFallback></Avatar>
          <Avatar size="xl"><AvatarImage src="https://i.pravatar.cc/100?u=a5" alt="User" /><AvatarFallback>XL</AvatarFallback></Avatar>
        </div>
      </PlaygroundSection>

      {/* ─── Fallbacks ──────────────────────────────────────────── */}
      <PlaygroundSection
        title="Fallbacks"
        description="When image is unavailable or src is empty, the fallback shows. Use initials, single chars, or emoji."
        code={`// Initials
<Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
<Avatar><AvatarFallback>AB</AvatarFallback></Avatar>

// Broken image → fallback shows automatically
<Avatar><AvatarImage src="/broken-url.jpg" alt="User" /><AvatarFallback>BR</AvatarFallback></Avatar>

// Emoji or icon
<Avatar><AvatarFallback>🎉</AvatarFallback></Avatar>`}
      >
        <div className="flex items-center gap-4">
          <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
          <Avatar><AvatarImage src="/broken-url-that-will-fail.jpg" alt="User" /><AvatarFallback>BR</AvatarFallback></Avatar>
          <Avatar size="lg"><AvatarFallback>SC</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>🎉</AvatarFallback></Avatar>
        </div>
      </PlaygroundSection>

      {/* ─── AvatarGroup ────────────────────────────────────────── */}
      <PlaygroundSection
        title="AvatarGroup (stacked)"
        description="AvatarGroup overlaps its children and adds the background ring for you. Set max to collapse the rest into a +N chip."
        code={`import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from 'invin-uix/ui/avatar';

// Show all
<AvatarGroup size="sm">
  <Avatar><AvatarImage src="..." /><AvatarFallback>U1</AvatarFallback></Avatar>
  <Avatar><AvatarImage src="..." /><AvatarFallback>U2</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>U3</AvatarFallback></Avatar>
</AvatarGroup>

// Cap at 3 → shows "+N"
<AvatarGroup size="sm" max={3}>
  {/* 7 avatars → shows 3 + "+4" */}
</AvatarGroup>`}
      >
        <div className="space-y-4">
          <AvatarGroup size="sm">
            <Avatar><AvatarImage src="https://i.pravatar.cc/100?u=s1" alt="User 1" /><AvatarFallback>U1</AvatarFallback></Avatar>
            <Avatar><AvatarImage src="https://i.pravatar.cc/100?u=s2" alt="User 2" /><AvatarFallback>U2</AvatarFallback></Avatar>
            <Avatar><AvatarImage src="https://i.pravatar.cc/100?u=s3" alt="User 3" /><AvatarFallback>U3</AvatarFallback></Avatar>
          </AvatarGroup>
          <AvatarGroup size="sm" max={3}>
            {['s1','s2','s3','s4','s5','s6','s7'].map(u => (
              <Avatar key={u}><AvatarImage src={`https://i.pravatar.cc/100?u=grp${u}`} alt={u} /><AvatarFallback>{u.toUpperCase()}</AvatarFallback></Avatar>
            ))}
          </AvatarGroup>
        </div>
      </PlaygroundSection>

      {/* ─── With Status Badge ──────────────────────────────────── */}
      <PlaygroundSection
        title="With Status Badge"
        description="Wrap an Avatar in NotificationBadge dot mode to show online/offline status."
        code={`import { NotificationBadge } from 'invin-uix/ui/badge';

<NotificationBadge dot color="var(--ok)">
  <Avatar size="sm"><AvatarImage src="..." /><AvatarFallback>SC</AvatarFallback></Avatar>
</NotificationBadge>

<NotificationBadge dot color="var(--degraded)">
  <Avatar size="sm"><AvatarFallback>LP</AvatarFallback></Avatar>
</NotificationBadge>`}
      >
        <div className="flex items-center gap-4">
          <NotificationBadge dot color="var(--ok)">
            <Avatar size="sm"><AvatarImage src="https://i.pravatar.cc/100?u=st1" alt="Sarah" /><AvatarFallback>SC</AvatarFallback></Avatar>
          </NotificationBadge>
          <NotificationBadge dot color="var(--ok)">
            <Avatar><AvatarImage src="https://i.pravatar.cc/100?u=st2" alt="John" /><AvatarFallback>JR</AvatarFallback></Avatar>
          </NotificationBadge>
          <NotificationBadge dot color="var(--degraded)">
            <Avatar size="sm"><AvatarFallback>LP</AvatarFallback></Avatar>
          </NotificationBadge>
          <NotificationBadge dot color="var(--muted-foreground-faint)">
            <Avatar size="sm"><AvatarFallback>MC</AvatarFallback></Avatar>
          </NotificationBadge>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns in real applications.</p>
      </div>

      <PlaygroundSection
        title="User list item"
        description="Avatar + name + role in a settings or team page."
        code={`<div className="flex items-center gap-3">
  <Avatar size="sm">
    <AvatarImage src="..." alt="Sarah Connor" />
    <AvatarFallback>SC</AvatarFallback>
  </Avatar>
  <div>
    <p className="text-label font-medium">Sarah Connor</p>
    <p className="text-caption text-[var(--muted-foreground)]">Engineer</p>
  </div>
</div>`}
      >
        <Card>
          <CardContent className="py-3">
            <div className="space-y-3">
              {[
                { name: 'Sarah Connor', role: 'Engineer', img: 'u=team10' },
                { name: 'John Reese', role: 'Designer', img: 'u=team11' },
                { name: 'Lisa Park', role: 'Marketing', img: 'u=team12' },
                { name: 'Mike Chen', role: 'Product', img: 'u=team13' },
              ].map(m => (
                <div key={m.name} className="flex items-center gap-3">
                  <Avatar size="sm"><AvatarImage src={`https://i.pravatar.cc/100?${m.img}`} alt={m.name} /><AvatarFallback>{m.name[0]}{m.name.split(' ')[1][0]}</AvatarFallback></Avatar>
                  <div>
                    <p className="text-[var(--foreground)] font-[500]">{m.name}</p>
                    <p className="text-[10px] text-[var(--muted-foreground)]">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Comment thread"
        description="Avatar with timestamp and message body."
        code={`<div className="flex gap-3">
  <Avatar size="sm">
    <AvatarImage src="..." alt="Alice" />
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
  <div>
    <div className="flex items-center gap-2">
      <span className="font-medium text-label">Alice</span>
      <span className="text-caption text-[var(--muted-foreground-faint)]">2 min ago</span>
    </div>
    <p className="text-label text-[var(--muted-foreground)] mt-0.5">Looks great! Ship it.</p>
  </div>
</div>`}
      >
        <Card>
          <CardContent className="py-3">
            <div className="space-y-4">
              {[
                { name: 'Alice', time: '2 min ago', msg: 'Looks great! Ship it.', img: 'u=c1' },
                { name: 'Bob', time: '5 min ago', msg: 'Can we add a hover state to the cards?', img: 'u=c2' },
                { name: 'Carol', time: '10 min ago', msg: 'Updated the token values in colour.css.', img: 'u=c3' },
              ].map(c => (
                <div key={c.name} className="flex gap-3">
                  <Avatar size="sm"><AvatarImage src={`https://i.pravatar.cc/100?${c.img}`} alt={c.name} /><AvatarFallback>{c.name[0]}</AvatarFallback></Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--foreground)] font-[500]">{c.name}</span>
                      <span className="text-[10px] text-[var(--muted-foreground-faint)]">{c.time}</span>
                    </div>
                    <p className="text-[var(--foreground)] text-[var(--muted-foreground)] mt-0.5">{c.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

      <PlaygroundSection
        title="Account dropdown trigger"
        description="Small avatar as a clickable trigger for a user menu."
        code={`<Avatar size="sm" className="cursor-pointer ring-2 ring-transparent hover:ring-[var(--accent)]/50 transition-all">
  <AvatarImage src="..." alt="You" />
  <AvatarFallback>ME</AvatarFallback>
</Avatar>`}
      >
        <div className="flex items-center gap-4">
          <Avatar size="sm" className="cursor-pointer ring-2 ring-transparent hover:ring-[var(--accent)]/50 transition-all">
            <AvatarImage src="https://i.pravatar.cc/100?u=me" alt="You" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          <Avatar className="cursor-pointer ring-2 ring-transparent hover:ring-[var(--accent)]/50 transition-all">
            <AvatarImage src="https://i.pravatar.cc/100?u=me2" alt="You" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
          <span className="text-[var(--muted-foreground)] text-[var(--muted-foreground-faint)]">← hover these</span>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
