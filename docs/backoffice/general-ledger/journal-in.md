---
title: Journal In
---

# Journal In

The **Journal In** screen is used to record manual incoming journal entries such as **adjustments, settlements, corrections, and accruals**.  
Every Journal In action generates a **voucher**, ensuring complete traceability and audit compliance.

---

# 🧾 Fields in Journal In

When creating a Journal In entry, the following fields are required:

---

### **1. Voucher Date (System Generated)**  
Automatically generated when the entry is created.  
This ensures proper voucher numbering and sequencing.

---

### **2. Posting Date**  
Defines the date on which the financial impact should be applied.

---

### **3. GL Account (Level 4)**  
The specific **Level 4** GL account where the journal amount will be posted.

---

### **4. Amount**  
The monetary value of the journal entry.

---

### **5. Supporting Document**  
Upload functionality for attaching proof or related documents.  
This supports reconciliations and audit verifications.

---

### **6. Narration**  
A short description explaining the purpose of the journal entry.

---

# 🔄 Counter Account Handling

For all Journal In entries, the system uses **one predefined, static counter account**.  
The user only selects the main GL; the system automatically handles the opposite side.

This ensures:

- Consistent double-entry accounting  
- Reduced manual posting errors  
- Faster data entry for adjustments and reconciliations  

---

## 📝 Example (How Posting Works)

1. User selects a Level 4 GL account and enters the amount  
2. The system automatically posts the opposite entry to the predefined counter GL  
3. The voucher is automatically balanced — no manual debit/credit selection is required  

---

# 📤 Final Posting

When the Journal In entry is saved:

- A **voucher** is generated  
- Both the main and counter entries are **posted instantly**  
- Ledger balances update in real time  
- Reporting and reconciliation modules reflect the new posting  

This ensures all Journal In transactions remain **accurate, balanced, and fully auditable**.

![Journal In Screen](/img/add-journal-in.png)
