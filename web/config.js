// Point the UI at whichever backend is running.
//   Python gateway:      http://localhost:8000
//   TypeScript gateway:  http://localhost:8001
//   Stub server (dev):   http://localhost:8000
window.BACKEND_URL = 'http://localhost:8000';

// Where the workflow-ID button links to (Temporal Web UI).
//   Local dev server:  http://localhost:8233/namespaces/default
//   Temporal Cloud:    https://cloud.temporal.io/namespaces/<namespace>.<account-id>
window.TEMPORAL_UI_BASE = 'http://localhost:8233/namespaces/default';
