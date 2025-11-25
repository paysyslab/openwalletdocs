---
title: GL Posting
---

# GL Posting

The **GL Posting** screen enables back-office users to manually create accounting entries using a voucher-based interface.  
This feature is used for **adjustments, reconciliations, settlements, corrections**, or any accounting activity that requires **direct posting** into Level 4 GL accounts.

---

# 📄 Voucher Creation

Each GL posting results in the creation of a **voucher**, which contains one or more debit and credit lines.

OpenWallet supports fully flexible, many-to-many voucher structures:

- Add **multiple debit** lines  
- Add **multiple credit** lines  
- Assign each line to **any Level 4 GL account**  
- Mix various accounts within a single voucher  

This flexibility allows creation of complex accounting entries including:

- Settlement adjustments  
- Clearing entries  
- Reversals  
- Accruals  
- Manual corrections  

---

# ⚖️ Balanced Posting Requirement

To maintain accounting accuracy and comply with double-entry principles, the system enforces strict balancing requirements:

### ✔ **Total Debit = Total Credit**

A voucher cannot be saved or posted until both sides match.

OpenWallet automatically:

- Validates total debit vs total credit  
- Prevents posting if the voucher is unbalanced  
- Highlights discrepancies for users  

This ensures clean, accurate, and auditable postings every time.

---

# 🧾 GL Posting Entry Fields

When adding a debit or credit line, users must provide the following information:

### **1. GL Account (Level 4)**  
The specific posting-level account where the amount will be posted.

### **2. Debit Amount or Credit Amount**  
Only one side is allowed per line.

### **3. Narration / Description**  
Used to explain the purpose of the entry.

### **4. Reference Number (Optional)**  
Allows linking to documents, reconciliation IDs, or external references.

### **5. Posting Date**  
The effective posting date for the transaction.

### **6. Purpose**  
The effective posting date for the transaction.

### **7. Voucher No.**  
The system generated voucher number.

### **8. Voucher Date**  
The system generated voucher date when it is created

Users may add **as many rows as needed** to complete the transaction.

---

# 📥 Final Posting

Once the voucher is balanced and submitted:

- The system posts the entries directly into the selected GL accounts  
- A **unique voucher number** is automatically generated  
- All postings are reflected instantly in:  
  - Account balances  
  - Trial balance  
  - Ledger reports  
  - Financial statements  

This ensures every manual posting remains **accurate, traceable, and fully auditable** across the core banking system.

![GL Posting Screen](/img/add-gl-posting.png)
