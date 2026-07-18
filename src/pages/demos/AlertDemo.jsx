import { Alert, AlertTitle, AlertDescription } from 'invin-uix/ui/alert';

export default function AlertDemo() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">Status messages with semantic variants.</p></div>
      <div className="space-y-3">
        <Alert><AlertTitle>Default</AlertTitle><AlertDescription>Neutral informational alert.</AlertDescription></Alert>
        <Alert variant="info"><AlertTitle>Info</AlertTitle><AlertDescription>Your session will expire in 5 minutes.</AlertDescription></Alert>
        <Alert variant="success"><AlertTitle>Success</AlertTitle><AlertDescription>Profile updated successfully.</AlertDescription></Alert>
        <Alert variant="warning"><AlertTitle>Warning</AlertTitle><AlertDescription>Storage is 90% full.</AlertDescription></Alert>
        <Alert variant="destructive"><AlertTitle>Error</AlertTitle><AlertDescription>Failed to save changes.</AlertDescription></Alert>
      </div>
    </div>
  );
}
