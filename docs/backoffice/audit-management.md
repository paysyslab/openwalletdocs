---
title: Audit Log
sidebar_label: Audit Log
---

# Audit Log

The **Audit Log** module records and displays all activities performed across the back-office system.  
It provides full traceability of user actions, API interactions, and module events to support security, compliance, and operational monitoring.

---

## 🖼️ Module Overview

![Audit Log](/img/audit-list.png)

---

## 📋 Audit Log Listing

The main audit log table displays a complete activity history, including:

- **Activity Date & Time**  
- **Module Name**  
- **Action Type** (Info, Update, Create, Delete, Block, Unblock, etc.)  
- **Request Body**  
- **Response Body**  
- **Actions** (View Details)

This provides a centralized and chronological view of all system operations.

---
![Audit Log](/img/audit-detail.png)

## 🔎 Search & Filters

Every column in the audit log supports inline filtering:

- Filter by module (e.g., CDD, EDD, Call Center, CRM, Transaction Monitoring)  
- Filter by action type  
- Filter by date and time  
- Search specific keywords within request or response body  

These features help administrators quickly locate specific logs for investigation or review.

---

## 🧾 Pagination

The module supports large log volumes with full pagination controls:

- Navigate pages  
- Jump to specific page numbers  
- View total number of pages and audit entries  

This ensures efficient browsing even for high-volume environments.

---

## 📄 Log Details View

Each audit entry includes an **Actions** button that opens a detailed view of the log.

The detailed log typically displays:

### Request Information
- Full API endpoint  
- Payload sent to backend  
- Input parameters  
- Headers (if applicable)

### Response Information
- Response body returned by backend  
- Success or error codes  
- Error messages (if any)

### System Metadata
- Timestamp  
- Module name  
- Request origin (user, system, scheduled job, etc.)

This level of detail supports troubleshooting, forensic analysis, and audit compliance.

---

## 📌 Use Cases for Audit Logs

The audit module helps administrators:

- Track changes made by back-office users  
- Monitor activity on sensitive modules (CDD, EDD, Call Center, CRM)  
- Identify suspicious or unauthorized access  
- Debug API failures or system errors  
- Provide evidence for compliance or regulatory inspections  

---

## ⚠️ Important Notes

- Audit logs cannot be modified or deleted to maintain data integrity.  
- Only authorized users can view detailed logs.  
- All logs are stored with strict timestamp accuracy.  
- Download/export functionality may be available depending on system configuration.  

---
