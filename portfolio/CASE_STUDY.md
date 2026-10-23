# SUSU — The Circle

**Category:** Financial coordination / community tools  
**Project type:** Mobile-first, offline-first web application  
**Role:** Product concept, feature design, workflow design, prototype direction; AI-assisted frontend implementation  
**Stack:** HTML5 · CSS3 · Vanilla JavaScript · LocalStorage · Markdown  
**Status:** V1 prototype

## One-sentence pitch

SUSU makes rotating savings circles easier to organize by giving one designated banker a clear view of contributions, payout order, due dates, and a transparent event history—all without creating an account.

## The problem

A small group of friends or family pools a fixed contribution each week, every two weeks, or every month. Each period, one member takes the pot; the recipient rotates until everyone has had a turn. When records live across chat messages and memory, it's easy to lose track of what has been paid, whose turn is next, and which payouts have already happened.

## The solution

I designed **SUSU — The Circle**, a lean mobile-first dashboard for the person holding and distributing the contributions. It turns a simple social agreement into an organized workflow: define the members and payment amount, see the upcoming rotation, check contributions as they arrive, and confirm each completed payout.

## Four core screens

- **Home:** Current collector, expected pot, received and remaining amounts, member-by-member confirmations, payout action.
- **Rotation:** Entire scheduled collection order with dates and round status.
- **History:** Activity log, reversals, archived cycles, and downloadable CSV/JSON backups.
- **Setup:** Members and order, amount, currency, weekly/biweekly/monthly schedule, and light/dark themes.

## Engineering approach

The prototype is intentionally **one self-contained HTML file** with embedded CSS and JavaScript. It runs without libraries, a server, or internet access. Data lives in browser storage, while JSON backups provide portability. A companion Obsidian vault supplies instructions and readable pages without introducing plugin dependencies.

Scheduling supports seven-day, fourteen-day, and calendar-month intervals; any change to the member order or the payment rules starts a new cycle so prior events remain distinct.

## Decisions and tradeoffs

- **No backend:** less setup and easier offline access, but records are isolated to one browser and don't synchronize across members.
- **Single banker:** deliberately simple authority model for V1, rather than a premature multi-user app.
- **Manual confirmation:** clear accounting workflow without claiming to verify payments or move real funds.
- **Browser persistence:** fast and lightweight, but unsuitable as the only place to keep important records. Backups are essential.
- **HTML + Obsidian:** the functioning interface lives in the browser; Markdown notes inside the vault don't magically mirror live app data.

## What I learned

Building a product around an existing social behavior is a lesson in prioritization: make the core action obvious, reduce the steps needed for the person operating it, and expose important limits before adding more complexity.

## What comes next

V1 will be tested with real-world workflows using test/sample records first. Potential follow-ups include a stronger backup and restore UX, a printable statement for the circle, automated schedule reminders, and—only if user demand justifies it—a securely designed synchronized multi-member experience.

> **Prototype disclosure:** SUSU is a contribution and payout tracker, not a bank, money-transfer service, guaranteed recordkeeping service, or shared multi-user system. Do not enter account credentials or expose actual financial records publicly.

### Short portfolio description

An offline-first rotating savings manager for family and community groups. Designed a mobile-first banker dashboard to track contributions, schedule payouts, archive cycles, and export records—all in a lightweight HTML/CSS/JavaScript application with optional Obsidian companion notes.

### Suggested tags

`Product design` · `Frontend` · `Vanilla JavaScript` · `Offline-first` · `LocalStorage` · `Mobile-first UI` · `Community tools`