---
aliases: [SUSU Dashboard, The Circle]
tags: [susu, savings, circle, banker]
cssclasses: [susu-notes]
---

# 🟢 SUSU · THE CIRCLE

> [!success] Your circle, your records.
> Private, offline-first rotating savings tracker. **One banker confirms contributions and pays the current collector.** No account. No subscription. No Obsidian plugins.

## Open the dashboard

### 🟢 Launch SUSU

**[[SUSU.html|📲 Tap here — SUSU Dashboard]]**

The dashboard is the **`SUSU.html`** file in this vault. The link above points to the file, but **Obsidian may open HTML as text instead of sending it to your phone’s browser.** To show the file in Obsidian, enable **Settings → Files and links → Show all file types** if necessary.

**Reliable phone launch (no plugins or internet):** Open your phone’s **Files / File Manager** app → open the unzipped `SUSU_V1_Vault` folder → tap **SUSU.html** → choose a browser if offered. Keep using the same browser so your saved records stay in the same browser storage. For quick access, create a file shortcut or bookmark where your phone/browser supports one.

> [!tip] Want a direct browser-launch link in this note?
> On some devices, you can add a `file:///` link to the **actual absolute path** of `SUSU.html`. It must be set up **separately on each phone**; it cannot be prefilled in a ZIP that people install in different folders. Android/iOS file access rules may prevent such links from opening. For instance, **only if your file really lives at that path**, try `[Open SUSU in browser](<file:///storage/emulated/0/Documents/SUSU_V1_Vault/SUSU.html>)` in your own copy of this note. If that does not work, use Files / File Manager instead.

The HTML contains all the CSS and JavaScript. It needs no extra files, hosting, or internet.

> [!important] Why isn't the live dashboard inside this Markdown note?
> Obsidian blocks JavaScript in ordinary `.md` files for security. Without a plugin or an internet-hosted page, a fully interactive native Markdown dashboard is **not possible**. The four notes below work as readable sections inside Obsidian; **SUSU.html** is the live working dashboard. The notes do not update themselves when the HTML app changes.

## Sections

| Page | What it does in the live dashboard |
|:--|:--|
| [[01 Home]] | Check current collector, pot and confirmed contributions |
| [[02 Rotation]] | Review the complete recipient order and payout dates |
| [[03 History]] | See the activity ledger, archives, and export files |
| [[04 Setup]] | Change names, currency, amounts and schedule |

## Five-person example

- **Five members** all contribute every round, including the recipient.
- **US$20** each → **US$100 pot** every round.
- **Weekly** rotation → each person collects once during a **5-week cycle**.
- **Biweekly** rotation → five collection dates, each 14 days apart.
- **Monthly** rotation → five calendar-month collection dates.

**Default inside app:** Person A to Person E, USD, $20 each, weekly, first payout date set to the first day you open it. Change these in **Setup** before recording real contributions.

## Running a round

1. Open **Home** in `SUSU.html`.
2. Confirm *actual* receipt of each contribution using **Mark paid**.
3. Once everyone is confirmed, verify the money and tap **Confirm payout**.
4. The app advances to the next collector. The previous actions remain visible in **History**.
5. After the final payout, tap **Start next cycle**.

> [!warning] Backup before leaving your phone
> The HTML app saves to the **browser's local storage**, **not** directly into this Obsidian vault. Browsers may isolate or clear local-file storage, especially on mobile. **Use History → JSON backup** after contributions and payouts. Keep the file in a safe place (ideally alongside your vault); use **Restore JSON backup** if you need to move devices. CSV is for spreadsheet records. Markdown snapshot is for readable Obsidian notes, not for restoring the app.

[[05 How It Works|Mobile setup, limitations, and instructions]]