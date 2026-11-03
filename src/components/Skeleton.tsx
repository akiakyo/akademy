/** A shimmering placeholder line or block. */
export function Bone({ w = "100%", h = 14, dark = false }: { w?: number | string; h?: number; dark?: boolean }) {
  return <span className={`bone${dark ? " dark" : ""}`} style={{ width: w, height: h }} aria-hidden="true" />;
}

export function Loading({ label }: { label: string }) {
  return <span className="sr-only" role="status">{label}</span>;
}

export function PlaygroundSkeleton() {
  return (
    <div className="pg" aria-hidden="true">
      <div className="pg-bar"><Bone w={150} h={36} /><Bone w={90} /></div>
      <div className="pg-panes">
        <div className="editor editor-loading"><EditorLines /></div>
        <div className="pg-result"><Bone w={60} h={11} /><Bone h={180} /></div>
      </div>
    </div>
  );
}

export function EditorLines() {
  return (
    <div className="editor-lines">
      {[44, 68, 30, 82, 54, 38, 62].map((w, i) => <Bone key={i} w={`${w}%`} dark />)}
    </div>
  );
}
