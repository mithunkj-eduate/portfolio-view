import { useState } from "react";

const LABELS = {
  hero: "Hero",
  skills: "Skills",
  projects: "Projects",
  about: "About",
  contact: "Contact",
  footer: "Footer",
};

// ── tiny field helpers ──────────────────────────────────────────────
function Field({ label, value, onChange, textarea }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="pe-field">
      <label>{label}</label>
      <Tag
        className={textarea ? "pe-textarea" : "pe-input"}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

// Editor for an array of strings (e.g. skill items, tech tags, about paragraphs)
function StringArray({ label, items, onChange, textarea }) {
  const list = items ?? [];
  const set = (i, v) => onChange(list.map((it, idx) => (idx === i ? v : it)));
  const add = () => onChange([...list, ""]);
  const remove = (i) => onChange(list.filter((_, idx) => idx !== i));
  return (
    <div className="pe-group">
      <div className="pe-group-title">{label}</div>
      {list.map((it, i) => (
        <div className="pe-row" key={i}>
          {textarea ? (
            <textarea
              className="pe-textarea"
              value={it}
              onChange={(e) => set(i, e.target.value)}
            />
          ) : (
            <input
              className="pe-input"
              value={it}
              onChange={(e) => set(i, e.target.value)}
            />
          )}
          <button className="pe-btn-del" onClick={() => remove(i)} title="Remove">
            ✕
          </button>
        </div>
      ))}
      <button className="pe-btn-add" onClick={add}>
        + Add
      </button>
    </div>
  );
}

// Editor for an array of objects with known string fields
function ObjectArray({ label, items, fields, onChange, makeEmpty }) {
  const list = items ?? [];
  const setField = (i, key, v) =>
    onChange(list.map((it, idx) => (idx === i ? { ...it, [key]: v } : it)));
  const setRaw = (i, next) =>
    onChange(list.map((it, idx) => (idx === i ? next : it)));
  const add = () => onChange([...list, makeEmpty()]);
  const remove = (i) => onChange(list.filter((_, idx) => idx !== i));

  return (
    <div className="pe-group">
      <div className="pe-group-title">{label}</div>
      {list.map((item, i) => (
        <div className="pe-card" key={i}>
          {fields.map((f) =>
            f.type === "stringArray" ? (
              <StringArray
                key={f.key}
                label={f.label}
                items={item[f.key]}
                onChange={(v) => setField(i, f.key, v)}
              />
            ) : (
              <Field
                key={f.key}
                label={f.label}
                value={item[f.key]}
                textarea={f.type === "textarea"}
                onChange={(v) => setField(i, f.key, v)}
              />
            ),
          )}
          <button className="pe-btn-del" onClick={() => remove(i)}>
            ✕ Remove
          </button>
        </div>
      ))}
      <button className="pe-btn-add" onClick={add}>
        + Add {label}
      </button>
    </div>
  );
}

// ── main modal ──────────────────────────────────────────────────────
export default function SectionEditModal({
  sectionKey,
  portfolio,
  onSave,
  onClose,
  saving,
}) {
  // Draft copy of the whole portfolio; we only edit `sectionKey`.
  const [draft, setDraft] = useState(() =>
    typeof structuredClone === "function"
      ? structuredClone(portfolio)
      : JSON.parse(JSON.stringify(portfolio)),
  );

  const section = draft[sectionKey] ?? {};
  const setSection = (next) => setDraft((d) => ({ ...d, [sectionKey]: next }));
  const patch = (key, v) => setSection({ ...section, [key]: v });

  return (
    <div className="pe-overlay" onClick={onClose}>
      <div className="pe-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pe-head">
          <h3>Edit {LABELS[sectionKey] ?? sectionKey}</h3>
          <button className="pe-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="pe-body">
          {sectionKey === "hero" && (
            <>
              <Field label="Name" value={section.name} onChange={(v) => patch("name", v)} />
              <Field label="Highlight" value={section.highlight} onChange={(v) => patch("highlight", v)} />
              <Field label="Subtitle" value={section.subtitle} onChange={(v) => patch("subtitle", v)} />
              <Field label="Description" textarea value={section.desc} onChange={(v) => patch("desc", v)} />
              <Field label="Image URL" value={section.image} onChange={(v) => patch("image", v)} />
              <ObjectArray
                label="Stats"
                items={section.stats}
                fields={[
                  { key: "value", label: "Value" },
                  { key: "label", label: "Label" },
                ]}
                makeEmpty={() => ({ value: "", label: "" })}
                onChange={(v) => patch("stats", v)}
              />
            </>
          )}

          {sectionKey === "skills" && (
            <ObjectArray
              label="Skill Group"
              items={draft.skills}
              fields={[
                { key: "title", label: "Group Title" },
                { key: "items", label: "Items", type: "stringArray" },
              ]}
              makeEmpty={() => ({ title: "", items: [] })}
              onChange={(v) => setDraft((d) => ({ ...d, skills: v }))}
            />
          )}

          {sectionKey === "projects" && (
            <ObjectArray
              label="Project"
              items={draft.projects}
              fields={[
                { key: "title", label: "Title" },
                { key: "desc", label: "Description", type: "textarea" },
                { key: "link", label: "Link" },
                { key: "image", label: "Image URL" },
                { key: "tech", label: "Tech", type: "stringArray" },
              ]}
              makeEmpty={() => ({ title: "", desc: "", link: "", image: "", tech: [] })}
              onChange={(v) => setDraft((d) => ({ ...d, projects: v }))}
            />
          )}

          {sectionKey === "about" && (
            <>
              <StringArray
                label="Paragraphs"
                items={section.desc}
                textarea
                onChange={(v) => patch("desc", v)}
              />
              <ObjectArray
                label="Info"
                items={section.info}
                fields={[
                  { key: "label", label: "Label" },
                  { key: "value", label: "Value" },
                ]}
                makeEmpty={() => ({ label: "", value: "" })}
                onChange={(v) => patch("info", v)}
              />
              <ObjectArray
                label="Experience"
                items={section.experience}
                fields={[
                  { key: "role", label: "Role" },
                  { key: "company", label: "Company" },
                  { key: "period", label: "Period" },
                  { key: "tech", label: "Tech", type: "stringArray" },
                ]}
                makeEmpty={() => ({ role: "", company: "", period: "", tech: [] })}
                onChange={(v) => patch("experience", v)}
              />
            </>
          )}

          {sectionKey === "contact" && (
            <>
              <Field label="Title" value={section.title} onChange={(v) => patch("title", v)} />
              <Field label="Description" textarea value={section.desc} onChange={(v) => patch("desc", v)} />
              <Field label="Email" value={section.email} onChange={(v) => patch("email", v)} />
              <Field label="Phone" value={section.phone} onChange={(v) => patch("phone", v)} />
              <ObjectArray
                label="Social"
                items={section.social}
                fields={[
                  { key: "name", label: "Name" },
                  { key: "link", label: "Link" },
                ]}
                makeEmpty={() => ({ name: "", link: "" })}
                onChange={(v) => patch("social", v)}
              />
            </>
          )}

          {sectionKey === "footer" && (
            <>
              <Field label="Footer Text" value={section.text} onChange={(v) => patch("text", v)} />
              <ObjectArray
                label="Links"
                items={section.links}
                fields={[
                  { key: "name", label: "Name" },
                  { key: "link", label: "Link" },
                ]}
                makeEmpty={() => ({ name: "", link: "" })}
                onChange={(v) => patch("links", v)}
              />
            </>
          )}
        </div>

        <div className="pe-foot">
          <button className="pe-btn pe-btn-ghost" onClick={onClose} disabled={saving}>
            Cancel
          </button>
          <button
            className="pe-btn pe-btn-primary"
            onClick={() => onSave(draft)}
            disabled={saving}
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
