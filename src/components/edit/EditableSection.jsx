/**
 * Wraps a portfolio section. When `editable`, overlays an "Edit" button at the
 * top-right and a subtle outline on hover. When not editable, renders children
 * untouched (public visitor view).
 */
export default function EditableSection({ editable, label, onEdit, children }) {
  if (!editable) return children;

  return (
    <div className="edit-wrap" style={{ position: "relative" }}>
      {children}
      <button
        type="button"
        className="edit-fab"
        onClick={onEdit}
        title={`Edit ${label}`}
      >
        <span style={{ fontSize: "0.9rem" }}>✎</span> Edit {label}
      </button>
    </div>
  );
}
