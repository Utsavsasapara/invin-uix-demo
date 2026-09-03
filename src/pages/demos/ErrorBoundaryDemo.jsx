import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { ErrorBoundary, useErrorBoundary } from 'invin-uix/ui/error-boundary';
import { Button } from 'invin-uix/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from 'invin-uix/ui/card';
import { Alert, AlertTitle, AlertDescription } from 'invin-uix/ui/alert';
import { Separator } from 'invin-uix/ui/separator';
import { Badge } from 'invin-uix/ui/badge';

// Component that throws an error when triggered
function BuggyCounter({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('Simulated crash! This is intentional for demo purposes.');
  }
  return (
    <div className="p-4 rounded-lg bg-[var(--success)]/10 border border-[var(--success)]/20">
      <p className="text-[var(--success)] font-medium">Component is working correctly</p>
    </div>
  );
}

// Component that throws async error
function AsyncErrorComponent() {
  const { showBoundary } = useErrorBoundary();
  const [loading, setLoading] = useState(false);

  const simulateAsyncError = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    // Trigger error boundary programmatically
    showBoundary(new Error('Async operation failed! Network timeout.'));
  };

  return (
    <div className="space-y-3">
      <p className="text-[var(--muted-foreground)]">
        Click the button to simulate an async error (like a failed API call)
      </p>
      <Button onClick={simulateAsyncError} loading={loading} variant="destructive">
        Simulate Async Error
      </Button>
    </div>
  );
}

