import { useState, useMemo } from 'react';
import { Card, CardContent } from 'invin-uix/ui/card';
import { Button } from 'invin-uix/ui/button';
import { Badge } from 'invin-uix/ui/badge';
import { Input } from 'invin-uix/ui/input';
import { Separator } from 'invin-uix/ui/separator';
import { 
  MagnifyingGlass, 
  Funnel, 
  GridFour, 
  List,
  ArrowRight,
  Star,
  Package,
  Lightning,
  Eye
} from 'invin-uix/ui/icons';
import { Link } from 'react-router-dom';

/**
 * ComponentShowcase — Interactive gallery of all components with filtering and search
 */
export function ComponentShowcase({ components, title = "Components" }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(['all']);
    components.forEach(c => {
      if (c.category) cats.add(c.category);
    });
    return Array.from(cats);
  }, [components]);

  // Filter components
  const filteredComponents = useMemo(() => {
    return components.filter(c => {
      const matchesSearch = !search || 
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.description?.toLowerCase().includes(search.toLowerCase()) ||
        c.tags?.some(t => t.toLowerCase().includes(search.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [components, search, selectedCategory]);

  // Group by category for list view
  const groupedComponents = useMemo(() => {
    if (selectedCategory !== 'all') {
      return { [selectedCategory]: filteredComponents };
    }
    
    const groups = {};
    filteredComponents.forEach(c => {
      const cat = c.category || 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(c);
    });
    return groups;
  }, [filteredComponents, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-[var(--foreground)]">{title}</h2>
          <p className="text-caption text-[var(--muted-foreground)] mt-1">
            {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 p-1 rounded-[var(--radius-md)] bg-[var(--secondary)]">
          <Button
            variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
            size="icon-sm"
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
            className={viewMode === 'grid' ? 'bg-[var(--background)]' : ''}
          >
            <GridFour style={{ width: 14, height: 14 }} />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'secondary' : 'ghost'}
            size="icon-sm"
            onClick={() => setViewMode('list')}
            aria-label="List view"
            className={viewMode === 'list' ? 'bg-[var(--background)]' : ''}
          >
            <List style={{ width: 14, height: 14 }} />
          </Button>
        </div>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <MagnifyingGlass 
            style={{ 
              width: 16, 
              height: 16, 
              position: 'absolute', 
              left: 12, 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: 'var(--muted-foreground)'
            }} 
          />
          <Input
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'primary' : 'outline'}
              size="sm"
              shape="pill"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? 'All' : cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filteredComponents.length === 0 ? (
        <EmptyState search={search} />
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredComponents.map(component => (
            <ComponentCard key={component.key} component={component} />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedComponents).map(([category, comps]) => (
            <div key={category} className="space-y-3">
              <div className="flex items-center gap-2">
                <h3 className="text-label font-semibold text-[var(--foreground)]">{category}</h3>
                <Badge variant="secondary" size="sm">{comps.length}</Badge>
              </div>
              <div className="space-y-2">
                {comps.map(component => (
                  <ComponentListItem key={component.key} component={component} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * ComponentCard — Grid view card for a single component
 */
function ComponentCard({ component }) {
  const { name, description, path, preview, tags, isNew, isPopular, category } = component;

  return (
    <Link to={path} className="block no-underline group">
      <Card hover className="h-full overflow-hidden transition-all duration-200 group-hover:border-[var(--accent)]">
        {/* Preview area */}
        <div className="h-32 bg-[var(--secondary)]/30 border-b border-[var(--border)] flex items-center justify-center p-4 overflow-hidden">
          {preview ? (
            <div className="transform scale-75 origin-center">
              {preview}
            </div>
          ) : (
            <Package style={{ width: 32, height: 32, color: 'var(--muted-foreground-faint)' }} />
          )}
        </div>

        <CardContent className="pt-3 pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-body font-semibold text-[var(--foreground)] truncate">
                  {name}
                </p>
                {isNew && (
                  <Badge variant="info" size="sm" className="text-[9px]">New</Badge>
                )}
                {isPopular && (
                  <Star style={{ width: 12, height: 12, color: 'var(--warning)' }} />
                )}
              </div>
              {description && (
                <p className="text-[11px] text-[var(--muted-foreground)] mt-1 line-clamp-2">
                  {description}
                </p>
              )}
            </div>
            <ArrowRight 
              style={{ 
                width: 14, 
                height: 14, 
                color: 'var(--muted-foreground)',
                flexShrink: 0,
                marginTop: 2
              }} 
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {tags.slice(0, 3).map(tag => (
                <span 
                  key={tag}
                  className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--secondary)] text-[var(--muted-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}

/**
 * ComponentListItem — List view item for a single component
 */
function ComponentListItem({ component }) {
  const { name, description, path, isNew, isPopular, tags } = component;

  return (
    <Link to={path} className="block no-underline group">
      <div className="flex items-center gap-4 p-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors">
        <div className="h-10 w-10 rounded-[var(--radius-md)] bg-[var(--secondary)] flex items-center justify-center shrink-0">
          <Package style={{ width: 18, height: 18, color: 'var(--muted-foreground)' }} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-body font-semibold text-[var(--foreground)]">{name}</p>
            {isNew && <Badge variant="info" size="sm" className="text-[9px]">New</Badge>}
            {isPopular && <Star style={{ width: 12, height: 12, color: 'var(--warning)' }} />}
          </div>
          {description && (
            <p className="text-caption text-[var(--muted-foreground)] truncate">{description}</p>
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className="hidden sm:flex flex-wrap gap-1">
            {tags.slice(0, 2).map(tag => (
              <Badge key={tag} variant="secondary" size="sm" className="text-[9px]">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <ArrowRight 
          style={{ width: 16, height: 16, color: 'var(--muted-foreground)' }}
          className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
        />
      </div>
    </Link>
  );
}

/**
 * EmptyState — Shown when no components match the filter
 */
function EmptyState({ search }) {
  return (
    <div className="text-center py-12">
      <div className="h-16 w-16 mx-auto rounded-full bg-[var(--secondary)] flex items-center justify-center mb-4">
        <MagnifyingGlass style={{ width: 24, height: 24, color: 'var(--muted-foreground)' }} />
      </div>
      <p className="text-body font-semibold text-[var(--foreground)]">No components found</p>
      <p className="text-caption text-[var(--muted-foreground)] mt-1">
        {search ? `No results for "${search}"` : 'Try adjusting your filters'}
      </p>
    </div>
  );
}

/**
 * FeaturedComponents — Horizontal scrolling featured components section
 */
export function FeaturedComponents({ components, title = "Featured" }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightning style={{ width: 18, height: 18, color: 'var(--accent)' }} />
          <h3 className="text-label font-semibold text-[var(--foreground)]">{title}</h3>
        </div>
        <Link to="/components" className="text-caption text-[var(--accent)] hover:underline">
          View all
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        {components.map(component => (
          <FeaturedCard key={component.key} component={component} />
        ))}
      </div>
    </div>
  );
}

/**
 * FeaturedCard — Larger card for featured components
 */
function FeaturedCard({ component }) {
  const { name, description, path, preview } = component;

  return (
    <Link to={path} className="block no-underline group shrink-0 w-64">
      <Card hover className="h-full overflow-hidden">
        <div className="h-36 bg-gradient-to-br from-[var(--accent-soft)] to-[var(--secondary)] flex items-center justify-center p-4">
          {preview ? (
            <div className="transform scale-90">
              {preview}
            </div>
          ) : (
            <Package style={{ width: 40, height: 40, color: 'var(--accent)' }} />
          )}
        </div>
        <CardContent className="pt-3 pb-3">
          <p className="text-body font-semibold text-[var(--foreground)]">{name}</p>
          {description && (
            <p className="text-[11px] text-[var(--muted-foreground)] mt-1 line-clamp-2">
              {description}
            </p>
          )}
          <p className="text-caption text-[var(--accent)] mt-2 font-medium group-hover:underline">
            View component →
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

/**
 * QuickActions — Action buttons for common tasks
 */
export function QuickActions({ actions }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {actions.map((action, i) => (
        <Link key={i} to={action.path} className="no-underline">
          <Card hover className="h-full">
            <CardContent className="py-4 text-center">
              <div 
                className="h-10 w-10 mx-auto rounded-full flex items-center justify-center mb-2"
                style={{ background: action.color || 'var(--accent-soft)' }}
              >
                {action.icon && <action.icon style={{ width: 18, height: 18, color: action.iconColor || 'var(--accent)' }} />}
              </div>
              <p className="text-caption font-semibold text-[var(--foreground)]">{action.label}</p>
              {action.description && (
                <p className="text-[10px] text-[var(--muted-foreground)] mt-0.5">{action.description}</p>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

/**
 * ComponentStats — Display library statistics
 */
export function ComponentStats({ stats }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div 
          key={i}
          className="p-4 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)]"
        >
          <p className="text-2xl font-bold text-[var(--foreground)]">{stat.value}</p>
          <p className="text-caption text-[var(--muted-foreground)]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * LivePlayground — Full-featured interactive playground
 */
export function LivePlayground({ 
  component: Component,
  defaultProps = {},
  propControls = [],
  code,
  title
}) {
  const [props, setProps] = useState(defaultProps);
  const [showCode, setShowCode] = useState(false);

  const updateProp = (name, value) => {
    setProps(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="overflow-hidden">
      {title && (
        <div className="px-4 py-3 border-b border-[var(--border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye style={{ width: 16, height: 16, color: 'var(--accent)' }} />
            <span className="text-label font-semibold text-[var(--foreground)]">{title}</span>
          </div>
          <Badge variant="info" size="sm">Interactive</Badge>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Preview */}
        <div className="lg:col-span-3 p-8 flex items-center justify-center min-h-[300px] bg-[var(--background)] border-b lg:border-b-0 lg:border-r border-[var(--border)]">
          <Component {...props} />
        </div>

        {/* Controls */}
        <div className="p-4 space-y-4 bg-[var(--card)]">
          <p className="text-[11px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wide">
            Props
          </p>
          
          {propControls.map(control => (
            <div key={control.name} className="space-y-1.5">
              <label className="text-caption font-medium text-[var(--foreground)] flex items-center justify-between">
                <span>{control.label || control.name}</span>
                {control.type === 'boolean' && (
                  <span className="text-[10px] text-[var(--muted-foreground)]">
                    {props[control.name] ? 'true' : 'false'}
                  </span>
                )}
              </label>
              
              {control.type === 'select' && (
                <select
                  value={props[control.name]}
                  onChange={(e) => updateProp(control.name, e.target.value)}
                  className="w-full h-8 px-2 text-caption rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]"
                >
                  {control.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              )}

              {control.type === 'boolean' && (
                <button
                  type="button"
                  role="switch"
                  aria-checked={props[control.name]}
                  onClick={() => updateProp(control.name, !props[control.name])}
                  className={`
                    relative w-10 h-5 rounded-full transition-colors
                    ${props[control.name] ? 'bg-[var(--accent)]' : 'bg-[var(--secondary)]'}
                  `}
                >
                  <span
                    className={`
                      absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform
                      ${props[control.name] ? 'translate-x-5' : 'translate-x-0'}
                    `}
                  />
                </button>
              )}

              {control.type === 'text' && (
                <input
                  type="text"
                  value={props[control.name]}
                  onChange={(e) => updateProp(control.name, e.target.value)}
                  placeholder={control.placeholder}
                  className="w-full h-8 px-2 text-caption rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]"
                />
              )}

              {control.type === 'color' && (
                <div className="flex gap-2">
                  {control.options.map(color => (
                    <button
                      key={color.value}
                      onClick={() => updateProp(control.name, color.value)}
                      className={`
                        h-6 w-6 rounded-full border-2 transition-transform
                        ${props[control.name] === color.value ? 'border-[var(--accent)] scale-110' : 'border-transparent'}
                      `}
                      style={{ background: color.color }}
                      title={color.label}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}

          {code && (
            <>
              <Separator />
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? 'Hide Code' : 'View Code'}
              </Button>
            </>
          )}
        </div>
      </div>

      {showCode && code && (
        <div className="border-t border-[var(--border)] bg-[var(--background)]">
          <pre className="p-4 text-[13px] font-mono text-[var(--foreground)] overflow-x-auto">
            <code>{typeof code === 'function' ? code(props) : code}</code>
          </pre>
        </div>
      )}
    </Card>
  );
}

export { ComponentCard, ComponentListItem };
