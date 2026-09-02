import { useState } from 'react';
import { ComponentPage, PlaygroundSection, PropsTable } from '../../components/PlaygroundSection.jsx';
import { FileUpload } from 'invin-uix/ui/file-upload';
import { Button } from 'invin-uix/ui/button';
import { Separator } from 'invin-uix/ui/separator';
import { UploadSimple, Image, FileText } from 'invin-uix/ui/icons';

export default function FileUploadDemo() {
  const [files1, setFiles1] = useState([]);
  const [files2, setFiles2] = useState([
    { id: '1', name: 'quarterly-report.pdf', size: 2456000, type: 'application/pdf', status: 'complete', progress: 100 },
    { id: '2', name: 'dashboard-screenshot.png', size: 845000, type: 'image/png', status: 'uploading', progress: 65 },
    { id: '3', name: 'error-log.csv', size: 12400, type: 'text/csv', status: 'error', error: 'UploadSimple failed — retry' },
  ]);

  return (
    <ComponentPage
      name="File UploadSimple"
      description="Drag & drop file upload zone with file list, progress indicators, and validation. Supports accept filters, size limits, and multiple files."
      importCode={`import { FileUpload } from 'invin-uix/ui/file-upload';`}
    >

      <PropsTable
        props={[
          { name: 'accept', type: 'string', default: '—', description: "Accepted types (e.g. 'image/*,.pdf')" },
          { name: 'multiple', type: 'boolean', default: 'true', description: 'Allow multiple files' },
          { name: 'maxSize', type: 'number', default: '—', description: 'Max file size in bytes' },
          { name: 'maxFiles', type: 'number', default: '—', description: 'Max number of files' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable upload' },
          { name: 'files', type: 'FileUploadFile[]', default: '—', description: 'Controlled file list' },
          { name: 'onChange', type: '(files) => void', default: '—', description: 'File list change callback' },
          { name: 'onDrop', type: '(files: File[]) => void', default: '—', description: 'Raw files dropped callback' },
          { name: 'onRemove', type: '(file) => void', default: '—', description: 'File removed callback' },
          { name: 'variant', type: "'default' | 'compact'", default: "'default'", description: 'Dropzone size' },
        ]}
      />

      <Separator />

      {/* ─── Basic ────────────────────────────────────────────── */}
      <PlaygroundSection
        title="Basic file upload"
        description="Click or drag files to the zone. Files appear in a list below with remove buttons."
      >
        <FileUpload
          files={files1}
          onChange={setFiles1}
          multiple
        />
      </PlaygroundSection>

      {/* ─── With constraints ─────────────────────────────────── */}
      <PlaygroundSection
        title="Image only — max 5MB, max 3 files"
        description="Validates file type, size, and count. Invalid files are silently rejected."
      >
        <FileUpload
          accept="image/*"
          maxSize={5 * 1024 * 1024}
          maxFiles={3}
        />
      </PlaygroundSection>

      {/* ─── File states (pre-populated) ──────────────────────── */}
      <PlaygroundSection
        title="File states"
        description="Shows complete, uploading (with progress bar), and error states."
      >
        <FileUpload
          files={files2}
          onChange={setFiles2}
        />
      </PlaygroundSection>

      {/* ─── Compact variant ──────────────────────────────────── */}
      <PlaygroundSection
        title="Compact variant"
        description="Smaller dropzone for inline use in forms or tight layouts."
      >
        <div className="max-w-sm">
          <FileUpload
            variant="compact"
            accept=".pdf,.doc,.docx"
            multiple={false}
          />
        </div>
      </PlaygroundSection>

      {/* ─── Custom dropzone content ──────────────────────────── */}
      <PlaygroundSection
        title="Custom dropzone content"
        description="Pass children to replace the default dropzone UI."
      >
        <FileUpload accept="image/*">
          <div className="flex flex-col items-center gap-3 py-4">
            <div className="h-14 w-14 rounded-full bg-[var(--accent-soft)] flex items-center justify-center">
              <Image style={{ width: 24, height: 24, color: 'var(--accent)' }} />
            </div>
            <div className="text-center">
              <p className="text-label font-[600]">UploadSimple cover image</p>
              <p className="text-caption text-[var(--muted-foreground)] mt-1">PNG, JPG or WebP. Recommended 1200×630px.</p>
            </div>
            <Button variant="outline" size="sm">Browse Files</Button>
          </div>
        </FileUpload>
      </PlaygroundSection>

      {/* ─── Single file (no multiple) ────────────────────────── */}
      <PlaygroundSection
        title="Single file"
        description="Only one file at a time — selecting a new file replaces the current one."
      >
        <div className="max-w-md">
          <FileUpload
            multiple={false}
            accept=".pdf"
            variant="compact"
          >
            <div className="flex items-center gap-3">
              <FileText style={{ width: 18, height: 18, color: 'var(--muted-foreground)' }} />
              <span className="text-label">Drop a PDF here or <span className="text-[var(--accent)] font-[500]">browse</span></span>
            </div>
          </FileUpload>
        </div>
      </PlaygroundSection>

      {/* ─── Disabled ─────────────────────────────────────────── */}
      <PlaygroundSection
        title="Disabled"
        description="UploadSimple is not interactive when disabled."
      >
        <FileUpload disabled />
      </PlaygroundSection>

    </ComponentPage>
  );
}
