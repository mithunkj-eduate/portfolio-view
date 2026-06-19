// Injected once by the profile that enables edit mode.
export const EDIT_CSS = `
  .edit-wrap:hover { outline: 2px dashed rgba(124,109,240,.6); outline-offset: -2px; }

  .edit-fab {
    position: absolute; top: 84px; right: 24px; z-index: 500;
    display: inline-flex; align-items: center; gap: 6px;
    padding: 8px 16px; border-radius: 999px;
    background: #7c6df0; color: #fff; border: none;
    font-size: 12px; font-weight: 700; letter-spacing: .04em;
    cursor: pointer; box-shadow: 0 6px 24px rgba(124,109,240,.45);
    transition: transform .15s, background .15s;
  }
  .edit-fab:hover { background: #6a59e8; transform: translateY(-1px); }

  /* ── Modal ── */
  .pe-overlay {
    position: fixed; inset: 0; z-index: 100000;
    background: rgba(5,5,12,.7); backdrop-filter: blur(4px);
    display: flex; align-items: flex-start; justify-content: center;
    overflow-y: auto; padding: 32px 16px; cursor: auto;
  }
  .pe-modal {
    width: 100%; max-width: 720px; background: #fff; color: #1a1a2e;
    border-radius: 16px; box-shadow: 0 30px 80px rgba(0,0,0,.5);
    font-family: system-ui, sans-serif;
  }
  .pe-head {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 22px; border-bottom: 1px solid #eee; position: sticky; top: 0;
    background: #fff; border-radius: 16px 16px 0 0;
  }
  .pe-head h3 { margin: 0; font-size: 1.1rem; font-weight: 800; }
  .pe-close {
    width: 34px; height: 34px; border-radius: 999px; border: none;
    background: #f1f1f5; color: #555; font-size: 18px; cursor: pointer;
  }
  .pe-close:hover { background: #ffe2e2; color: #d33; }
  .pe-body { padding: 22px; display: flex; flex-direction: column; gap: 18px; }
  .pe-foot {
    display: flex; justify-content: flex-end; gap: 12px;
    padding: 16px 22px; border-top: 1px solid #eee;
  }

  .pe-field { display: flex; flex-direction: column; gap: 6px; }
  .pe-field > label { font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: #666; }
  .pe-input, .pe-textarea {
    width: 100%; border: 1px solid #d6d6e0; border-radius: 8px;
    padding: 9px 12px; font-size: .9rem; font-family: inherit; color: #1a1a2e;
  }
  .pe-input:focus, .pe-textarea:focus { outline: 2px solid #7c6df0; border-color: transparent; }
  .pe-textarea { min-height: 80px; resize: vertical; }

  .pe-group { border: 1px solid #e6e6ee; border-radius: 12px; padding: 14px; }
  .pe-group-title { font-size: .8rem; font-weight: 800; margin-bottom: 10px; color: #444; }
  .pe-card { background: #f7f7fb; border: 1px solid #ececf4; border-radius: 10px; padding: 12px; margin-bottom: 10px; }
  .pe-row { display: flex; gap: 8px; align-items: center; margin-bottom: 8px; }

  .pe-btn {
    padding: 9px 18px; border-radius: 8px; border: none; cursor: pointer;
    font-size: .85rem; font-weight: 700;
  }
  .pe-btn-primary { background: #16a34a; color: #fff; }
  .pe-btn-primary:disabled { opacity: .6; cursor: not-allowed; }
  .pe-btn-ghost { background: #f1f1f5; color: #444; }
  .pe-btn-add { background: #eceaff; color: #5a4ad1; font-size: .8rem; padding: 7px 14px; border-radius: 8px; border: none; cursor: pointer; font-weight: 700; }
  .pe-btn-del { background: transparent; border: none; color: #d33; cursor: pointer; font-size: 1rem; padding: 4px 8px; }

  /* Toast */
  .pe-toast {
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    z-index: 100001; background: rgba(0,0,0,.88); color: #fff;
    padding: 11px 22px; border-radius: 999px; font-size: .85rem; font-weight: 600;
    font-family: system-ui, sans-serif; box-shadow: 0 12px 40px rgba(0,0,0,.4);
  }
`;
