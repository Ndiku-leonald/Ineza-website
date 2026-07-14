# Security and privacy review

Threats considered: HTML/script injection, clickjacking, accidental secret exposure, misleading beneficiary representation and unsafe future form or payment integration.

Controls: React output encoding; no `dangerouslySetInnerHTML`; no sensitive-data collection; no payment handler or credentials; local static media; `.env` ignored. Add hosting-level CSP, frame, MIME, referrer and permissions headers during preview deployment.

Production dependency review on 14 July 2026 reported zero known vulnerabilities.

Before adding forms, connect an approved delivery service with server-side validation, privacy-aware rate limiting, origin controls, retention rules and an incident process. Run dependency audit before each release. No form or payment endpoint exists in this static version.
