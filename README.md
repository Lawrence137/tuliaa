# React + Vite

This repository is a frontend monorepo scaffold for the TULIA mental wellness platform (part of the TEP ecosystem). It contains three React + Vite apps (`apps/user`, `apps/counselor`, `apps/institution`) and shared UI / services under `shared/`.

This `README` collects prioritized recommendations, an actionable step-by-step plan to reach an MVP, and exact developer commands to run and test the work locally.

- **Note:** the repository currently contains frontend scaffolding only. Many production features (backend APIs, payments, secure video, encrypted notes, SSO, CI/CD) are planned but not yet implemented.

**Quick Links**
- **Workspace root:** `package.json` (npm workspaces) — apps run via `npm run dev:*`.
- **User app:** `apps/user`
- **Counselor app:** `apps/counselor`
- **Institution app:** `apps/institution`
- **Shared code:** `shared/` (components, services, utils)

**High-level goals (MVP)**
- Anonymous + authenticated user flows with TEP SSO integration.
- Booking + calendar and basic session lifecycle (book -> confirm -> join).
- Video/voice sessions POC using a hosted provider (Jitsi/Daily) for rapid launch.
- Basic payments (Stripe) for pay-per-session and counselor payouts (Stripe Connect).
- Partner dashboard with anonymous aggregate analytics.
- Minimum data protection baseline: HTTPS, encryption-at-rest strategy, consent UI.


---

**Quick Start — Local development**

From the repository root, install dependencies and run a single app.

```bash
# install dependencies for workspace
npm install

# run user app (Vite dev)
npm run dev:user

# run counselor or institution app in separate terminals
npm run dev:counselor
npm run dev:institution

# build all apps
npm run build
```

Open `http://localhost:5173` (or the port shown by Vite) for each app started.

---

**Recommended prioritized implementation plan**

The tasks below are ordered to produce a working MVP quickly and iteratively.

1) Shared HTTP client & config (high priority)
- Files: `shared/services/httpClient.js`, `config/api.config.js`
- Purpose: centralize API base URL, auth token handling, error handling, retries.
- Implementation notes: use `fetch` or `axios`. Add automatic token refresh hook integration.

2) Authentication & SSO (high priority)
- Files: `apps/user/src/context/AuthContext.jsx`, `shared/services/auth.api.js`
- Purpose: implement anonymous sessions and OIDC SSO integration for TEP. Provide `useAuth()` hook for components.
- Steps:
	- Prototype SSO with a dev Identity Provider (Keycloak or Auth0). Implement OIDC code flow with PKCE.
	- Add anonymous session flow: generate ephemeral client ID, create ephemeral session on backend.
	- Add `AuthContext` to wrap `App` and provide `user`, `login`, `logout`, `isAnonymous` properties.

3) Minimal backend prototype (parallel with auth)
- Folder: `backend/` (new)
- Tech: Node.js + Fastify (or Express / NestJS), Postgres for persistence.
- Minimal endpoints: `/auth` (login/refresh), `/booking`, `/sessions`, `/payments/intent`, `/analytics/summary`.
- Security: issue JWTs with short expiry and refresh tokens; ensure CORS is configured for dev.

4) Booking & calendar (high priority)
- Implement booking UI in `apps/user/src/pages/Booking` and calendar UI in `apps/counselor/src/pages/Calendar`.
- Backend: endpoints to create booking, provider availability, cancel, and webhook for status changes.

5) Payments MVP (high priority)
- Integrate Stripe for pay-per-session and subscriptions.
- Backend: implement Stripe webhook handler and payout flow using Stripe Connect.

6) Video & voice sessions (iterate)
- Start with hosted provider for POC:
	- Jitsi: embed iframe for quick POC.
	- Daily or Twilio Video: SDK for better control and token-based auth.
- Files: `apps/user/src/components/video-session/*`, `apps/counselor/src/components/video-session/*`.
- Security: generate ephemeral join tokens on server and limit session lifetime.

7) Secure notes & encryption
- Strategy: minimize PII. For counselor notes, store encrypted payloads on server.
- Option A (recommended for stronger privacy): client-side encryption using WebCrypto/libsodium with keys stored via KMS; server stores ciphertext only.

