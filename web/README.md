# Web UI — SDK-agnostic chat for the durable support agent

A single-page vanilla-JS chat (no framework, no build step) that drives whichever gateway
implements [`../API_CONTRACT.md`](../API_CONTRACT.md).

## Point it at a backend

Edit `config.js`:

```js
window.BACKEND_URL = 'http://localhost:8000';  // python gateway (or the stub)
// window.BACKEND_URL = 'http://localhost:8001';  // typescript gateway
```

## Run it

Any static file server works:

```bash
cd web
python3 -m http.server 5173
# open http://localhost:5173
```

## Develop against the stub (no Temporal, no LLM, no DB)

`stub-server.mjs` is a dependency-free Node server that implements the API contract with
canned behavior — it exists so the UI can be built/tested alone, and it doubles as the
reference the SDK gateways are built against in Phase 1.

```bash
node stub-server.mjs        # listens on :8000
```

- Any message → echo reply after a short "thinking" delay.
- A message containing **"buy"** or **"purchase"** → the `awaiting_approval` flow
  (approval card with Approve/Reject; the outcome lands via transcript polling).

## What to notice (for demo purposes)

- The header shows the **workflow ID** — it *is* the conversation ID. Paste it into the
  Temporal UI to watch the loop's event history live.
- The approval card is the **HITL beat**: while it's showing, the workflow is durably parked
  on `wait_condition()`, holding zero resources.
