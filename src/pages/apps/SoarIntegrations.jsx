import { useState } from 'react';
import { Button } from 'invin-uix/ui/button';
import { Badge } from 'invin-uix/ui/badge';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Tabs, TabsList, TabsTrigger } from 'invin-uix/ui/tabs';
import { Input } from 'invin-uix/ui/input';
import { Tooltip } from 'invin-uix/ui/tooltip';
import { Plus, MagnifyingGlass } from 'invin-uix/ui/icons';

// ─── Connected Integrations Data ─────────────────────────────────────────────

const connectedIntegrations = [
  { id: 'aws-iam', initials: 'AW', name: 'AWS IAM', subtitle: 'aws_iam', status: 'Active' },
  { id: 'aws-cis', initials: 'AW', name: 'AWS Cis', subtitle: 'aws_cis', status: 'Active' },
  { id: 'teams', initials: 'TE', name: 'Teams', subtitle: 'Microsoft Teams', status: 'Active' },
  { id: 'slack', initials: 'SL', name: 'Slack', subtitle: 'Slack', status: 'Active' },
  { id: 'new-relic', initials: 'NR', name: 'New Relic', subtitle: 'Newrelic', status: 'Active' },
  { id: 'mongodb', initials: 'MG', name: 'MongoDB', subtitle: 'MongoDB', status: 'Active' },
  { id: 'heroku', initials: 'HK', name: 'Heroku', subtitle: 'Heroku', status: 'Active' },
  { id: 'clickup', initials: 'CU', name: 'Clickup', subtitle: 'Clickup', status: 'Active' },
  { id: 'asana', initials: 'AS', name: 'Asana', subtitle: 'Asana', status: 'Active' },
  { id: 'email', initials: 'EM', name: 'EMAIL', subtitle: 'Email', status: 'Active' },
  { id: 'abuseipdb', initials: 'AB', name: 'AbuseIPDB', subtitle: 'AbuseIPDB v2', status: 'Active' },
  { id: 'jira', initials: 'JI', name: 'Jira', subtitle: 'Jira', status: 'Active' },
  { id: 'gitlab', initials: 'GL', name: 'GitLab', subtitle: 'Gitlab', status: 'Active' },
  { id: 'github', initials: 'GH', name: 'GitHub', subtitle: 'Github', status: 'Active' },
  { id: 'azure', initials: 'AZ', name: 'Azure', subtitle: 'Azure', status: 'Active' },
  { id: 'virustotal', initials: 'VT', name: 'VirusTotal', subtitle: 'VirusTotal', status: 'Active' },
];

// ─── MCP Servers Data ────────────────────────────────────────────────────────

const mcpServers = [
  { id: '21dev', initials: '21', name: '21st.dev Magic', description: 'Create crafted UI components inspired by the best design engineers.', category: 'Design', categoryColor: 'var(--accent)', requires: 'TFST_DEV_API_KEY' },
  { id: '2slides', initials: '2S', name: '2slides', description: 'Convert content into slidesPPT presentation or generate presentations with user intention.', category: 'Presentation', categoryColor: 'var(--degraded)', requires: 'SLIDES_API_KEY' },
  { id: 'actionkit', initials: 'AC', name: 'ActionKit by Paragon', description: 'Connect to 130+ SaaS integrations (Slack, Salesforce, Gmail, etc.) with Paragon ActionKit API.', category: 'Integrations', categoryColor: 'var(--ok)', requires: 'PARAGON_API_KEY' },
  { id: 'adfin', initials: 'AD', name: 'Adfin', description: 'All payments in one place, invoicing and accounting reconciliations with Adfin.', category: 'Finance', categoryColor: 'var(--ok)', requires: 'ADFIN_API_KEY' },
  { id: 'alby', initials: 'AL', name: 'Alby Bitcoin Payments', description: 'Connect bitcoin lightning wallet to send and receive instant payments globally.', category: 'Finance', categoryColor: 'var(--ok)', requires: 'ALBY_API_KEY' },
  { id: 'airwallex', initials: 'AR', name: 'Airwallex Developer', description: 'Gives coding agents typed access to the Airwallex API surface for payments and payouts.', category: 'Finance', categoryColor: 'var(--ok)', requires: 'AIRWALLEX_CLIENT_API_KEY' },
  { id: 'agentops', initials: 'AG', name: 'AgentOps', description: 'Observability and tracing for debugging AI agents with AgentOps API.', category: 'AI Tools', categoryColor: 'var(--accent)', requires: 'AGENTOPS_API_KEY' },
  { id: 'agentql', initials: 'AG', name: 'AgentQL', description: 'Enable AI agents to get structured data from unstructured web with AgentQL.', category: 'AI Tools', categoryColor: 'var(--accent)', requires: 'AGENTQL_API_KEY' },
  { id: 'agentrpc', initials: 'AG', name: 'AgentRPC', description: 'Connect to any function, any language, across network boundaries using AgentRPC.', category: 'AI Tools', categoryColor: 'var(--accent)', requires: 'AGENTRPC_API_KEY' },
  { id: 'agentest', initials: 'AG', name: 'Agentest', description: 'RAG for your knowledge base connected to Agentest.', category: 'AI Tools', categoryColor: 'var(--accent)', requires: 'AGENTEST_API_KEY' },
  { id: 'aiven', initials: 'AI', name: 'Aiven', description: 'Navigate Aiven products and interact with PostgreSQL, Apache Kafka, ClickHouse and OpenSearch services.', category: 'Data Platform', categoryColor: 'var(--chart-5, #8b5cf6)', requires: 'AIVEN_API_TOKEN' },
  { id: 'alation', initials: 'AI', name: 'Alation', description: 'Unlock the power of the enterprise Data Catalog by harnessing tools provided by Alation.', category: 'Data Platform', categoryColor: 'var(--chart-5, #8b5cf6)', requires: 'ALATION_API_KEY_ALATION_URL' },
];

