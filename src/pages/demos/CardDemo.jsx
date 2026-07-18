import { Button } from 'invin-uix/ui/button';
import { Badge } from 'invin-uix/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'invin-uix/ui/card';

export default function CardDemo() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">Container with compound sub-components: Header, Title, Description, Content, Footer.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader><CardTitle>Basic Card</CardTitle><CardDescription>With all sections.</CardDescription></CardHeader>
          <CardContent><p className="text-sm">Card content goes here.</p></CardContent>
          <CardFooter className="gap-2"><Button size="sm">Save</Button><Button variant="outline" size="sm">Cancel</Button></CardFooter>
        </Card>
        <Card>
          <CardHeader><CardTitle>Stats</CardTitle><CardDescription>Monthly revenue</CardDescription></CardHeader>
          <CardContent><p className="text-3xl font-bold">$45,231</p><p className="text-sm text-muted-foreground mt-1">+20.1% from last month</p></CardContent>
          <CardFooter><Badge variant="success">Trending up</Badge></CardFooter>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader><CardTitle>Team</CardTitle><CardDescription>Project members</CardDescription></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Alice Johnson', 'Bob Smith', 'Carol Davis'].map((name, i) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar size="sm"><AvatarImage src={`https://i.pravatar.cc/100?u=team${i}`} /><AvatarFallback>{name[0]}</AvatarFallback></Avatar>
                    <div><p className="text-sm font-medium">{name}</p><p className="text-xs text-muted-foreground">{name.toLowerCase().replace(' ', '.')}@company.com</p></div>
                  </div>
                  <Badge variant="secondary" size="sm">{['Admin', 'Editor', 'Viewer'][i]}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
