import { ComponentPage, PlaygroundSection, PropsTable, InteractiveDemo } from '../../components/PlaygroundSection.jsx';
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from 'invin-uix/ui/table';
import { Badge } from 'invin-uix/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from 'invin-uix/ui/avatar';
import { Button } from 'invin-uix/ui/button';
import { Checkbox } from 'invin-uix/ui/checkbox';
import { Separator } from 'invin-uix/ui/separator';
import { DotsThree } from 'invin-uix/ui/icons';

const invoices = [
  { id: 'INV001', customer: 'Alice Johnson', email: 'alice@mail.com', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { id: 'INV002', customer: 'Bob Smith', email: 'bob@mail.com', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { id: 'INV003', customer: 'Carol Davis', email: 'carol@mail.com', status: 'Paid', method: 'Bank Transfer', amount: '$350.00' },
  { id: 'INV004', customer: 'David Lee', email: 'david@mail.com', status: 'Failed', method: 'Credit Card', amount: '$450.00' },
  { id: 'INV005', customer: 'Emma Wilson', email: 'emma@mail.com', status: 'Paid', method: 'PayPal', amount: '$550.00' },
];

export default function TableDemo() {
  return (
    <ComponentPage
      name="Table"
      description="Semantic HTML table with styled sub-components. Supports hover rows, selected state, caption, footer, and full customization via className. Responsive overflow scroll built-in."
      importCode={`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from 'invin-uix/ui/table';
// Optional: TableFooter, TableCaption`}
    >
      {/* ─── Interactive Playground ─────────────────────────────── */}
      <InteractiveDemo
        title="Table Playground"
        description="Experiment with Table layouts."
        controls={[]}
      >
        {() => (
          <div className="w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.slice(0, 3).map(inv => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-[500]">{inv.id}</TableCell>
                    <TableCell><Badge variant={inv.status === 'Paid' ? 'success' : 'warning'} size="sm">{inv.status}</Badge></TableCell>
                    <TableCell className="text-right font-[500]">{inv.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </InteractiveDemo>
      <Separator variant="bold" />

      <PropsTable
        props={[
          { name: 'Table', type: 'wrapper', default: '—', description: 'Root <table> with overflow scroll container' },
          { name: 'TableHeader', type: '<thead>', default: '—', description: 'Header section with bottom border' },
          { name: 'TableBody', type: '<tbody>', default: '—', description: 'Body section' },
          { name: 'TableFooter', type: '<tfoot>', default: '—', description: 'Footer with subtle background' },
          { name: 'TableRow', type: '<tr>', default: '—', description: 'Row with hover highlight and border' },
          { name: 'TableHead', type: '<th>', default: '—', description: 'Header cell — dim colour, medium weight' },
          { name: 'TableCell', type: '<td>', default: '—', description: 'Data cell' },
          { name: 'TableCaption', type: '<caption>', default: '—', description: 'Accessible table caption (below)' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Basic ──────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic table"
        description="Header + body with status badges and right-aligned amounts."
        code={`<Table>
  <TableCaption>Recent invoices</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map(inv => (
      <TableRow key={inv.id}>
        <TableCell className="font-[500]">{inv.id}</TableCell>
        <TableCell><Badge variant="success">{inv.status}</Badge></TableCell>
        <TableCell>{inv.method}</TableCell>
        <TableCell className="text-right">{inv.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
      >
        <div className="w-full">
          <Table>
            <TableCaption>A list of recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map(inv => (
                <TableRow key={inv.id}>
                  <TableCell className="font-[500]">{inv.id}</TableCell>
                  <TableCell>
                    <Badge variant={inv.status === 'Paid' ? 'success' : inv.status === 'Pending' ? 'warning' : 'destructive'} size="sm">
                      {inv.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[var(--muted-foreground)]">{inv.method}</TableCell>
                  <TableCell className="text-right font-[500]">{inv.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </PlaygroundSection>

      {/* ─── With Footer ────────────────────────────────────────── */}
      <PlaygroundSection
        title="With footer"
        description="Footer row for totals or summary data."
        code={`<TableFooter>
  <TableRow>
    <TableCell colSpan={3}>Total</TableCell>
    <TableCell className="text-right">$1,750.00</TableCell>
  </TableRow>
</TableFooter>`}
      >
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 3).map(inv => (
                <TableRow key={inv.id}>
                  <TableCell className="font-[500]">{inv.id}</TableCell>
                  <TableCell><Badge variant="success" size="sm">Paid</Badge></TableCell>
                  <TableCell className="text-[var(--muted-foreground)]">{inv.method}</TableCell>
                  <TableCell className="text-right">{inv.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} className="font-[600]">Total</TableCell>
                <TableCell className="text-right font-[600]">$950.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use cases</h3>
        <p className="text-[var(--foreground)] text-[var(--muted-foreground)]">Common patterns.</p>
      </div>

      <PlaygroundSection
        title="User list with avatars"
        description="Table with avatar + name/email, role badge, and action button."
        code={`<TableRow>
  <TableCell>
    <div className="flex items-center gap-3">
      <Avatar size="sm"><AvatarImage src="..." /><AvatarFallback>AJ</AvatarFallback></Avatar>
      <div>
        <p className="font-medium">Alice Johnson</p>
        <p className="text-caption text-dim">alice@mail.com</p>
      </div>
    </div>
  </TableCell>
  <TableCell><Badge>Admin</Badge></TableCell>
  <TableCell><Button variant="ghost" size="icon-sm"><DotsThree /></Button></TableCell>
</TableRow>`}
      >
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv, i) => (
                <TableRow key={inv.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar size="sm"><AvatarImage src={`https://i.pravatar.cc/100?u=table${i}`} alt={inv.customer} /><AvatarFallback>{inv.customer[0]}</AvatarFallback></Avatar>
                      <div>
                        <p className="font-[500]">{inv.customer}</p>
                        <p className="text-[10px] text-[var(--muted-foreground)]">{inv.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="secondary" size="sm">{i === 0 ? 'Admin' : 'Member'}</Badge></TableCell>
                  <TableCell><Badge status={i < 3 ? 'success' : 'default'} text={i < 3 ? 'Active' : 'Inactive'} /></TableCell>
                  <TableCell><Button variant="ghost" size="icon-sm"><DotsThree style={{ width: 14, height: 14 }} /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Selectable rows"
        description="Checkbox in first column for multi-select. Use data-state='selected' for highlight."
        code={`<TableRow data-state="selected">
  <TableCell><Checkbox checked /></TableCell>
  <TableCell>Selected row</TableCell>
</TableRow>`}
      >
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10"><Checkbox /></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 4).map((inv, i) => (
                <TableRow key={inv.id} data-state={i === 1 ? 'selected' : undefined}>
                  <TableCell><Checkbox defaultChecked={i === 1} /></TableCell>
                  <TableCell className="font-[500]">{inv.customer}</TableCell>
                  <TableCell className="text-[var(--muted-foreground)]">{inv.email}</TableCell>
                  <TableCell><Badge variant={inv.status === 'Paid' ? 'success' : 'warning'} size="sm">{inv.status}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </PlaygroundSection>

    </ComponentPage>
  );
}