export default function ErrorBoundaryDemo() {
  const [triggerError, setTriggerError] = useState(false);
  const [key, setKey] = useState(0);
  const [asyncKey, setAsyncKey] = useState(0);

  return (
    <ComponentPage
      name="ErrorBoundary"
      description="Catches JavaScript errors in child components and displays a fallback UI. Essential for production React apps to prevent full-page crashes. Includes useErrorBoundary hook for async errors and withErrorBoundary HOC."
      importCode={`import { ErrorBoundary, useErrorBoundary, withErrorBoundary } from 'invin-uix/ui/error-boundary';`}
    >

      {/* ─── Props Table ────────────────────────────────────────── */}
      <PropsTable
        props={[
          { name: 'children', type: 'ReactNode', default: '—', description: 'Content to render' },
          { name: 'fallback', type: 'ReactNode | (props) => ReactNode', default: 'Default UI', description: 'Fallback UI when error occurs' },
          { name: 'onError', type: '(error, errorInfo) => void', default: '—', description: 'Callback when error is caught' },
          { name: 'resetKeys', type: 'unknown[]', default: '—', description: 'Reset boundary when these values change' },
          { name: 'onReset', type: '() => void', default: '—', description: 'Callback when boundary resets' },
          { name: 'className', type: 'string', default: '—', description: 'Class for fallback container' },
        ]}
      />

      <Separator variant="bold" />

      {/* ─── Basic Usage ────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic Usage"
        description="Wrap components that might throw errors. Click 'Trigger Error' to see the fallback UI, then 'Try Again' to reset."
        code={`<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`}
      >
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button 
              variant={triggerError ? 'secondary' : 'destructive'} 
              onClick={() => setTriggerError(true)}
              disabled={triggerError}
            >
              Trigger Error
            </Button>
            <Button 
              variant="outline" 
              onClick={() => { setTriggerError(false); setKey(k => k + 1); }}
            >
              Reset Demo
            </Button>
          </div>
          
          <ErrorBoundary key={key}>
            <BuggyCounter shouldThrow={triggerError} />
          </ErrorBoundary>
        </div>
      </PlaygroundSection>

      {/* ─── Custom Fallback ────────────────────────────────────── */}
      <PlaygroundSection
        title="Custom Fallback"
        description="Provide a custom fallback UI as a function to access error details and reset function."
        code={`<ErrorBoundary
  fallback={({ error, resetErrorBoundary }) => (
    <Alert variant="destructive">
      <AlertTitle>Something went wrong</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </Alert>
  )}
>
  <MyComponent />
</ErrorBoundary>`}
      >
        <ErrorBoundary
          key={`custom-${key}`}
          fallback={({ error, resetErrorBoundary }) => (
            <Alert variant="destructive">
              <AlertTitle>Custom Error Handler</AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-3">{error.message}</p>
                <Button size="sm" onClick={() => { resetErrorBoundary(); setTriggerError(false); }}>
                  Recover
                </Button>
              </AlertDescription>
            </Alert>
          )}
        >
          <BuggyCounter shouldThrow={triggerError} />
        </ErrorBoundary>
      </PlaygroundSection>

      {/* ─── useErrorBoundary Hook ──────────────────────────────── */}
      <PlaygroundSection
        title="useErrorBoundary Hook"
        description="Handle async errors that React can't catch automatically. The hook provides showBoundary() to trigger the nearest error boundary."
        code={`function AsyncComponent() {
  const { showBoundary } = useErrorBoundary();
  
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) throw new Error('Failed');
    } catch (error) {
      showBoundary(error); // Triggers nearest ErrorBoundary
    }
  };
  
  return <Button onClick={fetchData}>Fetch Data</Button>;
}`}
      >
        <div className="space-y-4">
          <Button variant="outline" size="sm" onClick={() => setAsyncKey(k => k + 1)}>
            Reset Async Demo
          </Button>
          <ErrorBoundary
            key={asyncKey}
            fallback={({ error, resetErrorBoundary }) => (
              <Card className="border-[var(--error)]/30 bg-[var(--error)]/5">
                <CardContent className="py-4">
                  <p className="text-[var(--error)] font-medium mb-2">Async Error Caught!</p>
                  <p className="text-[var(--muted-foreground)] text-sm mb-3">{error.message}</p>
                  <Button size="sm" onClick={resetErrorBoundary}>Retry</Button>
                </CardContent>
              </Card>
            )}
          >
            <AsyncErrorComponent />
          </ErrorBoundary>
        </div>
      </PlaygroundSection>

      <Separator variant="bold" />

      {/* ─── Use Cases ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-[var(--foreground)] font-[700]">Use Cases</h3>
        <p className="text-[var(--muted-foreground)]">Common patterns in production applications.</p>
      </div>

      <PlaygroundSection
        title="Dashboard Widgets"
        description="Isolate errors in individual widgets so one failing component doesn't crash the entire dashboard."
        code={`<div className="grid grid-cols-3 gap-4">
  <ErrorBoundary fallback={<WidgetError />}>
    <MetricsWidget />
  </ErrorBoundary>
  <ErrorBoundary fallback={<WidgetError />}>
    <AlertsWidget />
  </ErrorBoundary>
  <ErrorBoundary fallback={<WidgetError />}>
    <ChartWidget />
  </ErrorBoundary>
</div>`}
      >
        <div className="grid grid-cols-3 gap-4">
          {['Metrics', 'Alerts', 'Activity'].map((name, i) => (
            <ErrorBoundary
              key={name}
              fallback={
                <Card className="border-[var(--error)]/20 bg-[var(--error)]/5 h-full">
                  <CardContent className="py-6 text-center">
                    <p className="text-sm text-[var(--muted-foreground)]">Widget failed</p>
                  </CardContent>
                </Card>
              }
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[var(--accent)]">
                    {i === 0 ? '1,234' : i === 1 ? '12' : '89%'}
                  </div>
                  <Badge variant="secondary" size="sm" className="mt-2">
                    {i === 0 ? '+5.2%' : i === 1 ? 'Critical' : 'Healthy'}
                  </Badge>
                </CardContent>
              </Card>
            </ErrorBoundary>
          ))}
        </div>
      </PlaygroundSection>

      <PlaygroundSection
        title="Route-Level Boundary"
        description="Reset error boundary when route changes using resetKeys prop."
        code={`function UserProfile({ userId }) {
  return (
    <ErrorBoundary 
      resetKeys={[userId]} 
      onReset={() => refetchUser(userId)}
    >
      <UserData userId={userId} />
    </ErrorBoundary>
  );
}`}
      >
        <Card>
          <CardContent className="py-4">
            <p className="text-[var(--muted-foreground)] text-sm">
              When <code className="text-[var(--accent)]">resetKeys</code> change (e.g., user navigates to a different profile), 
              the error boundary automatically resets and attempts to re-render the children.
            </p>
            <div className="mt-3 flex gap-2">
              <Badge variant="outline">resetKeys={`[userId]`}</Badge>
              <Badge variant="outline">onReset={`() => refetch()`}</Badge>
            </div>
          </CardContent>
        </Card>
      </PlaygroundSection>

    </ComponentPage>
  );
}
