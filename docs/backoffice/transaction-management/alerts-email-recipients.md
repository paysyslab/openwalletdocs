---
title: Alerts Email Recipients
sidebar_label: Alerts Email Recipients
---

# Alerts Email Recipients

The **Alerts Email Recipients** module manages the list of people who are emailed whenever [Transaction Monitoring](/docs/backoffice/transaction-management/transaction-monitoring) raises an alert. Typically these are the institution's fraud, risk and compliance contacts, who need to know about suspicious activity as soon as it is detected.

---

## ✉️ Adding a Recipient

For each recipient, enter:

- **Email:** the address that will receive alert notifications.
- **Description:** a short note on who the recipient is, e.g. *Fraud Team* or *Compliance Officer*.
- **Status:** **Active** recipients receive notifications. Set a recipient to inactive to pause their notifications without deleting them.

---

## 🔔 How Notifications Work

1. A customer's transactions match an active scenario in [Configurable TMS Scenarios](/docs/backoffice/configuration-management/configurable-tms-scenarios).
2. Transaction Monitoring raises an alert.
3. Every **active** recipient on this list receives an email about the alert, so they can review it promptly.

---

## 📝 Notes

- Keep the list up to date when team members change, so that alerts always reach the right people.
- Adding, changing or removing recipients is recorded in the [Audit Log](/docs/backoffice/audit-management).
