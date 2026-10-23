---
tags: [susu, help]
cssclasses: [susu-notes]
---
# How SUSU V1 Works

[[00 START HERE|Back to start]]

## Get started on a phone

1. Extract the provided `.zip` into a folder on your phone (or a computer then transfer the folder).
2. Open **Obsidian**, create/open a vault, and select the extracted folder as a vault where your phone's Obsidian app supports this. Alternatively copy the `.md` pages into an existing vault. Android supports picking a local folder; on iPhone/iPad use the Obsidian-supported local or iCloud Drive vault location.
3. Open `00 START HERE.md` in Obsidian for the user guide and the four note pages.
4. From your phone's **Files** app/file manager, find `SUSU.html`, then choose **Open with** an actual browser. Some mobile file previewers show HTML without running its JavaScript; use a full browser instead. On desktop, double-click `SUSU.html` and choose a browser if prompted.
5. Go to **Setup**, enter your real member names, currency, contribution amount, cadence and first payout date; save.
6. Use **Home** for collection. Open **History** to download a JSON backup after important changes.

**Obsidian-only limitation:** A fully interactive HTML/CSS/JavaScript app cannot execute directly in a normal Obsidian Markdown note with no plugin. Obsidian sanitizes scripts in Markdown. Thus the four `.md` files are companion notes; the operational interface is `SUSU.html` running in a browser. No Dataview or plugins are required.

## About the money

- Everyone pays the same fixed amount during each round, **including the round's recipient**.
- The full pot equals `number of members × amount per person`.
- Ticking payments means the banker is recording receipt; it does not transfer or verify funds.
- Payout can only be marked complete once **all members** are confirmed for the round.
- Payout dates are scheduled, not auto-triggered. The app stays on the current round until the banker records the payout.
- A contribution can be reversed before the payout; reversals are logged.
- Monthly dates stick to the same day-of-month where possible. When that day does not exist (e.g. February 31st), the date is the month's last day.

## Backup and data safety

- The HTML app runs **without an internet connection** and does not use external libraries or services.
- Live data is stored via your browser's `localStorage`, if the browser permits it for local HTML files. Some mobile platforms block or eventually remove this storage. The app will display an auto-save warning if storage fails, but may not detect future eviction.
- **JSON backup:** The full restore point. Store multiple dated copies somewhere secure, outside the browser. To restore, open **History → Restore JSON backup**.
- **CSV:** Spreadsheet import of the event ledger (who, amount, action, timestamp, cycle, scheduled date).
- **Markdown snapshot:** Download a combined Markdown record for Obsidian reference. This does not modify your vault notes in place.
- **Never rely on screenshots or checkbox notes alone** as the only accounting source. Reconcile with actual account/payment receipts.
- No multi-device auto-sync, identity verification, or payment processing in V1. Hand over the JSON backup if you change the banker device.

## Currency

USD, EUR and GHS support two decimals; CFA uses XOF (West African CFA franc) or XAF (Central African CFA franc), both displayed without decimal fractions. **XOF and XAF are different currencies, not interchangeable settings.**

## Customize the Markdown notes

The optional `.obsidian/snippets/susu-notes.css` styles these `.md` pages. In Obsidian, enable it manually under **Settings → Appearance → CSS snippets** if you want the green accent. This is **not a plugin** and is not needed for the HTML dashboard to work.

## What V1 does not do

There is no bank integration, mobile money integration, online group membership, interest calculation, penalties, late fees, payment links, or automated reconciliation. V1 is intentionally just **a lightweight banker's private rotation ledger**.