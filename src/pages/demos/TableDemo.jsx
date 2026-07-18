import { ComponentPage, PlaygroundSection } from '../../components/PlaygroundSection.jsx';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from 'invin-uix/ui/table';
import { Badge } from 'invin-uix/ui/badge';

const invoices = [
  { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { id: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { id: 'INV003', status: 'Paid', method: 'Bank Transfer', amount: '$350.00' },
  { id: 'INV004', status: 'Failed', method: 'Credit Card', amount: '$450.00' },
  { id: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
];

export default function TableDemo() {
  return (
    <ComponentPage
      name="Table"
      description="A semantic HTML table with styled header, body, rows, and cells. Supports hover states and selection indicators."
      importCode={`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from 'invin-uix/ui/table';`}
    >
      <PlaygroundSection
        title="Basic Table"
        description="Standard data table with header and body."
        code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
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
                  <TableCell className="font-medium">{inv.id}</TableCell>
                  <TableCell>
                    <Badge
                      variant={inv.status === 'Paid' ? 'success' : inv.status === 'Pending' ? 'warning' : 'destructive'}
                      size="sm"
                    >
                      {inv.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{inv.method}</TableCell>
                  <TableCell className="text-right">{inv.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </PlaygroundSection>
    </ComponentPage>
  );
}
