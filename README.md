# SUSU — The Circle

**A mobile-first, offline-first tracker for rotating savings circles.**

Built around *susu*, a community savings practice: members contribute the same amount each period, and the pooled contribution goes to a different person in an agreed rotation. One designated banker records what actually arrived and confirms each payout.

> **V1 prototype:** SUSU is a tracking and scheduling tool. It does not hold funds, connect to bank accounts, make transfers, validate incoming payments, or synchronize across participants' devices.

_Screenshots are included in the downloadable portfolio package; the application itself is available in `index.html`._

## Features

| Area | What it does |
| --- | --- |
| **Home** | See the current recipient, total pot, amounts received/remaining, and confirm contributions. Record a payout after all payments are confirmed. |
| **Rotation** | See each recipient in order, with scheduled payout dates and status. |
| **History** | Review contribution/payout events, reversals, archived cycles, and export CSV/JSON/Markdown snapshots. |
| **Setup** | Set members and their order, per-person amount, start date, frequency, and currency; reset the schedule when the membership/order changes. |

- **Currencies:** USD, EUR, GHS, CFA franc XOF, and CFA franc XAF.
- **Cadences:** weekly, biweekly (every 14 days), and calendar-monthly.
- **Themes:** light green + white, or deep green + near-black.
- **Dependencies:** none. Pure HTML, CSS, and JavaScript. No framework, build step, backend, CDN, or Obsidian plugin.
- **Device:** mobile-first responsive interface; also works in desktop browsers.



## Try it

**In a web browser:** Open [`index.html`](index.html) or visit the GitHub Pages demo.

**As an offline file:** Download the project, then open `index.html` in a browser. On certain mobile browsers, local-file storage is restricted or unreliable; the hosted version tends to behave more consistently on a given device.

**Alongside Obsidian:** The [`obsidian-vault/`](obsidian-vault/) folder contains a complete example vault, including `SUSU.html` and notes for Home, Rotation, History, and Setup. The active app runs in a browser; its Markdown notes are explanatory companions, not synchronized views. Obsidian's Markdown renderer cannot execute embedded JavaScript without additional tooling.

Start with sample members **Person A–E**, USD $20 per person per round, weekly. Configure your own details in **Setup**.

## Data and privacy

- Live data is written to the **current browser's localStorage**. Each browser, device, and web origin is separate.
- Publishing on GitHub Pages does **not** make SUSU a shared multi-user database. Other visitors see their own local example state; they cannot view the banker's records from your device.
- Clearing site data, opening in a different browser, using private browsing, switching from a local file to GitHub Pages, or changing devices may result in a separate or empty local ledger.
- Use **History → Download JSON backup** after recording real transactions, before switching devices, and periodically during a cycle. To move records, use **Restore JSON backup**. Keep backups in a private, secure location.
- LocalStorage is **not encrypted storage**. Anyone with access to your unlocked browser/device may be able to read its saved ledger. Do not enter sensitive banking information.
- This application has no online user accounts and no payment processing.

**Never commit real names with financial activity, private JSON backups, or transaction histories to a public GitHub repository.** The screenshots shipped here use fictional sample members.

## Project structure

```text
susu-the-circle/
├── index.html                      # Static web app / GitHub Pages entry
├── obsidian-vault/                 # Independent, offline vault distribution
│   ├── SUSU.html
│   ├── 00 START HERE.md
│   ├── 01 Home.md
│   ├── 02 Rotation.md
│   ├── 03 History.md
│   ├── 04 Setup.md
│   └── 05 How It Works.md
├── portfolio/
│   ├── CASE_STUDY.md
│   ├── SusuProjectCard.jsx         # Optional React/Vite portfolio component
│   ├── SusuProjectCard.css          # Available in the downloadable package
│   └── public/projects/susu/       # Available in the downloadable package
└── README.md
```

## Deploy with GitHub Pages

1. Create a new **public GitHub repository**, for example `susu-the-circle`.
2. Upload this repo's **contents** to the repository root. Ensure `index.html` sits at the root, not inside an extra nested folder.
3. Open repository **Settings → Pages → Build and deployment**.
4. Set **Source** to **Deploy from a branch**, choose `main`, folder `/(root)`, and save.
5. When deployment finishes, GitHub provides the public URL. Add that real URL to your repository's About section and portfolio entry.

No build command or API credentials are required.


## Design decisions and limits

1. **One banker:** no multi-user accounts or synchronization, avoiding a server and keeping the prototype easy to distribute.
2. **Offline-first:** app functionality requires no network. Data portability is handled through backups rather than automatic sync.
3. **Financial clarity:** the collector also contributes to their own round; full pot = contribution per person × member count.
4. **Rotation integrity:** changes to payment rules or member order begin a new cycle, with recorded history archived.
5. **Explicit confirmation:** contribution checkboxes and payout confirmation are manual records, not verified bank receipts.

## Development

**V1** — first functioning prototype, with four-section dashboard, mobile design, two themes, schedule engine, manual contribution and payout workflow, history, and import/export.

Product direction: **Vaultborn Labs / Jefferson Sallah**. Developed through an AI-assisted prototyping workflow.

**License:** No reuse license has been selected or granted yet. Public GitHub visibility alone is not an open-source license. The project owner can choose one before inviting external contributions or redistribution.
