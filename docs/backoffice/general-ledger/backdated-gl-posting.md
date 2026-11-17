---
title: Backdated GL Posting
sidebar_label: Backdated GL Posting
---

# Backdated GL Posting

**Backdated GL Posting** lets an institution post general ledger entries with a posting date in the past. It is mainly used at **year-end**: after the financial year has ended, finance teams often need to record closing adjustments, accruals or corrections against the last day of the year, even though they are entered some days later.

## Why It Is Needed

Normally the system only accepts postings for the current business date, so that closed periods cannot be changed. At year-end, however, entries such as the following must still be dated in the closed year:

- Year-end closing and adjustment entries
- Accruals and provisions
- Corrections identified during the year-end review or audit

Backdated GL Posting temporarily allows these entries to be posted to the correct date.

## How It Works

1. **Enable the feature.** An authorized user switches on Backdated GL Posting when year-end postings are due.
2. **Post the entries.** Finance users create GL postings in the usual way (see [GL Posting](./gl-posting)), selecting the required past **Posting Date**, for example the last day of the financial year.
3. **Disable the feature.** Once all backdated postings are complete, the institution switches Backdated GL Posting off again, so that no further entries can be posted to past dates.

## Best Practices

- Enable the feature only for the time needed to complete year-end postings, then disable it straight away.
- Limit access to a small number of authorized finance users.
- Review backdated entries before the year-end financial statements are finalized.

## Notes

- Backdated postings follow the same rules as regular GL postings, including balanced debits and credits and maker-checker approval.
- Enabling, disabling and every backdated posting are recorded in the [Audit Log](/docs/backoffice/audit-management).