// ─── Connected Card ──────────────────────────────────────────────────────────

function IntegrationCard({ integration }) {
  return (
    <Card hover className="text-center">
      <CardContent className="flex flex-col items-center gap-2 py-5">
        <div className="h-12 w-12 rounded-lg bg-[var(--secondary)] flex items-center justify-center text-[14px] font-[700] text-[var(--foreground)]">
          {integration.initials}
        </div>
        <div>
          <p className="text-[13px] font-[600] text-[var(--foreground)]">{integration.name}</p>
          <p className="text-[11px] text-[var(--muted-foreground-faint)]">{integration.subtitle}</p>
        </div>
        <Badge status="success" text={integration.status} />
      </CardContent>
    </Card>
  );
}

// ─── MCP Server Card ─────────────────────────────────────────────────────────

function McpServerCard({ server }) {
  return (
    <Card hover className="h-full">
      <CardContent className="py-4 space-y-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[var(--secondary)] flex items-center justify-center text-[12px] font-[700] text-[var(--foreground)] shrink-0">
              {server.initials}
            </div>
            <p className="text-[14px] font-[600] text-[var(--foreground)]">{server.name}</p>
          </div>
          <Badge
            variant="outline"
            size="sm"
            className="shrink-0"
            style={{ borderColor: server.categoryColor, color: server.categoryColor }}
          >
            {server.category}
          </Badge>
        </div>
        <p className="text-[12px] text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
          {server.description}
        </p>
        <p className="text-[10px] font-mono text-[var(--muted-foreground-faint)]">
          Requires: {server.requires}
        </p>
      </CardContent>
    </Card>
  );
}

// ─── Integrations Page ───────────────────────────────────────────────────────

export default function SoarIntegrations() {
  const [activeTab, setActiveTab] = useState('connected');
  const [search, setSearch] = useState('');

  const filteredConnected = connectedIntegrations.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredMcp = mcpServers.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[var(--foreground)] font-[700] tracking-[-0.02em]">
            {activeTab === 'connected' ? 'Integrations' : 'MCP Server Integrations'}
          </h1>
          <p className="text-[var(--foreground)] text-[var(--muted-foreground)] mt-1">
            {activeTab === 'connected'
              ? 'Manage your integrations with external services'
              : 'Connect to Model Context Protocol servers for unlimited integration possibilities'}
          </p>
        </div>
        <Button>
          <Plus style={{ width: 13, height: 13 }} />
          {activeTab === 'connected' ? 'Create Integration' : 'Add MCP Server'}
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList variant="pill">
          <TabsTrigger value="connected" variant="pill">
            Connected <Badge variant="secondary" size="sm" className="ml-1.5">{connectedIntegrations.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="mcp" variant="pill">
            MCP Servers <Badge variant="secondary" size="sm" className="ml-1.5">{mcpServers.length}</Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* MagnifyingGlass */}
      <div className="relative max-w-[400px]">
        <MagnifyingGlass style={{ width: 14, height: 14, position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground-faint)', pointerEvents: 'none' }} />
        <Input
          placeholder={activeTab === 'connected' ? 'MagnifyingGlass Integrations...' : 'MagnifyingGlass MCP Servers...'}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Content */}
      {activeTab === 'connected' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredConnected.map(i => (
            <IntegrationCard key={i.id} integration={i} />
          ))}
        </div>
      ) : (
        <>
          <p className="text-[var(--foreground)] font-[600]">Popular MCP Servers</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredMcp.map(s => (
              <McpServerCard key={s.id} server={s} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
