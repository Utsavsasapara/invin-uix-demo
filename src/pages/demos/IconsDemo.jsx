import { Card, CardContent } from 'invin-uix/ui/card';
import { Separator } from 'invin-uix/ui/separator';
import { Label } from 'invin-uix/ui/label';
import {
  Search, Bell, Settings, Download, Trash2, Plus, Check, X,
  Mail, Star, Heart, Eye, Lock, Globe, Zap, Shield, Rocket,
  Database, Cloud, Coffee, Flame, Gift, Music, Phone, Wifi,
  Camera, Mic, ProductIcon
} from 'invin-uix/ui/icons';

export default function IconsDemo() {
  const icons = [
    { icon: Search, name: 'Search' }, { icon: Bell, name: 'Bell' },
    { icon: Settings, name: 'Settings' }, { icon: Download, name: 'Download' },
    { icon: Trash2, name: 'Trash2' }, { icon: Plus, name: 'Plus' },
    { icon: Check, name: 'Check' }, { icon: X, name: 'X' },
    { icon: Mail, name: 'Mail' }, { icon: Star, name: 'Star' },
    { icon: Heart, name: 'Heart' }, { icon: Eye, name: 'Eye' },
    { icon: Lock, name: 'Lock' }, { icon: Globe, name: 'Globe' },
    { icon: Zap, name: 'Zap' }, { icon: Shield, name: 'Shield' },
    { icon: Rocket, name: 'Rocket' }, { icon: Database, name: 'Database' },
    { icon: Cloud, name: 'Cloud' }, { icon: Coffee, name: 'Coffee' },
    { icon: Flame, name: 'Flame' }, { icon: Gift, name: 'Gift' },
    { icon: Music, name: 'Music' }, { icon: Phone, name: 'Phone' },
    { icon: Wifi, name: 'Wifi' }, { icon: Camera, name: 'Camera' },
    { icon: Mic, name: 'Mic' },
  ];

  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">1400+ Lucide icons + 26 product icons. All bundled.</p></div>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Lucide Icons</Label>
            <div className="flex flex-wrap gap-4">
              {icons.map(({ icon: Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-1 w-14">
                  <div className="flex items-center justify-center h-9 w-9 rounded-md border border-border"><Icon className="h-4 w-4" /></div>
                  <span className="text-[9px] text-muted-foreground truncate w-full text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Sizes</Label>
            <div className="flex items-end gap-6">
              {[3, 4, 5, 6, 8].map(s => (
                <div key={s} className="flex flex-col items-center gap-1">
                  <Zap className={`h-${s} w-${s}`} style={{ width: s * 4, height: s * 4 }} />
                  <span className="text-[9px] text-muted-foreground">{s * 4}px</span>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Colors</Label>
            <div className="flex items-center gap-4">
              <Heart className="h-6 w-6" style={{ color: 'var(--invin-color-danger)' }} />
              <Star className="h-6 w-6" style={{ color: 'var(--invin-color-warning)' }} />
              <Check className="h-6 w-6" style={{ color: 'var(--invin-color-success)' }} />
              <Shield className="h-6 w-6" style={{ color: 'var(--invin-color-primary)' }} />
            </div>
          </div>
          <Separator />
          <div>
            <Label className="mb-2 block text-xs text-muted-foreground uppercase tracking-wide">Product Icons</Label>
            <div className="flex flex-wrap gap-4">
              {['siem', 'ai-firewall', 'ndr', 'soar', 'asm', 'bas', 'nac', 'vm', 'tip', 'redops'].map(name => (
                <div key={name} className="flex flex-col items-center gap-1 w-14">
                  <div className="flex items-center justify-center h-9 w-9 rounded-md border border-border"><ProductIcon name={name} size="sm" /></div>
                  <span className="text-[9px] text-muted-foreground truncate w-full text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