8) Partner dashboard & aggregated analytics
- `apps/institution/src/pages/Reports` should call aggregated endpoints that never return identifiable records.

9) 24/7 textline & AI assistant (phase 2)
- Architecture: managed SMS provider (Twilio) for textline; chat queue + human fallback.
- AI assistant: private LLM or hosted model with rate-limits, safety filters, and opt-in consent. Keep logs and label AI answers clearly.

10) Device pre-install & TEP wallet integration (phase 2)
- Wallet: implement `shared/services/wallet.api.js` and server-side token exchange.

---

**Concrete file-level checklist and snippets**

1. `shared/services/httpClient.js` (example sketch)

```js
// Example using fetch
const apiBase = process.env.API_BASE || 'http://localhost:4000'

async function request(path, opts = {}) {
	const url = `${apiBase}${path}`
	const res = await fetch(url, opts)
	if (!res.ok) {
		const err = await res.json().catch(() => ({}))
		throw err
	}
	return res.json().catch(() => null)
}

export default { request }
```

2. `config/api.config.js`

```js
export const API_BASE = process.env.VITE_API_BASE || 'http://localhost:4000'
```

3. `apps/user/src/context/AuthContext.jsx` (implementation notes)
- Provide `AuthProvider` that stores JWT in memory or secure cookie, exposes `login/logout`, and a `useAuth()` hook.

---

**Backend prototype steps**

Create a minimal server to support the frontend MVP:

```bash
mkdir backend && cd backend
npm init -y
npm install fastify fastify-cors fastify-jwt pg dotenv

# create server.js and .env with DB and JWT secrets
node server.js
```

Endpoints to implement first:
- `POST /auth/anonymous` -> create ephemeral user and return JWT
- `POST /auth/oidc/callback` -> exchange code for tokens (TEP SSO)
- `POST /booking` -> create booking
- `GET /sessions/:id` -> session metadata
- `POST /payments/create-intent` -> create Stripe payment intent

---

**Security & compliance baseline (must-haves before production)**
- Use HTTPS/TLS for all endpoints.
- Enforce RBAC: roles = anonymous, user, counselor, admin, partner.
- Client-side consent UI for data collection.
- Encrypt sensitive fields at rest; use KMS for key management (Konza Data Centre per product spec).
- Limit logs containing PII; store only necessary metadata for analytics.
- Implement breach response and DPA documentation for Kenya Data Protection Act compliance.

---

**Deployment & docker**
- Add `Dockerfile` per app (`apps/*/Dockerfile`) and a simple `docker-compose.yml` for local integration:

```yaml
version: '3.8'
services:
	backend:
		build: ./backend
		ports: ['4000:4000']
	user:
		build: ./apps/user
		ports: ['5173:5173']
```

For production, prepare Kubernetes manifests and secrets for KMS, DB credentials and SSO client secrets.

---

**Roadmap mapping to product spec (12 months)**
- Q1: MVP + SSO + therapist onboarding (implement shared client, auth, backend prototype, basic booking). 
- Q2: App/web release, Wallet integration, textline (payments + textline integration).
- Q3: Institutional dashboards (partner analytics + compliance features).
- Q4: AI emotional assistant, national rollout (LLM assistant + scaling + full compliance auditing).

---

**Checklist — immediate next actions (pick 2 to start)**
- [ ] Implement `shared/services/httpClient.js` and `config/api.config.js` (I can implement these now).
- [ ] Implement `apps/user/src/context/AuthContext.jsx` for anonymous + SSO flows.
- [ ] Scaffold `backend/` prototype with `/auth` and `/booking` endpoints.
- [ ] Add Stripe integration and a payments test page.
- [ ] Add Dockerfiles and example `docker-compose.yml`.

If you want, I can start by implementing the `httpClient` and `AuthContext` now and scaffold a minimal backend prototype next. Tell me which two items to start with and I’ll create the code and update the TODOs.

---

**Contact & ownership**
- When implementing features that touch PII or financial flows, assign a responsible owner who will manage compliance documentation and liaise with legal/security.

---

End of README — actionable and prioritized for the TULIA MVP.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
