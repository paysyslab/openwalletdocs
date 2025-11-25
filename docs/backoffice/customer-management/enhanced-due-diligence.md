---
title: EDD 
sidebar_label: EDD
---

# Enhanced Due Diligence

The **Enhanced Due Diligence (EDD)** module displays customers whose **risk rating has escalated** based on the latest AML/Risk Engine evaluation.  
EDD is initiated when the customer’s risk score increases significantly (e.g., Low → High or Medium → High), requiring additional review, documentation, and compliance intervention.

---

## 🖼️ Module Overview

![EDD Frequency Configuration](/img/edd.png)

---

## 📌 Purpose of EDD

EDD is triggered when the system detects:

- Sudden increase in customer risk score  
- Risk transitions such as **LR → HR** or **MR → HR**  
- AML red flags  
- Suspicious or unusual transaction patterns  
- Potential KYC/CIP issues  

The module helps the compliance team identify customers requiring deeper investigation.

---

## 📋 EDD Customer Listing

The EDD list displays all customers who have been escalated for enhanced due diligence.  
Each record includes:

- **Customer CNIC**  
- **Customer Name**  
- **Account Number**  
- **Previous Risk Score**  
- **Current Risk Score**  
- **Date & Time** of score change  
- **Status** (Blocked Account / Closed Alert / Active)

This provides a complete view of all customers who require further compliance handling.

---

## 🔎 Search & Filters

Each column contains a search box for quick filtering by:

- CNIC  
- Name  
- Account Number  
- Previous Risk Score  
- Current Risk Score  
- Date  

There is also a **Status dropdown** to filter:

- Blocked Account  
- Closed Alert  
- Active Alerts  
- Show All  

This helps compliance analysts quickly locate specific customers or risk cases.

---

## 🔄 Risk Score Progression

The table allows compliance officers to view how a customer’s risk level has changed:

- **Previous Risk Score** – before the latest AML evaluation  
- **Current Risk Score** – after the AML job run  

A change such as:

- **LR → HR**  
- **MR → HR**  

Indicates a **high-risk escalation**, automatically placing the customer in the EDD queue.

---

## 🛑 Status Indicators

The **Status** column helps determine what action has been taken:

### Blocked Account  
Customer has been temporarily blocked due to severe risk escalation.

### Closed Alert  
Compliance teams completed review and resolved the risk case.

### Active / Pending  
The customer is still under EDD review.

---

## 📝 Manual Review & EDD Actions

For customers listed in the EDD module, compliance agents may:

- Request updated KYC documentation  
- Validate customer identity again  
- Conduct source of funds checks  
- Review transaction history for red flags  
- Contact the customer for clarification  
- Decide whether to block/unblock account  
- Close alert after proper documentation  

All actions are logged for regulatory compliance.

---

## ⚠️ Important Notes

- EDD is only triggered when the risk score increases significantly.  
- All escalations are automatically detected by the AML/Risk Engine.  
- Manual review is mandatory for EDD cases before closure.  
- Blocking/unblocking must follow internal SOPs and AML guidelines.  
- All updates are recorded with full audit trails.

---
