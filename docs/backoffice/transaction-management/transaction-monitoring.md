---
title: Transaction Monitoring
sidebar_label: Transaction Monitoring
---

# Transaction Monitoring

The **Transaction Monitoring** module allows authorized users to review alerts generated based on predefined risk scenarios.  
These alerts help identify suspicious customer activity, unusual patterns, or transactions requiring enhanced scrutiny.

---

## 🖼️ Module Overview

![Transaction Monitoring](/img/tms-list.png)

---

## 📌 How Alerts Are Generated

Alerts are triggered automatically when customer transactions match one or more predefined monitoring scenarios.  
Typical alert triggers may include:

- High-value transactions  
- Rapid transaction frequency  
- Suspicious wallet loading or withdrawals  
- Cross-wallet unusual movements  
- Transactions from flagged geolocations  
- AML (Anti-Money Laundering) rule violations  
- Transactions exceeding customer risk rating limits

Each generated alert receives a unique **Alert ID**, visible in the detailed view.

---

## 👤 Customer Information

When an alert is opened, the system displays the complete customer profile including:

- Name  
- CNIC  
- Mobile Number  
- Email  
- Account Number  
- IBAN  
- Customer Risk Rating  
- Account Opening Date  
- Last Activity Date  

This allows the reviewer to validate identity, risk classification, and overall customer history.

---

## 🔄 Related Transactions

The **Related Transactions** tab provides a list of all transactions linked to the alert.  
This includes:

- Transaction date and time  
- Amount  
- Transaction type (Debit / Credit)  
- Channel or source  
- Reference numbers  
- Status  

These details help assess whether the activity is legitimate or indicative of suspicious behavior.

---

## 🚨 Alert Details

The **Alert Details** tab provides all rule-based information that triggered the alert, such as:

- Alert scenario name  
- Thresholds breached (amount, frequency, velocity, pattern)  
- System-generated comments  
- Any linked customer or transactional flags  

This section allows investigators to understand exactly **why** the alert was generated.

---

## 💬 Comments & Status

Reviewers or compliance officers can update the alert status and add comments.  
Common statuses include:

- Pending Review  
- Under Investigation  
- False Positive  
- Suspicious — Escalated  
- Closed  

Comments allow tracking of investigation steps, reviewer observations, or required follow-up actions.

---

## 🕘 Previous Alerts

The **Previous Alerts** tab displays all past alerts associated with the same customer, including:

- Alert ID  
- Date generated  
- Alert type  
- Status  
- Summary comments  

This helps reviewers identify repeat behavior, ongoing risk patterns, or previous compliance actions.

---

![Transaction Monitoring](/img/tms-detail.png)

## ⚠️ Important Notes

- Alerts are automatically generated based on system rules and risk engines.  
- Reviewers must analyze both current and historical transactions before marking an alert as safe or suspicious.  
- All updates are recorded with complete audit trails.  
- Only authorized compliance and monitoring personnel can view or manage alerts.

---
