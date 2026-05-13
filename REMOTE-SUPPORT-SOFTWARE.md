# Remote support software (cost-focused)

This document summarizes **zero-software-cost** options for delivering **paid** remote IT support. It is for internal planning and customer-facing transparency—not legal advice. Always read each vendor’s **current terms of use** before using a tool commercially.

## Important distinction

| Category | Typical rule |
|----------|----------------|
| **“Free for personal use”** (e.g. some TeamViewer / AnyDesk tiers) | Often **not** licensed for paid commercial IT services. Misuse can mean account termination or compliance risk. |
| **Free for commercial use** or **self-hosted open source** | Generally safer for a **paid** support business, provided you comply with the license and your own policies. |

## Comparison table

| Tool | Software cost | Best for | Commercial / paid-support notes |
|------|---------------|----------|----------------------------------|
| **Windows Quick Assist** | $0 | **Windows → Windows** remote help | Built into Windows 10/11; Microsoft-backed. Strong default for PC-heavy support. |
| **Google Chrome Remote Desktop** | $0 | **Cross-platform** (Windows, macOS, Linux, ChromeOS) | Requires Google accounts and Chrome (or supported browser). Review Google’s terms for your use case. |
| **RustDesk** | $0 (open source) | Full control, branding, audit posture | **Self-host** the ID / relay stack for a serious paid operation; public relay policies have changed over time—verify current docs. |
| **MeshCentral** | $0 (open source) | Self-hosted remote management, agents, web portal | You run the server; more setup, high flexibility. |
| **DWService** | $0 (open source) | Browser-based / agent options when self-hosted | Often self-hosted for privacy and reliability. |
| **TeamViewer / AnyDesk (free tiers)** | $0 tier exists | Quick tests | **Risky for paid IT support** if the free tier is personal-only; use a proper commercial license or a different tool. |

## Suggested stacks by scenario

### Mostly Windows customers

1. **Primary:** Windows Quick Assist  
2. **Fallback:** Chrome Remote Desktop or a self-hosted stack if Quick Assist is blocked by policy.

### Windows + Mac + mixed

1. **Primary:** Chrome Remote Desktop (simplest shared baseline), **or**  
2. **Primary:** Self-hosted **RustDesk** or **MeshCentral** if you want one controlled platform.

### You want one platform under your control

- Deploy **MeshCentral** or **RustDesk** (self-hosted).  
- Software remains **$0**; you may still pay for **hosting** (VPS, domain, TLS)—or use a free-tier cloud account if that fits your risk tolerance.

## Related $0 or low-fixed-cost pieces

| Piece | Role |
|-------|------|
| **Stripe** | Payments (per-transaction fees; no mandatory monthly for basic checkout / Payment Links). |
| **GitHub Pages** (or similar static host) | Host this marketing site for **$0** on a public repo’s Pages URL or custom domain. |
| **Email** | Ticketing and receipts via a standard mailbox or provider free tier (within limits). |

## Security practices (brief)

- Only use **remote tools you explicitly name** in session instructions—never ask customers to run unknown downloads.  
- Prefer **least privilege**: view-only vs full control when possible; narrate sensitive steps.  
- Never collect passwords over **insecure** channels (e.g. plain email). Use your remote tool’s secure flows or a one-time secret channel you document.

## Keeping this file current

Tooling, relay policies, and vendor terms change. Re-validate this table **before** publishing guarantees to customers or updating your **Terms of Service**.
